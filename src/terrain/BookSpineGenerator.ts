import * as THREE from 'three';
import { BookData } from '../lore/LibraryLoreGenerator';

export type BookEmblemType =
  | 'lion'
  | 'cross'
  | 'celtic'
  | 'crest'
  | 'flower'
  | 'moon_stars'
  | 'pillar'
  | 'sword'
  | 'harp'
  | 'bow'
  | 'shield'
  | 'compass'
  | 'flask'
  | 'tree';

export class BookSpineGenerator {
  private static spineCache: Map<string, THREE.CanvasTexture> = new Map();
  private static pageSideMat: THREE.MeshStandardMaterial | null = null;
  private static leatherBackMatCache: Map<string, THREE.MeshStandardMaterial> = new Map();

  /**
   * Generates a high-detail voxel/pixel-art spine texture with distinct leather colorways
   */
  public static getSpineTexture(book: BookData, isHorizontal: boolean = false): THREE.CanvasTexture {
    const key = `${book.id}_${book.coverColor}_${book.accentColor}_${isHorizontal ? 'H' : 'V'}`;
    if (this.spineCache.has(key)) {
      return this.spineCache.get(key)!;
    }

    const width = isHorizontal ? 128 : 48;
    const height = isHorizontal ? 32 : 96;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
    ctx.imageSmoothingEnabled = false;

    if (isHorizontal) {
      this.drawHorizontalSpine(ctx, width, height, book);
    } else {
      this.drawVerticalSpine(ctx, width, height, book);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.colorSpace = THREE.SRGBColorSpace;

    this.spineCache.set(key, texture);
    return texture;
  }

  /**
   * Returns a 6-material array for a 3D BoxGeometry book with varying specular shine & metalness
   */
  public static getBookMaterials(book: BookData, isHorizontal: boolean = false, side: number = -1): THREE.Material[] {
    const spineTex = this.getSpineTexture(book, isHorizontal);

    // Compute varying specular shine & roughness based on accent type
    let roughness = 0.55;
    let metalness = 0.2;

    switch (book.accentColor) {
      case '#ffd700': // 24K Radiant Gold
        roughness = 0.38;
        metalness = 0.45;
        break;
      case '#d1d7e3': // Silver Foil
        roughness = 0.32;
        metalness = 0.55;
        break;
      case '#c86d49': // Copper Foil
        roughness = 0.42;
        metalness = 0.48;
        break;
      case '#e5b84c': // Antique Gold
        roughness = 0.50;
        metalness = 0.30;
        break;
      case '#9a7838': // Tarnished Bronze
        roughness = 0.68;
        metalness = 0.18;
        break;
      case '#1a1614': // Blind Stamped Leather (Matte)
        roughness = 0.88;
        metalness = 0.02;
        break;
      case '#dfd2b5': // Aged Ivory
        roughness = 0.82;
        metalness = 0.05;
        break;
    }

    const spineMat = new THREE.MeshStandardMaterial({
      map: spineTex,
      roughness,
      metalness
    });

    const leatherBackMat = this.getLeatherCoverMaterial(book.coverColor);
    const pageMat = this.getPageEdgeMaterial();

    const spineOnPositiveX = side === -1;

    const materials: THREE.Material[] = [
      spineOnPositiveX ? spineMat : pageMat,       // +X
      !spineOnPositiveX ? spineMat : pageMat,      // -X
      isHorizontal ? leatherBackMat : pageMat,     // +Y
      isHorizontal ? leatherBackMat : pageMat,     // -Y
      leatherBackMat,                              // +Z
      leatherBackMat                               // -Z
    ];

    return materials;
  }

  private static getPageEdgeMaterial(): THREE.MeshStandardMaterial {
    if (!this.pageSideMat) {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d')!;
      ctx.imageSmoothingEnabled = false;

      ctx.fillStyle = '#dfd3ad';
      ctx.fillRect(0, 0, 16, 16);

      ctx.fillStyle = 'rgba(160, 140, 100, 0.45)';
      for (let y = 1; y < 16; y += 2) {
        ctx.fillRect(0, y, 16, 1);
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.magFilter = THREE.NearestFilter;
      tex.minFilter = THREE.NearestFilter;
      tex.colorSpace = THREE.SRGBColorSpace;

      this.pageSideMat = new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.85,
        metalness: 0.05
      });
    }
    return this.pageSideMat;
  }

  private static getLeatherCoverMaterial(coverColor: string): THREE.MeshStandardMaterial {
    if (this.leatherBackMatCache.has(coverColor)) {
      return this.leatherBackMatCache.get(coverColor)!;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d')!;
    ctx.imageSmoothingEnabled = false;

    ctx.fillStyle = coverColor;
    ctx.fillRect(0, 0, 16, 16);

    ctx.fillStyle = 'rgba(0,0,0,0.12)';
    ctx.fillRect(2, 2, 4, 4);
    ctx.fillRect(9, 3, 5, 3);
    ctx.fillRect(3, 10, 6, 4);

    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, 16, 1);
    ctx.fillRect(0, 15, 16, 1);
    ctx.fillRect(0, 0, 1, 16);
    ctx.fillRect(15, 0, 1, 16);

    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.colorSpace = THREE.SRGBColorSpace;

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.65,
      metalness: 0.08
    });

    this.leatherBackMatCache.set(coverColor, mat);
    return mat;
  }

  /**
   * Draws a vertical spine (48x96 px) with elegant, clean proportions showcasing rich leather colors
   */
  private static drawVerticalSpine(ctx: CanvasRenderingContext2D, w: number, h: number, book: BookData): void {
    // 1. Base Rich Leather Background (Clean & Vibrant)
    ctx.fillStyle = book.coverColor;
    ctx.fillRect(0, 0, w, h);

    // 2. Curvature Shading (Dark edges for 3D curved spine cylinder feel)
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
    grad.addColorStop(0.18, 'rgba(0, 0, 0, 0.0)');
    grad.addColorStop(0.82, 'rgba(0, 0, 0, 0.0)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    const accent = book.accentColor || '#ffd700';
    const isBlindStamped = accent === '#1a1614';

    // 3. Thin Elegant Perimeter Border
    if (isBlindStamped) {
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.strokeRect(2.5, 2.5, w - 5, h - 5);
    } else {
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.35)';
      ctx.strokeRect(1.5, 1.5, w - 3, h - 3);
      ctx.strokeStyle = accent;
      ctx.strokeRect(2.5, 2.5, w - 5, h - 5);
    }

    // 4. Subtle Corner Accents
    this.drawCornerBrackets(ctx, 3, 3, w - 6, h - 6, accent);

    // 5. Four Crisp Horizontal Spine Rib Bands
    const bandPositionsY = [12, 38, 58, 84];
    bandPositionsY.forEach((by) => {
      // Dark drop shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(4, by - 1, w - 8, 3);

      // Accent band line
      ctx.fillStyle = isBlindStamped ? 'rgba(0, 0, 0, 0.6)' : accent;
      ctx.fillRect(4, by, w - 8, 1);
    });

    // 6. Center Heraldic Crest / Emblem (Lower Half)
    const emblem = this.determineEmblem(book);
    const centerX = w / 2;
    const centerY = h - 22;
    this.drawEmblem(ctx, centerX, centerY, emblem, accent);

    // 7. Spine Title (Upper Half)
    this.drawSpineTitle(ctx, w / 2, 25, book.title, accent, isBlindStamped);
  }

  /**
   * Draws a horizontal spine (128x32 px) for stacked books
   */
  private static drawHorizontalSpine(ctx: CanvasRenderingContext2D, w: number, h: number, book: BookData): void {
    ctx.fillStyle = book.coverColor;
    ctx.fillRect(0, 0, w, h);

    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.4)');
    grad.addColorStop(0.2, 'rgba(0, 0, 0, 0.0)');
    grad.addColorStop(0.8, 'rgba(0, 0, 0, 0.0)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    const accent = book.accentColor || '#ffd700';
    const isBlindStamped = accent === '#1a1614';

    // Thin frame border
    ctx.strokeStyle = isBlindStamped ? 'rgba(0, 0, 0, 0.5)' : accent;
    ctx.strokeRect(2.5, 2.5, w - 5, h - 5);

    // Left emblem
    const emblem = this.determineEmblem(book);
    this.drawEmblem(ctx, 16, h / 2, emblem, accent);

    // Right emblem
    this.drawEmblem(ctx, w - 16, h / 2, 'cross', accent);

    // Title text
    ctx.font = 'bold 9px "Cinzel", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const cleanTitle = book.title.length > 20 ? book.title.slice(0, 18) + '…' : book.title;

    // Drop shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillText(cleanTitle.toUpperCase(), w / 2 + 1, h / 2 + 1);

    // Title fill
    ctx.fillStyle = isBlindStamped ? 'rgba(0, 0, 0, 0.75)' : accent;
    ctx.fillText(cleanTitle.toUpperCase(), w / 2, h / 2);
  }

  private static drawCornerBrackets(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    accent: string
  ): void {
    ctx.fillStyle = accent;

    // Top-Left
    ctx.fillRect(x, y, 3, 1);
    ctx.fillRect(x, y, 1, 3);

    // Top-Right
    ctx.fillRect(x + w - 3, y, 3, 1);
    ctx.fillRect(x + w - 1, y, 1, 3);

    // Bottom-Left
    ctx.fillRect(x, y + h - 1, 3, 1);
    ctx.fillRect(x, y + h - 3, 1, 3);

    // Bottom-Right
    ctx.fillRect(x + w - 3, y + h - 1, 3, 1);
    ctx.fillRect(x + w - 1, y + h - 3, 1, 3);
  }

  private static drawSpineTitle(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    title: string,
    accent: string,
    isBlindStamped: boolean
  ): void {
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const words = title.split(' ');
    const lines: string[] = [];
    let curLine = '';

    for (const w of words) {
      if ((curLine + ' ' + w).trim().length <= 10) {
        curLine = (curLine + ' ' + w).trim();
      } else {
        if (curLine) lines.push(curLine);
        curLine = w;
      }
    }
    if (curLine) lines.push(curLine);

    const displayLines = lines.slice(0, 3);
    const lineHeight = 7;
    const startY = cy - ((displayLines.length - 1) * lineHeight) / 2;

    ctx.font = 'bold 7px "Cinzel", Georgia, serif';

    displayLines.forEach((line, idx) => {
      const y = startY + idx * lineHeight;

      // Drop shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
      ctx.fillText(line.toUpperCase(), cx + 1, y + 1);

      // Main title text
      ctx.fillStyle = isBlindStamped ? 'rgba(0, 0, 0, 0.75)' : accent;
      ctx.fillText(line.toUpperCase(), cx, y);
    });

    ctx.restore();
  }

  private static determineEmblem(book: BookData): BookEmblemType {
    switch (book.classification) {
      case 'Fiction':
        return 'sword';
      case 'Non-Fiction':
        return 'cross';
      case 'Academic Texts & Grammar':
        return 'celtic';
      case 'Professional Manuals':
        return 'tree';
      case 'Breakthroughs & Theories':
        return 'compass';
      case 'Dissertations':
        return 'pillar';
      case 'Mysticism & Magic':
        return 'moon_stars';
      case 'Tales & Mythology':
        return 'lion';
      default:
        return 'crest';
    }
  }

  private static drawEmblem(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    emblem: BookEmblemType,
    accent: string
  ): void {
    ctx.fillStyle = accent;

    switch (emblem) {
      case 'lion':
        // Rampant golden lion crest
        ctx.fillRect(cx - 3, cy - 5, 5, 2);
        ctx.fillRect(cx - 2, cy - 3, 5, 5);
        ctx.fillRect(cx - 4, cy - 1, 2, 2);
        ctx.fillRect(cx + 2, cy - 2, 2, 3);
        ctx.fillRect(cx - 3, cy + 2, 2, 3);
        ctx.fillRect(cx + 1, cy + 2, 2, 3);
        ctx.fillRect(cx + 3, cy - 4, 1, 4);
        break;

      case 'cross':
      case 'celtic':
        // Medieval heraldic cross
        ctx.fillRect(cx - 1, cy - 6, 2, 12);
        ctx.fillRect(cx - 4, cy - 3, 8, 2);
        ctx.fillRect(cx - 3, cy - 5, 6, 1);
        ctx.fillRect(cx - 3, cy + 5, 6, 1);
        break;

      case 'moon_stars':
        // Crescent moon & star
        ctx.fillRect(cx - 4, cy - 4, 2, 8);
        ctx.fillRect(cx - 2, cy - 5, 3, 1);
        ctx.fillRect(cx - 2, cy + 4, 3, 1);
        ctx.fillRect(cx + 2, cy - 1, 2, 2);
        break;

      case 'sword':
        // Knight Greatsword
        ctx.fillRect(cx, cy - 6, 1, 12);
        ctx.fillRect(cx - 3, cy + 2, 7, 1);
        ctx.fillRect(cx - 1, cy + 5, 3, 1);
        break;

      case 'pillar':
        // Classical Roman Capital
        ctx.fillRect(cx - 4, cy - 5, 8, 2);
        ctx.fillRect(cx - 2, cy - 3, 4, 7);
        ctx.fillRect(cx - 4, cy + 4, 8, 2);
        break;

      case 'compass':
        // 8-Point Compass Star
        ctx.fillRect(cx, cy - 5, 1, 10);
        ctx.fillRect(cx - 5, cy, 10, 1);
        ctx.fillRect(cx - 2, cy - 2, 4, 4);
        break;

      case 'tree':
      default:
        // Tree of life / Alchemical flora
        ctx.fillRect(cx, cy - 1, 1, 6);
        ctx.fillRect(cx - 3, cy - 4, 6, 3);
        ctx.fillRect(cx - 2, cy - 5, 4, 1);
        break;
    }
  }
}
