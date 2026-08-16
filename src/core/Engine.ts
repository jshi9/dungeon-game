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
import { RetroHUD } from '../ui/RetroHUD';
import { SettingsModal } from '../ui/SettingsModal';
import { BookReaderModal } from '../ui/BookReaderModal';
import { LibraryMusicManager } from '../audio/LibraryMusicManager';
import { InteractionRaycaster } from './InteractionRaycaster';
import { BookData } from '../lore/LibraryLoreGenerator';

export class Engine {
  public canvas: HTMLCanvasElement;
  public hudRoot: HTMLElement;

  public scene: THREE.Scene;
  public clock: THREE.Clock;
  public renderPipeline: RenderPipeline;
  public cameraRig: CameraRig;
  public lightingManager: LightingManager;
  public atlas: TextureAtlas;

  public surfaceManager: SurfaceManager;
  public dungeonManager: DungeonManager;
  public libraryManager: LibraryManager;
  public musicManager: LibraryMusicManager;
  public interactionRaycaster: InteractionRaycaster;
  public characterModel: CharacterModel;
  public characterController: CharacterController;
  public hud: RetroHUD;
  public settingsModal: SettingsModal;
  public bookReaderModal: BookReaderModal;

  public currentMode: EnvironmentMode = 'surface';
  public currentPerspective: CameraPerspective = 'FPP';

  private surfacePlayerPos = new THREE.Vector3(0, 0, 0);
  private dungeonPlayerPos = new THREE.Vector3(0, 0, 0);
  private libraryPlayerPos = new THREE.Vector3(0, 0, -1.0);

  private keys: Record<string, boolean> = {};

  constructor(canvas: HTMLCanvasElement, hudRoot: HTMLElement) {
    this.canvas = canvas;
    this.hudRoot = hudRoot;

    // 1. Core Scene & Clock
    this.scene = new THREE.Scene();
    this.clock = new THREE.Clock();

    // 2. Render Pipeline (640x360 internal low-res render target with nearest-neighbor blit)
    this.renderPipeline = new RenderPipeline({
      canvas: this.canvas,
      internalWidth: 640,
      internalHeight: 360
    });

    // 3. Texture Atlas & Lighting
    this.atlas = new TextureAtlas();
    this.lightingManager = new LightingManager(this.scene);

    // 4. Camera Rig (Default to First-Person Perspective FPP)
    this.cameraRig = new CameraRig({
      perspective: 'FPP',
      mouseSensitivity: 1.0
    });
    this.scene.add(this.cameraRig.root);

    // 5. Triple Maps: Surface, BSP Dungeon & Gothic Grand Cathedral Library
    this.surfaceManager = new SurfaceManager(this.scene, this.atlas);
    this.dungeonManager = new DungeonManager(this.scene, this.atlas, 48, 48);
    this.libraryManager = new LibraryManager(this.scene, this.atlas);

    // 6. Medieval Ambient Music Manager (Procedural Web Audio on shuffled repeat)
    this.musicManager = new LibraryMusicManager();

    // 7. Character & Controller (Attach FPS viewmodel to camera)
    this.characterModel = new CharacterModel(this.atlas, this.cameraRig.camera);
    this.scene.add(this.characterModel.group);

    this.characterController = new CharacterController(this.characterModel);
    this.characterController.surfaceManager = this.surfaceManager;
    this.characterController.dungeonManager = this.dungeonManager;
    this.characterController.libraryManager = this.libraryManager;

    // 8. Initial Spawn Positions
    const initialSurfaceY = this.surfaceManager.getElevation(0, 0);
    this.surfacePlayerPos.set(0, initialSurfaceY, 0);

    const dSpawn = this.dungeonManager.dungeon.spawnPoint;
    this.dungeonPlayerPos.set(dSpawn.x + 0.5, 0, dSpawn.z + 0.5);

    this.libraryPlayerPos.set(0, 0, -1.0);

    // 9. Retro Settings Modal (mounted directly to document.body)
    this.settingsModal = new SettingsModal({
      onPerspectiveChange: (mode) => this.setPerspective(mode),
      onSensitivityChange: (sens) => this.cameraRig.setMouseSensitivity(sens),
      onFovChange: (fov) => this.cameraRig.setFov(fov),
      onResolutionChange: (w, h) => this.renderPipeline.setResolution(w, h),
      onMusicVolumeChange: (vol) => this.musicManager.setVolume(vol),
      onClose: () => {
        this.characterController.isInputPaused = false;
        this.canvas.requestPointerLock();
      }
    });

    // 10. Interactive Book Reader Modal
    this.bookReaderModal = new BookReaderModal({
      onClose: () => {
        this.characterController.isInputPaused = false;
        this.canvas.requestPointerLock();
      }
    });

    // 11. Mouse Raycaster for Click-to-Read Book Interaction
    this.interactionRaycaster = new InteractionRaycaster(
      this.scene,
      this.cameraRig.camera,
      this.canvas,
      {
        onHoverBook: (book) => {
          if (book && this.currentMode === 'library' && !this.bookReaderModal.getIsOpen() && !this.settingsModal.isOpen) {
            this.hud.showBookHover(book);
          } else {
            this.hud.hideBookHover();
          }
        },
        onSelectBook: (book) => {
          if (this.currentMode === 'library' && !this.settingsModal.isOpen) {
            this.openBookReader(book);
          }
        }
      }
    );

    // Restore saved settings from localStorage
    try {
      const savedFov = localStorage.getItem('retro3d_fov');
      if (savedFov) {
        const f = parseInt(savedFov, 10);
        if (!isNaN(f) && f >= 40 && f <= 100) {
          this.cameraRig.setFov(f);
        }
      }
      const savedSens = localStorage.getItem('retro3d_sens');
      if (savedSens) {
        const s = parseFloat(savedSens);
        if (!isNaN(s) && s >= 0.5 && s <= 3.0) {
          this.cameraRig.setMouseSensitivity(s);
        }
      }
      const savedMusic = localStorage.getItem('retro3d_music_vol');
      if (savedMusic) {
        const m = parseInt(savedMusic, 10);
        if (!isNaN(m) && m >= 0 && m <= 100) {
          this.musicManager.setVolume(m / 100);
        }
      }
    } catch {}

    // 12. Retro HUD with Inventory Hotbar
    this.hud = new RetroHUD(this.hudRoot, {
      onToggleMode: () => this.switchModeWithTransition(),
      onSelectResolution: (w, h) => this.renderPipeline.setResolution(w, h),
      onToggleFullscreen: () => this.toggleFullscreen(),
      onSelectItem: (item) => this.characterModel.setActiveItem(item ? item.id : null)
    });

    // Connect Music Now Playing callback to HUD
    this.musicManager.onTrackChange = (title, subtitle) => {
      this.hud.showNowPlaying(title, subtitle);
    };

    // 13. Bind Window Events
    this.bindEvents();

    // 14. Initial Mode & Perspective Setup
    this.setMode('surface', true);
    this.setPerspective('FPP');
    const initialItem = this.hud.getSelectedItem();
    this.characterModel.setActiveItem(initialItem ? initialItem.id : null);
  }

  private bindEvents(): void {
    window.addEventListener('resize', () => {
      this.renderPipeline.resize();
      this.cameraRig.setAspect(window.innerWidth / window.innerHeight);
    });

    // Direct pointer lock on canvas click in both FPP and TPP
    this.canvas.addEventListener('click', () => {
      // Resume audio if in library
      if (this.currentMode === 'library') {
        this.musicManager.setLibraryMode(true);
      }

      if (this.bookReaderModal.getIsOpen()) return;

      if (!this.settingsModal.isOpen && !this.interactionRaycaster.getHoveredBook()) {
        this.canvas.requestPointerLock();
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

    // Capture phase for Escape / KeyO / KeyN / Hotbar keys
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;

      // Resume audio on keypress if in library
      if (this.currentMode === 'library') {
        this.musicManager.setLibraryMode(true);
      }

      // Escape or 'KeyO' to toggle settings / close book
      if (e.code === 'Escape' || e.code === 'KeyO') {
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
      if (e.code === 'KeyN' && !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen()) {
        e.preventDefault();
        if (this.currentMode !== 'library') {
          this.switchModeWithTransition('library');
        } else {
          this.switchModeWithTransition('surface');
        }
        return;
      }

      // 'M' key for 3-way Map cycling (Surface -> Dungeon -> Library -> Surface)
      if (e.code === 'KeyM' && !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen()) {
        this.switchModeWithTransition();
      }

      // Number keys 1-8 for Hotbar Slot Selection (Toggle equip/unequip)
      if (!this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen() && e.code.startsWith('Digit')) {
        const num = parseInt(e.code.replace('Digit', ''), 10);
        if (num >= 1 && num <= 8) {
          this.hud.selectSlot(num - 1);
        }
      }

      // 'F' key for Fullscreen
      if (e.code === 'KeyF' && !this.settingsModal.isOpen) {
        this.toggleFullscreen();
      }
    }, { capture: true });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
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
    this.canvas.requestPointerLock();
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

    if (!this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen()) {
      this.canvas.requestPointerLock();
    }
  }

  public toggleFullscreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  public switchModeWithTransition(targetMode?: EnvironmentMode): void {
    if (this.renderPipeline?.transitionManager?.isTransitioning) return;

    let nextMode: EnvironmentMode;
    if (targetMode) {
      nextMode = targetMode;
    } else {
      // 3-way map cycle
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

    // Toggle Medieval Ambient Music for Library
    if (this.musicManager) {
      this.musicManager.setLibraryMode(mode === 'library');
    }

    if (mode === 'surface') {
      if (this.surfaceManager) this.surfaceManager.setVisible(true);
      if (this.dungeonManager) this.dungeonManager.setVisible(false);
      if (this.libraryManager) this.libraryManager.setVisible(false);

      if (this.characterModel) {
        this.characterModel.baseLanternIntensity = 16.0;
        if (this.characterModel.fpsLanternLight) {
          this.characterModel.fpsLanternLight.intensity = 16.0;
          this.characterModel.fpsLanternLight.distance = 30;
        }
        if (this.characterModel.tppLanternLight) {
          this.characterModel.tppLanternLight.intensity = 16.0;
          this.characterModel.tppLanternLight.distance = 30;
        }
      }

      const targetPos = this.surfacePlayerPos;
      if (this.characterController) {
        this.characterController.setPosition(targetPos.x, targetPos.y, targetPos.z);
      }
      if (this.surfaceManager) {
        this.surfaceManager.update(targetPos.x, targetPos.z);
      }
    } else if (mode === 'dungeon') {
      if (this.surfaceManager) this.surfaceManager.setVisible(false);
      if (this.dungeonManager) this.dungeonManager.setVisible(true);
      if (this.libraryManager) this.libraryManager.setVisible(false);

      if (this.characterModel) {
        this.characterModel.baseLanternIntensity = 22.0;
        if (this.characterModel.fpsLanternLight) {
          this.characterModel.fpsLanternLight.intensity = 22.0;
          this.characterModel.fpsLanternLight.distance = 34;
        }
        if (this.characterModel.tppLanternLight) {
          this.characterModel.tppLanternLight.intensity = 22.0;
          this.characterModel.tppLanternLight.distance = 34;
        }
      }

      const targetPos = this.dungeonPlayerPos;
      if (this.characterController) {
        this.characterController.setPosition(targetPos.x, targetPos.y, targetPos.z);
      }
    } else {
      // Grand Cathedral Library
      if (this.surfaceManager) this.surfaceManager.setVisible(false);
      if (this.dungeonManager) this.dungeonManager.setVisible(false);
      if (this.libraryManager) this.libraryManager.setVisible(true);

      if (this.characterModel) {
        this.characterModel.baseLanternIntensity = 22.0;
        if (this.characterModel.fpsLanternLight) {
          this.characterModel.fpsLanternLight.intensity = 22.0;
          this.characterModel.fpsLanternLight.distance = 34;
        }
        if (this.characterModel.tppLanternLight) {
          this.characterModel.tppLanternLight.intensity = 22.0;
          this.characterModel.tppLanternLight.distance = 34;
        }
      }

      const targetPos = this.libraryPlayerPos;
      if (this.characterController) {
        this.characterController.setPosition(targetPos.x, targetPos.y, targetPos.z);
      }
    }

    if (instant && this.cameraRig && this.characterController) {
      this.cameraRig.setTarget(
        this.characterController.position.x,
        this.characterController.position.y,
        this.characterController.position.z
      );
      this.cameraRig.currentPosition.copy(this.cameraRig.targetPosition);
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

    // 1. Controller & Gamepad Inputs
    const gp = this.characterController.getGamepadInput();
    const qPressed = !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen() && !!this.keys['KeyQ'];
    const ePressed = !this.settingsModal.isOpen && !this.bookReaderModal.getIsOpen() && !!this.keys['KeyE'];

    // 2. Update Character Movement relative to camera yaw first
    this.characterController.update(delta, this.cameraRig.getYaw());

    // 3. Update Camera Rig tracking the updated character position (0 lateral offset)
    this.cameraRig.setTarget(
      this.characterController.position.x,
      this.characterController.position.y,
      this.characterController.position.z
    );
    this.cameraRig.update(delta, gp.rightStickX, gp.rightStickY, qPressed, ePressed);

    // 4. Update Active Map Systems & Raycast Interaction
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

    // 5. Render Scene via Pixel-Grid Pipeline
    this.renderPipeline.render(this.scene, this.cameraRig.camera, delta);

    // 6. Update HUD Telemetry
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
