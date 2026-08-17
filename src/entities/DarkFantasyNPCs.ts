import * as THREE from 'three';
import { TextureAtlas } from '../terrain/TextureAtlas';

export class DarkFantasyNPCManager {
  public group: THREE.Group;
  private atlas: TextureAtlas;
  private animatedFigures: Array<{
    torchMesh?: THREE.Mesh;
    light?: THREE.PointLight;
    runeMesh?: THREE.Mesh;
    baseIntensity: number;
    phase: number;
    hoverOffsetY?: number;
    initialY?: number;
  }> = [];

  constructor(scene: THREE.Scene, atlas: TextureAtlas) {
    this.group = new THREE.Group();
    this.group.name = 'DarkFantasyNPCs';
    this.atlas = atlas;
    scene.add(this.group);
  }

  /**
   * Spawns the Crimson Arch-Mage / Wandering Priest
   * Features textured crimson wool robes, embroidered trim, hooded cowl, belt with potion vials, and glowing torch staff.
   */
  public spawnCrimsonMage(x: number, y: number, z: number, rotationY: number = 0, holdsTorch: boolean = true): THREE.Group {
    const mage = new THREE.Group();
    mage.position.set(x, y, z);
    mage.rotation.y = rotationY;

    const crimsonMat = this.atlas.materials.clothCrimsonWool;
    const cowlMat = this.atlas.materials.clothHoodedCowl;
    const leatherMat = this.atlas.materials.leatherStuddedBrigandine;
    const brassMat = this.atlas.materials.brassMetal;
    const darkClothMat = new THREE.MeshStandardMaterial({ color: 0x110d0d, roughness: 0.9 });
    const beardMat = new THREE.MeshStandardMaterial({ color: 0xd5cebe, roughness: 0.85 });

    // 1. Tapered Lower Robe (8-Sided Cylinder with subtle forward hem flair)
    const lowerRobeGeom = new THREE.CylinderGeometry(0.34, 0.58, 1.25, 8);
    const lowerRobe = new THREE.Mesh(lowerRobeGeom, crimsonMat);
    lowerRobe.position.y = 0.62;
    lowerRobe.castShadow = true;
    lowerRobe.receiveShadow = true;
    mage.add(lowerRobe);

    // Golden Embroidered Hem Border
    const hemGeom = new THREE.CylinderGeometry(0.56, 0.60, 0.08, 8);
    const hem = new THREE.Mesh(hemGeom, brassMat);
    hem.position.y = 0.05;
    mage.add(hem);

    // 2. Chest & Tunic (Upper Body with Leather Belt)
    const chestGeom = new THREE.BoxGeometry(0.52, 0.62, 0.36);
    const chest = new THREE.Mesh(chestGeom, crimsonMat);
    chest.position.set(0, 1.40, 0);
    chest.castShadow = true;
    chest.receiveShadow = true;
    mage.add(chest);

    // Leather Belt with Brass Buckle
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.12, 0.39), leatherMat);
    belt.position.set(0, 1.18, 0);
    belt.castShadow = true;
    mage.add(belt);

    const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.14, 0.04), brassMat);
    buckle.position.set(0, 1.18, 0.20);
    mage.add(buckle);

    // Potion Vials on Belt
    const vial1 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.16, 6),
      new THREE.MeshStandardMaterial({ color: 0xaa2211, roughness: 0.2, metalness: 0.8 })
    );
    vial1.position.set(-0.20, 1.12, 0.20);
    vial1.rotation.z = 0.2;
    mage.add(vial1);

    const vial2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.16, 6),
      new THREE.MeshStandardMaterial({ color: 0x2288cc, roughness: 0.2, metalness: 0.8 })
    );
    vial2.position.set(-0.10, 1.12, 0.20);
    vial2.rotation.z = 0.1;
    mage.add(vial2);

    // 3. Deep Cowled Hood & Face Void
    const cowlMantle = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.45, 8), cowlMat);
    cowlMantle.position.set(0, 1.70, 0);
    cowlMantle.castShadow = true;
    mage.add(cowlMantle);

    const hoodPoint = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.85, 8), crimsonMat);
    hoodPoint.position.set(0, 2.05, -0.08);
    hoodPoint.rotation.x = -0.25;
    hoodPoint.castShadow = true;
    mage.add(hoodPoint);

    // Face Shadow Void
    const faceVoid = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 0.18), darkClothMat);
    faceVoid.position.set(0, 1.72, 0.12);
    mage.add(faceVoid);

    // Glowing Fiery Ember Eyes in Void
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffaa33 });
    const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.02), eyeMat);
    eyeL.position.set(-0.06, 1.75, 0.21);
    mage.add(eyeL);

    const eyeR = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.02, 0.02), eyeMat);
    eyeR.position.set(0.06, 1.75, 0.21);
    mage.add(eyeR);

    // Flowing Silver Beard
    const beard = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.52, 6), beardMat);
    beard.position.set(0, 1.48, 0.22);
    beard.rotation.x = 0.22;
    mage.add(beard);

    // 4. Wide Robe Sleeves
    const sleeveL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.60, 0.26), crimsonMat);
    sleeveL.position.set(-0.38, 1.35, 0.14);
    sleeveL.rotation.set(0.35, 0.1, -0.15);
    sleeveL.castShadow = true;
    mage.add(sleeveL);

    const sleeveR = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.60, 0.26), crimsonMat);
    sleeveR.position.set(0.38, 1.35, 0.14);
    sleeveR.rotation.set(0.35, -0.1, 0.15);
    sleeveR.castShadow = true;
    mage.add(sleeveR);

    // 5. Gnarled Oak Staff with Held Torch/Lantern
    if (holdsTorch) {
      const staffGroup = new THREE.Group();
      staffGroup.position.set(0.42, 0, 0.38);

      const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 2.2, 6), this.atlas.materials.darkOak);
      staff.position.y = 1.1;
      staff.castShadow = true;
      staffGroup.add(staff);

      // Brass Lantern Cage on top of staff
      const cage = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.26, 0.18), brassMat);
      cage.position.set(0, 2.15, 0);
      cage.castShadow = true;
      staffGroup.add(cage);

      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.24, 6), this.atlas.materials.torchFire);
      flame.position.set(0, 2.15, 0);
      staffGroup.add(flame);

      const torchLight = new THREE.PointLight(0xff8822, 2.4, 18.0, 1.2);
      torchLight.position.set(0, 2.15, 0);
      staffGroup.add(torchLight);

      mage.add(staffGroup);

      this.animatedFigures.push({
        torchMesh: flame,
        light: torchLight,
        baseIntensity: 2.4,
        phase: Math.random() * Math.PI * 2
      });
    }

    this.group.add(mage);
    return mage;
  }

  /**
   * Spawns the Hooded Black Sorcerer / Wanderer
   * Features textured dark cowls, glowing runic sash, floating arcane focus glyph, and draped traveling cloak.
   */
  public spawnHoodedSorcerer(x: number, y: number, z: number, rotationY: number = 0): THREE.Group {
    const sorcerer = new THREE.Group();
    sorcerer.position.set(x, y, z);
    sorcerer.rotation.y = rotationY;

    const cowlMat = this.atlas.materials.clothHoodedCowl;
    const runeMat = this.atlas.materials.clothSorcererRune;
    const voidMat = new THREE.MeshBasicMaterial({ color: 0x010204 });
    const paleSkinMat = new THREE.MeshStandardMaterial({ color: 0xcdc5b5, roughness: 0.85 });

    // 1. Flowing Dark Robe
    const robeGeom = new THREE.CylinderGeometry(0.36, 0.65, 1.78, 8);
    const robe = new THREE.Mesh(robeGeom, cowlMat);
    robe.position.y = 0.89;
    robe.castShadow = true;
    robe.receiveShadow = true;
    sorcerer.add(robe);

    // 2. Arcane Runic Stole / Sash (Image 1 & 5)
    const stoleL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.95, 0.05), runeMat);
    stoleL.position.set(-0.16, 1.15, 0.22);
    stoleL.rotation.y = 0.15;
    stoleL.castShadow = true;
    sorcerer.add(stoleL);

    const stoleR = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.95, 0.05), runeMat);
    stoleR.position.set(0.16, 1.15, 0.22);
    stoleR.rotation.y = -0.15;
    stoleR.castShadow = true;
    sorcerer.add(stoleR);

    // 3. Heavy Cowled Hood
    const hoodGeom = new THREE.ConeGeometry(0.38, 0.85, 8);
    const hood = new THREE.Mesh(hoodGeom, cowlMat);
    hood.position.set(0, 1.90, -0.06);
    hood.rotation.x = -0.22;
    hood.castShadow = true;
    sorcerer.add(hood);

    // Dark Void Interior
    const voidFace = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.30, 0.20), voidMat);
    voidFace.position.set(0, 1.60, 0.12);
    sorcerer.add(voidFace);

    // Subtle Arcane Eye Glint
    const arcaneEyeMat = new THREE.MeshBasicMaterial({ color: 0x6699ff });
    const aEyeL = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.02, 0.02), arcaneEyeMat);
    aEyeL.position.set(-0.06, 1.62, 0.22);
    sorcerer.add(aEyeL);

    const aEyeR = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.02, 0.02), arcaneEyeMat);
    aEyeR.position.set(0.06, 1.62, 0.22);
    sorcerer.add(aEyeR);

    // 4. Clasped Pale Hands with Levitating Arcane Rune Sigil
    const hands = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.14, 0.16), paleSkinMat);
    hands.position.set(0, 1.15, 0.38);
    hands.castShadow = true;
    sorcerer.add(hands);

    // Floating Levitating Arcane Sigil
    const sigilGeom = new THREE.OctahedronGeometry(0.12, 0);
    const sigilMat = new THREE.MeshStandardMaterial({
      color: 0x4488ff,
      emissive: 0x2244aa,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8
    });
    const sigil = new THREE.Mesh(sigilGeom, sigilMat);
    sigil.position.set(0, 1.45, 0.42);
    sorcerer.add(sigil);

    const sigilLight = new THREE.PointLight(0x4477ff, 1.5, 8.0, 1.5);
    sigilLight.position.set(0, 1.45, 0.42);
    sorcerer.add(sigilLight);

    // Draped Sleeves
    const sleeveL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.58, 0.26), cowlMat);
    sleeveL.position.set(-0.30, 1.28, 0.22);
    sleeveL.rotation.set(0.42, 0.2, -0.2);
    sleeveL.castShadow = true;
    sorcerer.add(sleeveL);

    const sleeveR = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.58, 0.26), cowlMat);
    sleeveR.position.set(0.30, 1.28, 0.22);
    sleeveR.rotation.set(0.42, -0.2, 0.2);
    sleeveR.castShadow = true;
    sorcerer.add(sleeveR);

    this.animatedFigures.push({
      runeMesh: sigil,
      light: sigilLight,
      baseIntensity: 1.5,
      phase: Math.random() * Math.PI * 2,
      initialY: 1.45
    });

    this.group.add(sorcerer);
    return sorcerer;
  }

  /**
   * Spawns a Plate-Armored Knight seated in contemplation on a cliff or bench.
   * Features textured fluted steel plate armor, chainmail hauberk undergarment, articulated sallet helmet, and greatsword.
   */
  public spawnSittingKnight(x: number, y: number, z: number, rotationY: number = 0): THREE.Group {
    const knight = new THREE.Group();
    knight.position.set(x, y, z);
    knight.rotation.y = rotationY;

    const plateMat = this.atlas.materials.armorSteelPlate;
    const chainmailMat = this.atlas.materials.armorChainmailRing;
    const leatherMat = this.atlas.materials.leatherStuddedBrigandine;
    const steelBladeMat = this.atlas.materials.steelBlade;
    const brassMat = this.atlas.materials.brassMetal;

    // 1. Torso & Fluted Cuirass (Angled back slightly, resting)
    const cuirass = new THREE.Mesh(new THREE.BoxGeometry(0.50, 0.56, 0.32), plateMat);
    cuirass.position.set(0, 0.72, 0);
    cuirass.rotation.x = -0.15;
    cuirass.castShadow = true;
    knight.add(cuirass);

    // Chainmail Hauberk Layer beneath cuirass
    const hauberk = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.22, 0.34), chainmailMat);
    hauberk.position.set(0, 0.48, 0.05);
    hauberk.castShadow = true;
    knight.add(hauberk);

    // Leather Belt with Brass Buckle
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.08, 0.36), leatherMat);
    belt.position.set(0, 0.54, 0.06);
    knight.add(belt);

    // 2. Heavy Tiered Pauldrons (Shoulder Guards)
    const pauldronL = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.24, 0.34), plateMat);
    pauldronL.position.set(-0.36, 0.96, 0);
    pauldronL.castShadow = true;
    knight.add(pauldronL);

    const pauldronR = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.24, 0.34), plateMat);
    pauldronR.position.set(0.36, 0.96, 0);
    pauldronR.castShadow = true;
    knight.add(pauldronR);

    // 3. Sallet Helmet with Dark Visor Slit (Gazing upward at stars)
    const helm = new THREE.Mesh(new THREE.BoxGeometry(0.30, 0.32, 0.32), plateMat);
    helm.position.set(0, 1.28, 0.06);
    helm.rotation.x = -0.28;
    helm.castShadow = true;

    // Visor Slit
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.035, 0.06), new THREE.MeshBasicMaterial({ color: 0x080c14 }));
    visor.position.set(0, 0, 0.17);
    helm.add(visor);

    // Brass Helmet Crest Ridge
    const crest = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.10, 0.34), brassMat);
    crest.position.set(0, 0.18, 0);
    helm.add(crest);

    knight.add(helm);

    // 4. Seated Bent Legs (Thighs forward, shins down)
    const thighL = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.085, 0.56, 6), plateMat);
    thighL.position.set(-0.20, 0.46, 0.26);
    thighL.rotation.x = Math.PI / 2.2;
    thighL.castShadow = true;
    knight.add(thighL);

    const shinL = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.075, 0.56, 6), plateMat);
    shinL.position.set(-0.20, 0.16, 0.54);
    shinL.castShadow = true;
    knight.add(shinL);

    const thighR = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.085, 0.56, 6), plateMat);
    thighR.position.set(0.20, 0.46, 0.26);
    thighR.rotation.x = Math.PI / 2.2;
    thighR.castShadow = true;
    knight.add(thighR);

    const shinR = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.075, 0.56, 6), plateMat);
    shinR.position.set(0.20, 0.16, 0.54);
    shinR.castShadow = true;
    knight.add(shinR);

    // 5. Forearms Resting on Knees
    const armL = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.06, 0.56, 6), plateMat);
    armL.position.set(-0.26, 0.70, 0.24);
    armL.rotation.set(0.8, 0, -0.2);
    armL.castShadow = true;
    knight.add(armL);

    const armR = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.06, 0.56, 6), plateMat);
    armR.position.set(0.26, 0.70, 0.24);
    armR.rotation.set(0.8, 0, 0.2);
    armR.castShadow = true;
    knight.add(armR);

    // 6. Massive Greatsword Planted Beside Him
    const swordGroup = new THREE.Group();
    swordGroup.position.set(0.55, 0, 0.10);
    swordGroup.rotation.z = -0.15;

    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.09, 1.4, 0.02), steelBladeMat);
    blade.position.y = 0.7;
    blade.castShadow = true;
    swordGroup.add(blade);

    const crossguard = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.06, 0.06), brassMat);
    crossguard.position.y = 1.4;
    swordGroup.add(crossguard);

    const hilt = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.35, 6), leatherMat);
    hilt.position.y = 1.6;
    swordGroup.add(hilt);

    const pommel = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), brassMat);
    pommel.position.y = 1.8;
    swordGroup.add(pommel);

    knight.add(swordGroup);

    this.group.add(knight);
    return knight;
  }

  /**
   * Spawns an Armored Skeleton Sentinel with Halberd
   * Features textured weathered skeleton bone, rusted chainmail hauberk, iron kettle helmet, and heavy steel poleaxe.
   */
  public spawnSkeletonSentinel(x: number, y: number, z: number, rotationY: number = 0): THREE.Group {
    const sentinel = new THREE.Group();
    sentinel.position.set(x, y, z);
    sentinel.rotation.y = rotationY;

    const boneMat = this.atlas.materials.skeletonBone;
    const chainmailMat = this.atlas.materials.armorChainmailRing;
    const plateMat = this.atlas.materials.armorSteelPlate;
    const ironMat = this.atlas.materials.iron;
    const steelBladeMat = this.atlas.materials.steelBlade;

    // Legs
    const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.78, 5), boneMat);
    leftLeg.position.set(-0.16, 0.39, 0);
    leftLeg.castShadow = true;
    sentinel.add(leftLeg);

    const rightLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.78, 5), boneMat);
    rightLeg.position.set(0.16, 0.39, 0);
    rightLeg.castShadow = true;
    sentinel.add(rightLeg);

    // Ribcage & Rusted Chainmail Hauberk
    const hauberk = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.58, 0.30), chainmailMat);
    hauberk.position.set(0, 1.08, 0);
    hauberk.castShadow = true;
    sentinel.add(hauberk);

    // Iron Breastplate Segment
    const breastplate = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.36, 0.32), plateMat);
    breastplate.position.set(0, 1.20, 0);
    breastplate.castShadow = true;
    sentinel.add(breastplate);

    // Skull with Sallet / Kettle Helmet
    const skull = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.26, 0.26), boneMat);
    skull.position.set(0, 1.54, 0);
    skull.castShadow = true;

    // Deep eye sockets with faint ghostly green glint
    const eyeSocketMat = new THREE.MeshBasicMaterial({ color: 0x051a05 });
    const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.05), eyeSocketMat);
    eyeL.position.set(-0.06, 0.03, 0.12);
    skull.add(eyeL);

    const eyeR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.05), eyeSocketMat);
    eyeR.position.set(0.06, 0.03, 0.12);
    skull.add(eyeR);

    // Medieval Iron Kettle Hat Helmet
    const helm = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.20, 6), ironMat);
    helm.position.set(0, 0.18, 0);
    skull.add(helm);

    sentinel.add(skull);

    // Skeletal Arms
    const lArm = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.58, 5), boneMat);
    lArm.position.set(-0.32, 1.08, 0);
    lArm.castShadow = true;
    sentinel.add(lArm);

    const rArm = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.58, 5), boneMat);
    rArm.position.set(0.32, 1.14, 0.16);
    rArm.rotation.x = 0.5;
    rArm.castShadow = true;
    sentinel.add(rArm);

    // Heavy Poleaxe / Halberd
    const halberdGroup = new THREE.Group();
    halberdGroup.position.set(0.35, 0.2, 0.28);

    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.5, 6), this.atlas.materials.darkOak);
    shaft.position.y = 1.25;
    shaft.castShadow = true;
    halberdGroup.add(shaft);

    const spearTip = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.40, 4), steelBladeMat);
    spearTip.position.y = 2.55;
    spearTip.castShadow = true;
    halberdGroup.add(spearTip);

    const axeBlade = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.28, 0.03), steelBladeMat);
    axeBlade.position.set(0.12, 2.30, 0);
    axeBlade.castShadow = true;
    halberdGroup.add(axeBlade);

    sentinel.add(halberdGroup);

    this.group.add(sentinel);
    return sentinel;
  }

  /**
   * Spawns a cluster of vibrant Red Toadstool Mushrooms
   */
  public spawnMushroomCluster(x: number, y: number, z: number, count = 4): THREE.Group {
    const cluster = new THREE.Group();
    cluster.position.set(x, y, z);

    const stemMat = new THREE.MeshStandardMaterial({ color: 0xded6c4, roughness: 0.9 });
    const capMat = new THREE.MeshStandardMaterial({ color: 0xcc2222, roughness: 0.45 });
    const spotMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < count; i++) {
      const shroom = new THREE.Group();
      const ox = (Math.random() - 0.5) * 0.7;
      const oz = (Math.random() - 0.5) * 0.7;
      const hScale = 0.5 + Math.random() * 0.5;

      shroom.position.set(ox, 0, oz);

      // Stalk
      const stalk = new THREE.Mesh(new THREE.CylinderGeometry(0.04 * hScale, 0.06 * hScale, 0.35 * hScale, 6), stemMat);
      stalk.position.y = (0.35 * hScale) / 2;
      shroom.add(stalk);

      // Red Cap Dome
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.16 * hScale, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.55), capMat);
      cap.position.y = 0.32 * hScale;
      cap.castShadow = true;
      shroom.add(cap);

      // White spots
      for (let s = 0; s < 4; s++) {
        const spot = new THREE.Mesh(new THREE.CircleGeometry(0.025 * hScale, 5), spotMat);
        const sa = (s / 4) * Math.PI * 2;
        spot.position.set(Math.cos(sa) * 0.11 * hScale, 0.42 * hScale, Math.sin(sa) * 0.11 * hScale);
        spot.rotation.x = -Math.PI / 3;
        shroom.add(spot);
      }

      cluster.add(shroom);
    }

    this.group.add(cluster);
    return cluster;
  }

  public update(time: number): void {
    this.animatedFigures.forEach((fig) => {
      if (fig.torchMesh) {
        const flicker = Math.sin(time * 12.0 + fig.phase) * 0.08;
        fig.torchMesh.scale.set(1.0 + flicker, 1.0 + flicker * 1.5, 1.0 + flicker);
      }
      if (fig.light) {
        fig.light.intensity = fig.baseIntensity + Math.sin(time * 10.0 + fig.phase) * 0.4;
      }
      if (fig.runeMesh && fig.initialY !== undefined) {
        fig.runeMesh.position.y = fig.initialY + Math.sin(time * 2.5 + fig.phase) * 0.05;
        fig.runeMesh.rotation.y += 0.02;
        fig.runeMesh.rotation.x += 0.01;
      }
    });
  }

  public clearAll(): void {
    this.group.clear();
    this.animatedFigures = [];
  }
}
