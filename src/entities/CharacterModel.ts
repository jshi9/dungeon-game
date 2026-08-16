import * as THREE from 'three';
import { TextureAtlas } from '../terrain/TextureAtlas';

export class CharacterModel {
  public group: THREE.Group;
  public bodyGroup: THREE.Group;
  public lanternLight: THREE.PointLight;

  private leftLegPivot: THREE.Group;
  private rightLegPivot: THREE.Group;
  private leftArmPivot: THREE.Group;
  private rightArmPivot: THREE.Group;
  private lanternMesh: THREE.Group;
  private walkTime: number = 0;

  constructor(atlas: TextureAtlas) {
    // Root group positioned in world space by CharacterController
    this.group = new THREE.Group();
    this.group.name = 'PlayerCharacter';

    // Body group for local bobbing and transformations
    this.bodyGroup = new THREE.Group();
    this.bodyGroup.name = 'PlayerBody';
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

    // 1. Legs (from Y = 0.0 to Y = 0.70)
    // Left Leg with hip pivot at Y = 0.70
    this.leftLegPivot = new THREE.Group();
    this.leftLegPivot.position.set(-0.16, 0.70, 0);
    const legGeom = new THREE.BoxGeometry(0.20, 0.70, 0.22);
    const leftLegMesh = new THREE.Mesh(legGeom, darkClothMat);
    leftLegMesh.position.set(0, -0.35, 0); // Center relative to hip pivot
    leftLegMesh.castShadow = true;
    leftLegMesh.receiveShadow = true;
    this.leftLegPivot.add(leftLegMesh);
    this.bodyGroup.add(this.leftLegPivot);

    // Right Leg with hip pivot at Y = 0.70
    this.rightLegPivot = new THREE.Group();
    this.rightLegPivot.position.set(0.16, 0.70, 0);
    const rightLegMesh = new THREE.Mesh(legGeom, darkClothMat);
    rightLegMesh.position.set(0, -0.35, 0);
    rightLegMesh.castShadow = true;
    rightLegMesh.receiveShadow = true;
    this.rightLegPivot.add(rightLegMesh);
    this.bodyGroup.add(this.rightLegPivot);

    // 2. Torso & Chestplate (from Y = 0.70 to Y = 1.40)
    const torsoGeom = new THREE.BoxGeometry(0.52, 0.70, 0.36);
    const torso = new THREE.Mesh(torsoGeom, armorMat);
    torso.position.set(0, 1.05, 0);
    torso.castShadow = true;
    torso.receiveShadow = true;
    this.bodyGroup.add(torso);

    // Pauldrons (Shoulder guards at Y = 1.35)
    const pauldronGeom = new THREE.BoxGeometry(0.22, 0.20, 0.40);
    const leftPauldron = new THREE.Mesh(pauldronGeom, armorMat);
    leftPauldron.position.set(-0.35, 1.35, 0);
    leftPauldron.castShadow = true;

    const rightPauldron = new THREE.Mesh(pauldronGeom, armorMat);
    rightPauldron.position.set(0.35, 1.35, 0);
    rightPauldron.castShadow = true;
    this.bodyGroup.add(leftPauldron, rightPauldron);

    // 3. Arms with shoulder pivots at Y = 1.35
    const armGeom = new THREE.BoxGeometry(0.16, 0.58, 0.18);

    // Left Arm
    this.leftArmPivot = new THREE.Group();
    this.leftArmPivot.position.set(-0.36, 1.35, 0);
    const leftArmMesh = new THREE.Mesh(armGeom, darkClothMat);
    leftArmMesh.position.set(0, -0.29, 0);
    leftArmMesh.castShadow = true;
    this.leftArmPivot.add(leftArmMesh);
    this.bodyGroup.add(this.leftArmPivot);

    // Right Arm
    this.rightArmPivot = new THREE.Group();
    this.rightArmPivot.position.set(0.36, 1.35, 0);
    const rightArmMesh = new THREE.Mesh(armGeom, darkClothMat);
    rightArmMesh.position.set(0, -0.29, 0);
    rightArmMesh.castShadow = true;
    this.rightArmPivot.add(rightArmMesh);
    this.bodyGroup.add(this.rightArmPivot);

    // 4. Head & Helmet / Hair (from Y = 1.40 to Y = 1.90)
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.62, 0);

    const faceGeom = new THREE.BoxGeometry(0.38, 0.38, 0.38);
    const face = new THREE.Mesh(faceGeom, skinMat);
    face.castShadow = true;
    headGroup.add(face);

    // Knight Hair / Visor
    const hairGeom = new THREE.BoxGeometry(0.42, 0.24, 0.42);
    const hair = new THREE.Mesh(hairGeom, hairMat);
    hair.position.set(0, 0.14, -0.02);
    hair.castShadow = true;
    headGroup.add(hair);

    this.bodyGroup.add(headGroup);

    // 5. Handheld Lantern (casting dynamic light)
    this.lanternMesh = new THREE.Group();
    this.lanternMesh.position.set(0.44, 0.85, 0.30);

    const lanternFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.26, 0.16),
      atlas.materials.iron
    );
    const lanternCore = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.18, 0.12),
      new THREE.MeshBasicMaterial({ color: 0xffe28a })
    );
    this.lanternMesh.add(lanternFrame, lanternCore);

    this.lanternLight = new THREE.PointLight(0xffbe5c, 2.5, 25.0, 1.2);
    this.lanternLight.position.set(0, 0, 0);
    this.lanternLight.castShadow = true;
    this.lanternLight.shadow.bias = -0.002;
    this.lanternLight.shadow.mapSize.width = 512;
    this.lanternLight.shadow.mapSize.height = 512;
    this.lanternMesh.add(this.lanternLight);

    this.bodyGroup.add(this.lanternMesh);
  }

  public updateAnimation(isMoving: boolean, delta: number, speed: number): void {
    const validDelta = (Number.isFinite(delta) && delta > 0) ? Math.min(delta, 0.1) : 0.016;
    const validSpeed = (Number.isFinite(speed) && speed > 0) ? Math.min(speed, 3.0) : 1.0;

    if (isMoving) {
      this.walkTime += validDelta * validSpeed * 10.0;
      const legAngle = Math.sin(this.walkTime) * 0.65;

      this.leftLegPivot.rotation.x = legAngle;
      this.rightLegPivot.rotation.x = -legAngle;

      this.leftArmPivot.rotation.x = -legAngle * 0.7;
      this.rightArmPivot.rotation.x = legAngle * 0.7;

      // Vertical bob applied strictly to bodyGroup, never root group
      this.bodyGroup.position.y = Math.abs(Math.sin(this.walkTime * 2.0)) * 0.05;

      // Lantern swing
      this.lanternMesh.rotation.z = Math.sin(this.walkTime) * 0.2;
      this.lanternMesh.position.y = 0.85 + Math.cos(this.walkTime) * 0.03;
    } else {
      // Smooth return to idle
      this.leftLegPivot.rotation.x *= 0.82;
      this.rightLegPivot.rotation.x *= 0.82;
      this.leftArmPivot.rotation.x *= 0.82;
      this.rightArmPivot.rotation.x *= 0.82;
      this.bodyGroup.position.y *= 0.82;
      this.lanternMesh.rotation.z *= 0.82;
      this.lanternMesh.position.y = 0.85;
    }

    // Light flicker
    const lightFlicker = Math.sin(this.walkTime * 3.0) * 0.15;
    this.lanternLight.intensity = 2.5 + lightFlicker;
  }
}
