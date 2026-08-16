import { EnvironmentMode } from '../lighting/LightingManager';
import { CameraPerspective } from '../camera/CameraRig';
import { BookData } from '../lore/LibraryLoreGenerator';

export interface InventoryItem {
  id: string;
  name: string;
  icon: string;
  count?: number;
  description: string;
}

export const DEFAULT_HOTBAR_ITEMS: InventoryItem[] = [
  { id: 'flashlight', name: 'High-Power Flashlight', icon: '🔦', description: 'Ultra-bright directional beam' },
  { id: 'lantern', name: 'Brass Lantern', icon: '🏮', description: 'Warm 360° omnidirectional light' },
  { id: 'sword', name: 'Iron Broadsword', icon: '⚔️', description: 'Hand-forged knight blade' },
  { id: 'shield', name: 'Oak Shield', icon: '🛡️', description: 'Reinforced iron-banded shield' },
  { id: 'potion', name: 'Health Elixir', icon: '🧪', count: 3, description: 'Restores vitality and stamina' },
  { id: 'compass', name: 'Golden Compass', icon: '🧭', description: 'Points towards dungeon center' },
  { id: 'key', name: 'Dungeon Key', icon: '🔑', count: 1, description: 'Opens heavy iron-bound doors' },
  { id: 'bread', name: 'Field Rations', icon: '🍞', count: 5, description: 'Hearty adventurer bread' }
];

export interface HUDCallbacks {
  onToggleMode: () => void;
  onSelectResolution: (width: number, height: number) => void;
  onToggleFullscreen: () => void;
  onSelectItem?: (item: InventoryItem | null, index: number) => void;
}

export class RetroHUD {
  private root: HTMLElement;
  private callbacks: HUDCallbacks;

  // Elements
  private modeBtn!: HTMLButtonElement;
  private viewBadgeEl!: HTMLElement;
  private posValueEl!: HTMLElement;
  private chunkValueEl!: HTMLElement;
  private yawValueEl!: HTMLElement;
  private fpsValueEl!: HTMLElement;
  private gamepadBadgeEl!: HTMLElement;
  private hotbarLabelEl!: HTMLElement;
  private hotbarSlotsContainer!: HTMLElement;

  // Book Hover Tooltip
  private bookHoverBadgeEl!: HTMLElement;
  private hoverTitleEl!: HTMLElement;
  private hoverCategoryEl!: HTMLElement;

  // Music Toast
  private musicToastEl!: HTMLElement;
  private musicTitleEl!: HTMLElement;
  private musicSubtitleEl!: HTMLElement;
  private musicToastTimer: number | null = null;

  public items: InventoryItem[] = [...DEFAULT_HOTBAR_ITEMS];
  public selectedIndex: number = -1;

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
            <span>☀️ MAP: SURFACE</span>
          </button>

          <button id="btn-fullscreen" class="retro-panel retro-btn" title="Toggle Fullscreen (F)">
            <span>⛶ FULLSCREEN</span>
          </button>
        </div>
      </header>

      <!-- Top Center Music Now Playing Notification -->
      <div id="hud-music-toast" class="hud-music-toast hidden">
        <span class="music-icon">🎵</span>
        <div class="music-info">
          <div id="music-title" class="music-title">The Scribe's Vigil</div>
          <div id="music-subtitle" class="music-subtitle">Medieval Lute & Flute</div>
        </div>
      </div>

      <!-- Center-Screen Raycast Book Hover Badge -->
      <div id="hud-book-hover-badge" class="hud-book-hover-badge hidden">
        <span class="book-hover-icon">📖</span>
        <div class="book-hover-info">
          <div id="hover-book-title" class="hover-book-title">The Codex of Veritas</div>
          <div id="hover-book-category" class="hover-book-category">NON-FICTION • HISTORY</div>
        </div>
        <span class="hover-click-prompt">CLICK TO READ</span>
      </div>

      <!-- Center-Bottom Pixel Inventory Hotbar -->
      <div class="hud-hotbar-container">
        <div id="hotbar-item-label" class="hotbar-item-label" style="display: none;"></div>
        <div id="hotbar-slots" class="hotbar-slots-wrapper retro-panel">
          <!-- Populated by renderHotbar() -->
        </div>
      </div>

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
          <div><span class="key-badge">Click Book</span> : Read &nbsp;|&nbsp; <span class="key-badge">1</span>-<span class="key-badge">8</span> : Items &nbsp;|&nbsp; <span class="key-badge">W</span><span class="key-badge">A</span><span class="key-badge">S</span><span class="key-badge">D</span> : Move</div>
          <div><span class="key-badge">M</span> : Switch Map &nbsp;|&nbsp; <span class="key-badge">N</span> : Grand Library &nbsp;|&nbsp; <span class="key-badge">Esc</span> : Settings</div>
        </div>
      </footer>
    `;

    this.modeBtn = this.root.querySelector('#btn-mode-toggle')!;
    this.viewBadgeEl = this.root.querySelector('#hud-view-badge')!;
    this.posValueEl = this.root.querySelector('#tel-pos')!;
    this.chunkValueEl = this.root.querySelector('#tel-chunk')!;
    this.yawValueEl = this.root.querySelector('#tel-yaw')!;
    this.fpsValueEl = this.root.querySelector('#tel-fps')!;
    this.gamepadBadgeEl = this.root.querySelector('#tel-gamepad')!;
    this.hotbarLabelEl = this.root.querySelector('#hotbar-item-label')!;
    this.hotbarSlotsContainer = this.root.querySelector('#hotbar-slots')!;
    this.bookHoverBadgeEl = this.root.querySelector('#hud-book-hover-badge')!;
    this.hoverTitleEl = this.root.querySelector('#hover-book-title')!;
    this.hoverCategoryEl = this.root.querySelector('#hover-book-category')!;
    this.musicToastEl = this.root.querySelector('#hud-music-toast')!;
    this.musicTitleEl = this.root.querySelector('#music-title')!;
    this.musicSubtitleEl = this.root.querySelector('#music-subtitle')!;

    // Bind event listeners
    this.modeBtn.addEventListener('click', () => {
      this.callbacks.onToggleMode();
    });

    const fsBtn = this.root.querySelector('#btn-fullscreen')!;
    fsBtn.addEventListener('click', () => {
      this.callbacks.onToggleFullscreen();
    });

    this.renderHotbar();
    this.setPerspective('FPP');
  }

  public showBookHover(book: BookData): void {
    this.hoverTitleEl.textContent = book.title;
    this.hoverCategoryEl.textContent = `${book.classification.toUpperCase()} • ${book.subgenre.toUpperCase()}`;
    this.bookHoverBadgeEl.classList.remove('hidden');
  }

  public hideBookHover(): void {
    this.bookHoverBadgeEl.classList.add('hidden');
  }

  public showNowPlaying(title: string, subtitle: string): void {
    this.musicTitleEl.textContent = title;
    this.musicSubtitleEl.textContent = subtitle;
    this.musicToastEl.classList.remove('hidden');

    if (this.musicToastTimer !== null) {
      window.clearTimeout(this.musicToastTimer);
    }

    this.musicToastTimer = window.setTimeout(() => {
      this.musicToastEl.classList.add('hidden');
    }, 5500);
  }

  public renderHotbar(): void {
    this.hotbarSlotsContainer.innerHTML = '';

    this.items.forEach((item, index) => {
      const slot = document.createElement('div');
      slot.className = `hotbar-slot ${index === this.selectedIndex ? 'active' : ''}`;
      slot.title = `${item.name}: ${item.description} (Press ${index + 1} to toggle)`;

      slot.innerHTML = `
        <span class="slot-number">${index + 1}</span>
        <span class="slot-icon">${item.icon}</span>
        ${item.count && item.count > 1 ? `<span class="slot-count">${item.count}</span>` : ''}
      `;

      slot.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectSlot(index);
      });

      this.hotbarSlotsContainer.appendChild(slot);
    });

    this.updateActiveLabel();
  }

  public selectSlot(index: number): void {
    if (index < 0 || index >= this.items.length) return;

    if (this.selectedIndex === index) {
      this.selectedIndex = -1;

      const slots = this.hotbarSlotsContainer.querySelectorAll('.hotbar-slot');
      slots.forEach((s) => s.classList.remove('active'));

      this.updateActiveLabel();
      if (this.callbacks.onSelectItem) {
        this.callbacks.onSelectItem(null, -1);
      }
      return;
    }

    this.selectedIndex = index;

    const slots = this.hotbarSlotsContainer.querySelectorAll('.hotbar-slot');
    slots.forEach((s, idx) => {
      if (idx === index) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    this.updateActiveLabel();
    const item = this.items[index];
    if (this.callbacks.onSelectItem) {
      this.callbacks.onSelectItem(item, index);
    }
  }

  public selectNextSlot(): void {
    const next = this.selectedIndex === -1 ? 0 : (this.selectedIndex + 1) % this.items.length;
    this.selectSlot(next);
  }

  public selectPrevSlot(): void {
    const prev = this.selectedIndex === -1 ? this.items.length - 1 : (this.selectedIndex - 1 + this.items.length) % this.items.length;
    this.selectSlot(prev);
  }

  public getSelectedItem(): InventoryItem | null {
    if (this.selectedIndex < 0 || this.selectedIndex >= this.items.length) {
      return null;
    }
    return this.items[this.selectedIndex];
  }

  private updateActiveLabel(): void {
    const item = this.getSelectedItem();
    if (item) {
      this.hotbarLabelEl.style.display = 'block';
      this.hotbarLabelEl.textContent = `${item.icon} ${item.name.toUpperCase()}`;
      this.hotbarLabelEl.classList.remove('animate-pop');
      void this.hotbarLabelEl.offsetWidth;
      this.hotbarLabelEl.classList.add('animate-pop');
    } else {
      this.hotbarLabelEl.style.display = 'block';
      this.hotbarLabelEl.textContent = `✋ UNEQUIPPED (EMPTY HANDS)`;
      this.hotbarLabelEl.classList.remove('animate-pop');
      void this.hotbarLabelEl.offsetWidth;
      this.hotbarLabelEl.classList.add('animate-pop');
    }
  }

  public setMode(mode: EnvironmentMode): void {
    if (mode === 'surface') {
      this.modeBtn.innerHTML = `<span>☀️ MAP: SURFACE</span>`;
      this.modeBtn.classList.remove('active-mode');
    } else if (mode === 'dungeon') {
      this.modeBtn.innerHTML = `<span>🏰 MAP: DUNGEON</span>`;
      this.modeBtn.classList.add('active-mode');
    } else {
      this.modeBtn.innerHTML = `<span>📚 MAP: GRAND LIBRARY</span>`;
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

    this.frameCount++;
    const now = performance.now();
    if (now - this.lastFpsUpdate >= 500) {
      const fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsUpdate));
      this.fpsValueEl.textContent = `${fps} FPS`;
      this.frameCount = 0;
      this.lastFpsUpdate = now;
    }

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
