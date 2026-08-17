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

  public moveSpeed: number = 6.5;
  public sprintMultiplier: number = 1.6;
  public acceleration: number = 24.0;
  public deceleration: number = 28.0;

  // Jump & Gravity Mechanics
  public jumpVelocity: number = 8.5; // ~1.5 blocks jump height
  public gravity: number = -22.0;
  public isGrounded: boolean = true;

  // Collision dimensions & step height for smooth hill climbing
  public playerRadius: number = 0.35;
  public playerHeight: number = 1.8;
  public maxStepHeight: number = 1.35; // Allows smooth walking up 1-block steps & hills without jumping

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
    let groundY = y;
    if (this.currentMode === 'surface' && this.surfaceManager) {
      groundY = this.surfaceManager.getElevation(x, z);
    } else if (this.currentMode === 'dungeon') {
      groundY = 0;
    } else if (this.currentMode === 'library' && this.libraryManager) {
      groundY = this.libraryManager.getElevation(x, z, y);
    }

    this.position.set(x, groundY, z);
    this.velocity.set(0, 0, 0);
    this.isGrounded = true;
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
      sprint: !!gp.buttons[1]?.pressed, // B button or trigger
      jump: !!gp.buttons[0]?.pressed,   // A button
      switchMode: !!gp.buttons[2]?.pressed,
      switchView: !!gp.buttons[3]?.pressed
    };
  }

  public update(delta: number, cameraYaw: number): void {
    const validDelta = (Number.isFinite(delta) && delta > 0) ? Math.min(delta, 0.1) : 0.016;

    // If input is paused (e.g. settings modal or book reader open), decelerate smoothly to 0
    if (this.isInputPaused) {
      this.velocity.x = THREE.MathUtils.damp(this.velocity.x, 0, this.deceleration, validDelta);
      this.velocity.z = THREE.MathUtils.damp(this.velocity.z, 0, this.deceleration, validDelta);
      this.isMoving = false;
      this.integratePhysics(validDelta);
      this.model.group.position.copy(this.position);
      this.model.updateAnimation(false, validDelta, 0);
      return;
    }

    // 1. Gather Movement & Jump Inputs
    let inputX = 0;
    let inputZ = 0;

    if (this.keys['KeyW'] || this.keys['ArrowUp']) inputZ -= 1;
    if (this.keys['KeyS'] || this.keys['ArrowDown']) inputZ += 1;
    if (this.keys['KeyA'] || this.keys['ArrowLeft']) inputX -= 1;
    if (this.keys['KeyD'] || this.keys['ArrowRight']) inputX += 1;

    let isSprinting = !!(this.keys['ShiftLeft'] || this.keys['ShiftRight']);
    const jumpRequested = !!this.keys['Space'];

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

    // 3. Smooth Acceleration & Deceleration (Horizontal)
    const accelRate = this.isMoving ? this.acceleration : this.deceleration;
    this.velocity.x = THREE.MathUtils.damp(this.velocity.x, targetVelX, accelRate, validDelta);
    this.velocity.z = THREE.MathUtils.damp(this.velocity.z, targetVelZ, accelRate, validDelta);

    // 4. Jump Trigger (Space / Gamepad A)
    if ((jumpRequested || gp.jump) && this.isGrounded) {
      this.velocity.y = this.jumpVelocity;
      this.isGrounded = false;
    }

    // 5. Sub-Stepped Swept Physics & Collision Loop
    this.integratePhysics(validDelta);

    // 6. Facing Orientation
    if (this.perspective === 'FPP') {
      this.facingAngle = cameraYaw;
      this.model.group.rotation.y = cameraYaw;
    } else {
      if (this.isMoving) {
        this.targetFacingAngle = Math.atan2(this.velocity.x, this.velocity.z);
        let diff = this.targetFacingAngle - this.facingAngle;
        while (diff < -Math.PI) diff += Math.PI * 2;
        while (diff > Math.PI) diff -= Math.PI * 2;
        this.facingAngle += diff * Math.min(1.0, 16.0 * validDelta);
      }
      this.model.group.rotation.y = this.facingAngle;
    }

    // 7. Synchronize Visual Model Position
    this.model.group.position.copy(this.position);

    // 8. Update Model Walk Animation
    const speedRatio = Math.hypot(this.velocity.x, this.velocity.z) / this.moveSpeed;
    this.model.updateAnimation(this.isMoving && this.isGrounded, validDelta, speedRatio);
  }

  /**
   * Sub-Stepped Continuous Swept Collision Loop
   * Subdivides delta time into sub-steps for high velocity / frame drops
   */
  private integratePhysics(totalDelta: number): void {
    const horizontalSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    let numSubSteps = 1;

    if (totalDelta > 0.033 || horizontalSpeed > 6.0 || Math.abs(this.velocity.y) > 4.0) {
      numSubSteps = 4;
    } else if (totalDelta > 0.02 || horizontalSpeed > 3.0) {
      numSubSteps = 2;
    }

    const subDelta = totalDelta / numSubSteps;

    for (let step = 0; step < numSubSteps; step++) {
      this.resolveSubStep(subDelta);
    }
  }

  /**
   * Sequential Axis-Independent Resolution (Y -> X -> Z)
   */
  private resolveSubStep(dt: number): void {
    const moveDistX = this.velocity.x * dt;
    const moveDistZ = this.velocity.z * dt;

    if (this.currentMode === 'surface' && this.surfaceManager) {
      // 1. Surface Terrain Collision Resolution
      // Step A: Apply Vertical Gravity & Jump Integration
      if (!this.isGrounded || this.velocity.y > 0) {
        this.velocity.y += this.gravity * dt;
        this.position.y += this.velocity.y * dt;
      }

      // Step B: Horizontal X Movement with Step-Up Check
      const nextX = this.position.x + moveDistX;
      if (!this.isSurfaceWallBlocked(nextX, this.position.z, this.position.y)) {
        this.position.x = nextX;
      }

      // Step C: Horizontal Z Movement with Step-Up Check
      const nextZ = this.position.z + moveDistZ;
      if (!this.isSurfaceWallBlocked(this.position.x, nextZ, this.position.y)) {
        this.position.z = nextZ;
      }

      // Step D: Ground Check & Step Climbing Resolution
      const groundY = this.getSurfaceFootprintGroundHeight(this.position.x, this.position.z, this.position.y);
      if (this.position.y <= groundY) {
        this.position.y = groundY;
        this.velocity.y = 0;
        this.isGrounded = true;
      } else if (this.position.y > groundY + 0.25) {
        this.isGrounded = false;
      } else if (this.isGrounded && this.velocity.y <= 0) {
        // Smoothly adhere to ground/slopes when walking
        this.position.y = THREE.MathUtils.damp(this.position.y, groundY, 32, dt);
        if (Math.abs(this.position.y - groundY) < 0.05) {
          this.position.y = groundY;
        }
      }
    } else if (this.currentMode === 'dungeon' && this.dungeonManager) {
      // 2. BSP Dungeon Wall Collision Resolution
      if (!this.isGrounded || this.velocity.y > 0) {
        this.velocity.y += this.gravity * dt;
        this.position.y += this.velocity.y * dt;
      }

      const r = this.playerRadius;

      // X Movement & Sliding along Z
      const testX = this.position.x + moveDistX;
      const blockedX =
        this.dungeonManager.isSolid(testX - r, this.position.z - r) ||
        this.dungeonManager.isSolid(testX + r, this.position.z - r) ||
        this.dungeonManager.isSolid(testX - r, this.position.z + r) ||
        this.dungeonManager.isSolid(testX + r, this.position.z + r);

      if (!blockedX) {
        this.position.x = testX;
      }

      // Z Movement & Sliding along X
      const testZ = this.position.z + moveDistZ;
      const blockedZ =
        this.dungeonManager.isSolid(this.position.x - r, testZ - r) ||
        this.dungeonManager.isSolid(this.position.x + r, testZ - r) ||
        this.dungeonManager.isSolid(this.position.x - r, testZ + r) ||
        this.dungeonManager.isSolid(this.position.x + r, testZ + r);

      if (!blockedZ) {
        this.position.z = testZ;
      }

      if (this.position.y <= 0) {
        this.position.y = 0;
        this.velocity.y = 0;
        this.isGrounded = true;
      } else {
        this.isGrounded = false;
      }
    } else if (this.currentMode === 'library' && this.libraryManager) {
      // 3. Grand Cathedral Library Multi-Tier Resolution
      if (!this.isGrounded || this.velocity.y > 0) {
        this.velocity.y += this.gravity * dt;
        this.position.y += this.velocity.y * dt;
      }

      const r = this.playerRadius;

      // X Movement & Step-Up Check
      const nextX = this.position.x + moveDistX;
      const targetGroundX = this.libraryManager.getElevation(nextX, this.position.z, this.position.y);
      const isHeightStepBlockedX = targetGroundX > this.position.y + this.maxStepHeight + 0.2;
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
      const isHeightStepBlockedZ = targetGroundZ > this.position.y + this.maxStepHeight + 0.2;
      const blockedZ =
        isHeightStepBlockedZ ||
        this.libraryManager.isBlocked(this.position.x, nextZ - r, this.position.y) ||
        this.libraryManager.isBlocked(this.position.x, nextZ + r, this.libraryManager.getElevation(this.position.x, nextZ, this.position.y));

      if (!blockedZ) {
        this.position.z = nextZ;
      }

      // Vertical Ground Height Resolution
      const targetGroundY = this.libraryManager.getElevation(this.position.x, this.position.z, this.position.y);
      if (this.position.y <= targetGroundY) {
        this.position.y = targetGroundY;
        this.velocity.y = 0;
        this.isGrounded = true;
      } else if (this.position.y > targetGroundY + 0.25) {
        this.isGrounded = false;
      } else if (this.isGrounded && this.velocity.y <= 0) {
        this.position.y = THREE.MathUtils.damp(this.position.y, targetGroundY, 32, dt);
        if (Math.abs(this.position.y - targetGroundY) < 0.05) {
          this.position.y = targetGroundY;
        }
      }
    }
  }

  /**
   * 4-Point Base Footprint Ground Sampling with step-height tolerance
   */
  public getSurfaceFootprintGroundHeight(x: number, z: number, currentY: number): number {
    if (!this.surfaceManager) return 0;
    const r = this.playerRadius * 0.85;

    // 4 Base corners + center point
    const corners = [
      { x: x, z: z },
      { x: x - r, z: z - r },
      { x: x + r, z: z - r },
      { x: x - r, z: z + r },
      { x: x + r, z: z + r }
    ];

    let highestWalkable = -Infinity;
    const centerH = this.surfaceManager.getElevation(x, z);

    for (const p of corners) {
      const h = this.surfaceManager.getElevation(p.x, p.z);
      // If within step-up tolerance of player's current ground position
      if (h <= currentY + this.maxStepHeight + 0.2) {
        if (h > highestWalkable) {
          highestWalkable = h;
        }
      }
    }

    if (highestWalkable === -Infinity) {
      return centerH;
    }

    return highestWalkable;
  }

  /**
   * Check if horizontal bounding box hits a steep wall/cliff higher than maxStepHeight
   */
  public isSurfaceWallBlocked(x: number, z: number, currentY: number): boolean {
    if (!this.surfaceManager) return false;
    const r = this.playerRadius;

    const testPoints = [
      { x: x - r, z: z - r },
      { x: x + r, z: z - r },
      { x: x - r, z: z + r },
      { x: x + r, z: z + r },
      { x: x, z: z - r },
      { x: x, z: z + r },
      { x: x - r, z: z },
      { x: x + r, z: z }
    ];

    for (const p of testPoints) {
      const h = this.surfaceManager.getElevation(p.x, p.z);
      if (h > currentY + this.maxStepHeight) {
        return true;
      }
    }
    return false;
  }
}
