import { EnvironmentMode } from '../lighting/LightingManager';
import { CameraPerspective } from '../camera/CameraRig';

export interface HUDCallbacks {
  onToggleMode: () => void;
  onSelectResolution: (width: number, height: number) => void;
  onToggleFullscreen: () => void;
  onOpenSettings: () => void;
}

export class RetroHUD {
  private root: HTMLElement;
  private callbacks: HUDCallbacks;

  // Elements
  private modeBtn!: HTMLButtonElement;
  private settingsBtn!: HTMLButtonElement;
  private viewBadgeEl!: HTMLElement;
  private posValueEl!: HTMLElement;
  private chunkValueEl!: HTMLElement;
  private yawValueEl!: HTMLElement;
  private fpsValueEl!: HTMLElement;
  private gamepadBadgeEl!: HTMLElement;

  private frameCount: number = 0;
  private lastFpsUpdate: number = performance.now();

  constructor(root: HTMLElement, callbacks: HUDCallbacks) {
    this.root = root;
    this.callbacks = callbacks;
    this.buildDOM();
  }

  private buildDOM(): void {
    this.root.innerHTML = `
      <header class="hud-top-bar">
        <div class="retro-panel hud-title">
          <span>⚔️ RETRO-3D ENGINE</span>
          <span id="hud-view-badge" class="key-badge">FPP</span>
        </div>

        <div class="hud-controls-group">
          <button id="btn-mode-toggle" class="retro-panel retro-btn">
            <span>🗺️ MAP: SURFACE</span>
          </button>

          <button id="btn-settings-toggle" class="retro-panel retro-btn" title="Settings Menu (Esc / O)">
            <span>⚙️ SETTINGS</span>
          </button>

          <button id="btn-fullscreen" class="retro-panel retro-btn" title="Toggle Fullscreen (F)">
            <span>⛶ FULLSCREEN</span>
          </button>
        </div>
      </header>

      <footer class="hud-bottom-bar">
        <div class="retro-panel">
          <ul class="telemetry-list">
            <li class="telemetry-item">
              <span class="telemetry-label">PLAYER POS:</span>
              <span id="tel-pos" class="telemetry-value">X: 0.0 Y: 0.0 Z: 0.0</span>
            </li>
            <li class="telemetry-item">
              <span class="telemetry-label">CHUNK:</span>
              <span id="tel-chunk" class="telemetry-value">[0, 0]</span>
            </li>
            <li class="telemetry-item">
              <span class="telemetry-label">CAM YAW:</span>
              <span id="tel-yaw" class="telemetry-value">0.0°</span>
            </li>
            <li class="telemetry-item">
              <span class="telemetry-label">RENDER FPS:</span>
              <span id="tel-fps" class="telemetry-value">60 FPS</span>
            </li>
            <li class="telemetry-item">
              <span class="telemetry-label">GAMEPAD:</span>
              <span id="tel-gamepad" class="gamepad-badge disconnected">DISCONNECTED</span>
            </li>
          </ul>
        </div>

        <div class="retro-panel controls-guide">
          <div><span class="key-badge">Click</span> : Mouse Look (FPP) &nbsp;|&nbsp; <span class="key-badge">W</span> <span class="key-badge">A</span> <span class="key-badge">S</span> <span class="key-badge">D</span> : Move / Strafe</div>
          <div><span class="key-badge">Shift</span> : Sprint &nbsp;|&nbsp; <span class="key-badge">M</span> : Switch Map (Screen Wipe)</div>
          <div><span class="key-badge">Esc</span> / <span class="key-badge">O</span> / <span class="key-badge">⚙️</span> : Settings (Toggle FPP/TPP, Sensitivity)</div>
        </div>
      </footer>
    `;

    this.modeBtn = this.root.querySelector('#btn-mode-toggle')!;
    this.settingsBtn = this.root.querySelector('#btn-settings-toggle')!;
    this.viewBadgeEl = this.root.querySelector('#hud-view-badge')!;
    this.posValueEl = this.root.querySelector('#tel-pos')!;
    this.chunkValueEl = this.root.querySelector('#tel-chunk')!;
    this.yawValueEl = this.root.querySelector('#tel-yaw')!;
    this.fpsValueEl = this.root.querySelector('#tel-fps')!;
    this.gamepadBadgeEl = this.root.querySelector('#tel-gamepad')!;

    // Bind event listeners
    this.modeBtn.addEventListener('click', () => {
      this.callbacks.onToggleMode();
    });

    this.settingsBtn.addEventListener('click', () => {
      this.callbacks.onOpenSettings();
    });

    const fsBtn = this.root.querySelector('#btn-fullscreen')!;
    fsBtn.addEventListener('click', () => {
      this.callbacks.onToggleFullscreen();
    });
  }

  public setMode(mode: EnvironmentMode): void {
    if (mode === 'surface') {
      this.modeBtn.innerHTML = `<span>☀️ MAP: SURFACE</span>`;
      this.modeBtn.classList.remove('active-mode');
    } else {
      this.modeBtn.innerHTML = `<span>🏰 MAP: DUNGEON</span>`;
      this.modeBtn.classList.add('active-mode');
    }
  }

  public setPerspective(mode: CameraPerspective): void {
    this.viewBadgeEl.textContent = mode;
  }

  public updateTelemetry(
    posX: number,
    posY: number,
    posZ: number,
    chunkX: number,
    chunkZ: number,
    yawRad: number
  ): void {
    this.posValueEl.textContent = `X: ${posX.toFixed(1)} Y: ${posY.toFixed(1)} Z: ${posZ.toFixed(1)}`;
    this.chunkValueEl.textContent = `[${chunkX}, ${chunkZ}]`;

    let deg = (yawRad * 180) / Math.PI;
    deg = ((deg % 360) + 360) % 360;
    this.yawValueEl.textContent = `${deg.toFixed(0)}°`;

    // FPS update
    this.frameCount++;
    const now = performance.now();
    if (now - this.lastFpsUpdate >= 500) {
      const fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsUpdate));
      this.fpsValueEl.textContent = `${fps} FPS`;
      this.frameCount = 0;
      this.lastFpsUpdate = now;
    }

    // Check Gamepad
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
    const hasGamepad = Array.from(gamepads).some((g) => g !== null && g.connected);
    if (hasGamepad) {
      this.gamepadBadgeEl.textContent = 'CONNECTED';
      this.gamepadBadgeEl.className = 'gamepad-badge connected';
    } else {
      this.gamepadBadgeEl.textContent = 'DISCONNECTED';
      this.gamepadBadgeEl.className = 'gamepad-badge disconnected';
    }
  }
}
