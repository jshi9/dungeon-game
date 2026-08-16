import * as THREE from 'three';
import { TextureAtlas } from './TextureAtlas';
import { LibraryLoreGenerator } from '../lore/LibraryLoreGenerator';

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

export class LibraryManager {
  public scene: THREE.Scene;
  public atlas: TextureAtlas;
  public container: THREE.Group;

  // Visual & Lighting Elements
  public chandeliers: ChandelierInfo[] = [];
  public candleSconces: CandleSconceInfo[] = [];
  public globeSphereMesh?: THREE.Mesh;
  public dustParticles?: THREE.Points;

  // Raycastable interactive books (every single book on shelves and desks)
  public raycastableBooks: THREE.Mesh[] = [];

  // Dimensions
  public width = 14; // X: -7 to +7
  public length = 40; // Z: -4 to +36
  public ceilingHeight = 13.0;

  constructor(scene: THREE.Scene, atlas: TextureAtlas) {
    this.scene = scene;
    this.atlas = atlas;
    this.container = new THREE.Group();
    this.container.name = 'GrandCathedralLibrary';
    this.scene.add(this.container);

    this.buildCathedralArchitecture();
    this.buildModularBookshelfWalls();
    this.buildRollingLadders();
    this.buildUpperBalconiesAndStairs();
    this.buildStudyDesksAndBenches();
    this.buildCelestialGlobe();
    this.buildGrandChandeliers();
    this.buildWallCandleSconces();
    this.buildHeraldicBannersAndPlaques();
    this.buildStainedGlassAndVolumetricLightRays();
    this.buildFloatingDustParticles();
  }

  public setVisible(visible: boolean): void {
    this.container.visible = visible;
  }

  private getBookMaterial(colorHex: string): THREE.MeshStandardMaterial {
    return this.atlas.createBookMaterial(colorHex);
  }

  /**
   * 1. Cathedral Floors, Vaulted Ribbed Ceiling & Stone Pillars
   */
  private buildCathedralArchitecture(): void {
    // 1. Polished Checkered Stone Tile Floor
    const floorGeom = new THREE.PlaneGeometry(this.width, this.length, 14, 40);
    const floorMesh = new THREE.Mesh(floorGeom, this.atlas.materials.stoneTileFloor);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.set(0, 0, 16);
    floorMesh.receiveShadow = true;
    this.container.add(floorMesh);

    // 2. Central Plush Crimson Runner Carpet (Elevated 0.02)
    const carpetGeom = new THREE.PlaneGeometry(3.2, this.length - 2);
    const carpetMesh = new THREE.Mesh(carpetGeom, this.atlas.materials.carpetRed);
    carpetMesh.rotation.x = -Math.PI / 2;
    carpetMesh.position.set(0, 0.02, 16);
    carpetMesh.receiveShadow = true;
    this.container.add(carpetMesh);

    // 3. Vaulted Stone Ceiling
    const ceilGeom = new THREE.PlaneGeometry(this.width, this.length);
    const ceilMesh = new THREE.Mesh(ceilGeom, this.atlas.materials.stoneBrick);
    ceilMesh.rotation.x = Math.PI / 2;
    ceilMesh.position.set(0, this.ceilingHeight, 16);
    this.container.add(ceilMesh);

    // 4. Perimeter Stone Walls (North apse wall & South entrance wall)
    const endWallGeom = new THREE.BoxGeometry(this.width, this.ceilingHeight, 1.0);
    const northWall = new THREE.Mesh(endWallGeom, this.atlas.materials.stoneBrick);
    northWall.position.set(0, this.ceilingHeight / 2, 36);
    northWall.castShadow = true;
    northWall.receiveShadow = true;

    const southWall = new THREE.Mesh(endWallGeom, this.atlas.materials.stoneBrick);
    southWall.position.set(0, this.ceilingHeight / 2, -4);
    southWall.castShadow = true;
    southWall.receiveShadow = true;

    this.container.add(northWall, southWall);

    // 5. Massive Fluted Stone Pillars Along the Nave
    const pillarZ = [0, 6, 12, 18, 24, 30];
    const pillarHeight = this.ceilingHeight;
    const pillarGeom = new THREE.CylinderGeometry(0.55, 0.65, pillarHeight, 12);

    pillarZ.forEach((pz) => {
      // Left aisle pillar
      const leftPillar = new THREE.Mesh(pillarGeom, this.atlas.materials.carvedStonePillar);
      leftPillar.position.set(-4.3, pillarHeight / 2, pz);
      leftPillar.castShadow = true;
      leftPillar.receiveShadow = true;

      // Right aisle pillar
      const rightPillar = new THREE.Mesh(pillarGeom, this.atlas.materials.carvedStonePillar);
      rightPillar.position.set(4.3, pillarHeight / 2, pz);
      rightPillar.castShadow = true;
      rightPillar.receiveShadow = true;

      // Top capital blocks
      const capGeom = new THREE.BoxGeometry(1.4, 0.6, 1.4);
      const leftCap = new THREE.Mesh(capGeom, this.atlas.materials.stoneBrick);
      leftCap.position.set(-4.3, pillarHeight - 0.3, pz);

      const rightCap = new THREE.Mesh(capGeom, this.atlas.materials.stoneBrick);
      rightCap.position.set(4.3, pillarHeight - 0.3, pz);

      this.container.add(leftPillar, rightPillar, leftCap, rightCap);
    });
  }

  /**
   * 2. Modular Multi-Tier Bookshelf Bays with Latin Plaques & Densely Packed Books
   */
  private buildModularBookshelfWalls(): void {
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
        this.container.add(backMesh);

        // 2. Upright Timber Framing Columns for the bay
        const colGeom = new THREE.BoxGeometry(0.35, 4.5, 0.35);
        const col1 = new THREE.Mesh(colGeom, this.atlas.materials.darkOak);
        col1.position.set(shelfX, 2.25, bayZ);
        col1.castShadow = true;

        const col2 = new THREE.Mesh(colGeom, this.atlas.materials.darkOak);
        col2.position.set(shelfX, 2.25, bayZ + bayLength);
        col2.castShadow = true;
        this.container.add(col1, col2);

        // 3. Ornate Carved Cornice Header with Latin Plaque
        const headerGeom = new THREE.BoxGeometry(0.4, 0.45, bayLength);
        const headerMesh = new THREE.Mesh(headerGeom, this.atlas.materials.darkOak);
        headerMesh.position.set(shelfX, 4.35, bayZ + bayLength / 2);
        this.container.add(headerMesh);

        // Category Plaque
        const plaqueMat = bayPlaques[bay % bayPlaques.length];
        const plaqueGeom = new THREE.PlaneGeometry(1.8, 0.45);
        const plaqueMesh = new THREE.Mesh(plaqueGeom, plaqueMat);
        plaqueMesh.position.set(shelfX - side * 0.22, 4.35, bayZ + bayLength / 2);
        plaqueMesh.rotation.y = side === -1 ? Math.PI / 2 : -Math.PI / 2;
        this.container.add(plaqueMesh);

        // 4. Horizontal Shelf Ledges & Densely Packed Individual Voxel Books
        shelfRowsY.forEach((shelfY, rowIdx) => {
          const ledgeGeom = new THREE.BoxGeometry(shelfDepth, 0.08, bayLength - 0.15);
          const ledgeMesh = new THREE.Mesh(ledgeGeom, this.atlas.materials.darkOak);
          ledgeMesh.position.set(shelfX, shelfY, bayZ + bayLength / 2);
          ledgeMesh.castShadow = true;
          ledgeMesh.receiveShadow = true;
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

            // 14% chance to spawn a horizontal stack of 2-3 books if there's enough space
            const isHorizontalStack = prng() < 0.14 && remainingSpace >= 0.38;

            if (isHorizontalStack) {
              const stackCount = 2 + Math.floor(prng() * 2); // 2 or 3 books stacked flat
              const stackWidth = 0.28 + prng() * 0.06;      // width along Z
              const stackDepth = 0.38 + prng() * 0.05;      // depth along X
              const bookThick = 0.08 + prng() * 0.02;       // thickness along Y
              const stackZ = currentZ + stackWidth / 2;

              for (let s = 0; s < stackCount; s++) {
                const bookSeed = seed + s * 37;
                const bookData = LibraryLoreGenerator.generateBook(bookSeed);
                const bookMat = this.getBookMaterial(bookData.coverColor);

                const bookGeom = new THREE.BoxGeometry(stackDepth, bookThick, stackWidth);
                const bookMesh = new THREE.Mesh(bookGeom, bookMat);
                const bY = shelfY + 0.04 + s * bookThick + bookThick / 2;
                bookMesh.position.set(shelfX - side * 0.06, bY, stackZ);

                // Slight twist for natural messy pile look
                bookMesh.rotation.y = (prng() - 0.5) * 0.08;
                bookMesh.castShadow = true;
                bookMesh.receiveShadow = true;

                bookMesh.userData = {
                  isBook: true,
                  bookData: bookData,
                  originalColor: bookData.coverColor
                };

                this.raycastableBooks.push(bookMesh);
                this.container.add(bookMesh);
              }

              currentZ += stackWidth + 0.015;
            } else {
              // Standard Vertical Standing Book
              const bWidth = 0.08 + prng() * 0.06;  // spine thickness along Z: 0.08 to 0.14
              const bHeight = 0.52 + prng() * 0.20; // height along Y: 0.52 to 0.72 (fills shelf height)
              const bDepth = 0.38 + prng() * 0.06;  // depth along X: 0.38 to 0.44
              const bZ = currentZ + bWidth / 2;
              const bY = shelfY + 0.04 + bHeight / 2;

              const bookData = LibraryLoreGenerator.generateBook(seed);
              const bookMat = this.getBookMaterial(bookData.coverColor);

              const bookGeom = new THREE.BoxGeometry(bDepth, bHeight, bWidth);
              const bookMesh = new THREE.Mesh(bookGeom, bookMat);
              bookMesh.position.set(shelfX - side * 0.06, bY, bZ);

              // Occasional natural tilt or lean against neighboring books
              if (prng() < 0.16) {
                bookMesh.rotation.x = (prng() - 0.5) * 0.08;
              }

              bookMesh.castShadow = true;
              bookMesh.receiveShadow = true;

              bookMesh.userData = {
                isBook: true,
                bookData: bookData,
                originalColor: bookData.coverColor
              };

              this.raycastableBooks.push(bookMesh);
              this.container.add(bookMesh);

              currentZ += bWidth + 0.004; // packed tightly side-by-side!
            }

            bookIndexInRow++;
          }
        });
      }
    });
  }

  /**
   * 3. Movable / Leaning Wooden Rolling Ladders (Matching Reference Image)
   */
  private buildRollingLadders(): void {
    const ladderPositions = [
      { side: -1, z: 6.5, height: 4.4 },
      { side: 1, z: 22.5, height: 4.4 }
    ];

    ladderPositions.forEach(({ side, z, height }) => {
      const ladderGroup = new THREE.Group();
      const ladderWidth = 0.65;
      const leanAngle = 0.24; // ~14 degrees lean

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

      this.container.add(ladderGroup);
    });
  }

  /**
   * 4. Upper Balcony Mezzanines, Corbel Brackets & Rare Grimoire Shelves
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

    const rightBalcony = new THREE.Mesh(balcGeom, this.atlas.materials.woodPlanks);
    rightBalcony.position.set(5.6, balconyY, 16);
    rightBalcony.receiveShadow = true;

    // Wooden Balustrade Railings overlooking the nave
    const railGeom = new THREE.BoxGeometry(0.12, 0.85, balconyLength);

    const leftRail = new THREE.Mesh(railGeom, this.atlas.materials.darkOak);
    leftRail.position.set(-4.4, balconyY + 0.55, 16);
    leftRail.castShadow = true;

    const rightRail = new THREE.Mesh(railGeom, this.atlas.materials.darkOak);
    rightRail.position.set(4.4, balconyY + 0.55, 16);
    rightRail.castShadow = true;

    // Carved Corbel Support Brackets under balconies
    const corbelZ = [0, 6, 12, 18, 24, 30];
    corbelZ.forEach((cz) => {
      const corbelGeom = new THREE.BoxGeometry(1.2, 0.8, 0.4);
      const leftCorbel = new THREE.Mesh(corbelGeom, this.atlas.materials.darkOak);
      leftCorbel.position.set(-4.9, balconyY - 0.4, cz);
      leftCorbel.castShadow = true;

      const rightCorbel = new THREE.Mesh(corbelGeom, this.atlas.materials.darkOak);
      rightCorbel.position.set(4.9, balconyY - 0.4, cz);
      rightCorbel.castShadow = true;

      this.container.add(leftCorbel, rightCorbel);
    });

    // Upper Tier Rare Grimoire Bookshelves (Y = 4.7 to 9.0) with interactive grimoires!
    const upperShelfHeight = 4.3;
    const upperShelfGeom = new THREE.BoxGeometry(0.7, upperShelfHeight, balconyLength);

    const leftUpperShelf = new THREE.Mesh(upperShelfGeom, this.atlas.materials.darkOak);
    leftUpperShelf.position.set(-6.6, balconyY + upperShelfHeight / 2 + 0.15, 16);
    leftUpperShelf.castShadow = true;

    const rightUpperShelf = new THREE.Mesh(upperShelfGeom, this.atlas.materials.darkOak);
    rightUpperShelf.position.set(6.6, balconyY + upperShelfHeight / 2 + 0.15, 16);
    rightUpperShelf.castShadow = true;

    this.container.add(leftBalcony, rightBalcony, leftRail, rightRail, leftUpperShelf, rightUpperShelf);

    // Upper Shelf Ledges & Densely Packed Rare Books
    const upperShelfRowsY = [5.3, 6.1, 6.9, 7.7];
    [-1, 1].forEach((side) => {
      const shelfX = side * 6.5;

      upperShelfRowsY.forEach((shelfY, uRowIdx) => {
        const ledgeGeom = new THREE.BoxGeometry(0.65, 0.08, balconyLength);
        const ledgeMesh = new THREE.Mesh(ledgeGeom, this.atlas.materials.darkOak);
        ledgeMesh.position.set(shelfX, shelfY, 16);
        ledgeMesh.receiveShadow = true;
        this.container.add(ledgeMesh);

        // Continuous dense book packing on upper balcony
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
              const bookMat = this.getBookMaterial(bookData.coverColor);

              const bookGeom = new THREE.BoxGeometry(stackDepth, bookThick, stackWidth);
              const bookMesh = new THREE.Mesh(bookGeom, bookMat);
              const bY = shelfY + 0.04 + s * bookThick + bookThick / 2;
              bookMesh.position.set(shelfX - side * 0.06, bY, stackZ);
              bookMesh.rotation.y = (prng() - 0.5) * 0.08;
              bookMesh.castShadow = true;
              bookMesh.receiveShadow = true;

              bookMesh.userData = {
                isBook: true,
                bookData: bookData,
                originalColor: bookData.coverColor
              };

              this.raycastableBooks.push(bookMesh);
              this.container.add(bookMesh);
            }
            currentZ += stackWidth + 0.015;
          } else {
            const bWidth = 0.08 + prng() * 0.06;
            const bHeight = 0.52 + prng() * 0.20;
            const bDepth = 0.38 + prng() * 0.06;
            const bZ = currentZ + bWidth / 2;
            const bY = shelfY + 0.04 + bHeight / 2;

            const bookData = LibraryLoreGenerator.generateBook(seed);
            const bookMat = this.getBookMaterial(bookData.coverColor);

            const bookGeom = new THREE.BoxGeometry(bDepth, bHeight, bWidth);
            const bookMesh = new THREE.Mesh(bookGeom, bookMat);
            bookMesh.position.set(shelfX - side * 0.06, bY, bZ);

            if (prng() < 0.16) {
              bookMesh.rotation.x = (prng() - 0.5) * 0.08;
            }

            bookMesh.castShadow = true;
            bookMesh.receiveShadow = true;

            bookMesh.userData = {
              isBook: true,
              bookData: bookData,
              originalColor: bookData.coverColor
            };

            this.raycastableBooks.push(bookMesh);
            this.container.add(bookMesh);

            currentZ += bWidth + 0.004;
          }
          uBookIdx++;
        }
      });
    });

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

      // Warm dynamic candlelight
      const candleLight = new THREE.PointLight(0xffbe55, 2.6, 10.0, 1.1);
      candleLight.position.set(-0.65, 1.25, 0.25);
      candleLight.castShadow = true;
      candleLight.shadow.bias = -0.002;
      candleLight.shadow.mapSize.width = 256;
      candleLight.shadow.mapSize.height = 256;
      deskGroup.add(candleLight);

      this.candleSconces.push({
        light: candleLight,
        baseIntensity: 2.6,
        flickerSpeed: 4.0 + Math.random() * 3.0,
        flickerPhase: Math.random() * Math.PI * 2
      });

      // Interactive Open Manuscript Folio Block
      const openBookData = LibraryLoreGenerator.generateBook(cfg.seed, cfg.title);
      const openBookGeom = new THREE.BoxGeometry(0.55, 0.06, 0.38);
      const openBookMat = new THREE.MeshStandardMaterial({ color: 0xecdcb6, roughness: 0.9 });
      const openBookMesh = new THREE.Mesh(openBookGeom, openBookMat);
      openBookMesh.position.set(0, 0.94, 0);
      openBookMesh.rotation.y = (Math.random() - 0.5) * 0.2;
      openBookMesh.castShadow = true;

      // User data for raycasting
      openBookMesh.userData = {
        isBook: true,
        bookData: openBookData,
        originalColor: '#ecdcb6'
      };
      this.raycastableBooks.push(openBookMesh);
      deskGroup.add(openBookMesh);

      // Stacked piles of books on desk corner (also interactive!)
      const stackBookData1 = LibraryLoreGenerator.generateBook(cfg.seed + 1000);
      const stackMesh1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 0.06, 0.38),
        this.getBookMaterial(stackBookData1.coverColor)
      );
      stackMesh1.position.set(0.6, 0.94, -0.2);
      stackMesh1.userData = { isBook: true, bookData: stackBookData1, originalColor: stackBookData1.coverColor };
      this.raycastableBooks.push(stackMesh1);

      const stackBookData2 = LibraryLoreGenerator.generateBook(cfg.seed + 2000);
      const stackMesh2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.26, 0.05, 0.35),
        this.getBookMaterial(stackBookData2.coverColor)
      );
      stackMesh2.position.set(0.6, 0.995, -0.2);
      stackMesh2.rotation.y = 0.18;
      stackMesh2.userData = { isBook: true, bookData: stackBookData2, originalColor: stackBookData2.coverColor };
      this.raycastableBooks.push(stackMesh2);

      deskGroup.add(stackMesh1, stackMesh2);

      // Inkwell & Quill
      const inkwell = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.05, 0.08, 8),
        this.atlas.materials.iron
      );
      inkwell.position.set(0.6, 0.95, 0.25);
      deskGroup.add(inkwell);

      this.container.add(deskGroup);
    });
  }

  /**
   * 6. Large Illuminated Celestial Globe on Carved Pedestal
   */
  private buildCelestialGlobe(): void {
    const globeGroup = new THREE.Group();
    globeGroup.position.set(0, 0, 14);

    // Carved Mahogany Octagonal Pedestal
    const baseGeom = new THREE.CylinderGeometry(0.85, 1.0, 0.4, 8);
    const baseMesh = new THREE.Mesh(baseGeom, this.atlas.materials.darkOak);
    baseMesh.position.set(0, 0.2, 0);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;

    const columnGeom = new THREE.CylinderGeometry(0.35, 0.45, 0.8, 8);
    const columnMesh = new THREE.Mesh(columnGeom, this.atlas.materials.darkOak);
    columnMesh.position.set(0, 0.8, 0);
    columnMesh.castShadow = true;

    // Brass Gimbal Ring (Axis Arm)
    const ringGeom = new THREE.TorusGeometry(0.85, 0.05, 8, 24);
    const ringMesh = new THREE.Mesh(ringGeom, this.atlas.materials.brassMetal);
    ringMesh.position.set(0, 1.65, 0);
    ringMesh.rotation.x = Math.PI / 4;

    // Celestial/Terrestrial Globe Sphere
    const sphereGeom = new THREE.SphereGeometry(0.75, 16, 16);
    this.globeSphereMesh = new THREE.Mesh(sphereGeom, this.atlas.materials.globeTexture);
    this.globeSphereMesh.position.set(0, 1.65, 0);
    this.globeSphereMesh.castShadow = true;

    // Register globe in raycastableBooks
    const globeLore = LibraryLoreGenerator.generateBook(999, 'Tome of the Celestial Spheres & Lost Continents');
    this.globeSphereMesh.userData = {
      isBook: true,
      bookData: globeLore,
      originalColor: '#224a73'
    };
    this.raycastableBooks.push(this.globeSphereMesh);

    // Inner warm illumination light
    const globeLight = new THREE.PointLight(0xffe082, 2.8, 12.0, 1.1);
    globeLight.position.set(0, 1.65, 0);

    globeGroup.add(baseMesh, columnMesh, ringMesh, this.globeSphereMesh, globeLight);
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

        const candleStem = new THREE.Mesh(
          new THREE.CylinderGeometry(0.03, 0.03, 0.25, 6),
          new THREE.MeshStandardMaterial({ color: 0xfff5d6, roughness: 0.3 })
        );
        candleStem.position.set(cx, 0.15, czPos);

        const candleFlame = new THREE.Mesh(
          new THREE.ConeGeometry(0.03, 0.09, 6),
          new THREE.MeshBasicMaterial({ color: 0xffb733 })
        );
        candleFlame.position.set(cx, 0.32, czPos);

        cGroup.add(candleStem, candleFlame);
      }

      // Dynamic warm chandelier point light
      const chLight = new THREE.PointLight(0xffbe55, 4.4, 26.0, 1.05);
      chLight.position.set(0, 0.5, 0);
      chLight.castShadow = true;
      chLight.shadow.bias = -0.002;
      chLight.shadow.mapSize.width = 512;
      chLight.shadow.mapSize.height = 512;
      cGroup.add(chLight);

      this.chandeliers.push({
        group: cGroup,
        light: chLight,
        baseIntensity: 4.4,
        flickerSpeed: 3.5 + idx * 0.8,
        flickerPhase: idx * 1.5
      });

      this.container.add(cGroup);
    });
  }

  /**
   * 8. Wall-Mounted Candle Sconces along Columns
   */
  private buildWallCandleSconces(): void {
    const sconceZ = [0, 6, 12, 18, 24, 30];

    sconceZ.forEach((sz, idx) => {
      [-1, 1].forEach((side) => {
        const sGroup = new THREE.Group();
        const sx = side * 3.8;
        sGroup.position.set(sx, 2.4, sz);

        // Brass Arm
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.04), this.atlas.materials.brassMetal);
        arm.position.set(-side * 0.15, 0, 0);
        sGroup.add(arm);

        // Wax & Flame
        const wax = new THREE.Mesh(
          new THREE.CylinderGeometry(0.025, 0.025, 0.18, 6),
          new THREE.MeshStandardMaterial({ color: 0xfffae6, roughness: 0.4 })
        );
        wax.position.set(-side * 0.28, 0.1, 0);

        const flame = new THREE.Mesh(
          new THREE.ConeGeometry(0.02, 0.06, 6),
          new THREE.MeshBasicMaterial({ color: 0xffa526 })
        );
        flame.position.set(-side * 0.28, 0.22, 0);
        sGroup.add(wax, flame);

        // Sconce Point Light
        const sLight = new THREE.PointLight(0xffbe55, 1.8, 8.0, 1.2);
        sLight.position.set(-side * 0.28, 0.25, 0);
        sGroup.add(sLight);

        this.candleSconces.push({
          light: sLight,
          baseIntensity: 1.8,
          flickerSpeed: 4.5 + idx * 0.6,
          flickerPhase: idx * 2.0 + (side === 1 ? 1.0 : 0)
        });

        this.container.add(sGroup);
      });
    });
  }

  /**
   * 9. Heraldic Banners & Stone Motto Plaques
   */
  private buildHeraldicBannersAndPlaques(): void {
    const bannerPositionsZ = [3, 9, 15, 21, 27, 33];

    bannerPositionsZ.forEach((bz, idx) => {
      const isLion = idx % 2 === 0;
      const mat = isLion ? this.atlas.materials.heraldicLionBanner : this.atlas.materials.heraldicCrossBanner;

      const bannerGeom = new THREE.PlaneGeometry(1.2, 2.4);

      // Left balcony banner
      const leftBanner = new THREE.Mesh(bannerGeom, mat);
      leftBanner.position.set(-4.35, 3.2, bz);
      leftBanner.rotation.y = Math.PI / 2;
      leftBanner.castShadow = true;

      // Right balcony banner
      const rightBanner = new THREE.Mesh(bannerGeom, mat);
      rightBanner.position.set(4.35, 3.2, bz);
      rightBanner.rotation.y = -Math.PI / 2;
      rightBanner.castShadow = true;

      this.container.add(leftBanner, rightBanner);
    });

    // Inscription Plaques on entrance pillars ("VERITAS")
    const plaqueGeom = new THREE.PlaneGeometry(0.8, 1.2);
    const leftPlaque = new THREE.Mesh(plaqueGeom, this.atlas.materials.inscriptionPlaque);
    leftPlaque.position.set(-3.85, 2.2, 0.45);
    leftPlaque.rotation.y = Math.PI;

    const rightPlaque = new THREE.Mesh(plaqueGeom, this.atlas.materials.inscriptionPlaque);
    rightPlaque.position.set(3.85, 2.2, 0.45);
    rightPlaque.rotation.y = Math.PI;

    this.container.add(leftPlaque, rightPlaque);
  }

  /**
   * 10. Tall Stained-Glass Lancet Windows & Volumetric Sunbeams
   */
  private buildStainedGlassAndVolumetricLightRays(): void {
    // Stained Glass Windows on North Apse Wall
    const windowGeom = new THREE.PlaneGeometry(2.5, 6.5);
    const centerWindow = new THREE.Mesh(windowGeom, this.atlas.materials.stainedGlassGothic);
    centerWindow.position.set(0, 8.0, 35.4);
    centerWindow.rotation.y = Math.PI;

    const leftWindow = new THREE.Mesh(windowGeom, this.atlas.materials.stainedGlassGothic);
    leftWindow.position.set(-3.6, 8.0, 35.4);
    leftWindow.rotation.y = Math.PI;

    const rightWindow = new THREE.Mesh(windowGeom, this.atlas.materials.stainedGlassGothic);
    rightWindow.position.set(3.6, 8.0, 35.4);
    rightWindow.rotation.y = Math.PI;

    this.container.add(centerWindow, leftWindow, rightWindow);

    // Volumetric Sunbeams / God Rays (Angled semi-transparent additive planes)
    const rayMat = new THREE.MeshBasicMaterial({
      color: 0xffecc4,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const rayGeom = new THREE.PlaneGeometry(3.8, 20.0);

    const ray1 = new THREE.Mesh(rayGeom, rayMat);
    ray1.position.set(0, 6.0, 24);
    ray1.rotation.set(-0.75, 0.15, 0.2);

    const ray2 = new THREE.Mesh(rayGeom, rayMat);
    ray2.position.set(-2.6, 6.0, 24);
    ray2.rotation.set(-0.75, -0.15, -0.2);

    const ray3 = new THREE.Mesh(rayGeom, rayMat);
    ray3.position.set(2.6, 6.0, 24);
    ray3.rotation.set(-0.75, 0.25, 0.1);

    this.container.add(ray1, ray2, ray3);
  }

  /**
   * 11. Floating Dust Particles (Catching the sunlight rays)
   */
  private buildFloatingDustParticles(): void {
    const particleCount = 280;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 12;      // X: -6 to +6
      positions[i * 3 + 1] = 0.5 + Math.random() * 10.5;      // Y: 0.5 to 11
      positions[i * 3 + 2] = (Math.random() - 0.5) * 36 + 16; // Z: -2 to 34
    }

    const pGeom = new THREE.BufferGeometry();
    pGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const pMat = new THREE.PointsMaterial({
      color: 0xffeab3,
      size: 0.12,
      transparent: true,
      opacity: 0.75,
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
    // Staircase 1: at X around -4.8, Z from 2.0 to 6.2 (rising from Y=0 to Y=4.5)
    if (Math.abs(x - (-4.8)) < 0.85 && z >= 2.0 && z <= 6.2) {
      const progress = (z - 2.0) / (6.2 - 2.0);
      return Math.max(0, Math.min(4.5, progress * 4.5));
    }
    // Staircase 2: at X around 4.8, Z from 24.0 to 28.2 (rising from Y=0 to Y=4.5)
    if (Math.abs(x - 4.8) < 0.85 && z >= 24.0 && z <= 28.2) {
      const progress = (z - 24.0) / (28.2 - 24.0);
      return Math.max(0, Math.min(4.5, progress * 4.5));
    }

    // 2. Upper Balcony (Only if player is already elevated Y >= 3.0, e.g. after climbing stairs)
    if (currentY >= 3.0) {
      if ((x <= -4.4 || x >= 4.4) && z >= -3 && z <= 35) {
        return 4.5;
      }
    }

    // Ground floor is Y = 0.0 everywhere else (allows walking under balconies and close to shelves)
    return 0.0;
  }

  /**
   * Solid Collision Check
   */
  public isBlocked(x: number, z: number, y: number = 0): boolean {
    // 1. Outer perimeter boundaries
    if (x <= -6.2 || x >= 6.2 || z <= -3.2 || z >= 35.2) {
      return true;
    }

    // Ground floor obstacles
    if (y < 3.0) {
      // 2. Stone Columns
      const pillarZ = [0, 6, 12, 18, 24, 30];
      for (const pz of pillarZ) {
        if (Math.abs(z - pz) < 0.65 && (Math.abs(x - (-4.3)) < 0.65 || Math.abs(x - 4.3) < 0.65)) {
          return true;
        }
      }

      // 3. Celestial Globe Pedestal (Radius 1.1 at X = 0, Z = 14)
      const dxGlobe = x - 0;
      const dzGlobe = z - 14;
      if (dxGlobe * dxGlobe + dzGlobe * dzGlobe < 1.1 * 1.1) {
        return true;
      }

      // 4. Study Tables
      const deskZ = [4, 8, 12, 18, 24, 30];
      const deskX = [-2.3, 2.3, -2.3, 2.3, -2.3, 2.3];
      for (let i = 0; i < deskZ.length; i++) {
        if (Math.abs(x - deskX[i]) < 1.05 && Math.abs(z - deskZ[i]) < 0.7) {
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
    // 1. Rotate Celestial Globe slowly
    if (this.globeSphereMesh) {
      this.globeSphereMesh.rotation.y = elapsedTime * 0.25;
    }

    // 2. Flicker Chandelier lights
    this.chandeliers.forEach((ch) => {
      const flicker = Math.sin(elapsedTime * ch.flickerSpeed + ch.flickerPhase) * 0.35 +
                      Math.cos(elapsedTime * 8.0) * 0.15;
      ch.light.intensity = Math.max(2.0, ch.baseIntensity + flicker);
    });

    // 3. Flicker Wall Sconces & Candles
    this.candleSconces.forEach((cs) => {
      const flicker = Math.sin(elapsedTime * cs.flickerSpeed + cs.flickerPhase) * 0.25 +
                      Math.sin(elapsedTime * 11.0) * 0.1;
      cs.light.intensity = Math.max(1.0, cs.baseIntensity + flicker);
    });

    // 4. Drift Dust Particles
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
