import { CameraPerspective } from '../camera/CameraRig';
import { SettingsManager, ParticleDensity } from '../core/SettingsManager';

export interface SettingsModalCallbacks {
  onPerspectiveChange: (mode: CameraPerspective) => void;
  onSensitivityChange: (sens: number) => void;
  onFovChange: (fov: number) => void;
  onRenderDistanceChange: (chunks: number) => void;
  onParticleDensityChange: (density: ParticleDensity) => void;
  onHeadBobbingChange: (enabled: boolean) => void;
  onCameraSmoothingChange: (enabled: boolean) => void;
  onExposureChange: (exposure: number) => void;
  onResolutionChange: (w: number, h: number) => void;
  onMusicVolumeChange?: (volume: number) => void;
  onExitToTitle?: () => void;
  onClose: () => void;
}

export class SettingsModal {
  public element!: HTMLElement;
  private callbacks: SettingsModalCallbacks;
  public isOpen: boolean = false;
  private settingsManager: SettingsManager;

  constructor(callbacks: SettingsModalCallbacks) {
    this.callbacks = callbacks;
    this.settingsManager = SettingsManager.getInstance();
    this.buildDOM();
  }

  private buildDOM(): void {
    this.element = document.createElement('div');
    this.element.id = 'settings-modal-overlay';
    this.element.className = 'modal-overlay';
    this.element.style.display = 'none';

    const s = this.settingsManager.settings;

    this.element.innerHTML = `
      <div class="retro-modal retro-panel settings-expanded-panel">
        <div class="modal-header">
          <h2>⚙️ ENGINE & EXPERIENCE SETTINGS</h2>
          <button id="btn-modal-close-x" class="retro-btn modal-close-x" title="Close Settings (Esc / O)">✕</button>
        </div>

        <div class="modal-body settings-grid-body">
          <!-- 1. Render Distance Slider -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">RENDER DISTANCE</label>
              <span id="val-render-distance" class="setting-value-badge">${s.renderDistance} Chunks (${this.getRenderDistLabel(s.renderDistance)})</span>
            </div>
            <input id="slider-render-distance" type="range" min="2" max="12" step="1" value="${s.renderDistance}" class="retro-slider" />
          </div>

          <!-- 2. Perspective Option -->
          <div class="setting-row">
            <label class="setting-label">CAMERA PERSPECTIVE</label>
            <div class="btn-toggle-group">
              <button id="btn-fpp" class="retro-btn ${s.perspective === 'FPP' ? 'active-mode' : ''}">First Person (FPP)</button>
              <button id="btn-tpp" class="retro-btn ${s.perspective === 'TPP' ? 'active-mode' : ''}">Third Person (TPP)</button>
            </div>
          </div>

          <!-- 3. Field of View (FOV) -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">FIELD OF VIEW (FOV)</label>
              <span id="val-fov" class="setting-value-badge">${s.fov}°</span>
            </div>
            <input id="slider-fov" type="range" min="60" max="100" step="1" value="${s.fov}" class="retro-slider" />
          </div>

          <!-- 4. Mouse Sensitivity -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">MOUSE SENSITIVITY</label>
              <span id="val-sensitivity" class="setting-value-badge">${s.mouseSensitivity.toFixed(1)}x</span>
            </div>
            <input id="slider-sensitivity" type="range" min="0.2" max="3.0" step="0.1" value="${s.mouseSensitivity}" class="retro-slider" />
          </div>

          <!-- 5. Exposure / Master Brightness -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">MASTER BRIGHTNESS / EXPOSURE</label>
              <span id="val-exposure" class="setting-value-badge">${s.exposure.toFixed(2)}x</span>
            </div>
            <input id="slider-exposure" type="range" min="0.8" max="2.0" step="0.05" value="${s.exposure}" class="retro-slider" />
          </div>

          <!-- 6. Particle Density -->
          <div class="setting-row">
            <label class="setting-label">PARTICLE DENSITY</label>
            <div class="btn-toggle-group density-group">
              <button id="btn-pd-off" class="retro-btn ${s.particleDensity === 'off' ? 'active-mode' : ''}">Off</button>
              <button id="btn-pd-medium" class="retro-btn ${s.particleDensity === 'medium' ? 'active-mode' : ''}">Medium</button>
              <button id="btn-pd-ultra" class="retro-btn ${s.particleDensity === 'ultra' ? 'active-mode' : ''}">Ultra</button>
            </div>
          </div>

          <!-- 7. Head Bobbing & View Sway -->
          <div class="setting-row">
            <label class="setting-label">CAMERA DYNAMICS</label>
            <div class="btn-toggle-group">
              <button id="btn-toggle-bobbing" class="retro-btn ${s.headBobbing ? 'active-mode' : ''}">Head Bobbing: ${s.headBobbing ? 'ON' : 'OFF'}</button>
              <button id="btn-toggle-smoothing" class="retro-btn ${s.cameraSmoothing ? 'active-mode' : ''}">Smoothing: ${s.cameraSmoothing ? 'ON' : 'OFF'}</button>
            </div>
          </div>

          <!-- 8. Ambient Music Volume -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">MEDIEVAL AMBIENT MUSIC</label>
              <span id="val-music-vol" class="setting-value-badge">${Math.round(s.musicVolume * 100)}%</span>
            </div>
            <input id="slider-music-vol" type="range" min="0" max="100" step="5" value="${Math.round(s.musicVolume * 100)}" class="retro-slider" />
          </div>

          <!-- 9. Resolution Selector -->
          <div class="setting-row">
            <label class="setting-label">INTERNAL RENDER TARGET</label>
            <select id="modal-select-resolution" class="retro-select">
              <option value="640x360" ${s.resolution === '640x360' ? 'selected' : ''}>640x360 (Standard Pixel 16:9)</option>
              <option value="320x180" ${s.resolution === '320x180' ? 'selected' : ''}>320x180 (Ultra Retro Pixel)</option>
              <option value="960x540" ${s.resolution === '960x540' ? 'selected' : ''}>960x540 (High-Def Pixel)</option>
            </select>
          </div>

          <!-- Controls Reference -->
          <div class="setting-row controls-summary">
            <label class="setting-label">QUICK CONTROLS</label>
            <ul class="controls-list">
              <li><span class="key-badge">Click Screen</span> : Lock Mouse Look / Read</li>
              <li><span class="key-badge">W</span><span class="key-badge">A</span><span class="key-badge">S</span><span class="key-badge">D</span> : Move / Strafe &nbsp;|&nbsp; <span class="key-badge">Space</span> : Jump</li>
              <li><span class="key-badge">N</span> : Grand Library &nbsp;|&nbsp; <span class="key-badge">E</span> : Read Books</li>
              <li><span class="key-badge">Shift</span> : Sprint &nbsp;|&nbsp; <span class="key-badge">M</span> : Switch Map</li>
              <li><span class="key-badge">Esc</span> / <span class="key-badge">O</span> : Settings Menu</li>
            </ul>
          </div>
        </div>

        <div class="modal-footer settings-footer-split">
          <button id="btn-exit-to-title" class="retro-btn btn-exit-title">🚪 EXIT TO MAIN MENU</button>
          <button id="btn-resume-game" class="retro-btn btn-primary-resume">▶ RESUME GAME</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.element);
    this.bindEvents();
  }

  private getRenderDistLabel(chunks: number): string {
    if (chunks <= 3) return 'Fast / Low';
    if (chunks <= 6) return 'Balanced';
    if (chunks <= 9) return 'High';
    return 'Extreme';
  }

  private bindEvents(): void {
    const btnFpp = this.element.querySelector('#btn-fpp') as HTMLButtonElement;
    const btnTpp = this.element.querySelector('#btn-tpp') as HTMLButtonElement;
    const sliderRd = this.element.querySelector('#slider-render-distance') as HTMLInputElement;
    const valRd = this.element.querySelector('#val-render-distance') as HTMLElement;
    const sliderFov = this.element.querySelector('#slider-fov') as HTMLInputElement;
    const valFov = this.element.querySelector('#val-fov') as HTMLElement;
    const sliderSens = this.element.querySelector('#slider-sensitivity') as HTMLInputElement;
    const valSens = this.element.querySelector('#val-sensitivity') as HTMLElement;
    const sliderExp = this.element.querySelector('#slider-exposure') as HTMLInputElement;
    const valExp = this.element.querySelector('#val-exposure') as HTMLElement;
    const sliderMusic = this.element.querySelector('#slider-music-vol') as HTMLInputElement;
    const valMusic = this.element.querySelector('#val-music-vol') as HTMLElement;
    const selectRes = this.element.querySelector('#modal-select-resolution') as HTMLSelectElement;
    const btnCloseX = this.element.querySelector('#btn-modal-close-x') as HTMLButtonElement;
    const btnResume = this.element.querySelector('#btn-resume-game') as HTMLButtonElement;

    const btnPdOff = this.element.querySelector('#btn-pd-off') as HTMLButtonElement;
    const btnPdMed = this.element.querySelector('#btn-pd-medium') as HTMLButtonElement;
    const btnPdUltra = this.element.querySelector('#btn-pd-ultra') as HTMLButtonElement;

    const btnBob = this.element.querySelector('#btn-toggle-bobbing') as HTMLButtonElement;
    const btnSmooth = this.element.querySelector('#btn-toggle-smoothing') as HTMLButtonElement;

    // Perspective
    btnFpp.addEventListener('click', () => {
      btnFpp.classList.add('active-mode');
      btnTpp.classList.remove('active-mode');
      this.settingsManager.update({ perspective: 'FPP' });
      this.callbacks.onPerspectiveChange('FPP');
    });

    btnTpp.addEventListener('click', () => {
      btnTpp.classList.add('active-mode');
      btnFpp.classList.remove('active-mode');
      this.settingsManager.update({ perspective: 'TPP' });
      this.callbacks.onPerspectiveChange('TPP');
    });

    // Render Distance
    sliderRd.addEventListener('input', () => {
      const val = parseInt(sliderRd.value, 10);
      valRd.textContent = `${val} Chunks (${this.getRenderDistLabel(val)})`;
      this.settingsManager.update({ renderDistance: val });
      this.callbacks.onRenderDistanceChange(val);
    });

    // FOV
    sliderFov.addEventListener('input', () => {
      const val = parseInt(sliderFov.value, 10);
      valFov.textContent = `${val}°`;
      this.settingsManager.update({ fov: val });
      this.callbacks.onFovChange(val);
    });

    // Mouse Sensitivity
    sliderSens.addEventListener('input', () => {
      const val = parseFloat(sliderSens.value);
      valSens.textContent = `${val.toFixed(1)}x`;
      this.settingsManager.update({ mouseSensitivity: val });
      this.callbacks.onSensitivityChange(val);
    });

    // Exposure
    sliderExp.addEventListener('input', () => {
      const val = parseFloat(sliderExp.value);
      valExp.textContent = `${val.toFixed(2)}x`;
      this.settingsManager.update({ exposure: val });
      this.callbacks.onExposureChange(val);
    });

    // Particle Density
    const setPdUI = (density: ParticleDensity) => {
      btnPdOff.classList.toggle('active-mode', density === 'off');
      btnPdMed.classList.toggle('active-mode', density === 'medium');
      btnPdUltra.classList.toggle('active-mode', density === 'ultra');
      this.settingsManager.update({ particleDensity: density });
      this.callbacks.onParticleDensityChange(density);
    };
    btnPdOff.addEventListener('click', () => setPdUI('off'));
    btnPdMed.addEventListener('click', () => setPdUI('medium'));
    btnPdUltra.addEventListener('click', () => setPdUI('ultra'));

    // Head Bobbing & Camera Smoothing
    btnBob.addEventListener('click', () => {
      const next = !this.settingsManager.settings.headBobbing;
      this.settingsManager.update({ headBobbing: next });
      btnBob.classList.toggle('active-mode', next);
      btnBob.textContent = `Head Bobbing: ${next ? 'ON' : 'OFF'}`;
      this.callbacks.onHeadBobbingChange(next);
    });

    btnSmooth.addEventListener('click', () => {
      const next = !this.settingsManager.settings.cameraSmoothing;
      this.settingsManager.update({ cameraSmoothing: next });
      btnSmooth.classList.toggle('active-mode', next);
      btnSmooth.textContent = `Smoothing: ${next ? 'ON' : 'OFF'}`;
      this.callbacks.onCameraSmoothingChange(next);
    });

    // Music Volume
    sliderMusic.addEventListener('input', () => {
      const val = parseInt(sliderMusic.value, 10);
      valMusic.textContent = `${val}%`;
      const normalized = val / 100;
      this.settingsManager.update({ musicVolume: normalized });
      if (this.callbacks.onMusicVolumeChange) {
        this.callbacks.onMusicVolumeChange(normalized);
      }
    });

    // Resolution
    selectRes.addEventListener('change', () => {
      const [w, h] = selectRes.value.split('x').map(Number);
      this.settingsManager.update({ resolution: selectRes.value });
      this.callbacks.onResolutionChange(w, h);
    });

    btnCloseX.addEventListener('click', () => this.hide());
    btnResume.addEventListener('click', () => this.hide());

    const btnExitTitle = this.element.querySelector('#btn-exit-to-title') as HTMLButtonElement;
    btnExitTitle?.addEventListener('click', () => {
      this.hide();
      if (this.callbacks.onExitToTitle) {
        this.callbacks.onExitToTitle();
      }
    });

    this.element.addEventListener('click', (e) => {
      if (e.target === this.element) {
        this.hide();
      }
    });
  }

  public setPerspectiveUI(mode: CameraPerspective): void {
    const btnFpp = this.element.querySelector('#btn-fpp') as HTMLButtonElement;
    const btnTpp = this.element.querySelector('#btn-tpp') as HTMLButtonElement;
    if (mode === 'FPP') {
      btnFpp?.classList.add('active-mode');
      btnTpp?.classList.remove('active-mode');
    } else {
      btnTpp?.classList.add('active-mode');
      btnFpp?.classList.remove('active-mode');
    }
  }

  public show(): void {
    this.isOpen = true;
    this.element.style.display = 'flex';
  }

  public hide(): void {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.element.style.display = 'none';
    this.callbacks.onClose();
  }

  public toggle(): void {
    if (this.isOpen) {
      this.hide();
    } else {
      this.show();
    }
  }
}
