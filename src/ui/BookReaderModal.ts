import { BookData } from '../lore/LibraryLoreGenerator';

export interface BookReaderCallbacks {
  onClose: () => void;
}

export class BookReaderModal {
  private overlayEl: HTMLElement;
  private modalEl: HTMLElement;
  private currentBook: BookData | null = null;
  private currentPageIndex: number = 0; // index in book.pages (spread shows page & page+1)
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

    this.modalEl.innerHTML = `
      <div class="book-leather-binding" style="border-color: ${book.coverColor};">
        <div class="book-ribbon-bookmark"></div>

        <div class="book-pages-spread">
          <!-- LEFT PARCHMENT PAGE -->
          <div class="parchment-page left-page">
            <div class="page-inner">
              ${this.currentPageIndex === 0 ? `
                <div class="book-title-header">
                  <div class="book-category-tag">${book.classification.toUpperCase()} • ${book.subgenre.toUpperCase()}</div>
                  <h1 class="book-title">${book.title}</h1>
                  <div class="book-author">By <em>${book.author}</em></div>
                  <div class="book-era">${book.era}</div>
                  <div class="ornate-divider">❦ ════════ ❧</div>
                </div>
              ` : `
                <div class="chapter-header">${leftPage?.chapterTitle ?? ''}</div>
              `}

              <div class="page-body-text">
                ${leftPage ? this.formatBodyText(leftPage.content) : ''}
              </div>

              <div class="page-footer">
                <span class="page-num">${leftPage ? leftPage.pageNumber : ''}</span>
              </div>
            </div>
          </div>

          <!-- BOOK SPINE CENTER FOLD -->
          <div class="book-spine-crease"></div>

          <!-- RIGHT PARCHMENT PAGE -->
          <div class="parchment-page right-page">
            <div class="page-inner">
              <div class="chapter-header">${rightPage?.chapterTitle ?? ''}</div>

              <div class="page-body-text">
                ${rightPage ? this.formatBodyText(rightPage.content) : '<div class="blank-page-note">~ End of Volume ~</div>'}
              </div>

              <div class="page-footer">
                <span class="page-num">${rightPage ? rightPage.pageNumber : ''}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- FOOTER CONTROLS -->
        <div class="book-nav-bar">
          <button id="btn-prev-page" class="retro-btn nav-page-btn" ${!hasPrev ? 'disabled' : ''}>
            ◀ PREVIOUS
          </button>

          <span class="page-indicator">Pages ${this.currentPageIndex + 1}-${Math.min(this.currentPageIndex + 2, book.pages.length)} of ${book.pages.length}</span>

          <button id="btn-next-page" class="retro-btn nav-page-btn" ${!hasNext ? 'disabled' : ''}>
            NEXT ▶
          </button>

          <button id="btn-close-book" class="retro-btn close-book-btn">
            ✕ CLOSE (ESC)
          </button>
        </div>
      </div>
    `;

    // Bind page buttons
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

  private formatBodyText(content: string): string {
    const paragraphs = content.split('\n\n');
    return paragraphs.map((p, idx) => {
      if (idx === 0) {
        const firstChar = p.charAt(0);
        const rest = p.slice(1);
        return `<p class="first-paragraph"><span class="drop-cap">${firstChar}</span>${rest.replace(/\n/g, '<br/>')}</p>`;
      }
      return `<p>${p.replace(/\n/g, '<br/>')}</p>`;
    }).join('');
  }
}
