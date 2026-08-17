import * as THREE from 'three';
import { BSPDungeon, Room } from './BSPGenerator';
import { TextureAtlas } from './TextureAtlas';
import { PropsFactory, TorchLightInfo } from '../entities/Props';

export class DungeonManager {
  public scene: THREE.Scene;
  public atlas: TextureAtlas;
  public dungeon: BSPDungeon;
  public container: THREE.Group;
  public propsFactory: PropsFactory;
  public torchLights: TorchLightInfo[] = [];
  public solidGrid: boolean[][]; // [z][x] is true if blocked by wall/furniture

  constructor(scene: THREE.Scene, atlas: TextureAtlas, width = 48, height = 48, seed = 424242) {
    this.scene = scene;
    this.atlas = atlas;
    this.propsFactory = new PropsFactory(atlas);
    this.dungeon = new BSPDungeon(width, height, seed);
    this.container = new THREE.Group();
    this.container.name = 'DungeonWorld';
    this.solidGrid = Array.from({ length: height }, () => Array(width).fill(false));
    this.scene.add(this.container);

    this.build3DMap();
  }

  private build3DMap(): void {
    const wallHeight = 2.8;
    const floorPositions: number[] = [];
    const floorUvs: number[] = [];
    const floorNormals: number[] = [];

    const wallPositions: number[] = [];
    const wallUvs: number[] = [];
    const wallNormals: number[] = [];

    const beamPositions: number[] = [];
    const beamUvs: number[] = [];
    const beamNormals: number[] = [];

    const addQuad = (
      pArray: number[],
      uArray: number[],
      nArray: number[],
      p1: [number, number, number],
      p2: [number, number, number],
      p3: [number, number, number],
      p4: [number, number, number],
      normal: [number, number, number],
      uvScale: [number, number] = [1, 1]
    ) => {
      pArray.push(...p1, ...p2, ...p3);
      nArray.push(...normal, ...normal, ...normal);
      uArray.push(0, 0, uvScale[0], 0, uvScale[0], uvScale[1]);

      pArray.push(...p1, ...p3, ...p4);
      nArray.push(...normal, ...normal, ...normal);
      uArray.push(0, 0, uvScale[0], uvScale[1], 0, uvScale[1]);
    };

    // 1. Build Floor and Wall Meshes
    for (let z = 0; z < this.dungeon.height; z++) {
      for (let x = 0; x < this.dungeon.width; x++) {
        const tile = this.dungeon.tiles[z][x];

        if (tile === 1) {
          // Floor Tile (y = 0)
          addQuad(
            floorPositions,
            floorUvs,
            floorNormals,
            [x, 0, z],
            [x + 1, 0, z],
            [x + 1, 0, z + 1],
            [x, 0, z + 1],
            [0, 1, 0]
          );
          this.solidGrid[z][x] = false;
        } else if (tile === 2) {
          // Wall Tile: Solid block from y=0 to y=wallHeight
          this.solidGrid[z][x] = true;

          // Check if adjacent to floor to only render exposed wall faces
          // South face (z + 1)
          if (z + 1 < this.dungeon.height && this.dungeon.tiles[z + 1][x] === 1) {
            addQuad(
              wallPositions,
              wallUvs,
              wallNormals,
              [x + 1, wallHeight, z + 1],
              [x + 1, 0, z + 1],
              [x, 0, z + 1],
              [x, wallHeight, z + 1],
              [0, 0, 1],
              [1, wallHeight]
            );
          }
          // North face (z - 1)
          if (z - 1 >= 0 && this.dungeon.tiles[z - 1][x] === 1) {
            addQuad(
              wallPositions,
              wallUvs,
              wallNormals,
              [x, wallHeight, z],
              [x, 0, z],
              [x + 1, 0, z],
              [x + 1, wallHeight, z],
              [0, 0, -1],
              [1, wallHeight]
            );
          }
          // West face (x - 1)
          if (x - 1 >= 0 && this.dungeon.tiles[z][x - 1] === 1) {
            addQuad(
              wallPositions,
              wallUvs,
              wallNormals,
              [x, wallHeight, z + 1],
              [x, 0, z + 1],
              [x, 0, z],
              [x, wallHeight, z],
              [-1, 0, 0],
              [1, wallHeight]
            );
          }
          // East face (x + 1)
          if (x + 1 < this.dungeon.width && this.dungeon.tiles[z][x + 1] === 1) {
            addQuad(
              wallPositions,
              wallUvs,
              wallNormals,
              [x + 1, wallHeight, z],
              [x + 1, 0, z],
              [x + 1, 0, z + 1],
              [x + 1, wallHeight, z + 1],
              [1, 0, 0],
              [1, wallHeight]
            );
          }
          // Wall Top Cap (y = wallHeight)
          addQuad(
            beamPositions,
            beamUvs,
            beamNormals,
            [x, wallHeight, z],
            [x + 1, wallHeight, z],
            [x + 1, wallHeight, z + 1],
            [x, wallHeight, z + 1],
            [0, 1, 0]
          );
        } else {
          // Void
          this.solidGrid[z][x] = true;
        }
      }
    }

    // Create merged floor mesh
    if (floorPositions.length > 0) {
      const fGeom = new THREE.BufferGeometry();
      fGeom.setAttribute('position', new THREE.Float32BufferAttribute(floorPositions, 3));
      fGeom.setAttribute('normal', new THREE.Float32BufferAttribute(floorNormals, 3));
      fGeom.setAttribute('uv', new THREE.Float32BufferAttribute(floorUvs, 2));
      const floorMesh = new THREE.Mesh(fGeom, this.atlas.materials.dungeonFloor);
      floorMesh.receiveShadow = true;
      this.container.add(floorMesh);
    }

    // Create merged wall mesh
    if (wallPositions.length > 0) {
      const wGeom = new THREE.BufferGeometry();
      wGeom.setAttribute('position', new THREE.Float32BufferAttribute(wallPositions, 3));
      wGeom.setAttribute('normal', new THREE.Float32BufferAttribute(wallNormals, 3));
      wGeom.setAttribute('uv', new THREE.Float32BufferAttribute(wallUvs, 2));
      const wallMesh = new THREE.Mesh(wGeom, this.atlas.materials.stoneBrick);
      wallMesh.castShadow = true;
      wallMesh.receiveShadow = true;
      this.container.add(wallMesh);
    }

    // Create merged beam / wall-cap mesh
    if (beamPositions.length > 0) {
      const bGeom = new THREE.BufferGeometry();
      bGeom.setAttribute('position', new THREE.Float32BufferAttribute(beamPositions, 3));
      bGeom.setAttribute('normal', new THREE.Float32BufferAttribute(beamNormals, 3));
      bGeom.setAttribute('uv', new THREE.Float32BufferAttribute(beamUvs, 2));
      const beamMesh = new THREE.Mesh(bGeom, this.atlas.materials.woodBeam);
      beamMesh.castShadow = true;
      this.container.add(beamMesh);
    }

    // 2. Populate Rooms with Props & Sconces matching Reference Image
    this.populateRooms();
  }

  private populateRooms(): void {
    if (this.dungeon.rooms.length === 0) return;

    // Room 0: "Knight's Quarters" (The exact room layout from reference image)
    const quarters = this.dungeon.rooms[0];
    this.decorateQuartersRoom(quarters);

    // Other rooms: Procedural furnishings
    for (let i = 1; i < this.dungeon.rooms.length; i++) {
      const room = this.dungeon.rooms[i];
      this.decorateProceduralRoom(room);
    }
  }

  /**
   * Recreates the reference image room:
   * 2 beds, 2 nightstands, central wardrobe, long table & chairs, large crimson rug, wall torch, illuminated window & map
   */
  private decorateQuartersRoom(r: Room): void {
    const cx = r.x + r.w / 2;
    const cz = r.z + r.h / 2;

    // 1. Back Wall Props (z = r.z)
    // Left Bed
    const bedLeft = this.propsFactory.createBed();
    bedLeft.position.set(r.x + 1.2, 0, r.z + 1.6);
    this.container.add(bedLeft);

    // Left Nightstand
    const drawerLeft = this.propsFactory.createDrawer();
    drawerLeft.position.set(r.x + 2.5, 0, r.z + 0.8);
    this.container.add(drawerLeft);

    // Central Wardrobe
    const wardrobe = this.propsFactory.createWardrobe();
    wardrobe.position.set(r.x + r.w - 1.2, 0, r.z + 1.8);
    this.container.add(wardrobe);

    // Right Bed
    const bedRight = this.propsFactory.createBed();
    bedRight.position.set(r.x + r.w - 2.8, 0, r.z + 1.6);
    this.container.add(bedRight);

    // Right Nightstand
    const drawerRight = this.propsFactory.createDrawer();
    drawerRight.position.set(r.x + r.w - 4.1, 0, r.z + 0.8);
    this.container.add(drawerRight);

    // Center Green Table & Chairs (between drawers and beds)
    const tableSet = this.propsFactory.createTableSet();
    tableSet.position.set(cx - 0.5, 0, r.z + 1.8);
    this.container.add(tableSet);

    // Large Red & Gold Carpet in the center-south of the room
    const carpet = this.propsFactory.createCarpet(r.w * 0.65, r.h * 0.4);
    carpet.position.set(cx, 0.01, cz + 1.0);
    this.container.add(carpet);

    // Wall Parchment Map on Back Wall
    const mapScroll = this.propsFactory.createMapScroll(r.x + 2.0, 1.8, r.z);
    this.container.add(mapScroll);

    // Wall Window with soft light
    const window = this.propsFactory.createWindow(r.x + r.w - 3.2, 1.8, r.z);
    this.container.add(window);

    // Wall Torch Sconce
    const torch = this.propsFactory.createTorch(r.x + 4.2, 1.6, r.z);
    this.container.add(torch.group);
    this.torchLights.push(torch.lightInfo);

    // Mark solid collision cells for large furniture
    this.setSolidBox(r.x + 0.5, r.z + 0.7, 1.4, 1.8); // Left bed
    this.setSolidBox(r.x + r.w - 3.5, r.z + 0.7, 1.4, 1.8); // Right bed
    this.setSolidBox(r.x + r.w - 1.8, r.z + 1.0, 1.2, 1.0); // Wardrobe
  }

  private decorateProceduralRoom(r: Room): void {
    const cx = r.x + r.w / 2;
    const cz = r.z + r.h / 2;

    // Add wall torch
    const torch = this.propsFactory.createTorch(cx, 1.6, r.z);
    this.container.add(torch.group);
    this.torchLights.push(torch.lightInfo);

    if (r.type === 'armory') {
      const chest1 = this.propsFactory.createChest(r.x + 1.2, 0, r.z + 1.2);
      const chest2 = this.propsFactory.createChest(r.x + 2.2, 0, r.z + 1.2);
      this.container.add(chest1, chest2);
      this.setSolidBox(r.x + 0.8, r.z + 0.8, 2.0, 1.0);
    } else if (r.type === 'hall') {
      const carpet = this.propsFactory.createCarpet(r.w * 0.5, r.h * 0.5);
      carpet.position.set(cx, 0.01, cz);
      this.container.add(carpet);

      const table = this.propsFactory.createTableSet();
      table.position.set(cx, 0, cz);
      this.container.add(table);
      this.setSolidBox(cx - 1.0, cz - 0.6, 2.0, 1.2);
    } else if (r.type === 'cellar') {
      const chest = this.propsFactory.createChest(r.x + r.w - 1.5, 0, r.z + r.h - 1.5);
      this.container.add(chest);
    }
  }

  private setSolidBox(minX: number, minZ: number, width: number, depth: number): void {
    const startX = Math.max(0, Math.floor(minX));
    const endX = Math.min(this.dungeon.width - 1, Math.floor(minX + width));
    const startZ = Math.max(0, Math.floor(minZ));
    const endZ = Math.min(this.dungeon.height - 1, Math.floor(minZ + depth));

    for (let z = startZ; z <= endZ; z++) {
      for (let x = startX; x <= endX; x++) {
        this.solidGrid[z][x] = true;
      }
    }
  }

  public isSolid(worldX: number, worldZ: number): boolean {
    const gx = Math.floor(worldX);
    const gz = Math.floor(worldZ);
    if (gx < 0 || gx >= this.dungeon.width || gz < 0 || gz >= this.dungeon.height) {
      return true;
    }
    return this.solidGrid[gz][gx];
  }

  public updateTorches(time: number): void {
    for (const t of this.torchLights) {
      const flicker = Math.sin(time * t.flickerSpeed + t.flickerPhase) * 0.6 +
                      Math.cos(time * (t.flickerSpeed * 1.7) + t.flickerPhase * 2) * 0.3;
      t.light.intensity = Math.max(3.2, t.baseIntensity + flicker);
    }
  }

  public reseed(seed: number): void {
    this.container.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
      }
    });
    this.container.clear();
    this.torchLights = [];
    this.solidGrid = Array.from({ length: this.dungeon.height }, () => Array(this.dungeon.width).fill(false));
    this.dungeon = new BSPDungeon(this.dungeon.width, this.dungeon.height, seed);
    this.build3DMap();
  }

  public setVisible(visible: boolean): void {
    this.container.visible = visible;
  }
}
