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
    h1.position.set(-0.55, 1.4, 0.36);
    const h2 = new THREE.Mesh(hingeGeom, this.atlas.materials.iron);
    h2.position.set(-0.55, 0.5, 0.36);
    wardrobe.add(h1, h2);

    return wardrobe;
  }

  /**
   * Table and 2 Chairs Set matching reference image
   */
  public createTableSet(): THREE.Group {
    const group = new THREE.Group();
    group.name = 'TableSet';

    // Green Tablecloth Top
    const tableTopGeom = new THREE.BoxGeometry(1.5, 0.1, 0.9);
    const tableTop = new THREE.Mesh(tableTopGeom, this.atlas.materials.bedGreen);
    tableTop.position.set(0, 0.7, 0);
    tableTop.castShadow = true;
    tableTop.receiveShadow = true;
    group.add(tableTop);

    // 4 Table legs
    const legGeom = new THREE.BoxGeometry(0.08, 0.7, 0.08);
    const legCoords = [
      [-0.65, 0.35, -0.35],
      [0.65, 0.35, -0.35],
      [-0.65, 0.35, 0.35],
      [0.65, 0.35, 0.35]
    ];
    for (const pos of legCoords) {
      const leg = new THREE.Mesh(legGeom, this.atlas.materials.woodBeam);
      leg.position.set(pos[0], pos[1], pos[2]);
      leg.castShadow = true;
      group.add(leg);
    }

    // Chair Left
    const chairL = this.createChair();
    chairL.position.set(-0.9, 0, 0);
    chairL.rotation.y = Math.PI / 2;
    group.add(chairL);

    // Chair Right
    const chairR = this.createChair();
    chairR.position.set(0.9, 0, 0);
    chairR.rotation.y = -Math.PI / 2;
    group.add(chairR);

    return group;
  }

  private createChair(): THREE.Group {
    const chair = new THREE.Group();
    // Seat
    const seat = new THREE.Mesh(
      new THREE.BoxGeometry(0.42, 0.06, 0.42),
      this.atlas.materials.woodPlanks
    );
    seat.position.set(0, 0.42, 0);
    seat.castShadow = true;
    chair.add(seat);

    // Backrest
    const back = new THREE.Mesh(
      new THREE.BoxGeometry(0.42, 0.45, 0.06),
      this.atlas.materials.woodBeam
    );
    back.position.set(0, 0.65, -0.18);
    back.castShadow = true;
    chair.add(back);

    // Legs
    const chairLegGeom = new THREE.BoxGeometry(0.05, 0.42, 0.05);
    const cPositions = [
      [-0.18, 0.21, -0.18],
      [0.18, 0.21, -0.18],
      [-0.18, 0.21, 0.18],
      [0.18, 0.21, 0.18]
    ];
    for (const p of cPositions) {
      const cl = new THREE.Mesh(chairLegGeom, this.atlas.materials.woodBeam);
      cl.position.set(p[0], p[1], p[2]);
      cl.castShadow = true;
      chair.add(cl);
    }
    return chair;
  }

  /**
   * Carpet matching reference image (Red with gold trim)
   */
  public createCarpet(width: number, height: number): THREE.Mesh {
    const geom = new THREE.PlaneGeometry(width, height);
    const mesh = new THREE.Mesh(geom, this.atlas.materials.carpetRed);
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    return mesh;
  }

  /**
   * Wall Torch Sconce with dynamic point light and warm ambient glow
   */
  public createTorch(x: number, y: number, z: number): {
    group: THREE.Group;
    lightInfo: TorchLightInfo;
  } {
    const group = new THREE.Group();
    group.position.set(x, y, z);

    // Iron Wall Bracket
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
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xffdd66 });
    const flameMesh = new THREE.Mesh(flameGeom, flameMat);
    flameMesh.position.set(0, 0.42, 0.25);
    group.add(flameMesh);

    // Dynamic Point Light (intensity 4.5, distance 24.0, smooth decay)
    const light = new THREE.PointLight(0xffbe44, 4.5, 24.0, 1.05);
    light.position.set(0, 0.5, 0.3);
    light.castShadow = true;
    light.shadow.bias = -0.002;
    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;
    group.add(light);

    const lightInfo: TorchLightInfo = {
      light,
      baseIntensity: 4.5,
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

    // Window light beam (intensity 5.5, distance 16.0)
    const windowLight = new THREE.PointLight(0xfff5d0, 5.5, 16.0, 1.05);
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
