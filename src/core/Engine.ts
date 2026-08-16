import * as THREE from 'three';
import { RenderPipeline } from './RenderPipeline';
import { CameraRig, CameraPerspective } from '../camera/CameraRig';
import { LightingManager, EnvironmentMode } from '../lighting/LightingManager';
import { TextureAtlas } from '../terrain/TextureAtlas';
import { SurfaceManager } from '../terrain/SurfaceManager';
import { DungeonManager } from '../terrain/DungeonManager';
import { CharacterModel } from '../entities/CharacterModel';
import { CharacterController } from '../entities/CharacterController';
import { RetroHUD } from '../ui/RetroHUD';
import { SettingsModal } from '../ui/SettingsModal';

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
  public characterModel: CharacterModel;
  public characterController: CharacterController;
  public hud: RetroHUD;
  public settingsModal: SettingsModal;

  public currentMode: EnvironmentMode = 'surface';
  public currentPerspective: CameraPerspective = 'FPP';

  private surfacePlayerPos = new THREE.Vector3(0, 0, 0);
  private dungeonPlayerPos = new THREE.Vector3(0, 0, 0);

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

    // 5. Dual Maps: Surface & BSP Dungeon
    this.surfaceManager = new SurfaceManager(this.scene, this.atlas);
    this.dungeonManager = new DungeonManager(this.scene, this.atlas, 48, 48);

    // 6. Character & Controller
    this.characterModel = new CharacterModel(this.atlas);
    this.scene.add(this.characterModel.group);

    this.characterController = new CharacterController(this.characterModel);
    this.characterController.surfaceManager = this.surfaceManager;
    this.characterController.dungeonManager = this.dungeonManager;

    // 7. Initial Spawn Positions
    const initialSurfaceY = this.surfaceManager.getElevation(0, 0);
    this.surfacePlayerPos.set(0, initialSurfaceY, 0);

    const dSpawn = this.dungeonManager.dungeon.spawnPoint;
    this.dungeonPlayerPos.set(dSpawn.x + 0.5, 0, dSpawn.z + 0.5);

    // 8. Retro Settings Modal
    this.settingsModal = new SettingsModal(this.hudRoot, {
      onPerspectiveChange: (mode) => this.setPerspective(mode),
      onSensitivityChange: (sens) => this.cameraRig.setMouseSensitivity(sens),
      onResolutionChange: (w, h) => this.renderPipeline.setResolution(w, h),
      onClose: () => {
        this.characterController.isInputPaused = false;
        if (this.currentPerspective === 'FPP') {
          this.canvas.requestPointerLock();
        }
      }
    });

    // 9. Retro HUD
    this.hud = new RetroHUD(this.hudRoot, {
      onToggleMode: () => this.switchModeWithTransition(),
      onSelectResolution: (w, h) => this.renderPipeline.setResolution(w, h),
      onToggleFullscreen: () => this.toggleFullscreen()
    });

    // 10. Bind Window Events
    this.bindEvents();

    // 11. Initial Mode & Perspective Setup
    this.setMode('surface', true);
    this.setPerspective('FPP');
  }

  private bindEvents(): void {
    window.addEventListener('resize', () => {
      this.renderPipeline.resize();
      this.cameraRig.setAspect(window.innerWidth / window.innerHeight);
    });

    // Direct pointer lock on canvas click in FPP
    this.canvas.addEventListener('click', () => {
      if (!this.settingsModal.isOpen && this.currentPerspective === 'FPP') {
        this.canvas.requestPointerLock();
      }
    });

    document.addEventListener('pointerlockchange', () => {
      if (!document.pointerLockElement && this.currentPerspective === 'FPP' && !this.settingsModal.isOpen) {
        // Cursor unlocked
      }
    });

    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;

      // Escape or 'KeyO' to toggle settings
      if (e.code === 'Escape' || e.code === 'KeyO') {
        e.preventDefault();
        this.toggleSettings();
      }

      // 'M' key for mode switch transition
      if (e.code === 'KeyM' && !this.settingsModal.isOpen) {
        this.switchModeWithTransition();
      }

      // 'F' key for Fullscreen
      if (e.code === 'KeyF' && !this.settingsModal.isOpen) {
        this.toggleFullscreen();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });
  }

  public openSettings(): void {
    this.characterController.isInputPaused = true;
    this.settingsModal.open();
  }

  public toggleSettings(): void {
    if (this.settingsModal.isOpen) {
      this.settingsModal.close();
      this.characterController.isInputPaused = false;
      if (this.currentPerspective === 'FPP') {
        this.canvas.requestPointerLock();
      }
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
  }

  public toggleFullscreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  public switchModeWithTransition(): void {
    if (this.renderPipeline?.transitionManager?.isTransitioning) return;

    const nextMode: EnvironmentMode = this.currentMode === 'surface' ? 'dungeon' : 'surface';

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
      } else {
        this.dungeonPlayerPos.copy(this.characterController.position);
      }
      this.characterController.currentMode = mode;
    }

    this.currentMode = mode;

    if (this.lightingManager) {
      this.lightingManager.setMode(mode);
    }

    if (mode === 'surface') {
      if (this.surfaceManager) this.surfaceManager.setVisible(true);
      if (this.dungeonManager) this.dungeonManager.setVisible(false);
      if (this.characterModel?.lanternLight) {
        this.characterModel.lanternLight.intensity = 1.2;
        this.characterModel.lanternLight.distance = 18;
      }

      const targetPos = this.surfacePlayerPos;
      if (this.characterController) {
        this.characterController.setPosition(targetPos.x, targetPos.y, targetPos.z);
      }
      if (this.surfaceManager) {
        this.surfaceManager.update(targetPos.x, targetPos.z);
      }
    } else {
      if (this.surfaceManager) this.surfaceManager.setVisible(false);
      if (this.dungeonManager) this.dungeonManager.setVisible(true);
      if (this.characterModel?.lanternLight) {
        this.characterModel.lanternLight.intensity = 2.5;
        this.characterModel.lanternLight.distance = 25;
      }

      const targetPos = this.dungeonPlayerPos;
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
    const qPressed = !this.settingsModal.isOpen && !!this.keys['KeyQ'];
    const ePressed = !this.settingsModal.isOpen && !!this.keys['KeyE'];

    // 2. Update Camera Rig
    this.cameraRig.setTarget(
      this.characterController.position.x,
      this.characterController.position.y,
      this.characterController.position.z
    );
    this.cameraRig.update(delta, gp.rightStickX, gp.rightStickY, qPressed, ePressed);

    // 3. Update Character Movement relative to camera yaw
    this.characterController.update(delta, this.cameraRig.getYaw());

    // 4. Update Active Map Systems
    if (this.currentMode === 'surface') {
      this.surfaceManager.update(this.characterController.position.x, this.characterController.position.z);
      this.lightingManager.updateSunPosition(this.characterController.position);
    } else {
      this.dungeonManager.updateTorches(elapsedTime);
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
