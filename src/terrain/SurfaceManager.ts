import * as THREE from 'three';
import { NoiseGenerator } from './NoiseGenerator';
import { TextureAtlas } from './TextureAtlas';
import { SettingsManager } from '../core/SettingsManager';

/**
 * Creates a PBR Standard Material with procedural 7-grass + 3-road + rock + snow splatting.
 */
export function createTerrainSplatMaterial(atlas: TextureAtlas): THREE.MeshStandardMaterial {
  const mat = new THREE.MeshStandardMaterial({
    roughness: 0.88,
    metalness: 0.05
  });

  mat.onBeforeCompile = (shader) => {
    shader.uniforms.uGrass1 = { value: atlas.textures.grassWildHighland };
    shader.uniforms.uGrass2 = { value: atlas.textures.grassMossDamp };
    shader.uniforms.uGrass3 = { value: atlas.textures.grassPineNeedles };
    shader.uniforms.uGrass4 = { value: atlas.textures.grassScreeTurf };
    shader.uniforms.uGrass5 = { value: atlas.textures.grassMuddyRoots };
    shader.uniforms.uGrass6 = { value: atlas.textures.grassAutumnHeather };
    shader.uniforms.uGrass7 = { value: atlas.textures.grassDeepClover };

    shader.uniforms.uRoad1 = { value: atlas.textures.roadCobblestoneWeathered };
    shader.uniforms.uRoad2 = { value: atlas.textures.roadGravelRutted };
    shader.uniforms.uRoad3 = { value: atlas.textures.roadMossyPavers };

    shader.uniforms.uRock = { value: atlas.textures.alpineCrag };
    shader.uniforms.uSnow = { value: atlas.textures.snow };

    shader.vertexShader = `
      attribute float aTrailDist;
      attribute float aTrailU;
      varying vec3 vWorldPosition;
      varying float vTrailDist;
      varying float vTrailU;
      ${shader.vertexShader}
    `.replace(
      '#include <begin_vertex>',
      `
      #include <begin_vertex>
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      vTrailDist = aTrailDist;
      vTrailU = aTrailU;
      `
    );

    shader.fragmentShader = `
      uniform sampler2D uGrass1;
      uniform sampler2D uGrass2;
      uniform sampler2D uGrass3;
      uniform sampler2D uGrass4;
      uniform sampler2D uGrass5;
      uniform sampler2D uGrass6;
      uniform sampler2D uGrass7;

      uniform sampler2D uRoad1;
      uniform sampler2D uRoad2;
      uniform sampler2D uRoad3;

      uniform sampler2D uRock;
      uniform sampler2D uSnow;

      varying vec3 vWorldPosition;
      varying float vTrailDist;
      varying float vTrailU;

      float hash2D(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }

      float noise2D(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash2D(i + vec2(0.0, 0.0)), hash2D(i + vec2(1.0, 0.0)), u.x),
                   mix(hash2D(i + vec2(0.0, 1.0)), hash2D(i + vec2(1.0, 1.0)), u.x), u.y);
      }

      float fbm2D(vec2 p) {
        float v = 0.0;
        v += 0.5000 * noise2D(p); p *= 2.02;
        v += 0.2500 * noise2D(p); p *= 2.03;
        v += 0.1250 * noise2D(p);
        return v;
      }
      ${shader.fragmentShader}
    `.replace(
      '#include <map_fragment>',
      `
      vec2 wp = vWorldPosition.xz;
      float nMacro = fbm2D(wp * 0.035);
      float nMicro = fbm2D(wp * 0.14 + vec2(37.2, 19.8));
      float nDetail = fbm2D(wp * 0.32 + vec2(83.1, 49.3));

      // Coordinate scaling
      vec2 uvG1 = wp * 0.08 + vec2(sin(wp.y * 0.04), cos(wp.x * 0.04)) * 0.025;
      vec2 uvG2 = wp * 0.12;

      // Sample 7 grass textures
      vec4 colGrass1 = texture2D(uGrass1, uvG1);
      vec4 colGrass2 = texture2D(uGrass2, uvG1);
      vec4 colGrass3 = texture2D(uGrass3, uvG1);
      vec4 colGrass4 = texture2D(uGrass4, uvG2);
      vec4 colGrass5 = texture2D(uGrass5, uvG1);
      vec4 colGrass6 = texture2D(uGrass6, uvG2);
      vec4 colGrass7 = texture2D(uGrass7, uvG2);

      // Multi-texture continuous procedural blending
      vec4 grassBlend;
      if (nMacro < 0.35) {
        float t = smoothstep(0.0, 0.35, nMacro);
        grassBlend = mix(mix(colGrass1, colGrass7, nMicro), colGrass2, t);
      } else if (nMacro < 0.68) {
        float t = smoothstep(0.35, 0.68, nMacro);
        grassBlend = mix(colGrass2, mix(colGrass3, colGrass5, nMicro), t);
      } else {
        float t = smoothstep(0.68, 1.0, nMacro);
        grassBlend = mix(mix(colGrass3, colGrass5, nMicro), mix(colGrass4, colGrass6, nDetail), t);
      }

      // Sample Road Textures along spline
      vec2 uvRoad = vec2(vTrailU, vWorldPosition.z * 0.14);
      vec4 colRoadCobble = texture2D(uRoad1, uvRoad);
      vec4 colRoadGravel = texture2D(uRoad2, uvRoad);
      vec4 colRoadMossy  = texture2D(uRoad3, uvRoad);

      float rutNoise = sin(vWorldPosition.z * 0.25) * 0.25;
      float distToCenter = abs(vTrailU - 0.5) * 2.0;
      vec4 roadBlend = mix(colRoadCobble, colRoadGravel, smoothstep(0.35, 0.75, distToCenter + rutNoise));
      roadBlend = mix(roadBlend, colRoadMossy, smoothstep(0.70, 1.0, distToCenter));

      // Blend Road into Forest Floor / Grass
      float roadAlpha = 1.0 - smoothstep(1.8, 3.8, vTrailDist);
      vec4 finalGround = mix(grassBlend, roadBlend, roadAlpha);

      // Steep Rock Slope Blend (Alpine Crag)
      float slopeFactor = 1.0 - vNormal.y;
      vec4 colRock = texture2D(uRock, wp * 0.08);
      float rockWeight = smoothstep(0.30, 0.58, slopeFactor) * (1.0 - roadAlpha * 0.75);
      finalGround = mix(finalGround, colRock, rockWeight);

      // Snow on High Mountain Summits
      if (vWorldPosition.y > 28.0) {
        vec4 colSnow = texture2D(uSnow, wp * 0.08);
        float snowWeight = smoothstep(28.0, 36.0, vWorldPosition.y);
        finalGround = mix(finalGround, colSnow, snowWeight * (1.0 - roadAlpha * 0.8));
      }

      diffuseColor *= finalGround;
      `
    );
  };

  return mat;
}

export class SurfaceChunk {
  public chunkX: number;
  public chunkZ: number;
  public size: number;
  public group: THREE.Group;
  private noise: NoiseGenerator;
  private atlas: TextureAtlas;
  private terrainMat: THREE.MeshStandardMaterial;

  constructor(
    chunkX: number,
    chunkZ: number,
    size: number,
    noise: NoiseGenerator,
    atlas: TextureAtlas,
    terrainMat: THREE.MeshStandardMaterial
  ) {
    this.chunkX = chunkX;
    this.chunkZ = chunkZ;
    this.size = size;
    this.noise = noise;
    this.atlas = atlas;
    this.terrainMat = terrainMat;
    this.group = new THREE.Group();
    this.buildChunk();
  }

  public buildChunk(): void {
    const worldStartX = this.chunkX * this.size;
    const worldStartZ = this.chunkZ * this.size;

    const segments = 24;
    const step = this.size / segments;

    // 1. Unified Terrain Buffer Geometry with Splat Blend Attributes
    const terrainPositions: number[] = [];
    const terrainNormals: number[] = [];
    const terrainUvs: number[] = [];
    const trailDists: number[] = [];
    const trailUs: number[] = [];

    // Separate Buckets for Flora & Structures
    const floraBuckets: Record<string, { positions: number[]; uvs: number[]; normals: number[] }> = {};
    for (let i = 0; i < 5; i++) {
      floraBuckets[`bark_${i}`] = { positions: [], uvs: [], normals: [] };
      floraBuckets[`foliage_${i}`] = { positions: [], uvs: [], normals: [] };
    }
    floraBuckets.stone = { positions: [], uvs: [], normals: [] };
    floraBuckets.wood = { positions: [], uvs: [], normals: [] };
    floraBuckets.brass = { positions: [], uvs: [], normals: [] };

    // Pre-calculate heights, continuous analytic normals, and road spline coords
    const gridVerts: Array<Array<{ pos: THREE.Vector3; normal: THREE.Vector3; trailDist: number; trailU: number }>> = [];

    for (let gz = 0; gz <= segments; gz++) {
      gridVerts[gz] = [];
      const wz = worldStartZ + gz * step;
      const trailCenterX = this.noise.getTrailCenterX(wz);
      const roadWidth = 3.2;

      for (let gx = 0; gx <= segments; gx++) {
        const wx = worldStartX + gx * step;
        const y = this.noise.getElevation(wx, wz);

        const eps = 0.25;
        const hL = this.noise.getElevation(wx - eps, wz);
        const hR = this.noise.getElevation(wx + eps, wz);
        const hD = this.noise.getElevation(wx, wz - eps);
        const hU = this.noise.getElevation(wx, wz + eps);

        const normal = new THREE.Vector3(hL - hR, 2 * eps, hD - hU).normalize();
        const trailDist = this.noise.getTrailDistance(wx, wz);
        const trailU = ((wx - trailCenterX) / roadWidth) * 0.5 + 0.5;

        gridVerts[gz][gx] = {
          pos: new THREE.Vector3(wx, y, wz),
          normal,
          trailDist,
          trailU
        };
      }
    }

    // Build unified terrain triangles
    for (let gz = 0; gz < segments; gz++) {
      for (let gx = 0; gx < segments; gx++) {
        const v00 = gridVerts[gz][gx];
        const v10 = gridVerts[gz][gx + 1];
        const v01 = gridVerts[gz + 1][gx];
        const v11 = gridVerts[gz + 1][gx + 1];

        // Triangle 1: v00 -> v01 -> v10
        terrainPositions.push(v00.pos.x, v00.pos.y, v00.pos.z);
        terrainPositions.push(v01.pos.x, v01.pos.y, v01.pos.z);
        terrainPositions.push(v10.pos.x, v10.pos.y, v10.pos.z);

        terrainNormals.push(v00.normal.x, v00.normal.y, v00.normal.z);
        terrainNormals.push(v01.normal.x, v01.normal.y, v01.normal.z);
        terrainNormals.push(v10.normal.x, v10.normal.y, v10.normal.z);

        terrainUvs.push(0, 0, 0, 1, 1, 0);
        trailDists.push(v00.trailDist, v01.trailDist, v10.trailDist);
        trailUs.push(v00.trailU, v01.trailU, v10.trailU);

        // Triangle 2: v10 -> v01 -> v11
        terrainPositions.push(v10.pos.x, v10.pos.y, v10.pos.z);
        terrainPositions.push(v01.pos.x, v01.pos.y, v01.pos.z);
        terrainPositions.push(v11.pos.x, v11.pos.y, v11.pos.z);

        terrainNormals.push(v10.normal.x, v10.normal.y, v10.normal.z);
        terrainNormals.push(v01.normal.x, v01.normal.y, v01.normal.z);
        terrainNormals.push(v11.normal.x, v11.normal.y, v11.normal.z);

        terrainUvs.push(1, 0, 0, 1, 1, 1);
        trailDists.push(v10.trailDist, v01.trailDist, v11.trailDist);
        trailUs.push(v10.trailU, v01.trailU, v11.trailU);
      }
    }

    // Create unified terrain mesh
    const tGeom = new THREE.BufferGeometry();
    tGeom.setAttribute('position', new THREE.Float32BufferAttribute(terrainPositions, 3));
    tGeom.setAttribute('normal', new THREE.Float32BufferAttribute(terrainNormals, 3));
    tGeom.setAttribute('uv', new THREE.Float32BufferAttribute(terrainUvs, 2));
    tGeom.setAttribute('aTrailDist', new THREE.Float32BufferAttribute(trailDists, 1));
    tGeom.setAttribute('aTrailU', new THREE.Float32BufferAttribute(trailUs, 1));

    const terrainMesh = new THREE.Mesh(tGeom, this.terrainMat);
    terrainMesh.receiveShadow = true;
    this.group.add(terrainMesh);

    // 2. Populate Flora with Diverse Barks, Foliage, and Root Buttresses
    this.populateChunkFlora(worldStartX, worldStartZ, floraBuckets);

    // 3. Create merged meshes for each tree bark and foliage type
    for (let i = 0; i < 5; i++) {
      const bData = floraBuckets[`bark_${i}`];
      if (bData && bData.positions.length > 0) {
        const bg = new THREE.BufferGeometry();
        bg.setAttribute('position', new THREE.Float32BufferAttribute(bData.positions, 3));
        bg.setAttribute('normal', new THREE.Float32BufferAttribute(bData.normals, 3));
        bg.setAttribute('uv', new THREE.Float32BufferAttribute(bData.uvs, 2));
        const bm = new THREE.Mesh(bg, this.atlas.barkMaterials[i]);
        bm.castShadow = true;
        bm.receiveShadow = true;
        this.group.add(bm);
      }

      const fData = floraBuckets[`foliage_${i}`];
      if (fData && fData.positions.length > 0) {
        const fg = new THREE.BufferGeometry();
        fg.setAttribute('position', new THREE.Float32BufferAttribute(fData.positions, 3));
        fg.setAttribute('normal', new THREE.Float32BufferAttribute(fData.normals, 3));
        fg.setAttribute('uv', new THREE.Float32BufferAttribute(fData.uvs, 2));
        const fm = new THREE.Mesh(fg, this.atlas.foliageMaterials[i]);
        fm.castShadow = true;
        fm.receiveShadow = true;
        this.group.add(fm);
      }
    }

    // Castle / Stone
    const sData = floraBuckets.stone;
    if (sData && sData.positions.length > 0) {
      const sg = new THREE.BufferGeometry();
      sg.setAttribute('position', new THREE.Float32BufferAttribute(sData.positions, 3));
      sg.setAttribute('normal', new THREE.Float32BufferAttribute(sData.normals, 3));
      sg.setAttribute('uv', new THREE.Float32BufferAttribute(sData.uvs, 2));
      const sm = new THREE.Mesh(sg, this.atlas.materials.stone);
      sm.castShadow = true;
      sm.receiveShadow = true;
      this.group.add(sm);
    }

    // Carved Timber Posts / Wood
    const wData = floraBuckets.wood;
    if (wData && wData.positions.length > 0) {
      const wg = new THREE.BufferGeometry();
      wg.setAttribute('position', new THREE.Float32BufferAttribute(wData.positions, 3));
      wg.setAttribute('normal', new THREE.Float32BufferAttribute(wData.normals, 3));
      wg.setAttribute('uv', new THREE.Float32BufferAttribute(wData.uvs, 2));
      const wm = new THREE.Mesh(wg, this.atlas.materials.darkOak);
      wm.castShadow = true;
      wm.receiveShadow = true;
      this.group.add(wm);
    }

    // Antique Brass Lanterns
    const brData = floraBuckets.brass;
    if (brData && brData.positions.length > 0) {
      const brg = new THREE.BufferGeometry();
      brg.setAttribute('position', new THREE.Float32BufferAttribute(brData.positions, 3));
      brg.setAttribute('normal', new THREE.Float32BufferAttribute(brData.normals, 3));
      brg.setAttribute('uv', new THREE.Float32BufferAttribute(brData.uvs, 2));
      const brm = new THREE.Mesh(brg, this.atlas.materials.brassMetal);
      brm.castShadow = true;
      brm.receiveShadow = true;
      this.group.add(brm);
    }
  }

  private chunkHash(cx: number, cz: number, salt: number): number {
    let h = (cx * 374761393 + cz * 668265263 + salt * 1013904223) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
  }

  private populateChunkFlora(
    worldStartX: number,
    worldStartZ: number,
    floraBuckets: Record<string, { positions: number[]; uvs: number[]; normals: number[] }>
  ): void {
    // 1. Gothic Castle Spire at summit
    if (this.chunkX === 0 && this.chunkZ === -9) {
      this.buildGothicCastleLandmark(0, this.noise.getElevation(0, -140), -140, floraBuckets);
    }

    // 2. Ecological Tree Clustering
    const groveNoise = this.chunkHash(this.chunkX, this.chunkZ, 42);
    const maxCandidates = groveNoise > 0.45 ? 6 : groveNoise > 0.2 ? 3 : 1;
    const placedTrees: Array<{ x: number; z: number }> = [];

    for (let i = 0; i < maxCandidates; i++) {
      const rx = this.chunkHash(this.chunkX, this.chunkZ, i * 7 + 101);
      const rz = this.chunkHash(this.chunkX, this.chunkZ, i * 11 + 203);

      const wx = worldStartX + 1.5 + rx * (this.size - 3.0);
      const wz = worldStartZ + 1.5 + rz * (this.size - 3.0);

      const distToTrail = this.noise.getTrailDistance(wx, wz);
      if (distToTrail < 4.6) continue;

      const distToCastle = Math.hypot(wx, wz - (-140));
      if (distToCastle < 32.0) continue;

      const wy = this.noise.getElevation(wx, wz);
      if (wy > 33.0) continue; // Above snowline

      let tooClose = false;
      for (const pt of placedTrees) {
        if (Math.hypot(wx - pt.x, wz - pt.z) < 3.0) {
          tooClose = true;
          break;
        }
      }
      if (tooClose) continue;

      placedTrees.push({ x: wx, z: wz });

      // Variety: random scale, rotation, tiers, and 5-bark & 5-foliage selection
      const scaleRand = this.chunkHash(this.chunkX, this.chunkZ, i * 13 + 307);
      const scale = 0.8 + scaleRand * 0.7;
      const rotY = scaleRand * Math.PI * 2;
      const tierCount = scaleRand > 0.6 ? 4 : scaleRand > 0.25 ? 3 : 2;

      const barkIdx = Math.floor(scaleRand * 100) % 5;
      const folIdx = Math.floor(scaleRand * 300 + 7) % 5;

      this.mergeRealisticTree(wx, wy, wz, scale, rotY, tierCount, barkIdx, folIdx, floraBuckets);
    }

    // 3. Roadside Lantern Posts
    if (this.chunkZ % 3 === 0) {
      const wz = worldStartZ + 8;
      const trailX = this.noise.getTrailCenterX(wz);
      const postX = trailX + 2.5;
      if (postX >= worldStartX && postX < worldStartX + this.size) {
        const postY = this.noise.getElevation(postX, wz);
        this.mergeTrailPost(postX, postY, wz, floraBuckets);
      }
    }
  }

  /**
   * Constructs an authentic 3D tree with tapered 8-sided cylinder trunk,
   * 4 flared root buttresses, smooth radial normals, and dense 3D needle tiers.
   */
  private mergeRealisticTree(
    x: number,
    y: number,
    z: number,
    scale: number,
    rotY: number,
    tierCount: number,
    barkIdx: number,
    folIdx: number,
    floraBuckets: Record<string, { positions: number[]; uvs: number[]; normals: number[] }>
  ): void {
    const bark = floraBuckets[`bark_${barkIdx}`];
    const foliage = floraBuckets[`foliage_${folIdx}`];

    // 1. Tapered Trunk (8 Sides, Base R=0.38, Top R=0.16)
    const sides = 8;
    const trunkH = 9.0 * scale;
    const rBase = 0.36 * scale;
    const rTop = 0.16 * scale;

    for (let i = 0; i < sides; i++) {
      const a0 = rotY + (i / sides) * Math.PI * 2;
      const a1 = rotY + ((i + 1) / sides) * Math.PI * 2;

      // Bottom vertices
      const x0 = x + Math.cos(a0) * rBase;
      const z0 = z + Math.sin(a0) * rBase;
      const x1 = x + Math.cos(a1) * rBase;
      const z1 = z + Math.sin(a1) * rBase;

      // Top vertices
      const x0_top = x + Math.cos(a0) * rTop;
      const z0_top = z + Math.sin(a0) * rTop;
      const x1_top = x + Math.cos(a1) * rTop;
      const z1_top = z + Math.sin(a1) * rTop;

      const u0 = i / sides;
      const u1 = (i + 1) / sides;
      const v0 = 0.0;
      const v1 = trunkH * 0.45;

      const nx0 = Math.cos(a0);
      const nz0 = Math.sin(a0);
      const nx1 = Math.cos(a1);
      const nz1 = Math.sin(a1);

      // Triangle 1: (x0, y, z0) -> (x0_top, y + trunkH, z0_top) -> (x1, y, z1)
      bark.positions.push(x0, y - 0.2, z0, x0_top, y + trunkH, z0_top, x1, y - 0.2, z1);
      bark.normals.push(nx0, 0, nz0, nx0, 0, nz0, nx1, 0, nz1);
      bark.uvs.push(u0, v0, u0, v1, u1, v0);

      // Triangle 2: (x1, y, z1) -> (x0_top, y + trunkH, z0_top) -> (x1_top, y + trunkH, z1_top)
      bark.positions.push(x1, y - 0.2, z1, x0_top, y + trunkH, z0_top, x1_top, y + trunkH, z1_top);
      bark.normals.push(nx1, 0, nz1, nx0, 0, nz0, nx1, 0, nz1);
      bark.uvs.push(u1, v0, u0, v1, u1, v1);
    }

    // 4 Flared Root Buttresses at base
    for (let r = 0; r < 4; r++) {
      const ra = rotY + (r / 4) * Math.PI * 2 + Math.PI / 8;
      const rx_tip = x + Math.cos(ra) * (0.68 * scale);
      const rz_tip = z + Math.sin(ra) * (0.68 * scale);
      const rx_mid1 = x + Math.cos(ra - 0.2) * (rBase * 1.1);
      const rz_mid1 = z + Math.sin(ra - 0.2) * (rBase * 1.1);
      const rx_mid2 = x + Math.cos(ra + 0.2) * (rBase * 1.1);
      const rz_mid2 = z + Math.sin(ra + 0.2) * (rBase * 1.1);

      bark.positions.push(rx_mid1, y + 0.6 * scale, rz_mid1, rx_tip, y - 0.3, rz_tip, rx_mid2, y + 0.6 * scale, rz_mid2);
      const rnx = Math.cos(ra);
      const rnz = Math.sin(ra);
      bark.normals.push(rnx, 0.5, rnz, rnx, 0.5, rnz, rnx, 0.5, rnz);
      bark.uvs.push(0, 0, 0.5, 0.8, 1, 0);
    }

    // 2. Organic Foliage Canopy Tiers with 3D Branch Planes
    const baseRadius = 2.4 * scale;
    const startY = 3.4 * scale;

    for (let t = 0; t < tierCount; t++) {
      const tierFrac = t / tierCount;
      const tOffsetY = startY + t * (2.0 * scale);
      const tR = baseRadius * (1.0 - tierFrac * 0.48);
      const tH = (3.4 - tierFrac * 0.6) * scale;
      const apexY = y + tOffsetY + tH;
      const baseY = y + tOffsetY;
      const tierRot = rotY + t * 0.55;

      // Outer Conical Needle Skirt (8 Sides)
      for (let i = 0; i < sides; i++) {
        const a0 = tierRot + (i / sides) * Math.PI * 2;
        const a1 = tierRot + ((i + 1) / sides) * Math.PI * 2;
        const bx0 = x + Math.cos(a0) * tR;
        const bz0 = z + Math.sin(a0) * tR;
        const bx1 = x + Math.cos(a1) * tR;
        const bz1 = z + Math.sin(a1) * tR;

        // Front Face
        foliage.positions.push(bx0, baseY, bz0, x, apexY, z, bx1, baseY, bz1);
        const nx = Math.cos((a0 + a1) * 0.5);
        const nz = Math.sin((a0 + a1) * 0.5);
        foliage.normals.push(nx, 0.4, nz, 0, 1, 0, nx, 0.4, nz);
        foliage.uvs.push(0, 0, 0.5, 1, 1, 0);

        // Double-sided backface for dense silhouette
        foliage.positions.push(bx1, baseY, bz1, x, apexY, z, bx0, baseY, bz0);
        foliage.normals.push(-nx, 0.4, -nz, 0, 1, 0, -nx, 0.4, -nz);
        foliage.uvs.push(1, 0, 0.5, 1, 0, 0);
      }

      // 4 Interior Branch Quads for deep 3D foliage volume
      for (let b = 0; b < 4; b++) {
        const ba = tierRot + (b / 4) * Math.PI + Math.PI / 4;
        const bx0 = x + Math.cos(ba) * (tR * 0.85);
        const bz0 = z + Math.sin(ba) * (tR * 0.85);
        const bx1 = x - Math.cos(ba) * (tR * 0.85);
        const bz1 = z - Math.sin(ba) * (tR * 0.85);

        foliage.positions.push(bx0, baseY, bz0, x, apexY, z, bx1, baseY, bz1);
        foliage.normals.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
        foliage.uvs.push(0, 0, 0.5, 1, 1, 0);

        foliage.positions.push(bx1, baseY, bz1, x, apexY, z, bx0, baseY, bz0);
        foliage.normals.push(0, 1, 0, 0, 1, 0, 0, 1, 0);
        foliage.uvs.push(1, 0, 0.5, 1, 0, 0);
      }
    }
  }

  private mergeTrailPost(
    x: number,
    y: number,
    z: number,
    floraBuckets: Record<string, { positions: number[]; uvs: number[]; normals: number[] }>
  ): void {
    const wood = floraBuckets.wood;
    const brass = floraBuckets.brass;
    const h = 2.4;
    const r = 0.09;

    // 1. Vertical Timber Post (Square)
    for (let i = 0; i < 4; i++) {
      const a0 = (i / 4) * Math.PI * 2;
      const a1 = ((i + 1) / 4) * Math.PI * 2;
      const x0 = x + Math.cos(a0) * r;
      const z0 = z + Math.sin(a0) * r;
      const x1 = x + Math.cos(a1) * r;
      const z1 = z + Math.sin(a1) * r;

      const nx0 = Math.cos(a0);
      const nz0 = Math.sin(a0);
      const nx1 = Math.cos(a1);
      const nz1 = Math.sin(a1);
      const u0 = i / 4;
      const u1 = (i + 1) / 4;
      const v0 = 0.0;
      const v1 = h * 0.5;

      wood.positions.push(x0, y - 0.2, z0, x0, y + h, z0, x1, y - 0.2, z1);
      wood.normals.push(nx0, 0, nz0, nx0, 0, nz0, nx1, 0, nz1);
      wood.uvs.push(u0, v0, u0, v1, u1, v0);

      wood.positions.push(x1, y - 0.2, z1, x0, y + h, z0, x1, y + h, z1);
      wood.normals.push(nx1, 0, nz1, nx0, 0, nz0, nx1, 0, nz1);
      wood.uvs.push(u1, v0, u0, v1, u1, v1);
    }

    // 2. Horizontal Cross Beam Support
    const armLen = 0.45;
    wood.positions.push(x - r, y + h - 0.2, z, x - r - armLen, y + h - 0.2, z, x - r, y + h, z);
    wood.normals.push(0, 0, 1, 0, 0, 1, 0, 0, 1);
    wood.uvs.push(0, 0, 1, 0, 0, 1);

    // 3. Hanging Antique Brass Lantern Cage
    const lx = x - r - armLen + 0.08;
    const ly = y + h - 0.55;
    const lz = z;
    const lr = 0.12;
    const lh = 0.28;

    for (let i = 0; i < 4; i++) {
      const a0 = (i / 4) * Math.PI * 2;
      const a1 = ((i + 1) / 4) * Math.PI * 2;
      const x0 = lx + Math.cos(a0) * lr;
      const z0 = lz + Math.sin(a0) * lr;
      const x1 = lx + Math.cos(a1) * lr;
      const z1 = lz + Math.sin(a1) * lr;

      brass.positions.push(x0, ly, z0, x0, ly + lh, z0, x1, ly, z1);
      brass.normals.push(0, 0, 1, 0, 0, 1, 0, 0, 1);
      brass.uvs.push(0, 0, 0, 1, 1, 0);

      brass.positions.push(x1, ly, z1, x0, ly + lh, z0, x1, ly + lh, z1);
      brass.normals.push(0, 0, 1, 0, 0, 1, 0, 0, 1);
      brass.uvs.push(1, 0, 0, 1, 1, 1);
    }
  }

  private buildGothicCastleLandmark(
    cx: number,
    cy: number,
    cz: number,
    floraBuckets: Record<string, { positions: number[]; uvs: number[]; normals: number[] }>
  ): void {
    const stone = floraBuckets.stone;
    const roof = floraBuckets.bark_4;

    const sides = 8;
    const r = 4.8;
    const h = 22.0;
    for (let i = 0; i < sides; i++) {
      const a0 = (i / sides) * Math.PI * 2;
      const a1 = ((i + 1) / sides) * Math.PI * 2;
      const x0 = cx + Math.cos(a0) * r;
      const z0 = cz + Math.sin(a0) * r;
      const x1 = cx + Math.cos(a1) * r;
      const z1 = cz + Math.sin(a1) * r;

      const nx0 = Math.cos(a0);
      const nz0 = Math.sin(a0);
      const nx1 = Math.cos(a1);
      const nz1 = Math.sin(a1);
      const u0 = (i / sides) * 4;
      const u1 = ((i + 1) / sides) * 4;
      const v0 = 0.0;
      const v1 = h * 0.3;

      // Triangle 1: (x0, cy, z0) -> (x0, cy + h, z0) -> (x1, cy, z1)
      stone.positions.push(x0, cy, z0, x0, cy + h, z0, x1, cy, z1);
      stone.normals.push(nx0, 0, nz0, nx0, 0, nz0, nx1, 0, nz1);
      stone.uvs.push(u0, v0, u0, v1, u1, v0);

      // Triangle 2: (x1, cy, z1) -> (x0, cy + h, z0) -> (x1, cy + h, z1)
      stone.positions.push(x1, cy, z1, x0, cy + h, z0, x1, cy + h, z1);
      stone.normals.push(nx1, 0, nz1, nx0, 0, nz0, nx1, 0, nz1);
      stone.uvs.push(u1, v0, u0, v1, u1, v1);

      // Roof cone facet
      const apexY = cy + h + 8.5;
      roof.positions.push(x0, cy + h, z0, cx, apexY, cz, x1, cy + h, z1);
      roof.normals.push(nx0, 0.6, nz0, 0, 1, 0, nx1, 0.6, nz1);
      roof.uvs.push(0, 0, 0.5, 1, 1, 0);
    }
  }

  public dispose(): void {
    this.group.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
      }
    });
    this.group.clear();
  }
}

export class SurfaceManager {
  public scene: THREE.Scene;
  public atlas: TextureAtlas;
  public noise: NoiseGenerator;
  public chunkSize: number = 16;
  public renderRadius: number = 4;
  private chunks: Map<string, SurfaceChunk> = new Map();
  public group: THREE.Group;
  public isVisible: boolean = true;
  private terrainSplatMat: THREE.MeshStandardMaterial;

  private lastChunkX: number = -999999;
  private lastChunkZ: number = -999999;

  constructor(scene: THREE.Scene, atlas: TextureAtlas, seed: number = 12345) {
    this.scene = scene;
    this.atlas = atlas;
    this.noise = new NoiseGenerator(seed);
    this.terrainSplatMat = createTerrainSplatMaterial(atlas);
    this.group = new THREE.Group();
    this.group.name = 'SurfaceManager';
    this.scene.add(this.group);

    const s = SettingsManager.getInstance().settings;
    this.renderRadius = s.renderDistance || 4;
  }

  public setVisible(visible: boolean): void {
    this.isVisible = visible;
    this.group.visible = visible;
  }

  public reseed(seed: number): void {
    this.noise = new NoiseGenerator(seed);
    this.clearAll();
    this.lastChunkX = -999999;
    this.lastChunkZ = -999999;
    this.update(0, 0, true);
  }

  public setRenderRadius(radius: number): void {
    this.renderRadius = THREE.MathUtils.clamp(radius, 2, 8);
    this.lastChunkX = -999999;
    this.lastChunkZ = -999999;
    this.update(0, 0, true);
  }

  public getElevation(worldX: number, worldZ: number): number {
    return this.noise.getElevation(worldX, worldZ);
  }

  public update(playerX: number, playerZ: number, force: boolean = false): void {
    if (!this.isVisible && !force) return;

    const centerChunkX = Math.floor(playerX / this.chunkSize);
    const centerChunkZ = Math.floor(playerZ / this.chunkSize);

    if (!force && centerChunkX === this.lastChunkX && centerChunkZ === this.lastChunkZ) {
      return;
    }

    this.lastChunkX = centerChunkX;
    this.lastChunkZ = centerChunkZ;

    const activeKeys = new Set<string>();

    for (let dz = -this.renderRadius; dz <= this.renderRadius; dz++) {
      for (let dx = -this.renderRadius; dx <= this.renderRadius; dx++) {
        const cx = centerChunkX + dx;
        const cz = centerChunkZ + dz;
        const key = `${cx},${cz}`;
        activeKeys.add(key);

        if (!this.chunks.has(key)) {
          const chunk = new SurfaceChunk(
            cx,
            cz,
            this.chunkSize,
            this.noise,
            this.atlas,
            this.terrainSplatMat
          );
          this.chunks.set(key, chunk);
          this.group.add(chunk.group);
        }
      }
    }

    this.chunks.forEach((chunk, key) => {
      if (!activeKeys.has(key)) {
        this.group.remove(chunk.group);
        chunk.dispose();
        this.chunks.delete(key);
      }
    });
  }

  public clearAll(): void {
    this.chunks.forEach((chunk) => {
      this.group.remove(chunk.group);
      chunk.dispose();
    });
    this.chunks.clear();
    this.lastChunkX = -999999;
    this.lastChunkZ = -999999;
  }
}

