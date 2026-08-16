import * as THREE from 'three';

export interface TextureMap {
  grassTop: THREE.CanvasTexture;
  grassSide: THREE.CanvasTexture;
  dirt: THREE.CanvasTexture;
  stoneBrick: THREE.CanvasTexture;
  cobblestone: THREE.CanvasTexture;
  woodPlanks: THREE.CanvasTexture;
  woodBeam: THREE.CanvasTexture;
  water: THREE.CanvasTexture;
  sand: THREE.CanvasTexture;
  carpetRed: THREE.CanvasTexture;
  iron: THREE.CanvasTexture;
  bedGreen: THREE.CanvasTexture;
  windowLattice: THREE.CanvasTexture;
  mapScroll: THREE.CanvasTexture;
  // Grand Library Additions
  bookshelfDense: THREE.CanvasTexture;
  bookshelfRare: THREE.CanvasTexture;
  heraldicLionBanner: THREE.CanvasTexture;
  heraldicCrossBanner: THREE.CanvasTexture;
  stainedGlassGothic: THREE.CanvasTexture;
  stoneTileFloor: THREE.CanvasTexture;
  carvedStonePillar: THREE.CanvasTexture;
  globeTexture: THREE.CanvasTexture;
  inscriptionPlaque: THREE.CanvasTexture;
}

export class TextureAtlas {
  public textures!: TextureMap;
  public materials!: Record<string, THREE.MeshStandardMaterial>;

  constructor() {
    this.initTextures();
    this.initMaterials();
  }

  private createCanvas(width = 16, height = 16): [HTMLCanvasElement, CanvasRenderingContext2D] {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    ctx.imageSmoothingEnabled = false;
    return [canvas, ctx];
  }

  private wrapTexture(canvas: HTMLCanvasElement): THREE.CanvasTexture {
    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.generateMipmaps = false;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }

  private initTextures(): void {
    // 1. Grass Top
    const [cGrass, ctxGrass] = this.createCanvas(16, 16);
    const gBase = ['#4d8234', '#559138', '#42702c', '#5da33e', '#3c6427'];
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const rand = Math.random();
        ctxGrass.fillStyle = rand > 0.8 ? gBase[3] : rand > 0.5 ? gBase[1] : rand > 0.2 ? gBase[0] : gBase[2];
        ctxGrass.fillRect(x, y, 1, 1);
      }
    }
    ctxGrass.fillStyle = '#6ab847';
    ctxGrass.fillRect(3, 4, 1, 2);
    ctxGrass.fillRect(11, 2, 1, 2);
    ctxGrass.fillRect(8, 12, 1, 2);
    ctxGrass.fillRect(14, 9, 1, 2);

    // 2. Grass Side
    const [cGrassSide, ctxGrassSide] = this.createCanvas(16, 16);
    const dBase = ['#6e4c29', '#5e3e20', '#7a552e', '#52361b', '#855d33'];
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const rand = Math.random();
        ctxGrassSide.fillStyle = rand > 0.6 ? dBase[0] : rand > 0.3 ? dBase[1] : rand > 0.1 ? dBase[2] : dBase[3];
        ctxGrassSide.fillRect(x, y, 1, 1);
      }
    }
    for (let x = 0; x < 16; x++) {
      const drop = (x % 3 === 0) ? 4 : (x % 2 === 0) ? 3 : 2;
      for (let y = 0; y < drop; y++) {
        ctxGrassSide.fillStyle = y === 0 ? '#5da33e' : '#4d8234';
        ctxGrassSide.fillRect(x, y, 1, 1);
      }
      if ((x * 7) % 5 === 0 && drop < 5) {
        ctxGrassSide.fillStyle = '#3c6427';
        ctxGrassSide.fillRect(x, drop, 1, 1);
      }
    }

    // 3. Dirt
    const [cDirt, ctxDirt] = this.createCanvas(16, 16);
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const rand = Math.random();
        ctxDirt.fillStyle = rand > 0.7 ? dBase[4] : rand > 0.4 ? dBase[0] : rand > 0.2 ? dBase[1] : dBase[3];
        ctxDirt.fillRect(x, y, 1, 1);
      }
    }
    ctxDirt.fillStyle = '#9e7347';
    ctxDirt.fillRect(4, 7, 2, 1);
    ctxDirt.fillRect(11, 12, 1, 2);

    // 4. Stone Brick
    const [cBrick, ctxBrick] = this.createCanvas(16, 16);
    const bBase = ['#737984', '#616773', '#808794', '#555b66'];
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const rand = Math.random();
        ctxBrick.fillStyle = rand > 0.7 ? bBase[2] : rand > 0.4 ? bBase[0] : rand > 0.2 ? bBase[1] : bBase[3];
        ctxBrick.fillRect(x, y, 1, 1);
      }
    }
    ctxBrick.fillStyle = '#33373f';
    ctxBrick.fillRect(0, 0, 16, 1);
    ctxBrick.fillRect(0, 8, 16, 1);
    ctxBrick.fillRect(0, 0, 1, 8);
    ctxBrick.fillRect(8, 0, 1, 8);
    ctxBrick.fillRect(4, 8, 1, 8);
    ctxBrick.fillRect(12, 8, 1, 8);

    // 5. Cobblestone
    const [cCobble, ctxCobble] = this.createCanvas(16, 16);
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const rand = Math.random();
        ctxCobble.fillStyle = rand > 0.6 ? '#6e737d' : rand > 0.3 ? '#5b606a' : '#4e525a';
        ctxCobble.fillRect(x, y, 1, 1);
      }
    }
    ctxCobble.fillStyle = '#383b42';
    ctxCobble.fillRect(2, 2, 4, 1);
    ctxCobble.fillRect(2, 2, 1, 4);
    ctxCobble.fillRect(8, 6, 5, 1);
    ctxCobble.fillRect(8, 6, 1, 4);
    ctxCobble.fillRect(3, 10, 4, 1);
    ctxCobble.fillRect(11, 12, 4, 1);

    // 6. Wood Planks
    const [cWood, ctxWood] = this.createCanvas(16, 16);
    const wBase = ['#8d633b', '#7a5430', '#9c6f44', '#6c4929'];
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const rand = Math.random();
        ctxWood.fillStyle = rand > 0.7 ? wBase[2] : rand > 0.4 ? wBase[0] : rand > 0.2 ? wBase[1] : wBase[3];
        ctxWood.fillRect(x, y, 1, 1);
      }
    }
    ctxWood.fillStyle = '#4a3018';
    ctxWood.fillRect(0, 0, 16, 1);
    ctxWood.fillRect(0, 4, 16, 1);
    ctxWood.fillRect(0, 8, 16, 1);
    ctxWood.fillRect(0, 12, 16, 1);
    ctxWood.fillRect(5, 0, 1, 4);
    ctxWood.fillRect(11, 4, 1, 4);
    ctxWood.fillRect(3, 8, 1, 4);
    ctxWood.fillRect(13, 12, 1, 4);

    // 7. Wood Beam
    const [cBeam, ctxBeam] = this.createCanvas(16, 16);
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const rand = Math.random();
        ctxBeam.fillStyle = rand > 0.5 ? '#5c3d21' : '#4d3219';
        ctxBeam.fillRect(x, y, 1, 1);
      }
    }
    ctxBeam.fillStyle = '#3b2512';
    ctxBeam.fillRect(0, 0, 16, 2);
    ctxBeam.fillRect(0, 14, 16, 2);
    ctxBeam.fillRect(0, 0, 2, 16);
    ctxBeam.fillRect(14, 0, 2, 16);

    // 8. Water
    const [cWater, ctxWater] = this.createCanvas(16, 16);
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const r = Math.random();
        ctxWater.fillStyle = r > 0.7 ? '#2a6ec4' : r > 0.4 ? '#215aa4' : '#1a4987';
        ctxWater.fillRect(x, y, 1, 1);
      }
    }
    ctxWater.fillStyle = '#5dade2';
    ctxWater.fillRect(2, 3, 4, 1);
    ctxWater.fillRect(10, 7, 5, 1);
    ctxWater.fillRect(4, 12, 6, 1);
    ctxWater.fillRect(12, 14, 3, 1);

    // 9. Sand
    const [cSand, ctxSand] = this.createCanvas(16, 16);
    const sBase = ['#d8be7b', '#ccb06e', '#dfc788', '#bfa260'];
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const r = Math.random();
        ctxSand.fillStyle = r > 0.7 ? sBase[2] : r > 0.4 ? sBase[0] : r > 0.2 ? sBase[1] : sBase[3];
        ctxSand.fillRect(x, y, 1, 1);
      }
    }

    // 10. Carpet Red
    const [cCarpet, ctxCarpet] = this.createCanvas(16, 16);
    ctxCarpet.fillStyle = '#831e1e';
    ctxCarpet.fillRect(0, 0, 16, 16);
    ctxCarpet.fillStyle = '#cda250';
    ctxCarpet.fillRect(1, 1, 14, 1);
    ctxCarpet.fillRect(1, 14, 14, 1);
    ctxCarpet.fillRect(1, 1, 1, 14);
    ctxCarpet.fillRect(14, 1, 1, 14);
    ctxCarpet.fillStyle = '#651414';
    ctxCarpet.fillRect(3, 3, 10, 10);
    for (let y = 4; y < 12; y += 2) {
      for (let x = 4; x < 12; x += 2) {
        ctxCarpet.fillStyle = '#7a1919';
        ctxCarpet.fillRect(x, y, 1, 1);
      }
    }

    // 11. Iron / Metal
    const [cIron, ctxIron] = this.createCanvas(16, 16);
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const r = Math.random();
        ctxIron.fillStyle = r > 0.6 ? '#545863' : r > 0.3 ? '#42454f' : '#33363f';
        ctxIron.fillRect(x, y, 1, 1);
      }
    }
    ctxIron.fillStyle = '#787d8c';
    ctxIron.fillRect(1, 1, 14, 1);
    ctxIron.fillRect(1, 1, 1, 14);

    // 12. Bed Green Duvet
    const [cBed, ctxBed] = this.createCanvas(16, 16);
    ctxBed.fillStyle = '#2d4b3b';
    ctxBed.fillRect(0, 0, 16, 16);
    ctxBed.fillStyle = '#e8e8e8';
    ctxBed.fillRect(2, 1, 12, 4);
    ctxBed.fillStyle = '#c4c4c4';
    ctxBed.fillRect(2, 4, 12, 1);
    ctxBed.fillStyle = '#22382c';
    ctxBed.fillRect(0, 6, 16, 1);
    ctxBed.fillStyle = '#39604b';
    ctxBed.fillRect(0, 7, 16, 1);

    // 13. Window Lattice
    const [cWindow, ctxWindow] = this.createCanvas(16, 16);
    ctxWindow.fillStyle = '#754a24';
    ctxWindow.fillRect(0, 0, 16, 16);
    ctxWindow.fillStyle = '#ffe9b3';
    ctxWindow.fillRect(2, 2, 12, 12);
    ctxWindow.fillStyle = '#8b6534';
    ctxWindow.fillRect(8, 2, 1, 12);
    ctxWindow.fillRect(2, 8, 12, 1);

    // 14. Map Scroll
    const [cMap, ctxMap] = this.createCanvas(16, 16);
    ctxMap.fillStyle = '#d4be88';
    ctxMap.fillRect(0, 0, 16, 16);
    ctxMap.fillStyle = '#8a5d2a';
    ctxMap.fillRect(0, 0, 16, 1);
    ctxMap.fillRect(0, 15, 16, 1);
    ctxMap.fillStyle = '#4a351d';
    ctxMap.fillRect(3, 4, 5, 3);
    ctxMap.fillRect(4, 7, 6, 2);

    // -------------------------------------------------------------
    // GRAND LIBRARY TEXTURES
    // -------------------------------------------------------------

    // 15. Dense Bookshelf (Multi-colored pixelated leather spines with gold ribs)
    const [cBooksDense, ctxBooksDense] = this.createCanvas(16, 16);
    ctxBooksDense.fillStyle = '#4e331c';
    ctxBooksDense.fillRect(0, 0, 16, 16); // Wood frame background
    // Wood shelf dividers at y=0, y=8, y=15
    ctxBooksDense.fillStyle = '#382210';
    ctxBooksDense.fillRect(0, 0, 16, 1);
    ctxBooksDense.fillRect(0, 7, 16, 2);
    ctxBooksDense.fillRect(0, 15, 16, 1);

    const bookColors = ['#9e2b2b', '#2b4b8a', '#2d6b38', '#8a5e2b', '#6d3284', '#3b3b44', '#c98a2c'];
    // Top shelf books (y = 1 to 6)
    let bx = 1;
    while (bx < 15) {
      const bWidth = (bx % 2 === 0) ? 2 : 1;
      const bHeight = 5 + Math.floor(Math.sin(bx * 3) * 1.5);
      const col = bookColors[(bx * 3) % bookColors.length];
      ctxBooksDense.fillStyle = col;
      ctxBooksDense.fillRect(bx, 7 - bHeight, bWidth, bHeight);
      // Gold ribbing on spines
      if (bx % 3 === 0) {
        ctxBooksDense.fillStyle = '#ffd700';
        ctxBooksDense.fillRect(bx, 7 - bHeight + 1, bWidth, 1);
        ctxBooksDense.fillRect(bx, 7 - 2, bWidth, 1);
      }
      bx += bWidth;
    }
    // Bottom shelf books (y = 9 to 14)
    bx = 1;
    while (bx < 15) {
      const bWidth = (bx % 3 === 0) ? 2 : 1;
      const bHeight = 5 + Math.floor(Math.cos(bx * 4) * 1.5);
      const col = bookColors[(bx * 5 + 2) % bookColors.length];
      ctxBooksDense.fillStyle = col;
      ctxBooksDense.fillRect(bx, 15 - bHeight, bWidth, bHeight);
      if (bx % 2 === 0) {
        ctxBooksDense.fillStyle = '#e5c158';
        ctxBooksDense.fillRect(bx, 15 - bHeight + 1, bWidth, 1);
      }
      bx += bWidth;
    }

    // 16. Rare Bookshelf (Glowing Arcane Grimoires & Gilded Tomes)
    const [cBooksRare, ctxBooksRare] = this.createCanvas(16, 16);
    ctxBooksRare.fillStyle = '#2d1b38';
    ctxBooksRare.fillRect(0, 0, 16, 16);
    ctxBooksRare.fillStyle = '#1c1024';
    ctxBooksRare.fillRect(0, 0, 16, 2);
    ctxBooksRare.fillRect(0, 7, 16, 2);
    ctxBooksRare.fillRect(0, 14, 16, 2);

    const rareColors = ['#1d4370', '#5a1d70', '#701d2d', '#1d705c', '#c28b17'];
    for (let rbx = 1; rbx < 15; rbx += 2) {
      ctxBooksRare.fillStyle = rareColors[(rbx * 2) % rareColors.length];
      ctxBooksRare.fillRect(rbx, 2, 2, 5);
      ctxBooksRare.fillRect(rbx, 9, 2, 5);
      // Glowing arcane glyphs
      ctxBooksRare.fillStyle = '#8ce8ff';
      ctxBooksRare.fillRect(rbx + 1, 4, 1, 1);
      ctxBooksRare.fillStyle = '#ffd269';
      ctxBooksRare.fillRect(rbx, 11, 1, 1);
    }

    // 17. Heraldic Lion Banner (Royal blue banner with rampant golden lion)
    const [cBannerLion, ctxBannerLion] = this.createCanvas(16, 32);
    ctxBannerLion.fillStyle = '#1a2b58';
    ctxBannerLion.fillRect(0, 0, 16, 30);
    // Gold ornamental border
    ctxBannerLion.fillStyle = '#e8b835';
    ctxBannerLion.fillRect(1, 1, 14, 1);
    ctxBannerLion.fillRect(1, 1, 1, 28);
    ctxBannerLion.fillRect(14, 1, 1, 28);
    // Banner swallowtail bottom
    ctxBannerLion.fillStyle = '#0f1a38';
    ctxBannerLion.fillRect(0, 30, 8, 2);
    ctxBannerLion.fillRect(8, 30, 8, 2);
    ctxBannerLion.clearRect(4, 28, 8, 4);

    // Golden Heraldic Lion Silhouette
    ctxBannerLion.fillStyle = '#f7cb45';
    // Lion head & mane
    ctxBannerLion.fillRect(6, 6, 4, 4);
    ctxBannerLion.fillRect(5, 7, 1, 2);
    ctxBannerLion.fillRect(10, 7, 1, 2);
    // Crown on lion head
    ctxBannerLion.fillStyle = '#ffffff';
    ctxBannerLion.fillRect(6, 5, 4, 1);
    ctxBannerLion.fillStyle = '#f7cb45';
    // Body & spine
    ctxBannerLion.fillRect(7, 10, 3, 7);
    // Front raised paws (rampant stance)
    ctxBannerLion.fillRect(4, 8, 2, 2);
    ctxBannerLion.fillRect(3, 7, 1, 2);
    ctxBannerLion.fillRect(5, 11, 2, 2);
    ctxBannerLion.fillRect(3, 12, 2, 1);
    // Hind legs
    ctxBannerLion.fillRect(6, 17, 2, 4);
    ctxBannerLion.fillRect(4, 20, 3, 2);
    ctxBannerLion.fillRect(9, 17, 3, 3);
    ctxBannerLion.fillRect(11, 19, 2, 2);
    // Curled tufted tail
    ctxBannerLion.fillRect(10, 12, 1, 4);
    ctxBannerLion.fillRect(11, 11, 2, 2);
    ctxBannerLion.fillRect(13, 9, 2, 3);

    // 18. Heraldic Cross Banner (Crimson velvet with ornate gold cross)
    const [cBannerCross, ctxBannerCross] = this.createCanvas(16, 32);
    ctxBannerCross.fillStyle = '#6b1318';
    ctxBannerCross.fillRect(0, 0, 16, 30);
    ctxBannerCross.fillStyle = '#d4a839';
    ctxBannerCross.fillRect(1, 1, 14, 1);
    ctxBannerCross.fillRect(1, 1, 1, 28);
    ctxBannerCross.fillRect(14, 1, 1, 28);

    // Golden Cross
    ctxBannerCross.fillStyle = '#f7d057';
    ctxBannerCross.fillRect(7, 5, 2, 18); // Vertical bar
    ctxBannerCross.fillRect(4, 9, 8, 2);  // Horizontal crossbar
    // Flared cross tips
    ctxBannerCross.fillRect(6, 4, 4, 1);
    ctxBannerCross.fillRect(6, 23, 4, 1);
    ctxBannerCross.fillRect(3, 8, 1, 4);
    ctxBannerCross.fillRect(12, 8, 1, 4);

    // 19. Stained Glass Gothic Window
    const [cStained, ctxStained] = this.createCanvas(16, 32);
    ctxStained.fillStyle = '#22252c';
    ctxStained.fillRect(0, 0, 16, 32);
    // Gothic Arch Mosaic Panes
    const gemColors = ['#ad2626', '#1e4887', '#1f7048', '#b8891d', '#5d2678', '#267874'];
    for (let py = 2; py < 30; py += 3) {
      for (let px = 2; px < 14; px += 3) {
        ctxStained.fillStyle = gemColors[(px * 4 + py * 2) % gemColors.length];
        ctxStained.fillRect(px, py, 2, 2);
      }
    }
    // Lead traceries
    ctxStained.fillStyle = '#15171c';
    ctxStained.fillRect(0, 0, 16, 2);
    ctxStained.fillRect(0, 30, 16, 2);
    ctxStained.fillRect(0, 0, 2, 32);
    ctxStained.fillRect(14, 0, 2, 32);
    ctxStained.fillRect(7, 0, 2, 32);
    ctxStained.fillRect(0, 15, 16, 2);

    // 20. Stone Tile Floor (Cathedral polished checkered grey flagstones)
    const [cStoneTile, ctxStoneTile] = this.createCanvas(16, 16);
    ctxStoneTile.fillStyle = '#7a7f8a';
    ctxStoneTile.fillRect(0, 0, 8, 8);
    ctxStoneTile.fillRect(8, 8, 8, 8);
    ctxStoneTile.fillStyle = '#5c616b';
    ctxStoneTile.fillRect(8, 0, 8, 8);
    ctxStoneTile.fillRect(0, 8, 8, 8);
    // Mortar lines
    ctxStoneTile.fillStyle = '#363940';
    ctxStoneTile.fillRect(0, 0, 16, 1);
    ctxStoneTile.fillRect(0, 8, 16, 1);
    ctxStoneTile.fillRect(0, 0, 1, 16);
    ctxStoneTile.fillRect(8, 0, 1, 16);

    // 21. Carved Stone Pillar
    const [cPillar, ctxPillar] = this.createCanvas(16, 16);
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const shade = (x % 4 === 0) ? '#4a4f58' : (x % 4 === 1) ? '#767c87' : '#616773';
        ctxPillar.fillStyle = shade;
        ctxPillar.fillRect(x, y, 1, 1);
      }
    }
    ctxPillar.fillStyle = '#383d45';
    ctxPillar.fillRect(0, 0, 16, 1);
    ctxPillar.fillRect(0, 15, 16, 1);

    // 22. Celestial Globe Texture
    const [cGlobe, ctxGlobe] = this.createCanvas(16, 16);
    ctxGlobe.fillStyle = '#224a73'; // Ocean azure
    ctxGlobe.fillRect(0, 0, 16, 16);
    // Continents
    ctxGlobe.fillStyle = '#8f7743';
    ctxGlobe.fillRect(3, 3, 5, 4);
    ctxGlobe.fillRect(2, 5, 4, 5);
    ctxGlobe.fillRect(9, 4, 5, 3);
    ctxGlobe.fillRect(10, 8, 4, 5);
    // Latitude / Equator ring
    ctxGlobe.fillStyle = '#dfb550';
    ctxGlobe.fillRect(0, 7, 16, 1);

    // 23. Inscription Plaque ("VERITAS" / "WISDOM IS THE LIGHT")
    const [cPlaque, ctxPlaque] = this.createCanvas(16, 16);
    ctxPlaque.fillStyle = '#c7b28b';
    ctxPlaque.fillRect(0, 0, 16, 16);
    ctxPlaque.fillStyle = '#614620';
    ctxPlaque.fillRect(0, 0, 16, 1);
    ctxPlaque.fillRect(0, 15, 16, 1);
    ctxPlaque.fillRect(0, 0, 1, 16);
    ctxPlaque.fillRect(15, 0, 1, 16);
    ctxPlaque.fillStyle = '#3b250d';
    // Carved lettering simulation
    ctxPlaque.fillRect(3, 4, 10, 2);
    ctxPlaque.fillRect(4, 8, 8, 2);
    ctxPlaque.fillRect(5, 12, 6, 2);

    this.textures = {
      grassTop: this.wrapTexture(cGrass),
      grassSide: this.wrapTexture(cGrassSide),
      dirt: this.wrapTexture(cDirt),
      stoneBrick: this.wrapTexture(cBrick),
      cobblestone: this.wrapTexture(cCobble),
      woodPlanks: this.wrapTexture(cWood),
      woodBeam: this.wrapTexture(cBeam),
      water: this.wrapTexture(cWater),
      sand: this.wrapTexture(cSand),
      carpetRed: this.wrapTexture(cCarpet),
      iron: this.wrapTexture(cIron),
      bedGreen: this.wrapTexture(cBed),
      windowLattice: this.wrapTexture(cWindow),
      mapScroll: this.wrapTexture(cMap),
      // Grand Library Textures
      bookshelfDense: this.wrapTexture(cBooksDense),
      bookshelfRare: this.wrapTexture(cBooksRare),
      heraldicLionBanner: this.wrapTexture(cBannerLion),
      heraldicCrossBanner: this.wrapTexture(cBannerCross),
      stainedGlassGothic: this.wrapTexture(cStained),
      stoneTileFloor: this.wrapTexture(cStoneTile),
      carvedStonePillar: this.wrapTexture(cPillar),
      globeTexture: this.wrapTexture(cGlobe),
      inscriptionPlaque: this.wrapTexture(cPlaque)
    };
  }

  private initMaterials(): void {
    const roughness = 0.85;
    const metalness = 0.05;

    this.materials = {
      grassTop: new THREE.MeshStandardMaterial({
        map: this.textures.grassTop,
        roughness,
        metalness,
        side: THREE.DoubleSide
      }),
      grassSide: new THREE.MeshStandardMaterial({
        map: this.textures.grassSide,
        roughness,
        metalness,
        side: THREE.DoubleSide
      }),
      dirt: new THREE.MeshStandardMaterial({
        map: this.textures.dirt,
        roughness: 0.95,
        metalness: 0.0,
        side: THREE.DoubleSide
      }),
      stoneBrick: new THREE.MeshStandardMaterial({
        map: this.textures.stoneBrick,
        roughness: 0.8,
        metalness: 0.1,
        side: THREE.DoubleSide
      }),
      cobblestone: new THREE.MeshStandardMaterial({
        map: this.textures.cobblestone,
        roughness: 0.85,
        metalness: 0.1,
        side: THREE.DoubleSide
      }),
      woodPlanks: new THREE.MeshStandardMaterial({
        map: this.textures.woodPlanks,
        roughness: 0.75,
        metalness: 0.05,
        side: THREE.DoubleSide
      }),
      woodBeam: new THREE.MeshStandardMaterial({
        map: this.textures.woodBeam,
        roughness: 0.8,
        metalness: 0.05,
        side: THREE.DoubleSide
      }),
      water: new THREE.MeshStandardMaterial({
        map: this.textures.water,
        roughness: 0.15,
        metalness: 0.2,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      }),
      sand: new THREE.MeshStandardMaterial({
        map: this.textures.sand,
        roughness: 0.95,
        metalness: 0.0,
        side: THREE.DoubleSide
      }),
      carpetRed: new THREE.MeshStandardMaterial({
        map: this.textures.carpetRed,
        roughness: 0.9,
        metalness: 0.0,
        side: THREE.DoubleSide
      }),
      iron: new THREE.MeshStandardMaterial({
        map: this.textures.iron,
        roughness: 0.4,
        metalness: 0.7,
        side: THREE.DoubleSide
      }),
      bedGreen: new THREE.MeshStandardMaterial({
        map: this.textures.bedGreen,
        roughness: 0.85,
        metalness: 0.0,
        side: THREE.DoubleSide
      }),
      windowLattice: new THREE.MeshStandardMaterial({
        map: this.textures.windowLattice,
        emissive: new THREE.Color(0xffd57a),
        emissiveIntensity: 0.4,
        roughness: 0.3,
        side: THREE.DoubleSide
      }),
      mapScroll: new THREE.MeshStandardMaterial({
        map: this.textures.mapScroll,
        roughness: 0.9,
        side: THREE.DoubleSide
      }),

      // Grand Library Materials
      bookshelfDense: new THREE.MeshStandardMaterial({
        map: this.textures.bookshelfDense,
        roughness: 0.75,
        metalness: 0.05,
        side: THREE.DoubleSide
      }),
      bookshelfRare: new THREE.MeshStandardMaterial({
        map: this.textures.bookshelfRare,
        roughness: 0.65,
        metalness: 0.15,
        emissive: new THREE.Color(0x3a2254),
        emissiveIntensity: 0.25,
        side: THREE.DoubleSide
      }),
      heraldicLionBanner: new THREE.MeshStandardMaterial({
        map: this.textures.heraldicLionBanner,
        roughness: 0.9,
        metalness: 0.1,
        side: THREE.DoubleSide
      }),
      heraldicCrossBanner: new THREE.MeshStandardMaterial({
        map: this.textures.heraldicCrossBanner,
        roughness: 0.9,
        metalness: 0.1,
        side: THREE.DoubleSide
      }),
      stainedGlassGothic: new THREE.MeshStandardMaterial({
        map: this.textures.stainedGlassGothic,
        emissive: new THREE.Color(0xffd485),
        emissiveIntensity: 0.75,
        roughness: 0.2,
        side: THREE.DoubleSide
      }),
      stoneTileFloor: new THREE.MeshStandardMaterial({
        map: this.textures.stoneTileFloor,
        roughness: 0.7,
        metalness: 0.1,
        side: THREE.DoubleSide
      }),
      carvedStonePillar: new THREE.MeshStandardMaterial({
        map: this.textures.carvedStonePillar,
        roughness: 0.8,
        metalness: 0.08,
        side: THREE.DoubleSide
      }),
      globeTexture: new THREE.MeshStandardMaterial({
        map: this.textures.globeTexture,
        roughness: 0.6,
        metalness: 0.2,
        side: THREE.DoubleSide
      }),
      inscriptionPlaque: new THREE.MeshStandardMaterial({
        map: this.textures.inscriptionPlaque,
        roughness: 0.85,
        metalness: 0.05,
        side: THREE.DoubleSide
      })
    };
  }
}
