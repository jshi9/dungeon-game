import { BookData, BookPage } from '../lore/BookTypes';
import { MathRenderer } from '../lore/MathRenderer';
import { bookGeneratorService } from '../services/BookGeneratorService';
import { aiBookService } from '../services/aiBookService';

export interface BookReaderCallbacks {
  onClose?: () => void;
}

/**
 * Authentic Medieval Two-Page Vellum Manuscript Reader Modal
 * Featuring long-form multi-page reading (10–50 folios), background batch prefetching,
 * subtle in-world deciphering loading states, and contextual KaTeX math gating across 18 dark fantasy genres.
 */
export class BookReaderModal {
  private overlayEl: HTMLElement;
  private modalEl: HTMLElement;
  private currentBook: BookData | null = null;
  private currentPageIndex: number = 0; // index in book.pages (spread shows page & page+1)
  private isOpen: boolean = false;
  private isLoading: boolean = false;
  private isAwaitingPrefetch: boolean = false;
  private errorMessage: string | null = null;
  private onCloseCallback?: () => void;

  constructor(options?: { onClose?: () => void }) {
    if (options?.onClose) {
      this.onCloseCallback = options.onClose;
    }

    this.overlayEl = document.createElement('div');
    this.overlayEl.id = 'book-reader-overlay';
    this.overlayEl.className = 'book-reader-overlay hidden';

    this.modalEl = document.createElement('div');
    this.modalEl.className = 'book-reader-container';
    this.overlayEl.appendChild(this.modalEl);

    document.body.appendChild(this.overlayEl);

    this.bindEvents();
  }

  private bindEvents(): void {
    this.overlayEl.addEventListener('click', (e) => {
      if (e.target === this.overlayEl) {
        this.close();
      }
    });

    window.addEventListener(
      'keydown',
      (e) => {
        if (!this.isOpen) return;

        if (e.code === 'Escape' || e.code === 'KeyE') {
          e.preventDefault();
          e.stopPropagation();
          this.close();
          return;
        }

        if (this.isLoading) return;

        if (e.code === 'ArrowRight' || e.code === 'KeyD' || e.code === 'PageDown' || e.code === 'Space') {
          e.preventDefault();
          this.nextPage();
        } else if (e.code === 'ArrowLeft' || e.code === 'KeyA' || e.code === 'PageUp') {
          e.preventDefault();
          this.prevPage();
        }
      },
      { capture: true }
    );
  }

  public async open(book: BookData, onClose?: () => void): Promise<void> {
    this.currentBook = book;
    this.currentPageIndex = 0;
    this.isOpen = true;
    this.errorMessage = null;
    this.isAwaitingPrefetch = false;

    if (onClose) {
      this.onCloseCallback = onClose;
    }
    this.overlayEl.classList.remove('hidden');
    document.exitPointerLock();

    // If initial pages (1-8) aren't loaded, show full deciphering shimmer state
    if (!book.isLoaded || !book.pages || book.pages.length <= 4) {
      this.isLoading = true;
      this.render();

      try {
        const generated = await bookGeneratorService.generateBook({
          id: book.id,
          title: book.title,
          subtitle: book.subtitle,
          author: book.author,
          era: book.era,
          genre: book.genre,
          targetPageCount: book.targetPageCount,
          seed: book.seed
        });

        if (this.isOpen && this.currentBook && (this.currentBook.id === book.id || this.currentBook.title === book.title)) {
          this.currentBook = generated;
          this.isLoading = false;
          this.render();
        }
      } catch (err) {
        console.error('[BookReaderModal] Failed to generate manuscript:', err);
        if (this.isOpen) {
          this.isLoading = false;
          this.errorMessage = 'The ink has faded beyond recognition... The ancient glyphs resist translation.';
          this.render();
        }
      }
    } else {
      this.isLoading = false;
      this.render();
    }
  }

  public close(): void {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlayEl.classList.add('hidden');
    if (this.onCloseCallback) {
      this.onCloseCallback();
    }
  }

  public getIsOpen(): boolean {
    return this.isOpen;
  }

  public async goToPage(targetIndex: number): Promise<void> {
    if (!this.currentBook || this.isLoading) return;
    const maxPages = this.currentBook.targetPageCount || this.currentBook.pages.length;
    const clamped = Math.max(0, Math.min(targetIndex - (targetIndex % 2), maxPages - 1));
    this.currentPageIndex = clamped;

    if (this.currentPageIndex >= this.currentBook.pages.length) {
      this.isAwaitingPrefetch = true;
      this.render();
      await bookGeneratorService.ensurePageAvailable(this.currentBook, this.currentPageIndex);
      this.isAwaitingPrefetch = false;
    }

    this.render();
  }

  public async nextPage(): Promise<void> {
    if (!this.currentBook || this.isLoading) return;
    const maxPages = this.currentBook.targetPageCount || this.currentBook.pages.length;
    if (this.currentPageIndex + 2 < maxPages) {
      this.currentPageIndex += 2;

      // If page is still being prefetched in background
      if (this.currentPageIndex >= this.currentBook.pages.length) {
        this.isAwaitingPrefetch = true;
        this.render();
        await bookGeneratorService.ensurePageAvailable(this.currentBook, this.currentPageIndex);
        this.isAwaitingPrefetch = false;
      }

      this.render();
    }
  }

  public prevPage(): void {
    if (!this.currentBook || this.isLoading) return;
    if (this.currentPageIndex >= 2) {
      this.currentPageIndex -= 2;
      this.isAwaitingPrefetch = false;
      this.render();
    }
  }

  public render(): void {
    if (!this.currentBook) return;
    const book = this.currentBook;
    const totalPages = Math.max(book.targetPageCount || 16, book.pages.length);

    const fontClass = `font-${book.fontFamily || 'garamond'}`;
    const sizeClass = `size-${book.fontSize || 'regular'}`;
    const illumClass = book.layoutFormat === 'illuminated' ? 'has-illuminated-border' : '';

    // 1. Initial Full Loading State Spread
    if (this.isLoading) {
      this.modalEl.innerHTML = `
        <div class="book-leather-binding ${fontClass} ${sizeClass}" style="border-color: ${book.coverColor || '#5a301a'};">
          <div class="book-ribbon-bookmark" title="Bookmark / Close Manuscript" id="btn-ribbon-close"></div>
          <div class="book-pages-spread loading-spread">
            <!-- LEFT LOADING PAGE -->
            <div class="parchment-page left-page loading-parchment-shimmer">
              <div class="page-corner top-left">⚜</div>
              <div class="page-corner bottom-left">⚜</div>
              <div class="scribe-loading-container">
                <div class="mystical-rune-circle">
                  <span class="rune-glyph">᚛ ᚠ ᚢ ᚦ ᚨ ᚜</span>
                </div>
                <h2 class="scribe-loading-title">DECIPHERING ANCIENT INSCRIPTIONS</h2>
                <div class="scribe-loading-sub">— ${book.title} —</div>
                <div class="scribe-quill-animation">
                  <span class="quill-icon">🪶</span>
                  <div class="ink-pulse-line"></div>
                </div>
                <p class="scribe-loading-status">Translating iron-gall folios from the Imperial Scriptorium...</p>
              </div>
            </div>

            <!-- SPINE -->
            <div class="book-spine-crease"></div>

            <!-- RIGHT LOADING PAGE -->
            <div class="parchment-page right-page loading-parchment-shimmer">
              <div class="page-corner top-right">⚜</div>
              <div class="page-corner bottom-right">⚜</div>
              <div class="scribe-loading-container ghost-text-container">
                <div class="ghost-line ghost-header"></div>
                <div class="ghost-line full"></div>
                <div class="ghost-line almost"></div>
                <div class="ghost-line med"></div>
                <div class="ghost-line full" style="margin-top: 24px;"></div>
                <div class="ghost-line almost"></div>
                <div class="ghost-line short"></div>
              </div>
            </div>
          </div>

          <div class="book-nav-bar">
            <div class="nav-left-group">
              <button class="retro-btn nav-page-btn ornate-brass-btn" disabled>◀ PREVIOUS PAGE</button>
            </div>
            <div class="nav-center-group">
              <span class="page-indicator">Transcribing folios...</span>
            </div>
            <div class="nav-right-group">
              <button id="btn-close-book" class="retro-btn close-book-btn ornate-brass-btn">✕ CLOSE (ESC)</button>
            </div>
          </div>
        </div>
      `;

      this.modalEl.querySelector('#btn-close-book')?.addEventListener('click', () => this.close());
      this.modalEl.querySelector('#btn-ribbon-close')?.addEventListener('click', () => this.close());
      return;
    }

    // 2. Error State Spread
    if (this.errorMessage) {
      this.modalEl.innerHTML = `
        <div class="book-leather-binding ${fontClass} ${sizeClass}" style="border-color: ${book.coverColor || '#5a301a'};">
          <div class="book-ribbon-bookmark" title="Bookmark / Close Manuscript" id="btn-ribbon-close"></div>
          <div class="book-pages-spread">
            <div class="parchment-page left-page">
              <div class="page-corner top-left">⚜</div>
              <div class="page-corner bottom-left">⚜</div>
              <div class="book-error-container">
                <div class="book-error-icon">🕯️</div>
                <div class="book-error-title">INSCRIPTION FADED</div>
                <div class="book-error-msg">${this.errorMessage}</div>
                <button id="btn-retry-book" class="book-error-retry-btn">✦ RETRY DECIPHERING ✦</button>
              </div>
            </div>
            <div class="book-spine-crease"></div>
            <div class="parchment-page right-page">
              <div class="page-corner top-right">⚜</div>
              <div class="page-corner bottom-right">⚜</div>
              <div class="blank-page-note">~ The pages remain blank ~</div>
            </div>
          </div>
          <div class="book-nav-bar">
            <div class="nav-left-group"></div>
            <div class="nav-center-group"><span class="page-indicator">Transcription Halted</span></div>
            <div class="nav-right-group">
              <button id="btn-close-book" class="retro-btn close-book-btn ornate-brass-btn">✕ CLOSE (ESC)</button>
            </div>
          </div>
        </div>
      `;

      this.modalEl.querySelector('#btn-retry-book')?.addEventListener('click', () => {
        this.open(book);
      });
      this.modalEl.querySelector('#btn-close-book')?.addEventListener('click', () => this.close());
      this.modalEl.querySelector('#btn-ribbon-close')?.addEventListener('click', () => this.close());
      return;
    }

    // 3. Normal Two-Page Spread (With In-World Prefetch Skeleton if waiting on background batch)
    const leftPage = book.pages[this.currentPageIndex] || null;
    const rightPage = book.pages[this.currentPageIndex + 1] || null;

    const hasPrev = this.currentPageIndex > 0;
    const hasNext = this.currentPageIndex + 2 < totalPages;

    // Generate jump dropdown options for the whole 10-50 page codex
    const optionsHtml: string[] = [];
    for (let i = 0; i < totalPages; i += 2) {
      const p1 = i + 1;
      const p2 = Math.min(i + 2, totalPages);
      let label = `Folios ${p1}–${p2}`;
      if (p1 === 1) label += ' (Half-Title & Frontispiece)';
      else if (p1 === 3) label += ' (Title Page & Contents)';
      else {
        const matchingCh = book.blueprint?.chapterOutlines.find((c) => p1 >= c.pageRange[0] && p1 <= c.pageRange[1]);
        if (matchingCh) {
          label += ` (${matchingCh.title})`;
        }
      }
      const selected = i === this.currentPageIndex ? 'selected' : '';
      optionsHtml.push(`<option value="${i}" ${selected}>${label}</option>`);
    }

    this.modalEl.innerHTML = `
      <div class="book-leather-binding ${fontClass} ${sizeClass}" style="border-color: ${book.coverColor || '#5a301a'};">
        <!-- Silk Ribbon Bookmark (Clickable to Close) -->
        <div class="book-ribbon-bookmark" title="Bookmark / Close Manuscript" id="btn-ribbon-close"></div>

        <div class="book-pages-spread">
          <!-- LEFT PARCHMENT PAGE -->
          <div class="parchment-page left-page ${illumClass} ${!leftPage ? 'loading-parchment-shimmer' : ''}">
            <div class="page-corner top-left">⚜</div>
            <div class="page-corner bottom-left">⚜</div>
            ${book.isAIGenerated ? '<div class="ai-badge">✦ AI SCRIPTORIUM ✦</div>' : ''}
            <div class="page-inner">
              ${leftPage ? this.renderPageContent(leftPage, book, true) : this.renderPrefetchSkeleton(this.currentPageIndex + 1)}
              <div class="page-footer">
                <span class="page-num">${leftPage && leftPage.pageType !== 'half-title' ? leftPage.pageNumber : ''}</span>
              </div>
            </div>
          </div>

          <!-- BOOK SPINE CENTER CREASE WITH SHADOW GRADIENT -->
          <div class="book-spine-crease"></div>

          <!-- RIGHT PARCHMENT PAGE -->
          <div class="parchment-page right-page ${illumClass} ${!rightPage && this.currentPageIndex + 1 < totalPages ? 'loading-parchment-shimmer' : ''}">
            <div class="page-corner top-right">⚜</div>
            <div class="page-corner bottom-right">⚜</div>
            <div class="page-inner">
              ${
                rightPage
                  ? this.renderPageContent(rightPage, book, false)
                  : this.currentPageIndex + 1 < totalPages
                  ? this.renderPrefetchSkeleton(this.currentPageIndex + 2)
                  : '<div class="blank-page-note">~ End of Volume ~</div>'
              }
              <div class="page-footer">
                <span class="page-num">${rightPage ? rightPage.pageNumber : ''}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ORNAMENTAL BOTTOM NAVIGATION BAR -->
        <div class="book-nav-bar">
          <div class="nav-left-group">
            <button id="btn-prev-page" class="retro-btn nav-page-btn ornate-brass-btn" ${!hasPrev ? 'disabled' : ''}>
              ◀ PREVIOUS
            </button>
          </div>

          <div class="nav-center-group">
            <select id="select-folio-jump" class="book-folio-select" title="Jump to Folio">
              ${optionsHtml.join('')}
            </select>
            <span class="page-indicator">Folios ${this.currentPageIndex + 1}–${Math.min(this.currentPageIndex + 2, totalPages)} of ${totalPages}${this.isAwaitingPrefetch ? ' (✦ Inscribing...)' : ''}</span>
          </div>

          <div class="nav-right-group">
            <button id="btn-next-page" class="retro-btn nav-page-btn ornate-brass-btn" ${!hasNext ? 'disabled' : ''}>
              NEXT ▶
            </button>
            <button id="btn-close-book" class="retro-btn close-book-btn ornate-brass-btn">
              ✕ CLOSE (ESC)
            </button>
          </div>
        </div>
      </div>
    `;

    // Bind footer navigation buttons
    this.modalEl.querySelector('#btn-prev-page')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prevPage();
    });

    this.modalEl.querySelector('#btn-next-page')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.nextPage();
    });

    const folioSelect = this.modalEl.querySelector('#select-folio-jump') as HTMLSelectElement;
    folioSelect?.addEventListener('change', (e) => {
      e.stopPropagation();
      const val = parseInt(folioSelect.value, 10);
      if (!isNaN(val)) {
        this.goToPage(val);
      }
    });

    this.modalEl.querySelector('#btn-close-book')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.close();
    });

    this.modalEl.querySelector('#btn-ribbon-close')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.close();
    });
  }

  private renderPrefetchSkeleton(pageNum: number): string {
    return `
      <div class="scribe-loading-container ghost-text-container">
        <div class="ghost-line ghost-header"></div>
        <div class="ghost-sub-note">Deciphering ancient folio ${pageNum}...</div>
        <div class="ghost-line full"></div>
        <div class="ghost-line almost"></div>
        <div class="ghost-line med"></div>
        <div class="ghost-line full" style="margin-top: 18px;"></div>
        <div class="ghost-line almost"></div>
        <div class="ghost-line short"></div>
      </div>
    `;
  }

  private renderPageContent(page: BookPage, book: BookData, _isLeft: boolean): string {
    switch (page.pageType) {
      case 'half-title':
        return `
          <div class="page-half-title">
            <div class="half-title-text">${page.content.replace(/\n/g, '<br/>')}</div>
          </div>
        `;

      case 'frontispiece':
        return `
          <div class="page-frontispiece">
            <div class="frontispiece-ascii">${page.content.replace(/\n/g, '<br/>')}</div>
          </div>
        `;

      case 'title-page':
        return `
          <div class="page-title-page">
            <div class="book-category-tag">${book.genre.toUpperCase()}</div>
            <h1 class="book-main-title">${book.title}</h1>
            <div class="book-subtitle">— ${book.subtitle} —</div>
            <div class="ornate-divider">❦ ════════ ❧</div>
            <div class="book-author-lead">BY</div>
            <div class="book-author-name">${book.author}</div>
            <div class="book-era-tag">${book.era}</div>
            <div class="book-press-imprint">Archival Repository of Alderia • ${book.era}</div>
          </div>
        `;

      case 'copyright':
        return `
          <div class="page-copyright">
            <div class="copyright-header">ARCHIVAL CATALOGUE NOTICE</div>
            <div class="copyright-body">${page.content.replace(/\n/g, '<br/>')}</div>
          </div>
        `;

      case 'dedication':
        return `
          <div class="page-dedication">
            <div class="dedication-content">${page.content.replace(/\n/g, '<br/>')}</div>
          </div>
        `;

      default:
        return `
          <div class="chapter-header">${page.chapterTitle || ''}</div>
          <div class="page-body-text ${book.layoutFormat === 'two-column' ? 'layout-two-column' : book.layoutFormat === 'verse' ? 'layout-verse' : book.layoutFormat === 'play-script' ? 'layout-play-script' : ''}">
            ${this.formatBodyText(page.content, book)}
          </div>
        `;
    }
  }

  private formatBodyText(content: string, book: BookData): string {
    const isMathAllowed = aiBookService.isMathAllowedForGenre(book.genre);
    const paragraphs = content.split('\n\n');

    return paragraphs
      .map((p, idx) => {
        const trimmed = p.trim();
        if (!trimmed) return '';

        // 1. Math block or equation for STEM / Arcane Treatise
        if (isMathAllowed) {
          if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
            const eq = trimmed.slice(2, -2).trim();
            return `<div class="math-display-eq">${MathRenderer.renderDisplayEquation(eq)}</div>`;
          }

          if (trimmed.startsWith('[THEOREM') || trimmed.startsWith('[AXIOM') || trimmed.startsWith('[PROOF') || trimmed.startsWith('[SCHEMATIC')) {
            return `<div class="math-proof-card"><div class="math-theorem-header">✦ ${trimmed} ✦</div></div>`;
          }
        }

        // 2. Playscript character dialogue handling
        if (book.genre === 'Tragic Plays' && (trimmed.startsWith('LORD ') || trimmed.startsWith('PRINCE ') || trimmed.startsWith('QUEEN ') || trimmed.startsWith('KING ') || trimmed.startsWith('[ACT '))) {
          if (trimmed.startsWith('[ACT ')) {
            return `<div class="play-scene-header">${trimmed}</div>`;
          }
          const colonIdx = trimmed.indexOf(':');
          if (colonIdx > 0) {
            const speaker = trimmed.slice(0, colonIdx);
            const line = trimmed.slice(colonIdx + 1);
            return `<p class="play-dialogue"><strong class="play-speaker">${speaker}:</strong>${line}</p>`;
          }
        }

        // 3. Q.E.D. / Finis Seal
        if (trimmed.includes('Q.E.D') || trimmed.includes('Quod Erat Demonstrandum') || trimmed === '[Q.E.D.]') {
          return `<div class="math-qed-badge">❦ Quod Erat Demonstrandum • Q.E.D.</div>`;
        }

        // 4. Process KaTeX math if allowed, else clean text
        const processedText = isMathAllowed ? MathRenderer.renderInlineAndBlocks(trimmed) : trimmed;

        // 5. Regular Paragraph with Illuminated Drop Cap on First Paragraph
        if (
          idx === 0 &&
          !trimmed.startsWith('*') &&
          !trimmed.startsWith('•') &&
          !trimmed.startsWith('[') &&
          !trimmed.startsWith('$') &&
          !trimmed.startsWith('<') &&
          book.genre !== 'Tragic Plays' &&
          book.genre !== 'Malediction Poetry'
        ) {
          const firstChar = processedText.charAt(0);
          const rest = processedText.slice(1);
          return `<p class="first-paragraph"><span class="drop-cap">${firstChar}</span>${rest.replace(/\n/g, '<br/>')}</p>`;
        }

        return `<p>${processedText.replace(/\n/g, '<br/>')}</p>`;
      })
      .join('');
  }
}
