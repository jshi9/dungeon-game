import { CameraPerspective } from '../camera/CameraRig';

export interface SettingsModalCallbacks {
  onPerspectiveChange: (mode: CameraPerspective) => void;
  onSensitivityChange: (sens: number) => void;
  onResolutionChange: (w: number, h: number) => void;
  onClose: () => void;
}

export class SettingsModal {
  private root: HTMLElement;
  private modalEl!: HTMLElement;
  private callbacks: SettingsModalCallbacks;
  public isOpen: boolean = false;

  constructor(root: HTMLElement, callbacks: SettingsModalCallbacks) {
    this.root = root;
    this.callbacks = callbacks;
    this.buildDOM();
  }

  private buildDOM(): void {
    this.modalEl = document.createElement('div');
    this.modalEl.id = 'settings-modal-overlay';
    this.modalEl.className = 'modal-overlay hidden';

    this.modalEl.innerHTML = `
      <div class="retro-modal retro-panel">
        <div class="modal-header">
          <h2>⚙️ GAME SETTINGS</h2>
          <button id="btn-modal-close-x" class="retro-btn modal-close-x">✕</button>
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

          <!-- Mouse Sensitivity -->
          <div class="setting-row">
            <div class="label-with-val">
              <label class="setting-label">MOUSE SENSITIVITY</label>
              <span id="val-sensitivity" class="setting-value-badge">1.0x</span>
            </div>
            <input id="slider-sensitivity" type="range" min="0.5" max="3.0" step="0.1" value="1.0" class="retro-slider" />
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
              <li><span class="key-badge">Click Screen</span> : Lock Mouse Look (FPP)</li>
              <li><span class="key-badge">W</span><span class="key-badge">A</span><span class="key-badge">S</span><span class="key-badge">D</span> : Move / Strafe</li>
              <li><span class="key-badge">Shift</span> : Sprint &nbsp;|&nbsp; <span class="key-badge">M</span> : Switch Map</li>
              <li><span class="key-badge">Esc</span> / <span class="key-badge">O</span> : Settings Menu</li>
            </ul>
          </div>
        </div>

        <div class="modal-footer">
          <button id="btn-resume-game" class="retro-btn btn-primary-resume">▶ RESUME GAME</button>
        </div>
      </div>
    `;

    this.root.appendChild(this.modalEl);
    this.bindEvents();
  }

  private bindEvents(): void {
    const btnFpp = this.modalEl.querySelector('#btn-fpp') as HTMLButtonElement;
    const btnTpp = this.modalEl.querySelector('#btn-tpp') as HTMLButtonElement;
    const sliderSens = this.modalEl.querySelector('#slider-sensitivity') as HTMLInputElement;
    const valSens = this.modalEl.querySelector('#val-sensitivity') as HTMLElement;
    const selectRes = this.modalEl.querySelector('#modal-select-resolution') as HTMLSelectElement;
    const btnCloseX = this.modalEl.querySelector('#btn-modal-close-x') as HTMLButtonElement;
    const btnResume = this.modalEl.querySelector('#btn-resume-game') as HTMLButtonElement;

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

    sliderSens.addEventListener('input', () => {
      const val = parseFloat(sliderSens.value);
      valSens.textContent = `${val.toFixed(1)}x`;
      this.callbacks.onSensitivityChange(val);
    });

    selectRes.addEventListener('change', () => {
      const [w, h] = selectRes.value.split('x').map(Number);
      this.callbacks.onResolutionChange(w, h);
    });

    const closeHandler = () => {
      this.close();
    };

    btnCloseX.addEventListener('click', closeHandler);
    btnResume.addEventListener('click', closeHandler);

    // Close when clicking outside modal box
    this.modalEl.addEventListener('click', (e) => {
      if (e.target === this.modalEl) {
        this.close();
      }
    });
  }

  public open(): void {
    this.isOpen = true;
    this.modalEl.classList.remove('hidden');
    document.exitPointerLock();
  }

  public close(): void {
    this.isOpen = false;
    this.modalEl.classList.add('hidden');
    this.callbacks.onClose();
  }

  public toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  public setPerspectiveUI(mode: CameraPerspective): void {
    const btnFpp = this.modalEl.querySelector('#btn-fpp');
    const btnTpp = this.modalEl.querySelector('#btn-tpp');
    if (mode === 'FPP') {
      btnFpp?.classList.add('active-mode');
      btnTpp?.classList.remove('active-mode');
    } else {
      btnTpp?.classList.add('active-mode');
      btnFpp?.classList.remove('active-mode');
    }
  }
}
