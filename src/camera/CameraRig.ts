import * as THREE from 'three';

export interface CameraRigOptions {
  fov?: number;
  pitchDeg?: number;
  initialYawDeg?: number;
  distance?: number;
  minDistance?: number;
  maxDistance?: number;
  followSpeed?: number;
  rotateSpeed?: number;
}

export class CameraRig {
  public root: THREE.Group;
  public yawGroup: THREE.Group;
  public pitchGroup: THREE.Group;
  public camera: THREE.PerspectiveCamera;

  public targetPosition: THREE.Vector3 = new THREE.Vector3();
  public currentPosition: THREE.Vector3 = new THREE.Vector3();

  public yaw: number = Math.PI / 4; // 45 degrees default
  public targetYaw: number = Math.PI / 4;
  public pitch: number = (35 * Math.PI) / 180; // 35 degrees tilt
  public distance: number = 14.0;
  public targetDistance: number = 14.0;

  public minDistance: number = 6.0;
  public maxDistance: number = 26.0;
  public followSpeed: number = 8.0;
  public rotateSpeed: number = 2.5;

  private isDragging: boolean = false;
  private previousMouseX: number = 0;

  constructor(options: CameraRigOptions = {}) {
    const fov = options.fov ?? 42;
    this.pitch = ((options.pitchDeg ?? 35) * Math.PI) / 180;
    this.yaw = ((options.initialYawDeg ?? 45) * Math.PI) / 180;
    this.targetYaw = this.yaw;
    this.distance = options.distance ?? 14.0;
    this.targetDistance = this.distance;
    this.minDistance = options.minDistance ?? 6.0;
    this.maxDistance = options.maxDistance ?? 26.0;
    this.followSpeed = options.followSpeed ?? 8.0;
    this.rotateSpeed = options.rotateSpeed ?? 2.5;

    this.root = new THREE.Group();
    this.root.name = 'CameraRigRoot';

    this.yawGroup = new THREE.Group();
    this.yawGroup.name = 'CameraYawGroup';
    this.root.add(this.yawGroup);

    this.pitchGroup = new THREE.Group();
    this.pitchGroup.name = 'CameraPitchGroup';
    this.yawGroup.add(this.pitchGroup);

    this.camera = new THREE.PerspectiveCamera(fov, 16 / 9, 0.1, 200);
    this.camera.name = 'MainCamera';
    this.camera.position.set(0, 0, this.distance);
    this.pitchGroup.add(this.camera);

    this.updateRigTransforms();
    this.bindInputs();
  }

  private updateRigTransforms(): void {
    this.yawGroup.rotation.y = this.yaw;
    this.pitchGroup.rotation.x = -this.pitch;
    this.camera.position.set(0, 0, this.distance);
  }

  private bindInputs(): void {
    window.addEventListener('mousedown', (e) => {
      if (e.button === 2) {
        // Right mouse button
        this.isDragging = true;
        this.previousMouseX = e.clientX;
        e.preventDefault();
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const deltaX = e.clientX - this.previousMouseX;
        this.previousMouseX = e.clientX;
        this.targetYaw -= deltaX * 0.006;
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (e.button === 2) {
        this.isDragging = false;
      }
    });

    window.addEventListener('contextmenu', (e) => {
      e.preventDefault(); // Prevent default browser context menu on right click
    });

    window.addEventListener('wheel', (e) => {
      this.targetDistance += Math.sign(e.deltaY) * 1.5;
      this.targetDistance = THREE.MathUtils.clamp(this.targetDistance, this.minDistance, this.maxDistance);
    }, { passive: true });
  }

  public rotateYaw(deltaYaw: number): void {
    this.targetYaw += deltaYaw;
  }

  public setTarget(x: number, y: number, z: number): void {
    this.targetPosition.set(x, y, z);
  }

  public getYaw(): number {
    return this.yaw;
  }

  public update(delta: number, gamepadRightStickX: number = 0, qPressed: boolean = false, ePressed: boolean = false): void {
    // 1. Keyboard Orbit (Q / E)
    if (qPressed) {
      this.targetYaw += this.rotateSpeed * delta;
    }
    if (ePressed) {
      this.targetYaw -= this.rotateSpeed * delta;
    }

    // 2. Gamepad Right Analog Stick Orbit
    if (Math.abs(gamepadRightStickX) > 0.15) {
      this.targetYaw -= gamepadRightStickX * this.rotateSpeed * delta * 1.5;
    }

    // 3. Smooth Yaw & Distance Interpolation
    this.yaw = THREE.MathUtils.damp(this.yaw, this.targetYaw, 12, delta);
    this.distance = THREE.MathUtils.damp(this.distance, this.targetDistance, 10, delta);

    // 4. Smooth Target Position Tracking
    this.currentPosition.lerp(this.targetPosition, Math.min(1.0, this.followSpeed * delta));
    this.root.position.copy(this.currentPosition);

    // 5. Update rotation and camera offset
    this.updateRigTransforms();
  }

  public setAspect(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }
}
