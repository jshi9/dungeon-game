import { createNoise2D } from 'simplex-noise';

export type BiomeType = 'meadow' | 'forest' | 'alpine' | 'snow' | 'swamp' | 'citadel' | 'trail';

export interface StructurePOI {
  id: string;
  type: 'citadel' | 'watchtower' | 'crypt_gate' | 'shrine' | 'campsite';
  x: number;
  y: number;
  z: number;
  radius: number;
  rotationY: number;
}

export interface TerrainSample {
  height: number;
  rawHeight: number;
  biome: 'grass' | 'trail' | 'stone' | 'snow';
  biomeType: BiomeType;
  slope: number;
  isTrail: boolean;
  trailFactor: number;
}

export class NoiseGenerator {
  public seed: number;
  private continentalNoise: (x: number, y: number) => number;
  private erosionNoise: (x: number, y: number) => number;
  private peaksNoise: (x: number, y: number) => number;
  private detailNoise: (x: number, y: number) => number;
  private tempNoise: (x: number, y: number) => number;
  private humidityNoise: (x: number, y: number) => number;

  public baseHeight: number = 6.0;

  // Seed-derived Fourier trail parameters
  private trailAmp1: number;
  private trailFreq1: number;
  private trailPhase1: number;
  private trailAmp2: number;
  private trailFreq2: number;
  private trailPhase2: number;
  private trailAmp3: number;
  private trailFreq3: number;
  private trailPhase3: number;

  // Seed-derived procedural structures
  public structures: StructurePOI[] = [];
  public citadelPOI!: StructurePOI;

  constructor(seed: number = 12345) {
    this.seed = seed;

    const prng1 = this.createPrng(seed);
    const prng2 = this.createPrng(seed + 1013);
    const prng3 = this.createPrng(seed + 2039);
    const prng4 = this.createPrng(seed + 3079);
    const prng5 = this.createPrng(seed + 4127);
    const prng6 = this.createPrng(seed + 5233);

    this.continentalNoise = createNoise2D(prng1);
    this.erosionNoise = createNoise2D(prng2);
    this.peaksNoise = createNoise2D(prng3);
    this.detailNoise = createNoise2D(prng4);
    this.tempNoise = createNoise2D(prng5);
    this.humidityNoise = createNoise2D(prng6);

    // Derive deterministic trail harmonics from seed
    const sRand1 = this.hashSeed(seed, 1);
    const sRand2 = this.hashSeed(seed, 2);
    const sRand3 = this.hashSeed(seed, 3);
    const sRand4 = this.hashSeed(seed, 4);
    const sRand5 = this.hashSeed(seed, 5);
    const sRand6 = this.hashSeed(seed, 6);
    const sRand7 = this.hashSeed(seed, 7);
    const sRand8 = this.hashSeed(seed, 8);
    const sRand9 = this.hashSeed(seed, 9);

    this.trailAmp1 = 10.0 + sRand1 * 10.0;
    this.trailFreq1 = 0.016 + sRand2 * 0.014;
    this.trailPhase1 = sRand3 * Math.PI * 2;

    this.trailAmp2 = 5.0 + sRand4 * 6.0;
    this.trailFreq2 = 0.006 + sRand5 * 0.006;
    this.trailPhase2 = sRand6 * Math.PI * 2;

    this.trailAmp3 = 2.5 + sRand7 * 3.0;
    this.trailFreq3 = 0.038 + sRand8 * 0.02;
    this.trailPhase3 = sRand9 * Math.PI * 2;

    // Build procedural structures based on seed
    this.generateSeededStructures();
  }

  private createPrng(seed: number) {
    let s = Math.abs(seed | 0) % 2147483647;
    if (s <= 0) s += 2147483646;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  public hashSeed(seed: number, salt: number): number {
    let h = (seed * 374761393 + salt * 668265263) | 0;
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
  }

  /**
   * Procedural Landmark Generation per Seed:
   * 1. Citadel / Castle at northern mountain summit
   * 2. Ruined Watchtowers on high ridges
   * 3. Ancient Crypt Gateways on rock walls
   * 4. Roadside Shrines along the trail
   */
  private generateSeededStructures(): void {
    this.structures = [];

    // 1. Primary Gothic Citadel / Summit Fortress
    const cZ = -110.0 - this.hashSeed(this.seed, 101) * 50.0;
    const cX = this.getTrailCenterX(cZ) + (this.hashSeed(this.seed, 102) * 12.0 - 6.0);
    const cY = 24.0 + this.hashSeed(this.seed, 103) * 6.0;

    this.citadelPOI = {
      id: 'citadel_primary',
      type: 'citadel',
      x: cX,
      y: cY,
      z: cZ,
      radius: 28.0,
      rotationY: this.hashSeed(this.seed, 104) * Math.PI * 2
    };
    this.structures.push(this.citadelPOI);

    // 2. Ruined Stone Watchtowers (2 towers at strategic high ridges)
    for (let i = 0; i < 2; i++) {
      const tZ = -35.0 - i * 50.0 + (this.hashSeed(this.seed, 201 + i) * 20.0 - 10.0);
      const side = (this.hashSeed(this.seed, 202 + i) > 0.5 ? 1 : -1);
      const tX = this.getTrailCenterX(tZ) + side * (16.0 + this.hashSeed(this.seed, 203 + i) * 14.0);
      const tY = 16.0 + this.hashSeed(this.seed, 204 + i) * 8.0;

      this.structures.push({
        id: `watchtower_${i}`,
        type: 'watchtower',
        x: tX,
        y: tY,
        z: tZ,
        radius: 8.0,
        rotationY: this.hashSeed(this.seed, 205 + i) * Math.PI * 2
      });
    }

    // 3. Ancient Crypt Gateways (Nestled into cliffsides)
    const crZ = -65.0 + (this.hashSeed(this.seed, 301) * 30.0 - 15.0);
    const crSide = this.hashSeed(this.seed, 302) > 0.5 ? 1 : -1;
    const crX = this.getTrailCenterX(crZ) + crSide * (18.0 + this.hashSeed(this.seed, 303) * 10.0);
    const crY = 14.0;
    this.structures.push({
      id: 'crypt_gate_1',
      type: 'crypt_gate',
      x: crX,
      y: crY,
      z: crZ,
      radius: 6.0,
      rotationY: crSide > 0 ? -Math.PI / 2 : Math.PI / 2
    });

    // 4. Roadside Wayfarer Shrines
    for (let i = 0; i < 3; i++) {
      const sZ = -18.0 - i * 36.0 + (this.hashSeed(this.seed, 401 + i) * 10.0 - 5.0);
      const sSide = (i % 2 === 0) ? 1 : -1;
      const sX = this.getTrailCenterX(sZ) + sSide * (4.2 + this.hashSeed(this.seed, 402 + i) * 1.5);
      const sY = this.getTrailElevation(sZ);

      this.structures.push({
        id: `shrine_${i}`,
        type: 'shrine',
        x: sX,
        y: sY,
        z: sZ,
        radius: 4.0,
        rotationY: sSide > 0 ? -Math.PI / 2 : Math.PI / 2
      });
    }
  }

  /**
   * Seed-derived smooth multi-harmonic mountain road spline
   */
  public getTrailCenterX(z: number): number {
    return (
      Math.sin(z * this.trailFreq1 + this.trailPhase1) * this.trailAmp1 +
      Math.cos(z * this.trailFreq2 + this.trailPhase2) * this.trailAmp2 +
      Math.sin(z * this.trailFreq3 + this.trailPhase3) * this.trailAmp3
    );
  }

  public getTrailDistance(x: number, z: number): number {
    const trailX = this.getTrailCenterX(z);
    return Math.abs(x - trailX);
  }

  /**
   * Continuous, monotonically ascending road spine elevation
   */
  public getTrailElevation(z: number): number {
    const cZ = this.citadelPOI.z;
    const progress = Math.max(0, -z / Math.abs(cZ));
    const t = Math.min(1.0, progress);
    const smoothT = t * t * (3.0 - 2.0 * t);
    const roadBase = this.baseHeight + smoothT * (this.citadelPOI.y - this.baseHeight);
    const grade = Math.sin(z * 0.03 + this.trailPhase2) * 0.6;
    return roadBase + grade;
  }

  /**
   * Biome determination by 2D Temperature & Humidity field + elevation
   */
  public getBiomeType(worldX: number, worldZ: number, elevation: number, slope: number): BiomeType {
    const distToCitadel = Math.hypot(worldX - this.citadelPOI.x, worldZ - this.citadelPOI.z);
    if (distToCitadel < this.citadelPOI.radius + 4.0) {
      return 'citadel';
    }

    const distToTrail = this.getTrailDistance(worldX, worldZ);
    if (distToTrail < 3.2) {
      return 'trail';
    }

    const temp = (this.tempNoise(worldX * 0.008, worldZ * 0.008) + 1.0) * 0.5 - (elevation / 40.0) * 0.35;
    const humidity = (this.humidityNoise(worldX * 0.008, worldZ * 0.008) + 1.0) * 0.5;

    if (elevation > 32.0 || temp < 0.22) {
      return 'snow';
    }
    if (slope > 0.62 || (elevation > 17.0 && humidity < 0.40)) {
      return 'alpine';
    }
    if (humidity > 0.68 && temp > 0.48 && elevation < 14.0) {
      return 'swamp';
    }
    if (humidity > 0.42 || elevation > 12.0) {
      return 'forest';
    }
    return 'meadow';
  }

  /**
   * Raw 2D Seeded Terrain Elevation (Continentalness + Erosion + Peaks)
   */
  public getRawElevation(worldX: number, worldZ: number): number {
    // 1. Continental Macro Noise
    const cont = this.continentalNoise(worldX * 0.007, worldZ * 0.007);
    const macroH = (cont + 1.0) * 0.5 * 10.0;

    // 2. Erosion / Valley modulation
    const erosion = (this.erosionNoise(worldX * 0.014, worldZ * 0.014) + 1.0) * 0.5;
    const valleyDist = this.getTrailDistance(worldX, worldZ);
    const valleyWidth = 14.0 + erosion * 18.0;
    const mountainFlankFactor = Math.min(1.0, Math.max(0, (valleyDist - 6.0) / valleyWidth));

    // 3. Sharp Mountain Ridges & Peaks
    const ridge = Math.abs(this.peaksNoise(worldX * 0.016, worldZ * 0.016)) * 26.0;
    const detail = this.detailNoise(worldX * 0.042, worldZ * 0.042) * 3.5;

    // Base combined landscape
    let rawH = this.baseHeight + macroH * 0.4 + (ridge + detail) * mountainFlankFactor;

    // 4. Structure Flattening & Terracing (Citadel, Watchtowers, Shrines)
    for (const struct of this.structures) {
      const dist = Math.hypot(worldX - struct.x, worldZ - struct.z);
      if (dist < struct.radius * 1.6) {
        const innerR = struct.radius * 0.75;
        const outerR = struct.radius * 1.6;
        if (dist <= innerR) {
          rawH = struct.y;
        } else {
          const t = (dist - innerR) / (outerR - innerR);
          const smoothT = t * t * (3.0 - 2.0 * t);
          rawH = struct.y * (1.0 - smoothT) + rawH * smoothT;
        }
      }
    }

    return rawH;
  }

  /**
   * Final Continuous Elevation incorporating Road Spline Grading
   */
  public getElevation(worldX: number, worldZ: number): number {
    const rawH = this.getRawElevation(worldX, worldZ);
    const distToTrail = this.getTrailDistance(worldX, worldZ);
    const roadH = this.getTrailElevation(worldZ);

    const roadWidth = 2.8;
    const shoulderWidth = 3.8;

    if (distToTrail <= roadWidth) {
      return roadH;
    } else if (distToTrail < roadWidth + shoulderWidth) {
      const t = (distToTrail - roadWidth) / shoulderWidth;
      const blend = t * t * (3.0 - 2.0 * t);
      return roadH * (1.0 - blend) + rawH * blend;
    }

    return rawH;
  }

  public getSample(worldX: number, worldZ: number): TerrainSample {
    const h = this.getElevation(worldX, worldZ);
    const distToTrail = this.getTrailDistance(worldX, worldZ);
    const trailWidth = 3.0;
    const isTrail = distToTrail <= trailWidth;
    const trailFactor = Math.max(0, 1.0 - distToTrail / trailWidth);

    // Smooth slope calculation
    const eps = 0.4;
    const hx1 = this.getElevation(worldX + eps, worldZ);
    const hx0 = this.getElevation(worldX - eps, worldZ);
    const hz1 = this.getElevation(worldX, worldZ + eps);
    const hz0 = this.getElevation(worldX, worldZ - eps);
    const dx = (hx1 - hx0) / (2 * eps);
    const dz = (hz1 - hz0) / (2 * eps);
    const slope = Math.sqrt(dx * dx + dz * dz);

    const biomeType = this.getBiomeType(worldX, worldZ, h, slope);

    let biome: TerrainSample['biome'] = 'grass';
    if (biomeType === 'citadel' || biomeType === 'trail') {
      biome = 'trail';
    } else if (biomeType === 'snow') {
      biome = 'snow';
    } else if (biomeType === 'alpine') {
      biome = 'stone';
    } else {
      biome = 'grass';
    }

    return {
      height: h,
      rawHeight: h,
      biome,
      biomeType,
      slope,
      isTrail,
      trailFactor
    };
  }
}
