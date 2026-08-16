import { CameraPerspective } from '../camera/CameraRig';

export interface SettingsModalCallbacks {
  onPerspectiveChange: (mode: CameraPerspective) => void;
  onSensitivityChange: (sens: number) => void;
  onResolutionChange: (w: number, h: number) => void;
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
    const sliderSens = this.element.querySelector('#slider-sensitivity') as HTMLInputElement;
    const valSens = this.element.querySelector('#val-sensitivity') as HTMLElement;
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

    sliderSens.addEventListener('input', () => {
      const val = parseFloat(sliderSens.value);
      valSens.textContent = `${val.toFixed(1)}x`;
      this.callbacks.onSensitivityChange(val);
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

  public show(): void {
    this.isOpen = true;
    this.element.style.display = 'flex';
    document.exitPointerLock();
  }

  public hide(): void {
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

  public setPerspectiveUI(mode: CameraPerspective): void {
    const btnFpp = this.element.querySelector('#btn-fpp');
    const btnTpp = this.element.querySelector('#btn-tpp');
    if (mode === 'FPP') {
      btnFpp?.classList.add('active-mode');
      btnTpp?.classList.remove('active-mode');
    } else {
      btnTpp?.classList.add('active-mode');
      btnFpp?.classList.remove('active-mode');
    }
  }
}
