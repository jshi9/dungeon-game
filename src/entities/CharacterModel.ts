import * as THREE from 'three';
import { TextureAtlas } from '../terrain/TextureAtlas';

export class CharacterModel {
  public group: THREE.Group;
  public lanternLight: THREE.PointLight;
  private leftLeg: THREE.Mesh;
  private rightLeg: THREE.Mesh;
  private leftArm: THREE.Mesh;
  private rightArm: THREE.Mesh;
  private lanternMesh: THREE.Group;
  private walkTime: number = 0;

  constructor(atlas: TextureAtlas) {
    this.group = new THREE.Group();
    this.group.name = 'PlayerCharacter';

    const armorMat = atlas.materials.iron;
    const darkClothMat = new THREE.MeshStandardMaterial({
      color: 0x1f242b,
      roughness: 0.8
    });
    const skinMat = new THREE.MeshStandardMaterial({
      color: 0xd9a066,
      roughness: 0.6
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x1b1822,
      roughness: 0.9
    });

    // 1. Torso & Chestplate
    const torsoGeom = new THREE.BoxGeometry(0.5, 0.55, 0.32);
    const torso = new THREE.Mesh(torsoGeom, armorMat);
    torso.position.set(0, 0.72, 0);
    torso.castShadow = true;
    torso.receiveShadow = true;
    this.group.add(torso);

    // Pauldrons (Shoulder guards)
    const pauldronGeom = new THREE.BoxGeometry(0.2, 0.18, 0.36);
    const leftPauldron = new THREE.Mesh(pauldronGeom, armorMat);
    leftPauldron.position.set(-0.32, 0.88, 0);
    leftPauldron.castShadow = true;

    const rightPauldron = new THREE.Mesh(pauldronGeom, armorMat);
    rightPauldron.position.set(0.32, 0.88, 0);
    rightPauldron.castShadow = true;
    this.group.add(leftPauldron, rightPauldron);

    // 2. Head & Helmet / Hair
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 1.15, 0);

    const faceGeom = new THREE.BoxGeometry(0.34, 0.34, 0.34);
    const face = new THREE.Mesh(faceGeom, skinMat);
    face.castShadow = true;
    headGroup.add(face);

    // Knight Hair / Helmet visor
    const hairGeom = new THREE.BoxGeometry(0.38, 0.22, 0.38);
    const hair = new THREE.Mesh(hairGeom, hairMat);
    hair.position.set(0, 0.12, -0.02);
    hair.castShadow = true;
    headGroup.add(hair);

    this.group.add(headGroup);

    // 3. Legs
    const legGeom = new THREE.BoxGeometry(0.18, 0.44, 0.2);
    this.leftLeg = new THREE.Mesh(legGeom, darkClothMat);
    this.leftLeg.position.set(-0.14, 0.22, 0);
    this.leftLeg.castShadow = true;

    this.rightLeg = new THREE.Mesh(legGeom, darkClothMat);
    this.rightLeg.position.set(0.14, 0.22, 0);
    this.rightLeg.castShadow = true;
    this.group.add(this.leftLeg, this.rightLeg);

    // 4. Arms
    const armGeom = new THREE.BoxGeometry(0.14, 0.42, 0.16);
    this.leftArm = new THREE.Mesh(armGeom, darkClothMat);
    this.leftArm.position.set(-0.33, 0.65, 0);
    this.leftArm.castShadow = true;

    this.rightArm = new THREE.Mesh(armGeom, darkClothMat);
    this.rightArm.position.set(0.33, 0.65, 0);
    this.rightArm.castShadow = true;
    this.group.add(this.leftArm, this.rightArm);

    // 5. Handheld Lantern (casting dynamic light on environment)
    this.lanternMesh = new THREE.Group();
    this.lanternMesh.position.set(0.42, 0.48, 0.25);

    const lanternFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.22, 0.14),
      atlas.materials.iron
    );
    const lanternCore = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.14, 0.1),
      new THREE.MeshBasicMaterial({ color: 0xffe28a })
    );
    this.lanternMesh.add(lanternFrame, lanternCore);

    this.lanternLight = new THREE.PointLight(0xffbe5c, 2.2, 8.5, 1.5);
    this.lanternLight.position.set(0, 0, 0);
    this.lanternLight.castShadow = true;
    this.lanternLight.shadow.bias = -0.002;
    this.lanternLight.shadow.mapSize.width = 512;
    this.lanternLight.shadow.mapSize.height = 512;
    this.lanternMesh.add(this.lanternLight);

    this.group.add(this.lanternMesh);
  }

  public updateAnimation(isMoving: boolean, delta: number, speed: number): void {
    if (isMoving) {
      this.walkTime += delta * speed * 12;
      const legAngle = Math.sin(this.walkTime) * 0.6;
      this.leftLeg.rotation.x = legAngle;
      this.rightLeg.rotation.x = -legAngle;

      this.leftArm.rotation.x = -legAngle * 0.7;
      this.rightArm.rotation.x = legAngle * 0.7;

      // Gentle vertical bob
      this.group.position.y = Math.abs(Math.sin(this.walkTime * 2)) * 0.06;

      // Subtle lantern swing
      this.lanternMesh.rotation.z = Math.sin(this.walkTime) * 0.25;
      this.lanternMesh.position.y = 0.48 + Math.cos(this.walkTime) * 0.04;
    } else {
      // Return smoothly to idle stance
      this.leftLeg.rotation.x *= 0.85;
      this.rightLeg.rotation.x *= 0.85;
      this.leftArm.rotation.x *= 0.85;
      this.rightArm.rotation.x *= 0.85;
      this.group.position.y *= 0.85;
      this.lanternMesh.rotation.z *= 0.85;
      this.lanternMesh.position.y = 0.48;
    }

    // Subtle lantern light flickering
    const lightFlicker = Math.sin(this.walkTime * 4) * 0.15;
    this.lanternLight.intensity = 2.0 + lightFlicker;
  }
}
