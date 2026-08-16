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
    // Grass highlights
    ctxGrass.fillStyle = '#6ab847';
    ctxGrass.fillRect(3, 4, 1, 2);
    ctxGrass.fillRect(11, 2, 1, 2);
    ctxGrass.fillRect(8, 12, 1, 2);
    ctxGrass.fillRect(14, 9, 1, 2);

    // 2. Grass Side
    const [cGrassSide, ctxGrassSide] = this.createCanvas(16, 16);
    // Fill with dirt base
    const dBase = ['#6e4c29', '#5e3e20', '#7a552e', '#52361b', '#855d33'];
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const rand = Math.random();
        ctxGrassSide.fillStyle = rand > 0.6 ? dBase[0] : rand > 0.3 ? dBase[1] : rand > 0.1 ? dBase[2] : dBase[3];
        ctxGrassSide.fillRect(x, y, 1, 1);
      }
    }
    // Grass overhang on top 4 pixels
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
    // A few small pebbles
    ctxDirt.fillStyle = '#8f887b';
    ctxDirt.fillRect(4, 5, 2, 1);
    ctxDirt.fillRect(10, 11, 1, 1);
    ctxDirt.fillRect(13, 3, 2, 1);

    // 4. Stone Brick (Dungeon walls matching reference image)
    const [cBrick, ctxBrick] = this.createCanvas(16, 16);
    ctxBrick.fillStyle = '#333139'; // Dark mortar
    ctxBrick.fillRect(0, 0, 16, 16);
    const drawBrickRow = (startY: number, height: number, offsets: number[]) => {
      for (let i = 0; i < offsets.length - 1; i++) {
        const x1 = offsets[i];
        const x2 = offsets[i + 1];
        const w = x2 - x1 - 1;
        const h = height - 1;
        // Brick fill
        for (let dy = 0; dy < h; dy++) {
          for (let dx = 0; dx < w; dx++) {
            const rx = x1 + dx;
            const ry = startY + dy;
            const r = Math.random();
            const tone = r > 0.7 ? '#8e8a8e' : r > 0.4 ? '#7c777e' : r > 0.2 ? '#6a656d' : '#5b565f';
            ctxBrick.fillStyle = tone;
            ctxBrick.fillRect(rx, ry, 1, 1);
          }
        }
        // Top highlight
        ctxBrick.fillStyle = '#9e99a0';
        ctxBrick.fillRect(x1, startY, w, 1);
        // Bottom/Right shadow
        ctxBrick.fillStyle = '#444048';
        ctxBrick.fillRect(x1, startY + h - 1, w, 1);
        ctxBrick.fillRect(x1 + w - 1, startY, 1, h);
      }
    };
    drawBrickRow(1, 4, [0, 8, 16]);
    drawBrickRow(5, 4, [0, 4, 12, 16]);
    drawBrickRow(9, 4, [0, 8, 16]);
    drawBrickRow(13, 3, [0, 5, 13, 16]);

    // 5. Cobblestone
    const [cCobble, ctxCobble] = this.createCanvas(16, 16);
    ctxCobble.fillStyle = '#4a464c';
    ctxCobble.fillRect(0, 0, 16, 16);
    const stones = [
      { x: 1, y: 1, w: 6, h: 4 },
      { x: 8, y: 1, w: 7, h: 5 },
      { x: 1, y: 6, w: 5, h: 5 },
      { x: 7, y: 7, w: 8, h: 4 },
      { x: 1, y: 12, w: 7, h: 3 },
      { x: 9, y: 12, w: 6, h: 3 }
    ];
    for (const s of stones) {
      for (let dy = 0; dy < s.h; dy++) {
        for (let dx = 0; dx < s.w; dx++) {
          const r = Math.random();
          ctxCobble.fillStyle = r > 0.6 ? '#7d7982' : r > 0.3 ? '#6e6973' : '#5f5b64';
          ctxCobble.fillRect(s.x + dx, s.y + dy, 1, 1);
        }
      }
      ctxCobble.fillStyle = '#938e99';
      ctxCobble.fillRect(s.x, s.y, s.w, 1);
      ctxCobble.fillStyle = '#3c383e';
      ctxCobble.fillRect(s.x, s.y + s.h - 1, s.w, 1);
    }

    // 6. Wood Planks (Floorboards matching reference image)
    const [cWood, ctxWood] = this.createCanvas(16, 16);
    ctxWood.fillStyle = '#3c2514'; // Plank seams
    ctxWood.fillRect(0, 0, 16, 16);
    const plankYs = [0, 4, 8, 12];
    for (let p = 0; p < plankYs.length; p++) {
      const y = plankYs[p];
      for (let x = 0; x < 16; x++) {
        for (let dy = 0; dy < 3; dy++) {
          const r = Math.random();
          const baseColor = r > 0.7 ? '#82582e' : r > 0.4 ? '#754d26' : r > 0.15 ? '#67421f' : '#583618';
          ctxWood.fillStyle = baseColor;
          ctxWood.fillRect(x, y + dy, 1, 1);
        }
        // Top highlight on each plank
        if (Math.random() > 0.3) {
          ctxWood.fillStyle = '#8f6437';
          ctxWood.fillRect(x, y, 1, 1);
        }
      }
      // Nail dots
      const nailX1 = (p * 5 + 2) % 15;
      const nailX2 = (nailX1 + 8) % 15;
      ctxWood.fillStyle = '#26170c';
      ctxWood.fillRect(nailX1, y + 1, 1, 1);
      ctxWood.fillRect(nailX2, y + 1, 1, 1);
    }

    // 7. Wood Beam (Pillars and structural frames)
    const [cBeam, ctxBeam] = this.createCanvas(16, 16);
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const r = Math.random();
        ctxBeam.fillStyle = (x === 0 || x === 15) ? '#382212' : (x === 1) ? '#754a24' : r > 0.6 ? '#653e1c' : '#543316';
        ctxBeam.fillRect(x, y, 1, 1);
      }
    }

    // 8. Water (With stylized animated wave lines)
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

    // 10. Carpet Red (with ornamental gold border from reference screenshot)
    const [cCarpet, ctxCarpet] = this.createCanvas(16, 16);
    ctxCarpet.fillStyle = '#831e1e'; // Deep crimson base
    ctxCarpet.fillRect(0, 0, 16, 16);
    // Gold ornamental border
    ctxCarpet.fillStyle = '#cda250';
    ctxCarpet.fillRect(1, 1, 14, 1);
    ctxCarpet.fillRect(1, 14, 14, 1);
    ctxCarpet.fillRect(1, 1, 1, 14);
    ctxCarpet.fillRect(14, 1, 1, 14);
    // Inner fringe pattern
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

    // 12. Bed Green Duvet (matching reference screenshot)
    const [cBed, ctxBed] = this.createCanvas(16, 16);
    ctxBed.fillStyle = '#2d4b3b';
    ctxBed.fillRect(0, 0, 16, 16);
    // White pillow at top
    ctxBed.fillStyle = '#e8e8e8';
    ctxBed.fillRect(2, 1, 12, 4);
    ctxBed.fillStyle = '#c4c4c4';
    ctxBed.fillRect(2, 4, 12, 1);
    // Fold line
    ctxBed.fillStyle = '#22382c';
    ctxBed.fillRect(0, 6, 16, 1);
    ctxBed.fillStyle = '#39604b';
    ctxBed.fillRect(0, 7, 16, 1);

    // 13. Window Lattice (with warm interior sun rays)
    const [cWindow, ctxWindow] = this.createCanvas(16, 16);
    ctxWindow.fillStyle = '#754a24'; // Wood frame
    ctxWindow.fillRect(0, 0, 16, 16);
    ctxWindow.fillStyle = '#ffe9b3'; // Bright warm glass
    ctxWindow.fillRect(2, 2, 12, 12);
    // Diamond lattice lines
    ctxWindow.fillStyle = '#8b6534';
    ctxWindow.fillRect(8, 2, 1, 12);
    ctxWindow.fillRect(2, 8, 12, 1);
    ctxWindow.fillRect(4, 4, 1, 1);
    ctxWindow.fillRect(12, 4, 1, 1);
    ctxWindow.fillRect(4, 12, 1, 1);
    ctxWindow.fillRect(12, 12, 1, 1);

    // 14. Map Scroll (Wall parchment from reference screenshot)
    const [cMap, ctxMap] = this.createCanvas(16, 16);
    ctxMap.fillStyle = '#d4be88'; // Parchment
    ctxMap.fillRect(0, 0, 16, 16);
    ctxMap.fillStyle = '#8a5d2a'; // Wood rods
    ctxMap.fillRect(0, 0, 16, 1);
    ctxMap.fillRect(0, 15, 16, 1);
    // Landmass ink spots
    ctxMap.fillStyle = '#4a351d';
    ctxMap.fillRect(3, 4, 5, 3);
    ctxMap.fillRect(4, 7, 6, 2);
    ctxMap.fillRect(10, 5, 4, 4);
    ctxMap.fillRect(7, 11, 4, 2);

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
      mapScroll: this.wrapTexture(cMap)
    };
  }

  private initMaterials(): void {
    const roughness = 0.85;
    const metalness = 0.05;

    this.materials = {
      grassTop: new THREE.MeshStandardMaterial({
        map: this.textures.grassTop,
        roughness,
        metalness
      }),
      grassSide: new THREE.MeshStandardMaterial({
        map: this.textures.grassSide,
        roughness,
        metalness
      }),
      dirt: new THREE.MeshStandardMaterial({
        map: this.textures.dirt,
        roughness: 0.95,
        metalness: 0.0
      }),
      stoneBrick: new THREE.MeshStandardMaterial({
        map: this.textures.stoneBrick,
        roughness: 0.8,
        metalness: 0.1
      }),
      cobblestone: new THREE.MeshStandardMaterial({
        map: this.textures.cobblestone,
        roughness: 0.85,
        metalness: 0.1
      }),
      woodPlanks: new THREE.MeshStandardMaterial({
        map: this.textures.woodPlanks,
        roughness: 0.75,
        metalness: 0.05
      }),
      woodBeam: new THREE.MeshStandardMaterial({
        map: this.textures.woodBeam,
        roughness: 0.8,
        metalness: 0.05
      }),
      water: new THREE.MeshStandardMaterial({
        map: this.textures.water,
        roughness: 0.15,
        metalness: 0.2,
        transparent: true,
        opacity: 0.85
      }),
      sand: new THREE.MeshStandardMaterial({
        map: this.textures.sand,
        roughness: 0.95,
        metalness: 0.0
      }),
      carpetRed: new THREE.MeshStandardMaterial({
        map: this.textures.carpetRed,
        roughness: 0.9,
        metalness: 0.0
      }),
      iron: new THREE.MeshStandardMaterial({
        map: this.textures.iron,
        roughness: 0.4,
        metalness: 0.7
      }),
      bedGreen: new THREE.MeshStandardMaterial({
        map: this.textures.bedGreen,
        roughness: 0.85,
        metalness: 0.0
      }),
      windowLattice: new THREE.MeshStandardMaterial({
        map: this.textures.windowLattice,
        emissive: new THREE.Color(0xffd57a),
        emissiveIntensity: 0.4,
        roughness: 0.3
      }),
      mapScroll: new THREE.MeshStandardMaterial({
        map: this.textures.mapScroll,
        roughness: 0.9
      })
    };
  }
}
