import { BookData, BookPage } from '../lore/BookTypes';
import { MathRenderer } from '../lore/MathRenderer';
import { bookGeneratorService } from '../services/BookGeneratorService';

export interface BookReaderCallbacks {
  onClose?: () => void;
}

/**
 * Authentic Medieval Two-Page Vellum Manuscript Reader Modal
 * Featuring real-time generative narrative content, active parchment shimmer loading state,
 * contextual KaTeX math gating for arcane treatises, and authentic illuminated typesetting.
 */
export class BookReaderModal {
  private overlayEl: HTMLElement;
  private modalEl: HTMLElement;
  private currentBook: BookData | null = null;
  private currentPageIndex: number = 0; // index in book.pages (spread shows page & page+1)
  private isOpen: boolean = false;
  private isLoading: boolean = false;
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
    if (onClose) {
      this.onCloseCallback = onClose;
    }
    this.overlayEl.classList.remove('hidden');
    document.exitPointerLock();

    // Check if book has full content generated or needs real-time generative scribe
    if (!book.isLoaded || !book.pages || book.pages.length <= 4) {
      this.isLoading = true;
      this.render();

      try {
        const generated = await bookGeneratorService.generateBook({
          id: book.id,
          title: book.title,
          subtitle: book.subtitle,
          author: book.author,
          classification: book.classification,
          subgenre: book.subgenre,
          era: book.era,
          genre: book.genre,
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

  private nextPage(): void {
    if (!this.currentBook || this.isLoading) return;
    if (this.currentPageIndex + 2 < this.currentBook.pages.length) {
      this.currentPageIndex += 2;
      this.render();
    }
  }

  private prevPage(): void {
    if (!this.currentBook || this.isLoading) return;
    if (this.currentPageIndex >= 2) {
      this.currentPageIndex -= 2;
      this.render();
    }
  }

  private render(): void {
    if (!this.currentBook) return;
    const book = this.currentBook;

    const fontClass = `font-${book.fontFamily || 'garamond'}`;
    const sizeClass = `size-${book.fontSize || 'regular'}`;
    const illumClass = book.layoutFormat === 'illuminated' ? 'has-illuminated-border' : '';

    // 1. Loading State Spread
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

    // 3. Normal Two-Page Spread
    const leftPage = book.pages[this.currentPageIndex] || null;
    const rightPage = book.pages[this.currentPageIndex + 1] || null;

    const hasPrev = this.currentPageIndex > 0;
    const hasNext = this.currentPageIndex + 2 < book.pages.length;

    this.modalEl.innerHTML = `
      <div class="book-leather-binding ${fontClass} ${sizeClass}" style="border-color: ${book.coverColor || '#5a301a'};">
        <!-- Silk Ribbon Bookmark (Clickable to Close) -->
        <div class="book-ribbon-bookmark" title="Bookmark / Close Manuscript" id="btn-ribbon-close"></div>

        <div class="book-pages-spread">
          <!-- LEFT PARCHMENT PAGE -->
          <div class="parchment-page left-page ${illumClass}">
            <div class="page-corner top-left">⚜</div>
            <div class="page-corner bottom-left">⚜</div>
            ${book.isAIGenerated ? '<div class="ai-badge">✦ AI SCRIBE ✦</div>' : ''}
            <div class="page-inner">
              ${leftPage ? this.renderPageContent(leftPage, book, true) : ''}
              <div class="page-footer">
                <span class="page-num">${leftPage && leftPage.pageType !== 'half-title' ? leftPage.pageNumber : ''}</span>
              </div>
            </div>
          </div>

          <!-- BOOK SPINE CENTER CREASE WITH SHADOW GRADIENT -->
          <div class="book-spine-crease"></div>

          <!-- RIGHT PARCHMENT PAGE -->
          <div class="parchment-page right-page ${illumClass}">
            <div class="page-corner top-right">⚜</div>
            <div class="page-corner bottom-right">⚜</div>
            <div class="page-inner">
              ${rightPage ? this.renderPageContent(rightPage, book, false) : '<div class="blank-page-note">~ End of Volume ~</div>'}
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
              ◀ PREVIOUS PAGE
            </button>
          </div>

          <div class="nav-center-group">
            <span class="page-indicator">Folios ${this.currentPageIndex + 1}–${Math.min(this.currentPageIndex + 2, book.pages.length)} of ${book.pages.length}</span>
          </div>

          <div class="nav-right-group">
            <button id="btn-next-page" class="retro-btn nav-page-btn ornate-brass-btn" ${!hasNext ? 'disabled' : ''}>
              NEXT PAGE ▶
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

    this.modalEl.querySelector('#btn-close-book')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.close();
    });

    this.modalEl.querySelector('#btn-ribbon-close')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.close();
    });
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
            <div class="frontispiece-ascii">${page.content}</div>
          </div>
        `;

      case 'title-page':
        return `
          <div class="page-title-page">
            <div class="book-category-tag">${(book.genre || book.classification || 'CHRONICLE').toUpperCase()} • ${(book.subgenre || 'LORE').toUpperCase()}</div>
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
          <div class="page-body-text ${book.layoutFormat === 'two-column' ? 'layout-two-column' : book.layoutFormat === 'verse' ? 'layout-verse' : ''}">
            ${this.formatBodyText(page.content, book)}
          </div>
        `;
    }
  }

  private formatBodyText(content: string, book: BookData): string {
    const isMathAllowed = book.isSTEM || ['ArcaneTreatise', 'Alchemy', 'Numerology', 'AstralGeometry'].includes(book.genre);
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

          if (trimmed.startsWith('[THEOREM') || trimmed.startsWith('[AXIOM') || trimmed.startsWith('[PROOF')) {
            return `<div class="math-proof-card"><div class="math-theorem-header">✦ ${trimmed} ✦</div></div>`;
          }
        }

        // 2. Q.E.D. / Finis Seal
        if (trimmed.includes('Q.E.D') || trimmed.includes('Quod Erat Demonstrandum') || trimmed === '[Q.E.D.]') {
          return `<div class="math-qed-badge">❦ Quod Erat Demonstrandum • Q.E.D.</div>`;
        }

        // 3. Process KaTeX math if allowed, else clean text
        const processedText = isMathAllowed ? MathRenderer.renderInlineAndBlocks(trimmed) : trimmed;

        // 4. Regular Paragraph with Illuminated Drop Cap on First Paragraph
        if (idx === 0 && !trimmed.startsWith('*') && !trimmed.startsWith('•') && !trimmed.startsWith('[') && !trimmed.startsWith('$') && !trimmed.startsWith('<')) {
          const firstChar = processedText.charAt(0);
          const rest = processedText.slice(1);
          return `<p class="first-paragraph"><span class="drop-cap">${firstChar}</span>${rest.replace(/\n/g, '<br/>')}</p>`;
        }

        return `<p>${processedText.replace(/\n/g, '<br/>')}</p>`;
      })
      .join('');
  }
}
