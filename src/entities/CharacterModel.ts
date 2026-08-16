import * as THREE from 'three';
import { TextureAtlas } from '../terrain/TextureAtlas';

export class CharacterModel {
  public group: THREE.Group;
  public bodyGroup: THREE.Group;
  public fpsViewmodelGroup: THREE.Group;
  public camera?: THREE.PerspectiveCamera;

  // 1. Flashlight Dynamic Lighting System (Mounted directly to Camera)
  public flashlightSpot: THREE.SpotLight;
  public flashlightTarget: THREE.Object3D;
  public flashlightForwardLight: THREE.PointLight;
  public flashlightBulbLight: THREE.PointLight;

  // 2. Camera-Mounted Lantern Dynamic Lighting System (Radiant 360° Candlelight Bubble)
  public cameraLanternLight: THREE.PointLight;
  public get fpsLanternLight(): THREE.PointLight {
    return this.cameraLanternLight;
  }

  // 3. First-Person Viewmodel Props (mounted to camera)
  private fpsFlashlight: THREE.Group;
  private fpsLantern: THREE.Group;
  private fpsSword: THREE.Group;
  private fpsShield: THREE.Group;

  // 4. Third-Person Body Parts & Handheld Props
  private leftLegPivot: THREE.Group;
  private rightLegPivot: THREE.Group;
  private leftArmPivot: THREE.Group;
  private rightArmPivot: THREE.Group;
  private torsoMesh: THREE.Mesh;
  private leftPauldron: THREE.Mesh;
  private rightPauldron: THREE.Mesh;
  private headGroup: THREE.Group;

  private tppFlashlight: THREE.Group;
  private tppLantern: THREE.Group;
  public tppLanternLight: THREE.PointLight;
  private tppSword: THREE.Group;
  private tppShield: THREE.Group;

  public isFirstPerson: boolean = false;
  public activeItemId: string | null = null;
  public baseLanternIntensity: number = 22.0;
  private walkTime: number = 0;

  constructor(atlas: TextureAtlas, camera?: THREE.PerspectiveCamera) {
    this.camera = camera;

    // Root group positioned in world space
    this.group = new THREE.Group();
    this.group.name = 'PlayerCharacter';

    // -------------------------------------------------------------
    // A. ULTRA-BRIGHT FLASHLIGHT (Mounted directly to Camera)
    // -------------------------------------------------------------
    this.flashlightSpot = new THREE.SpotLight(0xffffff, 48.0, 160.0, Math.PI / 3.2, 0.25, 0.85);
    this.flashlightSpot.position.set(0, 0, 0);
    this.flashlightSpot.castShadow = true;
    this.flashlightSpot.shadow.bias = -0.001;
    this.flashlightSpot.shadow.mapSize.width = 1024;
    this.flashlightSpot.shadow.mapSize.height = 1024;

    this.flashlightTarget = new THREE.Object3D();
    this.flashlightTarget.name = 'FlashlightTarget';
    this.flashlightTarget.position.set(0, 0, -50.0);
    this.flashlightSpot.target = this.flashlightTarget;

    this.flashlightForwardLight = new THREE.PointLight(0xffffff, 6.0, 45.0, 1.0);
    this.flashlightForwardLight.position.set(0, 0, -6.0);

    this.flashlightBulbLight = new THREE.PointLight(0xffffff, 4.5, 16.0, 1.1);
    this.flashlightBulbLight.position.set(0.24, -0.20, -0.42);

    // -------------------------------------------------------------
    // B. RADIANT ORNATE BRASS LANTERN LIGHT (Mounted directly to Camera)
    // -------------------------------------------------------------
    this.cameraLanternLight = new THREE.PointLight(0xffb844, this.baseLanternIntensity, 34.0, 1.2);
    this.cameraLanternLight.position.set(0.24, -0.18, -0.42);
    this.cameraLanternLight.castShadow = false;
    this.cameraLanternLight.visible = false;

    // -------------------------------------------------------------
    // C. FIRST-PERSON VIEWMODEL (Mounted directly to camera)
    // -------------------------------------------------------------
    this.fpsViewmodelGroup = new THREE.Group();
    this.fpsViewmodelGroup.name = 'FPS_Viewmodel';

    // 1. FPS Flashlight Prop
    this.fpsFlashlight = new THREE.Group();
    this.fpsFlashlight.position.set(0.24, -0.20, -0.42);
    this.fpsFlashlight.rotation.set(0.04, -0.04, 0.0);

    const fpsFlashBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, 0.28),
      atlas.materials.iron
    );
    const fpsFlashBezel = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.12, 0.08),
      atlas.materials.iron
    );
    fpsFlashBezel.position.set(0, 0, -0.18);

    const fpsFlashLens = new THREE.Mesh(
      new THREE.BoxGeometry(0.10, 0.10, 0.02),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    fpsFlashLens.position.set(0, 0, -0.22);
    this.fpsFlashlight.add(fpsFlashBody, fpsFlashBezel, fpsFlashLens);
    this.fpsViewmodelGroup.add(this.fpsFlashlight);

    // 2. FPS High-Detail Ornate Brass Lantern Prop
    this.fpsLantern = this.buildOrnateLantern(atlas, true);
    this.fpsLantern.position.set(0.26, -0.24, -0.46);
    this.fpsLantern.rotation.set(0.06, -0.08, 0.02);
    this.fpsViewmodelGroup.add(this.fpsLantern);

    // 3. FPS Sword Prop
    this.fpsSword = new THREE.Group();
    this.fpsSword.position.set(0.26, -0.24, -0.42);
    this.fpsSword.rotation.set(-0.45, 0.2, -0.1);

    const fpsBlade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.75, 0.03), atlas.materials.iron);
    fpsBlade.position.set(0, 0.38, 0);
    const fpsGuard = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.06), atlas.materials.iron);
    const fpsGrip = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.18, 0.05), atlas.materials.woodBeam);
    fpsGrip.position.set(0, -0.10, 0);
    this.fpsSword.add(fpsBlade, fpsGuard, fpsGrip);
    this.fpsViewmodelGroup.add(this.fpsSword);

    // 4. FPS Shield Prop
    this.fpsShield = new THREE.Group();
    this.fpsShield.position.set(-0.28, -0.22, -0.42);
    this.fpsShield.rotation.set(0.1, 0.35, -0.1);

    const fpsShieldPlate = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.60, 0.05), atlas.materials.woodPlanks);
    const fpsShieldBoss = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.08), atlas.materials.iron);
    fpsShieldBoss.position.set(0, 0, 0.03);
    this.fpsShield.add(fpsShieldPlate, fpsShieldBoss);
    this.fpsViewmodelGroup.add(this.fpsShield);

    // Attach viewmodel, flashlight, and lantern lights directly to camera
    if (this.camera) {
      this.camera.add(this.fpsViewmodelGroup);
      this.camera.add(this.flashlightSpot);
      this.camera.add(this.flashlightTarget);
      this.camera.add(this.flashlightForwardLight);
      this.camera.add(this.flashlightBulbLight);
      this.camera.add(this.cameraLanternLight);
    }

    // -------------------------------------------------------------
    // D. THIRD-PERSON CHARACTER BODY
    // -------------------------------------------------------------
    this.bodyGroup = new THREE.Group();
    this.bodyGroup.name = 'TPP_PlayerBody';
    this.group.add(this.bodyGroup);

    const armorMat = atlas.materials.iron;
    const darkClothMat = new THREE.MeshStandardMaterial({
      color: 0x22262e,
      roughness: 0.8,
      side: THREE.DoubleSide
    });
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xd9a066,
      roughness: 0.6,
      side: THREE.DoubleSide
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x1b1822,
      roughness: 0.9,
      side: THREE.DoubleSide
    });

    // 1. Legs
    this.leftLegPivot = new THREE.Group();
    this.leftLegPivot.position.set(-0.16, 0.70, 0);
    const leftLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.70, 0.22), darkClothMat);
    leftLegMesh.position.set(0, -0.35, 0);
    leftLegMesh.castShadow = true;
    leftLegMesh.receiveShadow = true;
    this.leftLegPivot.add(leftLegMesh);
    this.bodyGroup.add(this.leftLegPivot);

    this.rightLegPivot = new THREE.Group();
    this.rightLegPivot.position.set(0.16, 0.70, 0);
    const rightLegMesh = new THREE.Mesh(new THREE.BoxGeometry(0.20, 0.70, 0.22), darkClothMat);
    rightLegMesh.position.set(0, -0.35, 0);
    rightLegMesh.castShadow = true;
    rightLegMesh.receiveShadow = true;
    this.rightLegPivot.add(rightLegMesh);
    this.bodyGroup.add(this.rightLegPivot);

    // 2. Torso & Pauldrons
    this.torsoMesh = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.70, 0.36), armorMat);
    this.torsoMesh.position.set(0, 1.05, 0);
    this.torsoMesh.castShadow = true;
    this.torsoMesh.receiveShadow = true;
    this.bodyGroup.add(this.torsoMesh);

    const pauldronGeom = new THREE.BoxGeometry(0.22, 0.20, 0.40);
    this.leftPauldron = new THREE.Mesh(pauldronGeom, armorMat);
    this.leftPauldron.position.set(-0.35, 1.35, 0);
    this.leftPauldron.castShadow = true;

    this.rightPauldron = new THREE.Mesh(pauldronGeom, armorMat);
    this.rightPauldron.position.set(0.35, 1.35, 0);
    this.rightPauldron.castShadow = true;
    this.bodyGroup.add(this.leftPauldron, this.rightPauldron);

    // 3. Arms
    const armGeom = new THREE.BoxGeometry(0.16, 0.58, 0.18);

    this.leftArmPivot = new THREE.Group();
    this.leftArmPivot.position.set(-0.36, 1.35, 0);
    const leftArmMesh = new THREE.Mesh(armGeom, armorMat);
    leftArmMesh.position.set(0, -0.26, 0);
    leftArmMesh.castShadow = true;
    this.leftArmPivot.add(leftArmMesh);
    this.bodyGroup.add(this.leftArmPivot);

    this.rightArmPivot = new THREE.Group();
    this.rightArmPivot.position.set(0.36, 1.35, 0);
    const rightArmMesh = new THREE.Mesh(armGeom, armorMat);
    rightArmMesh.position.set(0, -0.26, 0);
    rightArmMesh.castShadow = true;
    this.rightArmPivot.add(rightArmMesh);
    this.bodyGroup.add(this.rightArmPivot);

    // 4. Head & Hair
    this.headGroup = new THREE.Group();
    this.headGroup.position.set(0, 1.55, 0);
    const face = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.38, 0.38), skinMat);
    face.castShadow = true;
    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.24, 0.42), hairMat);
    hair.position.set(0, 0.14, -0.02);
    hair.castShadow = true;
    this.headGroup.add(face, hair);
    this.bodyGroup.add(this.headGroup);

    // 5. TPP Handheld Flashlight Prop
    this.tppFlashlight = new THREE.Group();
    this.tppFlashlight.position.set(0.42, 0.85, 0.25);

    const tppFlashBody = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.36), atlas.materials.iron);
    tppFlashBody.castShadow = true;
    const tppFlashBezel = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.10), atlas.materials.iron);
    tppFlashBezel.position.set(0, 0, -0.22);
    tppFlashBezel.castShadow = true;
    const tppFlashLens = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.13, 0.02), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    tppFlashLens.position.set(0, 0, -0.27);
    this.tppFlashlight.add(tppFlashBody, tppFlashBezel, tppFlashLens);
    this.bodyGroup.add(this.tppFlashlight);

    // 6. TPP Handheld Lantern Prop
    this.tppLantern = this.buildOrnateLantern(atlas, false);
    this.tppLantern.position.set(0.44, 0.85, 0.30);

    this.tppLanternLight = new THREE.PointLight(0xffb844, 18.0, 34.0, 1.2);
    this.tppLanternLight.position.set(0, 0.10, 0);
    this.tppLanternLight.castShadow = false;
    this.tppLanternLight.visible = false;
    this.tppLantern.add(this.tppLanternLight);
    this.bodyGroup.add(this.tppLantern);

    // 7. TPP Sword & Shield Props
    this.tppSword = new THREE.Group();
    this.tppSword.position.set(0.42, 0.85, 0.35);
    this.tppSword.rotation.set(-0.3, 0, 0.2);
    const tBlade = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.85, 0.04), atlas.materials.iron);
    tBlade.position.set(0, 0.42, 0);
    tBlade.castShadow = true;
    const tGuard = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.05, 0.08), atlas.materials.iron);
    const tGrip = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.20, 0.06), atlas.materials.woodBeam);
    tGrip.position.set(0, -0.12, 0);
    this.tppSword.add(tBlade, tGuard, tGrip);
    this.bodyGroup.add(this.tppSword);

    this.tppShield = new THREE.Group();
    this.tppShield.position.set(-0.46, 0.95, 0.15);
    this.tppShield.rotation.set(0, -0.3, 0);
    const tShieldPlate = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.70, 0.06), atlas.materials.woodPlanks);
    tShieldPlate.castShadow = true;
    const tShieldBoss = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.10), atlas.materials.iron);
    tShieldBoss.position.set(0, 0, 0.04);
    this.tppShield.add(tShieldPlate, tShieldBoss);
    this.bodyGroup.add(this.tppShield);

    // Initial state: Empty hands by default
    this.setActiveItem(null);
    this.setFirstPerson(true);
  }

  /**
   * Constructs an ornate 3D voxel brass adventurer's lantern
   */
  private buildOrnateLantern(atlas: TextureAtlas, isFps: boolean): THREE.Group {
    const lanternGroup = new THREE.Group();
    const scale = isFps ? 1.0 : 1.15;

    const brassMat = atlas.materials.brassMetal;
    const darkIronMat = atlas.materials.iron;

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0xfffae6,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.1,
      depthWrite: false
    });

    const candleWaxMat = new THREE.MeshStandardMaterial({
      color: 0xfff8db,
      roughness: 0.45
    });

    const flameMat = new THREE.MeshBasicMaterial({
      color: 0xffbb22
    });

    const innerGlowMat = new THREE.MeshBasicMaterial({
      color: 0xffdd66,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    // 1. Stepped Brass Base Tray
    const basePlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.14 * scale, 0.03 * scale, 0.14 * scale),
      brassMat
    );
    basePlate.position.set(0, 0.015 * scale, 0);
    lanternGroup.add(basePlate);

    // 4 Corner Brass Ball Feet
    const footOffsets = [[-0.05, -0.05], [0.05, -0.05], [-0.05, 0.05], [0.05, 0.05]];
    footOffsets.forEach(([fx, fz]) => {
      const foot = new THREE.Mesh(
        new THREE.BoxGeometry(0.025 * scale, 0.015 * scale, 0.025 * scale),
        darkIronMat
      );
      foot.position.set(fx * scale, 0.007 * scale, fz * scale);
      lanternGroup.add(foot);
    });

    // 2. 4 Vertical Corner Brass Framing Struts (Cage)
    const strutGeom = new THREE.BoxGeometry(0.015 * scale, 0.16 * scale, 0.015 * scale);
    const strutOffsets = [[-0.055, -0.055], [0.055, -0.055], [-0.055, 0.055], [0.055, 0.055]];
    strutOffsets.forEach(([sx, sz]) => {
      const strut = new THREE.Mesh(strutGeom, brassMat);
      strut.position.set(sx * scale, 0.11 * scale, sz * scale);
      lanternGroup.add(strut);
    });

    // 3. Translucent Glass Chamber Enclosure
    const glassPane = new THREE.Mesh(
      new THREE.BoxGeometry(0.11 * scale, 0.15 * scale, 0.11 * scale),
      glassMat
    );
    glassPane.position.set(0, 0.11 * scale, 0);
    lanternGroup.add(glassPane);

    // 4. Internal Candle Stub & Glowing Flame
    const candleWax = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02 * scale, 0.02 * scale, 0.05 * scale, 6),
      candleWaxMat
    );
    candleWax.position.set(0, 0.055 * scale, 0);

    const candleWick = new THREE.Mesh(
      new THREE.CylinderGeometry(0.003 * scale, 0.003 * scale, 0.015 * scale, 4),
      darkIronMat
    );
    candleWick.position.set(0, 0.085 * scale, 0);

    const flame = new THREE.Mesh(
      new THREE.ConeGeometry(0.02 * scale, 0.055 * scale, 6),
      flameMat
    );
    flame.position.set(0, 0.11 * scale, 0);

    const flameGlowCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.04 * scale, 8, 8),
      innerGlowMat
    );
    flameGlowCore.position.set(0, 0.11 * scale, 0);

    lanternGroup.add(candleWax, candleWick, flame, flameGlowCore);

    // 5. Tiered Sloped Brass Roof & Vent Chimney
    const roofCornice = new THREE.Mesh(
      new THREE.BoxGeometry(0.145 * scale, 0.025 * scale, 0.145 * scale),
      brassMat
    );
    roofCornice.position.set(0, 0.195 * scale, 0);

    const roofPyramid = new THREE.Mesh(
      new THREE.BoxGeometry(0.10 * scale, 0.035 * scale, 0.10 * scale),
      brassMat
    );
    roofPyramid.position.set(0, 0.22 * scale, 0);

    const chimney = new THREE.Mesh(
      new THREE.CylinderGeometry(0.025 * scale, 0.035 * scale, 0.035 * scale, 8),
      brassMat
    );
    chimney.position.set(0, 0.25 * scale, 0);

    // 6. Top Hanging Ring & Arched Wire Bail Handle
    const topRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.028 * scale, 0.006 * scale, 6, 12),
      brassMat
    );
    topRing.position.set(0, 0.285 * scale, 0);

    const bailHandle = new THREE.Mesh(
      new THREE.TorusGeometry(0.065 * scale, 0.005 * scale, 6, 14, Math.PI),
      darkIronMat
    );
    bailHandle.position.set(0, 0.20 * scale, 0);
    bailHandle.rotation.z = Math.PI / 2;

    lanternGroup.add(roofCornice, roofPyramid, chimney, topRing, bailHandle);

    return lanternGroup;
  }

  public attachToCamera(camera: THREE.PerspectiveCamera): void {
    this.camera = camera;
    if (this.fpsViewmodelGroup.parent !== camera) {
      camera.add(this.fpsViewmodelGroup);
      camera.add(this.flashlightSpot);
      camera.add(this.flashlightTarget);
      camera.add(this.flashlightForwardLight);
      camera.add(this.flashlightBulbLight);
      camera.add(this.cameraLanternLight);
    }
  }

  public setActiveItem(itemId: string | null): void {
    this.activeItemId = itemId;

    const isFlashlight = itemId === 'flashlight';
    const isLantern = itemId === 'lantern';
    const isSword = itemId === 'sword';
    const isShield = itemId === 'shield';

    // 1. Update FPS Viewmodel Elements
    this.fpsFlashlight.visible = isFlashlight;
    this.fpsLantern.visible = isLantern;
    this.fpsSword.visible = isSword;
    this.fpsShield.visible = isShield || isSword;

    // 2. Update TPP Character Elements
    this.tppFlashlight.visible = isFlashlight;
    this.tppLantern.visible = isLantern;
    this.tppSword.visible = isSword;
    this.tppShield.visible = isShield || isSword;

    // 3. Dynamic Flashlight Light Sources (Mounted to Camera)
    this.flashlightSpot.visible = isFlashlight;
    this.flashlightForwardLight.visible = isFlashlight;
    this.flashlightBulbLight.visible = isFlashlight;

    // 4. Dynamic Lantern Light Sources
    this.cameraLanternLight.visible = isLantern && this.isFirstPerson;
    this.tppLanternLight.visible = isLantern && !this.isFirstPerson;
  }

  public setFirstPerson(isFPP: boolean): void {
    this.isFirstPerson = isFPP;

    // In FPP, viewmodel is active, body is hidden
    this.fpsViewmodelGroup.visible = isFPP;
    this.bodyGroup.visible = !isFPP;

    this.setActiveItem(this.activeItemId);
  }

  public updateLightAim(_cameraWorldPos: THREE.Vector3, _lookDir: THREE.Vector3): void {
    // Lights are locked to camera
  }

  public updateAnimation(isMoving: boolean, delta: number, speed: number): void {
    const validDelta = (Number.isFinite(delta) && delta > 0) ? Math.min(delta, 0.1) : 0.016;
    const validSpeed = (Number.isFinite(speed) && speed > 0) ? Math.min(speed, 3.0) : 1.0;

    this.walkTime += validDelta;

    if (isMoving) {
      const walkRate = this.walkTime * validSpeed * 10.0;
      const legAngle = Math.sin(walkRate) * 0.65;

      // TPP limb rotations
      this.leftLegPivot.rotation.x = legAngle;
      this.rightLegPivot.rotation.x = -legAngle;
      this.leftArmPivot.rotation.x = -legAngle * 0.7;
      this.rightArmPivot.rotation.x = legAngle * 0.7;
      this.bodyGroup.position.y = Math.abs(Math.sin(walkRate * 2.0)) * 0.05;

      // FPS Viewmodel subtle breathing & walk sway
      const bobY = -Math.abs(Math.cos(walkRate)) * 0.012;
      const bobX = Math.sin(walkRate) * 0.012;
      this.fpsViewmodelGroup.position.set(bobX, bobY, 0);

      // TPP Handheld Item Sway
      this.tppFlashlight.rotation.z = Math.sin(walkRate) * 0.15;
      this.tppFlashlight.position.y = 0.85 + Math.cos(walkRate) * 0.03;

      this.tppLantern.rotation.z = Math.sin(walkRate) * 0.2;
      this.tppLantern.position.y = 0.85 + Math.cos(walkRate) * 0.03;
    } else {
      this.leftLegPivot.rotation.x *= 0.82;
      this.rightLegPivot.rotation.x *= 0.82;
      this.leftArmPivot.rotation.x *= 0.82;
      this.rightArmPivot.rotation.x *= 0.82;
      this.bodyGroup.position.y *= 0.82;

      // Smoothly return FPS viewmodel to rest
      this.fpsViewmodelGroup.position.lerp(new THREE.Vector3(0, 0, 0), 10 * validDelta);

      this.tppFlashlight.rotation.z *= 0.82;
      this.tppFlashlight.position.y = 0.85;

      this.tppLantern.rotation.z *= 0.82;
      this.tppLantern.position.y = 0.85;
    }

    // Natural warm candle flicker for lantern
    if (this.activeItemId === 'lantern') {
      const flicker = Math.sin(this.walkTime * 7.5) * 1.5 + Math.cos(this.walkTime * 13.0) * 0.8;
      const intensity = Math.max(12.0, this.baseLanternIntensity + flicker);
      if (this.isFirstPerson) {
        this.cameraLanternLight.intensity = intensity;
      } else {
        this.tppLanternLight.intensity = intensity;
      }
    }
  }
}
