import * as THREE from 'three';
import { RenderPipeline } from './RenderPipeline';
import { CameraRig, CameraPerspective } from '../camera/CameraRig';
import { LightingManager, EnvironmentMode } from '../lighting/LightingManager';
import { TextureAtlas } from '../terrain/TextureAtlas';
import { SurfaceManager } from '../terrain/SurfaceManager';
import { DungeonManager } from '../terrain/DungeonManager';
import { LibraryManager } from '../terrain/LibraryManager';
import { CharacterModel } from '../entities/CharacterModel';
import { CharacterController } from '../entities/CharacterController';
import { DarkFantasyNPCManager } from '../entities/DarkFantasyNPCs';
import { RetroHUD } from '../ui/RetroHUD';
import { SettingsModal } from '../ui/SettingsModal';
import { BookReaderModal } from '../ui/BookReaderModal';
import { TitleScreenModal } from '../ui/TitleScreenModal';
import { LibraryMusicManager } from '../audio/LibraryMusicManager';
import { InteractionRaycaster } from './InteractionRaycaster';
import { BookData } from '../lore/LibraryLoreGenerator';
import { SettingsManager, ParticleDensity } from './SettingsManager';
import { WorldManager, WorldSave } from './WorldManager';

export class Engine {
  public canvas: HTMLCanvasElement;
  public hudRoot: HTMLElement;

  public scene: THREE.Scene;
  public clock: THREE.Clock;
  public renderPipeline: RenderPipeline;
  public cameraRig: CameraRig;
  public lightingManager: LightingManager;
  public atlas: TextureAtlas;
  public settingsManager: SettingsManager;
  public worldManager: WorldManager;

  public surfaceManager: SurfaceManager;
  public dungeonManager: DungeonManager;
  public libraryManager: LibraryManager;
  public darkFantasyNPCManager: DarkFantasyNPCManager;
  public musicManager: LibraryMusicManager;
  public interactionRaycaster: InteractionRaycaster;
  public characterModel: CharacterModel;
  public characterController: CharacterController;
  public hud: RetroHUD;
  public settingsModal: SettingsModal;
  public bookReaderModal: BookReaderModal;
  public titleScreenModal: TitleScreenModal;

  public isGameStarted: boolean = false;
  public currentMode: EnvironmentMode = 'surface';
  public currentPerspective: CameraPerspective = 'FPP';

  private surfacePlayerPos = new THREE.Vector3(0, 0, 0);
  private dungeonPlayerPos = new THREE.Vector3(0, 0, 0);
  private libraryPlayerPos = new THREE.Vector3(0, 0, -1.0);

  private keys: Record<string, boolean> = {};

  constructor(canvas: HTMLCanvasElement, hudRoot: HTMLElement) {
    this.canvas = canvas;
    this.hudRoot = hudRoot;

    // 0. Settings & World Managers (Loads persistent configuration and saved worlds)
    this.settingsManager = SettingsManager.getInstance();
    this.worldManager = WorldManager.getInstance();
    const initSettings = this.settingsManager.settings;

    // 1. Core Scene & Clock
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();

    // 2. Render Pipeline (with resolution and exposure support)
    const [resW, resH] = initSettings.resolution.split('x').map(Number);
    this.renderPipeline = new RenderPipeline({
      canvas: this.canvas,
      internalWidth: resW || 640,
      internalHeight: resH || 360
    });
    this.renderPipeline.setExposure(initSettings.exposure);

    // 3. Texture Atlas & Lighting
    this.atlas = new TextureAtlas();
    this.lightingManager = new LightingManager(this.scene);
    this.lightingManager.updateRenderDistance(initSettings.renderDistance, 16);

    // 4. Camera Rig
    this.cameraRig = new CameraRig({
      perspective: initSettings.perspective,
      mouseSensitivity: initSettings.mouseSensitivity,
      fov: initSettings.fov,
      renderDistanceChunks: initSettings.renderDistance
    });
    this.cameraRig.headBobbingEnabled = initSettings.headBobbing;
    this.cameraRig.cameraSmoothingEnabled = initSettings.cameraSmoothing;
    this.scene.add(this.cameraRig.root);

    // 5. Maps & NPCs
    this.surfaceManager = new SurfaceManager(this.scene, this.atlas);
    this.surfaceManager.setVisible(false);

    this.dungeonManager = new DungeonManager(this.scene, this.atlas, 48, 48, 424242);
    this.dungeonManager.setVisible(false);

    this.libraryManager = new LibraryManager(this.scene, this.atlas);
    this.libraryManager.setVisible(false);

    this.darkFantasyNPCManager = new DarkFantasyNPCManager(this.scene, this.atlas);

    // 6. Medieval Ambient Music Manager
    this.musicManager = new LibraryMusicManager();
    this.musicManager.setVolume(initSettings.musicVolume);

    // 7. Character & Controller (Attach FPS viewmodel to camera)
    this.characterModel = new CharacterModel(this.atlas, this.cameraRig.camera);
    this.scene.add(this.characterModel.group);

    this.characterController = new CharacterController(this.characterModel);
    this.characterController.surfaceManager = this.surfaceManager;
    this.characterController.dungeonManager = this.dungeonManager;
    this.characterController.libraryManager = this.libraryManager;
    this.characterController.isInputPaused = true;

    // 8. Retro Settings Modal
    this.settingsModal = new SettingsModal({
      onPerspectiveChange: (mode) => this.setPerspective(mode),
      onSensitivityChange: (sens) => this.cameraRig.setMouseSensitivity(sens),
      onFovChange: (fov) => this.cameraRig.setFov(fov),
      onRenderDistanceChange: (chunks) => this.setRenderDistance(chunks),
      onParticleDensityChange: (density) => this.setParticleDensity(density),
      onHeadBobbingChange: (enabled) => { this.cameraRig.headBobbingEnabled = enabled; },
      onCameraSmoothingChange: (enabled) => { this.cameraRig.cameraSmoothingEnabled = enabled; },
      onExposureChange: (exp) => this.renderPipeline.setExposure(exp),
      onResolutionChange: (w, h) => this.renderPipeline.setResolution(w, h),
      onMusicVolumeChange: (vol) => this.musicManager.setVolume(vol),
      onExitToTitle: () => this.exitToTitleScreen(),
      onClose: () => {
        this.characterController.isInputPaused = false;
        if (this.isGameStarted && !this.titleScreenModal.isOpen) {
          this.canvas.requestPointerLock();
        }
      }
    });

    // 9. Interactive Book Reader Modal (Vellum Manuscript)
    this.bookReaderModal = new BookReaderModal({
      onClose: () => {
        this.characterController.isInputPaused = false;
        if (this.isGameStarted && !this.titleScreenModal.isOpen) {
          this.canvas.requestPointerLock();
        }
      }
    });

    // 10. Mouse Raycaster for Click-to-Read Book Interaction
    this.interactionRaycaster = new InteractionRaycaster(
      this.scene,
      this.cameraRig.camera,
      this.canvas,
      {
        onHoverBook: (book: BookData | null) => {
          if (book && this.currentMode === 'library' && !this.bookReaderModal.getIsOpen() && !this.settingsModal.isOpen && !this.titleScreenModal.isOpen) {
            this.hud.showBookHover(book);
          } else {
            this.hud.hideBookHover();
          }
        },
        onSelectBook: (book: BookData) => {
          if (this.currentMode === 'library' && !this.bookReaderModal.getIsOpen() && !this.settingsModal.isOpen && !this.titleScreenModal.isOpen) {
            this.openBookReader(book);
          }
        }
      }
    );

    // 11. Retro HUD
    this.hud = new RetroHUD(this.hudRoot, {
      onToggleMode: () => this.switchModeWithTransition(),
      onSelectResolution: (w: number, h: number) => this.renderPipeline.setResolution(w, h),
      onToggleFullscreen: () => this.toggleFullscreen(),
      onToggleSpectator: () => this.toggleSpectatorMode(),
      onSelectItem: (item: any) => {
        this.characterModel.setActiveItem(item ? item.id : null);
      }
    });

    this.musicManager.onTrackChange = (title, subtitle) => {
      this.hud.showNowPlaying(title, subtitle);
    };

    // 12. Starting Title Screen Modal
    this.titleScreenModal = new TitleScreenModal({
      onPlayWorld: (world) => this.loadWorld(world),
      onOpenSettings: () => this.openSettings()
    });

    // 13. Bind Window Events
    this.bindEvents();

    // 14. Initial Perspective & Item (Empty hands on spawn by default)
    this.setPerspective(initSettings.perspective);
    const initialItem = this.hud.getSelectedItem();
    this.characterModel.setActiveItem(initialItem ? initialItem.id : null);
  }

  public loadWorld(world: WorldSave): void {
    this.isGameStarted = true;

    // 1. Procedurally Generate World Systems from Seed
    this.surfaceManager.reseed(world.seed);
    this.dungeonManager.reseed(world.seed);

    // 2. Populate Dark Fantasy NPCs (Image 2, 3, 5)
    this.darkFantasyNPCManager.clearAll();
    this.populateWorldNPCs();

    // 3. Set Mode
    const targetMode = world.mode || 'surface';

    // 4. Set Initial Player Positions on the exact ground level
    // Surface: Spawn along the winding cobblestone trail facing the mountains
    let startX = this.surfaceManager.noise.getTrailCenterX(0);
    let startZ = 0;
    if (world.playerPos && typeof world.playerPos.x === 'number' && (world.playerPos.x !== 0 || world.playerPos.z !== 0)) {
      startX = world.playerPos.x;
      startZ = world.playerPos.z;
    }
    const initialSurfaceY = this.surfaceManager.getElevation(startX, startZ);
    this.surfacePlayerPos.set(startX, initialSurfaceY, startZ);

    const dSpawn = this.dungeonManager.dungeon.spawnPoint;
    this.dungeonPlayerPos.set(dSpawn.x + 0.5, 0, dSpawn.z + 0.5);
    this.libraryPlayerPos.set(0, 0, -1.0);

    this.setMode(targetMode, true);
    this.setPerspective(world.perspective || 'FPP');

    // 5. Reveal Game UI & Hide Title Screen
    this.hudRoot.style.display = '';
    this.titleScreenModal.hide();
    this.characterController.isInputPaused = false;
    this.canvas.requestPointerLock();
  }

  private populateWorldNPCs(): void {
    const noise = this.surfaceManager.noise;

    // 1. Hooded Black Sorcerer & Red Toadstools by forest trail
    const sorcZ = -14.0;
    const sorcX = noise.getTrailCenterX(sorcZ) + 2.8;
    const sorcY = this.surfaceManager.getElevation(sorcX, sorcZ);
    this.darkFantasyNPCManager.spawnHoodedSorcerer(sorcX, sorcY, sorcZ, -2.2);

    // Forest mushroom fairy rings
    this.darkFantasyNPCManager.spawnMushroomCluster(sorcX - 0.8, sorcY, sorcZ - 0.4, 5);
    this.darkFantasyNPCManager.spawnMushroomCluster(sorcX + 1.2, sorcY, sorcZ + 1.0, 4);

    // 2. Procedural NPCs at Seed Landmarks & Structures
    for (const struct of noise.structures) {
      if (struct.type === 'citadel') {
        // Two Skeleton Sentinels flanking the Citadel Gates
        const gateZ = struct.z + 7.5;
        const gateX1 = struct.x - 3.2;
        const gateX2 = struct.x + 3.2;
        const gateY1 = this.surfaceManager.getElevation(gateX1, gateZ);
        const gateY2 = this.surfaceManager.getElevation(gateX2, gateZ);
        this.darkFantasyNPCManager.spawnSkeletonSentinel(gateX1, gateY1, gateZ, 0);
        this.darkFantasyNPCManager.spawnSkeletonSentinel(gateX2, gateY2, gateZ, 0);
      } else if (struct.type === 'watchtower') {
        // Contemplative Seated Knight at the watchtower overlook
        const kwX = struct.x + 2.2;
        const kwZ = struct.z + 1.8;
        const kwY = this.surfaceManager.getElevation(kwX, kwZ);
        this.darkFantasyNPCManager.spawnSittingKnight(kwX, kwY, kwZ, struct.rotationY + 1.2);
      } else if (struct.type === 'crypt_gate') {
        // Ancient Skeleton Sentinel guarding the crypt
        const crX = struct.x;
        const crZ = struct.z + 1.2;
        const crY = this.surfaceManager.getElevation(crX, crZ);
        this.darkFantasyNPCManager.spawnSkeletonSentinel(crX, crY, crZ, struct.rotationY);
      } else if (struct.type === 'shrine') {
        // Crimson-Cloaked Priest praying at roadside shrine
        const smX = struct.x + 1.0;
        const smZ = struct.z + 0.8;
        const smY = this.surfaceManager.getElevation(smX, smZ);
        this.darkFantasyNPCManager.spawnCrimsonMage(smX, smY, smZ, struct.rotationY - Math.PI / 2, true);
      }
    }
  }

  public saveCurrentGameState(): void {
    const active = this.worldManager.getActiveWorld();
    if (active && this.isGameStarted) {
      this.worldManager.updateWorld({
        id: active.id,
        playerPos: {
          x: this.characterController.position.x,
          y: this.characterController.position.y,
          z: this.characterController.position.z
        },
        mode: this.currentMode,
        perspective: this.currentPerspective
      });
    }
  }

  public exitToTitleScreen(): void {
    this.saveCurrentGameState();
    this.isGameStarted = false;
    document.exitPointerLock();

    this.settingsModal.hide();
    this.bookReaderModal.close();
    this.hudRoot.style.display = 'none';

    this.characterController.isInputPaused = true;
    this.surfaceManager.setVisible(false);
    this.dungeonManager.setVisible(false);
    this.libraryManager.setVisible(false);

    this.titleScreenModal.show();
    this.musicManager.setRealm('title');
  }

  public setRenderDistance(chunks: number): void {
    this.cameraRig.updateRenderDistance(chunks, 16);
    this.lightingManager.updateRenderDistance(chunks, 16);
    this.surfaceManager.setRenderRadius(chunks);
    this.settingsManager.update({ renderDistance: chunks });
  }

  public setParticleDensity(_density: ParticleDensity): void {}

  private bindEvents(): void {
    window.addEventListener('resize', () => {
      this.renderPipeline.resize();
      this.cameraRig.setAspect(window.innerWidth / window.innerHeight);
    });

    // Auto-start title music on first user gesture
    const startAudioOnFirstGesture = () => {
      this.musicManager.ensureAudioContext();
      if (!this.isGameStarted && this.titleScreenModal.isOpen) {
        this.musicManager.setRealm('title');
      }
    };
    window.addEventListener('click', startAudioOnFirstGesture, { once: true });
    window.addEventListener('keydown', startAudioOnFirstGesture, { once: true });

    // Pointer lock on canvas click
    this.canvas.addEventListener('click', () => {
      if (!this.isGameStarted || this.titleScreenModal.isOpen) return;

      if (this.currentMode === 'library') {
        this.musicManager.setLibraryMode(true);
      }

      if (this.bookReaderModal.getIsOpen()) return;

      if (!this.settingsModal.isOpen && !this.interactionRaycaster.getHoveredBook()) {
        this.canvas.requestPointerLock();
      }
    });

    // Left Click Attack Trigger (Image 1 Sword Swing)
    window.addEventListener('mousedown', (e) => {
      if (!this.isGameStarted || this.titleScreenModal.isOpen || this.settingsModal.isOpen || this.bookReaderModal.getIsOpen()) return;

      if (document.pointerLockElement === this.canvas && e.button === 0) {
        if (!this.interactionRaycaster.getHoveredBook()) {
          this.characterModel.triggerAttack();
        }
      }
    });

    document.addEventListener('pointerlockchange', () => {
      const isLocked = document.pointerLockElement !== null;
      if (isLocked) {
        document.body.classList.add('pointer-locked');
      } else {
        document.body.classList.remove('pointer-locked');
      }
    });

    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;

      if (this.currentMode === 'library') {
        this.musicManager.setLibraryMode(true);
      }

      // Escape or KeyO to toggle settings / close book
      if (e.code === 'Escape' || e.code === 'KeyO') {
        if (!this.isGameStarted || this.titleScreenModal.isOpen) return;

        if (this.bookReaderModal.getIsOpen()) {
          this.bookReaderModal.close();
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        this.toggleSettings();
        return;
      }

      // 'N' key for direct Grand Library access
      if (e.code === 'KeyN' && this.isGameStarted && !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen() && !this.titleScreenModal.isOpen) {
        e.preventDefault();
        if (this.currentMode !== 'library') {
          this.switchModeWithTransition('library');
        } else {
          this.switchModeWithTransition('surface');
        }
        return;
      }

      // 'M' key for 3-way Map cycling
      if (e.code === 'KeyM' && this.isGameStarted && !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen() && !this.titleScreenModal.isOpen) {
        this.switchModeWithTransition();
      }

      // Hotbar Slot Selection (1-8)
      if (this.isGameStarted && !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen() && !this.titleScreenModal.isOpen && e.code.startsWith('Digit')) {
        const num = parseInt(e.code.replace('Digit', ''), 10);
        if (num >= 1 && num <= 8) {
          this.hud.selectSlot(num - 1);
        }
      }

      // Fullscreen
      if (e.code === 'KeyF' && !this.settingsModal.isOpen && !this.titleScreenModal.isOpen) {
        this.toggleFullscreen();
      }

      // 'V' key for Spectator / NoClip Fly Mode
      if (e.code === 'KeyV' && this.isGameStarted && !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen() && !this.titleScreenModal.isOpen) {
        e.preventDefault();
        this.toggleSpectatorMode();
      }
    }, { capture: true });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    // Auto-save on page unload
    window.addEventListener('beforeunload', () => {
      this.saveCurrentGameState();
    });
  }

  public openBookReader(book: BookData): void {
    this.characterController.isInputPaused = true;
    document.exitPointerLock();
    this.interactionRaycaster.clearHover();
    this.hud.hideBookHover();
    this.bookReaderModal.open(book);
  }

  public openSettings(): void {
    this.characterController.isInputPaused = true;
    document.exitPointerLock();
    this.settingsModal.show();
  }

  public closeSettings(): void {
    this.characterController.isInputPaused = false;
    this.settingsModal.hide();
    if (this.isGameStarted && !this.titleScreenModal.isOpen) {
      this.canvas.requestPointerLock();
    }
  }

  public toggleSettings(): void {
    if (this.settingsModal.isOpen) {
      this.closeSettings();
    } else {
      this.openSettings();
    }
  }

  public setPerspective(mode: CameraPerspective): void {
    this.currentPerspective = mode;
    this.cameraRig.setPerspective(mode);
    this.characterController.setPerspective(mode);
    this.hud.setPerspective(mode);
    this.settingsModal.setPerspectiveUI(mode);
    this.renderPipeline.setCrosshairVisible(mode === 'FPP');

    this.characterModel.setFirstPerson(mode === 'FPP');

    if (this.isGameStarted && !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen() && !this.titleScreenModal.isOpen) {
      this.canvas.requestPointerLock();
    }
  }

  public toggleSpectatorMode(): boolean {
    const isSpec = this.characterController.toggleSpectator();
    this.hud.setSpectator(isSpec);
    return isSpec;
  }

  public setSpectatorMode(enabled: boolean): void {
    this.characterController.setSpectator(enabled);
    this.hud.setSpectator(enabled);
  }

  public toggleFullscreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  public switchModeWithTransition(targetMode?: EnvironmentMode): void {
    if (!this.isGameStarted || this.renderPipeline?.transitionManager?.isTransitioning) return;

    let nextMode: EnvironmentMode;
    if (targetMode) {
      nextMode = targetMode;
    } else {
      if (this.currentMode === 'surface') {
        nextMode = 'dungeon';
      } else if (this.currentMode === 'dungeon') {
        nextMode = 'library';
      } else {
        nextMode = 'surface';
      }
    }

    this.renderPipeline.transitionManager.startTransition(
      () => {
        this.setMode(nextMode);
      },
      () => {},
      0.7
    );
  }

  public setMode(mode: EnvironmentMode, instant: boolean = false): void {
    if (this.characterController) {
      if (this.currentMode === 'surface') {
        this.surfacePlayerPos.copy(this.characterController.position);
      } else if (this.currentMode === 'dungeon') {
        this.dungeonPlayerPos.copy(this.characterController.position);
      } else {
        this.libraryPlayerPos.copy(this.characterController.position);
      }
      this.characterController.currentMode = mode;
    }

    this.currentMode = mode;

    if (this.lightingManager) {
      this.lightingManager.setMode(mode);
    }

    if (this.musicManager) {
      this.musicManager.setRealm(mode);
    }

    if (mode === 'surface') {
      if (this.surfaceManager) this.surfaceManager.setVisible(true);
      if (this.dungeonManager) this.dungeonManager.setVisible(false);
      if (this.libraryManager) this.libraryManager.setVisible(false);

      if (this.surfaceManager) {
        this.surfacePlayerPos.y = this.surfaceManager.getElevation(this.surfacePlayerPos.x, this.surfacePlayerPos.z);
      }
      const targetPos = this.surfacePlayerPos;
      if (this.characterController) {
        this.characterController.setPosition(targetPos.x, targetPos.y, targetPos.z);
      }
      if (this.surfaceManager && this.isGameStarted) {
        this.surfaceManager.update(targetPos.x, targetPos.z);
      }
    } else if (mode === 'dungeon') {
      if (this.surfaceManager) this.surfaceManager.setVisible(false);
      if (this.dungeonManager) this.dungeonManager.setVisible(true);
      if (this.libraryManager) this.libraryManager.setVisible(false);

      this.dungeonPlayerPos.y = 0;
      const targetPos = this.dungeonPlayerPos;
      if (this.characterController) {
        this.characterController.setPosition(targetPos.x, targetPos.y, targetPos.z);
      }
    } else {
      // Grand Cathedral Library
      if (this.surfaceManager) this.surfaceManager.setVisible(false);
      if (this.dungeonManager) this.dungeonManager.setVisible(false);
      if (this.libraryManager) this.libraryManager.setVisible(true);

      this.libraryPlayerPos.y = 0;
      const targetPos = this.libraryPlayerPos;
      if (this.characterController) {
        this.characterController.setPosition(targetPos.x, targetPos.y, targetPos.z);
      }
    }

    if (this.cameraRig && this.characterController) {
      this.cameraRig.setTarget(
        this.characterController.position.x,
        this.characterController.position.y,
        this.characterController.position.z
      );
      if (instant) {
        this.cameraRig.currentPosition.copy(this.cameraRig.targetPosition);
      }
    }

    if (this.hud) {
      this.hud.setMode(mode);
    }
  }

  public start(): void {
    const loop = () => {
      requestAnimationFrame(loop);
      this.tick();
    };
    loop();
  }

  private tick(): void {
    const delta = Math.min(this.clock.getDelta(), 0.1);
    const elapsedTime = this.clock.getElapsedTime();

    // If on Title Screen or game not started, only blit scene and skip gameplay simulation
    if (!this.isGameStarted || this.titleScreenModal.isOpen) {
      this.renderPipeline.render(this.scene, this.cameraRig.camera, delta);
      return;
    }

    // 1. Controller & Gamepad Inputs
    const gp = this.characterController.getGamepadInput();
    const qPressed = !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen() && !!this.keys['KeyQ'];
    const ePressed = !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen() && !!this.keys['KeyE'];

    // 2. Update Character Movement relative to camera yaw and pitch
    this.characterController.update(delta, this.cameraRig.getYaw(), this.cameraRig.getPitch());

    // 3. Update Camera Rig with position, rotation, and head bobbing
    this.cameraRig.setTarget(
      this.characterController.position.x,
      this.characterController.position.y,
      this.characterController.position.z
    );
    const speedRatio = Math.hypot(this.characterController.velocity.x, this.characterController.velocity.z) / this.characterController.moveSpeed;
    this.cameraRig.update(
      delta,
      gp.rightStickX,
      gp.rightStickY,
      qPressed,
      ePressed,
      this.characterController.isMoving,
      speedRatio
    );

    // 4. Update Character Model Animation (Sword Slash & Torch Flicker)
    this.characterModel.updateAnimation(
      this.characterController.isMoving,
      delta,
      this.characterController.velocity.length()
    );

    // 5. Update Dark Fantasy NPCs & Lighting Time/Sky
    this.darkFantasyNPCManager.update(elapsedTime);
    this.lightingManager.update(this.characterController.position, elapsedTime);

    // 6. Update Active Map Systems & Raycast Interaction
    if (this.currentMode === 'surface') {
      this.surfaceManager.update(this.characterController.position.x, this.characterController.position.z);
      this.lightingManager.updateSunPosition(this.characterController.position);
      this.interactionRaycaster.isEnabled = false;
      this.interactionRaycaster.clearHover();
      this.hud.hideBookHover();
    } else if (this.currentMode === 'dungeon') {
      this.dungeonManager.updateTorches(elapsedTime);
      this.interactionRaycaster.isEnabled = false;
      this.interactionRaycaster.clearHover();
      this.hud.hideBookHover();
    } else {
      // Grand Cathedral Library update
      this.libraryManager.update(elapsedTime);
      this.lightingManager.updateSunPosition(this.characterController.position);

      // Perform Raycasting against individual books on shelves and desks
      if (!this.bookReaderModal.getIsOpen() && !this.settingsModal.isOpen) {
        this.interactionRaycaster.isEnabled = true;
        this.interactionRaycaster.update(this.libraryManager.raycastableBooks);
      } else {
        this.interactionRaycaster.isEnabled = false;
        this.interactionRaycaster.clearHover();
        this.hud.hideBookHover();
      }
    }

    // 7. Render Scene via Pixel-Grid Pipeline
    this.renderPipeline.render(this.scene, this.cameraRig.camera, delta);

    // 8. Update HUD Telemetry
    const chunkX = Math.floor(this.characterController.position.x / 16);
    const chunkZ = Math.floor(this.characterController.position.z / 16);
    this.hud.updateTelemetry(
      this.characterController.position.x,
      this.characterController.position.y,
      this.characterController.position.z,
      chunkX,
      chunkZ,
      this.cameraRig.getYaw()
    );
  }
}
