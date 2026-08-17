import { EnvironmentMode } from '../lighting/LightingManager';
import { CameraPerspective } from '../camera/CameraRig';

export interface WorldSave {
  id: string;
  name: string;
  seed: number;
  createdAt: number;
  lastPlayed: number;
  playerPos: { x: number; y: number; z: number };
  mode: EnvironmentMode;
  perspective: CameraPerspective;
}

const STORAGE_KEY_WORLDS = 'retro3d_saved_worlds';
const STORAGE_KEY_ACTIVE_WORLD = 'retro3d_active_world_id';

export class WorldManager {
  private static instance: WorldManager;
  public worlds: WorldSave[] = [];
  public activeWorldId: string | null = null;

  private constructor() {
    this.loadFromStorage();
  }

  public static getInstance(): WorldManager {
    if (!WorldManager.instance) {
      WorldManager.instance = new WorldManager();
    }
    return WorldManager.instance;
  }

  private loadFromStorage(): void {
    try {
      const json = localStorage.getItem(STORAGE_KEY_WORLDS);
      if (json) {
        this.worlds = JSON.parse(json);
      }
    } catch (e) {
      console.warn('Failed to parse saved worlds from localStorage:', e);
      this.worlds = [];
    }

    this.activeWorldId = localStorage.getItem(STORAGE_KEY_ACTIVE_WORLD);

    // If no worlds exist, create a default first world
    if (this.worlds.length === 0) {
      const defaultWorld = this.createWorld('Kingdom of Alderia', 424242, 'surface');
      this.activeWorldId = defaultWorld.id;
    } else if (!this.activeWorldId || !this.worlds.some((w) => w.id === this.activeWorldId)) {
      this.activeWorldId = this.worlds[0].id;
      localStorage.setItem(STORAGE_KEY_ACTIVE_WORLD, this.activeWorldId);
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(STORAGE_KEY_WORLDS, JSON.stringify(this.worlds));
      if (this.activeWorldId) {
        localStorage.setItem(STORAGE_KEY_ACTIVE_WORLD, this.activeWorldId);
      }
    } catch (e) {
      console.error('Failed to save worlds to localStorage:', e);
    }
  }

  public getAllWorlds(): WorldSave[] {
    return [...this.worlds].sort((a, b) => b.lastPlayed - a.lastPlayed);
  }

  public getActiveWorld(): WorldSave {
    let active = this.worlds.find((w) => w.id === this.activeWorldId);
    if (!active) {
      if (this.worlds.length === 0) {
        active = this.createWorld('Kingdom of Alderia', 424242, 'surface');
      } else {
        active = this.worlds[0];
      }
      this.activeWorldId = active.id;
      this.saveToStorage();
    }
    return active;
  }

  public setActiveWorldId(id: string): WorldSave | null {
    const world = this.worlds.find((w) => w.id === id);
    if (world) {
      this.activeWorldId = id;
      world.lastPlayed = Date.now();
      this.saveToStorage();
      return world;
    }
    return null;
  }

  public createWorld(
    name: string,
    seedInput?: string | number,
    startingMode: EnvironmentMode = 'surface'
  ): WorldSave {
    const seed = this.resolveSeed(seedInput);
    const finalName = name.trim() || this.generateRandomWorldName();
    const id = `world_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

    const newWorld: WorldSave = {
      id,
      name: finalName,
      seed,
      createdAt: Date.now(),
      lastPlayed: Date.now(),
      playerPos: { x: 0, y: 12, z: 0 },
      mode: startingMode,
      perspective: 'FPP'
    };

    this.worlds.unshift(newWorld);
    this.activeWorldId = id;
    this.saveToStorage();
    return newWorld;
  }

  public updateWorld(update: Partial<WorldSave> & { id: string }): void {
    const idx = this.worlds.findIndex((w) => w.id === update.id);
    if (idx !== -1) {
      this.worlds[idx] = {
        ...this.worlds[idx],
        ...update,
        lastPlayed: Date.now()
      };
      this.saveToStorage();
    }
  }

  public deleteWorld(id: string): boolean {
    const idx = this.worlds.findIndex((w) => w.id === id);
    if (idx !== -1) {
      this.worlds.splice(idx, 1);
      if (this.activeWorldId === id) {
        this.activeWorldId = this.worlds.length > 0 ? this.worlds[0].id : null;
      }
      this.saveToStorage();

      // Ensure at least one world exists
      if (this.worlds.length === 0) {
        this.createWorld('Kingdom of Alderia', 424242, 'surface');
      }
      return true;
    }
    return false;
  }

  public resolveSeed(seedInput?: string | number): number {
    if (seedInput === undefined || seedInput === null || seedInput === '') {
      return this.generateRandomSeed();
    }
    if (typeof seedInput === 'number') {
      return Math.abs(Math.floor(seedInput)) || 12345;
    }
    const num = parseInt(seedInput.trim(), 10);
    if (!isNaN(num)) {
      return Math.abs(num);
    }
    // Hash text string to integer seed
    return this.hashStringToSeed(seedInput.trim());
  }

  public hashStringToSeed(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash) || 1234567;
  }

  public generateRandomSeed(): number {
    return Math.floor(10000000 + Math.random() * 89999999);
  }

  public generateRandomWorldName(): string {
    const prefixes = [
      'Kingdom of', 'Realm of', 'Chronicles of', 'Valleys of',
      'High Spire of', 'Archival Dominion of', 'Echoes of',
      'The Scriptorium of', 'Sunken Province of', 'Sanctuary of',
      'Fortress of', 'Highlands of', 'The Whispering Lands of'
    ];

    const names = [
      'Alderia', 'Silverpeak', 'Caelum-Vara', 'Thalassia', 'Aethelgard',
      'Val-Doran', 'Oakhaven', 'Nether-Ghyll', 'Solstice Reach', 'Frostholm',
      'Marid-Khar', 'Vesperia', 'Ravenhall', 'Dun-Mora', 'Astragard',
      'Iron-Spire', 'Barrow-Downs', 'Veridiana', 'Myth-Drannor', 'Elyria'
    ];

    const suffixes = [
      'I', 'II', 'III', 'IV', 'Prime', 'Origins', 'Ascendant', 'Reformed', 'Sanctum'
    ];

    const pref = prefixes[Math.floor(Math.random() * prefixes.length)];
    const realm = names[Math.floor(Math.random() * names.length)];
    const hasSuffix = Math.random() > 0.6;
    const suff = hasSuffix ? ` ${suffixes[Math.floor(Math.random() * suffixes.length)]}` : '';

    return `${pref} ${realm}${suff}`;
  }
}
