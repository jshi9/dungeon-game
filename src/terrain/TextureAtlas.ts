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
  plaqueHistoria: THREE.CanvasTexture;
  plaquePhilosophia: THREE.CanvasTexture;
  plaqueScientia: THREE.CanvasTexture;
  plaqueTheologia: THREE.CanvasTexture;
  plaqueArcanum: THREE.CanvasTexture;
  plaqueMythologia: THREE.CanvasTexture;
  darkOak: THREE.CanvasTexture;
  brassMetal: THREE.CanvasTexture;
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

    // 4. Stone Brick (Ashlar Gothic Masonry 32x32)
    const [cBrick, ctxBrick] = this.createCanvas(32, 32);
    for (let y = 0; y < 32; y++) {
      for (let x = 0; x < 32; x++) {
        const noise = Math.sin(x * 0.5) * Math.cos(y * 0.5);
        ctxBrick.fillStyle = noise > 0.3 ? '#6e7480' : noise > -0.3 ? '#585e6a' : '#494e58';
        ctxBrick.fillRect(x, y, 1, 1);
      }
    }
    // Mortar Courses
    ctxBrick.fillStyle = '#262930';
    ctxBrick.fillRect(0, 0, 32, 1);
    ctxBrick.fillRect(0, 16, 32, 1);
    ctxBrick.fillRect(0, 0, 1, 16);
    ctxBrick.fillRect(16, 0, 1, 16);
    ctxBrick.fillRect(8, 16, 1, 16);
    ctxBrick.fillRect(24, 16, 1, 16);
    // Highlights on stone edges
    ctxBrick.fillStyle = '#828896';
    ctxBrick.fillRect(1, 1, 14, 1);
    ctxBrick.fillRect(17, 1, 14, 1);
    ctxBrick.fillRect(9, 17, 14, 1);
    ctxBrick.fillRect(25, 17, 6, 1);

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

    // 10. Carpet Red (Rich Crimson Velvet with Gold Filigree Border 32x32)
    const [cCarpet, ctxCarpet] = this.createCanvas(32, 32);
    ctxCarpet.fillStyle = '#80141a'; // Deep crimson base
    ctxCarpet.fillRect(0, 0, 32, 32);

    // Subtle velvet weave texture
    for (let y = 0; y < 32; y += 2) {
      for (let x = 0; x < 32; x += 2) {
        ctxCarpet.fillStyle = ((x + y) % 4 === 0) ? '#680e14' : '#941920';
        ctxCarpet.fillRect(x, y, 1, 1);
      }
    }

    // Outer Gilded Braided Border
    ctxCarpet.fillStyle = '#d4af37';
    ctxCarpet.fillRect(2, 2, 28, 1);
    ctxCarpet.fillRect(2, 29, 28, 1);
    ctxCarpet.fillRect(2, 2, 1, 28);
    ctxCarpet.fillRect(29, 2, 1, 28);

    // Inner Gold Accent Line
    ctxCarpet.fillStyle = '#ffd700';
    ctxCarpet.fillRect(4, 4, 24, 1);
    ctxCarpet.fillRect(4, 27, 24, 1);
    ctxCarpet.fillRect(4, 4, 1, 24);
    ctxCarpet.fillRect(27, 4, 1, 24);

    // Center Gold Fleur-de-lis / Diamond Motif
    ctxCarpet.fillStyle = '#ffd700';
    ctxCarpet.fillRect(15, 12, 2, 8);
    ctxCarpet.fillRect(12, 15, 8, 2);
    ctxCarpet.fillRect(14, 14, 4, 4);

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

    // 15. Dense Bookshelf
    const [cBooksDense, ctxBooksDense] = this.createCanvas(16, 16);
    ctxBooksDense.fillStyle = '#362112';
    ctxBooksDense.fillRect(0, 0, 16, 16);
    ctxBooksDense.fillStyle = '#201208';
    ctxBooksDense.fillRect(0, 0, 16, 1);
    ctxBooksDense.fillRect(0, 7, 16, 2);
    ctxBooksDense.fillRect(0, 15, 16, 1);

    const bookColors = ['#8b181e', '#1c3761', '#1d5334', '#542d17', '#521c63', '#222226', '#8c6227'];
    let bx = 1;
    while (bx < 15) {
      const bWidth = (bx % 2 === 0) ? 2 : 1;
      const bHeight = 5 + Math.floor(Math.sin(bx * 3) * 1.5);
      const col = bookColors[(bx * 3) % bookColors.length];
      ctxBooksDense.fillStyle = col;
      ctxBooksDense.fillRect(bx, 7 - bHeight, bWidth, bHeight);
      if (bx % 3 === 0) {
        ctxBooksDense.fillStyle = '#ffd700';
        ctxBooksDense.fillRect(bx, 7 - bHeight + 1, bWidth, 1);
        ctxBooksDense.fillRect(bx, 7 - 2, bWidth, 1);
      }
      bx += bWidth;
    }
    bx = 1;
    while (bx < 15) {
      const bWidth = (bx % 3 === 0) ? 2 : 1;
      const bHeight = 5 + Math.floor(Math.cos(bx * 4) * 1.5);
      const col = bookColors[(bx * 5 + 2) % bookColors.length];
      ctxBooksDense.fillStyle = col;
      ctxBooksDense.fillRect(bx, 15 - bHeight, bWidth, bHeight);
      if (bx % 2 === 0) {
        ctxBooksDense.fillStyle = '#e5b84c';
        ctxBooksDense.fillRect(bx, 15 - bHeight + 1, bWidth, 1);
      }
      bx += bWidth;
    }

    // 16. Rare Bookshelf
    const [cBooksRare, ctxBooksRare] = this.createCanvas(16, 16);
    ctxBooksRare.fillStyle = '#22142a';
    ctxBooksRare.fillRect(0, 0, 16, 16);
    ctxBooksRare.fillStyle = '#140a1c';
    ctxBooksRare.fillRect(0, 0, 16, 2);
    ctxBooksRare.fillRect(0, 7, 16, 2);
    ctxBooksRare.fillRect(0, 14, 16, 2);

    const rareColors = ['#162d4d', '#421654', '#591624', '#164d40', '#9c6f14'];
    for (let rbx = 1; rbx < 15; rbx += 2) {
      ctxBooksRare.fillStyle = rareColors[(rbx * 2) % rareColors.length];
      ctxBooksRare.fillRect(rbx, 2, 2, 5);
      ctxBooksRare.fillRect(rbx, 9, 2, 5);
      ctxBooksRare.fillStyle = '#8ce8ff';
      ctxBooksRare.fillRect(rbx + 1, 4, 1, 1);
      ctxBooksRare.fillStyle = '#ffd269';
      ctxBooksRare.fillRect(rbx, 11, 1, 1);
    }

    // 17. Heraldic Lion Banner (32x64 High Detail Velvet Tapestry)
    const [cBannerLion, ctxBannerLion] = this.createCanvas(32, 64);
    ctxBannerLion.fillStyle = '#142247'; // Royal deep blue velvet
    ctxBannerLion.fillRect(0, 0, 32, 60);

    // Ornate Gold Filigree Border
    ctxBannerLion.fillStyle = '#d4af37';
    ctxBannerLion.fillRect(2, 2, 28, 2);
    ctxBannerLion.fillRect(2, 2, 2, 56);
    ctxBannerLion.fillRect(28, 2, 2, 56);
    ctxBannerLion.fillStyle = '#ffd700';
    ctxBannerLion.fillRect(4, 4, 24, 1);
    ctxBannerLion.fillRect(4, 4, 1, 52);
    ctxBannerLion.fillRect(27, 4, 1, 52);

    // Swallowtail bottom fringe
    ctxBannerLion.fillStyle = '#0b1329';
    ctxBannerLion.fillRect(0, 60, 16, 4);
    ctxBannerLion.fillRect(16, 60, 16, 4);
    ctxBannerLion.clearRect(8, 56, 16, 8);

    // Gold Tassels at bottom tips
    ctxBannerLion.fillStyle = '#f5cb42';
    ctxBannerLion.fillRect(2, 58, 4, 6);
    ctxBannerLion.fillRect(26, 58, 4, 6);

    // Crowned Golden Rampant Lion Crest
    ctxBannerLion.fillStyle = '#ffffff'; // Platinum Crown
    ctxBannerLion.fillRect(12, 10, 8, 3);
    ctxBannerLion.fillRect(10, 8, 3, 2);
    ctxBannerLion.fillRect(15, 8, 2, 2);
    ctxBannerLion.fillRect(19, 8, 3, 2);

    ctxBannerLion.fillStyle = '#ffd700';
    // Lion Head & Mane
    ctxBannerLion.fillRect(11, 13, 10, 8);
    ctxBannerLion.fillRect(9, 15, 3, 4);
    ctxBannerLion.fillRect(20, 15, 3, 4);
    // Torso
    ctxBannerLion.fillRect(13, 21, 6, 14);
    // Paws & Claws
    ctxBannerLion.fillRect(7, 17, 5, 4);
    ctxBannerLion.fillRect(5, 15, 3, 3);
    ctxBannerLion.fillRect(9, 23, 5, 3);
    ctxBannerLion.fillRect(5, 24, 4, 3);
    // Hind legs
    ctxBannerLion.fillRect(11, 35, 4, 8);
    ctxBannerLion.fillRect(7, 41, 6, 4);
    ctxBannerLion.fillRect(17, 35, 6, 6);
    ctxBannerLion.fillRect(21, 39, 5, 4);
    // Tail
    ctxBannerLion.fillRect(19, 25, 2, 8);
    ctxBannerLion.fillRect(21, 23, 4, 4);
    ctxBannerLion.fillRect(25, 19, 4, 6);

    // 18. Heraldic Cross Banner (32x64 Crimson Velvet & Gold Cross)
    const [cBannerCross, ctxBannerCross] = this.createCanvas(32, 64);
    ctxBannerCross.fillStyle = '#6e1218';
    ctxBannerCross.fillRect(0, 0, 32, 60);

    ctxBannerCross.fillStyle = '#d4af37';
    ctxBannerCross.fillRect(2, 2, 28, 2);
    ctxBannerCross.fillRect(2, 2, 2, 56);
    ctxBannerCross.fillRect(28, 2, 2, 56);
    ctxBannerCross.fillStyle = '#ffd700';
    ctxBannerCross.fillRect(4, 4, 24, 1);
    ctxBannerCross.fillRect(4, 4, 1, 52);
    ctxBannerCross.fillRect(27, 4, 1, 52);

    ctxBannerCross.fillStyle = '#42090d';
    ctxBannerCross.fillRect(0, 60, 16, 4);
    ctxBannerCross.fillRect(16, 60, 16, 4);
    ctxBannerCross.clearRect(8, 56, 16, 8);

    ctxBannerCross.fillStyle = '#f5cb42';
    ctxBannerCross.fillRect(2, 58, 4, 6);
    ctxBannerCross.fillRect(26, 58, 4, 6);

    // Grand Byzantine Gilded Cross
    ctxBannerCross.fillStyle = '#ffd700';
    ctxBannerCross.fillRect(14, 10, 4, 36); // Vertical stem
    ctxBannerCross.fillRect(8, 18, 16, 4);  // Horizontal bar
    // Flared Fleur-de-lis terminal caps
    ctxBannerCross.fillRect(12, 8, 8, 2);
    ctxBannerCross.fillRect(12, 46, 8, 2);
    ctxBannerCross.fillRect(6, 16, 2, 8);
    ctxBannerCross.fillRect(24, 16, 2, 8);
    // Center Radiant Jewel Diamond
    ctxBannerCross.fillStyle = '#8ae5ff';
    ctxBannerCross.fillRect(15, 19, 2, 2);

    // 19. Stained Glass Gothic Window (32x64)
    const [cStained, ctxStained] = this.createCanvas(32, 64);
    ctxStained.fillStyle = '#181b22';
    ctxStained.fillRect(0, 0, 32, 64);

    const gems = ['#ad1f1f', '#19498a', '#1e7345', '#c29219', '#631f7d', '#1f7d73'];
    for (let py = 4; py < 60; py += 4) {
      for (let px = 4; px < 28; px += 4) {
        ctxStained.fillStyle = gems[(px * 3 + py * 5) % gems.length];
        ctxStained.fillRect(px, py, 3, 3);
      }
    }
    // Lead traceries
    ctxStained.fillStyle = '#0f1116';
    ctxStained.fillRect(0, 0, 32, 4);
    ctxStained.fillRect(0, 60, 32, 4);
    ctxStained.fillRect(0, 0, 4, 64);
    ctxStained.fillRect(28, 0, 4, 64);
    ctxStained.fillRect(14, 0, 4, 64);
    ctxStained.fillRect(0, 30, 32, 4);

    // 20. Stone Tile Floor (32x32 Polished Checkered Marble & Slate)
    const [cStoneTile, ctxStoneTile] = this.createCanvas(32, 32);
    ctxStoneTile.fillStyle = '#6e7482'; // Light marble tile
    ctxStoneTile.fillRect(0, 0, 16, 16);
    ctxStoneTile.fillRect(16, 16, 16, 16);

    ctxStoneTile.fillStyle = '#454a54'; // Dark slate tile
    ctxStoneTile.fillRect(16, 0, 16, 16);
    ctxStoneTile.fillRect(0, 16, 16, 16);

    // Marble vein flecks
    ctxStoneTile.fillStyle = '#858b99';
    ctxStoneTile.fillRect(3, 4, 4, 1);
    ctxStoneTile.fillRect(6, 9, 5, 1);
    ctxStoneTile.fillRect(19, 20, 5, 1);
    ctxStoneTile.fillRect(24, 25, 4, 1);

    // Deep Mortar Seams
    ctxStoneTile.fillStyle = '#21242b';
    ctxStoneTile.fillRect(0, 0, 32, 1);
    ctxStoneTile.fillRect(0, 16, 32, 1);
    ctxStoneTile.fillRect(0, 0, 1, 32);
    ctxStoneTile.fillRect(16, 0, 1, 32);

    // 21. Carved Stone Pillar (32x32 Fluted Columns with 3D Ridges)
    const [cPillar, ctxPillar] = this.createCanvas(32, 32);
    for (let y = 0; y < 32; y++) {
      for (let x = 0; x < 32; x++) {
        const flutePhase = (x % 8);
        let shade = '#616773';
        if (flutePhase === 0) shade = '#363a42';
        else if (flutePhase === 1) shade = '#4a505c';
        else if (flutePhase === 2 || flutePhase === 3) shade = '#7a8190';
        else if (flutePhase === 4) shade = '#8c93a3';
        else if (flutePhase === 5 || flutePhase === 6) shade = '#6b7280';
        else shade = '#424752';

        ctxPillar.fillStyle = shade;
        ctxPillar.fillRect(x, y, 1, 1);
      }
    }
    // Horizontal carved capital trim bands
    ctxPillar.fillStyle = '#2c3038';
    ctxPillar.fillRect(0, 0, 32, 2);
    ctxPillar.fillRect(0, 30, 32, 2);

    // 22. Celestial Globe Texture (32x32 Ancient Astrolabe Map)
    const [cGlobe, ctxGlobe] = this.createCanvas(32, 32);
    ctxGlobe.fillStyle = '#1c3e66'; // Azure ocean
    ctxGlobe.fillRect(0, 0, 32, 32);

    // Continents & Landmasses in Gilded Ochre
    ctxGlobe.fillStyle = '#947a46';
    ctxGlobe.fillRect(5, 6, 9, 8);
    ctxGlobe.fillRect(4, 10, 8, 10);
    ctxGlobe.fillRect(18, 8, 10, 7);
    ctxGlobe.fillRect(20, 16, 8, 10);

    // Celestial Grid & Equator
    ctxGlobe.fillStyle = '#e5b84c';
    ctxGlobe.fillRect(0, 15, 32, 2);
    ctxGlobe.fillRect(15, 0, 2, 32);

    // Gold Constellation Stars
    ctxGlobe.fillStyle = '#ffffff';
    ctxGlobe.fillRect(8, 4, 1, 1);
    ctxGlobe.fillRect(24, 6, 1, 1);
    ctxGlobe.fillRect(10, 26, 1, 1);
    ctxGlobe.fillRect(26, 24, 1, 1);

    // 23. Inscription Plaque
    const [cPlaque, ctxPlaque] = this.createCanvas(16, 16);
    ctxPlaque.fillStyle = '#c7b28b';
    ctxPlaque.fillRect(0, 0, 16, 16);
    ctxPlaque.fillStyle = '#614620';
    ctxPlaque.fillRect(0, 0, 16, 1);
    ctxPlaque.fillRect(0, 15, 16, 1);
    ctxPlaque.fillRect(0, 0, 1, 16);
    ctxPlaque.fillRect(15, 0, 1, 16);
    ctxPlaque.fillStyle = '#3b250d';
    ctxPlaque.fillRect(3, 4, 10, 2);
    ctxPlaque.fillRect(4, 8, 8, 2);
    ctxPlaque.fillRect(5, 12, 6, 2);

    // 24. Carved Shelf Category Plaques
    const makeCategoryPlaque = (label: string) => {
      const [c, ctx] = this.createCanvas(64, 16);
      ctx.fillStyle = '#261408';
      ctx.fillRect(0, 0, 64, 16);
      ctx.fillStyle = '#a87d3b';
      ctx.fillRect(1, 1, 62, 14);
      ctx.fillStyle = '#1c0d05';
      ctx.fillRect(2, 2, 60, 12);
      ctx.fillStyle = '#fce59f';
      ctx.font = 'bold 9px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, 32, 8);
      return this.wrapTexture(c);
    };

    // 25. Dark Oak (Polished Walnut Planks 32x32)
    const [cDarkOak, ctxDarkOak] = this.createCanvas(32, 32);
    for (let y = 0; y < 32; y++) {
      for (let x = 0; x < 32; x++) {
        const grain = Math.sin(y * 0.8 + x * 0.1);
        ctxDarkOak.fillStyle = grain > 0.4 ? '#3d2515' : grain > -0.3 ? '#2e1b0e' : '#221308';
        ctxDarkOak.fillRect(x, y, 1, 1);
      }
    }
    ctxDarkOak.fillStyle = '#150a04';
    ctxDarkOak.fillRect(0, 0, 32, 1);
    ctxDarkOak.fillRect(0, 31, 32, 1);

    // 26. Brass Metal (Polished & Shaded 32x32)
    const [cBrass, ctxBrass] = this.createCanvas(32, 32);
    for (let y = 0; y < 32; y++) {
      for (let x = 0; x < 32; x++) {
        const sheen = Math.sin((x + y) * 0.3);
        ctxBrass.fillStyle = sheen > 0.5 ? '#f3cb62' : sheen > 0.0 ? '#d4a337' : '#9e731b';
        ctxBrass.fillRect(x, y, 1, 1);
      }
    }
    ctxBrass.fillStyle = '#fff0a6';
    ctxBrass.fillRect(0, 0, 32, 2);

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
      inscriptionPlaque: this.wrapTexture(cPlaque),
      plaqueHistoria: makeCategoryPlaque('HISTORIA'),
      plaquePhilosophia: makeCategoryPlaque('PHILOSOPHIA'),
      plaqueScientia: makeCategoryPlaque('SCIENTIA'),
      plaqueTheologia: makeCategoryPlaque('THEOLOGIA'),
      plaqueArcanum: makeCategoryPlaque('ARCANUM'),
      plaqueMythologia: makeCategoryPlaque('MYTHOLOGIA'),
      darkOak: this.wrapTexture(cDarkOak),
      brassMetal: this.wrapTexture(cBrass)
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
        roughness: 0.65,
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
        roughness: 0.65,
        metalness: 0.05,
        side: THREE.DoubleSide
      }),
      woodBeam: new THREE.MeshStandardMaterial({
        map: this.textures.woodBeam,
        roughness: 0.7,
        metalness: 0.05,
        side: THREE.DoubleSide
      }),
      water: new THREE.MeshStandardMaterial({
        map: this.textures.water,
        roughness: 0.1,
        metalness: 0.1,
        transparent: true,
        opacity: 0.8
      }),
      sand: new THREE.MeshStandardMaterial({
        map: this.textures.sand,
        roughness: 0.9,
        metalness: 0.0
      }),
      carpetRed: new THREE.MeshStandardMaterial({
        map: this.textures.carpetRed,
        roughness: 0.75,
        metalness: 0.15,
        side: THREE.DoubleSide
      }),
      iron: new THREE.MeshStandardMaterial({
        map: this.textures.iron,
        roughness: 0.45,
        metalness: 0.7
      }),
      bedGreen: new THREE.MeshStandardMaterial({
        map: this.textures.bedGreen,
        roughness: 0.8,
        metalness: 0.0
      }),
      windowLattice: new THREE.MeshStandardMaterial({
        map: this.textures.windowLattice,
        roughness: 0.5,
        metalness: 0.1,
        transparent: true
      }),
      mapScroll: new THREE.MeshStandardMaterial({
        map: this.textures.mapScroll,
        roughness: 0.9,
        metalness: 0.0,
        side: THREE.DoubleSide
      }),
      bookshelfDense: new THREE.MeshStandardMaterial({
        map: this.textures.bookshelfDense,
        roughness: 0.6,
        metalness: 0.15
      }),
      bookshelfRare: new THREE.MeshStandardMaterial({
        map: this.textures.bookshelfRare,
        roughness: 0.5,
        metalness: 0.25
      }),
      heraldicLionBanner: new THREE.MeshStandardMaterial({
        map: this.textures.heraldicLionBanner,
        roughness: 0.6,
        metalness: 0.2,
        side: THREE.DoubleSide
      }),
      heraldicCrossBanner: new THREE.MeshStandardMaterial({
        map: this.textures.heraldicCrossBanner,
        roughness: 0.6,
        metalness: 0.2,
        side: THREE.DoubleSide
      }),
      stainedGlassGothic: new THREE.MeshStandardMaterial({
        map: this.textures.stainedGlassGothic,
        roughness: 0.15,
        metalness: 0.1,
        transparent: true,
        opacity: 0.92,
        side: THREE.DoubleSide,
        emissive: new THREE.Color(0xffeed6),
        emissiveIntensity: 0.35
      }),
      stoneTileFloor: new THREE.MeshStandardMaterial({
        map: this.textures.stoneTileFloor,
        roughness: 0.55,
        metalness: 0.12,
        side: THREE.DoubleSide
      }),
      carvedStonePillar: new THREE.MeshStandardMaterial({
        map: this.textures.carvedStonePillar,
        roughness: 0.6,
        metalness: 0.1,
        side: THREE.DoubleSide
      }),
      globeTexture: new THREE.MeshStandardMaterial({
        map: this.textures.globeTexture,
        roughness: 0.4,
        metalness: 0.25,
        emissive: new THREE.Color(0xd4af37),
        emissiveIntensity: 0.15
      }),
      inscriptionPlaque: new THREE.MeshStandardMaterial({
        map: this.textures.inscriptionPlaque,
        roughness: 0.6,
        metalness: 0.2,
        side: THREE.DoubleSide
      }),
      plaqueHistoria: new THREE.MeshStandardMaterial({
        map: this.textures.plaqueHistoria,
        roughness: 0.5,
        metalness: 0.3,
        side: THREE.DoubleSide
      }),
      plaquePhilosophia: new THREE.MeshStandardMaterial({
        map: this.textures.plaquePhilosophia,
        roughness: 0.5,
        metalness: 0.3,
        side: THREE.DoubleSide
      }),
      plaqueScientia: new THREE.MeshStandardMaterial({
        map: this.textures.plaqueScientia,
        roughness: 0.5,
        metalness: 0.3,
        side: THREE.DoubleSide
      }),
      plaqueTheologia: new THREE.MeshStandardMaterial({
        map: this.textures.plaqueTheologia,
        roughness: 0.5,
        metalness: 0.3,
        side: THREE.DoubleSide
      }),
      plaqueArcanum: new THREE.MeshStandardMaterial({
        map: this.textures.plaqueArcanum,
        roughness: 0.5,
        metalness: 0.3,
        side: THREE.DoubleSide
      }),
      plaqueMythologia: new THREE.MeshStandardMaterial({
        map: this.textures.plaqueMythologia,
        roughness: 0.5,
        metalness: 0.3,
        side: THREE.DoubleSide
      }),
      darkOak: new THREE.MeshStandardMaterial({
        map: this.textures.darkOak,
        roughness: 0.6,
        metalness: 0.08,
        side: THREE.DoubleSide
      }),
      brassMetal: new THREE.MeshStandardMaterial({
        map: this.textures.brassMetal,
        roughness: 0.35,
        metalness: 0.65,
        side: THREE.DoubleSide
      })
    };
  }
}
