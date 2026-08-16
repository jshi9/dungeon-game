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

  constructor(rect: Rect) {
    this.rect = rect;
  }

  public isLeaf(): boolean {
    return !this.left && !this.right;
  }

  public split(minSize: number): boolean {
    if (!this.isLeaf()) return false;

    // Decide split direction: if width is much bigger than height, split vertically; else horizontally
    let splitH = Math.random() > 0.5;
    if (this.rect.w > this.rect.h && this.rect.w / this.rect.h >= 1.25) {
      splitH = false;
    } else if (this.rect.h > this.rect.w && this.rect.h / this.rect.w >= 1.25) {
      splitH = true;
    }

    const max = (splitH ? this.rect.h : this.rect.w) - minSize;
    if (max <= minSize) return false; // Too small to split further

    const split = Math.floor(minSize + Math.random() * (max - minSize));

    if (splitH) {
      this.left = new BSPNode({ x: this.rect.x, z: this.rect.z, w: this.rect.w, h: split });
      this.right = new BSPNode({ x: this.rect.x, z: this.rect.z + split, w: this.rect.w, h: this.rect.h - split });
    } else {
      this.left = new BSPNode({ x: this.rect.x, z: this.rect.z, w: split, h: this.rect.h });
      this.right = new BSPNode({ x: this.rect.x + split, z: this.rect.z, w: this.rect.w - split, h: this.rect.h });
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
        
        const rw = Math.max(minRoomSize, Math.floor(minRoomSize + Math.random() * (maxW - minRoomSize + 1)));
        const rh = Math.max(minRoomSize, Math.floor(minRoomSize + Math.random() * (maxH - minRoomSize + 1)));
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

  constructor(width = 48, height = 48) {
    this.width = width;
    this.height = height;
    this.tiles = Array.from({ length: height }, () => Array(width).fill(0));
    this.generate();
  }

  private generate(): void {
    const root = new BSPNode({ x: 1, z: 1, w: this.width - 2, h: this.height - 2 });
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

    const types: Room['type'][] = ['quarters', 'hall', 'armory', 'cellar', 'shrine'];
    this.rooms = root.createRooms(minRoom, types);

    // Carve rooms into floor tiles
    for (const r of this.rooms) {
      for (let z = r.z; z < r.z + r.h; z++) {
        for (let x = r.x; x < r.x + r.w; x++) {
          if (z >= 0 && z < this.height && x >= 0 && x < this.width) {
            this.tiles[z][x] = 1; // Floor
          }
        }
      }
    }

    // Connect partitions with corridors
    this.createCorridors(root);

    // Carve corridors into floor tiles
    for (const c of this.corridors) {
      this.carveCorridor(c.x1, c.z1, c.x2, c.z2);
    }

    // Surround all floors with walls
    for (let z = 0; z < this.height; z++) {
      for (let x = 0; x < this.width; x++) {
        if (this.tiles[z][x] === 0) {
          // Check if adjacent to floor
          if (this.isAdjacentToFloor(x, z)) {
            this.tiles[z][x] = 2; // Wall
          }
        }
      }
    }

    // Set spawn point to center of room 0 (the quarters)
    if (this.rooms.length > 0) {
      const startRoom = this.rooms[0];
      this.spawnPoint = {
        x: startRoom.x + Math.floor(startRoom.w / 2),
        z: startRoom.z + Math.floor(startRoom.h / 2)
      };
    }
  }

  private isAdjacentToFloor(x: number, z: number): boolean {
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dz === 0) continue;
        const nx = x + dx;
        const nz = z + dz;
        if (nx >= 0 && nx < this.width && nz >= 0 && nz < this.height) {
          if (this.tiles[nz][nx] === 1) return true;
        }
      }
    }
    return false;
  }

  private createCorridors(node: BSPNode): void {
    if (node.isLeaf()) return;
    if (node.left && node.right) {
      const roomA = node.left.getRoom();
      const roomB = node.right.getRoom();
      if (roomA && roomB) {
        const ax = Math.floor(roomA.x + roomA.w / 2);
        const az = Math.floor(roomA.z + roomA.h / 2);
        const bx = Math.floor(roomB.x + roomB.w / 2);
        const bz = Math.floor(roomB.z + roomB.h / 2);
        this.corridors.push({ x1: ax, z1: az, x2: bx, z2: bz });
      }
      this.createCorridors(node.left);
      this.createCorridors(node.right);
    }
  }

  private carveCorridor(x1: number, z1: number, x2: number, z2: number): void {
    let cx = x1;
    let cz = z1;

    // Horizontal then vertical
    while (cx !== x2) {
      if (cx >= 0 && cx < this.width && cz >= 0 && cz < this.height) {
        this.tiles[cz][cx] = 1;
      }
      cx += cx < x2 ? 1 : -1;
    }
    while (cz !== z2) {
      if (cx >= 0 && cx < this.width && cz >= 0 && cz < this.height) {
        this.tiles[cz][cx] = 1;
      }
      cz += cz < z2 ? 1 : -1;
    }
  }
}
