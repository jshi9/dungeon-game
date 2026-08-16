import * as THREE from 'three';
import { CharacterModel } from './CharacterModel';
import { SurfaceManager } from '../terrain/SurfaceManager';
import { DungeonManager } from '../terrain/DungeonManager';
import { LibraryManager } from '../terrain/LibraryManager';
import { EnvironmentMode } from '../lighting/LightingManager';
import { CameraPerspective } from '../camera/CameraRig';

export class CharacterController {
  public model: CharacterModel;
  public position: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
  public velocity: THREE.Vector3 = new THREE.Vector3(0, 0, 0);

  public moveSpeed: number = 5.5;
  public sprintMultiplier: number = 1.5;
  public acceleration: number = 18.0;
  public deceleration: number = 22.0;
  public maxStepHeight: number = 1.05;
  public playerRadius: number = 0.35;

  private keys: Record<string, boolean> = {};
  public isMoving: boolean = false;
  public facingAngle: number = 0;
  public targetFacingAngle: number = 0;
  public perspective: CameraPerspective = 'FPP';
  public isInputPaused: boolean = false;

  // Collision providers
  public surfaceManager?: SurfaceManager;
  public dungeonManager?: DungeonManager;
  public libraryManager?: LibraryManager;
  public currentMode: EnvironmentMode = 'surface';

  constructor(model: CharacterModel) {
    this.model = model;
    this.bindKeyboard();
  }

  private bindKeyboard(): void {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });
  }

  public setPerspective(mode: CameraPerspective): void {
    this.perspective = mode;
    this.model.setFirstPerson(mode === 'FPP');
  }

  public setPosition(x: number, y: number, z: number): void {
    this.position.set(x, y, z);
    this.model.group.position.copy(this.position);
  }

  public getGamepadInput(): {
    moveX: number;
    moveZ: number;
    rightStickX: number;
    rightStickY: number;
    sprint: boolean;
    jump: boolean;
    switchMode: boolean;
    switchView: boolean;
  } {
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    const gp = Array.from(gamepads).find((g) => g !== null && g.connected);

    if (!gp) {
      return {
        moveX: 0,
        moveZ: 0,
        rightStickX: 0,
        rightStickY: 0,
        sprint: false,
        jump: false,
        switchMode: false,
        switchView: false
      };
    }

    const deadzone = 0.15;
    const applyDeadzone = (val: number) => (Math.abs(val) > deadzone ? val : 0);

    return {
      moveX: applyDeadzone(gp.axes[0] ?? 0),
      moveZ: applyDeadzone(gp.axes[1] ?? 0),
      rightStickX: applyDeadzone(gp.axes[2] ?? 0),
      rightStickY: applyDeadzone(gp.axes[3] ?? 0),
      sprint: !!gp.buttons[0]?.pressed,
      jump: !!gp.buttons[1]?.pressed,
      switchMode: !!gp.buttons[2]?.pressed,
      switchView: !!gp.buttons[3]?.pressed
    };
  }

  public update(delta: number, cameraYaw: number): void {
    const validDelta = (Number.isFinite(delta) && delta > 0) ? Math.min(delta, 0.1) : 0.016;

    // If input is paused (e.g. settings modal or book reader open), decelerate to 0
    if (this.isInputPaused) {
      this.velocity.x = THREE.MathUtils.damp(this.velocity.x, 0, this.deceleration, validDelta);
      this.velocity.z = THREE.MathUtils.damp(this.velocity.z, 0, this.deceleration, validDelta);
      this.isMoving = false;
      this.applyMovementAndCollisions(validDelta);
      this.model.group.position.copy(this.position);
      this.model.updateAnimation(false, validDelta, 0);
      return;
    }

    // 1. Gather Inputs
    let inputX = 0;
    let inputZ = 0;

    if (this.keys['KeyW'] || this.keys['ArrowUp']) inputZ -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) inputZ += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) inputX -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) inputX += 1;

    let isSprinting = !!(this.keys['ShiftLeft'] || this.keys['ShiftRight']);

    const gp = this.getGamepadInput();
    if (Math.hypot(gp.moveX, gp.moveZ) > 0.1) {
      inputX = gp.moveX;
      inputZ = gp.moveZ;
    }
    if (gp.sprint) isSprinting = true;

    const inputLen = Math.hypot(inputX, inputZ);
    if (inputLen > 1.0) {
      inputX /= inputLen;
      inputZ /= inputLen;
    }

    this.isMoving = inputLen > 0.05;

    // 2. Camera-Relative Movement Calculation
    const forwardX = -Math.sin(cameraYaw);
    const forwardZ = -Math.cos(cameraYaw);
    const rightX = Math.cos(cameraYaw);
    const rightZ = -Math.sin(cameraYaw);

    const worldDirX = rightX * inputX + forwardX * (-inputZ);
    const worldDirZ = rightZ * inputX + forwardZ * (-inputZ);

    const targetSpeed = this.isMoving ? this.moveSpeed * (isSprinting ? this.sprintMultiplier : 1.0) : 0;
    const targetVelX = worldDirX * targetSpeed;
    const targetVelZ = worldDirZ * targetSpeed;

    // 3. Smooth Acceleration & Deceleration
    const accelRate = this.isMoving ? this.acceleration : this.deceleration;
    this.velocity.x = THREE.MathUtils.damp(this.velocity.x, targetVelX, accelRate, validDelta);
    this.velocity.z = THREE.MathUtils.damp(this.velocity.z, targetVelZ, accelRate, validDelta);

    // 4. Move with Collision Detection & Step-Up
    this.applyMovementAndCollisions(validDelta);

    // 5. Facing Orientation
    if (this.perspective === 'FPP') {
      this.facingAngle = cameraYaw;
      this.model.group.rotation.y = cameraYaw;
    } else {
      if (this.isMoving) {
        this.targetFacingAngle = Math.atan2(this.velocity.x, this.velocity.z);
        let diff = this.targetFacingAngle - this.facingAngle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.facingAngle += diff * Math.min(1.0, 14.0 * validDelta);
      }
      this.model.group.rotation.y = this.facingAngle;
    }

    // 6. Synchronize Visual Model Position
    this.model.group.position.copy(this.position);

    // 7. Update Model Limb Walk Animation
    const speedRatio = Math.hypot(this.velocity.x, this.velocity.z) / this.moveSpeed;
    this.model.updateAnimation(this.isMoving, validDelta, speedRatio);
  }

  /**
   * Multi-point Footprint Terrain Height Sampling (9 points around base radius)
   */
  public getFootprintGroundHeight(x: number, z: number, currentY: number): number {
    if (!this.surfaceManager) return 0;
    const r = this.playerRadius;
    const diag = r * 0.7071;

    const points = [
      { x: x, z: z },
      { x: x, z: z - r },
      { x: x, z: z + r },
      { x: x + r, z: z },
      { x: x - r, z: z },
      { x: x + diag, z: z - diag },
      { x: x - diag, z: z - diag },
      { x: x + diag, z: z + diag },
      { x: x - diag, z: z + diag },
    ];

    let maxWalkableH = -Infinity;
    const centerH = this.surfaceManager.getElevation(x, z);

    for (const p of points) {
      const h = this.surfaceManager.getElevation(p.x, p.z);
      if (h <= currentY + this.maxStepHeight + 0.1) {
        if (h > maxWalkableH) {
          maxWalkableH = h;
        }
      }
    }

    if (maxWalkableH === -Infinity) {
      return centerH;
    }

    return maxWalkableH;
  }

  /**
   * Check if any footprint bounding point hits a cliff higher than maxStepHeight
   */
  public isWallBlocked(x: number, z: number, currentY: number): boolean {
    if (!this.surfaceManager) return false;
    const r = this.playerRadius;
    const diag = r * 0.7071;

    const points = [
      { x: x, z: z - r },
      { x: x, z: z + r },
      { x: x + r, z: z },
      { x: x - r, z: z },
      { x: x + diag, z: z - diag },
      { x: x - diag, z: z - diag },
      { x: x + diag, z: z + diag },
      { x: x - diag, z: z + diag },
    ];

    for (const p of points) {
      const h = this.surfaceManager.getElevation(p.x, p.z);
      if (h > currentY + this.maxStepHeight + 0.1) {
        return true;
      }
    }
    return false;
  }

  private applyMovementAndCollisions(delta: number): void {
    const moveDistX = this.velocity.x * delta;
    const moveDistZ = this.velocity.z * delta;

    if (this.currentMode === 'surface' && this.surfaceManager) {
      // 1. Surface Terrain Collision
      const nextX = this.position.x + moveDistX;
      const isWallBlockedX = this.isWallBlocked(nextX, this.position.z, this.position.y);
      if (!isWallBlockedX) {
        this.position.x = nextX;
      }

      const nextZ = this.position.z + moveDistZ;
      const isWallBlockedZ = this.isWallBlocked(this.position.x, nextZ, this.position.y);
      if (!isWallBlockedZ) {
        this.position.z = nextZ;
      }

      // Multi-Point Footprint Ground Height Resolution
      const targetGroundY = this.getFootprintGroundHeight(this.position.x, this.position.z, this.position.y);
      this.position.y = THREE.MathUtils.damp(this.position.y, targetGroundY, 20, delta);
      if (this.position.y < targetGroundY) {
        this.position.y = targetGroundY;
      }
    } else if (this.currentMode === 'dungeon' && this.dungeonManager) {
      // 2. BSP Dungeon Wall Collision
      const r = this.playerRadius;

      const testX = this.position.x + moveDistX;
      const blockedX =
        this.dungeonManager.isSolid(testX - r, this.position.z - r) ||
        this.dungeonManager.isSolid(testX + r, this.position.z - r) ||
        this.dungeonManager.isSolid(testX - r, this.position.z + r) ||
        this.dungeonManager.isSolid(testX + r, this.position.z + r);

      if (!blockedX) {
        this.position.x = testX;
      }

      const testZ = this.position.z + moveDistZ;
      const blockedZ =
        this.dungeonManager.isSolid(this.position.x - r, testZ - r) ||
        this.dungeonManager.isSolid(this.position.x + r, testZ - r) ||
        this.dungeonManager.isSolid(this.position.x - r, testZ + r) ||
        this.dungeonManager.isSolid(this.position.x + r, testZ + r);

      if (!blockedZ) {
        this.position.z = testZ;
      }

      this.position.y = 0;
    } else if (this.currentMode === 'library' && this.libraryManager) {
      // 3. Grand Cathedral Library Collision & Height
      const r = this.playerRadius;

      // X Movement & Step-Up Check
      const nextX = this.position.x + moveDistX;
      const targetGroundX = this.libraryManager.getElevation(nextX, this.position.z, this.position.y);
      const isHeightStepBlockedX = targetGroundX > this.position.y + this.maxStepHeight;
      const blockedX =
        isHeightStepBlockedX ||
        this.libraryManager.isBlocked(nextX - r, this.position.z, this.position.y) ||
        this.libraryManager.isBlocked(nextX + r, this.position.z, this.position.y);

      if (!blockedX) {
        this.position.x = nextX;
      }

      // Z Movement & Step-Up Check
      const nextZ = this.position.z + moveDistZ;
      const targetGroundZ = this.libraryManager.getElevation(this.position.x, nextZ, this.position.y);
      const isHeightStepBlockedZ = targetGroundZ > this.position.y + this.maxStepHeight;
      const blockedZ =
        isHeightStepBlockedZ ||
        this.libraryManager.isBlocked(this.position.x, nextZ - r, this.position.y) ||
        this.libraryManager.isBlocked(this.position.x, nextZ + r, this.position.y);

      if (!blockedZ) {
        this.position.z = nextZ;
      }

      // Smooth Ground Height Resolution
      const targetGroundY = this.libraryManager.getElevation(this.position.x, this.position.z, this.position.y);
      if (targetGroundY <= this.position.y + this.maxStepHeight + 0.1 || targetGroundY < this.position.y) {
        this.position.y = THREE.MathUtils.damp(this.position.y, targetGroundY, 20, delta);
        if (this.position.y < targetGroundY) {
          this.position.y = targetGroundY;
        }
      }
    }
  }
}
