import { CameraPerspective } from '../camera/CameraRig';

export type ParticleDensity = 'off' | 'medium' | 'ultra';

export interface GameSettings {
  renderDistance: number; // 2 to 12 chunks
  fov: number;            // 60 to 100 degrees
  mouseSensitivity: number; // 0.2 to 3.0
  particleDensity: ParticleDensity;
  headBobbing: boolean;
  cameraSmoothing: boolean;
  exposure: number;       // 0.8 to 2.0
  musicVolume: number;    // 0.0 to 1.0
  perspective: CameraPerspective;
  resolution: string;     // '640x360' | '320x180' | '960x540'
}

type SettingsListener = (settings: GameSettings) => void;

export class SettingsManager {
  private static instance: SettingsManager;

  public settings: GameSettings = {
    renderDistance: 4,
    fov: 75,
    mouseSensitivity: 1.0,
    particleDensity: 'medium',
    headBobbing: true,
    cameraSmoothing: true,
    exposure: 1.0,
    musicVolume: 0.7,
    perspective: 'FPP',
    resolution: '640x360'
  };

  private listeners: Set<SettingsListener> = new Set();

  private constructor() {
    this.load();
  }

  public static getInstance(): SettingsManager {
    if (!SettingsManager.instance) {
      SettingsManager.instance = new SettingsManager();
    }
    return SettingsManager.instance;
  }

  public load(): void {
    try {
      const rd = localStorage.getItem('retro3d_render_distance');
      if (rd) this.settings.renderDistance = Math.max(2, Math.min(12, parseInt(rd, 10) || 4));

      const fov = localStorage.getItem('retro3d_fov');
      if (fov) this.settings.fov = Math.max(60, Math.min(100, parseInt(fov, 10) || 75));

      const sens = localStorage.getItem('retro3d_sens');
      if (sens) this.settings.mouseSensitivity = Math.max(0.2, Math.min(3.0, parseFloat(sens) || 1.0));

      const pd = localStorage.getItem('retro3d_particle_density');
      if (pd === 'off' || pd === 'medium' || pd === 'ultra') this.settings.particleDensity = pd;

      const hb = localStorage.getItem('retro3d_head_bobbing');
      if (hb !== null) this.settings.headBobbing = hb === 'true';

      const cs = localStorage.getItem('retro3d_camera_smoothing');
      if (cs !== null) this.settings.cameraSmoothing = cs === 'true';

      const exp = localStorage.getItem('retro3d_exposure');
      if (exp) this.settings.exposure = Math.max(0.8, Math.min(2.0, parseFloat(exp) || 1.0));

      const vol = localStorage.getItem('retro3d_music_vol');
      if (vol) this.settings.musicVolume = Math.max(0, Math.min(1.0, parseFloat(vol) || 0.7));

      const pers = localStorage.getItem('retro3d_perspective');
      if (pers === 'FPP' || pers === 'TPP') this.settings.perspective = pers;

      const res = localStorage.getItem('retro3d_resolution');
      if (res) this.settings.resolution = res;
    } catch {}
  }

  public save(): void {
    try {
      localStorage.setItem('retro3d_render_distance', String(this.settings.renderDistance));
      localStorage.setItem('retro3d_fov', String(this.settings.fov));
      localStorage.setItem('retro3d_sens', String(this.settings.mouseSensitivity));
      localStorage.setItem('retro3d_particle_density', this.settings.particleDensity);
      localStorage.setItem('retro3d_head_bobbing', String(this.settings.headBobbing));
      localStorage.setItem('retro3d_camera_smoothing', String(this.settings.cameraSmoothing));
      localStorage.setItem('retro3d_exposure', String(this.settings.exposure));
      localStorage.setItem('retro3d_music_vol', String(this.settings.musicVolume));
      localStorage.setItem('retro3d_perspective', this.settings.perspective);
      localStorage.setItem('retro3d_resolution', this.settings.resolution);
    } catch {}
  }

  public update(partial: Partial<GameSettings>): void {
    Object.assign(this.settings, partial);
    this.save();
    this.notify();
  }

  public subscribe(listener: SettingsListener): () => void {
    this.listeners.add(listener);
    listener(this.settings);
    return () => this.listeners.delete(listener);
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener(this.settings);
    }
  }
}
