import { WorldManager, WorldSave } from '../core/WorldManager';
import { EnvironmentMode } from '../lighting/LightingManager';

export interface TitleScreenCallbacks {
  onPlayWorld: (world: WorldSave) => void;
  onOpenSettings: () => void;
}

export class TitleScreenModal {
  private element: HTMLElement;
  private callbacks: TitleScreenCallbacks;
  private worldManager: WorldManager;
  public isOpen: boolean = true;
  private currentView: 'main' | 'select' | 'create' | 'extras' = 'main';

  private currentSlideIndex: number = 0;
  private slideInterval: number | null = null;

  private artworkList = [
    { src: '/art/bg_library.jpg', name: 'Grand Cathedral Library' },
    { src: '/art/bg_mountain.jpg', name: 'Frostpeak Outpost' },
    { src: '/art/bg_overworld.jpg', name: 'Verdant Spires & Caverns' }
  ];

  constructor(callbacks: TitleScreenCallbacks) {
    this.callbacks = callbacks;
    this.worldManager = WorldManager.getInstance();
    this.element = document.createElement('div');
    this.element.id = 'title-screen-overlay';
    this.element.className = 'title-screen-overlay';
    document.body.appendChild(this.element);

    this.render();
    this.startBackgroundRotation();
  }

  public show(): void {
    this.isOpen = true;
    this.currentView = 'main';
    this.element.classList.remove('hidden');
    this.element.style.display = 'flex';
    document.exitPointerLock();
    this.render();
    this.startBackgroundRotation();
  }

  public hide(): void {
    this.isOpen = false;
    this.element.classList.add('hidden');
    this.element.style.display = 'none';
    this.stopBackgroundRotation();
  }

  private startBackgroundRotation(): void {
    if (this.slideInterval) clearInterval(this.slideInterval);

    // Smooth slow rotation every 11 seconds
    this.slideInterval = window.setInterval(() => {
      if (!this.isOpen) return;
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.artworkList.length;
      this.updateSlideLayers();
    }, 11000);
  }

  private stopBackgroundRotation(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  private updateSlideLayers(): void {
    const slides = this.element.querySelectorAll<HTMLElement>('.title-bg-slide');
    slides.forEach((slide, idx) => {
      if (idx === this.currentSlideIndex) {
        slide.classList.add('active-slide');
      } else {
        slide.classList.remove('active-slide');
      }
    });
  }

  private setView(view: 'main' | 'select' | 'create' | 'extras'): void {
    this.currentView = view;
    this.render();
  }

  private render(): void {
    const activeWorld = this.worldManager.getActiveWorld();

    const slidesHtml = this.artworkList
      .map(
        (art, idx) =>
          `<div class="title-bg-slide ${idx === this.currentSlideIndex ? 'active-slide' : ''}" style="background-image: url('${art.src}');"></div>`
      )
      .join('');

    let contentHtml = '';
    if (this.currentView === 'main') {
      contentHtml = this.getMainViewHtml(activeWorld);
    } else if (this.currentView === 'select') {
      contentHtml = this.getSelectViewHtml();
    } else if (this.currentView === 'create') {
      contentHtml = this.getCreateViewHtml();
    } else if (this.currentView === 'extras') {
      contentHtml = this.getExtrasViewHtml();
    }

    this.element.innerHTML = `
      <!-- Rotating Slow Ken-Burns Artwork Slides -->
      <div class="title-bg-carousel">
        ${slidesHtml}
      </div>

      <!-- Atmospheric Soft Dark Vignette & Depth Layers -->
      <div class="title-vignette-overlay"></div>
      <div class="title-particles-container">
        <div class="particle-mote p1"></div>
        <div class="particle-mote p2"></div>
        <div class="particle-mote p3"></div>
        <div class="particle-mote p4"></div>
        <div class="particle-mote p5"></div>
        <div class="particle-mote p6"></div>
      </div>

      <!-- Main Stage Container -->
      <div class="title-stage-wrapper">
        ${contentHtml}
      </div>

      <!-- Bottom Info Bar -->
      <div class="title-bottom-bar">
        <div class="bottom-bar-left">
          <div class="active-realm-capsule">
            <span class="capsule-icon">⚜</span>
            <span class="capsule-label">${activeWorld.name}</span>
            <span class="capsule-seed">#${activeWorld.seed}</span>
          </div>
          <span class="version-tag">v1.4.2</span>
        </div>
      </div>
    `;

    this.bindCurrentViewEvents();
  }

  private getMainViewHtml(_activeWorld: WorldSave): string {
    return `
      <div class="title-hollow-knight-layout">
        <!-- Integrated Majestic Emblem with Curving Arched Title -->
        <div class="hollow-header-crest">
          <svg class="title-integrated-emblem-svg" viewBox="0 0 840 670" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <!-- Title Curved Arc Path crowning the crossed swords and shield -->
              <path id="titleCurvePath" d="M 35,255 Q 420,12 805,255" />
              <!-- Subtitle Curved Arc under the lower banners -->
              <path id="subCurvePath" d="M 220,620 Q 420,670 620,620" />

              <!-- Royal Gold Gradients -->
              <linearGradient id="titleGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffffff" />
                <stop offset="25%" stop-color="#fef08a" />
                <stop offset="60%" stop-color="#f59e0b" />
                <stop offset="85%" stop-color="#d97706" />
                <stop offset="100%" stop-color="#78350f" />
              </linearGradient>
              <linearGradient id="subGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.2" />
                <stop offset="25%" stop-color="#fde68a" stop-opacity="0.95" />
                <stop offset="50%" stop-color="#ffffff" stop-opacity="1" />
                <stop offset="75%" stop-color="#fde68a" stop-opacity="0.95" />
                <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.2" />
              </linearGradient>
              
              <!-- Clean Shadow & Crisp Gold Highlight Filters (No Muddy Aura) -->
              <filter id="epicTitleGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.98" />
                <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="#fef08a" flood-opacity="0.45" />
              </filter>
              <filter id="emblemDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="14" stdDeviation="20" flood-color="#000000" flood-opacity="0.95" />
              </filter>
            </defs>

            <!-- 1. Large High-Res Crest Emblem in Center -->
            <image href="/art/title_crest_emblem.png" x="170" y="65" width="500" height="540" filter="url(#emblemDropShadow)" preserveAspectRatio="xMidYMid meet" />

            <!-- 2. Curving Title Text Arched Over the Crest -->
            <text class="curved-title-text" filter="url(#epicTitleGlow)">
              <textPath href="#titleCurvePath" startOffset="50%" text-anchor="middle">
                A E T H E L G A R D
              </textPath>
            </text>

            <!-- 3. Curving Subtitle Under the Crest Ribbons -->
            <text class="curved-sub-text">
              <textPath href="#subCurvePath" startOffset="50%" text-anchor="middle">
                PROCEDURAL REALMS • RETRO 3D
              </textPath>
            </text>
          </svg>
        </div>

        <!-- Vertical Minimalist Hollow-Knight Style Menu -->
        <nav class="hollow-menu-nav">
          <button id="btn-menu-start" class="hollow-menu-item active-focus">
            <span class="menu-flourish left">«</span>
            <span class="menu-label">START GAME</span>
            <span class="menu-flourish right">»</span>
          </button>
          <button id="btn-menu-worlds" class="hollow-menu-item">
            <span class="menu-flourish left">«</span>
            <span class="menu-label">SAVED REALMS</span>
            <span class="menu-flourish right">»</span>
          </button>
          <button id="btn-menu-create" class="hollow-menu-item">
            <span class="menu-flourish left">«</span>
            <span class="menu-label">CREATE NEW REALM</span>
            <span class="menu-flourish right">»</span>
          </button>
          <button id="btn-menu-options" class="hollow-menu-item">
            <span class="menu-flourish left">«</span>
            <span class="menu-label">OPTIONS</span>
            <span class="menu-flourish right">»</span>
          </button>
          <button id="btn-menu-extras" class="hollow-menu-item">
            <span class="menu-flourish left">«</span>
            <span class="menu-label">EXTRAS & LORE</span>
            <span class="menu-flourish right">»</span>
          </button>
        </nav>
      </div>
    `;
  }

  private getSelectViewHtml(): string {
    const worlds = this.worldManager.getAllWorlds();
    const activeWorld = this.worldManager.getActiveWorld();

    const cards = worlds
      .map((w, index) => {
        const isCurrent = w.id === activeWorld.id;
        const playedDate = new Date(w.lastPlayed).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });

        const modeIcon = w.mode === 'surface' ? '🌲' : w.mode === 'dungeon' ? '⚔️' : '📚';

        return `
          <div class="hollow-save-card ${isCurrent ? 'active-slot' : ''}" data-id="${w.id}">
            <div class="save-card-left">
              <div class="save-slot-badge">
                <span class="slot-crest">⚜</span>
                <span class="slot-num">SLOT 0${index + 1}</span>
              </div>
              <div class="save-name-group">
                <div class="save-title-row">
                  <span class="save-world-name">${w.name}</span>
                  ${isCurrent ? '<span class="active-pill">ACTIVE REALM</span>' : ''}
                </div>
                <div class="save-meta-row">
                  <span class="meta-pill seed-pill">Seed: #${w.seed}</span>
                  <span class="meta-pill mode-pill">${modeIcon} ${w.mode.toUpperCase()}</span>
                  <span class="meta-date">Last Played: ${playedDate}</span>
                </div>
              </div>
            </div>

            <div class="save-card-actions">
              <button class="hollow-card-action-btn enter-btn btn-card-play" data-id="${w.id}">
                <span class="action-flourish">«</span>
                <span>ENTER REALM</span>
                <span class="action-flourish">»</span>
              </button>
              ${
                worlds.length > 1
                  ? `<button class="hollow-card-delete-btn btn-card-delete" data-id="${w.id}" title="Delete Realm">
                      <span>DELETE</span>
                    </button>`
                  : ''
              }
            </div>
          </div>
        `;
      })
      .join('');

    return `
      <div class="hollow-subview-container">
        <!-- Subview Header with Filigree -->
        <div class="subview-header">
          <svg class="subview-filigree-top" viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200,10 C220,10 240,20 280,20 C320,20 360,10 390,15" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
            <path d="M200,10 C180,10 160,20 120,20 C80,20 40,10 10,15" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
            <circle cx="200" cy="10" r="3" fill="#fbbf24"/>
            <circle cx="120" cy="20" r="2" fill="#f59e0b" opacity="0.8"/>
            <circle cx="280" cy="20" r="2" fill="#f59e0b" opacity="0.8"/>
          </svg>
          <h2 class="subview-title">SAVED REALMS ARCHIVE</h2>
          <div class="subview-divider-line"></div>
        </div>

        <!-- Scrollable Cards Slate -->
        <div class="hollow-saves-list">
          ${cards}

          <!-- In-List Add New World Slot Card -->
          <div id="btn-sub-create" class="hollow-new-slot-card">
            <span class="new-slot-plus">+</span>
            <span class="new-slot-label">FORGE A NEW REALM</span>
          </div>
        </div>

        <!-- Bottom Return Navigation -->
        <div class="subview-footer-nav">
          <button id="btn-sub-back" class="hollow-menu-item active-focus">
            <span class="menu-flourish left">«</span>
            <span class="menu-label">RETURN TO TITLE</span>
            <span class="menu-flourish right">»</span>
          </button>
        </div>
      </div>
    `;
  }

  private getCreateViewHtml(): string {
    const randomName = this.worldManager.generateRandomWorldName();
    const randomSeed = this.worldManager.generateRandomSeed();

    return `
      <div class="hollow-subview-container">
        <!-- Subview Header -->
        <div class="subview-header">
          <svg class="subview-filigree-top" viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200,10 C220,10 240,20 280,20 C320,20 360,10 390,15" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
            <path d="M200,10 C180,10 160,20 120,20 C80,20 40,10 10,15" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
            <circle cx="200" cy="10" r="3" fill="#fbbf24"/>
            <circle cx="120" cy="20" r="2" fill="#f59e0b" opacity="0.8"/>
            <circle cx="280" cy="20" r="2" fill="#f59e0b" opacity="0.8"/>
          </svg>
          <h2 class="subview-title">FORGE NEW REALM</h2>
          <div class="subview-divider-line"></div>
        </div>

        <!-- Elegant Translucent Glass Form -->
        <div class="hollow-forge-form">
          <!-- 1. Realm Name Field -->
          <div class="forge-field">
            <label class="forge-label">REALM NAME</label>
            <div class="forge-input-wrapper">
              <input id="input-world-name" type="text" class="hollow-text-input" value="${randomName}" placeholder="e.g. Kingdom of Alderia" />
              <button id="btn-rand-name" class="forge-dice-btn" title="Randomize Realm Name">🎲 RANDOMIZE</button>
            </div>
          </div>

          <!-- 2. Seed Field -->
          <div class="forge-field">
            <label class="forge-label">GENERATION SEED (NUMBER OR PHRASE)</label>
            <div class="forge-input-wrapper">
              <input id="input-world-seed" type="text" class="hollow-text-input" value="${randomSeed}" placeholder="e.g. 424242 or 'ancient_spires'" />
              <button id="btn-rand-seed" class="forge-dice-btn" title="Randomize Numeric Seed">🎲 RANDOMIZE</button>
            </div>
            <span class="forge-hint-text">The seed deterministically shapes mountain ranges, valleys, tree biomes, and dungeon halls.</span>
          </div>

          <!-- 3. Starting Zone Selection Cards -->
          <div class="forge-field">
            <label class="forge-label">STARTING ENVIRONMENT ZONE</label>
            <div class="hollow-zone-grid">
              <div class="zone-card active" data-mode="surface">
                <div class="zone-card-icon">🌲</div>
                <div class="zone-card-title">SURFACE WILDERNESS</div>
                <div class="zone-card-desc">Expansive 50-block mountains, rolling valleys, voxel trees, and open skies.</div>
              </div>
              <div class="zone-card" data-mode="dungeon">
                <div class="zone-card-icon">⚔️</div>
                <div class="zone-card-title">DUNGEON CATACOMBS</div>
                <div class="zone-card-desc">Gothic stone corridors, flickering torches, and procedural subterranean chambers.</div>
              </div>
              <div class="zone-card" data-mode="library">
                <div class="zone-card-icon">📚</div>
                <div class="zone-card-title">CATHEDRAL LIBRARY</div>
                <div class="zone-card-desc">Grand archival vault with towering bookshelves, study desks, and readable LaTeX manuscripts.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Footer -->
        <div class="subview-footer-nav dual-actions">
          <button id="btn-confirm-create" class="hollow-menu-item primary-action">
            <span class="menu-flourish left">«</span>
            <span class="menu-label">FORGE & ENTER REALM</span>
            <span class="menu-flourish right">»</span>
          </button>
          <button id="btn-sub-back" class="hollow-menu-item">
            <span class="menu-flourish left">«</span>
            <span class="menu-label">RETURN TO TITLE</span>
            <span class="menu-flourish right">»</span>
          </button>
        </div>
      </div>
    `;
  }

  private getExtrasViewHtml(): string {
    return `
      <div class="hollow-subview-container">
        <!-- Subview Header -->
        <div class="subview-header">
          <svg class="subview-filigree-top" viewBox="0 0 400 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M200,10 C220,10 240,20 280,20 C320,20 360,10 390,15" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
            <path d="M200,10 C180,10 160,20 120,20 C80,20 40,10 10,15" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" opacity="0.85"/>
            <circle cx="200" cy="10" r="3" fill="#fbbf24"/>
            <circle cx="120" cy="20" r="2" fill="#f59e0b" opacity="0.8"/>
            <circle cx="280" cy="20" r="2" fill="#f59e0b" opacity="0.8"/>
          </svg>
          <h2 class="subview-title">CHRONICLES & ARCHITECTURE</h2>
          <div class="subview-divider-line"></div>
        </div>

        <!-- Lore & Architecture Cards -->
        <div class="hollow-extras-grid">
          <div class="extra-lore-card">
            <div class="extra-lore-header">
              <span class="extra-lore-icon">🏔</span>
              <span class="extra-lore-title">MULTI-OCTAVE FBM WORLD GEN</span>
            </div>
            <p>4-octave Simplex Fractal Brownian Motion generating dramatic peaks reaching up to 55+ blocks, snow-capped summits, alpine ridges, and dynamic voxel flora scaled to first-person immersion.</p>
          </div>

          <div class="extra-lore-card">
            <div class="extra-lore-header">
              <span class="extra-lore-icon">📜</span>
              <span class="extra-lore-title">KATEX VELLUM MANUSCRIPT READER</span>
            </div>
            <p>Full KaTeX mathematical typesetting integrating theorem archives, procedural author identities, illuminated drop caps, Celtic flourishes, and authentic double-page vellum book reading.</p>
          </div>

          <div class="extra-lore-card">
            <div class="extra-lore-header">
              <span class="extra-lore-icon">⚡</span>
              <span class="extra-lore-title">CONTINUOUS SWEPT AABB PHYSICS</span>
            </div>
            <p>Sub-stepped continuous swept AABB physics engine featuring zero clipping, 1.35-block automatic stepping, slope traversal, and realistic jump impulse.</p>
          </div>

          <div class="extra-lore-card">
            <div class="extra-lore-header">
              <span class="extra-lore-icon">🎼</span>
              <span class="extra-lore-title">16-TRACK PROCEDURAL WEB AUDIO</span>
            </div>
            <p>Modal medieval polyphony synthesized in real-time across 4 realms (Title, Overworld, Catacombs, and Library) with algorithmic cathedral convolver reverberation.</p>
          </div>
        </div>

        <!-- Bottom Return Navigation -->
        <div class="subview-footer-nav">
          <button id="btn-sub-back" class="hollow-menu-item active-focus">
            <span class="menu-flourish left">«</span>
            <span class="menu-label">RETURN TO TITLE</span>
            <span class="menu-flourish right">»</span>
          </button>
        </div>
      </div>
    `;
  }

  private bindCurrentViewEvents(): void {
    if (this.currentView === 'main') {
      this.element.querySelector('#btn-menu-start')?.addEventListener('click', () => {
        const activeWorld = this.worldManager.getActiveWorld();
        this.hide();
        this.callbacks.onPlayWorld(activeWorld);
      });

      this.element.querySelector('#btn-menu-worlds')?.addEventListener('click', () => {
        this.setView('select');
      });

      this.element.querySelector('#btn-menu-create')?.addEventListener('click', () => {
        this.setView('create');
      });

      this.element.querySelector('#btn-menu-options')?.addEventListener('click', () => {
        this.callbacks.onOpenSettings();
      });

      this.element.querySelector('#btn-menu-extras')?.addEventListener('click', () => {
        this.setView('extras');
      });

      // Hover feedback
      const menuItems = Array.from(this.element.querySelectorAll<HTMLButtonElement>('.hollow-menu-item'));
      menuItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          menuItems.forEach((m) => m.classList.remove('active-focus'));
          item.classList.add('active-focus');
        });
      });
    } else if (this.currentView === 'select') {
      this.element.querySelector('#btn-sub-back')?.addEventListener('click', () => this.setView('main'));
      this.element.querySelector('#btn-sub-create')?.addEventListener('click', () => this.setView('create'));

      this.element.querySelectorAll('.btn-card-play').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const id = (e.currentTarget as HTMLElement).dataset.id;
          if (id) {
            const world = this.worldManager.setActiveWorldId(id);
            if (world) {
              this.hide();
              this.callbacks.onPlayWorld(world);
            }
          }
        });
      });

      this.element.querySelectorAll('.btn-card-delete').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = (e.currentTarget as HTMLElement).dataset.id;
          if (id && confirm('Are you sure you wish to delete this world archive?')) {
            this.worldManager.deleteWorld(id);
            this.render();
          }
        });
      });
    } else if (this.currentView === 'create') {
      const inputName = this.element.querySelector('#input-world-name') as HTMLInputElement;
      const inputSeed = this.element.querySelector('#input-world-seed') as HTMLInputElement;
      let selectedMode: EnvironmentMode = 'surface';

      this.element.querySelector('#btn-rand-name')?.addEventListener('click', () => {
        inputName.value = this.worldManager.generateRandomWorldName();
      });

      this.element.querySelector('#btn-rand-seed')?.addEventListener('click', () => {
        inputSeed.value = `${this.worldManager.generateRandomSeed()}`;
      });

      const zoneCards = this.element.querySelectorAll('.zone-card');
      zoneCards.forEach((card) => {
        card.addEventListener('click', (e) => {
          zoneCards.forEach((b) => b.classList.remove('active'));
          const target = e.currentTarget as HTMLElement;
          target.classList.add('active');
          selectedMode = (target.dataset.mode as EnvironmentMode) || 'surface';
        });
      });

      this.element.querySelector('#btn-sub-back')?.addEventListener('click', () => this.setView('main'));

      this.element.querySelector('#btn-confirm-create')?.addEventListener('click', () => {
        const name = inputName.value.trim() || 'New Realm';
        const seedVal = inputSeed.value.trim() || this.worldManager.generateRandomSeed();

        const newWorld = this.worldManager.createWorld(name, seedVal, selectedMode);
        this.hide();
        this.callbacks.onPlayWorld(newWorld);
      });
    } else if (this.currentView === 'extras') {
      this.element.querySelector('#btn-sub-back')?.addEventListener('click', () => this.setView('main'));
    }
  }
}
