import * as THREE from 'three';

export interface TextureMap {
  grassTop: THREE.Texture;
  grassSide: THREE.Texture;
  dirt: THREE.Texture;
  stoneBrick: THREE.Texture;
  cobblestone: THREE.Texture;
  cobblestoneTrail: THREE.Texture;
  woodPlanks: THREE.Texture;
  woodBeam: THREE.Texture;
  woodParquet: THREE.Texture;
  pineNeedles: THREE.Texture;
  pineBark: THREE.Texture;
  water: THREE.Texture;
  sand: THREE.Texture;
  carpetRed: THREE.Texture;
  iron: THREE.Texture;
  steelBlade: THREE.Texture;
  torchWood: THREE.Texture;
  torchFire: THREE.Texture;
  crimsonCloth: THREE.Texture;
  skeletonBone: THREE.Texture;
  windowLattice: THREE.Texture;
  mapScroll: THREE.Texture;

  // 7 Diverse Grass & Ground Blends
  grassWildHighland: THREE.Texture;
  grassMossDamp: THREE.Texture;
  grassPineNeedles: THREE.Texture;
  grassScreeTurf: THREE.Texture;
  grassMuddyRoots: THREE.Texture;
  grassAutumnHeather: THREE.Texture;
  grassDeepClover: THREE.Texture;

  // 5 Road & Trail Variants
  roadCobblestoneWeathered: THREE.Texture;
  roadGravelRutted: THREE.Texture;
  roadMossyPavers: THREE.Texture;
  roadMuddyTracks: THREE.Texture;
  roadCastleStone: THREE.Texture;

  // 5 Tree Bark Variants
  barkCraggyPine: THREE.Texture;
  barkMossyOak: THREE.Texture;
  barkDarkBirch: THREE.Texture;
  barkFibrousCedar: THREE.Texture;
  barkCharredSpruce: THREE.Texture;

  // 5 Tree Foliage & Needle Variants
  foliagePineDense: THREE.Texture;
  foliageSpruceFrosted: THREE.Texture;
  foliageFirLush: THREE.Texture;
  foliageCypressFan: THREE.Texture;
  foliageHemlockShadow: THREE.Texture;

  // 6 NPC Cloth, Armor & Leather Variants
  clothCrimsonWool: THREE.Texture;
  clothHoodedCowl: THREE.Texture;
  clothSorcererRune: THREE.Texture;
  armorSteelPlate: THREE.Texture;
  armorChainmailRing: THREE.Texture;
  leatherStuddedBrigandine: THREE.Texture;

  // Grand Library & Dungeon Additions
  bookshelfDense: THREE.Texture;
  bookshelfRare: THREE.Texture;
  heraldicLionBanner: THREE.Texture;
  heraldicCrossBanner: THREE.Texture;
  stainedGlassGothic: THREE.Texture;
  stoneTileFloor: THREE.Texture;
  dungeonFloor: THREE.Texture;
  carvedStonePillar: THREE.Texture;
  globeTexture: THREE.Texture;
  inscriptionPlaque: THREE.Texture;
  plaqueHistoria: THREE.Texture;
  plaquePhilosophia: THREE.Texture;
  plaqueScientia: THREE.Texture;
  plaqueTheologia: THREE.Texture;
  plaqueArcanum: THREE.Texture;
  plaqueMythologia: THREE.Texture;
  darkOak: THREE.Texture;
  brassMetal: THREE.Texture;
  snow: THREE.Texture;
  alpineCrag: THREE.Texture;
}

export class TextureAtlas {
  public textures!: TextureMap;
  public materials!: Record<string, THREE.Material>;
  public barkMaterials!: THREE.MeshStandardMaterial[];
  public foliageMaterials!: THREE.MeshStandardMaterial[];
  public grassMaterials!: THREE.MeshStandardMaterial[];
  public roadMaterials!: THREE.MeshStandardMaterial[];
  private loader = new THREE.TextureLoader();

  constructor() {
    this.initTextures();
    this.initMaterials();
  }

  private loadSeamlessTexture(url: string, _fallbackCanvasTex?: THREE.CanvasTexture, _repeatScale?: number): THREE.Texture {
    const tex = this.loader.load(
      url,
      (loadedTex) => {
        loadedTex.wrapS = THREE.RepeatWrapping;
        loadedTex.wrapT = THREE.RepeatWrapping;
        loadedTex.colorSpace = THREE.SRGBColorSpace;
        loadedTex.magFilter = THREE.LinearFilter;
        loadedTex.minFilter = THREE.LinearMipmapLinearFilter;
        loadedTex.generateMipmaps = true;
        loadedTex.anisotropy = 4;
        loadedTex.needsUpdate = true;
      },
      undefined,
      (err) => {
        console.warn(`[TextureAtlas] Failed to load texture ${url}`, err);
      }
    );

    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.generateMipmaps = true;
    tex.anisotropy = 4;

    return tex;
  }

  private createCanvas(width = 64, height = 64): [HTMLCanvasElement, CanvasRenderingContext2D] {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    ctx.imageSmoothingEnabled = true;
    return [canvas, ctx];
  }

  private wrapTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.generateMipmaps = true;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }

  private initTextures(): void {
    // 1. Procedural Fallbacks (for instant load availability)
    const [cSteel, ctxSteel] = this.createCanvas(64, 64);
    ctxSteel.fillStyle = '#9aa3b5';
    ctxSteel.fillRect(0, 0, 64, 64);

    const [cTorch, ctxTorch] = this.createCanvas(32, 64);
    ctxTorch.fillStyle = '#26180f';
    ctxTorch.fillRect(0, 0, 32, 64);

    const [cFire, ctxFire] = this.createCanvas(32, 32);
    ctxFire.fillStyle = '#ff8800';
    ctxFire.fillRect(8, 8, 16, 16);

    const [cBook, ctxBook] = this.createCanvas(64, 64);
    ctxBook.fillStyle = '#2b1b11';
    ctxBook.fillRect(0, 0, 64, 64);

    const fallbackSteel = this.wrapTexture(cSteel);
    const fallbackTorch = this.wrapTexture(cTorch);
    const fallbackFire = this.wrapTexture(cFire);
    const fallbackBook = this.wrapTexture(cBook);

    // 2. High-Fidelity 2000s Retro Dark Fantasy Texture Maps
    const texWall = this.loadSeamlessTexture('/textures/gothic_stone_wall.jpg');
    const texForestMoss = this.loadSeamlessTexture('/textures/grass_moss_damp.jpg');
    const texMountainCrag = this.loadSeamlessTexture('/textures/alpine_mountain_crag.jpg');
    const texDungeonFloor = this.loadSeamlessTexture('/textures/dungeon_crypt_floor.jpg');
    const texWoodPlanks = this.loadSeamlessTexture('/textures/dark_wood_planks.jpg');

    // 7 Distinct Grass & Ground Blends
    const texGrassWildHighland = this.loadSeamlessTexture('/textures/grass_wild_highland.jpg');
    const texGrassMossDamp = this.loadSeamlessTexture('/textures/grass_moss_damp.jpg');
    const texGrassPineNeedles = this.loadSeamlessTexture('/textures/grass_pine_needles.jpg');
    const texGrassScreeTurf = this.loadSeamlessTexture('/textures/grass_scree_turf.jpg');
    const texGrassMuddyRoots = this.loadSeamlessTexture('/textures/grass_muddy_roots.jpg');
    const texGrassAutumnHeather = this.loadSeamlessTexture('/textures/grass_autumn_heather.jpg');
    const texGrassDeepClover = this.loadSeamlessTexture('/textures/grass_deep_clover.jpg');

    // 5 Road & Trail Variants
    const texRoadCobble = this.loadSeamlessTexture('/textures/road_cobblestone_weathered.jpg');
    const texRoadGravel = this.loadSeamlessTexture('/textures/road_gravel_rutted.jpg');
    const texRoadMossy = this.loadSeamlessTexture('/textures/road_mossy_pavers.jpg');
    const texRoadMuddy = this.loadSeamlessTexture('/textures/road_muddy_tracks.jpg');
    const texRoadCastle = this.loadSeamlessTexture('/textures/road_castle_stone_road.jpg');

    // 5 Tree Bark Variants
    const texBarkPine = this.loadSeamlessTexture('/textures/bark_craggy_pine.jpg');
    const texBarkOak = this.loadSeamlessTexture('/textures/bark_mossy_oak.jpg');
    const texBarkBirch = this.loadSeamlessTexture('/textures/bark_dark_birch.jpg');
    const texBarkCedar = this.loadSeamlessTexture('/textures/bark_fibrous_cedar.jpg');
    const texBarkSpruce = this.loadSeamlessTexture('/textures/bark_charred_spruce.jpg');

    // 5 Tree Foliage & Needle Variants
    const texFolPine = this.loadSeamlessTexture('/textures/foliage_pine_dense.jpg');
    const texFolSpruce = this.loadSeamlessTexture('/textures/foliage_spruce_frosted.jpg');
    const texFolFir = this.loadSeamlessTexture('/textures/foliage_fir_lush.jpg');
    const texFolCypress = this.loadSeamlessTexture('/textures/foliage_cypress_fan.jpg');
    const texFolHemlock = this.loadSeamlessTexture('/textures/foliage_hemlock_shadow.jpg');

    // 6 NPC Cloth, Armor & Leather Variants
    const texClothCrimson = this.loadSeamlessTexture('/textures/cloth_crimson_wool.jpg');
    const texClothCowl = this.loadSeamlessTexture('/textures/cloth_hooded_cowl.jpg');
    const texClothRune = this.loadSeamlessTexture('/textures/cloth_sorcerer_rune.jpg');
    const texArmorPlate = this.loadSeamlessTexture('/textures/armor_steel_plate.jpg');
    const texArmorMail = this.loadSeamlessTexture('/textures/armor_chainmail_ring.jpg');
    const texLeatherBrig = this.loadSeamlessTexture('/textures/leather_studded_brigandine.jpg');

    // Library Specific High-Detail Textures
    const texCarpetRed = this.loadSeamlessTexture('/textures/carpet_red_damask.jpg');
    const texCathedralTile = this.loadSeamlessTexture('/textures/cathedral_stone_tile.jpg');
    const texWoodParquet = this.loadSeamlessTexture('/textures/wood_parquet_dark.jpg');
    const texAntiqueBrass = this.loadSeamlessTexture('/textures/antique_brass.jpg');
    const texStainedGlass = this.loadSeamlessTexture('/textures/stained_glass_gothic.jpg');
    const texCelestialGlobe = this.loadSeamlessTexture('/textures/celestial_globe.jpg');
    const texLionBanner = this.loadSeamlessTexture('/textures/heraldic_lion_banner.jpg');
    const texCrossBanner = this.loadSeamlessTexture('/textures/heraldic_cross_banner.jpg');
    const texParchment = this.loadSeamlessTexture('/textures/parchment_scroll.jpg');

    const texPlaqueHistoria = this.loadSeamlessTexture('/textures/plaque_historia.jpg');
    const texPlaquePhilosophia = this.loadSeamlessTexture('/textures/plaque_philosophia.jpg');
    const texPlaqueScientia = this.loadSeamlessTexture('/textures/plaque_scientia.jpg');
    const texPlaqueTheologia = this.loadSeamlessTexture('/textures/plaque_theologia.jpg');
    const texPlaqueArcanum = this.loadSeamlessTexture('/textures/plaque_arcanum.jpg');
    const texPlaqueMythologia = this.loadSeamlessTexture('/textures/plaque_mythologia.jpg');

    this.textures = {
      grassTop: texGrassMossDamp,
      grassSide: texGrassMossDamp,
      dirt: texGrassMuddyRoots,
      stoneBrick: texWall,
      cobblestone: texRoadCobble,
      cobblestoneTrail: texRoadCobble,
      woodPlanks: texWoodPlanks,
      woodBeam: texWoodPlanks,
      woodParquet: texWoodParquet,
      pineNeedles: texFolPine,
      pineBark: texBarkPine,
      water: texForestMoss,
      sand: texForestMoss,
      carpetRed: texCarpetRed,
      iron: texWall,
      steelBlade: texArmorPlate,
      torchWood: fallbackTorch,
      torchFire: fallbackFire,
      crimsonCloth: texClothCrimson,
      skeletonBone: fallbackSteel,
      windowLattice: texStainedGlass,
      mapScroll: texParchment,

      grassWildHighland: texGrassWildHighland,
      grassMossDamp: texGrassMossDamp,
      grassPineNeedles: texGrassPineNeedles,
      grassScreeTurf: texGrassScreeTurf,
      grassMuddyRoots: texGrassMuddyRoots,
      grassAutumnHeather: texGrassAutumnHeather,
      grassDeepClover: texGrassDeepClover,

      roadCobblestoneWeathered: texRoadCobble,
      roadGravelRutted: texRoadGravel,
      roadMossyPavers: texRoadMossy,
      roadMuddyTracks: texRoadMuddy,
      roadCastleStone: texRoadCastle,

      barkCraggyPine: texBarkPine,
      barkMossyOak: texBarkOak,
      barkDarkBirch: texBarkBirch,
      barkFibrousCedar: texBarkCedar,
      barkCharredSpruce: texBarkSpruce,

      foliagePineDense: texFolPine,
      foliageSpruceFrosted: texFolSpruce,
      foliageFirLush: texFolFir,
      foliageCypressFan: texFolCypress,
      foliageHemlockShadow: texFolHemlock,

      clothCrimsonWool: texClothCrimson,
      clothHoodedCowl: texClothCowl,
      clothSorcererRune: texClothRune,
      armorSteelPlate: texArmorPlate,
      armorChainmailRing: texArmorMail,
      leatherStuddedBrigandine: texLeatherBrig,

      bookshelfDense: fallbackBook,
      bookshelfRare: fallbackBook,
      heraldicLionBanner: texLionBanner,
      heraldicCrossBanner: texCrossBanner,
      stainedGlassGothic: texStainedGlass,
      stoneTileFloor: texCathedralTile,
      dungeonFloor: texDungeonFloor,
      carvedStonePillar: texWall,
      globeTexture: texCelestialGlobe,
      inscriptionPlaque: texAntiqueBrass,
      plaqueHistoria: texPlaqueHistoria,
      plaquePhilosophia: texPlaquePhilosophia,
      plaqueScientia: texPlaqueScientia,
      plaqueTheologia: texPlaqueTheologia,
      plaqueArcanum: texPlaqueArcanum,
      plaqueMythologia: texPlaqueMythologia,
      darkOak: texWoodPlanks,
      brassMetal: texAntiqueBrass,
      snow: fallbackSteel,
      alpineCrag: texMountainCrag
    };
  }

  private initMaterials(): void {
    const t = this.textures;

    // Bark variations
    const barkMats = [
      new THREE.MeshStandardMaterial({ map: t.barkCraggyPine, roughness: 0.92, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: t.barkMossyOak, roughness: 0.90, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: t.barkDarkBirch, roughness: 0.88, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: t.barkFibrousCedar, roughness: 0.92, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: t.barkCharredSpruce, roughness: 0.95, metalness: 0.02 })
    ];
    this.barkMaterials = barkMats;

    // Foliage variations
    const folMats = [
      new THREE.MeshStandardMaterial({ map: t.foliagePineDense, roughness: 0.75, metalness: 0.05, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ map: t.foliageSpruceFrosted, roughness: 0.70, metalness: 0.10, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ map: t.foliageFirLush, roughness: 0.75, metalness: 0.05, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ map: t.foliageCypressFan, roughness: 0.80, metalness: 0.05, side: THREE.DoubleSide }),
      new THREE.MeshStandardMaterial({ map: t.foliageHemlockShadow, roughness: 0.85, metalness: 0.02, side: THREE.DoubleSide })
    ];
    this.foliageMaterials = folMats;

    // Grass variations
    this.grassMaterials = [
      new THREE.MeshStandardMaterial({ map: t.grassWildHighland, roughness: 0.88, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: t.grassMossDamp, roughness: 0.90, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: t.grassPineNeedles, roughness: 0.92, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: t.grassScreeTurf, roughness: 0.85, metalness: 0.10 }),
      new THREE.MeshStandardMaterial({ map: t.grassMuddyRoots, roughness: 0.94, metalness: 0.02 }),
      new THREE.MeshStandardMaterial({ map: t.grassAutumnHeather, roughness: 0.89, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: t.grassDeepClover, roughness: 0.86, metalness: 0.05 })
    ];

    // Road variations
    this.roadMaterials = [
      new THREE.MeshStandardMaterial({ map: t.roadCobblestoneWeathered, roughness: 0.72, metalness: 0.15 }),
      new THREE.MeshStandardMaterial({ map: t.roadGravelRutted, roughness: 0.80, metalness: 0.10 }),
      new THREE.MeshStandardMaterial({ map: t.roadMossyPavers, roughness: 0.75, metalness: 0.12 }),
      new THREE.MeshStandardMaterial({ map: t.roadMuddyTracks, roughness: 0.92, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: t.roadCastleStone, roughness: 0.68, metalness: 0.18 })
    ];

    this.materials = {
      grassTop: this.grassMaterials[1],
      grassSide: this.grassMaterials[1],
      dirt: this.grassMaterials[4],
      stone: new THREE.MeshStandardMaterial({
        map: t.stoneBrick,
        roughness: 0.75,
        metalness: 0.12
      }),
      stoneBrick: new THREE.MeshStandardMaterial({
        map: t.stoneBrick,
        roughness: 0.72,
        metalness: 0.12
      }),
      cobblestone: this.roadMaterials[0],
      cobblestoneTrail: this.roadMaterials[0],
      stoneTileFloor: new THREE.MeshStandardMaterial({
        map: t.stoneTileFloor,
        roughness: 0.55,
        metalness: 0.25
      }),
      dungeonFloor: new THREE.MeshStandardMaterial({
        map: t.dungeonFloor,
        roughness: 0.6,
        metalness: 0.2
      }),
      carvedStonePillar: new THREE.MeshStandardMaterial({
        map: t.carvedStonePillar,
        roughness: 0.7,
        metalness: 0.15
      }),
      carpetRed: new THREE.MeshStandardMaterial({
        map: t.carpetRed,
        roughness: 0.85,
        metalness: 0.05
      }),
      crimsonCloth: new THREE.MeshStandardMaterial({
        map: t.clothCrimsonWool,
        roughness: 0.85,
        metalness: 0.05
      }),
      clothCrimsonWool: new THREE.MeshStandardMaterial({
        map: t.clothCrimsonWool,
        roughness: 0.85,
        metalness: 0.05
      }),
      clothHoodedCowl: new THREE.MeshStandardMaterial({
        map: t.clothHoodedCowl,
        roughness: 0.92,
        metalness: 0.02
      }),
      clothSorcererRune: new THREE.MeshStandardMaterial({
        map: t.clothSorcererRune,
        roughness: 0.75,
        metalness: 0.15
      }),
      armorSteelPlate: new THREE.MeshStandardMaterial({
        map: t.armorSteelPlate,
        roughness: 0.35,
        metalness: 0.88
      }),
      armorChainmailRing: new THREE.MeshStandardMaterial({
        map: t.armorChainmailRing,
        roughness: 0.45,
        metalness: 0.82
      }),
      leatherStuddedBrigandine: new THREE.MeshStandardMaterial({
        map: t.leatherStuddedBrigandine,
        roughness: 0.78,
        metalness: 0.18
      }),
      woodParquet: new THREE.MeshStandardMaterial({
        map: t.woodParquet,
        roughness: 0.65,
        metalness: 0.1
      }),
      darkOak: new THREE.MeshStandardMaterial({
        map: t.darkOak,
        roughness: 0.75,
        metalness: 0.1
      }),
      woodPlanks: new THREE.MeshStandardMaterial({
        map: t.woodPlanks,
        roughness: 0.8,
        metalness: 0.1
      }),
      woodBeam: new THREE.MeshStandardMaterial({
        map: t.woodBeam,
        roughness: 0.85,
        metalness: 0.1
      }),
      brassMetal: new THREE.MeshStandardMaterial({
        map: t.brassMetal,
        roughness: 0.35,
        metalness: 0.85
      }),
      iron: new THREE.MeshStandardMaterial({
        map: t.armorChainmailRing,
        roughness: 0.50,
        metalness: 0.85
      }),
      steelBlade: new THREE.MeshStandardMaterial({
        map: t.armorSteelPlate,
        roughness: 0.30,
        metalness: 0.90
      }),
      skeletonBone: new THREE.MeshStandardMaterial({
        color: 0xd2c8b4,
        roughness: 0.8,
        metalness: 0.05
      }),
      torchWood: new THREE.MeshStandardMaterial({
        map: t.barkCraggyPine,
        roughness: 0.9,
        metalness: 0.05
      }),
      torchFire: new THREE.MeshBasicMaterial({
        color: 0xff8822
      }),
      pineNeedles: this.foliageMaterials[0],
      pineBark: this.barkMaterials[0],
      alpineCrag: new THREE.MeshStandardMaterial({
        map: t.alpineCrag,
        roughness: 0.8,
        metalness: 0.15
      }),
      snow: new THREE.MeshStandardMaterial({
        color: 0xd8e4f0,
        roughness: 0.85,
        metalness: 0.05
      }),
      stainedGlass: new THREE.MeshStandardMaterial({
        map: t.stainedGlassGothic,
        roughness: 0.2,
        metalness: 0.3,
        transparent: true,
        opacity: 0.88
      }),
      stainedGlassGothic: new THREE.MeshStandardMaterial({
        map: t.stainedGlassGothic,
        roughness: 0.2,
        metalness: 0.3,
        transparent: true,
        opacity: 0.88
      }),
      heraldicLionBanner: new THREE.MeshStandardMaterial({
        map: t.heraldicLionBanner,
        roughness: 0.75,
        metalness: 0.08
      }),
      heraldicCrossBanner: new THREE.MeshStandardMaterial({
        map: t.heraldicCrossBanner,
        roughness: 0.75,
        metalness: 0.08
      }),
      globeTexture: new THREE.MeshStandardMaterial({
        map: t.globeTexture,
        roughness: 0.45,
        metalness: 0.25
      }),
      mapScroll: new THREE.MeshStandardMaterial({
        map: t.mapScroll,
        roughness: 0.9,
        metalness: 0.0
      }),
      bookshelf: new THREE.MeshStandardMaterial({
        map: t.darkOak,
        roughness: 0.8,
        metalness: 0.1
      }),
      plaqueHistoria: new THREE.MeshStandardMaterial({
        map: t.plaqueHistoria,
        roughness: 0.4,
        metalness: 0.8
      }),
      plaquePhilosophia: new THREE.MeshStandardMaterial({
        map: t.plaquePhilosophia,
        roughness: 0.4,
        metalness: 0.8
      }),
      plaqueScientia: new THREE.MeshStandardMaterial({
        map: t.plaqueScientia,
        roughness: 0.4,
        metalness: 0.8
      }),
      plaqueTheologia: new THREE.MeshStandardMaterial({
        map: t.plaqueTheologia,
        roughness: 0.4,
        metalness: 0.8
      }),
      plaqueArcanum: new THREE.MeshStandardMaterial({
        map: t.plaqueArcanum,
        roughness: 0.4,
        metalness: 0.8
      }),
      plaqueMythologia: new THREE.MeshStandardMaterial({
        map: t.plaqueMythologia,
        roughness: 0.4,
        metalness: 0.8
      }),
      bedGreen: new THREE.MeshStandardMaterial({
        color: 0x1d3824,
        roughness: 0.85,
        metalness: 0.05
      }),
      windowLattice: new THREE.MeshStandardMaterial({
        map: t.stainedGlassGothic,
        roughness: 0.2,
        metalness: 0.3,
        transparent: true,
        opacity: 0.85
      })
    };
  }
}
