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
}

export class CameraRig {
  public root: THREE.Group;
  public yawGroup: THREE.Group;
  public pitchGroup: THREE.Group;
  public camera: THREE.PerspectiveCamera;

  public perspective: CameraPerspective = 'FPP';
  public mouseSensitivity: number = 1.0;

  public targetPosition: THREE.Vector3 = new THREE.Vector3();
  public currentPosition: THREE.Vector3 = new THREE.Vector3();

  // Unified yaw and pitch across FPP and TPP
  public yaw: number = 0;
  public targetYaw: number = 0;

  // Pitch: 0 = horizon, +1.45 rad = look up, -1.45 rad = look down
  public pitch: number = 0;
  public targetPitch: number = 0;

  public distance: number = 0;
  public targetDistance: number = 0;

  public minDistance: number = 4.0;
  public maxDistance: number = 26.0;
  public followSpeed: number = 18.0;
  public rotateSpeed: number = 2.5;

  private isDraggingRightMouse: boolean = false;
  private previousMouseX: number = 0;
  private previousMouseY: number = 0;

  constructor(options: CameraRigOptions = {}) {
    this.perspective = options.perspective ?? 'FPP';
    this.mouseSensitivity = options.mouseSensitivity ?? 1.0;

    this.root = new THREE.Group();
    this.root.name = 'CameraRigRoot';

    this.yawGroup = new THREE.Group();
    this.yawGroup.name = 'CameraYawGroup';
    this.root.add(this.yawGroup);

    this.pitchGroup = new THREE.Group();
    this.pitchGroup.name = 'CameraPitchGroup';
    this.yawGroup.add(this.pitchGroup);

    this.camera = new THREE.PerspectiveCamera(72, 16 / 9, 0.05, 250);
    this.camera.name = 'MainCamera';
    this.camera.rotation.order = 'YXZ';
    this.pitchGroup.add(this.camera);

    this.setPerspective(this.perspective, true);
    this.bindInputs();
  }

  public setPerspective(mode: CameraPerspective, instant: boolean = false): void {
    this.perspective = mode;

    if (mode === 'FPP') {
      this.targetDistance = 0.0;
      this.distance = 0.0;
      this.camera.fov = 72;
      this.camera.near = 0.05;
      this.camera.updateProjectionMatrix();
    } else {
      this.targetDistance = 14.0;
      if (instant) this.distance = 14.0;
      this.camera.fov = 45;
      this.camera.near = 0.1;
      this.camera.updateProjectionMatrix();
    }

    this.updateRigTransforms();
  }

  public setMouseSensitivity(sens: number): void {
    this.mouseSensitivity = THREE.MathUtils.clamp(sens, 0.2, 5.0);
  }

  public updateRigTransforms(): void {
    this.yawGroup.rotation.set(0, 0, 0);
    this.pitchGroup.rotation.set(0, 0, 0);

    if (this.perspective === 'FPP') {
      // In FPP mode: Camera at player eye level with direct YXZ Euler look
      this.camera.position.set(this.targetPosition.x, this.targetPosition.y, this.targetPosition.z);
      this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
    } else {
      // In TPP mode: Compute spherical position behind player matching identical look direction
      const targetY = this.currentPosition.y;
      const dirX = -Math.sin(this.yaw) * Math.cos(this.pitch);
      const dirY = Math.sin(this.pitch);
      const dirZ = -Math.cos(this.yaw) * Math.cos(this.pitch);

      const camX = this.currentPosition.x - dirX * this.distance;
      const camY = targetY - dirY * this.distance;
      const camZ = this.currentPosition.z - dirZ * this.distance;

      this.camera.position.set(camX, camY, camZ);
      this.camera.lookAt(this.currentPosition.x, targetY, this.currentPosition.z);
    }
  }

  private bindInputs(): void {
    // 1. Mouse Move: Unified look angle delta for both FPP and TPP
    window.addEventListener('mousemove', (e) => {
      const isLocked = document.pointerLockElement !== null;

      if (isLocked) {
        this.yaw -= e.movementX * this.mouseSensitivity * 0.002;
        this.pitch -= e.movementY * this.mouseSensitivity * 0.002;

        // Clamp vertical pitch between -1.45 rad (~ -83 deg) and +1.45 rad (~ +83 deg)
        this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch));
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
        this.targetPitch = Math.max(-1.45, Math.min(1.45, this.targetPitch));

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
      // Center of body/chest in TPP: Y = 1.4 above ground
      this.targetPosition.set(x, y + 1.4, z);
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
    ePressed: boolean = false
  ): void {
    const validDelta = (Number.isFinite(delta) && delta > 0) ? Math.min(delta, 0.1) : 0.016;

    // 1. Keyboard Orbit (Q / E)
    if (qPressed) {
      this.targetYaw += this.rotateSpeed * validDelta;
    }
    if (ePressed) {
      this.targetYaw -= this.rotateSpeed * validDelta;
    }

    // 2. Gamepad Right Analog Stick (Horizontal & Vertical)
    if (Math.abs(gamepadRightStickX) > 0.15) {
      this.targetYaw -= gamepadRightStickX * this.rotateSpeed * validDelta * 1.5;
    }
    if (Math.abs(gamepadRightStickY) > 0.15) {
      this.targetPitch -= gamepadRightStickY * this.rotateSpeed * validDelta * 1.2;
      this.targetPitch = Math.max(-1.45, Math.min(1.45, this.targetPitch));
    }

    // 3. Transform Updates
    if (this.perspective === 'FPP') {
      // Direct tracking in FPP for crisp zero-latency camera movement
      this.yaw = this.targetYaw;
      this.pitch = this.targetPitch;
      this.root.position.copy(this.targetPosition);
    } else {
      // Smooth interpolation in TPP
      this.yaw = THREE.MathUtils.damp(this.yaw, this.targetYaw, 14, validDelta);
      this.pitch = THREE.MathUtils.damp(this.pitch, this.targetPitch, 14, validDelta);
      this.distance = THREE.MathUtils.damp(this.distance, this.targetDistance, 14, validDelta);
      this.currentPosition.lerp(this.targetPosition, Math.min(1.0, this.followSpeed * validDelta));
      this.root.position.copy(this.currentPosition);
    }

    this.updateRigTransforms();
  }

  public setAspect(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }
}
