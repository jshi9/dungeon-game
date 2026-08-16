import * as THREE from 'three';
import { TextureAtlas } from './TextureAtlas';
import { Book, LibraryLoreGenerator } from '../lore/LibraryLoreGenerator';

export interface InteractiveBookLocation {
  id: string;
  position: THREE.Vector3;
  book: Book;
  label: string;
}

export interface ChandelierInfo {
  group: THREE.Group;
  light: THREE.PointLight;
  baseIntensity: number;
  flickerSpeed: number;
  flickerPhase: number;
}

export interface DeskCandleInfo {
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
  public deskCandles: DeskCandleInfo[] = [];
  public globeSphereMesh?: THREE.Mesh;
  public dustParticles?: THREE.Points;
  public interactiveBooks: InteractiveBookLocation[] = [];

  // Dimensions
  public width = 14; // X: -7 to +7
  public length = 38; // Z: -4 to +34
  public ceilingHeight = 12.0;

  constructor(scene: THREE.Scene, atlas: TextureAtlas) {
    this.scene = scene;
    this.atlas = atlas;
    this.container = new THREE.Group();
    this.container.name = 'GrandCathedralLibrary';
    this.scene.add(this.container);

    this.buildCathedralArchitecture();
    this.buildUpperBalconiesAndStairs();
    this.buildStudyDesksAndAlcoves();
    this.buildCelestialGlobe();
    this.buildGrandChandeliers();
    this.buildHeraldicBannersAndPlaques();
    this.buildStainedGlassAndVolumetricLightRays();
    this.buildFloatingDustParticles();
  }

  public setVisible(visible: boolean): void {
    this.container.visible = visible;
  }

  /**
   * 1. Cathedral Floors, Vaulted Ribbed Arches & Stone Pillars
   */
  private buildCathedralArchitecture(): void {
    // 1. Polished Checkered Stone Tile Floor
    const floorGeom = new THREE.PlaneGeometry(this.width, this.length, 14, 38);
    const floorMesh = new THREE.Mesh(floorGeom, this.atlas.materials.stoneTileFloor);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.set(0, 0, 15);
    floorMesh.receiveShadow = true;
    this.container.add(floorMesh);

    // 2. Central Red Carpet Aisle (Elevated 0.02 units)
    const carpetGeom = new THREE.PlaneGeometry(3.2, this.length - 2);
    const carpetMesh = new THREE.Mesh(carpetGeom, this.atlas.materials.carpetRed);
    carpetMesh.rotation.x = -Math.PI / 2;
    carpetMesh.position.set(0, 0.02, 15);
    carpetMesh.receiveShadow = true;
    this.container.add(carpetMesh);

    // 3. Vaulted Stone Ceiling
    const ceilGeom = new THREE.PlaneGeometry(this.width, this.length);
    const ceilMesh = new THREE.Mesh(ceilGeom, this.atlas.materials.stoneBrick);
    ceilMesh.rotation.x = Math.PI / 2;
    ceilMesh.position.set(0, this.ceilingHeight, 15);
    this.container.add(ceilMesh);

    // 4. Perimeter Stone Walls (North end apse wall, South entrance wall)
    const endWallGeom = new THREE.BoxGeometry(this.width, this.ceilingHeight, 1.0);
    const northWall = new THREE.Mesh(endWallGeom, this.atlas.materials.stoneBrick);
    northWall.position.set(0, this.ceilingHeight / 2, 34);
    northWall.castShadow = true;
    northWall.receiveShadow = true;

    const southWall = new THREE.Mesh(endWallGeom, this.atlas.materials.stoneBrick);
    southWall.position.set(0, this.ceilingHeight / 2, -4);
    southWall.castShadow = true;
    southWall.receiveShadow = true;
    this.container.add(northWall, southWall);

    // 5. Massive Fluted Gothic Stone Pillars with Vaulted Ceiling Arches
    const pillarPositionsZ = [0, 6, 12, 18, 24, 30];
    const pillarGeom = new THREE.BoxGeometry(0.85, this.ceilingHeight, 0.85);
    const capitalGeom = new THREE.BoxGeometry(1.2, 0.6, 1.2);
    const archGeom = new THREE.BoxGeometry(8.0, 0.4, 0.45);

    pillarPositionsZ.forEach((pz) => {
      // Left pillar at X = -4.2
      const leftPillar = new THREE.Mesh(pillarGeom, this.atlas.materials.carvedStonePillar);
      leftPillar.position.set(-4.2, this.ceilingHeight / 2, pz);
      leftPillar.castShadow = true;
      leftPillar.receiveShadow = true;

      const leftCap = new THREE.Mesh(capitalGeom, this.atlas.materials.stoneBrick);
      leftCap.position.set(-4.2, this.ceilingHeight - 0.3, pz);

      // Right pillar at X = +4.2
      const rightPillar = new THREE.Mesh(pillarGeom, this.atlas.materials.carvedStonePillar);
      rightPillar.position.set(4.2, this.ceilingHeight / 2, pz);
      rightPillar.castShadow = true;
      rightPillar.receiveShadow = true;

      const rightCap = new THREE.Mesh(capitalGeom, this.atlas.materials.stoneBrick);
      rightCap.position.set(4.2, this.ceilingHeight - 0.3, pz);

      // Ribbed Vault Arch spanning between left and right pillars
      const arch = new THREE.Mesh(archGeom, this.atlas.materials.woodBeam);
      arch.position.set(0, this.ceilingHeight - 0.2, pz);

      this.container.add(leftPillar, leftCap, rightPillar, rightCap, arch);
    });

    // 6. Dense Towering Wall Bookshelves (Ground Tier Y = 0 to 4.2)
    const shelfWidth = 0.7;
    const shelfHeight = 4.2;
    const shelfGeom = new THREE.BoxGeometry(shelfWidth, shelfHeight, this.length - 2);

    const leftShelf = new THREE.Mesh(shelfGeom, this.atlas.materials.bookshelfDense);
    leftShelf.position.set(-6.6, shelfHeight / 2, 15);
    leftShelf.castShadow = true;
    leftShelf.receiveShadow = true;

    const rightShelf = new THREE.Mesh(shelfGeom, this.atlas.materials.bookshelfDense);
    rightShelf.position.set(6.6, shelfHeight / 2, 15);
    rightShelf.castShadow = true;
    rightShelf.receiveShadow = true;

    this.container.add(leftShelf, rightShelf);
  }

  /**
   * 2. Upper Balcony Mezzanines & Staircases
   */
  private buildUpperBalconiesAndStairs(): void {
    const balconyY = 4.5;
    const balconyWidth = 2.4;
    const balconyLength = this.length - 2;

    // Balcony Floors (Wood Planks)
    const balcGeom = new THREE.BoxGeometry(balconyWidth, 0.25, balconyLength);

    const leftBalcony = new THREE.Mesh(balcGeom, this.atlas.materials.woodPlanks);
    leftBalcony.position.set(-5.6, balconyY, 15);
    leftBalcony.receiveShadow = true;

    const rightBalcony = new THREE.Mesh(balcGeom, this.atlas.materials.woodPlanks);
    rightBalcony.position.set(5.6, balconyY, 15);
    rightBalcony.receiveShadow = true;

    // Wooden Balustrade Railings overlooking the central nave
    const railGeom = new THREE.BoxGeometry(0.12, 0.85, balconyLength);

    const leftRail = new THREE.Mesh(railGeom, this.atlas.materials.woodBeam);
    leftRail.position.set(-4.4, balconyY + 0.55, 15);
    leftRail.castShadow = true;

    const rightRail = new THREE.Mesh(railGeom, this.atlas.materials.woodBeam);
    rightRail.position.set(4.4, balconyY + 0.55, 15);
    rightRail.castShadow = true;

    // Upper Tier Bookshelves (Y = 4.7 to 9.0) with Rare Glowing Grimoires
    const upperShelfHeight = 4.3;
    const upperShelfGeom = new THREE.BoxGeometry(0.7, upperShelfHeight, balconyLength);

    const leftUpperShelf = new THREE.Mesh(upperShelfGeom, this.atlas.materials.bookshelfRare);
    leftUpperShelf.position.set(-6.6, balconyY + upperShelfHeight / 2 + 0.15, 15);
    leftUpperShelf.castShadow = true;

    const rightUpperShelf = new THREE.Mesh(upperShelfGeom, this.atlas.materials.bookshelfRare);
    rightUpperShelf.position.set(6.6, balconyY + upperShelfHeight / 2 + 0.15, 15);
    rightUpperShelf.castShadow = true;

    this.container.add(leftBalcony, rightBalcony, leftRail, rightRail, leftUpperShelf, rightUpperShelf);

    // Access Staircases (At Z = 2 and Z = 22)
    this.buildStaircase(-4.8, 2, balconyY);
    this.buildStaircase(4.8, 22, balconyY);
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
   * 3. Ornate Wooden Study Desks, Candles, and Interactive Open Folios
   */
  private buildStudyDesksAndAlcoves(): void {
    const deskConfigs = [
      { x: -2.3, z: 4, seed: 101, title: 'Tome of the Astral Pyromancy' },
      { x: 2.3, z: 8, seed: 202, title: 'The Chronicles of Sunken Alderia' },
      { x: -2.3, z: 12, seed: 303, title: 'Treatise on Living Stone & Mortar' },
      { x: 2.3, z: 18, seed: 404, title: 'The Sacred Rites of the Golden Lion' },
      { x: -2.3, z: 22, seed: 505, title: 'Secrets of the Clockwork Heavens' },
      { x: 2.3, z: 28, seed: 606, title: 'The Lost Gospel of Veritas' }
    ];

    deskConfigs.forEach((cfg) => {
      const deskGroup = new THREE.Group();
      deskGroup.position.set(cfg.x, 0, cfg.z);

      // Desk tabletop
      const tableTop = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 0.1, 0.9),
        this.atlas.materials.woodPlanks
      );
      tableTop.position.set(0, 0.85, 0);
      tableTop.castShadow = true;
      tableTop.receiveShadow = true;
      deskGroup.add(tableTop);

      // 4 Table legs
      const legGeom = new THREE.BoxGeometry(0.1, 0.85, 0.1);
      const legOffsets = [[-0.7, -0.35], [0.7, -0.35], [-0.7, 0.35], [0.7, 0.35]];
      legOffsets.forEach(([lx, lz]) => {
        const leg = new THREE.Mesh(legGeom, this.atlas.materials.woodBeam);
        leg.position.set(lx, 0.425, lz);
        leg.castShadow = true;
        deskGroup.add(leg);
      });

      // Study Chair
      const chairSeat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.08, 0.5), this.atlas.materials.woodPlanks);
      chairSeat.position.set(0, 0.5, -0.65);
      chairSeat.castShadow = true;
      const chairBack = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.6, 0.08), this.atlas.materials.woodBeam);
      chairBack.position.set(0, 0.8, -0.88);
      chairBack.castShadow = true;
      deskGroup.add(chairSeat, chairBack);

      // Brass Candleholder + Lit Candle
      const candleBase = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.04, 8), this.atlas.materials.iron);
      candleBase.position.set(-0.55, 0.92, 0.2);
      const candleWax = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 0.22, 8),
        new THREE.MeshStandardMaterial({ color: 0xfffae6, roughness: 0.4 })
      );
      candleWax.position.set(-0.55, 1.05, 0.2);
      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.02, 0.06, 6),
        new THREE.MeshBasicMaterial({ color: 0xffaa22 })
      );
      flame.position.set(-0.55, 1.19, 0.2);
      deskGroup.add(candleBase, candleWax, flame);

      // Warm dynamic candlelight
      const candleLight = new THREE.PointLight(0xffbe55, 2.5, 9.0, 1.1);
      candleLight.position.set(-0.55, 1.25, 0.2);
      candleLight.castShadow = true;
      candleLight.shadow.bias = -0.002;
      candleLight.shadow.mapSize.width = 256;
      candleLight.shadow.mapSize.height = 256;
      deskGroup.add(candleLight);

      this.deskCandles.push({
        light: candleLight,
        baseIntensity: 2.5,
        flickerSpeed: 4.0 + Math.random() * 3.0,
        flickerPhase: Math.random() * Math.PI * 2
      });

      // Open Leather-Bound Folio Book (Interactive!)
      const openBookGroup = new THREE.Group();
      openBookGroup.position.set(0.05, 0.91, 0.0);
      openBookGroup.rotation.y = 0.05;

      const leftPageMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.24, 0.02, 0.32),
        new THREE.MeshStandardMaterial({ color: 0xecdcb6, roughness: 0.9 })
      );
      leftPageMesh.position.set(-0.12, 0, 0);
      leftPageMesh.rotation.z = -0.08;

      const rightPageMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.24, 0.02, 0.32),
        new THREE.MeshStandardMaterial({ color: 0xecdcb6, roughness: 0.9 })
      );
      rightPageMesh.position.set(0.12, 0, 0);
      rightPageMesh.rotation.z = 0.08;

      const bookCover = new THREE.Mesh(
        new THREE.BoxGeometry(0.52, 0.02, 0.34),
        new THREE.MeshStandardMaterial({ color: 0x5a1810, roughness: 0.7 })
      );
      bookCover.position.set(0, -0.015, 0);

      openBookGroup.add(leftPageMesh, rightPageMesh, bookCover);
      deskGroup.add(openBookGroup);

      // Stack of closed books & inkwell
      const bookStack1 = new THREE.Mesh(
        new THREE.BoxGeometry(0.25, 0.06, 0.35),
        new THREE.MeshStandardMaterial({ color: 0x1c325c, roughness: 0.8 })
      );
      bookStack1.position.set(0.52, 0.93, -0.2);
      const bookStack2 = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.05, 0.32),
        new THREE.MeshStandardMaterial({ color: 0x225430, roughness: 0.8 })
      );
      bookStack2.position.set(0.52, 0.98, -0.2);
      bookStack2.rotation.y = 0.15;
      deskGroup.add(bookStack1, bookStack2);

      // Inkwell
      const inkwell = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.05, 0.08, 8),
        this.atlas.materials.iron
      );
      inkwell.position.set(0.55, 0.94, 0.2);
      deskGroup.add(inkwell);

      this.container.add(deskGroup);

      // Register interactive book
      const bookData = LibraryLoreGenerator.generateBook(cfg.seed, cfg.title);
      this.interactiveBooks.push({
        id: `desk_book_${cfg.seed}`,
        position: new THREE.Vector3(cfg.x, 1.0, cfg.z),
        book: bookData,
        label: cfg.title
      });
    });
  }

  /**
   * 4. Large Illuminated Celestial Globe on Ornate Carved Pedestal
   */
  private buildCelestialGlobe(): void {
    const globeGroup = new THREE.Group();
    globeGroup.position.set(0, 0, 14);

    // Carved Mahogany Octagonal Pedestal
    const baseGeom = new THREE.CylinderGeometry(0.85, 1.0, 0.4, 8);
    const baseMesh = new THREE.Mesh(baseGeom, this.atlas.materials.woodBeam);
    baseMesh.position.set(0, 0.2, 0);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;

    const columnGeom = new THREE.CylinderGeometry(0.35, 0.45, 0.8, 8);
    const columnMesh = new THREE.Mesh(columnGeom, this.atlas.materials.woodPlanks);
    columnMesh.position.set(0, 0.8, 0);
    columnMesh.castShadow = true;

    // Brass Gimbal Ring (Axis Arm)
    const ringGeom = new THREE.TorusGeometry(0.85, 0.05, 8, 24);
    const ringMesh = new THREE.Mesh(ringGeom, this.atlas.materials.iron);
    ringMesh.position.set(0, 1.65, 0);
    ringMesh.rotation.x = Math.PI / 4;

    // Celestial/Terrestrial Globe Sphere
    const sphereGeom = new THREE.SphereGeometry(0.75, 16, 16);
    this.globeSphereMesh = new THREE.Mesh(sphereGeom, this.atlas.materials.globeTexture);
    this.globeSphereMesh.position.set(0, 1.65, 0);
    this.globeSphereMesh.castShadow = true;

    // Inner warm illumination light
    const globeLight = new THREE.PointLight(0xffe082, 2.8, 12.0, 1.1);
    globeLight.position.set(0, 1.65, 0);

    globeGroup.add(baseMesh, columnMesh, ringMesh, this.globeSphereMesh, globeLight);
    this.container.add(globeGroup);

    // Register globe as interactive lore object
    const globeLore = LibraryLoreGenerator.generateBook(999, 'Tome of the Celestial Spheres & Lost Continents');
    this.interactiveBooks.push({
      id: 'celestial_globe',
      position: new THREE.Vector3(0, 1.6, 14),
      book: globeLore,
      label: 'The Celestial Globe of Archon Alden'
    });
  }

  /**
   * 5. Grand Hanging Wrought-Iron Chandeliers with Glowing Candles
   */
  private buildGrandChandeliers(): void {
    const chandelierZ = [4, 15, 26];

    chandelierZ.forEach((cz, idx) => {
      const cGroup = new THREE.Group();
      cGroup.position.set(0, 7.5, cz);

      // Suspension Chain from ceiling Y=12 to Y=7.5
      const chainGeom = new THREE.CylinderGeometry(0.04, 0.04, 4.5, 6);
      const chainMesh = new THREE.Mesh(chainGeom, this.atlas.materials.iron);
      chainMesh.position.set(0, 2.25, 0);
      cGroup.add(chainMesh);

      // Main Tier Iron Ring
      const outerRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.6, 0.08, 8, 20),
        this.atlas.materials.iron
      );
      outerRing.rotation.x = Math.PI / 2;
      cGroup.add(outerRing);

      // Inner Tier Iron Ring
      const innerRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.9, 0.06, 8, 16),
        this.atlas.materials.iron
      );
      innerRing.rotation.x = Math.PI / 2;
      innerRing.position.set(0, 0.4, 0);
      cGroup.add(innerRing);

      // 8 Glowing Candle Stems on Outer Ring
      for (let c = 0; c < 8; c++) {
        const angle = (c / 8) * Math.PI * 2;
        const cx = Math.cos(angle) * 1.6;
        const czPos = Math.sin(angle) * 1.6;

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

      // Warm dynamic chandelier light
      const chLight = new THREE.PointLight(0xffbe55, 4.2, 24.0, 1.05);
      chLight.position.set(0, 0.5, 0);
      chLight.castShadow = true;
      chLight.shadow.bias = -0.002;
      chLight.shadow.mapSize.width = 512;
      chLight.shadow.mapSize.height = 512;
      cGroup.add(chLight);

      this.chandeliers.push({
        group: cGroup,
        light: chLight,
        baseIntensity: 4.2,
        flickerSpeed: 3.5 + idx * 0.8,
        flickerPhase: idx * 1.5
      });

      this.container.add(cGroup);
    });
  }

  /**
   * 6. Heraldic Lion Banners, Crimson Cross Tapestries & Stone Motto Plaques
   */
  private buildHeraldicBannersAndPlaques(): void {
    const bannerPositionsZ = [3, 9, 15, 21, 27];

    bannerPositionsZ.forEach((bz, idx) => {
      const isLion = idx % 2 === 0;
      const mat = isLion ? this.atlas.materials.heraldicLionBanner : this.atlas.materials.heraldicCrossBanner;

      // Left balcony banner (hanging down from Y = 4.4 to Y = 2.0)
      const bannerGeom = new THREE.PlaneGeometry(1.2, 2.4);

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

    // Stone Inscription Plaques on front pillars ("VERITAS", "WISDOM IS LIGHT")
    const plaqueGeom = new THREE.PlaneGeometry(0.8, 1.2);
    const leftPlaque = new THREE.Mesh(plaqueGeom, this.atlas.materials.inscriptionPlaque);
    leftPlaque.position.set(-3.75, 2.2, 0.45);
    leftPlaque.rotation.y = Math.PI;

    const rightPlaque = new THREE.Mesh(plaqueGeom, this.atlas.materials.inscriptionPlaque);
    rightPlaque.position.set(3.75, 2.2, 0.45);
    rightPlaque.rotation.y = Math.PI;

    this.container.add(leftPlaque, rightPlaque);
  }

  /**
   * 7. Stained Glass Lancet Windows & Volumetric Sunbeams (God Rays)
   */
  private buildStainedGlassAndVolumetricLightRays(): void {
    // Tall Gothic Arched Stained Glass Windows on North Apse Wall
    const windowGeom = new THREE.PlaneGeometry(2.4, 6.0);
    const centerWindow = new THREE.Mesh(windowGeom, this.atlas.materials.stainedGlassGothic);
    centerWindow.position.set(0, 7.5, 33.4);
    centerWindow.rotation.y = Math.PI;

    const leftWindow = new THREE.Mesh(windowGeom, this.atlas.materials.stainedGlassGothic);
    leftWindow.position.set(-3.5, 7.5, 33.4);
    leftWindow.rotation.y = Math.PI;

    const rightWindow = new THREE.Mesh(windowGeom, this.atlas.materials.stainedGlassGothic);
    rightWindow.position.set(3.5, 7.5, 33.4);
    rightWindow.rotation.y = Math.PI;

    this.container.add(centerWindow, leftWindow, rightWindow);

    // Volumetric Sunbeams / God Rays (Angled semi-transparent light shafts)
    const rayMat = new THREE.MeshBasicMaterial({
      color: 0xffecc4,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const rayGeom = new THREE.PlaneGeometry(3.5, 18.0);

    const ray1 = new THREE.Mesh(rayGeom, rayMat);
    ray1.position.set(0, 5.5, 22);
    ray1.rotation.set(-0.75, 0.15, 0.2);

    const ray2 = new THREE.Mesh(rayGeom, rayMat);
    ray2.position.set(-2.5, 5.5, 22);
    ray2.rotation.set(-0.75, -0.15, -0.2);

    const ray3 = new THREE.Mesh(rayGeom, rayMat);
    ray3.position.set(2.5, 5.5, 22);
    ray3.rotation.set(-0.75, 0.25, 0.1);

    this.container.add(ray1, ray2, ray3);
  }

  /**
   * 8. Floating Dust Particles (Catching the golden sunbeams)
   */
  private buildFloatingDustParticles(): void {
    const particleCount = 250;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 12;      // X: -6 to +6
      positions[i * 3 + 1] = 0.5 + Math.random() * 9.5;       // Y: 0.5 to 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 34 + 15; // Z: -2 to 32
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
   * Proximity Query: Returns nearest interactive book within maxDist
   */
  public getNearestInteractiveBook(playerPos: THREE.Vector3, maxDist = 2.5): InteractiveBookLocation | null {
    let nearest: InteractiveBookLocation | null = null;
    let closestDistSq = maxDist * maxDist;

    for (const item of this.interactiveBooks) {
      const dx = playerPos.x - item.position.x;
      const dz = playerPos.z - item.position.z;
      const distSq = dx * dx + dz * dz;

      if (distSq < closestDistSq) {
        closestDistSq = distSq;
        nearest = item;
      }
    }

    return nearest;
  }

  /**
   * Elevation Heightfield Query
   */
  public getElevation(x: number, z: number): number {
    // Upper Balcony Mezzanine level (X <= -4.4 or X >= 4.4, Z between -3 and 33)
    if ((x <= -4.4 || x >= 4.4) && z >= -3 && z <= 33) {
      return 4.5;
    }
    return 0.0;
  }

  /**
   * Solid Collision Check for Walls, Pillars, Desks, and Globe Pedestal
   */
  public isBlocked(x: number, z: number, y: number = 0): boolean {
    // 1. Outer perimeter boundaries
    if (x <= -6.2 || x >= 6.2 || z <= -3.2 || z >= 33.2) {
      return true;
    }

    // Ground floor obstacle checks (when y < 3.0)
    if (y < 3.0) {
      // 2. Pillars (Radius ~0.65 at X = +-4.2, Z in [0, 6, 12, 18, 24, 30])
      const pillarZ = [0, 6, 12, 18, 24, 30];
      for (const pz of pillarZ) {
        if (Math.abs(z - pz) < 0.65 && (Math.abs(x - (-4.2)) < 0.65 || Math.abs(x - 4.2) < 0.65)) {
          return true;
        }
      }

      // 3. Celestial Globe Pedestal (Radius 1.1 at X = 0, Z = 14)
      const dxGlobe = x - 0;
      const dzGlobe = z - 14;
      if (dxGlobe * dxGlobe + dzGlobe * dzGlobe < 1.1 * 1.1) {
        return true;
      }

      // 4. Study Desks
      const deskZ = [4, 8, 12, 18, 22, 28];
      const deskX = [-2.3, 2.3, -2.3, 2.3, -2.3, 2.3];
      for (let i = 0; i < deskZ.length; i++) {
        if (Math.abs(x - deskX[i]) < 0.95 && Math.abs(z - deskZ[i]) < 0.65) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Tick update: Animate chandeliers, candles, globe rotation, and dust particles
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

    // 3. Flicker Desk Candles
    this.deskCandles.forEach((dc) => {
      const flicker = Math.sin(elapsedTime * dc.flickerSpeed + dc.flickerPhase) * 0.25 +
                      Math.sin(elapsedTime * 11.0) * 0.1;
      dc.light.intensity = Math.max(1.5, dc.baseIntensity + flicker);
    });

    // 4. Drift Dust Particles
    if (this.dustParticles) {
      const posAttr = this.dustParticles.geometry.attributes.position as THREE.BufferAttribute;
      const count = posAttr.count;

      for (let i = 0; i < count; i++) {
        let py = posAttr.getY(i) - 0.003;
        if (py < 0.5) py = 10.0;
        posAttr.setY(i, py);

        // Gentle horizontal sway
        const px = posAttr.getX(i) + Math.sin(elapsedTime * 0.5 + i) * 0.002;
        posAttr.setX(i, px);
      }
      posAttr.needsUpdate = true;
    }
  }
}
