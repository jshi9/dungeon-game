import * as THREE from 'three';
import { NoiseGenerator } from './NoiseGenerator';
import { TextureAtlas } from './TextureAtlas';

export class SurfaceChunk {
  public chunkX: number;
  public chunkZ: number;
  public size: number;
  public group: THREE.Group;
  public meshGroup: THREE.Group;
  private noise: NoiseGenerator;
  private atlas: TextureAtlas;

  constructor(chunkX: number, chunkZ: number, size: number, noise: NoiseGenerator, atlas: TextureAtlas) {
    this.chunkX = chunkX;
    this.chunkZ = chunkZ;
    this.size = size;
    this.noise = noise;
    this.atlas = atlas;
    this.group = new THREE.Group();
    this.meshGroup = new THREE.Group();
    this.group.add(this.meshGroup);
    this.buildChunk();
  }

  public buildChunk(): void {
    const worldStartX = this.chunkX * this.size;
    const worldStartZ = this.chunkZ * this.size;

    // Pre-sample heights and biomes of this chunk plus a 1-block border for seamless stitching
    const heights: number[][] = [];
    const biomes: string[][] = [];

    for (let lz = -1; lz <= this.size; lz++) {
      heights[lz + 1] = [];
      biomes[lz + 1] = [];
      for (let lx = -1; lx <= this.size; lx++) {
        const sample = this.noise.getSample(worldStartX + lx, worldStartZ + lz);
        heights[lz + 1][lx + 1] = sample.height;
        biomes[lz + 1][lx + 1] = sample.biome;
      }
    }

    // Geometry vertex buffers for merged materials
    const buckets: Record<string, { positions: number[]; uvs: number[]; normals: number[] }> = {
      grassTop: { positions: [], uvs: [], normals: [] },
      grassSide: { positions: [], uvs: [], normals: [] },
      dirt: { positions: [], uvs: [], normals: [] },
      stone: { positions: [], uvs: [], normals: [] },
      sand: { positions: [], uvs: [], normals: [] },
      water: { positions: [], uvs: [], normals: [] }
    };

    // Add quad with CCW triangle winding (v0, v1, v2, v3)
    const addQuad = (
      bucketKey: string,
      v0: [number, number, number],
      v1: [number, number, number],
      v2: [number, number, number],
      v3: [number, number, number],
      normal: [number, number, number],
      uvScale: [number, number] = [1, 1]
    ) => {
      const b = buckets[bucketKey];
      if (!b) return;

      // Triangle 1: v0, v1, v2
      b.positions.push(...v0, ...v1, ...v2);
      b.normals.push(...normal, ...normal, ...normal);
      b.uvs.push(0, 0, 0, uvScale[1], uvScale[0], uvScale[1]);

      // Triangle 2: v0, v2, v3
      b.positions.push(...v0, ...v2, ...v3);
      b.normals.push(...normal, ...normal, ...normal);
      b.uvs.push(0, 0, uvScale[0], uvScale[1], uvScale[0], 0);
    };

    for (let lz = 0; lz < this.size; lz++) {
      for (let lx = 0; lx < this.size; lx++) {
        const h = heights[lz + 1][lx + 1];
        const biome = biomes[lz + 1][lx + 1];
        const wx = worldStartX + lx;
        const wz = worldStartZ + lz;

        // 1. TOP HORIZONTAL FACE (+Y) with CCW winding: NW -> SW -> SE -> NE
        let topMat = 'grassTop';
        if (biome === 'water') topMat = 'water';
        else if (biome === 'sand') topMat = 'sand';
        else topMat = 'grassTop';

        addQuad(
          topMat,
          [wx, h, wz],         // NW
          [wx, h, wz + 1],     // SW
          [wx + 1, h, wz + 1], // SE
          [wx + 1, h, wz],     // NE
          [0, 1, 0],
          [1, 1]
        );

        // 2. VERTICAL SIDE WALLS (where neighbor height is lower)
        // North face (z - 1) -> normal [0, 0, -1]
        const hNorth = heights[lz][lx + 1];
        if (h > hNorth) {
          const dh = h - hNorth;
          const sideMat = biome === 'stone' ? 'stone' : dh > 1 ? 'dirt' : 'grassSide';
          addQuad(
            sideMat,
            [wx + 1, h, wz],
            [wx + 1, hNorth, wz],
            [wx, hNorth, wz],
            [wx, h, wz],
            [0, 0, -1],
            [1, dh]
          );
        }

        // South face (z + 1) -> normal [0, 0, 1]
        const hSouth = heights[lz + 2][lx + 1];
        if (h > hSouth) {
          const dh = h - hSouth;
          const sideMat = biome === 'stone' ? 'stone' : dh > 1 ? 'dirt' : 'grassSide';
          addQuad(
            sideMat,
            [wx, h, wz + 1],
            [wx, hSouth, wz + 1],
            [wx + 1, hSouth, wz + 1],
            [wx + 1, h, wz + 1],
            [0, 0, 1],
            [1, dh]
          );
        }

        // West face (x - 1) -> normal [-1, 0, 0]
        const hWest = heights[lz + 1][lx];
        if (h > hWest) {
          const dh = h - hWest;
          const sideMat = biome === 'stone' ? 'stone' : dh > 1 ? 'dirt' : 'grassSide';
          addQuad(
            sideMat,
            [wx, h, wz],
            [wx, hWest, wz],
            [wx, hWest, wz + 1],
            [wx, h, wz + 1],
            [-1, 0, 0],
            [1, dh]
          );
        }

        // East face (x + 1) -> normal [1, 0, 0]
        const hEast = heights[lz + 1][lx + 2];
        if (h > hEast) {
          const dh = h - hEast;
          const sideMat = biome === 'stone' ? 'stone' : dh > 1 ? 'dirt' : 'grassSide';
          addQuad(
            sideMat,
            [wx + 1, h, wz + 1],
            [wx + 1, hEast, wz + 1],
            [wx + 1, hEast, wz],
            [wx + 1, h, wz],
            [1, 0, 0],
            [1, dh]
          );
        }

        // 3. PROCEDURAL SURFACE DECORATIONS snapped to terrain height
        if (biome === 'grass' && h > this.noise.waterLevel) {
          const prn = Math.sin(wx * 12.9898 + wz * 78.233) * 43758.5453;
          const hash = prn - Math.floor(prn);
          if (hash > 0.94) {
            this.createPineTree(wx + 0.5, h, wz + 0.5);
          } else if (hash > 0.88 && hash <= 0.90) {
            this.createBoulder(wx + 0.5, h, wz + 0.5);
          }
        }
      }
    }

    // Build meshes from buckets
    const matLookup: Record<string, THREE.MeshStandardMaterial> = {
      grassTop: this.atlas.materials.grassTop,
      grassSide: this.atlas.materials.grassSide,
      dirt: this.atlas.materials.dirt,
      stone: this.atlas.materials.cobblestone,
      sand: this.atlas.materials.sand,
      water: this.atlas.materials.water
    };

    for (const [key, data] of Object.entries(buckets)) {
      if (data.positions.length === 0) continue;
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(data.positions, 3));
      geom.setAttribute('normal', new THREE.Float32BufferAttribute(data.normals, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(data.uvs, 2));

      const mesh = new THREE.Mesh(geom, matLookup[key]);
      mesh.castShadow = key !== 'water';
      mesh.receiveShadow = true;
      this.meshGroup.add(mesh);
    }
  }

  private createPineTree(x: number, baseTerrainY: number, z: number): void {
    const trunkGeom = new THREE.BoxGeometry(0.35, 1.2, 0.35);
    const trunkMesh = new THREE.Mesh(trunkGeom, this.atlas.materials.woodBeam);
    trunkMesh.position.set(x, baseTerrainY + 0.6, z);
    trunkMesh.castShadow = true;
    trunkMesh.receiveShadow = true;
    this.meshGroup.add(trunkMesh);

    // Terraced tiered pine leaves
    const tiers = [
      { size: 1.4, h: 0.7, py: 1.3 },
      { size: 1.0, h: 0.6, py: 1.8 },
      { size: 0.6, h: 0.6, py: 2.3 }
    ];
    for (const t of tiers) {
      const leafGeom = new THREE.BoxGeometry(t.size, t.h, t.size);
      const leafMesh = new THREE.Mesh(leafGeom, this.atlas.materials.grassTop);
      leafMesh.position.set(x, baseTerrainY + t.py, z);
      leafMesh.castShadow = true;
      leafMesh.receiveShadow = true;
      this.meshGroup.add(leafMesh);
    }
  }

  private createBoulder(x: number, baseTerrainY: number, z: number): void {
    const rockGeom = new THREE.BoxGeometry(0.7, 0.5, 0.7);
    const rockMesh = new THREE.Mesh(rockGeom, this.atlas.materials.cobblestone);
    rockMesh.position.set(x, baseTerrainY + 0.25, z);
    rockMesh.castShadow = true;
    rockMesh.receiveShadow = true;
    this.meshGroup.add(rockMesh);
  }

  public dispose(): void {
    this.meshGroup.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
      }
    });
    this.group.clear();
  }
}

export class SurfaceManager {
  public scene: THREE.Scene;
  public noise: NoiseGenerator;
  public atlas: TextureAtlas;
  public chunkSize: number = 16;
  public renderRadius: number = 3; // 7x7 grid of chunks
  public activeChunks: Map<string, SurfaceChunk> = new Map();
  public container: THREE.Group;

  constructor(scene: THREE.Scene, atlas: TextureAtlas) {
    this.scene = scene;
    this.atlas = atlas;
    this.noise = new NoiseGenerator(42);
    this.container = new THREE.Group();
    this.container.name = 'SurfaceWorld';
    this.scene.add(this.container);
  }

  public update(playerX: number, playerZ: number): void {
    const centerChunkX = Math.floor(playerX / this.chunkSize);
    const centerChunkZ = Math.floor(playerZ / this.chunkSize);

    const neededKeys = new Set<string>();

    for (let dz = -this.renderRadius; dz <= this.renderRadius; dz++) {
      for (let dx = -this.renderRadius; dx <= this.renderRadius; dx++) {
        const cx = centerChunkX + dx;
        const cz = centerChunkZ + dz;
        const key = `${cx},${cz}`;
        neededKeys.add(key);

        if (!this.activeChunks.has(key)) {
          const chunk = new SurfaceChunk(cx, cz, this.chunkSize, this.noise, this.atlas);
          this.activeChunks.set(key, chunk);
          this.container.add(chunk.group);
        }
      }
    }

    // Unload distant chunks
    for (const [key, chunk] of this.activeChunks.entries()) {
      if (!neededKeys.has(key)) {
        this.container.remove(chunk.group);
        chunk.dispose();
        this.activeChunks.delete(key);
      }
    }
  }

  public getElevation(x: number, z: number): number {
    return this.noise.getSample(x, z).height;
  }

  public setVisible(visible: boolean): void {
    this.container.visible = visible;
  }
}
