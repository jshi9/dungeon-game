export interface Rect {
  x: number;
  z: number;
  w: number;
  h: number;
}

export interface Room extends Rect {
  id: number;
  type: 'quarters' | 'armory' | 'hall' | 'cellar' | 'shrine';
  doors: { x: number; z: number }[];
}

export interface Corridor {
  x1: number;
  z1: number;
  x2: number;
  z2: number;
}

export class BSPNode {
  public rect: Rect;
  public left: BSPNode | null = null;
  public right: BSPNode | null = null;
  public room: Room | null = null;
  private prng: () => number;

  constructor(rect: Rect, prng: () => number = Math.random) {
    this.rect = rect;
    this.prng = prng;
  }

  public isLeaf(): boolean {
    return !this.left && !this.right;
  }

  public split(minSize: number): boolean {
    if (!this.isLeaf()) return false;

    let splitH = this.prng() > 0.5;
    if (this.rect.w > this.rect.h && this.rect.w / this.rect.h >= 1.25) {
      splitH = false;
    } else if (this.rect.h > this.rect.w && this.rect.h / this.rect.w >= 1.25) {
      splitH = true;
    }

    const max = (splitH ? this.rect.h : this.rect.w) - minSize;
    if (max <= minSize) return false;

    const split = Math.floor(minSize + this.prng() * (max - minSize));

    if (splitH) {
      this.left = new BSPNode({ x: this.rect.x, z: this.rect.z, w: this.rect.w, h: split }, this.prng);
      this.right = new BSPNode({ x: this.rect.x, z: this.rect.z + split, w: this.rect.w, h: this.rect.h - split }, this.prng);
    } else {
      this.left = new BSPNode({ x: this.rect.x, z: this.rect.z, w: split, h: this.rect.h }, this.prng);
      this.right = new BSPNode({ x: this.rect.x + split, z: this.rect.z, w: this.rect.w - split, h: this.rect.h }, this.prng);
    }

    return true;
  }

  public createRooms(minRoomSize: number, roomTypes: Room['type'][]): Room[] {
    const rooms: Room[] = [];
    let roomId = 0;

    const traverse = (node: BSPNode) => {
      if (node.isLeaf()) {
        const padding = 1;
        const maxW = Math.max(minRoomSize, node.rect.w - padding * 2);
        const maxH = Math.max(minRoomSize, node.rect.h - padding * 2);

        const rw = Math.max(minRoomSize, Math.floor(minRoomSize + this.prng() * (maxW - minRoomSize + 1)));
        const rh = Math.max(minRoomSize, Math.floor(minRoomSize + this.prng() * (maxH - minRoomSize + 1)));
        const rx = node.rect.x + Math.floor((node.rect.w - rw) / 2);
        const rz = node.rect.z + Math.floor((node.rect.h - rh) / 2);

        const type = roomTypes[roomId % roomTypes.length];
        node.room = {
          id: roomId++,
          x: rx,
          z: rz,
          w: rw,
          h: rh,
          type,
          doors: []
        };
        rooms.push(node.room);
      } else {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
    };

    traverse(this);
    return rooms;
  }

  public getRoom(): Room | null {
    if (this.room) return this.room;
    let lRoom: Room | null = null;
    let rRoom: Room | null = null;
    if (this.left) lRoom = this.left.getRoom();
    if (this.right) rRoom = this.right.getRoom();
    return lRoom || rRoom;
  }
}

export class BSPDungeon {
  public width: number;
  public height: number;
  public tiles: number[][]; // 0 = Void/Empty, 1 = Floor, 2 = Wall, 3 = Doorway
  public rooms: Room[] = [];
  public corridors: Corridor[] = [];
  public spawnPoint: { x: number; z: number } = { x: 0, z: 0 };
  public seed: number;
  private prng: () => number;

  constructor(width = 48, height = 48, seed: number = 424242) {
    this.width = width;
    this.height = height;
    this.seed = seed;
    this.prng = this.createPrng(seed);
    this.tiles = Array.from({ length: height }, () => Array(width).fill(0));
    this.generate();
  }

  private createPrng(seed: number): () => number {
    let s = (seed >>> 0) % 2147483647;
    if (s <= 0) s += 2147483646;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  private generate(): void {
    const root = new BSPNode({ x: 1, z: 1, w: this.width - 2, h: this.height - 2 }, this.prng);
    const minPartition = 10;
    const minRoom = 7;

    // Split tree
    const splitNodes = [root];
    for (let i = 0; i < 4; i++) {
      const next: BSPNode[] = [];
      for (const node of splitNodes) {
        if (node.split(minPartition)) {
          if (node.left) next.push(node.left);
          if (node.right) next.push(node.right);
        }
      }
      if (next.length === 0) break;
      splitNodes.length = 0;
      splitNodes.push(...next);
    }

    // Assign Room Types
    const roomTypes: Room['type'][] = ['quarters', 'armory', 'hall', 'cellar', 'shrine'];
    this.rooms = root.createRooms(minRoom, roomTypes);

    // Carve Rooms into Grid
    for (const r of this.rooms) {
      for (let z = r.z; z < r.z + r.h; z++) {
        for (let x = r.x; x < r.x + r.w; x++) {
          this.tiles[z][x] = 1; // Floor
        }
      }
    }

    // Connect Corridors between Siblings
    const connectNodes = (node: BSPNode) => {
      if (node.isLeaf()) return;
      if (node.left && node.right) {
        const roomA = node.left.getRoom();
        const roomB = node.right.getRoom();
        if (roomA && roomB) {
          this.carveCorridor(roomA, roomB);
        }
      }
      if (node.left) connectNodes(node.left);
      if (node.right) connectNodes(node.right);
    };
    connectNodes(root);

    // Place Surrounding Walls
    this.buildWalls();

    // Set Spawn in First Room
    if (this.rooms.length > 0) {
      const first = this.rooms[0];
      this.spawnPoint = {
        x: Math.floor(first.x + first.w / 2),
        z: Math.floor(first.z + first.h / 2)
      };
    }
  }

  private carveCorridor(rA: Room, rB: Room): void {
    const ax = Math.floor(rA.x + rA.w / 2);
    const az = Math.floor(rA.z + rA.h / 2);
    const bx = Math.floor(rB.x + rB.w / 2);
    const bz = Math.floor(rB.z + rB.h / 2);

    let cx = ax;
    let cz = az;

    // Horizontal then Vertical corridor
    while (cx !== bx) {
      this.tiles[cz][cx] = 1;
      cx += cx < bx ? 1 : -1;
    }
    while (cz !== bz) {
      this.tiles[cz][cx] = 1;
      cz += cz < bz ? 1 : -1;
    }
    this.tiles[bz][bx] = 1;

    this.corridors.push({ x1: ax, z1: az, x2: bx, z2: bz });
  }

  private buildWalls(): void {
    for (let z = 0; z < this.height; z++) {
      for (let x = 0; x < this.width; x++) {
        if (this.tiles[z][x] === 0) {
          // If adjacent to any floor, it becomes a Wall (2)
          const isAdjacentFloor =
            (z > 0 && this.tiles[z - 1][x] === 1) ||
            (z < this.height - 1 && this.tiles[z + 1][x] === 1) ||
            (x > 0 && this.tiles[z][x - 1] === 1) ||
            (x < this.width - 1 && this.tiles[z][x + 1] === 1) ||
            (z > 0 && x > 0 && this.tiles[z - 1][x - 1] === 1) ||
            (z > 0 && x < this.width - 1 && this.tiles[z - 1][x + 1] === 1) ||
            (z < this.height - 1 && x > 0 && this.tiles[z + 1][x - 1] === 1) ||
            (z < this.height - 1 && x < this.width - 1 && this.tiles[z + 1][x + 1] === 1);

          if (isAdjacentFloor) {
            this.tiles[z][x] = 2; // Wall
          }
        }
      }
    }
  }
}
