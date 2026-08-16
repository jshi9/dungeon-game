import { createNoise2D } from 'simplex-noise';

export interface TerrainSample {
  height: number;        // Quantized stepped height (in world units)
  rawHeight: number;     // Continuous height for subtle blending
  biome: 'water' | 'sand' | 'grass' | 'stone' | 'snow';
  isWater: boolean;
}

export class NoiseGenerator {
  private noise2D: (x: number, y: number) => number;
  private moistureNoise2D: (x: number, y: number) => number;

  public baseFrequency: number = 0.015;
  public octaves: number = 4;
  public persistence: number = 0.5;
  public lacunarity: number = 2.0;
  public heightScale: number = 10;
  public stepHeight: number = 1.0; // 1 unit per terrace step
  public waterLevel: number = 1.0;

  constructor(seed: number = 12345) {
    const prng = this.createPrng(seed);
    this.noise2D = createNoise2D(prng);
    this.moistureNoise2D = createNoise2D(this.createPrng(seed + 9999));
  }

  private createPrng(seed: number) {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return () => {
      s = (s * 16807) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }

  public getSample(worldX: number, worldZ: number): TerrainSample {
    let amplitude = 1.0;
    let frequency = this.baseFrequency;
    let noiseVal = 0;
    let maxAmp = 0;

    for (let o = 0; o < this.octaves; o++) {
      noiseVal += this.noise2D(worldX * frequency, worldZ * frequency) * amplitude;
      maxAmp += amplitude;
      amplitude *= this.persistence;
      frequency *= this.lacunarity;
    }

    // Normalize to [0, 1]
    const normalized = (noiseVal / maxAmp + 1) * 0.5;
    
    // Apply power curve for plateaus and river basins
    const curved = Math.pow(normalized, 1.3);
    const continuousHeight = curved * this.heightScale;

    // Distinct terraced height steps
    const rawStep = Math.floor(continuousHeight / this.stepHeight);
    const steppedHeight = Math.max(0, rawStep * this.stepHeight);

    const isWater = steppedHeight <= this.waterLevel;
    const finalHeight = isWater ? this.waterLevel : steppedHeight;

    const moisture = (this.moistureNoise2D(worldX * 0.01, worldZ * 0.01) + 1) * 0.5;

    let biome: TerrainSample['biome'] = 'grass';
    if (isWater) {
      biome = 'water';
    } else if (steppedHeight === this.waterLevel + this.stepHeight && moisture < 0.6) {
      biome = 'sand';
    } else if (steppedHeight >= 7.0) {
      biome = 'snow';
    } else if (steppedHeight >= 5.0) {
      biome = 'stone';
    } else {
      biome = 'grass';
    }

    return {
      height: finalHeight,
      rawHeight: continuousHeight,
      biome,
      isWater
    };
  }
}
