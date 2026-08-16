import * as THREE from 'three';
import { RenderPipeline } from './RenderPipeline';
import { CameraRig } from '../camera/CameraRig';
import { LightingManager, EnvironmentMode } from '../lighting/LightingManager';
import { TextureAtlas } from '../terrain/TextureAtlas';
import { SurfaceManager } from '../terrain/SurfaceManager';
import { DungeonManager } from '../terrain/DungeonManager';
import { CharacterModel } from '../entities/CharacterModel';
import { CharacterController } from '../entities/CharacterController';
import { RetroHUD } from '../ui/RetroHUD';

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

  public currentMode: EnvironmentMode = 'surface';
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

    // 4. Camera Rig (360° yaw orbit, 35° pitch, diometric)
    this.cameraRig = new CameraRig({
      fov: 42,
      pitchDeg: 35,
      initialYawDeg: 45,
      distance: 14.0
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

    // Set initial spawn positions
    const initialSurfaceY = this.surfaceManager.getElevation(0, 0);
    this.surfacePlayerPos.set(0, initialSurfaceY, 0);

    const dSpawn = this.dungeonManager.dungeon.spawnPoint;
    this.dungeonPlayerPos.set(dSpawn.x + 0.5, 0, dSpawn.z + 0.5);

    // Start in Surface mode
    this.setMode('surface', true);

    // 7. Retro HUD
    this.hud = new RetroHUD(this.hudRoot, {
      onToggleMode: () => this.switchModeWithTransition(),
      onSelectResolution: (w, h) => this.renderPipeline.setResolution(w, h),
      onToggleFullscreen: () => this.toggleFullscreen()
    });

    this.bindEvents();
  }

  private bindEvents(): void {
    window.addEventListener('resize', () => {
      this.renderPipeline.resize();
      this.cameraRig.setAspect(window.innerWidth / window.innerHeight);
    });

    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;

      // 'M' key for mode switch transition
      if (e.code === 'KeyM') {
        this.switchModeWithTransition();
      }

      // 'F' key for Fullscreen
      if (e.code === 'KeyF') {
        this.toggleFullscreen();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });
  }

  public toggleFullscreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  public switchModeWithTransition(): void {
    if (this.renderPipeline.transitionManager.isTransitioning) return;

    const nextMode: EnvironmentMode = this.currentMode === 'surface' ? 'dungeon' : 'surface';

    this.renderPipeline.transitionManager.startTransition(
      () => {
        // Midpoint swap: screen is fully obscured by diamond pixel wipe
        this.setMode(nextMode);
      },
      () => {
        // Transition finished
      },
      0.7
    );
  }

  public setMode(mode: EnvironmentMode, instant: boolean = false): void {
    // Save current position
    if (this.currentMode === 'surface') {
      this.surfacePlayerPos.copy(this.characterController.position);
    } else {
      this.dungeonPlayerPos.copy(this.characterController.position);
    }

    this.currentMode = mode;
    this.lightingManager.setMode(mode);
    this.characterController.currentMode = mode;

    if (mode === 'surface') {
      this.surfaceManager.setVisible(true);
      this.dungeonManager.setVisible(false);
      this.characterModel.lanternLight.intensity = 1.0;

      const targetPos = this.surfacePlayerPos;
      this.characterController.setPosition(targetPos.x, targetPos.y, targetPos.z);
      this.surfaceManager.update(targetPos.x, targetPos.z);
    } else {
      this.surfaceManager.setVisible(false);
      this.dungeonManager.setVisible(true);
      this.characterModel.lanternLight.intensity = 2.2;

      const targetPos = this.dungeonPlayerPos;
      this.characterController.setPosition(targetPos.x, targetPos.y, targetPos.z);
    }

    if (instant) {
      this.cameraRig.setTarget(
        this.characterController.position.x,
        this.characterController.position.y,
        this.characterController.position.z
      );
      this.cameraRig.currentPosition.copy(this.cameraRig.targetPosition);
    }

    this.hud.setMode(mode);
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
    const qPressed = !!this.keys['KeyQ'];
    const ePressed = !!this.keys['KeyE'];

    // 2. Update Camera Rig (360° yaw orbit & target tracking)
    this.cameraRig.setTarget(
      this.characterController.position.x,
      this.characterController.position.y + 0.8,
      this.characterController.position.z
    );
    this.cameraRig.update(delta, gp.rightStickX, qPressed, ePressed);

    // 3. Update Character Movement relative to dynamic camera yaw
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
