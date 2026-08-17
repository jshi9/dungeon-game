import * as THREE from 'three';
import { TextureAtlas } from './TextureAtlas';
import { LibraryLoreGenerator, BookData } from '../lore/LibraryLoreGenerator';
import { BookSpineGenerator } from './BookSpineGenerator';

export interface LocalLightInfo {
  light: THREE.PointLight;
  baseIntensity: number;
  flickerSpeed: number;
  flickerPhase: number;
}

interface PendingBookInstance {
  bookData: BookData;
  matrix: THREE.Matrix4;
  isHorizontal: boolean;
  side: number;
}

export class LibraryManager {
  public scene: THREE.Scene;
  public atlas: TextureAtlas;
  public container: THREE.Group;

  // Localized Animated Light Sources
  public animatedLights: LocalLightInfo[] = [];
  public globeSphereMesh?: THREE.Mesh;
  public dustParticles?: THREE.Points;

  // Raycastable interactive book targets
  public raycastableBooks: THREE.Object3D[] = [];

  // Dimensions
  public width = 14; // X: -7 to +7
  public length = 40; // Z: -4 to +36
  public ceilingHeight = 13.0;

  // Shared Unit Box Geometry for all instanced books
  private unitBoxGeom: THREE.BoxGeometry;

  // Defined collision obstacles on ground floor (clear of all stairways)
  private deskPositions = [
    { x: -2.3, z: 4 },
    { x: 2.3, z: 8 },
    { x: -2.3, z: 12 },
    { x: 2.3, z: 18 },
    { x: -2.3, z: 24 },
    { x: 2.3, z: 30 }
  ];

  private cratePositions = [
    { x: -3.8, z: 33.5 },
    { x: 3.8, z: 33.5 }
  ];

  constructor(scene: THREE.Scene, atlas: TextureAtlas) {
    this.scene = scene;
    this.atlas = atlas;
    this.container = new THREE.Group();
    this.container.name = 'GrandCathedralLibrary';
    this.scene.add(this.container);

    this.unitBoxGeom = new THREE.BoxGeometry(1, 1, 1);

    this.buildCathedralArchitecture();
    this.buildGothicRibbedVaultArches();
    this.buildModularBookshelfWallsAndInstancedBooks();
    this.buildRollingLadders();
    this.buildUpperBalconiesAndStairs();
    this.buildStudyDesksAndBenches();
    this.buildCelestialGlobe();
    this.buildGrandChandeliers();
    this.buildWallCandleSconces();
    this.buildHeraldicBannersAndPlaques();
    this.buildFloorClutterAndPiles();
    this.buildStainedGlassAndVolumetricLightRays();
    this.buildFloatingDustParticles();
  }

  public setVisible(visible: boolean): void {
    this.container.visible = visible;
  }

  private ensureVisible(mesh: THREE.Object3D): void {
    mesh.frustumCulled = false;
  }

  /**
   * Helper to scale UV coordinates on standard buffer geometries
   */
  private applyUVScale(geom: THREE.BufferGeometry, scaleX: number, scaleY: number): void {
    const uvs = geom.attributes.uv;
    if (!uvs) return;
    for (let i = 0; i < uvs.count; i++) {
      uvs.setXY(i, uvs.getX(i) * scaleX, uvs.getY(i) * scaleY);
    }
    uvs.needsUpdate = true;
  }

  /**
   * 1. Multi-Texture Seamlessly Blended Cathedral Floors, Crimson Runner Carpet & Fluted Pillars
   */
  private buildCathedralArchitecture(): void {
    // Layer 1: Base Cathedral Diamond Slate Tile Floor
    const floorGeom = new THREE.PlaneGeometry(this.width, this.length);
    this.applyUVScale(floorGeom, 7, 20);
    const floorMesh = new THREE.Mesh(floorGeom, this.atlas.materials.stoneTileFloor);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.set(0, 0, 16);
    floorMesh.receiveShadow = true;
    this.ensureVisible(floorMesh);
    this.container.add(floorMesh);

    // Layer 2: Side Study Wing & Reading Alcove Dark Walnut Herringbone Parquet (Left & Right)
    const parquetWidth = 3.6;
    const leftParquetGeom = new THREE.PlaneGeometry(parquetWidth, this.length);
    this.applyUVScale(leftParquetGeom, 2, 20);
    const leftParquet = new THREE.Mesh(leftParquetGeom, this.atlas.materials.woodParquet);
    leftParquet.rotation.x = -Math.PI / 2;
    leftParquet.position.set(-5.2, 0.005, 16);
    leftParquet.receiveShadow = true;
    this.ensureVisible(leftParquet);

    const rightParquetGeom = new THREE.PlaneGeometry(parquetWidth, this.length);
    this.applyUVScale(rightParquetGeom, 2, 20);
    const rightParquet = new THREE.Mesh(rightParquetGeom, this.atlas.materials.woodParquet);
    rightParquet.rotation.x = -Math.PI / 2;
    rightParquet.position.set(5.2, 0.005, 16);
    rightParquet.receiveShadow = true;
    this.ensureVisible(rightParquet);
    this.container.add(leftParquet, rightParquet);

    // Layer 3: Brass Inlay Threshold Strips separating the stone nave from parquet wings
    const threshGeom = new THREE.PlaneGeometry(0.12, this.length);
    this.applyUVScale(threshGeom, 1, 20);
    const leftThresh = new THREE.Mesh(threshGeom, this.atlas.materials.brassMetal);
    leftThresh.rotation.x = -Math.PI / 2;
    leftThresh.position.set(-3.4, 0.008, 16);

    const rightThresh = new THREE.Mesh(threshGeom, this.atlas.materials.brassMetal);
    rightThresh.rotation.x = -Math.PI / 2;
    rightThresh.position.set(3.4, 0.008, 16);
    this.container.add(leftThresh, rightThresh);

    // Layer 4: Central Processional Nave Aisle Obsidian Border
    const naveStoneGeom = new THREE.PlaneGeometry(4.4, this.length - 2);
    this.applyUVScale(naveStoneGeom, 2.5, 18);
    const naveStoneMesh = new THREE.Mesh(naveStoneGeom, this.atlas.materials.dungeonFloor);
    naveStoneMesh.rotation.x = -Math.PI / 2;
    naveStoneMesh.position.set(0, 0.012, 16);
    naveStoneMesh.receiveShadow = true;
    this.ensureVisible(naveStoneMesh);
    this.container.add(naveStoneMesh);

    // Layer 5: Central Plush Crimson Velvet Runner Carpet with Gold Damask Embroidery
    const carpetGeom = new THREE.PlaneGeometry(3.2, this.length - 3);
    this.applyUVScale(carpetGeom, 1, 10);
    const carpetMesh = new THREE.Mesh(carpetGeom, this.atlas.materials.carpetRed);
    carpetMesh.rotation.x = -Math.PI / 2;
    carpetMesh.position.set(0, 0.02, 16);
    carpetMesh.receiveShadow = true;
    this.ensureVisible(carpetMesh);
    this.container.add(carpetMesh);

    // Carpet Antique Brass Fringe Ends
    const fringeGeom = new THREE.PlaneGeometry(3.2, 0.25);
    const fringeNorth = new THREE.Mesh(fringeGeom, this.atlas.materials.brassMetal);
    fringeNorth.rotation.x = -Math.PI / 2;
    fringeNorth.position.set(0, 0.025, 34.6);
    const fringeSouth = new THREE.Mesh(fringeGeom, this.atlas.materials.brassMetal);
    fringeSouth.rotation.x = -Math.PI / 2;
    fringeSouth.position.set(0, 0.025, -2.6);
    this.container.add(fringeNorth, fringeSouth);

    // 3. Vaulted Gothic Stone Ceiling
    const ceilGeom = new THREE.PlaneGeometry(this.width, this.length);
    this.applyUVScale(ceilGeom, 7, 20);
    const ceilMesh = new THREE.Mesh(ceilGeom, this.atlas.materials.stoneBrick);
    ceilMesh.rotation.x = Math.PI / 2;
    ceilMesh.position.set(0, this.ceilingHeight, 16);
    this.ensureVisible(ceilMesh);
    this.container.add(ceilMesh);

    // 4. Perimeter Stone Walls (North Apse & South Entrance) with Wainscotting
    const endWallGeom = new THREE.BoxGeometry(this.width, this.ceilingHeight, 1.0);
    this.applyUVScale(endWallGeom, 6, 6);
    const northWall = new THREE.Mesh(endWallGeom, this.atlas.materials.stoneBrick);
    northWall.position.set(0, this.ceilingHeight / 2, 36);
    northWall.castShadow = true;
    northWall.receiveShadow = true;
    this.ensureVisible(northWall);

    const southWall = new THREE.Mesh(endWallGeom, this.atlas.materials.stoneBrick);
    southWall.position.set(0, this.ceilingHeight / 2, -4);
    southWall.castShadow = true;
    southWall.receiveShadow = true;
    this.ensureVisible(southWall);

    // Carved Wood Wainscot Paneling along base of North/South walls
    const wainscotGeom = new THREE.BoxGeometry(this.width, 1.2, 0.15);
    const northWainscot = new THREE.Mesh(wainscotGeom, this.atlas.materials.darkOak);
    northWainscot.position.set(0, 0.6, 35.4);
    const southWainscot = new THREE.Mesh(wainscotGeom, this.atlas.materials.darkOak);
    southWainscot.position.set(0, 0.6, -3.4);
    this.container.add(northWall, southWall, northWainscot, southWainscot);

    // 5. Massive Fluted Stone Pillars with Octagonal Plinths & Iron Banding
    const pillarZ = [0, 6, 12, 18, 24, 30];
    const pillarHeight = this.ceilingHeight;
    const colRadius = 0.52;

    const plinthGeom = new THREE.CylinderGeometry(0.80, 0.88, 0.7, 8);
    const pillarGeom = new THREE.CylinderGeometry(colRadius, colRadius, pillarHeight - 1.4, 12);
    this.applyUVScale(pillarGeom, 2, 6);
    const ironBandGeom = new THREE.CylinderGeometry(colRadius + 0.04, colRadius + 0.04, 0.12, 12);
    const capitalGeom = new THREE.BoxGeometry(1.5, 0.7, 1.5);

    pillarZ.forEach((pz) => {
      [-4.3, 4.3].forEach((px) => {
        const pillarGroup = new THREE.Group();
        pillarGroup.position.set(px, 0, pz);

        // 1. Octagonal Stepped Stone Plinth Base
        const plinth = new THREE.Mesh(plinthGeom, this.atlas.materials.carvedStonePillar);
        plinth.position.set(0, 0.35, 0);
        plinth.receiveShadow = true;

        // 2. Fluted Column Shaft
        const shaft = new THREE.Mesh(pillarGeom, this.atlas.materials.carvedStonePillar);
        shaft.position.set(0, (pillarHeight - 1.4) / 2 + 0.7, 0);
        shaft.castShadow = true;
        shaft.receiveShadow = true;

        // 3. Wrought-Iron Collar Bands at Y=2.4 and Y=4.8
        const ironBand1 = new THREE.Mesh(ironBandGeom, this.atlas.materials.iron);
        ironBand1.position.set(0, 2.4, 0);
        const ironBand2 = new THREE.Mesh(ironBandGeom, this.atlas.materials.iron);
        ironBand2.position.set(0, 4.8, 0);

        // 4. Carved Corinthian/Gothic Stone Capital at Top
        const capital = new THREE.Mesh(capitalGeom, this.atlas.materials.stoneBrick);
        capital.position.set(0, pillarHeight - 0.35, 0);

        pillarGroup.add(plinth, shaft, ironBand1, ironBand2, capital);
        this.ensureVisible(pillarGroup);
        this.container.add(pillarGroup);
      });
    });
  }

  /**
   * 2. Transverse Gothic Ribbed Stone Ceiling Arches & Decorative Keystones
   */
  private buildGothicRibbedVaultArches(): void {
    const archZ = [0, 6, 12, 18, 24, 30];

    archZ.forEach((az) => {
      const archGroup = new THREE.Group();
      archGroup.position.set(0, 0, az);

      const archSpan = 8.6;
      const archHeight = 4.0;
      const numSegments = 14;

      for (let s = 0; s < numSegments; s++) {
        const t1 = s / numSegments;
        const t2 = (s + 1) / numSegments;

        const x1 = -archSpan / 2 + t1 * archSpan;
        const x2 = -archSpan / 2 + t2 * archSpan;

        const y1 = (this.ceilingHeight - 0.7) - Math.pow(Math.abs(x1) / (archSpan / 2), 1.6) * archHeight;
        const y2 = (this.ceilingHeight - 0.7) - Math.pow(Math.abs(x2) / (archSpan / 2), 1.6) * archHeight;

        const segLength = Math.hypot(x2 - x1, y2 - y1);
        const angle = Math.atan2(y2 - y1, x2 - x1);

        const segGeom = new THREE.BoxGeometry(segLength + 0.05, 0.45, 0.55);
        const segMesh = new THREE.Mesh(segGeom, this.atlas.materials.stoneBrick);
        segMesh.position.set((x1 + x2) / 2, (y1 + y2) / 2, 0);
        segMesh.rotation.z = angle;
        archGroup.add(segMesh);
      }

      // Carved Gilded Center Keystone
      const keystone = new THREE.Mesh(
        new THREE.BoxGeometry(0.85, 0.75, 0.75),
        this.atlas.materials.stoneBrick
      );
      keystone.position.set(0, this.ceilingHeight - 0.7, 0);

      const keystoneEmblem = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.5, 0.8),
        this.atlas.materials.brassMetal
      );
      keystoneEmblem.position.set(0, this.ceilingHeight - 0.7, 0);

      archGroup.add(keystone, keystoneEmblem);
      this.ensureVisible(archGroup);
      this.container.add(archGroup);
    });
  }

  /**
   * 3. Modular Multi-Tier Bookshelf Bays & Instanced Book Batching (Ground Floor)
   */
  private buildModularBookshelfWallsAndInstancedBooks(): void {
    const bayPlaques = [
      this.atlas.materials.plaqueHistoria,
      this.atlas.materials.plaquePhilosophia,
      this.atlas.materials.plaqueScientia,
      this.atlas.materials.plaqueTheologia,
      this.atlas.materials.plaqueArcanum,
      this.atlas.materials.plaqueMythologia
    ];

    const bayLength = 5.5;
    const numBays = 6;
    const shelfRowsY = [0.8, 1.6, 2.4, 3.2, 4.0];
    const shelfDepth = 0.60;

    const pendingBooks: PendingBookInstance[] = [];

    [-1, 1].forEach((side) => {
      const shelfX = side * 6.5;

      for (let bay = 0; bay < numBays; bay++) {
        const bayZ = -1.5 + bay * bayLength;

        // 1. Backing Wall Panel
        const backGeom = new THREE.BoxGeometry(0.08, 4.4, bayLength - 0.1);
        const backMesh = new THREE.Mesh(backGeom, this.atlas.materials.darkOak);
        backMesh.position.set(side * 6.82, 2.2, bayZ + bayLength / 2);
        backMesh.receiveShadow = true;
        this.ensureVisible(backMesh);
        this.container.add(backMesh);

        // 2. Upright Timber Framing Columns
        const colGeom = new THREE.BoxGeometry(0.35, 4.5, 0.35);
        const col1 = new THREE.Mesh(colGeom, this.atlas.materials.darkOak);
        col1.position.set(shelfX, 2.25, bayZ);
        this.ensureVisible(col1);

        const col2 = new THREE.Mesh(colGeom, this.atlas.materials.darkOak);
        col2.position.set(shelfX, 2.25, bayZ + bayLength);
        this.ensureVisible(col2);
        this.container.add(col1, col2);

        // 3. Ornate Carved Cornice Header with Latin Plaque
        const headerGeom = new THREE.BoxGeometry(0.45, 0.45, bayLength);
        const headerMesh = new THREE.Mesh(headerGeom, this.atlas.materials.darkOak);
        headerMesh.position.set(shelfX, 4.35, bayZ + bayLength / 2);
        this.ensureVisible(headerMesh);
        this.container.add(headerMesh);

        // Category Plaque
        const plaqueMat = bayPlaques[bay % bayPlaques.length];
        const plaqueGeom = new THREE.PlaneGeometry(1.8, 0.45);
        const plaqueMesh = new THREE.Mesh(plaqueGeom, plaqueMat);
        plaqueMesh.position.set(shelfX - side * 0.24, 4.35, bayZ + bayLength / 2);
        plaqueMesh.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
        this.ensureVisible(plaqueMesh);
        this.container.add(plaqueMesh);

        // 4. Shelf Ledges & Books
        shelfRowsY.forEach((shelfY, rowIdx) => {
          const ledgeGeom = new THREE.BoxGeometry(shelfDepth, 0.08, bayLength - 0.15);
          const ledgeMesh = new THREE.Mesh(ledgeGeom, this.atlas.materials.darkOak);
          ledgeMesh.position.set(side * 6.55, shelfY, bayZ + bayLength / 2);
          ledgeMesh.receiveShadow = true;
          this.ensureVisible(ledgeMesh);
          this.container.add(ledgeMesh);

          const startZ = bayZ + 0.22;
          const endZ = bayZ + bayLength - 0.22;
          let currentZ = startZ;
          let bookIndexInRow = 0;

          while (currentZ < endZ) {
            const baseSeed = (side === -1 ? 1000000 : 2000000) + bay * 80000 + rowIdx * 10000 + bookIndexInRow * 109 + 31;
            const prng = LibraryLoreGenerator.createPrng(baseSeed);

            const remainingSpace = endZ - currentZ;
            if (remainingSpace < 0.07) break;

            const isHorizontalStack = prng() < 0.14 && remainingSpace >= 0.38;

            if (isHorizontalStack) {
              const stackCount = 2 + Math.floor(prng() * 2);
              const stackWidth = 0.28 + prng() * 0.06;
              const stackDepth = 0.38 + prng() * 0.05;
              const bookThick = 0.08 + prng() * 0.02;
              const stackZ = currentZ + stackWidth / 2;

              for (let s = 0; s < stackCount; s++) {
                const bookSeed = baseSeed + s * 1013 + 7;
                const bookData = LibraryLoreGenerator.generateBook(bookSeed);

                const bY = shelfY + 0.04 + s * bookThick + bookThick / 2;
                const mat4 = new THREE.Matrix4();
                const pos = new THREE.Vector3(side * 6.55, bY, stackZ);
                const rot = new THREE.Euler(0, (prng() - 0.5) * 0.08, 0);
                const scale = new THREE.Vector3(stackDepth, bookThick, stackWidth);
                const quat = new THREE.Quaternion().setFromEuler(rot);
                mat4.compose(pos, quat, scale);

                pendingBooks.push({
                  bookData,
                  matrix: mat4,
                  isHorizontal: true,
                  side
                });
              }

              currentZ += stackWidth + 0.015;
            } else {
              const bWidth = 0.08 + prng() * 0.06;
              const bHeight = 0.52 + prng() * 0.20;
              const bDepth = 0.38 + prng() * 0.06;
              const bZ = currentZ + bWidth / 2;
              const bY = shelfY + 0.04 + bHeight / 2;

              const bookSeed = baseSeed + 43;
              const bookData = LibraryLoreGenerator.generateBook(bookSeed);

              const mat4 = new THREE.Matrix4();
              const pos = new THREE.Vector3(side * 6.55, bY, bZ);
              const rot = new THREE.Euler(prng() < 0.16 ? (prng() - 0.5) * 0.08 : 0, 0, 0);
              const scale = new THREE.Vector3(bDepth, bHeight, bWidth);
              const quat = new THREE.Quaternion().setFromEuler(rot);
              mat4.compose(pos, quat, scale);

              pendingBooks.push({
                bookData,
                matrix: mat4,
                isHorizontal: false,
                side
              });

              currentZ += bWidth + 0.004;
            }

            bookIndexInRow++;
          }
        });
      }
    });

    this.createInstancedBookMeshes(pendingBooks);
  }

  private createInstancedBookMeshes(pendingList: PendingBookInstance[]): void {
    const groups: Map<string, { materials: THREE.Material[]; instances: PendingBookInstance[] }> = new Map();

    for (const item of pendingList) {
      const key = `${item.side}_${item.isHorizontal ? 'H' : 'V'}_${item.bookData.coverColor}_${item.bookData.accentColor}`;
      if (!groups.has(key)) {
        const materials = BookSpineGenerator.getBookMaterials(item.bookData, item.isHorizontal, item.side);
        groups.set(key, { materials, instances: [] });
      }
      groups.get(key)!.instances.push(item);
    }

    groups.forEach(({ materials, instances }) => {
      const count = instances.length;
      const instMesh = new THREE.InstancedMesh(this.unitBoxGeom, materials, count);

      const bookList: BookData[] = [];
      for (let i = 0; i < count; i++) {
        instMesh.setMatrixAt(i, instances[i].matrix);
        bookList.push(instances[i].bookData);
      }

      instMesh.userData = {
        isInstancedBooks: true,
        books: bookList
      };

      instMesh.instanceMatrix.needsUpdate = true;
      instMesh.receiveShadow = true;
      instMesh.frustumCulled = false;

      this.raycastableBooks.push(instMesh);
      this.container.add(instMesh);
    });
  }

  /**
   * 4. Movable Rolling Ladders with Continuous Brass Guide Rails
   */
  private buildRollingLadders(): void {
    [-1, 1].forEach((side) => {
      const railGeom = new THREE.CylinderGeometry(0.025, 0.025, 33.0, 8);
      const railMesh = new THREE.Mesh(railGeom, this.atlas.materials.brassMetal);
      railMesh.position.set(side * 6.22, 4.35, 15.0);
      railMesh.rotation.x = Math.PI / 2;
      this.ensureVisible(railMesh);
      this.container.add(railMesh);
    });

    const ladderPositions = [
      { side: -1, z: 1.25, height: 4.45 },
      { side: 1, z: 22.5, height: 4.45 }
    ];

    ladderPositions.forEach(({ side, z, height }) => {
      const ladderGroup = new THREE.Group();
      const ladderWidth = 0.65;
      const leanAngle = 0.16;

      const railGeom = new THREE.BoxGeometry(0.06, height, 0.1);
      const leftRail = new THREE.Mesh(railGeom, this.atlas.materials.darkOak);
      leftRail.position.set(0, height / 2, -ladderWidth / 2);

      const rightRail = new THREE.Mesh(railGeom, this.atlas.materials.darkOak);
      rightRail.position.set(0, height / 2, ladderWidth / 2);
      ladderGroup.add(leftRail, rightRail);

      const numRungs = 11;
      const rungGeom = new THREE.CylinderGeometry(0.025, 0.025, ladderWidth, 6);
      for (let r = 1; r < numRungs; r++) {
        const ry = (r / numRungs) * (height - 0.4);
        const rung = new THREE.Mesh(rungGeom, this.atlas.materials.woodPlanks);
        rung.position.set(0, ry, 0);
        rung.rotation.x = Math.PI / 2;
        ladderGroup.add(rung);
      }

      const wheelGeom = new THREE.CylinderGeometry(0.06, 0.06, 0.04, 8);
      const wheelLeft = new THREE.Mesh(wheelGeom, this.atlas.materials.brassMetal);
      wheelLeft.position.set(0, 0.04, -ladderWidth / 2);
      wheelLeft.rotation.z = Math.PI / 2;

      const wheelRight = new THREE.Mesh(wheelGeom, this.atlas.materials.brassMetal);
      wheelRight.position.set(0, 0.04, ladderWidth / 2);
      wheelRight.rotation.z = Math.PI / 2;
      ladderGroup.add(wheelLeft, wheelRight);

      const hookGeom = new THREE.TorusGeometry(0.05, 0.018, 6, 12, Math.PI);
      const hookLeft = new THREE.Mesh(hookGeom, this.atlas.materials.brassMetal);
      hookLeft.position.set(-side * 0.04, height - 0.1, -ladderWidth / 2);
      const hookRight = new THREE.Mesh(hookGeom, this.atlas.materials.brassMetal);
      hookRight.position.set(-side * 0.04, height - 0.1, ladderWidth / 2);
      ladderGroup.add(hookLeft, hookRight);

      ladderGroup.position.set(side * 5.85, 0, z);
      ladderGroup.rotation.z = side * leanAngle;

      this.ensureVisible(ladderGroup);
      this.container.add(ladderGroup);
    });
  }

  /**
   * 5. Upper Balconies, Grand Symmetrical Staircases & Modular 2nd Floor Bookshelves
   */
  private buildUpperBalconiesAndStairs(): void {
    const balconyY = 4.5;
    const balconyWidth = 2.0; // from X = +/-4.7 to +/-6.7
    const balconyLength = 30.5; // from Z = 3.5 to Z = 34.0

    // 1. Balcony Floors (Walkway is centered at X = +/-5.7)
    const balcGeom = new THREE.BoxGeometry(balconyWidth, 0.15, balconyLength);

    const leftBalcony = new THREE.Mesh(balcGeom, this.atlas.materials.woodPlanks);
    leftBalcony.position.set(-5.7, balconyY - 0.075, 18.75);
    leftBalcony.receiveShadow = true;
    this.ensureVisible(leftBalcony);

    const rightBalcony = new THREE.Mesh(balcGeom, this.atlas.materials.woodPlanks);
    rightBalcony.position.set(5.7, balconyY - 0.075, 18.75);
    rightBalcony.receiveShadow = true;
    this.ensureVisible(rightBalcony);

    // 2. Inner Balustrade Railings with Brass Handrail (At X = +/-4.7, safely at the nave edge)
    const railGeom = new THREE.BoxGeometry(0.10, 0.85, balconyLength);
    const leftRail = new THREE.Mesh(railGeom, this.atlas.materials.darkOak);
    leftRail.position.set(-4.7, balconyY + 0.425, 18.75);
    this.ensureVisible(leftRail);

    const rightRail = new THREE.Mesh(railGeom, this.atlas.materials.darkOak);
    rightRail.position.set(4.7, balconyY + 0.425, 18.75);
    this.ensureVisible(rightRail);

    // Continuous Brass Handrail on balustrade
    const brassHandrailGeom = new THREE.CylinderGeometry(0.035, 0.035, balconyLength, 8);
    const leftBrassHandrail = new THREE.Mesh(brassHandrailGeom, this.atlas.materials.brassMetal);
    leftBrassHandrail.position.set(-4.7, balconyY + 0.88, 18.75);
    leftBrassHandrail.rotation.x = Math.PI / 2;

    const rightBrassHandrail = new THREE.Mesh(brassHandrailGeom, this.atlas.materials.brassMetal);
    rightBrassHandrail.position.set(4.7, balconyY + 0.88, 18.75);
    rightBrassHandrail.rotation.x = Math.PI / 2;

    // 3. Support Corbels positioned completely UNDER the balcony floor (Top at Y = 4.35)
    const corbelZ = [6, 12, 18, 24, 30];
    corbelZ.forEach((cz) => {
      const corbelGeom = new THREE.BoxGeometry(0.6, 0.55, 0.35);
      const leftCorbel = new THREE.Mesh(corbelGeom, this.atlas.materials.darkOak);
      leftCorbel.position.set(-4.8, balconyY - 0.45, cz);
      this.ensureVisible(leftCorbel);

      const rightCorbel = new THREE.Mesh(corbelGeom, this.atlas.materials.darkOak);
      rightCorbel.position.set(4.8, balconyY - 0.45, cz);
      this.ensureVisible(rightCorbel);

      this.container.add(leftCorbel, rightCorbel);
    });

    this.container.add(leftBalcony, rightBalcony, leftRail, rightRail, leftBrassHandrail, rightBrassHandrail);

    // -----------------------------------------------------------------
    // SECOND FLOOR MODULAR BOOKSHELF CASINGS & PROPORTIONED BOOKS
    // -----------------------------------------------------------------
    const upperShelfRowsY = [5.35, 6.25, 7.15, 8.05];
    const upperPendingBooks: PendingBookInstance[] = [];

    [-1, 1].forEach((side) => {
      // 1. Solid Dark Oak Plinth Base along floor (Y = 4.5 to 4.7)
      const plinthGeom = new THREE.BoxGeometry(0.55, 0.20, balconyLength);
      const plinthMesh = new THREE.Mesh(plinthGeom, this.atlas.materials.darkOak);
      plinthMesh.position.set(side * 6.58, balconyY + 0.10, 18.75);
      this.container.add(plinthMesh);

      // 2. Backing panel at outer perimeter wall (X = +/-6.85)
      const backGeom = new THREE.BoxGeometry(0.06, 4.3, balconyLength);
      const backMesh = new THREE.Mesh(backGeom, this.atlas.materials.darkOak);
      backMesh.position.set(side * 6.85, balconyY + 2.15, 18.75);
      backMesh.receiveShadow = true;
      this.ensureVisible(backMesh);
      this.container.add(backMesh);

      // 3. Upright dividing framing pillars between bays
      for (let bz = 3.5; bz <= 34.0; bz += 5.5) {
        const colGeom = new THREE.BoxGeometry(0.40, 4.3, 0.35);
        const col = new THREE.Mesh(colGeom, this.atlas.materials.darkOak);
        col.position.set(side * 6.58, balconyY + 2.15, bz);
        this.ensureVisible(col);
        this.container.add(col);
      }

      // 4. Carved Crown Cornice Moulding Header (Y = 8.75)
      const headerGeom = new THREE.BoxGeometry(0.50, 0.40, balconyLength);
      const header = new THREE.Mesh(headerGeom, this.atlas.materials.darkOak);
      header.position.set(side * 6.58, balconyY + 4.25, 18.75);
      this.ensureVisible(header);
      this.container.add(header);

      // 5. Open Shelf Ledges & Books
      upperShelfRowsY.forEach((shelfY, uRowIdx) => {
        const ledgeGeom = new THREE.BoxGeometry(0.50, 0.08, balconyLength);
        const ledgeMesh = new THREE.Mesh(ledgeGeom, this.atlas.materials.darkOak);
        ledgeMesh.position.set(side * 6.58, shelfY, 18.75);
        ledgeMesh.receiveShadow = true;
        this.ensureVisible(ledgeMesh);
        this.container.add(ledgeMesh);

        let currentZ = 3.8;
        const endZ = 33.6;
        let uBookIdx = 0;

        while (currentZ < endZ) {
          const baseSeed = (side === -1 ? 3000000 : 4000000) + uRowIdx * 80000 + uBookIdx * 109 + 17;
          const prng = LibraryLoreGenerator.createPrng(baseSeed);

          const remaining = endZ - currentZ;
          if (remaining < 0.07) break;

          const isStack = prng() < 0.12 && remaining >= 0.38;

          if (isStack) {
            const stackCount = 2 + Math.floor(prng() * 2);
            const stackWidth = 0.26 + prng() * 0.05;
            const stackDepth = 0.32 + prng() * 0.04;
            const bookThick = 0.07 + prng() * 0.02;
            const stackZ = currentZ + stackWidth / 2;

            for (let s = 0; s < stackCount; s++) {
              const bookSeed = baseSeed + s * 1013 + 7;
              const bookData = LibraryLoreGenerator.generateBook(bookSeed);

              const bY = shelfY + 0.04 + s * bookThick + bookThick / 2;
              const mat4 = new THREE.Matrix4();
              const pos = new THREE.Vector3(side * 6.58, bY, stackZ);
              const rot = new THREE.Euler(0, (prng() - 0.5) * 0.08, 0);
              const scale = new THREE.Vector3(stackDepth, bookThick, stackWidth);
              mat4.compose(pos, new THREE.Quaternion().setFromEuler(rot), scale);

              upperPendingBooks.push({
                bookData,
                matrix: mat4,
                isHorizontal: true,
                side
              });
            }
            currentZ += stackWidth + 0.015;
          } else {
            const bWidth = 0.08 + prng() * 0.05;
            const bHeight = 0.44 + prng() * 0.18; // clean headroom
            const bDepth = 0.32 + prng() * 0.04;
            const bZ = currentZ + bWidth / 2;
            const bY = shelfY + 0.04 + bHeight / 2;

            const bookSeed = baseSeed + 43;
            const bookData = LibraryLoreGenerator.generateBook(bookSeed);

            const mat4 = new THREE.Matrix4();
            const pos = new THREE.Vector3(side * 6.58, bY, bZ);
            const rot = new THREE.Euler(prng() < 0.16 ? (prng() - 0.5) * 0.08 : 0, 0, 0);
            const scale = new THREE.Vector3(bDepth, bHeight, bWidth);
            mat4.compose(pos, new THREE.Quaternion().setFromEuler(rot), scale);

            upperPendingBooks.push({
              bookData,
              matrix: mat4,
              isHorizontal: false,
              side
            });

            currentZ += bWidth + 0.004;
          }
          uBookIdx++;
        }
      });
    });

    this.createInstancedBookMeshes(upperPendingBooks);

    // -------------------------------------------------------------
    // GRAND SYMMETRICAL INTEGRATED STAIRCASES (LEFT & RIGHT)
    // -------------------------------------------------------------
    this.buildGrandIntegratedStaircase(-5.2, -2.8, 3.5, balconyY, -1);
    this.buildGrandIntegratedStaircase(5.2, -2.8, 3.5, balconyY, 1);
  }

  /**
   * Builds an architecturally integrated grand staircase with flared curtail entry and pillar pier integration
   */
  private buildGrandIntegratedStaircase(
    centerX: number,
    startZ: number,
    endZ: number,
    targetY: number,
    side: number
  ): void {
    const stairGroup = new THREE.Group();
    const numSteps = 18;
    const totalLength = endZ - startZ; // 6.3
    const stepDepth = totalLength / numSteps; // 0.35
    const stepHeight = targetY / numSteps; // 0.25
    const baseStairWidth = 1.35;

    for (let i = 0; i < numSteps; i++) {
      const zPos = startZ + (i + 0.5) * stepDepth;
      const yBottom = 0;
      const yTop = (i + 1) * stepHeight;

      // Bottom steps flare gracefully outward towards the nave (curtail steps)
      const flare = i < 4 ? (4 - i) * 0.12 : 0;
      const stepWidth = baseStairWidth + flare;
      const stepCenterX = centerX - side * (flare / 2);

      // Solid stone riser support underneath each step
      const riserGeom = new THREE.BoxGeometry(stepWidth, yTop - yBottom, stepDepth);
      const riserMesh = new THREE.Mesh(riserGeom, this.atlas.materials.stoneBrick);
      riserMesh.position.set(stepCenterX, yTop / 2, zPos);
      riserMesh.receiveShadow = true;
      stairGroup.add(riserMesh);

      // Polished dark oak stair tread with bullnose edge
      const treadGeom = new THREE.BoxGeometry(stepWidth + 0.06, 0.06, stepDepth + 0.04);
      const treadMesh = new THREE.Mesh(treadGeom, this.atlas.materials.darkOak);
      treadMesh.position.set(stepCenterX, yTop - 0.03, zPos);
      treadMesh.receiveShadow = true;
      stairGroup.add(treadMesh);

      // Turned Wooden Baluster on inner banister line
      const banisterInnerX = side * (4.70 - (i < 4 ? (4 - i) * 0.15 : 0));
      if (i % 2 === 0) {
        const balusterGeom = new THREE.CylinderGeometry(0.025, 0.025, 0.85, 6);
        const baluster = new THREE.Mesh(balusterGeom, this.atlas.materials.darkOak);
        baluster.position.set(banisterInnerX, yTop + 0.425, zPos);
        stairGroup.add(baluster);
      }
    }

    // Sloping Brass Handrail along the stair run
    const slopeLength = Math.hypot(totalLength, targetY);
    const slopeAngle = Math.atan2(targetY, totalLength);

    const handrailGeom = new THREE.CylinderGeometry(0.035, 0.035, slopeLength, 8);
    const handrail = new THREE.Mesh(handrailGeom, this.atlas.materials.brassMetal);
    handrail.position.set(side * 4.70, targetY / 2 + 0.88, (startZ + endZ) / 2);
    handrail.rotation.x = Math.PI / 2 - slopeAngle;
    stairGroup.add(handrail);

    // Front Flared Newel Post at the welcoming bottom entrance
    const frontNewelX = side * 4.10;
    const newelGeom = new THREE.BoxGeometry(0.20, 1.15, 0.20);
    const frontNewel = new THREE.Mesh(newelGeom, this.atlas.materials.darkOak);
    frontNewel.position.set(frontNewelX, 0.575, startZ);

    const frontFinial = new THREE.Mesh(
      new THREE.SphereGeometry(0.10, 8, 8),
      this.atlas.materials.brassMetal
    );
    frontFinial.position.set(frontNewelX, 1.20, startZ);

    // Glowing Lantern on the entrance newel post to invite player
    const newelLantern = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.26, 0.18),
      this.atlas.materials.brassMetal
    );
    newelLantern.position.set(frontNewelX, 1.42, startZ);

    const lanternLight = new THREE.PointLight(0xffbe55, 3.2, 7.0, 1.4);
    lanternLight.position.set(frontNewelX, 1.45, startZ);
    this.animatedLights.push({
      light: lanternLight,
      baseIntensity: 3.2,
      flickerSpeed: 4.2 + (side > 0 ? 0.5 : 0),
      flickerPhase: side > 0 ? 1.0 : 0.0
    });

    stairGroup.add(frontNewel, frontFinial, newelLantern, lanternLight);

    // Pillar Integration Stone Corbel & Bracket (At Z = 0, where stairs meet pillar at X = +/-4.3)
    const pillarJunctionZ = 0.0;
    const junctionY = ((-startZ) / totalLength) * targetY; // ~2.0

    const bracketCorbel = new THREE.Mesh(
      new THREE.BoxGeometry(0.70, 0.65, 0.85),
      this.atlas.materials.carvedStonePillar
    );
    bracketCorbel.position.set(side * 4.30, junctionY - 0.25, pillarJunctionZ);
    bracketCorbel.receiveShadow = true;

    const ironTie = new THREE.Mesh(
      new THREE.BoxGeometry(0.10, 0.12, 0.95),
      this.atlas.materials.iron
    );
    ironTie.position.set(side * 4.30, junctionY + 0.15, pillarJunctionZ);

    stairGroup.add(bracketCorbel, ironTie);

    // Top Junction Newel Post at balcony landing
    const topNewel = new THREE.Mesh(newelGeom, this.atlas.materials.darkOak);
    topNewel.position.set(side * 4.70, targetY + 0.575, endZ);

    const topFinial = new THREE.Mesh(
      new THREE.SphereGeometry(0.10, 8, 8),
      this.atlas.materials.brassMetal
    );
    topFinial.position.set(side * 4.70, targetY + 1.20, endZ);
    stairGroup.add(topNewel, topFinial);

    this.ensureVisible(stairGroup);
    this.container.add(stairGroup);
  }

  /**
   * 6. Study Desks with Open Manuscripts, Candelabras, Inkwells & Quills
   */
  private buildStudyDesksAndBenches(): void {
    const deskConfigs = [
      { x: -2.3, z: 4, seed: 101, title: 'Tome of Astral Pyromancy' },
      { x: 2.3, z: 8, seed: 202, title: 'The Chronicles of Sunken Alderia' },
      { x: -2.3, z: 12, seed: 303, title: 'Treatise on Living Stone & Mortar' },
      { x: 2.3, z: 18, seed: 404, title: 'The Sacred Rites of the Golden Lion' },
      { x: -2.3, z: 24, seed: 505, title: 'Secrets of the Clockwork Heavens' },
      { x: 2.3, z: 30, seed: 606, title: 'The Lost Gospel of Veritas' }
    ];

    deskConfigs.forEach((cfg, idx) => {
      const deskGroup = new THREE.Group();
      deskGroup.position.set(cfg.x, 0, cfg.z);

      const tableTop = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.12, 1.0),
        this.atlas.materials.darkOak
      );
      tableTop.position.set(0, 0.85, 0);
      tableTop.receiveShadow = true;
      deskGroup.add(tableTop);

      const legGeom = new THREE.BoxGeometry(0.12, 0.85, 0.12);
      const legCapGeom = new THREE.BoxGeometry(0.13, 0.06, 0.13);
      const legOffsets = [[-0.8, -0.4], [0.8, -0.4], [-0.8, 0.4], [0.8, 0.4]];

      legOffsets.forEach(([lx, lz]) => {
        const leg = new THREE.Mesh(legGeom, this.atlas.materials.darkOak);
        leg.position.set(lx, 0.425, lz);
        const legCap = new THREE.Mesh(legCapGeom, this.atlas.materials.brassMetal);
        legCap.position.set(lx, 0.03, lz);
        deskGroup.add(leg, legCap);
      });

      const benchSeat = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 0.45), this.atlas.materials.darkOak);
      benchSeat.position.set(0, 0.5, -0.75);
      const benchLeg1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.35), this.atlas.materials.darkOak);
      benchLeg1.position.set(-0.6, 0.25, -0.75);
      const benchLeg2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.35), this.atlas.materials.darkOak);
      benchLeg2.position.set(0.6, 0.25, -0.75);
      deskGroup.add(benchSeat, benchLeg1, benchLeg2);

      const candelabra = this.buildDeskCandelabra();
      candelabra.position.set(-0.65, 0.91, 0.25);
      deskGroup.add(candelabra);

      const deskLight = new THREE.PointLight(0xffd266, 3.8, 6.5, 1.5);
      deskLight.position.set(-0.65, 1.35, 0.25);
      deskGroup.add(deskLight);

      this.animatedLights.push({
        light: deskLight,
        baseIntensity: 3.8,
        flickerSpeed: 4.5 + idx * 0.7,
        flickerPhase: idx * 1.2
      });

      const inkwellGroup = new THREE.Group();
      inkwellGroup.position.set(-0.45, 0.91, -0.28);

      const inkPot = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.05, 0.07, 8),
        new THREE.MeshStandardMaterial({ color: 0x181a20, roughness: 0.2, metalness: 0.8 })
      );
      inkPot.position.set(0, 0.035, 0);

      const quill = new THREE.Mesh(
        new THREE.CylinderGeometry(0.005, 0.015, 0.26, 6),
        new THREE.MeshStandardMaterial({ color: 0xf5eedc, roughness: 0.6 })
      );
      quill.position.set(0.02, 0.12, 0);
      quill.rotation.z = -0.35;
      inkwellGroup.add(inkPot, quill);
      deskGroup.add(inkwellGroup);

      const scrollMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 0.32, 8),
        this.atlas.materials.mapScroll
      );
      scrollMesh.position.set(0.45, 0.94, 0.3);
      scrollMesh.rotation.z = Math.PI / 2;
      scrollMesh.rotation.y = 0.4;
      deskGroup.add(scrollMesh);

      const lensGroup = new THREE.Group();
      lensGroup.position.set(-0.25, 0.92, -0.25);
      lensGroup.rotation.y = 0.6;

      const lensRim = new THREE.Mesh(
        new THREE.TorusGeometry(0.06, 0.01, 8, 16),
        this.atlas.materials.brassMetal
      );
      lensRim.rotation.x = Math.PI / 2;

      const lensGlass = new THREE.Mesh(
        new THREE.CylinderGeometry(0.055, 0.055, 0.005, 12),
        new THREE.MeshStandardMaterial({ color: 0xebf7ff, transparent: true, opacity: 0.4, roughness: 0.1 })
      );

      const lensHandle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.012, 0.14, 6),
        this.atlas.materials.darkOak
      );
      lensHandle.position.set(0, 0, 0.12);
      lensHandle.rotation.x = Math.PI / 2;

      lensGroup.add(lensRim, lensGlass, lensHandle);
      deskGroup.add(lensGroup);

      const openBookData = LibraryLoreGenerator.generateBook(cfg.seed, cfg.title);
      const openBookGeom = new THREE.BoxGeometry(0.55, 0.06, 0.38);
      const openBookMats = BookSpineGenerator.getBookMaterials(openBookData, true, 1);
      const openBookMesh = new THREE.Mesh(openBookGeom, openBookMats);
      openBookMesh.position.set(0, 0.94, 0);
      openBookMesh.rotation.y = (Math.random() - 0.5) * 0.2;

      openBookMesh.userData = {
        isBook: true,
        bookData: openBookData,
        originalColor: openBookData.coverColor
      };
      this.raycastableBooks.push(openBookMesh);
      deskGroup.add(openBookMesh);

      const stackBookData1 = LibraryLoreGenerator.generateBook(cfg.seed + 1000);
      const stackMats1 = BookSpineGenerator.getBookMaterials(stackBookData1, true, 1);
      const stackMesh1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 0.06, 0.38),
        stackMats1
      );
      stackMesh1.position.set(0.6, 0.94, -0.2);
      stackMesh1.userData = { isBook: true, bookData: stackBookData1, originalColor: stackBookData1.coverColor };
      this.raycastableBooks.push(stackMesh1);

      const stackBookData2 = LibraryLoreGenerator.generateBook(cfg.seed + 2000);
      const stackMats2 = BookSpineGenerator.getBookMaterials(stackBookData2, true, 1);
      const stackMesh2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.26, 0.05, 0.35),
        stackMats2
      );
      stackMesh2.position.set(0.6, 0.995, -0.2);
      stackMesh2.rotation.y = 0.18;
      stackMesh2.userData = { isBook: true, bookData: stackBookData2, originalColor: stackBookData2.coverColor };
      this.raycastableBooks.push(stackMesh2);

      deskGroup.add(stackMesh1, stackMesh2);
      this.ensureVisible(deskGroup);
      this.container.add(deskGroup);
    });
  }

  private buildDeskCandelabra(): THREE.Group {
    const candelabra = new THREE.Group();

    const base = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.10, 0.04, 8),
      this.atlas.materials.brassMetal
    );
    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.025, 0.22, 8),
      this.atlas.materials.brassMetal
    );
    stem.position.set(0, 0.11, 0);

    const armGeom = new THREE.TorusGeometry(0.10, 0.015, 6, 12, Math.PI);
    const arms = new THREE.Mesh(armGeom, this.atlas.materials.brassMetal);
    arms.position.set(0, 0.18, 0);

    candelabra.add(base, stem, arms);

    const candlePositions = [
      { x: 0, y: 0.22 },
      { x: -0.10, y: 0.18 },
      { x: 0.10, y: 0.18 }
    ];

    const cupGeom = new THREE.CylinderGeometry(0.035, 0.02, 0.02, 8);
    const waxGeom = new THREE.CylinderGeometry(0.022, 0.022, 0.18, 6);
    const flameGeom = new THREE.ConeGeometry(0.022, 0.06, 6);
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xffd266 });
    const waxMat = new THREE.MeshStandardMaterial({ color: 0xfffae6, roughness: 0.4 });

    candlePositions.forEach((cp) => {
      const cup = new THREE.Mesh(cupGeom, this.atlas.materials.brassMetal);
      cup.position.set(cp.x, cp.y + 0.01, 0);

      const wax = new THREE.Mesh(waxGeom, waxMat);
      wax.position.set(cp.x, cp.y + 0.10, 0);

      const flame = new THREE.Mesh(flameGeom, flameMat);
      flame.position.set(cp.x, cp.y + 0.21, 0);

      candelabra.add(cup, wax, flame);
    });

    return candelabra;
  }

  /**
   * 7. Multi-Gimbal Armillary Celestial Globe on Scrolled Pedestal
   */
  private buildCelestialGlobe(): void {
    const globeGroup = new THREE.Group();
    globeGroup.position.set(0, 0, 14);

    const baseGeom = new THREE.CylinderGeometry(1.0, 1.25, 0.6, 8);
    const baseMesh = new THREE.Mesh(baseGeom, this.atlas.materials.darkOak);
    baseMesh.position.set(0, 0.3, 0);
    baseMesh.receiveShadow = true;

    const baseTrim = new THREE.Mesh(
      new THREE.CylinderGeometry(1.02, 1.02, 0.08, 8),
      this.atlas.materials.brassMetal
    );
    baseTrim.position.set(0, 0.56, 0);
    globeGroup.add(baseMesh, baseTrim);

    const legAngles = [0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2];
    legAngles.forEach((ang) => {
      const legMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.12, 0.8, 0.12),
        this.atlas.materials.brassMetal
      );
      legMesh.position.set(Math.cos(ang) * 0.7, 0.95, Math.sin(ang) * 0.7);
      globeGroup.add(legMesh);
    });

    const meridianRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.05, 0.07, 8, 24),
      this.atlas.materials.brassMetal
    );
    meridianRing.position.set(0, 1.55, 0);
    meridianRing.rotation.y = Math.PI / 4;

    const equatorRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.05, 0.06, 8, 24),
      this.atlas.materials.brassMetal
    );
    equatorRing.position.set(0, 1.55, 0);
    equatorRing.rotation.x = Math.PI / 2;

    const zodiacRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.08, 0.08, 8, 24),
      this.atlas.materials.brassMetal
    );
    zodiacRing.position.set(0, 1.55, 0);
    zodiacRing.rotation.set(0.4, 0.4, 0);

    const sphereGeom = new THREE.SphereGeometry(0.84, 16, 16);
    this.globeSphereMesh = new THREE.Mesh(sphereGeom, this.atlas.materials.globeTexture);
    this.globeSphereMesh.position.set(0, 1.55, 0);

    const globeLight = new THREE.PointLight(0xffeaad, 6.5, 12.0, 1.4);
    globeLight.position.set(0, 1.55, 0);

    globeGroup.add(meridianRing, equatorRing, zodiacRing, this.globeSphereMesh, globeLight);

    this.animatedLights.push({
      light: globeLight,
      baseIntensity: 6.5,
      flickerSpeed: 1.8,
      flickerPhase: 0.0
    });

    const globeBookData = LibraryLoreGenerator.generateBook(99999, 'The Celestial Atlas of the Spheres');
    this.globeSphereMesh.userData = {
      isBook: true,
      bookData: globeBookData,
      originalColor: '#f7d583'
    };
    this.raycastableBooks.push(this.globeSphereMesh);

    this.ensureVisible(globeGroup);
    this.container.add(globeGroup);
  }

  /**
   * 8. Grand 3-Tier Wrought-Iron Chandeliers with Glowing Candles
   */
  private buildGrandChandeliers(): void {
    const chandelierZ = [4, 16, 28];

    chandelierZ.forEach((cz, idx) => {
      const cGroup = new THREE.Group();
      cGroup.position.set(0, 6.2, cz);

      const chainGeom = new THREE.CylinderGeometry(0.04, 0.04, 6.8, 6);
      const chainMesh = new THREE.Mesh(chainGeom, this.atlas.materials.iron);
      chainMesh.position.set(0, 3.4, 0);
      cGroup.add(chainMesh);

      const spindle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 1.4, 8),
        this.atlas.materials.iron
      );
      spindle.position.set(0, 0.2, 0);

      const finial = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 8, 8),
        this.atlas.materials.brassMetal
      );
      finial.position.set(0, -0.5, 0);
      cGroup.add(spindle, finial);

      const outerRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.8, 0.09, 8, 24),
        this.atlas.materials.iron
      );
      outerRing.rotation.x = Math.PI / 2;
      cGroup.add(outerRing);

      const innerRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.0, 0.07, 8, 16),
        this.atlas.materials.iron
      );
      innerRing.rotation.x = Math.PI / 2;
      innerRing.position.set(0, 0.45, 0);
      cGroup.add(innerRing);

      const addCandlesToRing = (radius: number, height: number, count: number) => {
        for (let c = 0; c < count; c++) {
          const angle = (c / count) * Math.PI * 2;
          const cx = Math.cos(angle) * radius;
          const czPos = Math.sin(angle) * radius;

          const brassCup = new THREE.Mesh(
            new THREE.CylinderGeometry(0.05, 0.03, 0.03, 8),
            this.atlas.materials.brassMetal
          );
          brassCup.position.set(cx, height + 0.015, czPos);

          const candleMesh = new THREE.Mesh(
            new THREE.CylinderGeometry(0.04, 0.04, 0.26, 6),
            new THREE.MeshStandardMaterial({ color: 0xfffae6, roughness: 0.4 })
          );
          candleMesh.position.set(cx, height + 0.14, czPos);

          const flame = new THREE.Mesh(
            new THREE.ConeGeometry(0.03, 0.08, 6),
            new THREE.MeshBasicMaterial({ color: 0xffd266 })
          );
          flame.position.set(cx, height + 0.30, czPos);

          cGroup.add(brassCup, candleMesh, flame);
        }
      };

      addCandlesToRing(1.8, 0.0, 10);
      addCandlesToRing(1.0, 0.45, 6);

      const cLight = new THREE.PointLight(0xffbe55, 12.0, 16.0, 1.3);
      cLight.position.set(0, 0.0, 0);
      cGroup.add(cLight);

      this.animatedLights.push({
        light: cLight,
        baseIntensity: 12.0,
        flickerSpeed: 3.2 + idx * 0.8,
        flickerPhase: idx * 1.4
      });

      this.ensureVisible(cGroup);
      this.container.add(cGroup);
    });
  }

  /**
   * 9. Cast-Iron Double-Arm Wall Sconces Along Nave Pillars
   */
  private buildWallCandleSconces(): void {
    const sconceZ = [3, 9, 15, 21, 27, 33];

    sconceZ.forEach((sz, idx) => {
      const sconceLightLeft = new THREE.PointLight(0xffb855, 3.6, 8.5, 1.5);
      sconceLightLeft.position.set(-4.1, 2.5, sz);
      this.container.add(sconceLightLeft);

      const sconceLightRight = new THREE.PointLight(0xffb855, 3.6, 8.5, 1.5);
      sconceLightRight.position.set(4.1, 2.5, sz);
      this.container.add(sconceLightRight);

      this.animatedLights.push(
        { light: sconceLightLeft, baseIntensity: 3.6, flickerSpeed: 4.0 + idx * 0.5, flickerPhase: idx },
        { light: sconceLightRight, baseIntensity: 3.6, flickerSpeed: 4.2 + idx * 0.5, flickerPhase: idx + 0.5 }
      );

      [-1, 1].forEach((side) => {
        const sx = side * 4.3;
        const sy = 2.4;

        const sGroup = new THREE.Group();
        sGroup.position.set(sx - side * 0.45, sy, sz);

        const backPlate = new THREE.Mesh(
          new THREE.BoxGeometry(0.06, 0.35, 0.18),
          this.atlas.materials.iron
        );
        const arm = new THREE.Mesh(
          new THREE.BoxGeometry(0.24, 0.05, 0.05),
          this.atlas.materials.iron
        );
        arm.position.set(-side * 0.12, 0.05, 0);

        sGroup.add(backPlate, arm);

        [-0.08, 0.08].forEach((czOffset) => {
          const cup = new THREE.Mesh(
            new THREE.CylinderGeometry(0.04, 0.02, 0.02, 6),
            this.atlas.materials.brassMetal
          );
          cup.position.set(-side * 0.22, 0.07, czOffset);

          const wax = new THREE.Mesh(
            new THREE.CylinderGeometry(0.03, 0.03, 0.22, 6),
            new THREE.MeshStandardMaterial({ color: 0xfffae6, roughness: 0.4 })
          );
          wax.position.set(-side * 0.22, 0.18, czOffset);

          const flame = new THREE.Mesh(
            new THREE.ConeGeometry(0.025, 0.06, 6),
            new THREE.MeshBasicMaterial({ color: 0xffd266 })
          );
          flame.position.set(-side * 0.22, 0.31, czOffset);

          sGroup.add(cup, wax, flame);
        });

        this.ensureVisible(sGroup);
        this.container.add(sGroup);
      });
    });
  }

  /**
   * 10. Heraldic Tapestry Banners with Brass Mounting Poles
   */
  private buildHeraldicBannersAndPlaques(): void {
    const bannerZ = [5, 11, 17, 23, 29];
    const bannerGeom = new THREE.PlaneGeometry(1.2, 2.6);

    bannerZ.forEach((bz, idx) => {
      const bannerMat = idx % 2 === 0
        ? this.atlas.materials.heraldicLionBanner
        : this.atlas.materials.heraldicCrossBanner;

      const rodGeom = new THREE.CylinderGeometry(0.025, 0.025, 1.4, 8);
      const endcapGeom = new THREE.SphereGeometry(0.045, 6, 6);

      [-1, 1].forEach((side) => {
        const bGroup = new THREE.Group();
        bGroup.position.set(side * 4.34, 3.4, bz);
        bGroup.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;

        const bannerMesh = new THREE.Mesh(bannerGeom, bannerMat);
        bannerMesh.position.set(0, -0.6, 0.02);

        const rod = new THREE.Mesh(rodGeom, this.atlas.materials.brassMetal);
        rod.rotation.z = Math.PI / 2;
        rod.position.set(0, 0.7, 0.04);

        const endcap1 = new THREE.Mesh(endcapGeom, this.atlas.materials.brassMetal);
        endcap1.position.set(-0.7, 0.7, 0.04);
        const endcap2 = new THREE.Mesh(endcapGeom, this.atlas.materials.brassMetal);
        endcap2.position.set(0.7, 0.7, 0.04);

        bGroup.add(bannerMesh, rod, endcap1, endcap2);
        this.ensureVisible(bGroup);
        this.container.add(bGroup);
      });
    });
  }

  /**
   * 11. Floor Clutter: Tome Piles & Storage Crates
   */
  private buildFloorClutterAndPiles(): void {
    const clutterLocations = [
      { x: -3.8, z: 6.8, seed: 801 },
      { x: 3.8, z: 12.8, seed: 802 },
      { x: -3.8, z: 24.8, seed: 803 },
      { x: 3.8, z: 30.8, seed: 804 }
    ];

    clutterLocations.forEach((loc) => {
      const pileGroup = new THREE.Group();
      pileGroup.position.set(loc.x, 0, loc.z);

      const stackCount = 3;
      for (let s = 0; s < stackCount; s++) {
        const bookData = LibraryLoreGenerator.generateBook(loc.seed + s * 53);
        const mats = BookSpineGenerator.getBookMaterials(bookData, true, 1);
        const bookMesh = new THREE.Mesh(
          new THREE.BoxGeometry(0.38, 0.07, 0.52),
          mats
        );
        bookMesh.position.set((s % 2) * 0.04, 0.035 + s * 0.07, (s % 3) * 0.02);
        bookMesh.rotation.y = (s * 0.18);
        bookMesh.userData = { isBook: true, bookData, originalColor: bookData.coverColor };
        this.raycastableBooks.push(bookMesh);
        pileGroup.add(bookMesh);
      }

      this.ensureVisible(pileGroup);
      this.container.add(pileGroup);
    });

    this.cratePositions.forEach((cloc) => {
      const crateGroup = new THREE.Group();
      crateGroup.position.set(cloc.x, 0, cloc.z);

      const crateBody = new THREE.Mesh(
        new THREE.BoxGeometry(0.85, 0.75, 0.85),
        this.atlas.materials.woodPlanks
      );
      crateBody.position.set(0, 0.375, 0);
      crateBody.receiveShadow = true;

      const brassCornerGeom = new THREE.BoxGeometry(0.12, 0.12, 0.12);
      const corners = [
        [-0.42, 0.74, -0.42], [0.42, 0.74, -0.42],
        [-0.42, 0.74, 0.42], [0.42, 0.74, 0.42]
      ];
      corners.forEach(([cx, cy, cz]) => {
        const corner = new THREE.Mesh(brassCornerGeom, this.atlas.materials.brassMetal);
        corner.position.set(cx, cy, cz);
        crateGroup.add(corner);
      });

      const crateMap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 0.55, 8),
        this.atlas.materials.mapScroll
      );
      crateMap.position.set(0.1, 0.79, 0);
      crateMap.rotation.z = Math.PI / 2;
      crateMap.rotation.y = 0.3;

      crateGroup.add(crateBody, crateMap);
      this.ensureVisible(crateGroup);
      this.container.add(crateGroup);
    });
  }

  /**
   * 12. Gothic Arched Stained-Glass Window & Volumetric Light Rays
   */
  private buildStainedGlassAndVolumetricLightRays(): void {
    const windowGeom = new THREE.PlaneGeometry(5.2, 8.5);
    const stainedGlassMesh = new THREE.Mesh(windowGeom, this.atlas.materials.stainedGlassGothic);
    stainedGlassMesh.position.set(0, 7.5, 35.4);
    stainedGlassMesh.rotation.y = Math.PI;
    this.ensureVisible(stainedGlassMesh);
    this.container.add(stainedGlassMesh);

    const rayMat = new THREE.MeshBasicMaterial({
      color: 0xffeed6,
      transparent: true,
      opacity: 0.14,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const rayGeom = new THREE.PlaneGeometry(4.5, 24.0);

    const rayCenter = new THREE.Mesh(rayGeom, rayMat);
    rayCenter.position.set(0, 6.0, 22);
    rayCenter.rotation.set(-0.72, 0.0, 0.0);
    this.ensureVisible(rayCenter);

    const rayLeft = new THREE.Mesh(rayGeom, rayMat);
    rayLeft.position.set(-2.8, 6.0, 22);
    rayLeft.rotation.set(-0.72, -0.15, -0.1);
    this.ensureVisible(rayLeft);

    const rayRight = new THREE.Mesh(rayGeom, rayMat);
    rayRight.position.set(2.8, 6.0, 22);
    rayRight.rotation.set(-0.72, 0.15, 0.1);
    this.ensureVisible(rayRight);

    this.container.add(rayCenter, rayLeft, rayRight);
  }

  /**
   * 13. Floating Ambient Dust Particles
   */
  private buildFloatingDustParticles(): void {
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = 0.5 + Math.random() * 10.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 36 + 16;
    }

    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pMat = new THREE.PointsMaterial({
      color: 0xffe8b8,
      size: 0.035,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.dustParticles = new THREE.Points(pGeom, pMat);
    this.container.add(this.dustParticles);
  }

  /**
   * Accurate Elevation calculation for ground floor, stairs, and upper balcony
   */
  public getElevation(x: number, z: number, currentY: number = 0): number {
    const onLeftStairX = x >= -6.1 && x <= -3.8;
    const onRightStairX = x >= 3.8 && x <= 6.1;

    // 1. Symmetrical Grand Staircases (Left and Right, from Z = -2.8 to 3.5)
    if ((onLeftStairX || onRightStairX) && z >= -2.8 && z <= 3.5) {
      const progress = (z - (-2.8)) / (3.5 - (-2.8));
      return Math.max(0, Math.min(4.5, progress * 4.5));
    }

    // 2. Upper Balcony Walkways (only when player is elevated on the 2nd level)
    if (currentY >= 2.5) {
      if (z >= 3.5 && z <= 34.5 && (onLeftStairX || onRightStairX)) {
        return 4.5;
      }
    }

    // 3. Ground Floor (everywhere under balcony and in the main nave)
    return 0.0;
  }

  /**
   * Accurate Collision Detection (No phantom walls, only real physical geometry)
   */
  public isBlocked(x: number, z: number, y: number = 0): boolean {
    // Outer perimeter boundaries
    if (x <= -6.1 || x >= 6.1 || z <= -3.2 || z >= 34.8) {
      return true;
    }

    // Upper Balcony Rules (Y >= 2.5)
    if (y >= 2.5) {
      // If on the upper floor, cannot walk into the open void over the nave (must stay on balcony or stairs)
      if (z >= 3.5 && z <= 34.5) {
        if (x > -4.6 && x < 4.6) {
          return true; // Balustrade railing over the nave
        }
      }
      // Upper bookshelves
      if (x < -6.1 || x > 6.1) {
        return true;
      }
      return false;
    }

    // Ground Floor Rules (Y < 2.5)
    // 1. Freestanding Nave Pillar Plinths (pz = 6, 12, 18, 24, 30; pz = 0 is integrated into stair base)
    const pillarZ = [6, 12, 18, 24, 30];
    for (const pz of pillarZ) {
      if (Math.abs(z - pz) < 0.65) {
        if (Math.abs(x - (-4.3)) < 0.65 || Math.abs(x - 4.3) < 0.65) {
          return true;
        }
      }
    }

    // 2. Celestial Globe Pedestal (Center room at Z = 14)
    const dxGlobe = x - 0;
    const dzGlobe = z - 14;
    if (dxGlobe * dxGlobe + dzGlobe * dzGlobe < 1.15 * 1.15) {
      return true;
    }

    // 3. Desks (Only the real desks that are placed)
    for (const desk of this.deskPositions) {
      if (Math.abs(x - desk.x) < 0.95 && Math.abs(z - desk.z) < 0.65) {
        return true;
      }
    }

    // 4. Storage Crates (Now placed at North corners, completely clear of stairs)
    for (const crate of this.cratePositions) {
      if (Math.abs(x - crate.x) < 0.55 && Math.abs(z - crate.z) < 0.55) {
        return true;
      }
    }

    // 5. Lower Bookshelf Depth at outer walls
    if ((x < -6.1 || x > 6.1) && z >= -1.5 && z <= 34.0) {
      return true;
    }

    return false;
  }

  public update(elapsedTime: number): void {
    if (this.globeSphereMesh) {
      this.globeSphereMesh.rotation.y = elapsedTime * 0.25;
    }

    this.animatedLights.forEach((item) => {
      const flicker = Math.sin(elapsedTime * item.flickerSpeed + item.flickerPhase) * 0.35 +
                      Math.cos(elapsedTime * 9.0 + item.flickerPhase) * 0.15;
      item.light.intensity = Math.max(0.8, item.baseIntensity + flicker);
    });

    if (this.dustParticles) {
      const posAttr = this.dustParticles.geometry.attributes.position as THREE.BufferAttribute;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        let py = posAttr.getY(i) - 0.002;
        if (py < 0.5) py = 11.0;
        posAttr.setY(i, py);

        const px = posAttr.getX(i) + Math.sin(elapsedTime * 0.4 + i) * 0.0015;
        posAttr.setX(i, px);
      }
      posAttr.needsUpdate = true;
    }
  }

  public reseed(seed: number): void {
    LibraryLoreGenerator.sessionSeed = seed;
    this.container.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
      }
    });
    this.container.clear();
    this.raycastableBooks = [];
    this.animatedLights = [];

    this.buildCathedralArchitecture();
    this.buildGothicRibbedVaultArches();
    this.buildModularBookshelfWallsAndInstancedBooks();
    this.buildRollingLadders();
    this.buildUpperBalconiesAndStairs();
    this.buildStudyDesksAndBenches();
    this.buildCelestialGlobe();
    this.buildGrandChandeliers();
    this.buildWallCandleSconces();
    this.buildHeraldicBannersAndPlaques();
    this.buildFloorClutterAndPiles();
    this.buildStainedGlassAndVolumetricLightRays();
    this.buildFloatingDustParticles();
  }
}
