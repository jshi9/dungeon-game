import { BookData, BookBlueprint } from '../lore/BookTypes';

const DB_NAME = 'Retro3D_Library_DB_v2';
const DB_VERSION = 2;
const STORE_BOOKS = 'books';
const STORE_BLUEPRINTS = 'blueprints';

export class BookCache {
  private static instance: BookCache;
  private db: IDBDatabase | null = null;
  private isDbReady = false;
  private memoryCache: Map<string, BookData> = new Map();
  private blueprintCache: Map<string, BookBlueprint> = new Map();

  private constructor() {
    this.initDb();
    this.loadFromLocalStorageFallback();
  }

  public static getInstance(): BookCache {
    if (!BookCache.instance) {
      BookCache.instance = new BookCache();
    }
    return BookCache.instance;
  }

  private initDb(): void {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return;
    }

    try {
      const req = window.indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = (e) => {
        const db = (e.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_BOOKS)) {
          db.createObjectStore(STORE_BOOKS, { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains(STORE_BLUEPRINTS)) {
          db.createObjectStore(STORE_BLUEPRINTS, { keyPath: 'id' });
        }
      };

      req.onsuccess = (e) => {
        this.db = (e.target as IDBOpenDBRequest).result;
        this.isDbReady = true;
      };

      req.onerror = () => {
        console.warn('[BookCache] IndexedDB initialization failed, using in-memory and localStorage.');
      };
    } catch {
      console.warn('[BookCache] IndexedDB not available.');
    }
  }

  private sanitizeKey(idOrTitle: string): string {
    return idOrTitle.toLowerCase().replace(/[^a-z0-9]/g, '_');
  }

  private loadFromLocalStorageFallback(): void {
    try {
      for (const k of Object.keys(localStorage)) {
        if (k.startsWith('retro3d_deep_book_')) {
          const raw = localStorage.getItem(k);
          if (raw) {
            const data: BookData = JSON.parse(raw);
            if (!this.hasDuplicatePages(data)) {
              this.memoryCache.set(data.id, data);
              this.memoryCache.set(this.sanitizeKey(data.title), data);
            } else {
              localStorage.removeItem(k);
            }
          }
        }
      }
    } catch {}
  }

  private hasDuplicatePages(book: BookData): boolean {
    if (!book.pages || book.pages.length < 6) return false;
    for (let i = 4; i < book.pages.length - 1; i++) {
      const p1 = book.pages[i];
      const p2 = book.pages[i + 1];
      if (p1 && p2 && p1.content && p2.content && p1.content.trim() === p2.content.trim()) {
        return true;
      }
    }
    return false;
  }

  public getBook(idOrTitle: string): BookData | null {
    if (this.memoryCache.has(idOrTitle)) {
      return this.memoryCache.get(idOrTitle)!;
    }
    const cleanKey = this.sanitizeKey(idOrTitle);
    if (this.memoryCache.has(cleanKey)) {
      return this.memoryCache.get(cleanKey)!;
    }
    return null;
  }

  public async getBookAsync(idOrTitle: string): Promise<BookData | null> {
    const mem = this.getBook(idOrTitle);
    if (mem) {
      if (this.hasDuplicatePages(mem)) {
        this.memoryCache.delete(idOrTitle);
        this.memoryCache.delete(this.sanitizeKey(idOrTitle));
        return null;
      }
      return mem;
    }

    if (!this.isDbReady || !this.db) {
      return null;
    }

    return new Promise((resolve) => {
      try {
        const tx = this.db!.transaction(STORE_BOOKS, 'readonly');
        const store = tx.objectStore(STORE_BOOKS);
        const req = store.get(idOrTitle);

        req.onsuccess = () => {
          const res = req.result as BookData | undefined;
          if (res) {
            if (this.hasDuplicatePages(res)) {
              resolve(null);
              return;
            }
            this.memoryCache.set(res.id, res);
            this.memoryCache.set(this.sanitizeKey(res.title), res);
            resolve(res);
          } else {
            resolve(null);
          }
        };

        req.onerror = () => resolve(null);
      } catch {
        resolve(null);
      }
    });
  }

  public saveBook(book: BookData): void {
    this.memoryCache.set(book.id, book);
    this.memoryCache.set(this.sanitizeKey(book.title), book);

    try {
      localStorage.setItem(`retro3d_deep_book_${book.id}`, JSON.stringify(book));
    } catch {}

    if (this.isDbReady && this.db) {
      try {
        const tx = this.db.transaction(STORE_BOOKS, 'readwrite');
        const store = tx.objectStore(STORE_BOOKS);
        store.put(book);
      } catch (err) {
        console.warn('[BookCache] Error writing book to IndexedDB:', err);
      }
    }
  }

  public getBlueprint(idOrTitle: string): BookBlueprint | null {
    if (this.blueprintCache.has(idOrTitle)) {
      return this.blueprintCache.get(idOrTitle)!;
    }
    const cleanKey = this.sanitizeKey(idOrTitle);
    if (this.blueprintCache.has(cleanKey)) {
      return this.blueprintCache.get(cleanKey)!;
    }
    return null;
  }

  public saveBlueprint(blueprint: BookBlueprint): void {
    this.blueprintCache.set(blueprint.id, blueprint);
    this.blueprintCache.set(this.sanitizeKey(blueprint.title), blueprint);

    if (this.isDbReady && this.db) {
      try {
        const tx = this.db.transaction(STORE_BLUEPRINTS, 'readwrite');
        const store = tx.objectStore(STORE_BLUEPRINTS);
        store.put(blueprint);
      } catch (err) {
        console.warn('[BookCache] Error writing blueprint to IndexedDB:', err);
      }
    }
  }
}

export const bookCache = BookCache.getInstance();
