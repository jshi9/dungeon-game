import {
  BookData,
  DarkFantasyGenre,
  BookPage,
  BookBlueprint,
  ChapterOutlineBeat
} from '../lore/BookTypes';
import { aiConfigManager } from '../config/aiConfig';
import { aiBookService } from './aiBookService';
import { bookCache } from './bookCache';

export interface GenerateBookParams {
  id?: string;
  title: string;
  subtitle?: string;
  author?: string;
  genre?: DarkFantasyGenre;
  era?: string;
  seed?: number | string;
  targetPageCount?: number;
  forceRefresh?: boolean;
}

export class BookGeneratorService {
  private static instance: BookGeneratorService;
  private activePrefetchJobs: Set<string> = new Set();
  private pageWaiters: Map<string, Array<() => void>> = new Map();

  private constructor() {}

  public static getInstance(): BookGeneratorService {
    if (!BookGeneratorService.instance) {
      BookGeneratorService.instance = new BookGeneratorService();
    }
    return BookGeneratorService.instance;
  }

  // =========================================================================
  // MAIN ENTRY POINT: GENERATE OR LOAD LONG-FORM BOOK (10–50 PAGES)
  // =========================================================================
  public async generateBook(params: GenerateBookParams): Promise<BookData> {
    const title = params.title || 'The Untitled Volume';
    const numSeed = typeof params.seed === 'number' ? params.seed : this.hashString(title + (params.seed || ''));
    const genre = params.genre || this.inferDarkFantasyGenre(title);
    const author = params.author || this.generateAuthorName(numSeed);
    const era = params.era || this.generateEra(numSeed);
    const id = params.id || `book_${this.sanitizeKey(title)}`;

    // 1. Check persistent cache
    if (!params.forceRefresh) {
      const cached = await bookCache.getBookAsync(id);
      if (cached && cached.isLoaded && cached.pages.length > 0) {
        if (!cached.isFullyPrefetched && cached.pages.length < cached.targetPageCount) {
          this.triggerBackgroundPrefetch(cached);
        }
        return cached;
      }
    }

    // 2. Determine target page count (10 to 50 pages)
    const targetPageCount = params.targetPageCount || this.calculateTargetPageCount(numSeed);

    // 3. Tier 1: Generate or Load Blueprint
    let blueprint = bookCache.getBlueprint(id);
    let isAIGenerated = false;

    if (!blueprint) {
      if (aiConfigManager.hasActiveKey()) {
        try {
          blueprint = await aiBookService.generateBlueprint(title, author, genre, era, targetPageCount);
          isAIGenerated = true;
        } catch (err) {
          console.warn('[BookGeneratorService] AI Blueprint generation failed, using procedural blueprint:', err);
        }
      }

      if (!blueprint) {
        blueprint = this.createProceduralBlueprint(id, title, author, genre, era, targetPageCount, numSeed);
      }
      bookCache.saveBlueprint(blueprint);
    }

    // 4. Generate Initial Batch (Pages 1 to 4 front matter + Pages 5 to 8 initial chapter folios)
    const initialPages = await this.generateInitialPages(blueprint, isAIGenerated, numSeed);

    const isMathAllowed = aiBookService.isMathAllowedForGenre(genre);

    const bookData: BookData = {
      id,
      title: blueprint.title,
      subtitle: blueprint.subtitle,
      author: blueprint.author,
      era: blueprint.era,
      genre: blueprint.genre,
      classification: blueprint.classification,
      subgenre: blueprint.subgenre,
      targetPageCount: blueprint.targetPageCount,
      coverColor: blueprint.coverColor,
      accentColor: blueprint.accentColor,
      fontFamily: blueprint.fontFamily,
      fontSize: blueprint.fontSize,
      layoutFormat: blueprint.layoutFormat,
      writingStyle: blueprint.writingStyle,
      isSTEM: isMathAllowed,
      seed: numSeed,
      blueprint,
      pages: initialPages,
      isLoaded: true,
      isFullyPrefetched: initialPages.length >= blueprint.targetPageCount,
      isAIGenerated,
      prefetchedPagesCount: initialPages.length
    };

    bookCache.saveBook(bookData);

    // 5. Trigger Tier 2: Background Batch Prefetching for remaining pages
    if (bookData.pages.length < bookData.targetPageCount) {
      this.triggerBackgroundPrefetch(bookData);
    }

    return bookData;
  }

  // =========================================================================
  // TIER 1: INITIAL PAGES BUILDER (Pages 1–8)
  // =========================================================================
  private async generateInitialPages(
    blueprint: BookBlueprint,
    isAIGenerated: boolean,
    seed: number
  ): Promise<BookPage[]> {
    const pages: BookPage[] = [];

    // Page 1: Half-Title
    pages.push({
      pageType: 'half-title',
      chapterTitle: '',
      pageNumber: 1,
      content: `\n\n\n\n\n\n${blueprint.title.toUpperCase()}\n\n❦`
    });

    // Page 2: Frontispiece
    pages.push({
      pageType: 'frontispiece',
      chapterTitle: 'FRONTISPIECE',
      pageNumber: 2,
      content: `═══════════════════════════════\n    IMPERIAL CITADEL SCRIPTORIUM\n    ARCHIVAL CATALOGUE REGISTRY\n═══════════════════════════════\n\nPreserved in the Solstice Vaults\nDiscipline: ${blueprint.genre.toUpperCase()}\nEra: ${blueprint.era.toUpperCase()}\nTarget Length: ${blueprint.targetPageCount} Folios\n\n❦ Omnia Vincit Veritas ❦`
    });

    // Page 3: Title Page
    pages.push({
      pageType: 'title-page',
      chapterTitle: 'TITLE PAGE',
      pageNumber: 3,
      content: `${blueprint.title.toUpperCase()}\n\n— ${blueprint.subtitle} —\n\n\nBY\n${blueprint.author.toUpperCase()}\n\n\nARCHIVAL GENRE: ${blueprint.genre.toUpperCase()}\nACADEMIC DISCIPLINE: ${blueprint.subgenre.toUpperCase()}\n\n\n❦ ══════════════════ ❧\nPUBLISHED UNDER THE SEAL OF THE ARCH-LIBRARIAN\nARCHIVES OF ALDERIA • ${blueprint.era.toUpperCase()}`
    });

    // Page 4: Archival Notice & Table of Contents
    const tocLines = blueprint.chapterOutlines.map((c) => `• Chapter ${this.toRoman(c.chapterIndex)}: ${c.title} (Folios ${c.pageRange[0]}–${c.pageRange[1]})`).join('\n');
    pages.push({
      pageType: 'copyright',
      chapterTitle: 'ARCHIVAL RECORD & CONTENTS',
      pageNumber: 4,
      content: `ARCHIVAL REPOSITORY OF ALDERIA\nRegistry Code: ARCH-${1000 + (seed % 9000)}-${blueprint.genre.slice(0, 3).toUpperCase()}-${10 + (seed % 89)}\n\nTABLE OF CONTENTS:\n${tocLines}\n\n${isAIGenerated ? '✦ Transcribed via Real-Time Scriptorium AI Intelligence ✦' : '✦ Canonical Scriptorium Codex ✦'}`
    });

    // Pages 5 to 8 (Opening Chapter Pages)
    const initialBatchEnd = Math.min(8, blueprint.targetPageCount);
    let chapterPages: string[] = [];

    if (isAIGenerated && aiConfigManager.hasActiveKey()) {
      try {
        const batch = await aiBookService.generatePageBatch(blueprint, 5, initialBatchEnd, 'Opening folios', blueprint.chapterOutlines[0]);
        chapterPages = batch.pages;
      } catch (err) {
        console.warn('[BookGeneratorService] Initial AI page batch failed, using procedural weaver:', err);
      }
    }

    if (chapterPages.length === 0) {
      chapterPages = this.generateProceduralBatch(blueprint, 5, initialBatchEnd, seed);
    }

    for (let i = 0; i < chapterPages.length; i++) {
      const pageNum = 5 + i;
      const chOutline = blueprint.chapterOutlines.find((c) => pageNum >= c.pageRange[0] && pageNum <= c.pageRange[1]) || blueprint.chapterOutlines[0];
      pages.push({
        pageType: 'chapter',
        chapterTitle: chOutline ? `CHAPTER ${this.toRoman(chOutline.chapterIndex)}: ${chOutline.title.toUpperCase()}` : `FOLIO ${pageNum}`,
        pageNumber: pageNum,
        content: chapterPages[i],
        headerText: `${blueprint.title.toUpperCase()} • FOLIO ${pageNum}`,
        hasMathProof: blueprint.isSTEM
      });
    }

    return pages;
  }

  // =========================================================================
  // TIER 2: BACKGROUND BATCH PREFETCHING (Pages 9..N up to 50)
  // =========================================================================
  public triggerBackgroundPrefetch(book: BookData): void {
    if (this.activePrefetchJobs.has(book.id) || book.isFullyPrefetched) return;
    this.activePrefetchJobs.add(book.id);

    // Run async in background without blocking player
    (async () => {
      let currentEnd = book.pages.length;
      let runningSummary = `First ${currentEnd} folios inscribed covering initial premises of ${book.title}.`;

      while (currentEnd < book.targetPageCount) {
        const batchStart = currentEnd + 1;
        const batchEnd = Math.min(batchStart + 5, book.targetPageCount); // 6 pages per batch

        const chOutline = book.blueprint?.chapterOutlines.find((c) => batchStart >= c.pageRange[0] && batchStart <= c.pageRange[1]);

        let batchPages: string[] = [];

        if (book.isAIGenerated && aiConfigManager.hasActiveKey() && book.blueprint) {
          try {
            const result = await aiBookService.generatePageBatch(
              book.blueprint,
              batchStart,
              batchEnd,
              runningSummary,
              chOutline
            );
            batchPages = result.pages;
            runningSummary = result.batchSummary;
          } catch (err) {
            console.warn(`[BookGeneratorService] AI Prefetch batch ${batchStart}-${batchEnd} failed, falling back to procedural weaver:`, err);
          }
        }

        if (batchPages.length === 0 && book.blueprint) {
          batchPages = this.generateProceduralBatch(book.blueprint, batchStart, batchEnd, book.seed + batchStart * 17);
        }

        for (let i = 0; i < batchPages.length; i++) {
          const pageNum = batchStart + i;
          const isEpilogue = pageNum === book.targetPageCount;
          const currentCh = book.blueprint?.chapterOutlines.find((c) => pageNum >= c.pageRange[0] && pageNum <= c.pageRange[1]);

          book.pages.push({
            pageType: isEpilogue ? 'epilogue' : 'chapter',
            chapterTitle: isEpilogue
              ? 'EPILOGUE: THE SEAL OF SECRETS'
              : currentCh
              ? `CHAPTER ${this.toRoman(currentCh.chapterIndex)}: ${currentCh.title.toUpperCase()}`
              : `FOLIO ${pageNum}`,
            pageNumber: pageNum,
            content: batchPages[i],
            headerText: `${book.title.toUpperCase()} • FOLIO ${pageNum}`,
            hasMathProof: book.isSTEM
          });
        }

        book.prefetchedPagesCount = book.pages.length;
        if (book.pages.length >= book.targetPageCount) {
          book.isFullyPrefetched = true;
        }

        bookCache.saveBook(book);
        currentEnd = book.pages.length;

        // Notify any listeners waiting for these pages
        this.notifyPageWaiters(book.id);

        // Brief yield between batches to keep frame rate silky smooth
        await new Promise((r) => setTimeout(r, 60));
      }

      this.activePrefetchJobs.delete(book.id);
    })().catch((err) => {
      console.error('[BookGeneratorService] Error in background prefetch:', err);
      this.activePrefetchJobs.delete(book.id);
    });
  }

  public async ensurePageAvailable(book: BookData, pageNumber: number): Promise<void> {
    if (pageNumber < book.pages.length) return;
    if (book.isFullyPrefetched) return;

    // Trigger prefetch if not active
    this.triggerBackgroundPrefetch(book);

    // Wait until the required page is prefetched
    if (pageNumber >= book.pages.length) {
      await new Promise<void>((resolve) => {
        const key = `${book.id}_${pageNumber}`;
        if (!this.pageWaiters.has(key)) {
          this.pageWaiters.set(key, []);
        }
        this.pageWaiters.get(key)!.push(resolve);

        // Safety timeout so modal never hangs indefinitely
        setTimeout(resolve, 8000);
      });
    }
  }

  private notifyPageWaiters(bookId: string): void {
    this.pageWaiters.forEach((callbacks, key) => {
      if (key.startsWith(bookId)) {
        callbacks.forEach((cb) => cb());
        this.pageWaiters.delete(key);
      }
    });
  }

  // =========================================================================
  // DETERMINISTIC PROCEDURAL WEAVER (All 18 Genres, 10–50 Pages)
  // =========================================================================
  private createProceduralBlueprint(
    id: string,
    title: string,
    author: string,
    genre: DarkFantasyGenre,
    era: string,
    targetPageCount: number,
    seed: number
  ): BookBlueprint {
    const isMathAllowed = aiBookService.isMathAllowedForGenre(genre);

    const chapterCount = targetPageCount <= 16 ? 3 : targetPageCount <= 30 ? 4 : 5;
    const pagesPerChapter = Math.floor((targetPageCount - 4) / chapterCount);

    const chapterOutlines: ChapterOutlineBeat[] = [];
    let curPage = 5;

    for (let c = 1; c <= chapterCount; c++) {
      const isLast = c === chapterCount;
      const endP = isLast ? targetPageCount : curPage + pagesPerChapter - 1;

      chapterOutlines.push({
        chapterIndex: c,
        title: this.getChapterTitleForGenre(genre, c, isLast),
        pageRange: [curPage, endP],
        keyBeats: `Narrative progression through phase ${c} of ${genre}`,
        hasMath: isMathAllowed && c % 2 === 0
      });
      curPage = endP + 1;
    }

    return {
      id,
      title,
      subtitle: `A Long-Form Codex of ${genre}`,
      author,
      era,
      genre,
      classification: this.inferClassification(genre),
      subgenre: genre,
      targetPageCount,
      overallPremise: `A comprehensive manuscript examining ${title} through the lens of ${genre}.`,
      chapterOutlines,
      coverColor: this.getCoverColorForGenre(genre, seed),
      accentColor: this.getAccentColorForGenre(genre, seed),
      fontFamily: isMathAllowed ? 'crimson' : genre === 'Malediction Poetry' ? 'mystic' : 'garamond',
      fontSize: isMathAllowed ? 'compact' : 'regular',
      layoutFormat: genre === 'Malediction Poetry' ? 'verse' : genre === 'Tragic Plays' ? 'play-script' : 'standard',
      writingStyle: this.inferWritingStyle(genre),
      isSTEM: isMathAllowed,
      seed
    };
  }

  private generateProceduralBatch(
    blueprint: BookBlueprint,
    startPage: number,
    endPage: number,
    seed: number
  ): string[] {
    const prng = this.createPrng(seed);
    const pages: string[] = [];
    const isMathAllowed = blueprint.isSTEM;

    for (let p = startPage; p <= endPage; p++) {
      const isLast = p === blueprint.targetPageCount;
      pages.push(this.generateSingleProceduralPage(blueprint, p, isLast, isMathAllowed, prng));
    }

    return pages;
  }

  private generateSingleProceduralPage(
    blueprint: BookBlueprint,
    pageNum: number,
    isLast: boolean,
    isMathAllowed: boolean,
    prng: () => number
  ): string {
    const genre = blueprint.genre;
    const author = blueprint.author;
    const title = blueprint.title;

    if (genre === 'Tragic Plays') {
      const act = Math.floor((pageNum - 5) / 4) + 1;
      const scene = ((pageNum - 5) % 4) + 1;
      return (
        `[ACT ${this.toRoman(act)}, SCENE ${this.toRoman(scene)}]\n\n` +
        `LORD CORVO: (Drawing the blackened dagger) Look upon the northern sky, brother. The comet bleeds across the zenith just as the seer foretold.\n\n` +
        `PRINCE ALISTAIR: (Turning toward the iron parapet) Then our father's decree was not madness, but sanctuary. If the seal below the crypts fails before midnight, no living soul within this citadel shall witness the sunrise.\n\n` +
        `LORD CORVO: Let the bells ring out from the high barrow. What was broken in blood can only be mended in silence.`
      );
    }

    if (genre === 'Malediction Poetry') {
      const stanzas = [
        `Where the hollow shadow falls upon the basalt crest,\nThe iron ravens gather for the midnight quest.\nSeek not the silver key where living waters weep,\nFor ancient vows are broken in the sunken deep.`,
        `Four paces past the arch of weeping granite stone,\nBeneath the seventh flagstone lies the king alone.\nLet not the torch burn red when winter winds arise,\nLest hungry eyes awaken beneath starless skies.`
      ];
      return stanzas.join('\n\n');
    }

    if (isMathAllowed) {
      if (genre === 'Alchemical Formulae') {
        return (
          `The transmutation kinetics of ${title} require rigorous stoichiometric balancing across the crucible boundary. When starlight salts undergo sublimation in vitriol:\n\n` +
          `$$\\Delta H_{\\mathrm{calc}} = -R \\, T \\ln \\left( \\frac{\\alpha_{\\mathrm{mercury}}}{\\beta_{\\mathrm{brimstone}}} \\right) + \\oint_{\\mathcal{C}} \\kappa_{\\mathrm{catalyst}} \\, ds$$\n\n` +
          `Empirical distillation recorded at the solstice confirmed an equilibrium coefficient of $\\mathcal{K} = 1.414 \\times 10^{-4}$, verifying the complete dissolution of impurities.`
        );
      }

      if (genre === 'Abyssal Gazeteers') {
        return (
          `The spatial curvature within the sunken rift departs sharply from Euclidean metrics. The dimensional distortion tensor along the obsidian corridor is given by:\n\n` +
          `$$R_{\\mu \\nu} - \\frac{1}{2} R g_{\\mu \\nu} + \\Lambda_{\\mathrm{abyss}} g_{\\mu \\nu} = \\frac{8 \\pi G}{c^4} T_{\\mu \\nu}$$\n\n` +
          `Here the manifold exhibits a non-orientable folding at an angle of $\\theta = \\frac{7\\pi}{11}$, causing compass needles to rotate in recursive logarithmic spirals.`
        );
      }

      if (genre === 'Architectural Layouts') {
        return (
          `Structural load calculations for the subterranean vaulted spans beneath ${title} dictate that the pointed arches must distribute compressive vectors along the diagonal buttresses:\n\n` +
          `$$\\sigma_{\\mathrm{vault}} = \\frac{F_{\\mathrm{dead}} \\cos \\phi}{2 \\, b \\, h} + \\int_0^L \\omega(x) \\, \\frac{x}{L} \\, dx$$\n\n` +
          `Calculations demonstrate that mortared granite can endure an upward thrust exceeding $4.8 \\times 10^5 \\text{ N/m}^2$ prior to masonry fracture.`
        );
      }

      if (genre === 'Cipher Keys') {
        return (
          `The imperial substitution grid utilizes prime factorization matrices for archival concealment. The modular decryption function is formalized as:\n\n` +
          `$$C(m) \\equiv m^{e} \\pmod{p \\cdot q}, \\quad \\text{where } e \\cdot d \\equiv 1 \\pmod{\\phi(n)}$$\n\n` +
          `When the rune ring is rotated through offset $k = 13$, the hidden cipher yields the exact coordinate coordinates of the inner vault.`
        );
      }

      // Necromancy / Hemomancy math
      return (
        `The decay rate of bound etheric souls is governed by the sacred exponential dispersion law:\n\n` +
        `$$\\Psi_{\\mathrm{soul}}(t) = \\Psi_0 \\, e^{-\\gamma_{\\mathrm{grave}} t} \\cos(\\omega_{\\mathrm{pulse}} t)$$\n\n` +
        `Where $\\gamma_{\\mathrm{grave}}$ denotes the salt-warding constant inscribed by Master ${author}.`
      );
    }

    // Default: 100% Pure Prose for Chronicles, Genealogies, Inquisition Journals, Bestiaries, Decrees, etc.
    const themes = [
      `The annals of ${title} recall how the eastern garrison was consumed by relentless frost during the Great Schism. Soldiers posted along the high curtain wall reported strange lights dancing above the pine canopy, moving with deliberate intent across the frozen ridges.`,
      `In the deep cellars beneath the old fortress, inquisitors uncovered centuries-old parchments sealed with black wax. Every passage spoke of an unbroken pact that bound the ruling family to the guardians of the lower dark.`,
      `Those who dared explore the forgotten subterranean halls returned with accounts of endless colonnades carved from seamless black basalt. No chisel marks could be found upon the stone, as though the entire labyrinth had been shaped by a single breath of primordial fire.`
    ];

    const chosenTheme = themes[Math.floor(prng() * themes.length)];

    if (isLast) {
      return (
        `${chosenTheme}\n\n` +
        `Thus is the record of ${title} brought to its conclusion. May those who read these folios heed the warnings transcribed herein, and let the seal remain unbroken until the end of days.\n\n` +
        `— Transcribed by Master ${author}, Grand Scriptorium.`
      );
    }

    return (
      `${chosenTheme}\n\n` +
      `As the expedition pressed deeper into the catacombs, the air grew increasingly thin and scented with old incense. Every step echoed against the vaulted ceiling, warning all within that living feet had returned to the halls of the departed.`
    );
  }

  // =========================================================================
  // UTILITIES & INFERENCE HELPERS
  // =========================================================================
  public inferDarkFantasyGenre(title: string): DarkFantasyGenre {
    const t = title.toLowerCase();
    if (t.includes('necro') || t.includes('corpse') || t.includes('reanimat') || t.includes('soul')) return 'Necromancy Grimoires';
    if (t.includes('demon') || t.includes('fiend') || t.includes('pact') || t.includes('summon')) return 'Demonology Codices';
    if (t.includes('abyss') || t.includes('cosmic') || t.includes('madness') || t.includes('gazetteer')) return 'Abyssal Gazeteers';
    if (t.includes('alchem') || t.includes('transmut') || t.includes('crucible') || t.includes('elixir')) return 'Alchemical Formulae';
    if (t.includes('blood') || t.includes('hemo') || t.includes('sanguine') || t.includes('flesh')) return 'Hemomancy Scrolls';
    if (t.includes('apocalypse') || t.includes('dead god') || t.includes('ruin') || t.includes('fall of')) return 'Apocalyptic Chronicles';
    if (t.includes('lineage') || t.includes('genealog') || t.includes('house of') || t.includes('dynasty')) return 'Genealogies of Damned Lineages';
    if (t.includes('inquisit') || t.includes('confess') || t.includes('heresy') || t.includes('purge')) return 'Inquisition Journals';
    if (t.includes('decree') || t.includes('edict') || t.includes('monarch') || t.includes('crown')) return 'Monarchic Decrees';
    if (t.includes('myth') || t.includes('pantheon') || t.includes('gods') || t.includes('cycle')) return 'Mythological Cycle Books';
    if (t.includes('cryptid') || t.includes('beast') || t.includes('monster') || t.includes('anatom')) return 'Cryptid Anatomies';
    if (t.includes('cult') || t.includes('heresiograph') || t.includes('cabal')) return 'Heresiographies';
    if (t.includes('flora') || t.includes('herb') || t.includes('plant') || t.includes('fungi') || t.includes('morbida')) return 'Flora Morbida';
    if (t.includes('philosoph') || t.includes('void') || t.includes('entropy') || t.includes('nihil')) return 'Heretical Philosophies';
    if (t.includes('play') || t.includes('tragedy') || t.includes('drama') || t.includes('script')) return 'Tragic Plays';
    if (t.includes('poem') || t.includes('verse') || t.includes('ballad') || t.includes('malediction')) return 'Malediction Poetry';
    if (t.includes('architect') || t.includes('vault') || t.includes('masonry') || t.includes('layout')) return 'Architectural Layouts';
    if (t.includes('smith') || t.includes('forge') || t.includes('iron') || t.includes('blade')) return 'Blacksmithing Manuals';
    if (t.includes('cipher') || t.includes('cryptograph') || t.includes('key') || t.includes('code')) return 'Cipher Keys';

    return 'Apocalyptic Chronicles';
  }

  private calculateTargetPageCount(seed: number): number {
    const prng = this.createPrng(seed + 999);
    // Returns randomized page count between 12 and 48 pages
    return 12 + Math.floor(prng() * 37);
  }

  private getChapterTitleForGenre(genre: DarkFantasyGenre, chapterIndex: number, isLast: boolean): string {
    if (isLast) return 'The Final Revelation & Sealed Epilogue';
    const titles: Record<DarkFantasyGenre, string[]> = {
      'Necromancy Grimoires': ['Preparation of the Salt-Vessels', 'Rites of the First Breath', 'Binding of Bone and Will', 'The Eternal Slumber'],
      'Demonology Codices': ['The Hierarchy of the Pit', 'Circles of Sulfur and Salt', 'Pacts of the Silver Quill', 'The True Names'],
      'Abyssal Gazeteers': ['The Non-Euclidean Spires', 'Tides of the Outer Void', 'The Singing Monoliths', 'The Edge of Sanity'],
      'Alchemical Formulae': ['Purification of Raw Vitriol', 'The Great Hermetic Conjunction', 'Sublimation of Astral Salts', 'The Philosopher\'s Stone'],
      'Hemomancy Scrolls': ['The Pulse of the Sacred Vessel', 'Sanguine Coagulation Rites', 'The Flesh-Weaver\'s Lattice', 'The Crimson Tide'],
      'Apocalyptic Chronicles': ['The Day the Heavens Bled', 'Fall of the Golden Citadel', 'The March of the Ash Hordes', 'The Silent Desolation'],
      'Genealogies of Damned Lineages': ['The Progenitors of Night', 'The First Corrupted Scion', 'The Curse of the Silver Manor', 'The Extinguished Bloodlines'],
      'Inquisition Journals': ['Suspicions in the Border Marches', 'The Trials of the Black Candle', 'Confessions in Iron', 'The Cleansing Fire'],
      'Monarchic Decrees': ['Edict of the Iron Scepter', 'Seizure of the Northern Barrows', 'The Sentence of Exile', 'The Eternal Ban'],
      'Mythological Cycle Books': ['Dawn of the Blind Titans', 'The War of Three Suns', 'When the Stars Abandoned Us', 'The Silent Heavens'],
      'Cryptid Anatomies': ['Dissection of the Barrow Fiend', 'Harvesting the Venom Siphon', 'Skeletal Densities and Armor', 'Eradication Tactics'],
      'Heresiographies': ['The Secret Sigils of the Hand', 'The Midnight Assemblies', 'The Avatar of the Swarm', 'Methods of Purging the Cabal'],
      'Flora Morbida': ['Tomb-Moss and Grave Fungi', 'The Weeping Nightshade', 'Preparation of Antidote Draughts', 'Harvesting Precautions'],
      'Heretical Philosophies': ['The Illusion of Light', 'Discourses on Absolute Entropy', 'The Architecture of Nothingness', 'The Final Solace'],
      'Tragic Plays': ['Act I: The Ominous Crown', 'Act II: Poison in the Goblet', 'Act III: The Midnight Duel', 'Act IV: The Ruined Kingdom'],
      'Malediction Poetry': ['Stanzas of the Black Moon', 'Ballad of the Forgotten Tomb', 'Verses for the Sleepless', 'The Final Rhyme'],
      'Architectural Layouts': ['Surveying the Crypt Foundations', 'Cantilever Strains and Pressure Gates', 'The Mechanism of the Pendulum', 'The Hidden Scriptorium'],
      'Blacksmithing Manuals': ['Smelting the Meteorite Core', 'Bone-Quenching and Carbon Infusion', 'Damascus Blade Folding', 'Tempering the Edge'],
      'Cipher Keys': ['The Permutation Wheel', 'Modular Prime Transpositions', 'Deciphering the Archon Runes', 'The Unbreakable Key']
    };

    const list = titles[genre] || ['Foundational Principles', 'Deep Exploration', 'The Crucible'];
    return list[chapterIndex - 1] || `Discourse Part ${chapterIndex}`;
  }

  private getCoverColorForGenre(genre: DarkFantasyGenre, seed: number): string {
    const prng = this.createPrng(seed + 123);
    const colors: Record<DarkFantasyGenre, string[]> = {
      'Necromancy Grimoires': ['#1a1a24', '#2d1838', '#1c1626'],
      'Demonology Codices': ['#4a1c14', '#5c1313', '#3b1010'],
      'Abyssal Gazeteers': ['#14294a', '#101d36', '#0c1629'],
      'Alchemical Formulae': ['#1d5334', '#153b26', '#102e1e'],
      'Hemomancy Scrolls': ['#5a1010', '#420d0d', '#6e1515'],
      'Apocalyptic Chronicles': ['#382212', '#29180c', '#402615'],
      'Genealogies of Damned Lineages': ['#3b2f1e', '#2e2417', '#423421'],
      'Inquisition Journals': ['#4a1414', '#381010', '#541717'],
      'Monarchic Decrees': ['#4a3c18', '#382e12', '#59491d'],
      'Mythological Cycle Books': ['#222226', '#18181b', '#2c2c33'],
      'Cryptid Anatomies': ['#2b3d2b', '#1e2b1e', '#364d36'],
      'Heresiographies': ['#381c38', '#291429', '#472447'],
      'Flora Morbida': ['#233823', '#192919', '#2d472d'],
      'Heretical Philosophies': ['#18181b', '#222226', '#121214'],
      'Tragic Plays': ['#4a2030', '#361723', '#5c283c'],
      'Malediction Poetry': ['#2b183b', '#1f112b', '#381f4d'],
      'Architectural Layouts': ['#383226', '#2b261d', '#453e2f'],
      'Blacksmithing Manuals': ['#2e2620', '#241e19', '#3b3129'],
      'Cipher Keys': ['#1c2838', '#141d29', '#24344a']
    };
    const set = colors[genre] || ['#3b190f', '#24140c'];
    return set[Math.floor(prng() * set.length)];
  }

  private getAccentColorForGenre(_genre: DarkFantasyGenre, seed: number): string {
    const prng = this.createPrng(seed + 456);
    const accents = ['#ffd700', '#d4af37', '#c29b38', '#b8860b', '#cd7f32', '#c86d49', '#dfd2b5'];
    return accents[Math.floor(prng() * accents.length)];
  }

  private inferClassification(genre: DarkFantasyGenre): any {
    if (['Necromancy Grimoires', 'Demonology Codices', 'Abyssal Gazeteers', 'Hemomancy Scrolls'].includes(genre)) return 'Mysticism & Magic';
    if (['Alchemical Formulae', 'Architectural Layouts', 'Blacksmithing Manuals', 'Cipher Keys'].includes(genre)) return 'Professional Manuals';
    if (['Apocalyptic Chronicles', 'Genealogies of Damned Lineages', 'Inquisition Journals', 'Monarchic Decrees'].includes(genre)) return 'Non-Fiction';
    if (['Cryptid Anatomies', 'Heresiographies', 'Flora Morbida'].includes(genre)) return 'Academic Texts & Grammar';
    if (['Heretical Philosophies'].includes(genre)) return 'Dissertations';
    return 'Tales & Mythology';
  }

  private inferWritingStyle(genre: DarkFantasyGenre): any {
    if (genre === 'Tragic Plays') return 'dramatic-play';
    if (genre === 'Malediction Poetry') return 'epic-verse';
    if (genre === 'Heretical Philosophies') return 'philosophical-dialogue';
    if (aiBookService.isMathAllowedForGenre(genre)) return 'academic-treatise';
    return 'chronicle-history';
  }

  private generateAuthorName(seed: number): string {
    const firstNames = ['Aurelius', 'Cassian', 'Valerius', 'Ignatius', 'Theodosia', 'Severus', 'Lucian', 'Hadrian', 'Gawain', 'Taliesin', 'Zephyrus', 'Farhan', 'Hildegard', 'Rowena', 'Balthazar', 'Vespera', 'Malakor', 'Morvath'];
    const epithets = ['of Oakhaven', 'of the Iron Quill', 'the Stargazer', 'of Sunken Alderia', 'the Sightless', 'of House Lionheart', 'Arch-Scholar of Veritas', 'the Alchemist of Caelum-Vara', 'the Cartographer of Marid-Khar', 'the Flesh-Binder', 'the Cryptographer'];
    const prng = this.createPrng(seed);
    const f = firstNames[Math.floor(prng() * firstNames.length)];
    const e = epithets[Math.floor(prng() * epithets.length)];
    return `${f} ${e}`;
  }

  private generateEra(seed: number): string {
    const eras = [
      'Fourth Era, Year 742',
      'The First Age of Dawn (Year 312)',
      'Era of the Great Schism (Year 784)',
      'The Golden Century of the Lion (Year 1102)',
      'Age of the Obsidian Eclipse (Year 1340)',
      'Reign of Archon Aurelius IX (Year 1415)',
      'The Third Solstice Reformation (Year 1184)'
    ];
    const prng = this.createPrng(seed + 777);
    return eras[Math.floor(prng() * eras.length)];
  }

  private sanitizeKey(str: string): string {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '_');
  }

  private createPrng(seed: number): () => number {
    let s = (seed ^ 0x6d2b79f5) >>> 0;
    return () => {
      s = Math.imul(s ^ (s >>> 15), s | 1);
      s ^= s + Math.imul(s ^ (s >>> 7), s | 61);
      return ((s ^ (s >>> 14)) >>> 0) / 4294967296;
    };
  }

  private hashString(str: string): number {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return Math.abs(hash);
  }

  private toRoman(n: number): string {
    const map: [number, string][] = [
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let res = '';
    for (const [val, roman] of map) {
      while (n >= val) {
        res += roman;
        n -= val;
      }
    }
    return res || `${n}`;
  }
}

export const bookGeneratorService = BookGeneratorService.getInstance();
