import * as THREE from 'three';
import { TextureAtlas } from '../terrain/TextureAtlas';

export interface TorchLightInfo {
  light: THREE.PointLight;
  baseIntensity: number;
  flickerSpeed: number;
  flickerPhase: number;
  position: THREE.Vector3;
}

export class PropsFactory {
  private atlas: TextureAtlas;

  constructor(atlas: TextureAtlas) {
    this.atlas = atlas;
  }

  /**
   * Bed matching the reference image: Dark oak frame, posts, white pillow, green duvet
   */
  public createBed(): THREE.Group {
    const bed = new THREE.Group();
    bed.name = 'Bed';

    // Mattress / Duvet
    const duvetGeom = new THREE.BoxGeometry(1.2, 0.4, 1.8);
    const duvetMesh = new THREE.Mesh(duvetGeom, this.atlas.materials.bedGreen);
    duvetMesh.position.set(0, 0.35, 0);
    duvetMesh.castShadow = true;
    duvetMesh.receiveShadow = true;
    bed.add(duvetMesh);

    // Wood headboard
    const headboardGeom = new THREE.BoxGeometry(1.3, 0.9, 0.12);
    const headboardMesh = new THREE.Mesh(headboardGeom, this.atlas.materials.woodBeam);
    headboardMesh.position.set(0, 0.45, -0.9);
    headboardMesh.castShadow = true;
    bed.add(headboardMesh);

    // Wood footboard
    const footboardGeom = new THREE.BoxGeometry(1.3, 0.6, 0.12);
    const footboardMesh = new THREE.Mesh(footboardGeom, this.atlas.materials.woodBeam);
    footboardMesh.position.set(0, 0.3, 0.9);
    footboardMesh.castShadow = true;
    bed.add(footboardMesh);

    // 4 Corner Posts
    const postGeom = new THREE.BoxGeometry(0.12, 0.95, 0.12);
    const postPositions = [
      [-0.6, 0.475, -0.9],
      [0.6, 0.475, -0.9],
      [-0.6, 0.35, 0.9],
      [0.6, 0.35, 0.9]
    ];
    for (const pos of postPositions) {
      const post = new THREE.Mesh(postGeom, this.atlas.materials.woodBeam);
      post.position.set(pos[0], pos[1], pos[2]);
      post.castShadow = true;
      bed.add(post);
    }

    return bed;
  }

  /**
   * Nightstand / Drawer matching reference image
   */
  public createDrawer(): THREE.Group {
    const drawer = new THREE.Group();
    drawer.name = 'Drawer';

    const bodyGeom = new THREE.BoxGeometry(0.75, 0.75, 0.6);
    const bodyMesh = new THREE.Mesh(bodyGeom, this.atlas.materials.woodPlanks);
    bodyMesh.position.set(0, 0.375, 0);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    drawer.add(bodyMesh);

    // Top lip
    const topGeom = new THREE.BoxGeometry(0.82, 0.08, 0.68);
    const topMesh = new THREE.Mesh(topGeom, this.atlas.materials.woodBeam);
    topMesh.position.set(0, 0.77, 0);
    topMesh.castShadow = true;
    drawer.add(topMesh);

    // Drawer handle pulls
    const handleGeom = new THREE.BoxGeometry(0.2, 0.04, 0.04);
    const handle1 = new THREE.Mesh(handleGeom, this.atlas.materials.iron);
    handle1.position.set(0, 0.52, 0.31);
    const handle2 = new THREE.Mesh(handleGeom, this.atlas.materials.iron);
    handle2.position.set(0, 0.25, 0.31);
    drawer.add(handle1, handle2);

    return drawer;
  }

  /**
   * Wardrobe / Armoire matching reference image
   */
  public createWardrobe(): THREE.Group {
    const wardrobe = new THREE.Group();
    wardrobe.name = 'Wardrobe';

    const bodyGeom = new THREE.BoxGeometry(1.2, 1.9, 0.7);
    const bodyMesh = new THREE.Mesh(bodyGeom, this.atlas.materials.woodPlanks);
    bodyMesh.position.set(0, 0.95, 0);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    wardrobe.add(bodyMesh);

    // Trim border
    const trimGeom = new THREE.BoxGeometry(1.3, 0.1, 0.76);
    const trimMesh = new THREE.Mesh(trimGeom, this.atlas.materials.woodBeam);
    trimMesh.position.set(0, 1.9, 0);
    trimMesh.castShadow = true;
    wardrobe.add(trimMesh);

    // Iron hinges
    const hingeGeom = new THREE.BoxGeometry(0.08, 0.08, 0.04);
    const h1 = new THREE.Mesh(hingeGeom, this.atlas.materials.iron);
    h1.position.set(-0.5, 1.5, 0.36);
    const h2 = new THREE.Mesh(hingeGeom, this.atlas.materials.iron);
    h2.position.set(-0.5, 0.5, 0.36);
    wardrobe.add(h1, h2);

    return wardrobe;
  }

  /**
   * Table and chairs set matching reference image
   */
  public createTableSet(): THREE.Group {
    const set = new THREE.Group();
    set.name = 'TableSet';

    // Long Dining Table
    const tabletopGeom = new THREE.BoxGeometry(1.8, 0.1, 1.0);
    const tabletopMesh = new THREE.Mesh(tabletopGeom, this.atlas.materials.bedGreen); // Green cloth runner
    tabletopMesh.position.set(0, 0.7, 0);
    tabletopMesh.castShadow = true;
    tabletopMesh.receiveShadow = true;
    set.add(tabletopMesh);

    // 4 Table legs
    const legGeom = new THREE.BoxGeometry(0.1, 0.65, 0.1);
    const legPositions = [
      [-0.8, 0.325, -0.4],
      [0.8, 0.325, -0.4],
      [-0.8, 0.325, 0.4],
      [0.8, 0.325, 0.4]
    ];
    for (const p of legPositions) {
      const leg = new THREE.Mesh(legGeom, this.atlas.materials.woodBeam);
      leg.position.set(p[0], p[1], p[2]);
      leg.castShadow = true;
      set.add(leg);
    }

    // 2 Chairs facing the table
    const chairPositions = [
      [-0.4, 0, 0.8],
      [0.4, 0, 0.8]
    ];
    for (const cp of chairPositions) {
      const chair = this.createChair();
      chair.position.set(cp[0], cp[1], cp[2]);
      set.add(chair);
    }

    return set;
  }

  public createChair(): THREE.Group {
    const chair = new THREE.Group();
    chair.name = 'Chair';

    // Seat
    const seatGeom = new THREE.BoxGeometry(0.45, 0.08, 0.45);
    const seatMesh = new THREE.Mesh(seatGeom, this.atlas.materials.woodPlanks);
    seatMesh.position.set(0, 0.42, 0);
    seatMesh.castShadow = true;
    chair.add(seatMesh);

    // Backrest
    const backGeom = new THREE.BoxGeometry(0.45, 0.5, 0.08);
    const backMesh = new THREE.Mesh(backGeom, this.atlas.materials.woodBeam);
    backMesh.position.set(0, 0.7, 0.18);
    backMesh.castShadow = true;
    chair.add(backMesh);

    // 4 Legs
    const legGeom = new THREE.BoxGeometry(0.06, 0.38, 0.06);
    const lPos = [
      [-0.18, 0.19, -0.18],
      [0.18, 0.19, -0.18],
      [-0.18, 0.19, 0.18],
      [0.18, 0.19, 0.18]
    ];
    for (const p of lPos) {
      const leg = new THREE.Mesh(legGeom, this.atlas.materials.woodBeam);
      leg.position.set(p[0], p[1], p[2]);
      leg.castShadow = true;
      chair.add(leg);
    }

    return chair;
  }

  /**
   * Crimson & Gold Ornate Carpet matching reference screenshot
   */
  public createCarpet(width = 3.6, length = 2.4): THREE.Mesh {
    const carpetGeom = new THREE.PlaneGeometry(width, length);
    const carpetMesh = new THREE.Mesh(carpetGeom, this.atlas.materials.carpetRed);
    carpetMesh.rotation.x = -Math.PI / 2;
    carpetMesh.position.set(0, 0.02, 0);
    carpetMesh.receiveShadow = true;
    return carpetMesh;
  }

  /**
   * Wall Torch with dynamic warm PointLight and flickering flame
   */
  public createTorch(x: number, y: number, z: number): { group: THREE.Group; lightInfo: TorchLightInfo } {
    const group = new THREE.Group();
    group.position.set(x, y, z);

    // Sconce iron bracket
    const bracketGeom = new THREE.BoxGeometry(0.12, 0.35, 0.2);
    const bracketMesh = new THREE.Mesh(bracketGeom, this.atlas.materials.iron);
    bracketMesh.position.set(0, 0, 0.1);
    group.add(bracketMesh);

    // Torch wood stick
    const stickGeom = new THREE.BoxGeometry(0.08, 0.5, 0.08);
    const stickMesh = new THREE.Mesh(stickGeom, this.atlas.materials.woodBeam);
    stickMesh.position.set(0, 0.15, 0.2);
    stickMesh.rotation.x = 0.2;
    group.add(stickMesh);

    // Glowing flame core
    const flameGeom = new THREE.BoxGeometry(0.15, 0.22, 0.15);
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xffaa33 });
    const flameMesh = new THREE.Mesh(flameGeom, flameMat);
    flameMesh.position.set(0, 0.42, 0.25);
    group.add(flameMesh);

    // Dynamic Point Light (intensity 2.0, distance 15.0)
    const light = new THREE.PointLight(0xffa834, 2.0, 15.0, 1.2);
    light.position.set(0, 0.5, 0.3);
    light.castShadow = true;
    light.shadow.bias = -0.002;
    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    group.add(light);

    const lightInfo: TorchLightInfo = {
      light,
      baseIntensity: 2.0,
      flickerSpeed: 7 + Math.random() * 5,
      flickerPhase: Math.random() * Math.PI * 2,
      position: new THREE.Vector3(x, y + 0.5, z + 0.3)
    };

    return { group, lightInfo };
  }

  /**
   * Wall Window casting bright warm interior lighting
   */
  public createWindow(x: number, y: number, z: number): THREE.Group {
    const group = new THREE.Group();
    group.position.set(x, y, z);

    const windowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.6, 1.2),
      this.atlas.materials.windowLattice
    );
    windowMesh.position.set(0, 0, 0.02);
    group.add(windowMesh);

    // Window light beam
    const windowLight = new THREE.PointLight(0xfffae0, 3.0, 8.0, 1.2);
    windowLight.position.set(0, 0, 0.5);
    group.add(windowLight);

    return group;
  }

  /**
   * Wall Map Parchment
   */
  public createMapScroll(x: number, y: number, z: number): THREE.Mesh {
    const mapMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 0.9),
      this.atlas.materials.mapScroll
    );
    mapMesh.position.set(x, y, z + 0.02);
    return mapMesh;
  }

  /**
   * Treasure Chest
   */
  public createChest(x: number, y: number, z: number): THREE.Group {
    const chest = new THREE.Group();
    chest.position.set(x, y, z);

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.45, 0.5),
      this.atlas.materials.woodPlanks
    );
    body.position.set(0, 0.225, 0);
    body.castShadow = true;
    chest.add(body);

    const lid = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.18, 0.52),
      this.atlas.materials.woodBeam
    );
    lid.position.set(0, 0.5, 0);
    lid.castShadow = true;
    chest.add(lid);

    const lock = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.12, 0.05),
      this.atlas.materials.iron
    );
    lock.position.set(0, 0.38, 0.27);
    chest.add(lock);

    return chest;
  }
}
