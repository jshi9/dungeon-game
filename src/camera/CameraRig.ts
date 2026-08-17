import * as THREE from 'three';

export type CameraPerspective = 'FPP' | 'TPP';

export interface CameraRigOptions {
  perspective?: CameraPerspective;
  fov?: number;
  pitchDeg?: number;
  initialYawDeg?: number;
  distance?: number;
  minDistance?: number;
  maxDistance?: number;
  followSpeed?: number;
  rotateSpeed?: number;
  mouseSensitivity?: number;
  renderDistanceChunks?: number;
}

export class CameraRig {
  public root: THREE.Group;
  public camera: THREE.PerspectiveCamera;

  public perspective: CameraPerspective = 'FPP';
  public mouseSensitivity: number = 1.0;
  public fov: number = 75;

  public targetPosition: THREE.Vector3 = new THREE.Vector3();
  public currentPosition: THREE.Vector3 = new THREE.Vector3();

  // Unified yaw and pitch across FPP and TPP
  public yaw: number = 0;
  public targetYaw: number = 0;

  // Pitch: 0 = horizon, +1.49 rad = look straight up, -1.49 rad = look straight down
  public pitch: number = 0;
  public targetPitch: number = 0;

  public distance: number = 14.0;
  public targetDistance: number = 14.0;

  public minDistance: number = 4.0;
  public maxDistance: number = 26.0;
  public followSpeed: number = 18.0;
  public rotateSpeed: number = 2.5;

  // Camera Dynamics & Bobbing
  public headBobbingEnabled: boolean = true;
  public cameraSmoothingEnabled: boolean = true;
  private bobTimer: number = 0;
  private bobOffsetY: number = 0;
  private bobOffsetX: number = 0;

  private isDraggingRightMouse: boolean = false;
  private previousMouseX: number = 0;
  private previousMouseY: number = 0;

  // Max pitch angle (~85.4 degrees) preventing pole singularities
  public static readonly MAX_PITCH: number = Math.PI / 2 - 0.08;

  constructor(options: CameraRigOptions = {}) {
    this.perspective = options.perspective ?? 'FPP';
    this.mouseSensitivity = options.mouseSensitivity ?? 1.0;
    this.fov = options.fov ?? 75;

    this.root = new THREE.Group();
    this.root.name = 'CameraRigRoot';

    const rd = options.renderDistanceChunks ?? 4;
    const farPlane = (rd * 16) * 1.5;
    this.camera = new THREE.PerspectiveCamera(this.fov, 16 / 9, 0.05, farPlane);
    this.camera.name = 'MainCamera';
    this.camera.rotation.order = 'YXZ';
    this.root.add(this.camera);

    this.setPerspective(this.perspective, true);
    this.bindInputs();
  }

  public updateRenderDistance(renderDistanceChunks: number, chunkSize: number = 16): void {
    const farPlane = Math.max(160, (renderDistanceChunks * chunkSize) * 1.6 + 64);
    this.camera.far = farPlane;
    this.camera.updateProjectionMatrix();
  }

  public setFov(fov: number): void {
    this.fov = THREE.MathUtils.clamp(fov, 50, 100);
    this.camera.fov = this.fov;
    this.camera.updateProjectionMatrix();
  }

  public setPerspective(mode: CameraPerspective, instant: boolean = false): void {
    this.perspective = mode;

    if (mode === 'FPP') {
      this.targetDistance = 0.0;
      this.distance = 0.0;
      this.camera.near = 0.05;
      this.camera.updateProjectionMatrix();
    } else {
      this.targetDistance = 14.0;
      if (instant) this.distance = 14.0;
      this.camera.near = 0.1;
      this.camera.updateProjectionMatrix();
    }

    this.updateRigTransforms();
  }

  public setMouseSensitivity(sens: number): void {
    this.mouseSensitivity = THREE.MathUtils.clamp(sens, 0.2, 5.0);
  }

  public updateRigTransforms(): void {
    const cosPitch = Math.cos(this.pitch);
    const sinPitch = Math.sin(this.pitch);
    const cosYaw = Math.cos(this.yaw);
    const sinYaw = Math.sin(this.yaw);

    const dirX = -sinYaw * cosPitch;
    const dirY = sinPitch;
    const dirZ = -cosYaw * cosPitch;

    if (this.perspective === 'FPP') {
      // In FPP: Mount at player eye level + head bob offset
      const posX = this.targetPosition.x + (this.headBobbingEnabled ? this.bobOffsetX : 0);
      const posY = this.targetPosition.y + (this.headBobbingEnabled ? this.bobOffsetY : 0);
      const posZ = this.targetPosition.z;

      this.camera.position.set(posX, posY, posZ);
      this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
    } else {
      // In TPP: Orbit focus target is player center (X, Y+1.2, Z) with 0 lateral offset
      const target = this.currentPosition;
      this.camera.position.set(
        target.x - dirX * this.distance,
        target.y - dirY * this.distance,
        target.z - dirZ * this.distance
      );
      this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
    }
  }

  private bindInputs(): void {
    // 1. Mouse Move: Unified look angle delta for both FPP and TPP
    window.addEventListener('mousemove', (e) => {
      const isLocked = document.pointerLockElement !== null;

      if (isLocked) {
        this.yaw -= e.movementX * this.mouseSensitivity * 0.002;
        this.pitch -= e.movementY * this.mouseSensitivity * 0.002;

        // Clamp pitch to safe spherical limit (~85.4 deg)
        this.pitch = Math.max(-CameraRig.MAX_PITCH, Math.min(CameraRig.MAX_PITCH, this.pitch));
        this.targetYaw = this.yaw;
        this.targetPitch = this.pitch;

        this.updateRigTransforms();
      } else if (this.perspective === 'TPP' && this.isDraggingRightMouse) {
        const deltaX = e.clientX - this.previousMouseX;
        const deltaY = e.clientY - this.previousMouseY;
        this.previousMouseX = e.clientX;
        this.previousMouseY = e.clientY;

        this.targetYaw -= deltaX * 0.006 * this.mouseSensitivity;
        this.targetPitch -= deltaY * 0.006 * this.mouseSensitivity;
        this.targetPitch = Math.max(-CameraRig.MAX_PITCH, Math.min(CameraRig.MAX_PITCH, this.targetPitch));

        this.yaw = this.targetYaw;
        this.pitch = this.targetPitch;
        this.updateRigTransforms();
      }
    });

    window.addEventListener('mousedown', (e) => {
      if (this.perspective === 'TPP' && e.button === 2) {
        this.isDraggingRightMouse = true;
        this.previousMouseX = e.clientX;
        this.previousMouseY = e.clientY;
        e.preventDefault();
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 2) {
        this.isDraggingRightMouse = false;
      }
    });

    window.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    // Zoom in TPP
    window.addEventListener('wheel', (e) => {
      if (this.perspective === 'TPP') {
        this.targetDistance += Math.sign(e.deltaY) * 1.5;
        this.targetDistance = THREE.MathUtils.clamp(this.targetDistance, this.minDistance, this.maxDistance);
      }
    }, { passive: true });
  }

  public setTarget(x: number, y: number, z: number): void {
    if (this.perspective === 'FPP') {
      // Mount at player eye level: Y = 1.65 above ground
      this.targetPosition.set(x, y + 1.65, z);
    } else {
      // Center of player body in TPP: Y = 1.2 above ground
      this.targetPosition.set(x, y + 1.2, z);
    }
  }

  public getYaw(): number {
    return this.yaw;
  }

  public getPitch(): number {
    return this.pitch;
  }

  public update(
    delta: number,
    gamepadRightStickX: number = 0,
    gamepadRightStickY: number = 0,
    qPressed: boolean = false,
    ePressed: boolean = false,
    isMoving: boolean = false,
    speedRatio: number = 0
  ): void {
    const validDelta = (Number.isFinite(delta) && delta > 0) ? Math.min(delta, 0.1) : 0.016;

    // 1. Keyboard Orbit (Q / E)
    if (qPressed) {
      this.targetYaw += this.rotateSpeed * validDelta;
    }
    if (ePressed) {
      this.targetYaw -= this.rotateSpeed * validDelta;
    }

    // 2. Gamepad Right Stick
    if (Math.abs(gamepadRightStickX) > 0.15) {
      this.targetYaw -= gamepadRightStickX * this.rotateSpeed * validDelta * 1.5;
    }
    if (Math.abs(gamepadRightStickY) > 0.15) {
      this.targetPitch -= gamepadRightStickY * this.rotateSpeed * validDelta * 1.2;
      this.targetPitch = Math.max(-CameraRig.MAX_PITCH, Math.min(CameraRig.MAX_PITCH, this.targetPitch));
    }

    // 3. Head Bobbing & View Sway
    if (this.perspective === 'FPP' && this.headBobbingEnabled && isMoving) {
      this.bobTimer += validDelta * (10.0 * Math.max(0.5, speedRatio));
      this.bobOffsetY = Math.sin(this.bobTimer) * 0.06 * Math.min(1.0, speedRatio);
      this.bobOffsetX = Math.cos(this.bobTimer * 0.5) * 0.03 * Math.min(1.0, speedRatio);
    } else {
      this.bobOffsetY = THREE.MathUtils.damp(this.bobOffsetY, 0, 12, validDelta);
      this.bobOffsetX = THREE.MathUtils.damp(this.bobOffsetX, 0, 12, validDelta);
    }

    // 4. Transform Updates
    if (this.perspective === 'FPP') {
      this.yaw = this.targetYaw;
      this.pitch = this.targetPitch;
      this.currentPosition.copy(this.targetPosition);
    } else {
      const lerpSpeed = this.cameraSmoothingEnabled ? 16 : 40;
      this.yaw = THREE.MathUtils.damp(this.yaw, this.targetYaw, lerpSpeed, validDelta);
      this.pitch = THREE.MathUtils.damp(this.pitch, this.targetPitch, lerpSpeed, validDelta);
      this.distance = THREE.MathUtils.damp(this.distance, this.targetDistance, 14, validDelta);
      this.currentPosition.copy(this.targetPosition);
    }

    this.updateRigTransforms();
  }

  public setAspect(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }
}
