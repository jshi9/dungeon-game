import * as THREE from 'three';
import { TextureAtlas } from '../terrain/TextureAtlas';

export class CharacterModel {
  public group: THREE.Group;
  public bodyGroup: THREE.Group;
  public fpsViewmodelGroup: THREE.Group;
  public camera?: THREE.PerspectiveCamera;

  // Dynamic Lighting Sources
  public torchLight: THREE.PointLight;
  public tppTorchLight: THREE.PointLight;
  public cameraLanternLight: THREE.PointLight;
  public tppLanternLight: THREE.PointLight;
  public flashlightSpot: THREE.SpotLight;
  public flashlightTarget: THREE.Object3D;
  public flashlightForwardLight: THREE.PointLight;
  public flashlightBulbLight: THREE.PointLight;

  public get fpsLanternLight(): THREE.PointLight {
    return this.cameraLanternLight;
  }

  // FPS Viewmodel Props (Mounted directly to camera)
  public fpsSwordGroup: THREE.Group;
  public fpsTorchGroup: THREE.Group;
  public fpsShieldGroup: THREE.Group;
  public fpsLanternGroup: THREE.Group;
  public fpsFlashlightGroup: THREE.Group;
  public fpsFireMesh: THREE.Mesh;
  public fpsFireSparks: THREE.Points;

  // Third-Person Body Parts & Handheld Props
  private leftLegPivot: THREE.Group;
  private rightLegPivot: THREE.Group;
  private leftArmPivot: THREE.Group;
  private rightArmPivot: THREE.Group;
  private torsoMesh: THREE.Mesh;
  private headGroup: THREE.Group;
  private capeMesh: THREE.Mesh;

  private tppSword: THREE.Group;
  private tppTorch: THREE.Group;
  private tppShield: THREE.Group;
  private tppLantern: THREE.Group;
  private tppFlashlight: THREE.Group;

  public isFirstPerson: boolean = true;
  public activeItemId: string | null = null; // Spawns in with EMPTY hands by default
  public isAttacking: boolean = false;
  private attackTime: number = 0;
  private walkTime: number = 0;

  constructor(atlas: TextureAtlas, camera?: THREE.PerspectiveCamera) {
    this.camera = camera;

    this.group = new THREE.Group();
    this.group.name = 'PlayerCharacter';

    // -------------------------------------------------------------
    // A. DYNAMIC LIGHT SOURCES
    // -------------------------------------------------------------
    // 1. Torch Light
    this.torchLight = new THREE.PointLight(0xff8822, 16.0, 32.0, 1.2);
    this.torchLight.position.set(-0.35, -0.15, -0.45);
    this.torchLight.castShadow = false;
    this.torchLight.visible = false;

    this.tppTorchLight = new THREE.PointLight(0xff8822, 14.0, 26.0, 1.2);
    this.tppTorchLight.position.set(-0.42, 0.95, 0.25);
    this.tppTorchLight.visible = false;

    // 2. Lantern Light
    this.cameraLanternLight = new THREE.PointLight(0xffb844, 20.0, 32.0, 1.2);
    this.cameraLanternLight.position.set(0.26, -0.20, -0.46);
    this.cameraLanternLight.visible = false;

    this.tppLanternLight = new THREE.PointLight(0xffb844, 18.0, 30.0, 1.2);
    this.tppLanternLight.position.set(0.42, 0.85, 0.30);
    this.tppLanternLight.visible = false;

    // 3. Flashlight Light
    this.flashlightSpot = new THREE.SpotLight(0xffffff, 45.0, 150.0, Math.PI / 3.2, 0.25, 0.85);
    this.flashlightSpot.position.set(0, 0, 0);
    this.flashlightSpot.castShadow = true;
    this.flashlightSpot.shadow.bias = -0.001;
    this.flashlightSpot.visible = false;

    this.flashlightTarget = new THREE.Object3D();
    this.flashlightTarget.position.set(0, 0, -50.0);
    this.flashlightSpot.target = this.flashlightTarget;

    this.flashlightForwardLight = new THREE.PointLight(0xffffff, 5.0, 40.0, 1.0);
    this.flashlightForwardLight.position.set(0, 0, -5.0);
    this.flashlightForwardLight.visible = false;

    this.flashlightBulbLight = new THREE.PointLight(0xffffff, 4.0, 14.0, 1.1);
    this.flashlightBulbLight.position.set(0.24, -0.20, -0.42);
    this.flashlightBulbLight.visible = false;

    // -------------------------------------------------------------
    // B. FIRST-PERSON VIEWMODEL (Mounted directly to camera)
    // -------------------------------------------------------------
    this.fpsViewmodelGroup = new THREE.Group();
    this.fpsViewmodelGroup.name = 'FPS_Viewmodel';

    // 1. FPS Sword (Right Hand)
    this.fpsSwordGroup = new THREE.Group();
    this.fpsSwordGroup.position.set(0.32, -0.28, -0.45);
    this.fpsSwordGroup.rotation.set(-0.35, 0.18, -0.15);
    this.fpsSwordGroup.visible = false;

    const bladeGeom = new THREE.BoxGeometry(0.065, 0.85, 0.016);
    const bladeMesh = new THREE.Mesh(bladeGeom, atlas.materials.steelBlade);
    bladeMesh.position.set(0, 0.45, 0);
    this.fpsSwordGroup.add(bladeMesh);

    const guardGeom = new THREE.BoxGeometry(0.24, 0.035, 0.045);
    const guardMesh = new THREE.Mesh(guardGeom, atlas.materials.iron);
    guardMesh.position.set(0, 0.02, 0);
    this.fpsSwordGroup.add(guardMesh);

    const gripGeom = new THREE.CylinderGeometry(0.022, 0.022, 0.16, 6);
    const gripMesh = new THREE.Mesh(gripGeom, atlas.materials.darkOak);
    gripMesh.position.set(0, -0.07, 0);
    this.fpsSwordGroup.add(gripMesh);

    const pommelGeom = new THREE.SphereGeometry(0.035, 6, 6);
    const pommelMesh = new THREE.Mesh(pommelGeom, atlas.materials.iron);
    pommelMesh.position.set(0, -0.16, 0);
    this.fpsSwordGroup.add(pommelMesh);

    const rightGauntlet = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.14, 0.09), atlas.materials.iron);
    rightGauntlet.position.set(0, -0.07, 0);
    this.fpsSwordGroup.add(rightGauntlet);

    this.fpsViewmodelGroup.add(this.fpsSwordGroup);

    // 2. FPS Torch (Left Hand)
    this.fpsTorchGroup = new THREE.Group();
    this.fpsTorchGroup.position.set(-0.34, -0.26, -0.48);
    this.fpsTorchGroup.rotation.set(0.12, 0.15, -0.05);
    this.fpsTorchGroup.visible = false;

    const torchWoodMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.55, 6), atlas.materials.torchWood);
    torchWoodMesh.position.set(0, 0.1, 0);
    this.fpsTorchGroup.add(torchWoodMesh);

    const headMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.045, 0.12, 8), atlas.materials.torchWood);
    headMesh.position.set(0, 0.36, 0);
    this.fpsTorchGroup.add(headMesh);

    const leftGauntlet = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.14, 0.09), atlas.materials.iron);
    leftGauntlet.position.set(0, 0.02, 0);
    this.fpsTorchGroup.add(leftGauntlet);

    const flameGeom = new THREE.ConeGeometry(0.075, 0.22, 6);
    this.fpsFireMesh = new THREE.Mesh(flameGeom, atlas.materials.torchFire);
    this.fpsFireMesh.position.set(0, 0.48, 0);
    this.fpsTorchGroup.add(this.fpsFireMesh);

    const sparkCount = 18;
    const sparkPositions = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount; i++) {
      sparkPositions[i * 3] = (Math.random() - 0.5) * 0.15;
      sparkPositions[i * 3 + 1] = 0.45 + Math.random() * 0.35;
      sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
    }
    const sparkGeom = new THREE.BufferGeometry();
    sparkGeom.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    this.fpsFireSparks = new THREE.Points(
      sparkGeom,
      new THREE.PointsMaterial({ color: 0xffaa22, size: 0.025, transparent: true, opacity: 0.85 })
    );
    this.fpsTorchGroup.add(this.fpsFireSparks);

    this.fpsViewmodelGroup.add(this.fpsTorchGroup);

    // 3. FPS Shield (Left Hand)
    this.fpsShieldGroup = new THREE.Group();
    this.fpsShieldGroup.position.set(-0.28, -0.22, -0.42);
    this.fpsShieldGroup.rotation.set(0.1, 0.35, -0.1);
    this.fpsShieldGroup.visible = false;

    const fpsShieldPlate = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.60, 0.05), atlas.materials.woodPlanks);
    const fpsShieldBoss = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.08), atlas.materials.iron);
    fpsShieldBoss.position.set(0, 0, 0.03);
    this.fpsShieldGroup.add(fpsShieldPlate, fpsShieldBoss);
    this.fpsViewmodelGroup.add(this.fpsShieldGroup);

    // 4. FPS Lantern (Right Hand)
    this.fpsLanternGroup = new THREE.Group();
    this.fpsLanternGroup.position.set(0.26, -0.24, -0.46);
    this.fpsLanternGroup.visible = false;

    const fpsLanternBody = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.22, 0.14), atlas.materials.darkOak);
    const fpsLanternCage = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.04, 0.16), atlas.materials.iron);
    fpsLanternCage.position.set(0, 0.12, 0);
    this.fpsLanternGroup.add(fpsLanternBody, fpsLanternCage);
    this.fpsViewmodelGroup.add(this.fpsLanternGroup);

    // 5. FPS Flashlight (Held neatly in lower-right hand)
    this.fpsFlashlightGroup = new THREE.Group();
    this.fpsFlashlightGroup.position.set(0.28, -0.28, -0.46);
    this.fpsFlashlightGroup.rotation.set(-0.15, -0.05, 0.08);
    this.fpsFlashlightGroup.visible = false;

    // Sleek antique cylindrical tube body
    const fpsFlashBody = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.028, 0.28, 8), atlas.materials.iron);
    fpsFlashBody.rotation.x = Math.PI / 2;
    fpsFlashBody.position.set(0, 0, 0.08);

    // Brass front bezel ring & lens
    const fpsFlashBezel = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.028, 0.06, 8), atlas.materials.brassMetal);
    fpsFlashBezel.rotation.x = Math.PI / 2;
    fpsFlashBezel.position.set(0, 0, -0.08);

    const fpsFlashLens = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.01, 8), atlas.materials.stainedGlassGothic);
    fpsFlashLens.rotation.x = Math.PI / 2;
    fpsFlashLens.position.set(0, 0, -0.11);

    // Right armored gauntlet holding the torch
    const fpsFlashGauntlet = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.10, 0.08), atlas.materials.iron);
    fpsFlashGauntlet.position.set(0, -0.02, 0.12);

    this.fpsFlashlightGroup.add(fpsFlashBody, fpsFlashBezel, fpsFlashLens, fpsFlashGauntlet);
    this.fpsViewmodelGroup.add(this.fpsFlashlightGroup);

    // Mount to camera
    if (this.camera) {
      this.camera.add(this.fpsViewmodelGroup);
      this.camera.add(this.torchLight);
      this.camera.add(this.cameraLanternLight);
      this.camera.add(this.flashlightSpot);
      this.camera.add(this.flashlightTarget);
      this.camera.add(this.flashlightForwardLight);
      this.camera.add(this.flashlightBulbLight);
    }

    // -------------------------------------------------------------
    // C. THIRD-PERSON CHARACTER BODY
    // -------------------------------------------------------------
    this.bodyGroup = new THREE.Group();
    this.bodyGroup.name = 'TPP_PlayerBody';
    this.group.add(this.bodyGroup);

    const plateArmorMat = atlas.materials.iron;
    const capeMat = atlas.materials.crimsonCloth;

    // Legs
    this.leftLegPivot = new THREE.Group();
    this.leftLegPivot.position.set(-0.16, 0.70, 0);
    const leftLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.70, 0.22), plateArmorMat);
    leftLegMesh.position.set(0, -0.35, 0);
    leftLegMesh.castShadow = true;
    this.leftLegPivot.add(leftLegMesh);
    this.bodyGroup.add(this.leftLegPivot);

    this.rightLegPivot = new THREE.Group();
    this.rightLegPivot.position.set(0.16, 0.70, 0);
    const rightLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.70, 0.22), plateArmorMat);
    rightLegMesh.position.set(0, -0.35, 0);
    rightLegMesh.castShadow = true;
    this.rightLegPivot.add(rightLegMesh);
    this.bodyGroup.add(this.rightLegPivot);

    // Torso & Pauldrons
    this.torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.70, 0.36), plateArmorMat);
    this.torsoMesh.position.set(0, 1.05, 0);
    this.torsoMesh.castShadow = true;
    this.bodyGroup.add(this.torsoMesh);

    // Dark Crimson Knight's Cape
    this.capeMesh = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.95, 0.05), capeMat);
    this.capeMesh.position.set(0, 0.95, -0.22);
    this.capeMesh.castShadow = true;
    this.bodyGroup.add(this.capeMesh);

    // Arms
    const armGeom = new THREE.BoxGeometry(0.16, 0.58, 0.18);
    this.leftArmPivot = new THREE.Group();
    this.leftArmPivot.position.set(-0.36, 1.35, 0);
    const lArm = new THREE.Mesh(armGeom, plateArmorMat);
    lArm.position.set(0, -0.26, 0);
    lArm.castShadow = true;
    this.leftArmPivot.add(lArm);
    this.bodyGroup.add(this.leftArmPivot);

    this.rightArmPivot = new THREE.Group();
    this.rightArmPivot.position.set(0.36, 1.35, 0);
    const rArm = new THREE.Mesh(armGeom, plateArmorMat);
    rArm.position.set(0, -0.26, 0);
    rArm.castShadow = true;
    this.rightArmPivot.add(rArm);
    this.bodyGroup.add(this.rightArmPivot);

    // Knight's Greathelm Head
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 1.55, 0);
    const helm = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.42, 0.38), plateArmorMat);
    helm.castShadow = true;
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.06, 0.40), new THREE.MeshBasicMaterial({ color: 0x0a0a0e }));
    visor.position.set(0, 0.02, 0.02);
    this.headGroup.add(helm, visor);
    this.bodyGroup.add(this.headGroup);

    // TPP Torch
    this.tppTorch = new THREE.Group();
    this.tppTorch.position.set(-0.42, 0.95, 0.25);
    this.tppTorch.visible = false;
    const tppStick = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.6, 6), atlas.materials.torchWood);
    const tppFire = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.22, 6), atlas.materials.torchFire);
    tppFire.position.set(0, 0.38, 0);
    this.tppTorch.add(tppStick, tppFire, this.tppTorchLight);
    this.bodyGroup.add(this.tppTorch);

    // TPP Sword
    this.tppSword = new THREE.Group();
    this.tppSword.position.set(0.42, 0.95, 0.30);
    this.tppSword.rotation.set(-0.35, 0, 0.2);
    this.tppSword.visible = false;
    const tppBlade = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.85, 0.02), atlas.materials.steelBlade);
    tppBlade.position.set(0, 0.42, 0);
    tppBlade.castShadow = true;
    this.tppSword.add(tppBlade);
    this.bodyGroup.add(this.tppSword);

    // TPP Shield
    this.tppShield = new THREE.Group();
    this.tppShield.position.set(-0.46, 0.95, 0.15);
    this.tppShield.visible = false;
    const tShieldPlate = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.70, 0.06), atlas.materials.woodPlanks);
    tShieldPlate.castShadow = true;
    this.tppShield.add(tShieldPlate);
    this.bodyGroup.add(this.tppShield);

    // TPP Lantern
    this.tppLantern = new THREE.Group();
    this.tppLantern.position.set(0.44, 0.85, 0.30);
    this.tppLantern.visible = false;
    const tLanternBody = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.24, 0.16), atlas.materials.darkOak);
    this.tppLantern.add(tLanternBody, this.tppLanternLight);
    this.bodyGroup.add(this.tppLantern);

    // TPP Flashlight
    this.tppFlashlight = new THREE.Group();
    this.tppFlashlight.position.set(0.42, 0.85, 0.25);
    this.tppFlashlight.visible = false;
    const tFlashBody = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.36), atlas.materials.iron);
    this.tppFlashlight.add(tFlashBody);
    this.bodyGroup.add(this.tppFlashlight);

    this.setActiveItem(null);
    this.setFirstPerson(true);
  }

  public triggerAttack(): void {
    if (this.isAttacking) return;
    this.isAttacking = true;
    this.attackTime = 0;
  }

  public setActiveItem(itemId: string | null): void {
    this.activeItemId = itemId;

    const isSword = itemId === 'sword';
    const isTorch = itemId === 'torch';
    const isShield = itemId === 'shield';
    const isLantern = itemId === 'lantern';
    const isFlashlight = itemId === 'flashlight';

    // 1. FPS Props Visibility
    this.fpsSwordGroup.visible = isSword && this.isFirstPerson;
    this.fpsTorchGroup.visible = isTorch && this.isFirstPerson;
    this.fpsShieldGroup.visible = isShield && this.isFirstPerson;
    this.fpsLanternGroup.visible = isLantern && this.isFirstPerson;
    this.fpsFlashlightGroup.visible = isFlashlight && this.isFirstPerson;

    // 2. TPP Props Visibility
    this.tppSword.visible = isSword && !this.isFirstPerson;
    this.tppTorch.visible = isTorch && !this.isFirstPerson;
    this.tppShield.visible = isShield && !this.isFirstPerson;
    this.tppLantern.visible = isLantern && !this.isFirstPerson;
    this.tppFlashlight.visible = isFlashlight && !this.isFirstPerson;

    // 3. Dynamic Light Sources
    this.torchLight.visible = isTorch && this.isFirstPerson;
    this.tppTorchLight.visible = isTorch && !this.isFirstPerson;

    this.cameraLanternLight.visible = isLantern && this.isFirstPerson;
    this.tppLanternLight.visible = isLantern && !this.isFirstPerson;

    this.flashlightSpot.visible = isFlashlight && this.isFirstPerson;
    this.flashlightForwardLight.visible = isFlashlight && this.isFirstPerson;
    this.flashlightBulbLight.visible = isFlashlight && this.isFirstPerson;
  }

  public setFirstPerson(isFPP: boolean): void {
    this.isFirstPerson = isFPP;
    this.fpsViewmodelGroup.visible = isFPP;
    this.bodyGroup.visible = !isFPP;

    // Refresh active item props visibility based on new perspective
    this.setActiveItem(this.activeItemId);
  }

  public updateLightAim(_cameraWorldPos: THREE.Vector3, _lookDir: THREE.Vector3): void {}

  public updateAnimation(isMoving: boolean, delta: number, speed: number): void {
    const validDelta = (Number.isFinite(delta) && delta > 0) ? Math.min(delta, 0.1) : 0.016;
    const validSpeed = (Number.isFinite(speed) && speed > 0) ? Math.min(speed, 3.0) : 1.0;

    this.walkTime += validDelta;

    // 1. Attack Animation (Active when sword or unarmed)
    if (this.isAttacking) {
      this.attackTime += validDelta * 5.0; // 0.2s quick satisfying slash

      if (this.attackTime <= 0.4) {
        // Windup: Raise sword
        const t = this.attackTime / 0.4;
        this.fpsSwordGroup.position.set(0.32 + t * 0.1, -0.28 + t * 0.2, -0.45 - t * 0.1);
        this.fpsSwordGroup.rotation.set(-0.35 + t * 0.6, 0.18 + t * 0.4, -0.15 - t * 0.5);
      } else if (this.attackTime <= 1.0) {
        // Fast diagonal downward slash across screen
        const t = (this.attackTime - 0.4) / 0.6;
        this.fpsSwordGroup.position.set(0.42 - t * 0.55, -0.08 - t * 0.35, -0.55 + t * 0.1);
        this.fpsSwordGroup.rotation.set(0.25 - t * 1.4, 0.58 - t * 1.1, -0.65 + t * 1.2);
      } else {
        // Recover to rest
        this.isAttacking = false;
        this.attackTime = 0;
      }
    } else {
      // Return sword to idle stance
      this.fpsSwordGroup.position.lerp(new THREE.Vector3(0.32, -0.28, -0.45), 10 * validDelta);
      this.fpsSwordGroup.rotation.x = THREE.MathUtils.lerp(this.fpsSwordGroup.rotation.x, -0.35, 10 * validDelta);
      this.fpsSwordGroup.rotation.y = THREE.MathUtils.lerp(this.fpsSwordGroup.rotation.y, 0.18, 10 * validDelta);
      this.fpsSwordGroup.rotation.z = THREE.MathUtils.lerp(this.fpsSwordGroup.rotation.z, -0.15, 10 * validDelta);
    }

    // 2. Walking Bobbing & Sway
    if (isMoving) {
      const walkRate = this.walkTime * validSpeed * 9.0;
      const legAngle = Math.sin(walkRate) * 0.6;

      this.leftLegPivot.rotation.x = legAngle;
      this.rightLegPivot.rotation.x = -legAngle;
      this.leftArmPivot.rotation.x = -legAngle * 0.6;
      this.rightArmPivot.rotation.x = legAngle * 0.6;

      // Viewmodel breathing bob
      const bobY = -Math.abs(Math.cos(walkRate)) * 0.015;
      const bobX = Math.sin(walkRate * 0.5) * 0.012;
      this.fpsViewmodelGroup.position.set(bobX, bobY, 0);

      // Cape wave
      this.capeMesh.rotation.x = 0.2 + Math.abs(Math.sin(walkRate)) * 0.15;
    } else {
      this.leftLegPivot.rotation.x *= 0.82;
      this.rightLegPivot.rotation.x *= 0.82;
      this.leftArmPivot.rotation.x *= 0.82;
      this.rightArmPivot.rotation.x *= 0.82;
      this.fpsViewmodelGroup.position.lerp(new THREE.Vector3(0, 0, 0), 8 * validDelta);
      this.capeMesh.rotation.x *= 0.85;
    }

    // 3. Torch Flame Dancing & Dynamic Light Flicker (Only when torch is equipped)
    if (this.activeItemId === 'torch') {
      const flameFlicker = Math.sin(this.walkTime * 14.0) * 0.08 + Math.cos(this.walkTime * 22.0) * 0.04;
      this.fpsFireMesh.scale.set(1.0 + flameFlicker, 1.0 + flameFlicker * 1.5, 1.0 + flameFlicker);
      this.torchLight.intensity = 15.0 + Math.sin(this.walkTime * 12.0) * 2.5 + Math.cos(this.walkTime * 19.0) * 1.5;
      this.tppTorchLight.intensity = this.torchLight.intensity;
    }
  }
}
