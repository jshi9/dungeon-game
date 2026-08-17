import { createNoise2D } from 'simplex-noise';

export type BiomeType = 'forest' | 'trail' | 'alpine' | 'cliff' | 'snow' | 'citadel';

export interface TerrainSample {
  height: number;
  rawHeight: number;
  biome: 'grass' | 'trail' | 'stone' | 'snow';
  biomeType: BiomeType;
  slope: number;
  isTrail: boolean;
  trailFactor: number; // 1.0 on center of trail, 0.0 off trail
}

export class NoiseGenerator {
  private noise2D: (x: number, y: number) => number;
  private detailNoise2D: (x: number, y: number) => number;
  private ridgeNoise2D: (x: number, y: number) => number;

  public baseHeight: number = 6.0;

  constructor(seed: number = 12345) {
    const prng1 = this.createPrng(seed);
    const prng2 = this.createPrng(seed + 1013);
    const prng3 = this.createPrng(seed + 2039);

    this.noise2D = createNoise2D(prng1);
    this.detailNoise2D = createNoise2D(prng2);
    this.ridgeNoise2D = createNoise2D(prng3);
  }

  private createPrng(seed: number) {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  /**
   * Smooth, organic winding mountain road spline:
   * Smoothly bends through the valley with gentle curvature
   */
  public getTrailCenterX(z: number): number {
    return Math.sin(z * 0.024) * 14.0 + Math.cos(z * 0.008) * 8.0;
  }

  public getTrailDistance(x: number, z: number): number {
    const trailX = this.getTrailCenterX(z);
    return Math.abs(x - trailX);
  }

  /**
   * Smooth, monotonically ascending road spine elevation
   * (Zero abrupt dips or sharp rollercoasters)
   */
  public getTrailElevation(z: number): number {
    // Spans from spawn (z ~ 0) at y=6.5m to castle plateau (z = -140) at y=26.0m
    const progress = Math.max(0, -z / 140.0);
    const t = Math.min(1.0, progress);
    // Cubic smoothstep progression
    const smoothT = t * t * (3.0 - 2.0 * t);
    const roadBase = 6.5 + smoothT * 19.5;
    // Subtle, long-wavelength grading (wavelength 120m, max 0.6m amplitude)
    const gentleGrade = Math.sin(z * 0.035) * 0.5;
    return roadBase + gentleGrade;
  }

  /**
   * Biome-specific raw terrain generation
   */
  public getRawElevation(worldX: number, worldZ: number): number {
    // 1. Biome determination by Z coordinate & distance
    // Forest Plains: z > -50
    // Mountain Pass & Alpine Valleys: -50 >= z > -120
    // Castle Citadel Plateau: z <= -120

    // Forest Biome (Gentle rolling meadow slopes, soft mounds)
    const forestNoise = this.noise2D(worldX * 0.012, worldZ * 0.012) * 4.5 +
                        this.detailNoise2D(worldX * 0.03, worldZ * 0.03) * 1.5;
    const forestH = this.baseHeight + forestNoise;

    // Alpine Mountain Ridges (Flanking the sides of the central valley)
    const valleyDist = Math.abs(worldX - this.getTrailCenterX(worldZ));
    const mountainFlankFactor = Math.min(1.0, Math.max(0, (valleyDist - 8.0) / 22.0));
    
    // Stratified mountain crags
    const cragBase = Math.abs(this.ridgeNoise2D(worldX * 0.015, worldZ * 0.015)) * 24.0;
    const cragDetail = this.detailNoise2D(worldX * 0.04, worldZ * 0.04) * 4.0;
    const mountainH = this.baseHeight + 8.0 + (cragBase + cragDetail) * mountainFlankFactor;

    // Smooth transition from Forest to Mountain Valley
    let rawH = forestH;
    if (worldZ < -40.0) {
      const transT = Math.min(1.0, (-worldZ - 40.0) / 30.0);
      const smoothTrans = transT * transT * (3.0 - 2.0 * transT);
      rawH = forestH * (1.0 - smoothTrans) + mountainH * smoothTrans;
    }

    // 2. Castle Citadel Plateau (z ~ -140, radius ~ 45m)
    const castleDist = Math.hypot(worldX, worldZ - (-140));
    if (castleDist < 55.0) {
      const plateauTargetH = 26.0;
      if (castleDist < 28.0) {
        // Perfectly flat courtyard & citadel foundation
        rawH = plateauTargetH;
      } else {
        // Smooth terraced cliff edge
        const tPlateau = (castleDist - 28.0) / 27.0;
        const smoothP = tPlateau * tPlateau * (3.0 - 2.0 * tPlateau);
        rawH = plateauTargetH * (1.0 - smoothP) + rawH * smoothP;
      }
    }

    return rawH;
  }

  /**
   * Final continuous elevation factoring in smooth road grading
   */
  public getElevation(worldX: number, worldZ: number): number {
    const rawH = this.getRawElevation(worldX, worldZ);
    const distToTrail = this.getTrailDistance(worldX, worldZ);
    const roadH = this.getTrailElevation(worldZ);

    // Trail road corridor grading:
    // Inner roadbed (dist <= 2.8m): perfectly flat, smooth road surface
    // Road shoulder (2.8m < dist <= 6.5m): smooth Hermite slope terracing to natural landscape
    const roadWidth = 2.8;
    const shoulderWidth = 3.8; // Total influence = 6.6m

    if (distToTrail <= roadWidth) {
      return roadH;
    } else if (distToTrail < roadWidth + shoulderWidth) {
      const t = (distToTrail - roadWidth) / shoulderWidth;
      // Smoothstep Hermite curve: f(t) = 3t^2 - 2t^3
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

    let biome: TerrainSample['biome'] = 'grass';
    let biomeType: BiomeType = 'forest';

    const castleDist = Math.hypot(worldX, worldZ - (-140));

    if (castleDist < 30.0) {
      biome = 'trail';
      biomeType = 'citadel';
    } else if (isTrail) {
      biome = 'trail';
      biomeType = 'trail';
    } else if (h > 35.0) {
      biome = 'snow';
      biomeType = 'snow';
    } else if (slope > 0.65 || (h > 20.0 && worldZ < -55.0)) {
      biome = 'stone';
      biomeType = 'alpine';
    } else {
      biome = 'grass';
      biomeType = 'forest';
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
