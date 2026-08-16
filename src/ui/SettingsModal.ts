import { CameraPerspective } from '../camera/CameraRig';

export interface SettingsModalCallbacks {
  onPerspectiveChange: (mode: CameraPerspective) => void;
  onSensitivityChange: (sens: number) => void;
  onFovChange: (fov: number) => void;
  onResolutionChange: (w: number, h: number) => void;
  onMusicVolumeChange?: (volume: number) => void;
  onClose: () => void;
}

export class SettingsModal {
  public element!: HTMLElement;
  private callbacks: SettingsModalCallbacks;
  public isOpen: boolean = false;

  constructor(callbacks: SettingsModalCallbacks) {
    this.callbacks = callbacks;
    this.buildDOM();
  }

  private buildDOM(): void {
    this.element = document.createElement('div');
    this.element.id = 'settings-modal-overlay';
    this.element.className = 'modal-overlay';
    this.element.style.display = 'none';

    // Retrieve saved settings from localStorage
    let savedFov = 70;
    let savedSens = 1.0;
    let savedMusic = 70;
    try {
      const f = localStorage.getItem('retro3d_fov');
      if (f) savedFov = Math.max(40, Math.min(100, parseInt(f, 10) || 70));
      const s = localStorage.getItem('retro3d_sens');
      if (s) savedSens = Math.max(0.5, Math.min(3.0, parseFloat(s) || 1.0));
      const m = localStorage.getItem('retro3d_music_vol');
      if (m) savedMusic = Math.max(0, Math.min(100, parseInt(m, 10) || 70));
    } catch {}

    this.element.innerHTML = `
      <div class="retro-modal retro-panel">
        <div class="modal-header">
          <h2>⚙️ GAME SETTINGS</h2>
          <button id="btn-modal-close-x" class="retro-btn modal-close-x" title="Close Settings (Esc / O)">✕</button>
        </div>

        <div class="modal-body">
          <!-- Perspective Option -->
          <div class="setting-row">
            <label class="setting-label">CAMERA PERSPECTIVE</label>
            <div class="btn-toggle-group">
              <button id="btn-fpp" class="retro-btn active-mode">First Person (FPP)</button>
              <button id="btn-tpp" class="retro-btn">Third Person (TPP)</button>
            </div>
          </div>

          <!-- Field of View (FOV) -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">FIELD OF VIEW (FOV)</label>
              <span id="val-fov" class="setting-value-badge">${savedFov}°</span>
            </div>
            <input id="slider-fov" type="range" min="40" max="100" step="1" value="${savedFov}" class="retro-slider" />
          </div>

          <!-- Mouse Sensitivity -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">MOUSE SENSITIVITY</label>
              <span id="val-sensitivity" class="setting-value-badge">${savedSens.toFixed(1)}x</span>
            </div>
            <input id="slider-sensitivity" type="range" min="0.5" max="3.0" step="0.1" value="${savedSens}" class="retro-slider" />
          </div>

          <!-- Ambient Music Volume -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">MEDIEVAL AMBIENT MUSIC</label>
              <span id="val-music-vol" class="setting-value-badge">${savedMusic}%</span>
            </div>
            <input id="slider-music-vol" type="range" min="0" max="100" step="5" value="${savedMusic}" class="retro-slider" />
          </div>

          <!-- Resolution Selector -->
          <div class="setting-row">
            <label class="setting-label">INTERNAL RENDER TARGET</label>
            <select id="modal-select-resolution" class="retro-select">
              <option value="640x360" selected>640x360 (Standard Pixel 16:9)</option>
              <option value="320x180">320x180 (Ultra Retro Pixel)</option>
              <option value="960x540">960x540 (High-Def Pixel)</option>
            </select>
          </div>

          <!-- Controls Reference -->
          <div class="setting-row controls-summary">
            <label class="setting-label">QUICK CONTROLS</label>
            <ul class="controls-list">
              <li><span class="key-badge">Click Screen</span> : Lock Mouse Look / Read</li>
              <li><span class="key-badge">W</span><span class="key-badge">A</span><span class="key-badge">S</span><span class="key-badge">D</span> : Move / Strafe</li>
              <li><span class="key-badge">N</span> : Grand Library &nbsp;|&nbsp; <span class="key-badge">E</span> : Read Books</li>
              <li><span class="key-badge">Shift</span> : Sprint &nbsp;|&nbsp; <span class="key-badge">M</span> : Switch Map</li>
              <li><span class="key-badge">Esc</span> / <span class="key-badge">O</span> : Settings Menu</li>
            </ul>
          </div>
        </div>

        <div class="modal-footer">
          <button id="btn-resume-game" class="retro-btn btn-primary-resume">▶ RESUME / CLOSE</button>
        </div>
      </div>
    `;

    document.body.appendChild(this.element);
    this.bindEvents();
  }

  private bindEvents(): void {
    const btnFpp = this.element.querySelector('#btn-fpp') as HTMLButtonElement;
    const btnTpp = this.element.querySelector('#btn-tpp') as HTMLButtonElement;
    const sliderFov = this.element.querySelector('#slider-fov') as HTMLInputElement;
    const valFov = this.element.querySelector('#val-fov') as HTMLElement;
    const sliderSens = this.element.querySelector('#slider-sensitivity') as HTMLInputElement;
    const valSens = this.element.querySelector('#val-sensitivity') as HTMLElement;
    const sliderMusic = this.element.querySelector('#slider-music-vol') as HTMLInputElement;
    const valMusic = this.element.querySelector('#val-music-vol') as HTMLElement;
    const selectRes = this.element.querySelector('#modal-select-resolution') as HTMLSelectElement;
    const btnCloseX = this.element.querySelector('#btn-modal-close-x') as HTMLButtonElement;
    const btnResume = this.element.querySelector('#btn-resume-game') as HTMLButtonElement;

    btnFpp.addEventListener('click', () => {
      btnFpp.classList.add('active-mode');
      btnTpp.classList.remove('active-mode');
      this.callbacks.onPerspectiveChange('FPP');
    });

    btnTpp.addEventListener('click', () => {
      btnTpp.classList.add('active-mode');
      btnFpp.classList.remove('active-mode');
      this.callbacks.onPerspectiveChange('TPP');
    });

    sliderFov.addEventListener('input', () => {
      const val = parseInt(sliderFov.value, 10);
      valFov.textContent = `${val}°`;
      try {
        localStorage.setItem('retro3d_fov', String(val));
      } catch {}
      this.callbacks.onFovChange(val);
    });

    sliderSens.addEventListener('input', () => {
      const val = parseFloat(sliderSens.value);
      valSens.textContent = `${val.toFixed(1)}x`;
      try {
        localStorage.setItem('retro3d_sens', String(val));
      } catch {}
      this.callbacks.onSensitivityChange(val);
    });

    sliderMusic.addEventListener('input', () => {
      const val = parseInt(sliderMusic.value, 10);
      valMusic.textContent = `${val}%`;
      try {
        localStorage.setItem('retro3d_music_vol', String(val));
      } catch {}
      if (this.callbacks.onMusicVolumeChange) {
        this.callbacks.onMusicVolumeChange(val / 100);
      }
    });

    selectRes.addEventListener('change', () => {
      const [w, h] = selectRes.value.split('x').map(Number);
      this.callbacks.onResolutionChange(w, h);
    });

    btnCloseX.addEventListener('click', () => this.hide());
    btnResume.addEventListener('click', () => this.hide());

    // Close when clicking outside the modal dialog box
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
