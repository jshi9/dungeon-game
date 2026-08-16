import * as THREE from 'three';
import { CharacterModel } from './CharacterModel';
import { SurfaceManager } from '../terrain/SurfaceManager';
import { DungeonManager } from '../terrain/DungeonManager';
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
  } {
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    let moveX = 0;
    let moveZ = 0;
    let rightStickX = 0;
    let rightStickY = 0;
    let sprint = false;

    for (const gp of gamepads) {
      if (!gp) continue;
      const lx = gp.axes[0] || 0;
      const lz = gp.axes[1] || 0;
      if (Math.hypot(lx, lz) > 0.18) {
        moveX = lx;
        moveZ = lz;
      }
      if (gp.buttons[14]?.pressed) moveX = -1;
      if (gp.buttons[15]?.pressed) moveX = 1;
      if (gp.buttons[12]?.pressed) moveZ = -1;
      if (gp.buttons[13]?.pressed) moveZ = 1;

      const rx = gp.axes[2] || 0;
      const ry = gp.axes[3] || 0;
      if (Math.abs(rx) > 0.18) rightStickX = rx;
      if (Math.abs(ry) > 0.18) rightStickY = ry;

      if (gp.buttons[0]?.pressed || gp.buttons[10]?.pressed) {
        sprint = true;
      }
      break;
    }

    return { moveX, moveZ, rightStickX, rightStickY, sprint };
  }

  public update(delta: number, cameraYaw: number): void {
    const validDelta = (Number.isFinite(delta) && delta > 0) ? Math.min(delta, 0.1) : 0.016;

    // If input is paused (e.g. settings modal open), decelerate to 0
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
      // In First-Person, player body orientation strictly matches camera yaw
      this.facingAngle = cameraYaw;
      this.targetFacingAngle = cameraYaw;
      this.model.group.rotation.y = cameraYaw;
    } else {
      // In Third-Person, 8-directional snapping
      const moveMag = Math.hypot(worldDirX, worldDirZ);
      if (this.isMoving && moveMag > 0.001) {
        const rawAngle = Math.atan2(worldDirX, worldDirZ);
        if (Number.isFinite(rawAngle)) {
          const snapStep = Math.PI / 4;
          this.targetFacingAngle = Math.round(rawAngle / snapStep) * snapStep;
        }
      }

      let diff = this.targetFacingAngle - this.facingAngle;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      this.facingAngle += diff * Math.min(1.0, 14 * validDelta);
      this.model.group.rotation.y = this.facingAngle;
    }

    // 6. Update Character Mesh & Walk Cycle
    this.model.group.position.copy(this.position);
    this.model.updateAnimation(
      this.isMoving,
      validDelta,
      Math.hypot(this.velocity.x, this.velocity.z) / this.moveSpeed
    );
  }

  private applyMovementAndCollisions(delta: number): void {
    const moveDistX = this.velocity.x * delta;
    const moveDistZ = this.velocity.z * delta;

    if (this.currentMode === 'surface' && this.surfaceManager) {
      const currentH = this.surfaceManager.getElevation(this.position.x, this.position.z);
      const nextX = this.position.x + moveDistX;
      const nextZ = this.position.z + moveDistZ;
      const nextH = this.surfaceManager.getElevation(nextX, nextZ);

      const heightDiff = nextH - currentH;

      if (heightDiff <= this.maxStepHeight) {
        this.position.x = nextX;
        this.position.z = nextZ;
        this.position.y = THREE.MathUtils.damp(this.position.y, nextH, 16, delta);
      } else {
        const nextHX = this.surfaceManager.getElevation(nextX, this.position.z);
        if (nextHX - currentH <= this.maxStepHeight) {
          this.position.x = nextX;
          this.position.y = THREE.MathUtils.damp(this.position.y, nextHX, 16, delta);
        }

        const nextHZ = this.surfaceManager.getElevation(this.position.x, nextZ);
        if (nextHZ - currentH <= this.maxStepHeight) {
          this.position.z = nextZ;
          this.position.y = THREE.MathUtils.damp(this.position.y, nextHZ, 16, delta);
        }
      }

      const finalGroundY = this.surfaceManager.getElevation(this.position.x, this.position.z);
      if (this.position.y < finalGroundY) {
        this.position.y = finalGroundY;
      }
    } else if (this.currentMode === 'dungeon' && this.dungeonManager) {
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
    }
  }
}
