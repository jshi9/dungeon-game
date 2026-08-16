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
   * Generates a high-detail voxel/pixel-art spine texture matching the reference artwork.
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
   * Returns a 6-material array for a 3D BoxGeometry book:
   * [right, left, top, bottom, front(spine), back]
   */
  public static getBookMaterials(book: BookData, isHorizontal: boolean = false, side: number = -1): THREE.Material[] {
    const spineTex = this.getSpineTexture(book, isHorizontal);
    const spineMat = new THREE.MeshStandardMaterial({
      map: spineTex,
      roughness: 0.5,
      metalness: 0.25
    });

    const leatherBackMat = this.getLeatherCoverMaterial(book.coverColor);
    const pageMat = this.getPageEdgeMaterial();

    // Box face ordering: [ +X (right), -X (left), +Y (top), -Y (bottom), +Z (front), -Z (back) ]
    // In our scene, Left bookshelf (X = -6.5) has spine facing +X. Right bookshelf (X = +6.5) has spine facing -X.
    // For horizontal desk books or stacked books, spine face depends on side.
    const spineOnPositiveX = side === -1; // facing nave (+X) for left shelf, (-X) for right shelf

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

      // Base aged parchment
      ctx.fillStyle = '#dfd3ad';
      ctx.fillRect(0, 0, 16, 16);

      // Fine horizontal paper sheet lines
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
        roughness: 0.9,
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

    // Leather grain texture
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.fillRect(2, 2, 4, 4);
    ctx.fillRect(9, 3, 5, 3);
    ctx.fillRect(3, 10, 6, 4);
    ctx.fillRect(11, 11, 3, 3);

    ctx.fillStyle = 'rgba(0,0,0,0.3)';
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
      roughness: 0.7,
      metalness: 0.1
    });

    this.leatherBackMatCache.set(coverColor, mat);
    return mat;
  }

  /**
   * Draws a vertical spine (48x96 px) with ornate borders, gold bands, title, and heraldic emblem.
   */
  private static drawVerticalSpine(ctx: CanvasRenderingContext2D, w: number, h: number, book: BookData): void {
    // 1. Base Rich Leather Background
    ctx.fillStyle = book.coverColor;
    ctx.fillRect(0, 0, w, h);

    // 2. Curvature Shading (Darker on edges for 3D cylindrical spine feel)
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.45)');
    grad.addColorStop(0.2, 'rgba(0, 0, 0, 0.05)');
    grad.addColorStop(0.8, 'rgba(0, 0, 0, 0.05)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.45)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // 3. Ornate Double Gold Border Frame
    const gold = book.accentColor || '#ffd88a';
    const goldDark = '#91712a';
    const goldBright = '#fff2b8';

    // Outer border
    ctx.fillStyle = goldDark;
    ctx.strokeRect(1.5, 1.5, w - 3, h - 3);
    ctx.fillStyle = gold;
    ctx.strokeRect(2.5, 2.5, w - 5, h - 5);

    // Inner filigree border
    ctx.strokeStyle = goldDark;
    ctx.strokeRect(5.5, 5.5, w - 11, h - 11);
    ctx.strokeStyle = gold;
    ctx.strokeRect(6.5, 6.5, w - 13, h - 13);

    // 4. Ornate Gold Corner Brackets (Fleur-de-lis / stepped brackets)
    this.drawCornerBrackets(ctx, 4, 4, w - 8, h - 8, gold, goldBright);

    // 5. Raised Gold Spine Rib Bands (Top, Mid-Upper, Mid-Lower, Bottom)
    const bandPositionsY = [12, 38, 58, 84];
    bandPositionsY.forEach((by) => {
      // Dark drop shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillRect(3, by - 1, w - 6, 4);

      // Gold band
      ctx.fillStyle = gold;
      ctx.fillRect(3, by, w - 6, 2);

      // Gold highlight
      ctx.fillStyle = goldBright;
      ctx.fillRect(4, by, w - 8, 1);
    });

    // 6. Center Heraldic Crest / Emblem
    const emblem = this.determineEmblem(book);
    const centerX = w / 2;
    const centerY = h - 22; // Lower medallion zone
    this.drawEmblem(ctx, centerX, centerY, emblem, gold, goldBright);

    // 7. Title Zone (Upper zone between ribs)
    this.drawSpineTitle(ctx, w / 2, 25, book.title, goldBright, goldDark);
  }

  /**
   * Draws a horizontal spine (128x32 px) for stacked books.
   */
  private static drawHorizontalSpine(ctx: CanvasRenderingContext2D, w: number, h: number, book: BookData): void {
    // 1. Base Leather
    ctx.fillStyle = book.coverColor;
    ctx.fillRect(0, 0, w, h);

    // Curvature gradient
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.4)');
    grad.addColorStop(0.2, 'rgba(0, 0, 0, 0.05)');
    grad.addColorStop(0.8, 'rgba(0, 0, 0, 0.05)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    const gold = book.accentColor || '#ffd88a';
    const goldDark = '#91712a';
    const goldBright = '#fff2b8';

    // Horizontal gold border
    ctx.strokeStyle = goldDark;
    ctx.strokeRect(1.5, 1.5, w - 3, h - 3);
    ctx.strokeStyle = gold;
    ctx.strokeRect(2.5, 2.5, w - 5, h - 5);

    // End-bands on left & right
    ctx.fillStyle = gold;
    ctx.fillRect(4, 2, 3, h - 4);
    ctx.fillRect(w - 7, 2, 3, h - 4);

    // Left emblem
    const emblem = this.determineEmblem(book);
    this.drawEmblem(ctx, 16, h / 2, emblem, gold, goldBright);

    // Right decorative cross or star
    this.drawEmblem(ctx, w - 16, h / 2, 'cross', gold, goldBright);

    // Center Title Text
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 9px "Cinzel", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const cleanTitle = book.title.length > 20 ? book.title.slice(0, 18) + '…' : book.title;

    // Drop shadow
    ctx.fillText(cleanTitle.toUpperCase(), w / 2 + 1, h / 2 + 1);

    // Gilded text
    ctx.fillStyle = goldBright;
    ctx.fillText(cleanTitle.toUpperCase(), w / 2, h / 2);
  }

  private static drawCornerBrackets(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    gold: string,
    goldBright: string
  ): void {
    ctx.fillStyle = gold;

    // Top-Left
    ctx.fillRect(x, y, 4, 1);
    ctx.fillRect(x, y, 1, 4);
    ctx.fillRect(x + 1, y + 1, 2, 2);

    // Top-Right
    ctx.fillRect(x + w - 4, y, 4, 1);
    ctx.fillRect(x + w - 1, y, 1, 4);
    ctx.fillRect(x + w - 3, y + 1, 2, 2);

    // Bottom-Left
    ctx.fillRect(x, y + h - 1, 4, 1);
    ctx.fillRect(x, y + h - 4, 1, 4);
    ctx.fillRect(x + 1, y + h - 3, 2, 2);

    // Bottom-Right
    ctx.fillRect(x + w - 4, y + h - 1, 4, 1);
    ctx.fillRect(x + w - 1, y + h - 4, 1, 4);
    ctx.fillRect(x + w - 3, y + h - 3, 2, 2);

    // Tiny gold dots in corners
    ctx.fillStyle = goldBright;
    ctx.fillRect(x + 1, y + 1, 1, 1);
    ctx.fillRect(x + w - 2, y + 1, 1, 1);
    ctx.fillRect(x + 1, y + h - 2, 1, 1);
    ctx.fillRect(x + w - 2, y + h - 2, 1, 1);
  }

  private static drawSpineTitle(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    title: string,
    goldBright: string,
    _goldDark: string
  ): void {
    ctx.save();
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Word wrap into 1-3 compact lines
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
    const lineHeight = 6.5;
    const startY = cy - ((displayLines.length - 1) * lineHeight) / 2;

    ctx.font = 'bold 6.5px "Cinzel", "Courier New", serif';

    displayLines.forEach((line, idx) => {
      const y = startY + idx * lineHeight;
      // Shadow
      ctx.fillStyle = 'rgba(0,0,0,0.85)';
      ctx.fillText(line.toUpperCase(), cx + 0.8, y + 0.8);

      // Gold text
      ctx.fillStyle = goldBright;
      ctx.fillText(line.toUpperCase(), cx, y);
    });

    ctx.restore();
  }

  private static determineEmblem(book: BookData): BookEmblemType {
    const c = book.classification;
    if (c === 'Tales & Mythology') return 'lion';
    if (c === 'Mysticism & Magic') return 'moon_stars';
    if (c === 'Academic Texts & Grammar') return 'celtic';
    if (c === 'Breakthroughs & Theories') return 'compass';
    if (c === 'Professional Manuals') return 'tree';
    if (c === 'Dissertations') return 'pillar';
    if (c === 'Fiction') return 'sword';
    return 'cross';
  }

  private static drawEmblem(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    emblem: BookEmblemType,
    gold: string,
    goldBright: string
  ): void {
    ctx.save();
    ctx.translate(Math.round(cx), Math.round(cy));

    // Outer gold medallion diamond/circle
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(-7, -7, 14, 14);

    ctx.strokeStyle = gold;
    ctx.strokeRect(-6.5, -6.5, 13, 13);

    ctx.fillStyle = gold;

    switch (emblem) {
      case 'lion':
        // Rampant Lion Silhouette
        ctx.fillRect(-2, -4, 4, 3); // Head
        ctx.fillRect(-3, -1, 6, 4); // Body
        ctx.fillRect(-4, -3, 2, 2); // Left raised paw
        ctx.fillRect(2, -2, 2, 2);  // Right raised paw
        ctx.fillRect(-3, 3, 2, 3);  // Left leg
        ctx.fillRect(1, 3, 2, 3);   // Right leg
        ctx.fillStyle = goldBright;
        ctx.fillRect(-1, -4, 2, 1); // Crown
        break;

      case 'cross':
      case 'celtic':
        // Ornate Gothic Cross
        ctx.fillRect(-1, -5, 2, 10); // Vertical stem
        ctx.fillRect(-4, -2, 8, 2);  // Horizontal bar
        ctx.fillStyle = goldBright;
        ctx.fillRect(-2, -3, 4, 4);  // Center boss
        ctx.fillRect(-1, -6, 2, 1);  // Top fleur
        break;

      case 'moon_stars':
        // Crescent Moon & Stars
        ctx.fillRect(-3, -4, 3, 8);
        ctx.fillRect(0, -3, 2, 6);
        ctx.clearRect(-1, -2, 2, 4);
        ctx.fillStyle = goldBright;
        ctx.fillRect(2, -4, 2, 2); // Star 1
        ctx.fillRect(3, 2, 2, 2);  // Star 2
        break;

      case 'pillar':
        // Classical Roman Capital
        ctx.fillRect(-4, -4, 8, 2); // Capital top
        ctx.fillRect(-2, -2, 4, 6); // Fluted shaft
        ctx.fillRect(-4, 3, 8, 2);  // Base plinth
        break;

      case 'sword':
        // Upright Knight Sword
        ctx.fillRect(-1, -5, 2, 7); // Blade
        ctx.fillRect(-4, 1, 8, 1);  // Crossguard
        ctx.fillRect(-1, 2, 2, 2);  // Grip
        ctx.fillStyle = goldBright;
        ctx.fillRect(-1, 4, 2, 1);  // Pommel
        break;

      case 'compass':
        // 8-Point Compass Star
        ctx.fillRect(-1, -5, 2, 10);
        ctx.fillRect(-5, -1, 10, 2);
        ctx.fillStyle = goldBright;
        ctx.fillRect(-2, -2, 4, 4);
        break;

      case 'tree':
      case 'flower':
        // Tree of Life / Floral Lily
        ctx.fillRect(-1, -4, 2, 8); // Trunk
        ctx.fillRect(-4, -2, 8, 2); // Branches
        ctx.fillRect(-3, -4, 6, 2); // Crown
        ctx.fillStyle = goldBright;
        ctx.fillRect(-1, -5, 2, 2); // Top bloom
        break;

      default:
        // Ornate Diamond Knot
        ctx.fillRect(-1, -4, 2, 8);
        ctx.fillRect(-4, -1, 8, 2);
        ctx.fillStyle = goldBright;
        ctx.fillRect(-2, -2, 4, 4);
        break;
    }

    ctx.restore();
  }
}
