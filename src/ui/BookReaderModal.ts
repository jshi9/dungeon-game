import { BookData, BookPage } from '../lore/LibraryLoreGenerator';
import { SvgDiagramGenerator } from '../lore/SvgDiagramGenerator';
import { MathRenderer } from '../lore/MathRenderer';

export interface BookReaderCallbacks {
  onClose?: () => void;
}

/**
 * Authentic Medieval Two-Page Vellum Manuscript Reader Modal
 * Rendered with warm ivory parchment, rich illuminated drop caps,
 * inked Celtic corner borders, KaTeX mathematical typesetting,
 * and ornamental brass navigation controls.
 */
export class BookReaderModal {
  private overlayEl: HTMLElement;
  private modalEl: HTMLElement;
  private currentBook: BookData | null = null;
  private currentPageIndex: number = 0; // index in book.pages (spread shows page & page+1)
  private isOpen: boolean = false;
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

  public open(book: BookData, onClose?: () => void): void {
    this.currentBook = book;
    this.currentPageIndex = 0;
    this.isOpen = true;
    if (onClose) {
      this.onCloseCallback = onClose;
    }
    this.overlayEl.classList.remove('hidden');
    document.exitPointerLock();
    this.render();
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
    if (!this.currentBook) return;
    if (this.currentPageIndex + 2 < this.currentBook.pages.length) {
      this.currentPageIndex += 2;
      this.render();
    }
  }

  private prevPage(): void {
    if (this.currentPageIndex >= 2) {
      this.currentPageIndex -= 2;
      this.render();
    }
  }

  private render(): void {
    if (!this.currentBook) return;
    const book = this.currentBook;

    const leftPage = book.pages[this.currentPageIndex] || null;
    const rightPage = book.pages[this.currentPageIndex + 1] || null;

    const hasPrev = this.currentPageIndex > 0;
    const hasNext = this.currentPageIndex + 2 < book.pages.length;

    const fontClass = `font-${book.fontFamily || 'garamond'}`;
    const sizeClass = `size-${book.fontSize || 'regular'}`;
    const illumClass = book.layoutFormat === 'illuminated' ? 'has-illuminated-border' : '';

    this.modalEl.innerHTML = `
      <div class="book-leather-binding ${fontClass} ${sizeClass}" style="border-color: ${book.coverColor || '#5a301a'};">
        <!-- Silk Ribbon Bookmark (Clickable to Close) -->
        <div class="book-ribbon-bookmark" title="Bookmark / Close Manuscript" id="btn-ribbon-close"></div>

        <div class="book-pages-spread">
          <!-- LEFT PARCHMENT PAGE -->
          <div class="parchment-page left-page ${illumClass}">
            <div class="page-corner top-left">⚜</div>
            <div class="page-corner bottom-left">⚜</div>
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
            <div class="book-category-tag">${book.classification.toUpperCase()} • ${book.subgenre.toUpperCase()}</div>
            <h1 class="book-main-title">${book.title}</h1>
            <div class="book-subtitle">— ${book.subtitle} —</div>
            <div class="ornate-divider">❦ ════════ ❧</div>
            <div class="book-author-lead">BY</div>
            <div class="book-author-name">${book.author}</div>
            <div class="book-era-tag">${book.era}</div>
            <div class="book-press-imprint">Archival Repository • ${book.subgenre}</div>
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

      case 'toc':
        return `
          <div class="page-toc">
            <div class="chapter-header">TABLE OF CONTENTS</div>
            <div class="toc-list">${this.formatTocList(page.content)}</div>
          </div>
        `;

      default:
        return `
          <div class="chapter-header">${page.chapterTitle || ''}</div>
          <div class="page-body-text ${book.layoutFormat === 'two-column' ? 'layout-two-column' : book.layoutFormat === 'verse' ? 'layout-verse' : ''}">
            ${this.formatBodyText(page.content)}
          </div>
        `;
    }
  }

  private formatTocList(content: string): string {
    const lines = content.split('\n').filter((l) => l.trim().length > 0 && !l.includes('TABLE OF CONTENTS'));
    return lines
      .map((line) => {
        const parts = line.split(/\s*\.\s*\.\s*/);
        if (parts.length >= 2) {
          const title = parts[0].trim();
          const pageNum = parts[parts.length - 1].trim();
          return `
            <div class="toc-row-link">
              <span class="toc-title">${title}</span>
              <span class="toc-dots"></span>
              <span class="toc-page-badge">${pageNum}</span>
            </div>
          `;
        }
        return `<div class="toc-row-link"><span class="toc-title">${line}</span></div>`;
      })
      .join('');
  }

  private formatBodyText(content: string): string {
    const paragraphs = content.split('\n\n');
    return paragraphs
      .map((p, idx) => {
        const trimmed = p.trim();
        if (!trimmed) return '';

        // 1. Single-Line SVG Diagram Token
        if (trimmed.startsWith('[SVG_DIAGRAM:')) {
          const parts = trimmed.slice(1, -1).split(':');
          const dType = parts[1] || 'GOTHIC_ARCH';
          const dTitle = parts[2] || 'ILLUMINATED SCHEMATIC';
          const dCaption = parts[3] || '';
          const dSeed = parseInt(parts[4]) || 101;
          return SvgDiagramGenerator.generateDiagram(dType, dTitle, dCaption, dSeed);
        }

        // 2. Direct SVG / HTML Diagram Box
        if (trimmed.startsWith('<div class="medieval-diagram-box">') || trimmed.startsWith('<svg')) {
          return trimmed;
        }

        // 3. Technical Diagram / Figure Box (Fallback)
        if (trimmed.startsWith('[DIAGRAM:') || trimmed.startsWith('[FIGURE:')) {
          return this.formatDiagramBlock(trimmed);
        }

        // 4. Verified Data Table
        if (trimmed.startsWith('Table of Verified') || trimmed.startsWith('Table of Observational') || trimmed.startsWith('Table of ')) {
          return this.formatDataTable(trimmed);
        }

        // 5. Math Theorem / Lemma / Axiom / Proposition Header
        if (
          trimmed.startsWith('[THEOREM') ||
          trimmed.startsWith('[LEMMA') ||
          trimmed.startsWith('[AXIOM') ||
          trimmed.startsWith('[PROPOSITION') ||
          trimmed.startsWith('[FORMULA')
        ) {
          return this.formatMathBlock(trimmed);
        }

        // 6. Math Derivation / Proof step block
        if (
          trimmed.startsWith('[MATHEMATICAL DERIVATION') ||
          trimmed.startsWith('[STRUCTURAL RESOLUTION') ||
          trimmed.startsWith('[CRYSTALLINE GIBBS') ||
          trimmed.startsWith('[EIGENVALUE DECOMPOSITION') ||
          trimmed.startsWith('[FORMAL DEDUCTIVE') ||
          trimmed.startsWith('[STOKES') ||
          trimmed.startsWith('[PROOF')
        ) {
          return this.formatMathBlock(trimmed);
        }

        // 7. Section or Canto Header
        if (trimmed.startsWith('[VERSE CANTO') || trimmed.startsWith('[SECTION') || trimmed.startsWith('[DISPUTATIO')) {
          const headerTitle = trimmed.slice(1, trimmed.indexOf(']'));
          return `<div class="special-section-header">✦ ${headerTitle} ✦</div>`;
        }

        // 8. Standalone Math Display Equation: $$ ... $$
        if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
          const eq = trimmed.slice(2, -2).trim();
          return `<div class="math-display-eq">${MathRenderer.renderDisplayEquation(eq)}</div>`;
        }

        // 9. Q.E.D. Seal
        if (trimmed.includes('Q.E.D') || trimmed.includes('Quod Erat Demonstrandum') || trimmed === '[Q.E.D.]') {
          return `<div class="math-qed-badge">❦ Quod Erat Demonstrandum • Q.E.D.</div>`;
        }

        // 10. Regular Paragraph with Illuminated Drop Cap
        const renderedText = MathRenderer.renderInlineAndBlocks(trimmed);

        if (idx === 0 && !trimmed.startsWith('*') && !trimmed.startsWith('•') && !trimmed.startsWith('[') && !trimmed.startsWith('╔') && !trimmed.startsWith('<') && !trimmed.startsWith('$')) {
          const firstChar = renderedText.charAt(0);
          const rest = renderedText.slice(1);
          return `<p class="first-paragraph"><span class="drop-cap">${firstChar}</span>${rest.replace(/\n/g, '<br/>')}</p>`;
        }
        return `<p>${renderedText.replace(/\n/g, '<br/>')}</p>`;
      })
      .join('');
  }

  private formatDiagramBlock(text: string): string {
    const lines = text.split('\n');
    let title = 'ILLUMINATED SCHEMATIC';
    let caption = '';

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith('[DIAGRAM:') || trimmedLine.startsWith('[FIGURE:')) {
        title = trimmedLine.replace(/^\[(DIAGRAM|FIGURE):\s*/, '').replace(/\]$/, '').trim();
      } else if (trimmedLine.startsWith('[CAPTION:') || trimmedLine.startsWith('Caption:')) {
        caption = trimmedLine.replace(/^\[?CAPTION:\s*/i, '').replace(/\]$/, '').trim();
      }
    }

    return SvgDiagramGenerator.generateDiagram(title, title, caption, 101);
  }

  private formatDataTable(text: string): string {
    const lines = text.split('\n').filter((l) => l.trim().length > 0);
    const title = lines[0].replace(/:$/, '').trim();
    const rows = lines.slice(1);

    let rowsHtml = '';
    for (const row of rows) {
      const cleanRow = row.replace(/^•\s*/, '').trim();
      const parts = cleanRow.split(':');
      if (parts.length >= 2) {
        const param = parts[0].trim();
        const val = parts.slice(1).join(':').trim();
        rowsHtml += `
          <div class="data-table-row">
            <span class="data-param-name">${MathRenderer.renderInlineAndBlocks(param)}</span>
            <span class="data-param-dots"></span>
            <span class="data-param-val">${MathRenderer.renderInlineAndBlocks(val)}</span>
          </div>
        `;
      } else {
        rowsHtml += `<div class="data-table-row">${MathRenderer.renderInlineAndBlocks(cleanRow)}</div>`;
      }
    }

    return `
      <div class="medieval-data-table-card">
        <div class="data-table-header">⚜ ${title}</div>
        <div class="data-table-body">${rowsHtml}</div>
      </div>
    `;
  }

  private formatMathBlock(text: string): string {
    const lines = text.split('\n');
    let html = '<div class="math-proof-card">';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      if (line.startsWith('[') && line.endsWith(']')) {
        const headerTitle = line.slice(1, -1);
        if (headerTitle.includes('Q.E.D') || headerTitle.includes('Quod Erat')) {
          html += `<div class="math-qed-badge">❦ ${headerTitle}</div>`;
        } else {
          html += `<div class="math-theorem-header">✦ ${headerTitle} ✦</div>`;
        }
      } else if (line.startsWith('$$') && line.endsWith('$$')) {
        const eq = line.slice(2, -2).trim();
        html += `<div class="math-display-eq">${MathRenderer.renderDisplayEquation(eq)}</div>`;
      } else {
        html += `<div class="math-proof-line">${MathRenderer.renderInlineAndBlocks(line)}</div>`;
      }
    }

    html += '</div>';
    return html;
  }
}
