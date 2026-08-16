import * as THREE from 'three';
import { TextureAtlas } from './TextureAtlas';
import { LibraryLoreGenerator, BookData } from '../lore/LibraryLoreGenerator';
import { BookSpineGenerator } from './BookSpineGenerator';

export interface ChandelierInfo {
  group: THREE.Group;
  light: THREE.PointLight;
  baseIntensity: number;
  flickerSpeed: number;
  flickerPhase: number;
}

export interface CandleSconceInfo {
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

  // Visual & Lighting Elements
  public chandeliers: ChandelierInfo[] = [];
  public candleSconces: CandleSconceInfo[] = [];
  public globeSphereMesh?: THREE.Mesh;
  public dustParticles?: THREE.Points;

  // Raycastable interactive book targets (InstancedMeshes + desk meshes)
  public raycastableBooks: THREE.Object3D[] = [];

  // Dimensions
  public width = 14; // X: -7 to +7
  public length = 40; // Z: -4 to +36
  public ceilingHeight = 13.0;

  // Shared Unit Box Geometry for all instanced books
  private unitBoxGeom: THREE.BoxGeometry;

  constructor(scene: THREE.Scene, atlas: TextureAtlas) {
    this.scene = scene;
    this.atlas = atlas;
    this.container = new THREE.Group();
    this.container.name = 'GrandCathedralLibrary';
    this.scene.add(this.container);

    this.unitBoxGeom = new THREE.BoxGeometry(1, 1, 1);

    this.buildCathedralArchitecture();
    this.buildModularBookshelfWallsAndInstancedBooks();
    this.buildRollingLadders();
    this.buildUpperBalconiesAndStairs();
    this.buildStudyDesksAndBenches();
    this.buildCelestialGlobe();
    this.buildGrandChandeliers();
    this.buildWallCandleSconces();
    this.buildHeraldicBannersAndPlaques();
    this.buildStainedGlassAndVolumetricLightRays();
    this.buildFloatingDustParticles();

    // Ensure all static matrices and child transforms are fully computed
    this.container.updateMatrixWorld(true);
  }

  public setVisible(visible: boolean): void {
    this.container.visible = visible;
  }

  /**
   * Helper to finalize static meshes: ensures visibility and prevents false frustum culling
   */
  private freezeStatic(mesh: THREE.Object3D): void {
    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();
    mesh.frustumCulled = false; // Never cull cathedral geometry
  }

  /**
   * 1. Cathedral Floors, Vaulted Ribbed Ceiling & Stone Pillars
   */
  private buildCathedralArchitecture(): void {
    // 1. Polished Checkered Stone Tile Floor
    const floorGeom = new THREE.PlaneGeometry(this.width, this.length);
    const floorMesh = new THREE.Mesh(floorGeom, this.atlas.materials.stoneTileFloor);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.set(0, 0, 16);
    floorMesh.receiveShadow = true;
    this.freezeStatic(floorMesh);
    this.container.add(floorMesh);

    // 2. Central Plush Crimson Runner Carpet
    const carpetGeom = new THREE.PlaneGeometry(3.2, this.length - 2);
    const carpetMesh = new THREE.Mesh(carpetGeom, this.atlas.materials.carpetRed);
    carpetMesh.rotation.x = -Math.PI / 2;
    carpetMesh.position.set(0, 0.02, 16);
    carpetMesh.receiveShadow = true;
    this.freezeStatic(carpetMesh);
    this.container.add(carpetMesh);

    // 3. Vaulted Stone Ceiling
    const ceilGeom = new THREE.PlaneGeometry(this.width, this.length);
    const ceilMesh = new THREE.Mesh(ceilGeom, this.atlas.materials.stoneBrick);
    ceilMesh.rotation.x = Math.PI / 2;
    ceilMesh.position.set(0, this.ceilingHeight, 16);
    this.freezeStatic(ceilMesh);
    this.container.add(ceilMesh);

    // 4. Perimeter Stone Walls (North apse wall & South entrance wall)
    const endWallGeom = new THREE.BoxGeometry(this.width, this.ceilingHeight, 1.0);
    const northWall = new THREE.Mesh(endWallGeom, this.atlas.materials.stoneBrick);
    northWall.position.set(0, this.ceilingHeight / 2, 36);
    northWall.castShadow = true;
    northWall.receiveShadow = true;
    this.freezeStatic(northWall);

    const southWall = new THREE.Mesh(endWallGeom, this.atlas.materials.stoneBrick);
    southWall.position.set(0, this.ceilingHeight / 2, -4);
    southWall.castShadow = true;
    southWall.receiveShadow = true;
    this.freezeStatic(southWall);

    this.container.add(northWall, southWall);

    // 5. Massive Fluted Stone Pillars Along the Nave
    const pillarZ = [0, 6, 12, 18, 24, 30];
    const pillarHeight = this.ceilingHeight;
    const pillarGeom = new THREE.CylinderGeometry(0.55, 0.65, pillarHeight, 12);
    const capGeom = new THREE.BoxGeometry(1.4, 0.6, 1.4);

    pillarZ.forEach((pz) => {
      // Left aisle pillar
      const leftPillar = new THREE.Mesh(pillarGeom, this.atlas.materials.carvedStonePillar);
      leftPillar.position.set(-4.3, pillarHeight / 2, pz);
      leftPillar.castShadow = true;
      leftPillar.receiveShadow = true;
      this.freezeStatic(leftPillar);

      // Right aisle pillar
      const rightPillar = new THREE.Mesh(pillarGeom, this.atlas.materials.carvedStonePillar);
      rightPillar.position.set(4.3, pillarHeight / 2, pz);
      rightPillar.castShadow = true;
      rightPillar.receiveShadow = true;
      this.freezeStatic(rightPillar);

      // Top capital blocks
      const leftCap = new THREE.Mesh(capGeom, this.atlas.materials.stoneBrick);
      leftCap.position.set(-4.3, pillarHeight - 0.3, pz);
      this.freezeStatic(leftCap);

      const rightCap = new THREE.Mesh(capGeom, this.atlas.materials.stoneBrick);
      rightCap.position.set(4.3, pillarHeight - 0.3, pz);
      this.freezeStatic(rightCap);

      this.container.add(leftPillar, rightPillar, leftCap, rightCap);
    });
  }

  /**
   * 2. Modular Multi-Tier Bookshelf Bays & Instanced Book Batching
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
    const shelfDepth = 0.65;

    const pendingBooks: PendingBookInstance[] = [];

    // Build Left (X = -6.5) and Right (X = 6.5) Modular Bookshelves
    [-1, 1].forEach((side) => {
      const shelfX = side * 6.5;

      for (let bay = 0; bay < numBays; bay++) {
        const bayZ = -1.5 + bay * bayLength;

        // 1. Backing Wall Panel for this bay
        const backGeom = new THREE.BoxGeometry(0.12, 4.4, bayLength - 0.2);
        const backMesh = new THREE.Mesh(backGeom, this.atlas.materials.darkOak);
        backMesh.position.set(shelfX + side * 0.28, 2.2, bayZ + bayLength / 2);
        backMesh.castShadow = true;
        backMesh.receiveShadow = true;
        this.freezeStatic(backMesh);
        this.container.add(backMesh);

        // 2. Upright Timber Framing Columns for the bay
        const colGeom = new THREE.BoxGeometry(0.35, 4.5, 0.35);
        const col1 = new THREE.Mesh(colGeom, this.atlas.materials.darkOak);
        col1.position.set(shelfX, 2.25, bayZ);
        col1.castShadow = true;
        this.freezeStatic(col1);

        const col2 = new THREE.Mesh(colGeom, this.atlas.materials.darkOak);
        col2.position.set(shelfX, 2.25, bayZ + bayLength);
        col2.castShadow = true;
        this.freezeStatic(col2);
        this.container.add(col1, col2);

        // 3. Ornate Carved Cornice Header with Latin Plaque
        const headerGeom = new THREE.BoxGeometry(0.4, 0.45, bayLength);
        const headerMesh = new THREE.Mesh(headerGeom, this.atlas.materials.darkOak);
        headerMesh.position.set(shelfX, 4.35, bayZ + bayLength / 2);
        this.freezeStatic(headerMesh);
        this.container.add(headerMesh);

        // Category Plaque
        const plaqueMat = bayPlaques[bay % bayPlaques.length];
        const plaqueGeom = new THREE.PlaneGeometry(1.8, 0.45);
        const plaqueMesh = new THREE.Mesh(plaqueGeom, plaqueMat);
        plaqueMesh.position.set(shelfX - side * 0.22, 4.35, bayZ + bayLength / 2);
        plaqueMesh.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
        this.freezeStatic(plaqueMesh);
        this.container.add(plaqueMesh);

        // 4. Horizontal Shelf Ledges & Continuous Book Matrix Computation
        shelfRowsY.forEach((shelfY, rowIdx) => {
          const ledgeGeom = new THREE.BoxGeometry(shelfDepth, 0.08, bayLength - 0.15);
          const ledgeMesh = new THREE.Mesh(ledgeGeom, this.atlas.materials.darkOak);
          ledgeMesh.position.set(shelfX, shelfY, bayZ + bayLength / 2);
          ledgeMesh.castShadow = true;
          ledgeMesh.receiveShadow = true;
          this.freezeStatic(ledgeMesh);
          this.container.add(ledgeMesh);

          // Continuous dense packing from bay start to end with zero large gaps
          const startZ = bayZ + 0.22;
          const endZ = bayZ + bayLength - 0.22;
          let currentZ = startZ;
          let bookIndexInRow = 0;

          while (currentZ < endZ) {
            const seed = (side + 2) * 100000 + bay * 10000 + rowIdx * 1000 + bookIndexInRow * 19;
            const prng = LibraryLoreGenerator.createPrng(seed);

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
                const bookSeed = seed + s * 37;
                const bookData = LibraryLoreGenerator.generateBook(bookSeed);

                const bY = shelfY + 0.04 + s * bookThick + bookThick / 2;
                const mat4 = new THREE.Matrix4();
                const pos = new THREE.Vector3(shelfX - side * 0.06, bY, stackZ);
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

              const bookData = LibraryLoreGenerator.generateBook(seed);

              const mat4 = new THREE.Matrix4();
              const pos = new THREE.Vector3(shelfX - side * 0.06, bY, bZ);
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

    // Build Batched Instanced Meshes
    this.createInstancedBookMeshes(pendingBooks);
  }

  /**
   * Batches book instances into high-performance THREE.InstancedMesh objects grouped by material
   */
  private createInstancedBookMeshes(pendingList: PendingBookInstance[]): void {
    const groups: Map<string, { materials: THREE.Material[]; instances: PendingBookInstance[] }> = new Map();

    for (const item of pendingList) {
      const key = `${item.side}_${item.isHorizontal ? 'H' : 'V'}_${item.bookData.coverColor}`;
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
      instMesh.castShadow = true;
      instMesh.receiveShadow = true;
      instMesh.frustumCulled = false; // Always render instanced library books

      this.raycastableBooks.push(instMesh);
      this.container.add(instMesh);
    });
  }

  /**
   * 3. Movable / Leaning Wooden Rolling Ladders
   */
  private buildRollingLadders(): void {
    const ladderPositions = [
      { side: -1, z: 6.5, height: 4.4 },
      { side: 1, z: 22.5, height: 4.4 }
    ];

    ladderPositions.forEach(({ side, z, height }) => {
      const ladderGroup = new THREE.Group();
      const ladderWidth = 0.65;
      const leanAngle = 0.24;

      // Rails
      const railGeom = new THREE.BoxGeometry(0.06, height, 0.1);
      const leftRail = new THREE.Mesh(railGeom, this.atlas.materials.darkOak);
      leftRail.position.set(0, height / 2, -ladderWidth / 2);
      leftRail.castShadow = true;

      const rightRail = new THREE.Mesh(railGeom, this.atlas.materials.darkOak);
      rightRail.position.set(0, height / 2, ladderWidth / 2);
      rightRail.castShadow = true;
      ladderGroup.add(leftRail, rightRail);

      // Rungs
      const numRungs = 11;
      const rungGeom = new THREE.CylinderGeometry(0.025, 0.025, ladderWidth, 6);
      for (let r = 1; r < numRungs; r++) {
        const ry = (r / numRungs) * (height - 0.4);
        const rung = new THREE.Mesh(rungGeom, this.atlas.materials.woodPlanks);
        rung.position.set(0, ry, 0);
        rung.rotation.x = Math.PI / 2;
        rung.castShadow = true;
        ladderGroup.add(rung);
      }

      // Brass Rolling Wheels at Base
      const wheelGeom = new THREE.CylinderGeometry(0.06, 0.06, 0.04, 8);
      const wheelLeft = new THREE.Mesh(wheelGeom, this.atlas.materials.brassMetal);
      wheelLeft.position.set(0, 0.04, -ladderWidth / 2);
      wheelLeft.rotation.z = Math.PI / 2;

      const wheelRight = new THREE.Mesh(wheelGeom, this.atlas.materials.brassMetal);
      wheelRight.position.set(0, 0.04, ladderWidth / 2);
      wheelRight.rotation.z = Math.PI / 2;
      ladderGroup.add(wheelLeft, wheelRight);

      // Brass Guide Hooks at Top
      const hookGeom = new THREE.TorusGeometry(0.06, 0.02, 6, 12, Math.PI);
      const hookLeft = new THREE.Mesh(hookGeom, this.atlas.materials.brassMetal);
      hookLeft.position.set(-side * 0.05, height - 0.1, -ladderWidth / 2);
      ladderGroup.add(hookLeft);

      // Position ladder leaning against shelves
      const ladderX = side * (6.5 - 0.5);
      ladderGroup.position.set(ladderX, 0, z);
      ladderGroup.rotation.z = side * leanAngle;

      this.freezeStatic(ladderGroup);
      this.container.add(ladderGroup);
    });
  }

  /**
   * 4. Upper Balcony Mezzanines, Corbel Brackets & Instanced Balcony Books
   */
  private buildUpperBalconiesAndStairs(): void {
    const balconyY = 4.5;
    const balconyWidth = 2.4;
    const balconyLength = this.length - 2;

    // Balcony Floors (Wood Planks)
    const balcGeom = new THREE.BoxGeometry(balconyWidth, 0.25, balconyLength);

    const leftBalcony = new THREE.Mesh(balcGeom, this.atlas.materials.woodPlanks);
    leftBalcony.position.set(-5.6, balconyY, 16);
    leftBalcony.receiveShadow = true;
    this.freezeStatic(leftBalcony);

    const rightBalcony = new THREE.Mesh(balcGeom, this.atlas.materials.woodPlanks);
    rightBalcony.position.set(5.6, balconyY, 16);
    rightBalcony.receiveShadow = true;
    this.freezeStatic(rightBalcony);

    // Wooden Balustrade Railings overlooking the nave
    const railGeom = new THREE.BoxGeometry(0.12, 0.85, balconyLength);

    const leftRail = new THREE.Mesh(railGeom, this.atlas.materials.darkOak);
    leftRail.position.set(-4.4, balconyY + 0.55, 16);
    leftRail.castShadow = true;
    this.freezeStatic(leftRail);

    const rightRail = new THREE.Mesh(railGeom, this.atlas.materials.darkOak);
    rightRail.position.set(4.4, balconyY + 0.55, 16);
    rightRail.castShadow = true;
    this.freezeStatic(rightRail);

    // Carved Corbel Support Brackets under balconies
    const corbelZ = [0, 6, 12, 18, 24, 30];
    corbelZ.forEach((cz) => {
      const corbelGeom = new THREE.BoxGeometry(1.2, 0.8, 0.4);
      const leftCorbel = new THREE.Mesh(corbelGeom, this.atlas.materials.darkOak);
      leftCorbel.position.set(-4.9, balconyY - 0.4, cz);
      leftCorbel.castShadow = true;
      this.freezeStatic(leftCorbel);

      const rightCorbel = new THREE.Mesh(corbelGeom, this.atlas.materials.darkOak);
      rightCorbel.position.set(4.9, balconyY - 0.4, cz);
      rightCorbel.castShadow = true;
      this.freezeStatic(rightCorbel);

      this.container.add(leftCorbel, rightCorbel);
    });

    // Upper Tier Bookshelves Backing Wall
    const upperShelfHeight = 4.3;
    const upperShelfGeom = new THREE.BoxGeometry(0.7, upperShelfHeight, balconyLength);

    const leftUpperShelf = new THREE.Mesh(upperShelfGeom, this.atlas.materials.darkOak);
    leftUpperShelf.position.set(-6.6, balconyY + upperShelfHeight / 2 + 0.15, 16);
    leftUpperShelf.castShadow = true;
    this.freezeStatic(leftUpperShelf);

    const rightUpperShelf = new THREE.Mesh(upperShelfGeom, this.atlas.materials.darkOak);
    rightUpperShelf.position.set(6.6, balconyY + upperShelfHeight / 2 + 0.15, 16);
    rightUpperShelf.castShadow = true;
    this.freezeStatic(rightUpperShelf);

    this.container.add(leftBalcony, rightBalcony, leftRail, rightRail, leftUpperShelf, rightUpperShelf);

    // Upper Shelf Ledges & Instanced Books Batching
    const upperShelfRowsY = [5.3, 6.1, 6.9, 7.7];
    const upperPendingBooks: PendingBookInstance[] = [];

    [-1, 1].forEach((side) => {
      const shelfX = side * 6.5;

      upperShelfRowsY.forEach((shelfY, uRowIdx) => {
        const ledgeGeom = new THREE.BoxGeometry(0.65, 0.08, balconyLength);
        const ledgeMesh = new THREE.Mesh(ledgeGeom, this.atlas.materials.darkOak);
        ledgeMesh.position.set(shelfX, shelfY, 16);
        ledgeMesh.receiveShadow = true;
        this.freezeStatic(ledgeMesh);
        this.container.add(ledgeMesh);

        let currentZ = -0.8;
        const endZ = 32.8;
        let uBookIdx = 0;

        while (currentZ < endZ) {
          const seed = (side + 5) * 200000 + uRowIdx * 10000 + uBookIdx * 23;
          const prng = LibraryLoreGenerator.createPrng(seed);

          const remaining = endZ - currentZ;
          if (remaining < 0.07) break;

          const isStack = prng() < 0.12 && remaining >= 0.38;

          if (isStack) {
            const stackCount = 2 + Math.floor(prng() * 2);
            const stackWidth = 0.28 + prng() * 0.06;
            const stackDepth = 0.38 + prng() * 0.05;
            const bookThick = 0.08 + prng() * 0.02;
            const stackZ = currentZ + stackWidth / 2;

            for (let s = 0; s < stackCount; s++) {
              const bookSeed = seed + s * 41;
              const bookData = LibraryLoreGenerator.generateBook(bookSeed);

              const bY = shelfY + 0.04 + s * bookThick + bookThick / 2;
              const mat4 = new THREE.Matrix4();
              const pos = new THREE.Vector3(shelfX - side * 0.06, bY, stackZ);
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
            const bWidth = 0.08 + prng() * 0.06;
            const bHeight = 0.52 + prng() * 0.20;
            const bDepth = 0.38 + prng() * 0.06;
            const bZ = currentZ + bWidth / 2;
            const bY = shelfY + 0.04 + bHeight / 2;

            const bookData = LibraryLoreGenerator.generateBook(seed);

            const mat4 = new THREE.Matrix4();
            const pos = new THREE.Vector3(shelfX - side * 0.06, bY, bZ);
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

    // Access Staircases (At Z = 2 and Z = 24)
    this.buildStaircase(-4.8, 2, balconyY);
    this.buildStaircase(4.8, 24, balconyY);
  }

  private buildStaircase(startX: number, startZ: number, targetY: number): void {
    const numSteps = 12;
    const stepHeight = targetY / numSteps;
    const stepDepth = 0.35;
    const stepWidth = 1.4;

    for (let i = 0; i < numSteps; i++) {
      const sGeom = new THREE.BoxGeometry(stepWidth, stepHeight, stepDepth);
      const sMesh = new THREE.Mesh(sGeom, this.atlas.materials.woodPlanks);
      sMesh.position.set(startX, (i + 0.5) * stepHeight, startZ + i * stepDepth);
      sMesh.castShadow = true;
      sMesh.receiveShadow = true;
      this.freezeStatic(sMesh);
      this.container.add(sMesh);
    }
  }

  /**
   * 5. Study Desks with Open Manuscripts, Book Piles, Inkwells & Benches
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

    deskConfigs.forEach((cfg) => {
      const deskGroup = new THREE.Group();
      deskGroup.position.set(cfg.x, 0, cfg.z);

      // Desk tabletop
      const tableTop = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.12, 1.0),
        this.atlas.materials.darkOak
      );
      tableTop.position.set(0, 0.85, 0);
      tableTop.castShadow = true;
      tableTop.receiveShadow = true;
      deskGroup.add(tableTop);

      // 4 Carved Table legs
      const legGeom = new THREE.BoxGeometry(0.12, 0.85, 0.12);
      const legOffsets = [[-0.8, -0.4], [0.8, -0.4], [-0.8, 0.4], [0.8, 0.4]];
      legOffsets.forEach(([lx, lz]) => {
        const leg = new THREE.Mesh(legGeom, this.atlas.materials.darkOak);
        leg.position.set(lx, 0.425, lz);
        leg.castShadow = true;
        deskGroup.add(leg);
      });

      // Study Bench
      const benchSeat = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 0.45), this.atlas.materials.darkOak);
      benchSeat.position.set(0, 0.5, -0.75);
      benchSeat.castShadow = true;
      const benchLeg1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.35), this.atlas.materials.darkOak);
      benchLeg1.position.set(-0.6, 0.25, -0.75);
      const benchLeg2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 0.35), this.atlas.materials.darkOak);
      benchLeg2.position.set(0.6, 0.25, -0.75);
      deskGroup.add(benchSeat, benchLeg1, benchLeg2);

      // Brass Candleholder + Lit Candle
      const candleBase = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.04, 8), this.atlas.materials.brassMetal);
      candleBase.position.set(-0.65, 0.93, 0.25);
      const candleWax = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 0.22, 8),
        new THREE.MeshStandardMaterial({ color: 0xfffae6, roughness: 0.4 })
      );
      candleWax.position.set(-0.65, 1.06, 0.25);
      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.02, 0.06, 6),
        new THREE.MeshBasicMaterial({ color: 0xffaa22 })
      );
      flame.position.set(-0.65, 1.2, 0.25);
      deskGroup.add(candleBase, candleWax, flame);

      // Warm dynamic candlelight (High brightness & coverage)
      const candleLight = new THREE.PointLight(0xffc566, 4.2, 14.0, 1.1);
      candleLight.position.set(-0.65, 1.25, 0.25);
      candleLight.castShadow = true;
      candleLight.shadow.bias = -0.002;
      candleLight.shadow.mapSize.width = 256;
      candleLight.shadow.mapSize.height = 256;
      deskGroup.add(candleLight);

      this.candleSconces.push({
        light: candleLight,
        baseIntensity: 4.2,
        flickerSpeed: 4.0 + Math.random() * 3.0,
        flickerPhase: Math.random() * Math.PI * 2
      });

      // Interactive Open Manuscript Folio Block
      const openBookData = LibraryLoreGenerator.generateBook(cfg.seed, cfg.title);
      const openBookGeom = new THREE.BoxGeometry(0.55, 0.06, 0.38);
      const openBookMats = BookSpineGenerator.getBookMaterials(openBookData, true, 1);
      const openBookMesh = new THREE.Mesh(openBookGeom, openBookMats);
      openBookMesh.position.set(0, 0.94, 0);
      openBookMesh.rotation.y = (Math.random() - 0.5) * 0.2;
      openBookMesh.castShadow = true;

      // User data for raycasting
      openBookMesh.userData = {
        isBook: true,
        bookData: openBookData,
        originalColor: openBookData.coverColor
      };
      this.raycastableBooks.push(openBookMesh);
      deskGroup.add(openBookMesh);

      // Stacked piles of books on desk corner
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

      this.container.add(deskGroup);
    });
  }

  /**
   * 6. Large Illuminated Celestial Globe on Ornate Pedestal
   */
  private buildCelestialGlobe(): void {
    const globeGroup = new THREE.Group();
    globeGroup.position.set(0, 0, 14);

    // Octagonal Dark Oak Base Pedestal
    const baseGeom = new THREE.CylinderGeometry(1.0, 1.15, 0.6, 8);
    const baseMesh = new THREE.Mesh(baseGeom, this.atlas.materials.darkOak);
    baseMesh.position.set(0, 0.3, 0);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    this.freezeStatic(baseMesh);
    globeGroup.add(baseMesh);

    // Curved Brass Armillary Ring
    const ringGeom = new THREE.TorusGeometry(1.0, 0.07, 8, 24);
    const ringMesh = new THREE.Mesh(ringGeom, this.atlas.materials.brassMetal);
    ringMesh.position.set(0, 1.45, 0);
    ringMesh.rotation.y = Math.PI / 4;
    ringMesh.castShadow = true;
    globeGroup.add(ringMesh);

    // Rotating Celestial Sphere
    const sphereGeom = new THREE.SphereGeometry(0.82, 16, 16);
    this.globeSphereMesh = new THREE.Mesh(sphereGeom, this.atlas.materials.globeTexture);
    this.globeSphereMesh.position.set(0, 1.45, 0);
    this.globeSphereMesh.castShadow = true;
    globeGroup.add(this.globeSphereMesh);

    // Soft warm internal glow
    const globeLight = new THREE.PointLight(0xffeaad, 3.2, 12.0, 1.1);
    globeLight.position.set(0, 1.45, 0);
    globeGroup.add(globeLight);

    // Raycastable Book Data for the Celestial Globe
    const globeBookData = LibraryLoreGenerator.generateBook(99999, 'The Celestial Atlas of the Spheres');
    this.globeSphereMesh.userData = {
      isBook: true,
      bookData: globeBookData,
      originalColor: '#f7d583'
    };
    this.raycastableBooks.push(this.globeSphereMesh);

    this.container.add(globeGroup);
  }

  /**
   * 7. Grand Hanging Wrought-Iron Chandeliers with Glowing Candles
   */
  private buildGrandChandeliers(): void {
    const chandelierZ = [4, 16, 28];

    chandelierZ.forEach((cz, idx) => {
      const cGroup = new THREE.Group();
      cGroup.position.set(0, 8.0, cz);

      // Suspension Chain from ceiling Y=13 to Y=8
      const chainGeom = new THREE.CylinderGeometry(0.04, 0.04, 5.0, 6);
      const chainMesh = new THREE.Mesh(chainGeom, this.atlas.materials.iron);
      chainMesh.position.set(0, 2.5, 0);
      cGroup.add(chainMesh);

      // Main Outer Ring
      const outerRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.7, 0.08, 8, 20),
        this.atlas.materials.iron
      );
      outerRing.rotation.x = Math.PI / 2;
      cGroup.add(outerRing);

      // Inner Tier Iron Ring
      const innerRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.95, 0.06, 8, 16),
        this.atlas.materials.iron
      );
      innerRing.rotation.x = Math.PI / 2;
      innerRing.position.set(0, 0.45, 0);
      cGroup.add(innerRing);

      // 8 Glowing Candles on Outer Ring
      for (let c = 0; c < 8; c++) {
        const angle = (c / 8) * Math.PI * 2;
        const cx = Math.cos(angle) * 1.7;
        const czPos = Math.sin(angle) * 1.7;

        const candleMesh = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04, 0.04, 0.28, 6),
          new THREE.MeshStandardMaterial({ color: 0xfffae6, roughness: 0.4 })
        );
        candleMesh.position.set(cx, 0.14, czPos);
        cGroup.add(candleMesh);

        // Candle flame
        const flame = new THREE.Mesh(
          new THREE.ConeGeometry(0.03, 0.08, 6),
          new THREE.MeshBasicMaterial({ color: 0xffaa22 })
        );
        flame.position.set(cx, 0.32, czPos);
        cGroup.add(flame);
      }

      // Dynamic glowing point light at center of chandelier (Boosted intensity & range)
      const cLight = new THREE.PointLight(0xffb84d, 5.8, 26.0, 1.1);
      cLight.position.set(0, 0.3, 0);
      cLight.castShadow = true;
      cLight.shadow.bias = -0.003;
      cLight.shadow.mapSize.width = 512;
      cLight.shadow.mapSize.height = 512;
      cGroup.add(cLight);

      this.chandeliers.push({
        group: cGroup,
        light: cLight,
        baseIntensity: 5.8,
        flickerSpeed: 3.5 + idx * 0.8,
        flickerPhase: idx * 1.5
      });

      this.container.add(cGroup);
    });
  }

  /**
   * 8. Wall-Mounted Brass Candle Sconces Along Nave Pillars
   */
  private buildWallCandleSconces(): void {
    const sconceZ = [3, 9, 15, 21, 27, 33];

    sconceZ.forEach((sz, idx) => {
      [-1, 1].forEach((side) => {
        const sx = side * 4.3;
        const sy = 2.4;

        const sGroup = new THREE.Group();
        sGroup.position.set(sx - side * 0.45, sy, sz);

        // Brass Wall Bracket
        const bracketGeom = new THREE.BoxGeometry(0.2, 0.08, 0.08);
        const bracket = new THREE.Mesh(bracketGeom, this.atlas.materials.brassMetal);
        sGroup.add(bracket);

        // Candle Wax
        const waxGeom = new THREE.CylinderGeometry(0.035, 0.035, 0.25, 6);
        const wax = new THREE.Mesh(
          waxGeom,
          new THREE.MeshStandardMaterial({ color: 0xfffae6, roughness: 0.4 })
        );
        wax.position.set(-side * 0.1, 0.15, 0);
        sGroup.add(wax);

        // Flame
        const flame = new THREE.Mesh(
          new THREE.ConeGeometry(0.025, 0.06, 6),
          new THREE.MeshBasicMaterial({ color: 0xffaa22 })
        );
        flame.position.set(-side * 0.1, 0.3, 0);
        sGroup.add(flame);

        // Point Light (Boosted intensity & range)
        const sLight = new THREE.PointLight(0xffbe55, 3.6, 15.0, 1.1);
        sLight.position.set(-side * 0.1, 0.32, 0);
        sLight.castShadow = true;
        sLight.shadow.bias = -0.002;
        sLight.shadow.mapSize.width = 256;
        sLight.shadow.mapSize.height = 256;
        sGroup.add(sLight);

        this.candleSconces.push({
          light: sLight,
          baseIntensity: 3.6,
          flickerSpeed: 4.5 + idx * 0.6,
          flickerPhase: idx * 0.9 + side
        });

        this.container.add(sGroup);
      });
    });
  }

  /**
   * 9. Heraldic Banners Hanging Along Balcony Rails
   */
  private buildHeraldicBannersAndPlaques(): void {
    const bannerZ = [5, 11, 17, 23, 29];
    const bannerGeom = new THREE.PlaneGeometry(1.1, 2.4);

    bannerZ.forEach((bz, idx) => {
      const bannerMat = idx % 2 === 0
        ? this.atlas.materials.heraldicLionBanner
        : this.atlas.materials.heraldicCrossBanner;

      const leftBanner = new THREE.Mesh(bannerGeom, bannerMat);
      leftBanner.position.set(-4.34, 3.4, bz);
      leftBanner.rotation.y = Math.PI / 2;
      this.freezeStatic(leftBanner);

      const rightBanner = new THREE.Mesh(bannerGeom, bannerMat);
      rightBanner.position.set(4.34, 3.4, bz);
      rightBanner.rotation.y = -Math.PI / 2;
      this.freezeStatic(rightBanner);

      this.container.add(leftBanner, rightBanner);
    });
  }

  /**
   * 10. Gothic Arched Stained-Glass Windows & Radiant Volumetric Sunbeams
   */
  private buildStainedGlassAndVolumetricLightRays(): void {
    // 1. High Cathedral Apse Window on North Wall (Z = 35.4, Y = 7.5)
    const windowGeom = new THREE.PlaneGeometry(5.2, 8.5);
    const stainedGlassMesh = new THREE.Mesh(windowGeom, this.atlas.materials.stainedGlassGothic);
    stainedGlassMesh.position.set(0, 7.5, 35.4);
    stainedGlassMesh.rotation.y = Math.PI;
    this.freezeStatic(stainedGlassMesh);
    this.container.add(stainedGlassMesh);

    // 2. Radiant Golden Volumetric Dust Light Rays streaming down from the high window
    const rayMat = new THREE.MeshBasicMaterial({
      color: 0xffeed6,
      transparent: true,
      opacity: 0.32,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const rayGeom = new THREE.PlaneGeometry(4.5, 24.0);

    const rayCenter = new THREE.Mesh(rayGeom, rayMat);
    rayCenter.position.set(0, 6.0, 22);
    rayCenter.rotation.set(-0.72, 0.0, 0.0);
    this.freezeStatic(rayCenter);

    const rayLeft = new THREE.Mesh(rayGeom, rayMat);
    rayLeft.position.set(-2.8, 6.0, 22);
    rayLeft.rotation.set(-0.72, -0.15, -0.1);
    this.freezeStatic(rayLeft);

    const rayRight = new THREE.Mesh(rayGeom, rayMat);
    rayRight.position.set(2.8, 6.0, 22);
    rayRight.rotation.set(-0.72, 0.15, 0.1);
    this.freezeStatic(rayRight);

    const rayCross = new THREE.Mesh(rayGeom, rayMat);
    rayCross.position.set(0, 6.0, 22);
    rayCross.rotation.set(-0.72, 0, Math.PI / 2);
    this.freezeStatic(rayCross);

    this.container.add(rayCenter, rayLeft, rayRight, rayCross);
  }

  /**
   * 11. Floating Dust Particles (Catching the sunlight rays)
   */
  private buildFloatingDustParticles(): void {
    const particleCount = 320;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = 0.5 + Math.random() * 10.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 36 + 16;
    }

    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pMat = new THREE.PointsMaterial({
      color: 0xfff0cc,
      size: 0.14,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.dustParticles = new THREE.Points(pGeom, pMat);
    this.container.add(this.dustParticles);
  }

  /**
   * Elevation Heightfield Query
   */
  public getElevation(x: number, z: number, currentY: number = 0): number {
    // 1. Check Staircases
    if (Math.abs(x - (-4.8)) < 0.85 && z >= 2.0 && z <= 6.2) {
      const progress = (z - 2.0) / (6.2 - 2.0);
      return Math.max(0, Math.min(4.5, progress * 4.5));
    }
    if (Math.abs(x - 4.8) < 0.85 && z >= 24.0 && z <= 28.2) {
      const progress = (z - 24.0) / (28.2 - 24.0);
      return Math.max(0, Math.min(4.5, progress * 4.5));
    }

    // 2. Upper Balcony
    if (currentY >= 3.0) {
      if ((x <= -4.4 || x >= 4.4) && z >= -3 && z <= 35) {
        return 4.5;
      }
    }

    // Ground floor
    return 0.0;
  }

  /**
   * Solid Collision Check
   */
  public isBlocked(x: number, z: number, y: number = 0): boolean {
    if (x <= -6.2 || x >= 6.2 || z <= -3.2 || z >= 35.2) {
      return true;
    }

    if (y < 3.0) {
      const pillarZ = [0, 6, 12, 18, 24, 30];
      for (const pz of pillarZ) {
        if (Math.abs(z - pz) < 0.65 && (Math.abs(x - (-4.3)) < 0.65 || Math.abs(x - 4.3) < 0.65)) {
          return true;
        }
      }

      const dxGlobe = x - 0;
      const dzGlobe = z - 14;
      if (dxGlobe * dxGlobe + dzGlobe * dzGlobe < 1.1 * 1.1) {
        return true;
      }

      const deskZ = [4, 8, 12, 18, 24, 30];
      for (const dz of deskZ) {
        if (Math.abs(z - dz) < 0.75 && (Math.abs(x - (-2.3)) < 1.1 || Math.abs(x - 2.3) < 1.1)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Tick update: Animate chandeliers, sconces, globe rotation, and dust motes
   */
  public update(elapsedTime: number): void {
    if (this.globeSphereMesh) {
      this.globeSphereMesh.rotation.y = elapsedTime * 0.25;
    }

    this.chandeliers.forEach((ch) => {
      const flicker = Math.sin(elapsedTime * ch.flickerSpeed + ch.flickerPhase) * 0.35 +
                      Math.cos(elapsedTime * 8.0) * 0.15;
      ch.light.intensity = Math.max(3.5, ch.baseIntensity + flicker);
    });

    this.candleSconces.forEach((cs) => {
      const flicker = Math.sin(elapsedTime * cs.flickerSpeed + cs.flickerPhase) * 0.25 +
                      Math.sin(elapsedTime * 11.0) * 0.1;
      cs.light.intensity = Math.max(2.2, cs.baseIntensity + flicker);
    });

    if (this.dustParticles) {
      const posAttr = this.dustParticles.geometry.attributes.position as THREE.BufferAttribute;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        let py = posAttr.getY(i) - 0.003;
        if (py < 0.5) py = 11.0;
        posAttr.setY(i, py);

        const px = posAttr.getX(i) + Math.sin(elapsedTime * 0.5 + i) * 0.002;
        posAttr.setX(i, px);
      }
      posAttr.needsUpdate = true;
    }
  }
}
