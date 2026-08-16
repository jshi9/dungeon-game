import { BookData, BookPage } from '../lore/LibraryLoreGenerator';

export interface BookReaderCallbacks {
  onClose: () => void;
}

export class BookReaderModal {
  private overlayEl: HTMLElement;
  private modalEl: HTMLElement;
  private currentBook: BookData | null = null;
  private currentPageIndex: number = 0; // index of left page (0, 2, 4, 6...)
  private isOpen: boolean = false;
  private callbacks: BookReaderCallbacks;

  constructor(callbacks: BookReaderCallbacks) {
    this.callbacks = callbacks;

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

    window.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;

      if (e.code === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        this.close();
        return;
      }

      if (e.code === 'ArrowRight' || e.code === 'KeyD' || e.code === 'PageDown') {
        e.preventDefault();
        this.nextPage();
      } else if (e.code === 'ArrowLeft' || e.code === 'KeyA' || e.code === 'PageUp') {
        e.preventDefault();
        this.prevPage();
      } else if (e.code === 'Home') {
        e.preventDefault();
        this.goToPage(0);
      } else if (e.code === 'End') {
        e.preventDefault();
        if (this.currentBook) {
          const lastSpread = Math.floor((this.currentBook.pages.length - 1) / 2) * 2;
          this.goToPage(lastSpread);
        }
      }
    }, { capture: true });
  }

  public open(book: BookData): void {
    this.currentBook = book;
    this.currentPageIndex = 0;
    this.isOpen = true;
    this.overlayEl.classList.remove('hidden');
    document.exitPointerLock();
    this.render();
  }

  public close(): void {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.overlayEl.classList.add('hidden');
    this.callbacks.onClose();
  }

  public getIsOpen(): boolean {
    return this.isOpen;
  }

  public goToPage(index: number): void {
    if (!this.currentBook) return;
    const spreadIndex = Math.max(0, Math.min(Math.floor(index / 2) * 2, this.currentBook.pages.length - 1));
    this.currentPageIndex = spreadIndex;
    this.render();
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

    const leftPage = book.pages[this.currentPageIndex];
    const rightPage = book.pages[this.currentPageIndex + 1];

    const hasPrev = this.currentPageIndex > 0;
    const hasNext = this.currentPageIndex + 2 < book.pages.length;

    const fontClass = `font-${book.fontFamily || 'garamond'}`;
    const sizeClass = `size-${book.fontSize || 'regular'}`;
    const layoutClass = `layout-${book.layoutFormat || 'standard'}`;

    this.modalEl.innerHTML = `
      <div class="book-leather-binding ${fontClass} ${sizeClass} ${layoutClass}" style="border-color: ${book.coverColor};">
        <div class="book-ribbon-bookmark"></div>

        <div class="book-pages-spread">
          <!-- LEFT PARCHMENT PAGE -->
          <div class="parchment-page left-page ${book.layoutFormat === 'illuminated' ? 'has-illuminated-border' : ''}">
            <div class="page-inner">
              ${leftPage ? this.renderPageContent(leftPage, book) : '<div class="blank-page-note"></div>'}

              <div class="page-footer">
                <span class="page-num">${leftPage ? leftPage.pageNumber : ''}</span>
              </div>
            </div>
          </div>

          <!-- BOOK SPINE CENTER FOLD -->
          <div class="book-spine-crease"></div>

          <!-- RIGHT PARCHMENT PAGE -->
          <div class="parchment-page right-page ${book.layoutFormat === 'illuminated' ? 'has-illuminated-border' : ''}">
            <div class="page-inner">
              ${rightPage ? this.renderPageContent(rightPage, book) : '<div class="blank-page-note">~ Finis ~</div>'}

              <div class="page-footer">
                <span class="page-num">${rightPage ? rightPage.pageNumber : ''}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- FOOTER CONTROLS & JUMP SELECTOR -->
        <div class="book-nav-bar">
          <div class="nav-left-group">
            <button id="btn-prev-page" class="retro-btn nav-page-btn" ${!hasPrev ? 'disabled' : ''}>
              ◀ PREV
            </button>
            <button id="btn-toc-jump" class="retro-btn nav-page-btn" title="Jump to Table of Contents (Page 6)">
              📜 TOC
            </button>
          </div>

          <div class="nav-center-group">
            <span class="page-indicator">Pages ${this.currentPageIndex + 1}-${Math.min(this.currentPageIndex + 2, book.pages.length)} of ${book.pages.length}</span>
            <select id="book-page-selector" class="book-page-select">
              ${this.generatePageOptions(book)}
            </select>
          </div>

          <div class="nav-right-group">
            <button id="btn-next-page" class="retro-btn nav-page-btn" ${!hasNext ? 'disabled' : ''}>
              NEXT ▶
            </button>
            <button id="btn-close-book" class="retro-btn close-book-btn">
              ✕ CLOSE (ESC)
            </button>
          </div>
        </div>
      </div>
    `;

    // Bind page controls
    this.modalEl.querySelector('#btn-prev-page')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.prevPage();
    });

    this.modalEl.querySelector('#btn-next-page')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.nextPage();
    });

    this.modalEl.querySelector('#btn-toc-jump')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.goToPage(4); // Jump to TOC spread (pages 5-6)
    });

    this.modalEl.querySelector('#btn-close-book')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.close();
    });

    const selectorEl = this.modalEl.querySelector('#book-page-selector') as HTMLSelectElement;
    if (selectorEl) {
      selectorEl.value = `${this.currentPageIndex}`;
      selectorEl.addEventListener('change', (e) => {
        const targetPage = parseInt((e.target as HTMLSelectElement).value, 10);
        this.goToPage(targetPage);
      });
    }

    // Bind clickable Table of Contents rows
    this.modalEl.querySelectorAll('.toc-row-link').forEach((row) => {
      row.addEventListener('click', (e) => {
        const pageNum = parseInt((e.currentTarget as HTMLElement).dataset.page || '1', 10);
        this.goToPage(pageNum - 1);
      });
    });
  }

  private generatePageOptions(book: BookData): string {
    let options = '';
    for (let p = 0; p < book.pages.length; p += 2) {
      const p1 = book.pages[p];
      const p2 = book.pages[p + 1];
      const label = p2
        ? `Pages ${p + 1}-${p + 2}: ${p1.chapterTitle || p2.chapterTitle || 'Spread'}`
        : `Page ${p + 1}: ${p1.chapterTitle || 'End'}`;
      options += `<option value="${p}">📖 ${label.slice(0, 38)}</option>`;
    }
    return options;
  }

  private renderPageContent(page: BookPage, book: BookData): string {
    switch (page.pageType) {
      case 'half-title':
        return `
          <div class="page-half-title">
            <div class="half-title-text">${book.title}</div>
            <div class="ornate-divider">❦ ════════ ❧</div>
          </div>
        `;

      case 'frontispiece':
        return `
          <div class="page-frontispiece">
            <div class="frontispiece-header">ILLUMINATED FRONTISPIECE</div>
            <pre class="frontispiece-ascii">${page.content}</pre>
          </div>
        `;

      case 'title-page':
        return `
          <div class="page-title-page">
            <div class="book-category-tag">${book.classification.toUpperCase()} • ${book.subgenre.toUpperCase()}</div>
            <h1 class="book-main-title">${book.title}</h1>
            <div class="book-subtitle">${book.subtitle}</div>
            <div class="ornate-divider">❦ ════════════ ❧</div>
            <div class="book-author-lead">Authored By</div>
            <div class="book-author-name">${book.author}</div>
            <div class="book-era-tag">${book.era}</div>
            <div class="book-press-imprint">
              Published by the High Cathedral Scriptorium<br/>
              Archives of Alderia • Anno Domini
            </div>
          </div>
        `;

      case 'copyright':
        return `
          <div class="page-copyright">
            <div class="copyright-header">ARCHIVAL CATALOG & NOTICES</div>
            <div class="copyright-body">${page.content.replace(/\n/g, '<br/>')}</div>
          </div>
        `;

      case 'dedication':
        return `
          <div class="page-dedication">
            <div class="dedication-body">${page.content.replace(/\n/g, '<br/>')}</div>
          </div>
        `;

      case 'toc':
        return `
          <div class="page-toc">
            <div class="chapter-header">TABLE OF CONTENTS</div>
            <div class="toc-list">
              ${this.formatClickableToc(page.content)}
            </div>
          </div>
        `;

      case 'glossary':
        return `
          <div class="page-glossary">
            <div class="chapter-header">GLOSSARY OF ANCIENT TERMS</div>
            <div class="glossary-body">${this.formatGlossary(page.content)}</div>
          </div>
        `;

      case 'author-bio':
        return `
          <div class="page-author-bio">
            <div class="chapter-header">ABOUT THE AUTHOR</div>
            <div class="author-bio-body">${this.formatBodyText(page.content, book)}</div>
          </div>
        `;

      case 'chapter':
      case 'foreword':
      case 'prologue':
      case 'epilogue':
      case 'acknowledgments':
      case 'appendix':
      default: {
        const isTwoCol = book.layoutFormat === 'two-column' && page.pageType === 'chapter';
        const isVerse = book.layoutFormat === 'verse' && page.pageType === 'chapter';
        const marginal = page.marginalNote ? `<div class="marginalia-note">📜 ${page.marginalNote}</div>` : '';

        return `
          ${page.chapterTitle ? `<div class="chapter-header">${page.chapterTitle}</div>` : ''}
          ${marginal}
          <div class="page-body-text ${isTwoCol ? 'layout-two-column' : ''} ${isVerse ? 'layout-verse' : ''}">
            ${this.formatBodyText(page.content, book)}
          </div>
        `;
      }
    }
  }

  private formatClickableToc(content: string): string {
    const lines = content.split('\n').filter(l => l.trim().length > 0);
    let html = '';
    for (const line of lines) {
      if (line.includes('TABLE OF CONTENTS')) continue;
      const match = line.match(/(.+?)\s*\.\s*\.\s*(\d+)$/);
      if (match) {
        const title = match[1].trim();
        const page = match[2].trim();
        html += `
          <div class="toc-row toc-row-link" data-page="${page}">
            <span class="toc-title">${title}</span>
            <span class="toc-dots"></span>
            <span class="toc-page-badge">${page}</span>
          </div>
        `;
      } else {
        html += `<div class="toc-section-divider">${line}</div>`;
      }
    }
    return html;
  }

  private formatGlossary(content: string): string {
    const lines = content.split('\n').filter(l => l.startsWith('•'));
    return lines.map(line => {
      const parts = line.replace('•', '').split(':');
      if (parts.length >= 2) {
        const term = parts[0].trim();
        const def = parts.slice(1).join(':').trim();
        return `<div class="glossary-entry"><strong class="glossary-term">${term}:</strong> <span class="glossary-def">${def}</span></div>`;
      }
      return `<p>${line}</p>`;
    }).join('');
  }

  private formatBodyText(content: string, _book?: BookData): string {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((p, idx) => {
      const trimmed = p.trim();
      if (!trimmed) return '';

      // 1. Math Theorem / Lemma / Axiom / Proposition Header
      if (
        trimmed.startsWith('[THEOREM') ||
        trimmed.startsWith('[LEMMA') ||
        trimmed.startsWith('[AXIOM') ||
        trimmed.startsWith('[PROPOSITION') ||
        trimmed.startsWith('[FORMULA')
      ) {
        return this.formatMathBlock(trimmed);
      }

      // 2. Math Derivation / Proof step block
      if (
        trimmed.startsWith('[MATHEMATICAL DERIVATION') ||
        trimmed.startsWith('[STRUCTURAL RESOLUTION') ||
        trimmed.startsWith('[PROOF')
      ) {
        return this.formatMathBlock(trimmed);
      }

      // 3. Section or Canto Header
      if (trimmed.startsWith('[VERSE CANTO') || trimmed.startsWith('[SECTION') || trimmed.startsWith('[DISPUTATIO')) {
        const headerTitle = trimmed.slice(1, trimmed.indexOf(']'));
        return `<div class="special-section-header">✦ ${headerTitle} ✦</div>`;
      }

      // 4. Standalone Math Display Equation: $$ ... $$
      if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) {
        const eq = trimmed.slice(2, -2).trim();
        return `<div class="math-display-eq">${MathRenderer.renderEquation(eq)}</div>`;
      }

      // 5. Q.E.D. Seal
      if (trimmed === '[Q.E.D. • Quod Erat Demonstrandum]' || trimmed === '[Q.E.D.]') {
        return `<div class="math-qed-badge">❦ Quod Erat Demonstrandum • Q.E.D.</div>`;
      }

      // 6. Regular Paragraphs
      const renderedText = MathRenderer.renderInlineAndBlocks(trimmed);

      if (idx === 0 && !trimmed.startsWith('*') && !trimmed.startsWith('•') && !trimmed.startsWith('[')) {
        const firstChar = renderedText.charAt(0);
        const rest = renderedText.slice(1);
        return `<p class="first-paragraph"><span class="drop-cap">${firstChar}</span>${rest.replace(/\n/g, '<br/>')}</p>`;
      }
      return `<p>${renderedText.replace(/\n/g, '<br/>')}</p>`;
    }).join('');
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
        html += `<div class="math-display-eq">${MathRenderer.renderEquation(eq)}</div>`;
      } else {
        html += `<div class="math-proof-line">${MathRenderer.renderInlineAndBlocks(line)}</div>`;
      }
    }

    html += '</div>';
    return html;
  }
}

/**
 * Robust Mathematical & Scientific LaTeX Expression Renderer
 */
class MathRenderer {
  public static renderInlineAndBlocks(text: string): string {
    // 1. Process Display Math: $$ ... $$
    let result = text.replace(/\$\$([\s\S]+?)\$\$/g, (_match, eq) => {
      return `<div class="math-display-eq">${this.renderEquation(eq.trim())}</div>`;
    });

    // 2. Process Inline Math: $ ... $
    result = result.replace(/\$([^\$\n]+?)\$/g, (_match, eq) => {
      return `<span class="math-inline-eq">${this.renderEquation(eq.trim())}</span>`;
    });

    return result;
  }

  public static renderEquation(raw: string): string {
    let eq = raw.trim();

    // A. Clean internal line breaks
    eq = eq.replace(/\r?\n/g, ' ');

    // B. Matrix Environments (\begin{bmatrix} ... \end{bmatrix} / \begin{pmatrix})
    if (eq.includes('\\begin{bmatrix}') || eq.includes('\\begin{pmatrix}')) {
      return this.renderMatrix(eq);
    }

    // C. Bracket and Parenthesis commands (before word boundary replacements)
    eq = eq.replace(/\\left\s*\(/g, '<span class="math-delim">(</span>');
    eq = eq.replace(/\\right\s*\)/g, '<span class="math-delim">)</span>');
    eq = eq.replace(/\\left\s*\[/g, '<span class="math-delim">[</span>');
    eq = eq.replace(/\\right\s*\]/g, '<span class="math-delim">]</span>');
    eq = eq.replace(/\\left\s*\\\{/g, '{');
    eq = eq.replace(/\\right\s*\\\}/g, '}');

    // D. Fractions (recursive for nested fractions like \frac{\sqrt{2}}{2})
    eq = this.replaceFractions(eq);

    // E. Square Roots
    eq = eq.replace(/\\sqrt\{([^{}]+)\}/g, '<span class="math-sqrt">&radic;<span class="math-radicand">$1</span></span>');
    eq = eq.replace(/\\sqrt\s*([0-9a-zA-Z\\]+)/g, '<span class="math-sqrt">&radic;<span class="math-radicand">$1</span></span>');

    // F. Vectors & Hats
    eq = eq.replace(/\\vec\{([^{}]+)\}/g, '<span class="math-vec"><span class="math-vec-arrow">&rarr;</span><span class="math-vec-base">$1</span></span>');
    eq = eq.replace(/\\hat\{([^{}]+)\}/g, '<span class="math-hat"><span class="math-hat-sym">^</span><span class="math-vec-base">$1</span></span>');

    // G. Integrals, Contour Integrals & Summations
    eq = eq.replace(/\\oint_\{?\\mathcal\{S\}\}?/g, '<span class="math-op">&conint;</span><sub>𝒮</sub>');
    eq = eq.replace(/\\oint/g, '<span class="math-op">&conint;</span>');
    eq = eq.replace(/\\iiint_\{?\\Omega\}?/g, '<span class="math-op">&iiint;</span><sub>Ω</sub>');
    eq = eq.replace(/\\iiint/g, '<span class="math-op">&iiint;</span>');
    eq = eq.replace(/\\iint/g, '<span class="math-op">&iint;</span>');
    eq = eq.replace(/\\int_\{([^{}]+)\}\^\{([^{}]+)\}/g, '<span class="math-op">&int;</span><sub>$1</sub><sup>$2</sup>');
    eq = eq.replace(/\\int_([0-9a-zA-Z\\]+)\^([0-9a-zA-Z\\]+)/g, '<span class="math-op">&int;</span><sub>$1</sub><sup>$2</sup>');
    eq = eq.replace(/\\int/g, '<span class="math-op">&int;</span>');
    eq = eq.replace(/\\sum_\{([^{}]+)\}\^\{([^{}]+)\}/g, '<span class="math-op">&sum;</span><sub>$1</sub><sup>$2</sup>');
    eq = eq.replace(/\\sum/g, '<span class="math-op">&sum;</span>');
    eq = eq.replace(/\\prod/g, '<span class="math-op">&prod;</span>');

    // H. Del & Derivatives
    eq = eq.replace(/\\nabla\^2/g, '&nabla;&sup2;');
    eq = eq.replace(/\\nabla/g, '&nabla;');
    eq = eq.replace(/\\partial/g, '&part;');

    // I. Greek Letters (Word-bounded)
    eq = eq.replace(/\\Psi\b/g, 'Ψ');
    eq = eq.replace(/\\Phi\b/g, 'Φ');
    eq = eq.replace(/\\Omega\b/g, 'Ω');
    eq = eq.replace(/\\Delta\b/g, 'Δ');
    eq = eq.replace(/\\alpha\b/g, 'α');
    eq = eq.replace(/\\beta\b/g, 'β');
    eq = eq.replace(/\\gamma\b/g, 'γ');
    eq = eq.replace(/\\theta\b/g, 'θ');
    eq = eq.replace(/\\lambda\b/g, 'λ');
    eq = eq.replace(/\\mu\b/g, 'μ');
    eq = eq.replace(/\\omega\b/g, 'ω');
    eq = eq.replace(/\\kappa\b/g, 'κ');
    eq = eq.replace(/\\sigma\b/g, 'σ');
    eq = eq.replace(/\\tau\b/g, 'τ');
    eq = eq.replace(/\\phi\b/g, 'ϕ');
    eq = eq.replace(/\\rho\b/g, 'ρ');
    eq = eq.replace(/\\pi\b/g, 'π');
    eq = eq.replace(/\\mathbb\{Z\}/g, 'ℤ');
    eq = eq.replace(/\\mathcal\{M\}_\{?\\odot\}?/g, 'ℳ<sub>☉</sub>');
    eq = eq.replace(/\\mathcal\{N\}/g, '𝒩');
    eq = eq.replace(/\\mathcal\{H\}/g, 'ℋ');
    eq = eq.replace(/\\mathcal\{S\}/g, '𝒮');
    eq = eq.replace(/\\mathcal\{F\}/g, 'ℱ');

    // J. Operators & Relational Symbols (Word-bounded to never collide with \left, \right, etc.)
    eq = eq.replace(/\\le\b/g, '&le;');
    eq = eq.replace(/\\ge\b/g, '&ge;');
    eq = eq.replace(/\\pm\b/g, '&plusmn;');
    eq = eq.replace(/\\cdot\b/g, '&sdot;');
    eq = eq.replace(/\\times\b/g, '&times;');
    eq = eq.replace(/\\equiv\b/g, '&equiv;');
    eq = eq.replace(/\\approx\b/g, '&asymp;');
    eq = eq.replace(/\\neq\b/g, '&ne;');
    eq = eq.replace(/\\forall\b/g, '&forall;');
    eq = eq.replace(/\\exists\b/g, '&exist;');
    eq = eq.replace(/\\in\b/g, '&isin;');
    eq = eq.replace(/\\land\b/g, '&and;');
    eq = eq.replace(/\\lor\b/g, '&or;');
    eq = eq.replace(/\\neg\b/g, '&not;');
    eq = eq.replace(/\\vdash\b/g, '&#8866;');
    eq = eq.replace(/\\implies\b/g, '&rArr;');
    eq = eq.replace(/\\therefore\b/g, '&there4;');
    eq = eq.replace(/\\downarrow\b/g, '&darr;');
    eq = eq.replace(/\\uparrow\b/g, '&uarr;');
    eq = eq.replace(/\\circ\b/g, '&deg;');

    // K. Text & Named Functions
    eq = eq.replace(/\\text\{([^{}]+)\}/g, '<span class="math-text">$1</span>');
    eq = eq.replace(/\\pmod\{([^{}]+)\}/g, '<span class="math-text"> (mod $1)</span>');
    eq = eq.replace(/\\gcd\b/g, '<span class="math-func">gcd</span>');
    eq = eq.replace(/\\det\b/g, '<span class="math-func">det</span>');
    eq = eq.replace(/\\cos\b/g, '<span class="math-func">cos</span>');
    eq = eq.replace(/\\sin\b/g, '<span class="math-func">sin</span>');
    eq = eq.replace(/\\ln\b/g, '<span class="math-func">ln</span>');
    eq = eq.replace(/\\exp\b/g, '<span class="math-func">exp</span>');
    eq = eq.replace(/\\xrightarrow\{([^}]+)\}/g, '<span class="math-arrow-labeled">&mdash;&mdash;($1)&rarr;</span>');

    // L. Subscripts & Superscripts
    eq = eq.replace(/\^\{([^{}]+)\}/g, '<sup>$1</sup>');
    eq = eq.replace(/\^([0-9a-zA-Z°]+)/g, '<sup>$1</sup>');
    eq = eq.replace(/_\{([^{}]+)\}/g, '<sub>$1</sub>');
    eq = eq.replace(/_([0-9a-zA-Z]+)/g, '<sub>$1</sub>');

    // M. Spacing
    eq = eq.replace(/\\(\s|,|;|quad)/g, '&nbsp;&nbsp;');

    return eq;
  }

  private static replaceFractions(str: string): string {
    let prev = '';
    let current = str;
    while (prev !== current && current.includes('\\frac')) {
      prev = current;
      current = current.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, (_m, num, den) => {
        return `<span class="math-frac"><span class="math-num">${num}</span><span class="math-den">${den}</span></span>`;
      });
    }
    return current;
  }

  private static renderMatrix(rawMatrix: string): string {
    const isBmatrix = rawMatrix.includes('bmatrix');
    const inner = rawMatrix
      .replace(/\\begin\{[bp]matrix\}/g, '')
      .replace(/\\end\{[bp]matrix\}/g, '')
      .trim();

    const rows = inner.split('\\\\');
    let matrixHtml = `<div class="math-matrix-wrapper"><table class="math-matrix-table ${isBmatrix ? 'bmatrix' : 'pmatrix'}"><tbody>`;

    for (const row of rows) {
      if (!row.trim()) continue;
      matrixHtml += '<tr>';
      const cells = row.split('&');
      for (const cell of cells) {
        matrixHtml += `<td>${this.renderEquation(cell.trim())}</td>`;
      }
      matrixHtml += '</tr>';
    }

    matrixHtml += '</tbody></table></div>';
    return matrixHtml;
  }
}
