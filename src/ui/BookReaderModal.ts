import { BookData, BookPage } from '../lore/LibraryLoreGenerator';
import { SvgDiagramGenerator } from '../lore/SvgDiagramGenerator';

export interface BookReaderCallbacks {
  onClose?: () => void;
}

/**
 * Authentic Medieval Two-Page Parchment Book Reader Modal
 * Restored to the classic, consistent spread design with equal-sized pages,
 * well-proportioned bottom navigation controls, generative SVG diagrams,
 * and mathematical equation rendering.
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

    this.modalEl.innerHTML = `
      <div class="book-leather-binding" style="border-color: ${book.coverColor || '#5a301a'};">
        <div class="book-ribbon-bookmark"></div>

        <div class="book-pages-spread">
          <!-- LEFT PARCHMENT PAGE -->
          <div class="parchment-page left-page">
            <div class="page-inner">
              ${leftPage ? this.renderPageContent(leftPage, book, true) : ''}
              <div class="page-footer">
                <span class="page-num">${leftPage && leftPage.pageType !== 'half-title' ? leftPage.pageNumber : ''}</span>
              </div>
            </div>
          </div>

          <!-- BOOK SPINE CENTER CREASE -->
          <div class="book-spine-crease"></div>

          <!-- RIGHT PARCHMENT PAGE -->
          <div class="parchment-page right-page">
            <div class="page-inner">
              ${rightPage ? this.renderPageContent(rightPage, book, false) : '<div class="blank-page-note">~ End of Volume ~</div>'}
              <div class="page-footer">
                <span class="page-num">${rightPage ? rightPage.pageNumber : ''}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- BOTTOM NAVIGATION BAR -->
        <div class="book-nav-bar">
          <div class="nav-left-group">
            <button id="btn-prev-page" class="retro-btn nav-page-btn" ${!hasPrev ? 'disabled' : ''}>
              ◀ PREVIOUS
            </button>
          </div>

          <div class="nav-center-group">
            <span class="page-indicator">Pages ${this.currentPageIndex + 1}–${Math.min(this.currentPageIndex + 2, book.pages.length)} of ${book.pages.length}</span>
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
          <div class="page-body-text">
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
          return `<div class="math-display-eq">${MathRenderer.renderEquation(eq)}</div>`;
        }

        // 9. Q.E.D. Seal
        if (trimmed === '[Q.E.D. • Quod Erat Demonstrandum]' || trimmed === '[Q.E.D.]') {
          return `<div class="math-qed-badge">❦ Quod Erat Demonstrandum • Q.E.D.</div>`;
        }

        // 10. Regular Paragraphs
        const renderedText = MathRenderer.renderInlineAndBlocks(trimmed);

        if (idx === 0 && !trimmed.startsWith('*') && !trimmed.startsWith('•') && !trimmed.startsWith('[') && !trimmed.startsWith('╔') && !trimmed.startsWith('<')) {
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
      eq = this.renderMatrices(eq);
    }

    // C. Text & Named Functions (Run first so \text{...} isn't mangled by subscripts)
    eq = eq.replace(/\\text\{([^{}]+)\}/g, '<span class="math-text">$1</span>');
    eq = eq.replace(/\\pmod\{([^{}]+)\}/g, '<span class="math-text"> (mod $1)</span>');

    // D. Bracket and Parenthesis commands
    eq = eq.replace(/\\left\s*\(/g, '<span class="math-delim">(</span>');
    eq = eq.replace(/\\right\s*\)/g, '<span class="math-delim">)</span>');
    eq = eq.replace(/\\left\s*\[/g, '<span class="math-delim">[</span>');
    eq = eq.replace(/\\right\s*\]/g, '<span class="math-delim">]</span>');
    eq = eq.replace(/\\left\s*\\\{/g, '<span class="math-delim">{</span>');
    eq = eq.replace(/\\right\s*\\\}/g, '<span class="math-delim">}</span>');

    // E. Fractions (recursive for nested fractions like \frac{\sqrt{2}}{2})
    eq = this.replaceFractions(eq);

    // F. Square Roots
    eq = eq.replace(/\\sqrt\{([^{}]+)\}/g, '<span class="math-sqrt">&radic;<span class="math-radicand">$1</span></span>');
    eq = eq.replace(/\\sqrt\s*([0-9a-zA-Z]+)/g, '<span class="math-sqrt">&radic;<span class="math-radicand">$1</span></span>');

    // G. Vectors & Hats
    eq = eq.replace(/\\vec\{([^{}]+)\}/g, '<span class="math-vec"><span class="math-vec-arrow">&rarr;</span><span class="math-vec-base">$1</span></span>');
    eq = eq.replace(/\\hat\{([^{}]+)\}/g, '<span class="math-hat"><span class="math-hat-sym">^</span><span class="math-vec-base">$1</span></span>');

    // H. Integrals, Contour Integrals & Summations
    eq = eq.replace(/\\oint_\{?\\mathcal\{S\}\}?/g, '<span class="math-op">&conint;</span><sub class="math-sub">𝒮</sub>');
    eq = eq.replace(/\\oint/g, '<span class="math-op">&conint;</span>');
    eq = eq.replace(/\\int_\{([^{}]+)\}\^\{([^{}]+)\}/g, '<span class="math-op">&int;</span><sub class="math-sub">$1</sub><sup class="math-sup">$2</sup>');
    eq = eq.replace(/\\int_([0-9a-zA-Z\\]+)\^([0-9a-zA-Z\\]+)/g, '<span class="math-op">&int;</span><sub class="math-sub">$1</sub><sup class="math-sup">$2</sup>');
    eq = eq.replace(/\\int/g, '<span class="math-op">&int;</span>');
    eq = eq.replace(/\\sum_\{([^{}]+)\}\^\{([^{}]+)\}/g, '<span class="math-op">&sum;</span><sub class="math-sub">$1</sub><sup class="math-sup">$2</sup>');
    eq = eq.replace(/\\sum/g, '<span class="math-op">&sum;</span>');
    eq = eq.replace(/\\prod/g, '<span class="math-op">&prod;</span>');

    // I. Del & Derivatives
    eq = eq.replace(/\\nabla\^2/g, '&nabla;<sup class="math-sup">2</sup>');
    eq = eq.replace(/\\nabla/g, '&nabla;');
    eq = eq.replace(/\\partial/g, '&part;');

    // J. Functions and Arrow Labels
    eq = eq.replace(/\\xrightarrow\{([^}]+)\}/g, '<span class="math-arrow-labeled">&mdash;&mdash;($1)&rarr;</span>');
    eq = eq.replace(/\\gcd\b/g, '<span class="math-func">gcd</span>');
    eq = eq.replace(/\\det\b/g, '<span class="math-func">det</span>');
    eq = eq.replace(/\\cos\b/g, '<span class="math-func">cos</span>');
    eq = eq.replace(/\\sin\b/g, '<span class="math-func">sin</span>');
    eq = eq.replace(/\\ln\b/g, '<span class="math-func">ln</span>');
    eq = eq.replace(/\\exp\b/g, '<span class="math-func">exp</span>');
    eq = eq.replace(/\\tan\b/g, '<span class="math-func">tan</span>');

    // K. Greek Letters (Word-bounded)
    eq = eq.replace(/\\alpha\b/g, 'α');
    eq = eq.replace(/\\beta\b/g, 'β');
    eq = eq.replace(/\\gamma\b/g, 'γ');
    eq = eq.replace(/\\theta\b/g, 'θ');
    eq = eq.replace(/\\lambda\b/g, 'λ');
    eq = eq.replace(/\\mu\b/g, 'μ');
    eq = eq.replace(/\\nu\b/g, 'ν');
    eq = eq.replace(/\\omega\b/g, 'ω');
    eq = eq.replace(/\\kappa\b/g, 'κ');
    eq = eq.replace(/\\sigma\b/g, 'σ');
    eq = eq.replace(/\\tau\b/g, 'τ');
    eq = eq.replace(/\\phi\b/g, 'ϕ');
    eq = eq.replace(/\\rho\b/g, 'ρ');
    eq = eq.replace(/\\pi\b/g, 'π');
    eq = eq.replace(/\\Psi\b/g, 'Ψ');
    eq = eq.replace(/\\Phi\b/g, 'Φ');
    eq = eq.replace(/\\Omega\b/g, 'Ω');
    eq = eq.replace(/\\Delta\b/g, 'Δ');
    eq = eq.replace(/\\mathbb\{Z\}/g, 'ℤ');
    eq = eq.replace(/\\mathbb\{R\}/g, 'ℝ');
    eq = eq.replace(/\\mathcal\{D\}/g, '𝒟');
    eq = eq.replace(/\\mathcal\{M\}_\{?\\odot\}?/g, 'ℳ<sub class="math-sub">☉</sub>');
    eq = eq.replace(/\\mathcal\{N\}/g, '𝒩');
    eq = eq.replace(/\\mathcal\{H\}/g, 'ℋ');
    eq = eq.replace(/\\mathcal\{S\}/g, '𝒮');
    eq = eq.replace(/\\mathcal\{F\}/g, 'ℱ');

    // L. Relational & Operator Symbols
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

    // M. Subscripts & Superscripts
    eq = eq.replace(/\^\{([^{}]+)\}/g, '<sup class="math-sup">$1</sup>');
    eq = eq.replace(/\^([0-9a-zA-Z°]+)/g, '<sup class="math-sup">$1</sup>');
    eq = eq.replace(/_\{([^{}]+)\}/g, '<sub class="math-sub">$1</sub>');
    eq = eq.replace(/_([0-9a-zA-Z]+)/g, '<sub class="math-sub">$1</sub>');

    // N. Spacing
    eq = eq.replace(/\\qquad/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    eq = eq.replace(/\\quad/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
    eq = eq.replace(/\\,/g, '&nbsp;');
    eq = eq.replace(/\\;/g, '&nbsp;&nbsp;');
    eq = eq.replace(/\\ /g, '&nbsp;');

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

  private static renderMatrices(raw: string): string {
    return raw.replace(/\\begin\{([bp]matrix)\}([\s\S]*?)\\end\{\1\}/g, (_m, type, inner) => {
      const isBmatrix = type === 'bmatrix';
      const rows = inner.split('\\\\');
      let matrixHtml = `<span class="math-matrix-wrapper"><table class="math-matrix-table ${isBmatrix ? 'bmatrix' : 'pmatrix'}"><tbody>`;

      for (const row of rows) {
        if (!row.trim()) continue;
        matrixHtml += '<tr>';
        const cells = row.split('&');
        for (const cell of cells) {
          matrixHtml += `<td>${this.renderEquation(cell.trim())}</td>`;
        }
        matrixHtml += '</tr>';
      }

      matrixHtml += '</tbody></table></span>';
      return matrixHtml;
    });
  }
}
