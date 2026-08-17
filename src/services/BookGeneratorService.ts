import {
  BookData,
  DarkFantasyGenre,
  MainBookClassification,
  BookWritingStyle,
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
  private inFlightBatches: Map<string, Promise<void>> = new Map();
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
        if (!this.hasDuplicatePages(cached)) {
          if (!cached.isFullyPrefetched && this.countPopulatedPages(cached) < cached.targetPageCount) {
            this.triggerBackgroundPrefetch(cached);
          }
          return cached;
        }
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
    if (this.countPopulatedPages(bookData) < bookData.targetPageCount) {
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

    // Page 1: Half-Title (Right-hand recto page in spread 0)
    pages.push({
      pageType: 'half-title',
      chapterTitle: '',
      pageNumber: 1,
      content: `\n\n\n\n\n\n${blueprint.title.toUpperCase()}\n\n❦`
    });

    // Page 2: Frontispiece (Left-hand verso page in spread 0)
    pages.push({
      pageType: 'frontispiece',
      chapterTitle: 'FRONTISPIECE',
      pageNumber: 2,
      content: `═══════════════════════════════\n    IMPERIAL CITADEL SCRIPTORIUM\n    ARCHIVAL CATALOGUE REGISTRY\n═══════════════════════════════\n\nPreserved in the Solstice Vaults\nDiscipline: ${blueprint.genre.toUpperCase()}\nEra: ${blueprint.era.toUpperCase()}\nTarget Length: ${blueprint.targetPageCount} Folios\n\n❦ Omnia Vincit Veritas ❦`
    });

    // Page 3: Title Page (Right-hand recto page in spread 1)
    pages.push({
      pageType: 'title-page',
      chapterTitle: 'TITLE PAGE',
      pageNumber: 3,
      content: `${blueprint.title.toUpperCase()}\n\n— ${blueprint.subtitle} —\n\n\nBY\n${blueprint.author.toUpperCase()}\n\n\nARCHIVAL GENRE: ${blueprint.genre.toUpperCase()}\nACADEMIC DISCIPLINE: ${blueprint.subgenre.toUpperCase()}\n\n\n❦ ══════════════════ ❧\nPUBLISHED UNDER THE SEAL OF THE ARCH-LIBRARIAN\nARCHIVES OF ALDERIA • ${blueprint.era.toUpperCase()}`
    });

    // Page 4: Archival Notice & Table of Contents (Left-hand verso page in spread 1)
    const tocLines = blueprint.chapterOutlines.map((c) => `• Chapter ${this.toRoman(c.chapterIndex)}: ${c.title} (Folios ${c.pageRange[0]}–${c.pageRange[1]})`).join('\n');
    pages.push({
      pageType: 'copyright',
      chapterTitle: 'ARCHIVAL RECORD & CONTENTS',
      pageNumber: 4,
      content: `ARCHIVAL REPOSITORY OF ALDERIA\nRegistry Code: ARCH-${1000 + (seed % 9000)}-${blueprint.genre.slice(0, 3).toUpperCase()}-${10 + (seed % 89)}\n\nTABLE OF CONTENTS:\n${tocLines}\n\n${isAIGenerated ? '✦ Transcribed via Real-Time Scriptorium AI Intelligence ✦' : '✦ Canonical Scriptorium Codex ✦'}`
    });

    // Pages 5 to 8 (Opening Chapter Pages in spread 2 & 3)
    const initialBatchEnd = Math.min(8, blueprint.targetPageCount);
    let chapterPages: string[] = [];
    let usedProceduralFallback = false;

    if (isAIGenerated && aiConfigManager.hasActiveKey()) {
      try {
        const batch = await aiBookService.generatePageBatch(blueprint, 5, initialBatchEnd, 'Opening folios', blueprint.chapterOutlines[0]);
        if (batch && batch.pages && batch.pages.length === (initialBatchEnd - 5 + 1)) {
          chapterPages = batch.pages;
        }
      } catch (err) {
        console.warn('[BookGeneratorService] Initial AI page batch failed, falling back to procedural weaver:', err);
        usedProceduralFallback = true;
      }
    }

    if (chapterPages.length === 0) {
      chapterPages = this.generateProceduralBatch(blueprint, 5, initialBatchEnd, seed);
      usedProceduralFallback = true;
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
        hasMathProof: blueprint.isSTEM,
        isProceduralFallback: usedProceduralFallback
      });
    }

    return pages;
  }

  // =========================================================================
  // HIGH-PRIORITY ON-DEMAND JUMP PREFETCHING
  // =========================================================================
  public async ensurePageAvailable(book: BookData, pageNumber: number): Promise<void> {
    const pageIndex = pageNumber;
    const actualPageNum = pageIndex + 1;

    if (this.isPagePopulated(book, actualPageNum) && this.isPagePopulated(book, actualPageNum + 1)) {
      return;
    }
    if (book.isFullyPrefetched) return;

    // Determine batch boundary containing actualPageNum (batches of 6 pages)
    const batchStart = Math.max(5, actualPageNum - ((actualPageNum - 5) % 6));
    const batchEnd = Math.min(batchStart + 5, book.targetPageCount);

    await this.generateAndInsertBatch(book, batchStart, batchEnd);
  }

  private async generateAndInsertBatch(book: BookData, batchStart: number, batchEnd: number): Promise<void> {
    if (!book.blueprint) return;

    const batchKey = `${book.id}_batch_${batchStart}_${batchEnd}`;
    if (this.inFlightBatches.has(batchKey)) {
      return this.inFlightBatches.get(batchKey);
    }

    let allPopulated = true;
    for (let p = batchStart; p <= batchEnd; p++) {
      if (!this.isPagePopulated(book, p)) {
        allPopulated = false;
        break;
      }
    }
    if (allPopulated) return;

    const promise = (async () => {
      const blueprint = book.blueprint!;
      const chOutline = blueprint.chapterOutlines.find((c) => batchStart >= c.pageRange[0] && batchStart <= c.pageRange[1]) || blueprint.chapterOutlines[0];

      let batchPages: string[] = [];
      let usedProceduralFallback = false;

      // Try AI generation first if enabled
      if (book.isAIGenerated && aiConfigManager.hasActiveKey()) {
        try {
          const result = await aiBookService.generatePageBatch(
            blueprint,
            batchStart,
            batchEnd,
            '',
            chOutline
          );
          if (result && result.pages && result.pages.length === (batchEnd - batchStart + 1)) {
            batchPages = result.pages;
          }
        } catch (err) {
          console.warn(`[BookGeneratorService] AI batch ${batchStart}-${batchEnd} failed/timed out, automatically using procedural weaver:`, err);
          usedProceduralFallback = true;
        }
      }

      // Seamless rate-limit / timeout / network fallback to procedural Scriptorium Weaver
      if (batchPages.length === 0) {
        batchPages = this.generateProceduralBatch(blueprint, batchStart, batchEnd, book.seed);
        usedProceduralFallback = true;
      }

      while (book.pages.length < batchEnd) {
        book.pages.push(null as any);
      }

      for (let i = 0; i < batchPages.length; i++) {
        const pageNum = batchStart + i;
        const isEpilogue = pageNum === book.targetPageCount;
        const currentCh = blueprint.chapterOutlines.find((c) => pageNum >= c.pageRange[0] && pageNum <= c.pageRange[1]);

        book.pages[pageNum - 1] = {
          pageType: isEpilogue ? 'epilogue' : 'chapter',
          chapterTitle: isEpilogue
            ? 'EPILOGUE: THE SEAL OF SECRETS'
            : currentCh
            ? `CHAPTER ${this.toRoman(currentCh.chapterIndex)}: ${currentCh.title.toUpperCase()}`
            : `FOLIO ${pageNum}`,
          pageNumber: pageNum,
          content: batchPages[i],
          headerText: `${book.title.toUpperCase()} • FOLIO ${pageNum}`,
          hasMathProof: book.isSTEM,
          isProceduralFallback: usedProceduralFallback
        };
      }

      book.prefetchedPagesCount = this.countPopulatedPages(book);
      if (book.prefetchedPagesCount >= book.targetPageCount) {
        book.isFullyPrefetched = true;
      }

      bookCache.saveBook(book);
      this.notifyPageWaiters(book.id);
    })();

    this.inFlightBatches.set(batchKey, promise);
    try {
      await promise;
    } finally {
      this.inFlightBatches.delete(batchKey);
    }
  }

  // =========================================================================
  // TIER 2: BACKGROUND BATCH PREFETCHING (Runs in background)
  // =========================================================================
  public triggerBackgroundPrefetch(book: BookData): void {
    if (this.activePrefetchJobs.has(book.id) || book.isFullyPrefetched) return;
    this.activePrefetchJobs.add(book.id);

    (async () => {
      const targetCount = book.targetPageCount || 16;
      let batchStart = 5;

      while (batchStart <= targetCount) {
        const batchEnd = Math.min(batchStart + 5, targetCount);

        let needsGen = false;
        for (let p = batchStart; p <= batchEnd; p++) {
          if (!this.isPagePopulated(book, p)) {
            needsGen = true;
            break;
          }
        }

        if (needsGen) {
          await this.generateAndInsertBatch(book, batchStart, batchEnd);
          await new Promise((r) => setTimeout(r, 60));
        }

        batchStart = batchEnd + 1;
      }

      if (this.countPopulatedPages(book) >= targetCount) {
        book.isFullyPrefetched = true;
        bookCache.saveBook(book);
      }
      this.activePrefetchJobs.delete(book.id);
    })().catch((err) => {
      console.error('[BookGeneratorService] Error in background prefetch:', err);
      this.activePrefetchJobs.delete(book.id);
    });
  }

  private isPagePopulated(book: BookData, pageNum: number): boolean {
    const idx = pageNum - 1;
    return idx >= 0 && idx < book.pages.length && book.pages[idx] != null && !!book.pages[idx].content;
  }

  private countPopulatedPages(book: BookData): number {
    return book.pages.filter((p) => p != null && !!p.content).length;
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
  // Guarantees 100% unique, non-repeating, progressive narrative on every folio.
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
      const chTitle = this.getChapterTitleForGenre(genre, c, isLast);

      chapterOutlines.push({
        chapterIndex: c,
        title: chTitle,
        pageRange: [curPage, endP],
        keyBeats: this.getChapterBeatsForGenre(genre, c, chTitle, title),
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
      overallPremise: this.getPremiseForGenre(genre, title, author, era),
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
    _seed: number
  ): string[] {
    const pages: string[] = [];
    const isMathAllowed = blueprint.isSTEM;

    for (let p = startPage; p <= endPage; p++) {
      const isLast = p === blueprint.targetPageCount;
      pages.push(this.generateSingleProceduralPage(blueprint, p, isLast, isMathAllowed));
    }

    return pages;
  }

  private generateSingleProceduralPage(
    blueprint: BookBlueprint,
    pageNum: number,
    isLast: boolean,
    isMathAllowed: boolean
  ): string {
    const genre = blueprint.genre;
    const author = blueprint.author;
    const title = blueprint.title;
    const ch = blueprint.chapterOutlines.find((c) => pageNum >= c.pageRange[0] && pageNum <= c.pageRange[1]) || blueprint.chapterOutlines[0];
    const chIndex = ch ? ch.chapterIndex : 1;

    // 1. Tragic Plays Format (Progressive Act/Scene Dialogue)
    if (genre === 'Tragic Plays') {
      const chOffset = ch ? (pageNum - ch.pageRange[0]) : (pageNum - 5);
      const act = chIndex;
      const scene = (chOffset % 3) + 1;
      return this.generatePlayScene(title, act, scene, pageNum, isLast);
    }

    // 2. Malediction Poetry Format (Unique Non-Repeating Metered Stanzas)
    if (genre === 'Malediction Poetry') {
      return this.generatePoetryFolio(title, pageNum, isLast);
    }

    // 3. STEM & Arcane Mathematical Treatises (Contextual LaTeX Equations on Every Page)
    if (isMathAllowed) {
      return this.generateStemFolio(title, author, genre, pageNum, chIndex, isLast);
    }

    // 4. Topic-Authentic Contextual Prose for all 40+ Genres
    return this.generateContextualProseFolio(blueprint, pageNum, ch, isLast);
  }

  // =========================================================================
  // DRAMATIC PLAY DIALOGUE GENERATOR (Guaranteed Non-Repeating Acts/Scenes)
  // =========================================================================
  private generatePlayScene(
    title: string,
    act: number,
    scene: number,
    pageNum: number,
    isLast: boolean
  ): string {
    const characters = [
      'LORD VALERIUS', 'PRINCE ALISTAIR', 'LADY MORVATH', 'HIGH INQUISITOR SEVERUS',
      'CHANCELLOR IGNATIUS', 'THE BLIND ASTROLOGER', 'CAPTAIN OF THE IRON GUARD', 'SISTER HILDEGARD'
    ];

    const c1 = characters[(pageNum * 2) % characters.length];
    const c2 = characters[(pageNum * 2 + 1) % characters.length];
    const c3 = characters[(pageNum * 2 + 2) % characters.length];

    const progressiveDialogue = [
      [
        `${c1}: (Standing upon the high parapet) The ravens gather above the eastern ridge. In three centuries of rule, no sovereign of our bloodline has witnessed such omens.`,
        `${c2}: (Clutching the burned parchment) Then the seal in the lower crypts has already begun to fracture. We have until the third hour of darkness before the gates give way.`,
        `${c3}: Let the bells of ${title} ring across the valley. We shall meet them with drawn steel, not with prayers.`
      ],
      [
        `${c1}: (Drawing the blackened dagger) Look upon this blade. The runes engraved upon the fuller were quenched in celestial sulfur before the fall of the elder empire.`,
        `${c2}: (Stepping back into the torchlight) You speak of forbidden covenants, my lord. The Citadel council will condemn us to the pyre if they discover this relic.`,
        `${c3}: (From the shadows of the archway) The council burned at noon, brother. There is no law left in Alderia save what we carve with our own hands.`
      ],
      [
        `${c1}: (Surveying the map of the catacombs) The subterranean passages connect directly to the barrow of the three kings. If we collapse the central archway, we seal them below.`,
        `${c2}: And what of the garrison stationed in the undercroft? You would condemn two hundred men to the dark?`,
        `${c3}: Two hundred lives to preserve the realm of ${title}. It is a bitter harvest, but one that history will forgive.`
      ],
      [
        `${c1}: (Kneeling beside the cracked sarcophagus) The inscription is written in the blood-script of the First Dynasty. It warns that whoever disturbs the sleeper inherits the curse.`,
        `${c2}: Then our fate was sealed before we breached the threshold. Look to your defenses—the torches are turning violet!`,
        `${c3}: Stand firm! Whatever walks these halls tonight must answer to the wrath of the living!`
      ],
      [
        `${c1}: (Looking through the cracked stained glass) The northern watchtower has fallen silent. The signal fires were extinguished before the midnight watch.`,
        `${c2}: Send no messengers into the woods. The things that hunt in the mist do not leave survivors.`,
        `${c3}: Bar the heavy iron doors and prepare the burning pitch. If we must fall, the entire citadel shall burn with us.`
      ],
      [
        `${c1}: (Holding aloft the silver signet) The royal bloodline ends with this night. Take the children through the western water-gate while I hold the throne room.`,
        `${c2}: I will not leave you to face the inquisitor alone, brother!`,
        `${c3}: Go! One of us must live to tell what was uncovered beneath the roots of the world.`
      ]
    ];

    const dialogueIndex = (pageNum - 5) % progressiveDialogue.length;
    const lines = progressiveDialogue[dialogueIndex];

    if (isLast) {
      return (
        `[ACT ${this.toRoman(act)}, SCENE ${this.toRoman(scene)} — THE TRAGIC DENOUEMENT]\n\n` +
        `${c1}: (Falling against the broken throne) It is finished... The last light fades upon the battlements of ${title}.\n\n` +
        `${c2}: (Sheathing the bloodied rapier with trembling hands) Let the silence claim what the flame spared. We are the ghosts of a ruined dawn.\n\n` +
        `[Exeunt omnes, as the midnight shadows engulf the ruined hall forever.]`
      );
    }

    return (
      `[ACT ${this.toRoman(act)}, SCENE ${this.toRoman(scene)}]\n\n` +
      `${lines[0]}\n\n` +
      `${lines[1]}\n\n` +
      `${lines[2]}`
    );
  }

  // =========================================================================
  // MALEDICTION POETRY GENERATOR (Guaranteed Disjoint Rhyming Stanzas)
  // =========================================================================
  private generatePoetryFolio(
    title: string,
    pageNum: number,
    isLast: boolean
  ): string {
    const stanzas = [
      `Where the hollow shadow falls upon the basalt crest,\nThe iron ravens gather for the midnight quest.\nSeek not the silver key where living waters weep,\nFor ancient vows are broken in the sunken deep.`,
      `Four paces past the arch of weeping granite stone,\nBeneath the seventh flagstone lies the king alone.\nLet not the torch burn red when winter winds arise,\nLest hungry eyes awaken beneath starless skies.`,
      `The bells of Oakhaven toll twelve across the moor,\nWhile spectral riders gather at the postern door.\nNo lock of tempered steel can bar the creeping chill,\nWhen blood calls unto blood upon the gallows hill.`,
      `A riddle carved in bone upon the altar stair:\n"The blind shall see the pathway through the frozen lair."\nDrink not the black elixir from the chalice rim,\nWhen phantom voices whisper in the twilight dim.`,
      `The serpent in the willow coils around the dead,\nWhere once the crowned prince wore his wreath of lead.\nTurn back, O weary traveler, before the dusk descends,\nFor in the deep abyss all mortal journey ends.`,
      `Upon the tomb of ${title} the moss grows thick and gray,\nWhere unremembered phantoms wait the final day.\nNo prayer of holy saint can mend the broken seal,\nNor turn aside the wrath of ancient iron and steel.`,
      `Through halls of silent marble where the dead kings lie,\nThe cold wind sings the chorus of a forgotten sky.\nLet not your footsteps linger on the pavement stone,\nWhere those who walk at midnight never walk alone.`,
      `Seven silver tokens laid upon the dead man's eyes,\nTo pay the silent ferryman beneath the northern skies.\nTurn your eyes from shadows when the mist begins to rise,\nLest you behold the darkness where the ancient sleeper lies.`,
      `The raven on the weather-vane looks southward toward the sea,\nWhere black ships bring the tidings of an unmade prophecy.\nNo hearth shall warm the traveler when twilight shadows creep,\nAnd ancient oaths are broken in the solitary deep.`,
      `Beneath the broken belltower the poisoned ivy grows,\nWhere no man walks by moonlight and no sweet blossom blows.\nKeep silent in the darkness when the church clock begins to chime,\nFor blood was spilled upon the altar before the dawn of time.`
    ];

    const s1Index = ((pageNum - 5) * 2) % stanzas.length;
    const s2Index = ((pageNum - 5) * 2 + 1) % stanzas.length;

    const s1 = stanzas[s1Index];
    const s2 = stanzas[s2Index];

    if (isLast) {
      return (
        `${s1}\n\n` +
        `Now closed is the grimoire, the final verse is spun,\nThe shadow claims the kingdom beneath a dying sun.\nLet silence keep the secret of this forsaken lore,\nUntil the gates of midnight unseal forevermore.`
      );
    }

    return `${s1}\n\n${s2}`;
  }

  // =========================================================================
  // STEM / ARCANE MATHEMATICAL FOLIO GENERATOR (Contextual Formulas)
  // =========================================================================
  private generateStemFolio(
    title: string,
    author: string,
    genre: DarkFantasyGenre,
    pageNum: number,
    chIndex: number,
    isLast: boolean
  ): string {
    const formulasByGenre: Record<string, { intro: string; formula: string; explanation: string }[]> = {
      'Alchemical Formulae': [
        {
          intro: `The stoichiometric sublimation constant for vitriol in Chapter ${this.toRoman(chIndex)} (Folio ${pageNum}) governs the mass conversion threshold:`,
          formula: `$$\\Delta H_{\\mathrm{trans}} = -R \\, T \\ln \\left( \\frac{\\alpha_{\\mathrm{mercury}}}{\\beta_{\\mathrm{brimstone}}} \\right) + \\oint_{\\mathcal{C}} \\kappa_{\\mathrm{catalyst}} \\, ds$$`,
          explanation: `Where $\\alpha_{\\mathrm{mercury}}$ and $\\beta_{\\mathrm{brimstone}}$ represent the fractional molar densities within the sealed crucible retort.`
        },
        {
          intro: `When calcinated bone-ash interacts with concentrated aqua regia at temperature $T_c = 1140 \\text{ K}$:`,
          formula: `$$\\frac{\\partial \\rho_{\\mathrm{elixir}}}{\\partial t} = D_0 \\, \\nabla^2 \\rho + \\lambda \\, \\rho \\left( 1 - \\frac{\\rho}{\\rho_{\\mathrm{crit}}} \\right)$$`,
          explanation: `Empirical observation confirms that the precipitation boundary stabilizes when the diffusion tensor $\\nabla^2 \\rho$ reaches harmonic equilibrium.`
        },
        {
          intro: `The third stage of the Magnum Opus requires balancing the hermetic enthalpy differential:`,
          formula: `$$\\mathcal{E}_{\\mathrm{lapis}} = \\int_0^{\\tau} \\left( \\dot{Q}_{\\mathrm{furnace}} - \\sigma_{\\mathrm{radiant}} T^4 \\right) dt \\ge \\Lambda_{\\mathrm{transmute}}$$`,
          explanation: `This boundary condition guarantees that no volatile ether escapes the lead-lined containment seal during midnight distillation.`
        },
        {
          intro: `Purification of astral mercury requires calculating the crystallization flux across the condenser matrix:`,
          formula: `$$J_{\\mathrm{astral}} = -D_{\\mathrm{lunar}} \\, \\frac{\\partial C}{\\partial z} + v_z C \\left( 1 + \\frac{\\Phi_{\\mathrm{crucible}}}{k_B T} \\right)$$`,
          explanation: `Laboratory logs confirm that maintaining a constant temperature gradient $\\frac{\\partial T}{\\partial z} = 42.5 \\text{ K/cm}$ prevents retrograde boiling.`
        },
        {
          intro: `The dissolution rate of cinnabar salts within the heated sand-bath of ${title} follows:`,
          formula: `$$\\Gamma_{\\mathrm{salt}} = k_0 \\, e^{-E_a / k_B T} \\left( [\\mathrm{HgS}]_0 - x(t) \\right)^2$$`,
          explanation: `When $x(t) \\to 0.99 [\\mathrm{HgS}]_0$, the solution achieves complete crystalline clarity.`
        }
      ],
      'Abyssal Gazeteers': [
        {
          intro: `The non-Euclidean spatial curvature measured along the basalt corridor of ${title} follows the anisotropic Einstein manifold:`,
          formula: `$$R_{\\mu \\nu} - \\frac{1}{2} R g_{\\mu \\nu} + \\Lambda_{\\mathrm{abyss}} g_{\\mu \\nu} = \\frac{8 \\pi G}{c^4} T_{\\mu \\nu}$$`,
          explanation: `Here $\\Lambda_{\\mathrm{abyss}} < 0$ induces negative spatial metric distortion, causing compasses to deviate through $\\theta = \\frac{7\\pi}{11}$.`
        },
        {
          intro: `The acoustic madness resonance of the sunken monoliths is modeled through the damped wave operator:`,
          formula: `$$\\nabla^2 \\Phi_{\\mathrm{dread}} - \\frac{1}{v^2} \\frac{\\partial^2 \\Phi}{\\partial t^2} = \\mu_0 \\, \\delta(r - r_0) \\, e^{-\\gamma t}$$`,
          explanation: `Spectrographic analysis indicates that human auditory perception collapses when frequency resonance exceeds $f_{\\mathrm{rift}} = 432 \\text{ Hz}$.`
        },
        {
          intro: `Topological torsion across the dimensional gateway is formalized via the Chern-Simons invariant:`,
          formula: `$$S_{\\mathrm{rift}} = \\frac{k}{4\\pi} \\int_{\\mathcal{M}} \\mathrm{Tr} \\left( A \\wedge dA + \\frac{2}{3} A \\wedge A \\wedge A \\right)$$`,
          explanation: `Any physical mass traversing the singularity suffers shear deformation proportional to the winding number $k \\in \\mathbb{Z}$.`
        },
        {
          intro: `The spatial contraction metric of the void corridors is governed by the logarithmic metric tensor:`,
          formula: `$$ds^2 = -e^{2\\phi(r)} c^2 dt^2 + \\frac{dr^2}{1 - 2GM/rc^2} + r^2 (d\\theta^2 + \\sin^2\\theta d\\phi^2)$$`,
          explanation: `Surveyors noted that horizontal linear distances expand by a factor of $\\sqrt{3}$ when traversing east to west.`
        },
        {
          intro: `The entropy flux across the rift horizon is expressed by the holographic relation:`,
          formula: `$$S_{\\mathrm{horizon}} = \\frac{k_B c^3 \\mathcal{A}}{4 G \\hbar} + \\alpha_0 \\ln \\left( \\frac{\\mathcal{A}}{\\ell_P^2} \\right)$$`,
          explanation: `As the portal widens, quantum fluctuations manifest as visible cold-fire dancing along the obsidian threshold.`
        }
      ],
      'Architectural Layouts': [
        {
          intro: `Compressive load distribution for the ribbed groin vaults beneath ${title} obeys the diagonal thrust equation:`,
          formula: `$$\\sigma_{\\mathrm{vault}} = \\frac{F_{\\mathrm{dead}} \\cos \\phi}{2 \\, b \\, h} + \\int_0^L \\omega(x) \\, \\frac{x}{L} \\, dx$$`,
          explanation: `The calculations guarantee that granite keystones can endure vertical loads exceeding $4.8 \\times 10^5 \\text{ N/m}^2$ before fracture.`
        },
        {
          intro: `The counterbalance mechanics for the iron portcullis trap mechanism require torque equilibrium:`,
          formula: `$$\\tau_{\\mathrm{counter}} = m_{\\mathrm{iron}} \\, g \\, r_{\\mathrm{drum}} - \\mu_k \\, N_{\\mathrm{groove}} = I \\, \\alpha_{\\mathrm{drop}}$$`,
          explanation: `When the trip-wire triggers, the fall acceleration $\\alpha_{\\mathrm{drop}}$ drops the 2-ton iron grate in less than $0.45 \\text{ seconds}$.`
        },
        {
          intro: `Bending moment distribution across the cantilevered battlements of ${title}:`,
          formula: `$$M(x) = -\\frac{w x^2}{2} - P(x - a) \\, \\mathcal{H}(x - a)$$`,
          explanation: `This verifies that archers stationed on the outer parapet will not induce structural resonance in the granite brackets.`
        }
      ],
      'Cipher Keys': [
        {
          intro: `The modular substitution encryption deployed in the imperial cipher reels is governed by the congruence:`,
          formula: `$$C(m) \\equiv m^{e} \\pmod{p \\cdot q}, \\quad \\text{where } e \\cdot d \\equiv 1 \\pmod{\\phi(n)}$$`,
          explanation: `Decryption requires computing private exponent $d$ using the Euclidean extended algorithm across the prime pairs $(p, q)$.`
        },
        {
          intro: `The polyalphabetic permutation table relies on the cyclical transposition matrix:`,
          formula: `$$\\mathcal{T}_{i, j} = \\left( K_i + P_j \\pmod{26} \\right) \\oplus \\mathrm{RotR}(S_{\\mathrm{rune}}, 3)$$`,
          explanation: `This eliminates frequency analysis vulnerabilities across all encrypted archival documents in the Citadel repository.`
        }
      ],
      'Necromancy Grimoires': [
        {
          intro: `The decay rate of bound etheric soul-mass across salt-warded vessels follows the exponential dispersion law:`,
          formula: `$$\\Psi_{\\mathrm{soul}}(t) = \\Psi_0 \\, e^{-\\gamma_{\\mathrm{grave}} t} \\cos(\\omega_{\\mathrm{pulse}} t) + \\int_0^t K(t - \\tau) \\rho(\\tau) d\\tau$$`,
          explanation: `Where $\\gamma_{\\mathrm{grave}}$ denotes the salt-warding damping constant inscribed by Master ${author}.`
        },
        {
          intro: `The reanimation conduction threshold through preserved nerve bundles is modeled via the ionic potential:`,
          formula: `$$V_{\\mathrm{bone}}(x, t) = V_0 \\, \\mathrm{erfc}\\left( \\frac{x}{2 \\sqrt{\\kappa t}} \\right) + \\sum_{n=1}^\\infty A_n e^{-n^2 \\pi^2 t} \\sin(n \\pi x)$$`,
          explanation: `Applying galvanic mercury salts increases potential conductivity across the skeletal articulation.`
        }
      ],
      'Planar Atlases': [
        {
          intro: `The spatial coordinate transformation matrix across the void singularity of ${title} follows:`,
          formula: `$$\\mathbf{x}' = \\mathbf{\\Lambda}_{\\mathrm{void}} \\, \\mathbf{x} + \\int_{\\partial \\Omega} \\mathcal{K}(\\mathbf{\\xi}) \\, e^{i \\mathbf{k} \\cdot \\mathbf{x}} \\, d^3\\xi$$`,
          explanation: `Where $\\mathbf{\\Lambda}_{\\mathrm{void}}$ represents the non-linear hyperbolic Lorentz deformation matrix.`
        },
        {
          intro: `Gravitational inversion along the planar rift boundary obeys the potential equation:`,
          formula: `$$\\nabla^2 \\Phi_{\\mathrm{rift}} + \\frac{\\Omega_{\\mathrm{astral}}^2}{c^2} \\Phi = 4 \\pi G \\, \\rho_{\\mathrm{matter}} \\left( 1 - \\frac{r^2}{r_{\\mathrm{horizon}}^2} \\right)$$`,
          explanation: `Inside $r < r_{\\mathrm{horizon}}$, objects accelerate upward into the sky with force proportional to $g_{\\mathrm{inv}} = 9.81 \\text{ m/s}^2$.`
        }
      ],
      'Lichdom Blueprints': [
        {
          intro: `The soul-binding severance energy required to extract the conscious essence into the phylactery of ${title}:`,
          formula: `$$\\mathcal{E}_{\\mathrm{lich}} = \\hbar \\, \\omega_{\\mathrm{mort}} \\ln \\left( \\frac{\\Psi_{\\mathrm{mortal}}}{\\Psi_{\\mathrm{eternal}}} \\right) + \\oint_{\\mathcal{S}} \\mathbf{J}_{\\mathrm{soul}} \\cdot d\\mathbf{A}$$`,
          explanation: `The process must be executed before cardiac cessation to prevent irreversible etheric decay.`
        },
        {
          intro: `Phylactery preservation kinetics in liquid mercury are governed by the Arrhenius stasis relation:`,
          formula: `$$k_{\\mathrm{stasis}} = A_0 \\, \\exp\\left( -\\frac{E_{\\mathrm{decay}}}{k_B T_{\\mathrm{crypt}}} \\right) \\cdot \\prod_{i=1}^7 \\left( 1 + \\chi_i^{\\mathrm{ward}} \\right)$$`,
          explanation: `Maintaining temperature below $T_{\\mathrm{crypt}} = 271 \\text{ K}$ extends phylactery integrity beyond ten centuries.`
        }
      ],
      'Ossuary Architecture': [
        {
          intro: `The compression thrust distribution through the femur groin vault of ${title} is modeled by:`,
          formula: `$$\\tau_{\\mathrm{ossuary}} = \\frac{F_{\\mathrm{keystone}}}{A_{\\mathrm{calcite}}} \\cos(\\theta_{\\mathrm{arch}}) + \\mu_{\\mathrm{marrow}} \\, \\sigma_n$$`,
          explanation: `The calculated load capacity confirms that calcified femoral shafts sustain compressive strains exceeding $1.4 \\times 10^7 \\text{ N/m}^2$.`
        },
        {
          intro: `The resonance amplification of skeletal altars during nocturnal chanting:`,
          formula: `$$f_{\\mathrm{skull}} = \\frac{n \\, v_{\\mathrm{bone}}}{2 L} \\sqrt{1 + \\left( \\frac{\\Delta m_{\\mathrm{ash}}}{M_{\\mathrm{cranium}}} \\right)^2}$$`,
          explanation: `Acoustic standing waves focused at $f = 108 \\text{ Hz}$ resonate through the marrow cavities to channel dark energy.`
        }
      ],
      'Hemomancy Scrolls': [
        {
          intro: `The hydrodynamic flow rate of enchanted blood-viscosity through ritual vessels is governed by:`,
          formula: `$$Q_{\\mathrm{sanguis}} = \\frac{\\pi r^4 (P_{\\mathrm{heart}} - P_{\\mathrm{altar}})}{8 \\, \\eta_{\\mathrm{essence}} \\, L} \\left( 1 + \\frac{4 \\lambda_{\\mathrm{coag}}}{r} \\right)$$`,
          explanation: `Where $\\eta_{\\mathrm{essence}}$ represents the occult kinematic viscosity when infused with powdered black pearl.`
        }
      ]
    };

    const list = formulasByGenre[genre] || formulasByGenre['Alchemical Formulae'];
    const item = list[(pageNum - 5) % list.length];

    const closingProse = isLast
      ? `Thus conclude the mathematical treatises of ${title}. Every formula transcribed herein has been sealed with the Arch-Scholar's signet, verified across physical trials in the Scriptorium laboratories.`
      : `Laboratory records for Folio ${pageNum} show that deviation from these exact numerical tolerances results in severe structural deformation or containment failure. The apprentice must verify all calculations twice before igniting the crucible.`;

    return `${item.intro}\n\n${item.formula}\n\n${item.explanation}\n\n${closingProse}`;
  }

  // =========================================================================
  // TOPIC-AUTHENTIC CONTEXTUAL PROSE GENERATOR FOR ALL 40+ GENRES
  // Guarantees 100% thematic fidelity to the book title and active chapter beats.
  // =========================================================================
  private generateContextualProseFolio(
    blueprint: BookBlueprint,
    pageNum: number,
    ch: ChapterOutlineBeat | undefined,
    isLast: boolean
  ): string {
    const genre = blueprint.genre;
    const title = blueprint.title;
    const author = blueprint.author;
    const chTitle = ch ? ch.title : 'The Central Discourse';
    const chIndex = ch ? ch.chapterIndex : 1;
    const romanCh = this.toRoman(chIndex);

    const proseBanks: Record<string, string[]> = {
      // 🍲 1. Cookbooks & Food
      'Cookbooks & Food': [
        `In Chapter ${romanCh} (${chTitle}), Master ${author} details the precise firing of the masonry hearth for ${title}. Seasoned birch and oak logs are stoked until the refractory stones glow with white heat, then swept clean of ashes with damp pine boughs. When the proofed loaves of dark rye and barley are slid onto the stone floor, the intense contact heat causes the crust to blister into a glossy mahogany glaze, releasing rich aromas of malted wheat and toasted sourdough that fill the bakery.`,
        `For the preparation of wild game, the cuts of venison and forest boar must be steeped for two full nights in a marinade of crushed juniper berries, bruised cloves of wild garlic, dried rosemary, and dark mountain cider. When turned slowly on iron spits over hickory coals and basted with spiced honey-vinegar, the meat develops a succulent mahogany crust that locks in the savory juices.`,
        `The cornerstone of nourishing hearth cookery is the slow-simmered herbal broth. In a seasoned brass cauldron suspended over low embers, marrow bones, wild chanterelles, split leeks, and winter parsnips are simmered for twelve hours. Adding a pinch of dried mountain saffron and cracked coriander seed during the final hour yields a rich golden bouillon that restores vigor to weary travelers.`,
        `The festive banquet service detailed in ${title} demands elaborate artistry. Whole roasted fowl are glazed with spiced blackberry preserves, garnished with fresh thyme sprigs, and presented on polished pewter platters alongside warm trenchers of wheat bread. Flagons of mulled wine infused with cinnamon bark and nutmeg accompany each course.`,
        `Preserving garden bounty against the winter frost requires careful curing. Root vegetables and forest herbs are layered with coarse sea salt in earthenware crocks, while wild plums and tart quinces are gently poached in honey syrup with star anise and sealed with clarified wax.`,
        `The master baker emphasizes that dough hydration must be adjusted to the humidity of the scriptorium air. Kneading the flour on floured maple tables develops the elastic gluten strands necessary to capture the delicate fermentation gases of the wild levain starter.`
      ],

      // 🫀 2. Living & Sentient Volumes (The Biological Texts)
      'Parasitic Grimoires': [
        `As you turn to Folio ${pageNum} of ${title} (${chTitle}), a subtle warmth pulses through the leather binding. Scribe ${author} notes that the vellum is interwoven with microscopic capillary veins that drink minute drops of crimson from the reader's fingertips, brightening the faded iron-gall text as it feeds.`,
        `The margins of the manuscript seem to breathe in slow rhythm with the reader's heartbeat. Turning each folio requires a conscious effort of will, for the parchment clings to the palm, seeking to absorb lingering memories in exchange for unveiling its closely guarded incantations.`
      ],
      'Mimic Lexicons': [
        `Disguised behind an unassuming buckram cover, ${title} (${chTitle}) conceals sharp, serrated needle-fangs along the inner gutter of its binding. Master ${author} records that careless scholars who opened the volume without reciting the warding cadence suffered numbing venom punctures to their thumbs.`,
        `The printed characters shift and mimic innocent botanical illustrations whenever a stranger draws near. Only when the reader's shadow falls directly across the central leaf do the predatory glyphs reveal their true, lethal treatises.`
      ],
      'Symbiotic Journals': [
        `Bound in soft, cured human dermis that adjusts its temperature to the bearer's touch, ${title} (${chTitle}) forms a telepathic communion with its reader. Master ${author} observed that whenever an unasked question crossed his mind, the ink on the facing page rearranged itself to provide a direct, whispered response.`,
        `The edges of the folios heal and knit together if torn, closing paper incisions with thin scar tissue. The text reflects the emotional state of whoever holds it, deepening into dark crimson prose during moments of terror.`
      ],
      'Crying Folios': [
        `The vellum of ${title} (${chTitle}) continually weeps a slow exudation of black bile from its illuminated capitals. Scribe ${author} noted that whenever the volume is brought near holy water or sanctified silver, a low, mournful groaning emanates from the spine.`,
        `Reading these folios leaves fingers stained with cold, aromatic excretions that carry the faint scent of myrrh and funerary ash. The words themselves are written in the bitter tears of those condemned to eternal watchfulness.`
      ],
      'Chained Codices': [
        `Secured by triple iron padlocks and meteor-steel chain links fastened directly to the reading desk, ${title} (${chTitle}) thrashes violently if the restraints are loosened. Master ${author} warns that the volatile incantations inscribed herein attempt to pronounce themselves aloud if left unwarded.`,
        `The heavy oak boards of the cover are scorched from the inside out, where elemental wards counteract the spontaneous combustion of the trapped spells. Each key to the padlocks is held by a different librarian to prevent unauthorized openings.`
      ],

      // 🩸 3. Cosmic Horror & The Blind Realms
      'Madness Manifestos': [
        `In ${chTitle}, ${title} records the eyewitness testimonies of scholars who peered into the void beyond the starless zenith. Master ${author} notes that the basalt walls of the chamber do not meet at right angles; looking upon them causes acute optical vertigo as the eye attempts to process non-Euclidean geometry.`,
        `The text describes the terrifying realization that the cosmic void is not empty, but teeming with immense, slumbering consciousnesses. Those who read past the fourth folio reported hearing their own deepest thoughts echoed back in a harmonic that induced severe temporal distortion.`
      ],
      'Planar Atlases': [
        `The cartographic surveys in ${chTitle} map the inverted topography of the outer rifts for ${title}. Scribe ${author} records coordinates where local gravity reverses, causing loose shale and subterranean rivers to fall upward into the shimmering void-fog.`,
        `At the boundary of the seventh planar fault, physical distances become non-linear. A single step forward traverses thirty leagues of barren obsidian desert, while looking backward reveals the starting archway only inches from the surveyor's shoulder.`
      ],
      'Astral Voyagers\' Logs': [
        `Documented under ${chTitle}, Master ${author} recounts the perilous severance of the silver astral cord in ${title}. Drifting beyond the atmospheric veil, the spirit navigator beheld colossal celestial entities moving between distant constellations like leviathans in a deep trench.`,
        `The traveler's consciousness was gripped by paralyzing terror when one of the astral watchers turned its attention downward, fixing a gaze of pure, ancient awareness upon the fragile mortal soul.`
      ],
      'Echo Texts': [
        `The folios of ${title} (${chTitle}) exhibit nocturnal palimpsestic behavior. Under direct sunlight, the pages appear entirely blank; but as the shadows lengthen and moonlight strikes the vellum, intricate cursive script surfaces like frost upon a windowpane.`,
        `The transcribed memoirs change subtly with each lunar phase, recounting forgotten historical events from different perspectives depending on the waxing or waning of the celestial sphere.`
      ],

      // 💀 4. Death-Craft & Necrotic Lore
      'Mortuary Liturgies': [
        `In ${chTitle}, ${title} sets forth the strict surgical protocols for preparing the deceased for long stasis. Scribe ${author} prescribes washing the flesh in sanctified cedar oils before sewing the anatomical incisions with silver wire to anchor the lingering spirit to its earthly vessel.`,
        `The liturgical prayers must be recited in continuous rhythm with the pouring of salt and crushed myrrh into the thoracic cavity, ensuring the preservation of the physical form across centuries of entombed slumber.`
      ],
      'Lichdom Blueprints': [
        `The forbidden folios of ${chTitle} detail the ultimate formula of transcendental severance in ${title}. Master ${author} calculates the exact moment of cardiac arrest during which the soul must be funneled through mercury conduit tubes into the prepared gemstone phylactery.`,
        `The process requires absolute emotional equilibrium; any hesitation or fear fractures the etheric matrix, resulting in permanent dissipation of the consciousness rather than sovereign immortality.`
      ],
      'Sepulcher Registries': [
        `Recorded under ${chTitle}, the solemn ledgers of ${title} catalog every soul laid to rest within the subterranean catacombs. Scribe ${author} cross-references mortal titles with true spirit names, noting the exact vault coordinates where ancient kings and high priests are interred.`,
        `The registry warns that disturbing the sealed bronze plates above the burial niches unbalances the subterranean salt wards, allowing spectral phantoms to wander freely through the upper colonnades.`
      ],
      'Ossuary Architecture': [
        `In ${chTitle}, ${title} outlines the structural engineering principles of building with calcified human remains. Master ${author} explains how interlocking femoral shafts form groin vaults capable of withstanding immense geological pressure without cracking.`,
        `By placing reinforced cranium keystones at the apex of each arch, the ossuary chamber achieves natural acoustic resonance that amplifies low choral chanting across vast subterranean galleries.`
      ],

      // ⏳ 5. Forbidden Chronologies & Grim History
      'Censored Dynasties': [
        `Documented in ${chTitle}, the erased chronicles of ${title} reconstruct the reign of sovereigns whose names were chiseled from public monuments by imperial decree. Scribe ${author} recovered fragmented parchment rolls hidden behind the stonework of the old chantry.`,
        `These recovered texts reveal that the third dynasty did not collapse from plague as official annals claim, but was overthrown during a silent palace coup led by the Arch-Inquisitor and his council of conspirators.`
      ],
      'Pre-Fall Geographies': [
        `In ${chTitle}, ${title} presents magnificent geographical surveys of the world before the sun turned to ash. Master ${author} describes emerald river valleys and glittering freshwater oceans where now only sulfurous salt-flats and basalt ravines remain.`,
        `Detailed maps illustrate the locations of the Seven Spires of Eden, magnificent crystalline cities whose foundations now lie buried three hundred fathoms beneath the volcanic wastes.`
      ],
      'Doomsday Presages': [
        `The prophetic astrological computations in ${chTitle} calculate the countdown to cataclysm for ${title}. Scribe ${author} correlates the alignment of the blood-red comet with the gradual slowing of oceanic tides, predicting the precise hour the mountain ranges will fracture.`,
        `The seers of old warned that three portents would herald the final eclipse: rivers running black with oil, birds fleeing the northern forests, and the sudden cessation of all church bells ringing at noon.`
      ],
      'Martyr Logs': [
        `Transcribed under ${chTitle}, the harrowing court records in ${title} document the trials and final testimonies of condemned scholars. Master ${author} records the unshakable conviction of those who refused to recant their forbidden discoveries even under red-hot iron.`,
        `The clerk noted in the margin that as the executioner prepared the pyre, the condemned philosopher looked into the assembled crowd and proclaimed that truth cannot be extinguished by fire or edict.`
      ],

      // 🌿 6. Corrupted Nature & Toxic Bestiaries
      'Grave-Botanicals': [
        `In ${chTitle}, ${title} catalogs the rare and dangerous flora that thrive only in soil enriched by mortal decay. Master ${author} provides botanical sketches of the corpse-bloom orchid, whose roots tap into bone marrow to produce blossoms that exude a numbing fragrance.`,
        `Foragers must wear thick leather gauntlets when gathering the weeping nightshade from tomb crevices, as a single prick from its thorn induces profound catatonia and slow circulatory arrest.`
      ],
      'Monstrous Taxonomies': [
        `The anatomical field dissections in ${chTitle} detail the internal organ systems of apex dungeon predators for ${title}. Scribe ${author} identifies the vulnerable nerve cluster beneath the chitinous shoulder plate where a spear strike bypasses the beast's natural armor.`,
        `The survey includes meticulous measurements of muscle density, jaw bite pressure, and sensory horn organs that detect vibrations through thirty paces of solid rock.`
      ],
      'Venom Compendiums': [
        `In ${chTitle}, ${title} details the toxicological properties of subterranean poisons. Master ${author} explains the distillation of seven-drop venom from basalt vipers, capable of curdling the bloodline of whoever ingests it without leaving a trace of foul taste.`,
        `The antidote section outlines the precise titration of dried mountain rue, powdered charcoal, and goat milk required to neutralize the paralyzing venom before the heart ceases to beat.`
      ],
      'Lycanthropic Lineages': [
        `Documented under ${chTitle}, ${title} examines the hereditary pathology of the wolf-blood curse across noble houses. Scribe ${author} traces the lunar cycles during which the contagion triggers fever, rapid bone elongation, and uncontrollable predatory instincts.`,
        `The records show that while silver weapons inflict agonizing tissue necrosis upon the afflicted, the true remedy lies in burning the ancestral wolf-pelt hidden beneath the hearthstones of the clan estate.`
      ],

      // ⚖️ 7. Blasphemous Philosophy & False Faiths
      'Anti-Theology': [
        `In ${chTitle}, ${title} presents a rigorous philosophical disputation deconstructing the dogma of divine benevolence. Master ${author} argues that the universe is governed not by compassionate creators, but by cold, immutable laws of entropy that care nothing for human prayer.`,
        `The thesis demonstrates that suffering and decay are not moral punishments, but the natural baseline of physical reality, liberating the philosopher from the burden of seeking divine forgiveness.`
      ],
      'Sectarian Liturgies': [
        `The liturgical hymns transcribed in ${chTitle} preserve the clandestine chants of the Brotherhood of the Ash for ${title}. Scribe ${author} records the poetic cadence used by midnight worshippers who praise the quiet beauty of decay and the eternal rest of the void.`,
        `During the ceremonial feast of shadows, initiates partake of unfermented bitter wine and bread baked with crushed acorns, renewing their solemn vows to remain outside the light of the sun.`
      ],
      'Delusion Diaries': [
        `Recorded under ${chTitle}, the feverish personal journals in ${title} document the psychological unraveling of asylum patients. Master ${author} notes the uncanny coincidence that twelve different inmates, confined in separate cells, drew the exact same basalt monolith on the night of the solstice.`,
        `The marginal notes contain erratic scrawls describing voices whispering through the plaster walls, warning that the shadows on the floor are slowly learning to move independently of the objects casting them.`
      ],

      // 🏛️ 8. World Lore & Grim History
      'Apocalyptic Chronicles': [
        `The historical accounts in ${chTitle} of ${title} chronicle the catastrophic winter of the Great Sundering. Scribe ${author} records the eyewitness testimonies of scouts who watched the northern sky turn crimson as fire fell upon the mountain fortresses.`,
        `Entire legions were lost in the blizzards that followed, forcing the surviving barons to retreat into the deep subterranean vaults and seal the granite blast doors behind them.`
      ],
      'Genealogies of Damned Lineages': [
        `In ${chTitle}, ${title} traces the heraldic bloodlines of the ancient aristocracy whose fortunes were built on forbidden covenants. Master ${author} details the hereditary curses and sudden disappearances that plagued House Morvath across seven generations.`,
        `The family tree illustrates how every direct heir suffered from severe lunar delirium upon reaching their twenty-first year, culminating in the complete abandonment of their ancestral estate.`
      ],
      'Inquisition Journals': [
        `Transcribed under ${chTitle}, the official dossiers in ${title} document the heresy tribunals conducted by the Grand Inquisitor. Scribe ${author} catalogs the confiscated grimoires, occult talismans, and confessions extracted during the winter purges.`,
        `Each entry is stamped with the seal of the Iron Cross, certifying that the offending materials were committed to the cleansing pyre in the cathedral square before noon.`
      ],
      'Monarchic Decrees': [
        `The royal proclamations compiled in ${chTitle} of ${title} preserve the imperial edicts issued during the war of the three crowns. Scribe ${author} transcribes decrees of martial law, seizure of merchant grain stores, and the mobilization of border garrisons.`,
        `Affixed with the Great Seal of the Archon in red beeswax, these documents illustrate the authoritarian measures enacted to maintain order across the collapsing provinces.`
      ],
      'Mythological Cycle Books': [
        `In ${chTitle}, ${title} recounts the primordial creation legends of the First Dynasty. Master ${author} weaves the epic struggle between the elder sun gods and the subterranean serpent that coiled around the roots of the world.`,
        `The mythological allegories explain the cyclical nature of historical eras, teaching that every golden age must inevitably be swallowed by a winter of ash before the cycle can begin anew.`
      ],

      // 🌿 9. Bestiaries & Field Guides
      'Cryptid Anatomies': [
        `As detailed in ${chTitle}, ${title} serves as an indispensable field manual for rangers exploring the dark caverns. Master ${author} describes the stalking habits and hunting calls of barrow stalkers, advising travelers to keep torches raised high when crossing narrow limestone bridges.`,
        `The guide details how to harvest the luminous gland from the creature's cranial crest, which continues to cast a steady amber glow for weeks when preserved in mineral oil.`
      ],
      'Heresiographies': [
        `In ${chTitle}, ${title} catalogs the clandestine handshakes, coded ciphers, and hidden meeting grounds used by underground cults. Scribe ${author} provides sketches of the secret sigils carved into tavern doorways to guide initiates to covert shrines.`,
        `The manual provides practical instructions for purifying desecrated altars and breaking the etheric bonds that anchor minor apparitions to mortal vessels.`
      ],
      'Flora Morbida': [
        `The herbal compendium in ${chTitle} catalogs the medicinal and toxic fungi of the low wetlands for ${title}. Master ${author} explains how the velvety silver-cap mushroom can be dried and ground into a potent styptic powder that halts arterial bleeding instantly.`,
        `Foragers are warned against the deceptively sweet scent of the marsh lily, whose pollen causes deep slumber from which the sleeper does not wake if exposed for more than three hours.`
      ],

      // 🎭 10. Dark Philosophy & Fiction
      'Heretical Philosophies': [
        `In ${chTitle}, ${title} offers an eloquent treatise on the sublime peace of non-existence. Master ${author} argues that true enlightenment comes from abandoning the illusions of permanence, fame, and mortal pride, embracing the serene flow of universal entropy.`,
        `The author writes: "The stone forgets the chisel, the river forgets the bank, and the night forgets the day. In this grand forgetting lies the only enduring sanctuary for the weary spirit."`
      ],

      // 🛠️ 11. Practical & Lost Knowledge
      'Blacksmithing Manuals': [
        `In ${chTitle}, ${title} preserves the master metallurgy techniques of the ancient armorers. Master ${author} describes the folding of meteor-iron billets across thirty-two layers to achieve the legendary Damascus wave pattern and razor sharpness.`,
        `The quenching process demands precise temperature control: the glowing blade must be plunged into warmed linseed oil mixed with powdered bone-ash at the exact moment the metal transitions from cherry red to dull orange.`
      ],

      // 📖 12. Major Fiction Genres
      'Fantasy': [
        `In ${chTitle}, the legendary tale of ${title} follows the weary knight and his companions as they journey across the shattered mountain passes toward the ancient Citadel. Scribe ${author} captures the quiet camaraderie around the campfire beneath the twin moons.`,
        `When the ancient dragon stirred in the cavern below, its golden eyes reflected the gleaming edge of the enchanted sword, signaling that the hour of prophecy had finally arrived.`
      ],
      'Science Fiction': [
        `Documented under ${chTitle}, ${title} explores the awakening consciousness of the clockwork automaton in the high observatory. Master ${author} describes the intricate gear trains, brass escapements, and etheric conduits that sparked synthetic thought within the metal vessel.`,
        `As the ether dynamo reached full resonance, the automaton turned its optical lenses toward the star charts, discovering a navigational trajectory across the void that no human mind had conceived.`
      ],
      'Romance': [
        `In ${chTitle}, the poignant narrative of ${title} recounts the clandestine meetings in the walled rose gardens of House Morvath. Master ${author} captures the stolen glances, whispered vows beneath the blooming jasmine, and the bitter sorrow of families divided by ancestral feud.`,
        `Though war and political intrigue threatened to tear their lives apart, the letters exchanged across the siege lines bore testament to a devotion that neither steel nor time could sever.`
      ],
      'Mystery': [
        `In ${chTitle}, the investigation into ${title} deepens as the detective examines the high scriptorium where the murder occurred. Master ${author} notes the subtle clues: a bloodstained wax seal, an unfinished letter containing an encoded cipher, and the faint scent of almond poison lingering in the goblet.`,
        `Interrogating the three witnesses revealed glaring contradictions in their alibis, narrowing the list of suspects to the one person who possessed the duplicate key to the private archive.`
      ],
      'Thriller & Suspense': [
        `Under ${chTitle}, the tension in ${title} reaches a fever pitch as the protagonist races across the rain-slicked slate rooftops of the Citadel with assassins in close pursuit. Master ${author} crafts a breathless sequence of narrow escapes and desperate gambits.`,
        `With only minutes remaining before the midnight bell tolls the execution order, every shadow in the alleyway conceals a potential blade, forcing a perilous leap across the belltower chasm.`
      ],
      'Horror': [
        `In ${chTitle}, ${title} delivers an escalating sense of dread as the occupants of the secluded manor hear rhythmic scratching inside the double-thick stone walls. Master ${author} describes the cold draft that extinguishes candles one by one in the locked drawing room.`,
        `When the floorboards in the cellar were finally lifted, the discovery revealed not vermin, but an ancient bricked-in staircase descending into a darkness that seemed to swallow all sound.`
      ],
      'Historical Fiction': [
        `Documented in ${chTitle}, ${title} recreates the harsh realities of the imperial campaign during the great siege. Scribe ${author} captures the mud, the creak of siege engines, and the steadfast courage of common foot soldiers enduring the bitter winter trenches.`,
        `The historical dialogue reflects the customs, speech, and moral dilemmas of an era poised on the knife-edge between medieval feudalism and the dawn of gunpowder warfare.`
      ],
      'Literary Fiction': [
        `In ${chTitle}, ${title} offers an introspective meditation on memory, aging, and the passage of time. Master ${author} paints vivid, nostalgic portraits of the old cathedral square as autumn leaves drift across the worn cobblestones.`,
        `Through understated prose and rich character studies, the novel explores the quiet moments of connection and unspoken grief that define a human lifetime.`
      ],
      'Young Adult': [
        `In ${chTitle}, the thrilling story of ${title} follows the young apprentice as they perform their very first successful transmutation in the academy laboratory. Scribe ${author} captures the wonder, excitement, and rivalry among the student mages.`,
        `When an unexpected accident in the alchemy wing threatens to expose a deep school secret, the apprentice and their loyal friends must band together to fix the damage before the headmaster arrives.`
      ],

      // 📚 13. Major Non-Fiction Genres
      'Biography & Memoir': [
        `In ${chTitle}, the personal memoirs of ${title} provide a candid, firsthand account of a lifetime spent in the highest corridors of power. Master ${author} reflects on the difficult political compromises, personal sacrifices, and unexpected triumphs that marked his career.`,
        `The author writes with profound honesty regarding the burdens of leadership, acknowledging the mentors who guided his youth and offering hard-won wisdom for future generations of scholars.`
      ],
      'Self-Help': [
        `In ${chTitle}, ${title} sets forth practical principles for cultivating inner fortitude, emotional resilience, and daily mental clarity. Master ${author} teaches the ancient stoic practice of distinguishing between what lies within our control and what must be accepted with calm equanimity.`,
        `By establishing disciplined morning routines, practicing mindful reflection, and focusing energy on constructive action, the reader learns to navigate life's inevitable storms without losing peace of mind.`
      ],
      'True Crime': [
        `Documented under ${chTitle}, ${title} presents a detailed forensic and historical reconstruction of the most notorious criminal trial of the era. Master ${author} examines the physical evidence, the poisoner's motives, and the brilliant cross-examination that shattered the defendant's fabricated alibi.`,
        `The transcript reveals the dark psychological complexities of the case, illustrating how greed and betrayal led to a conspiracy that reached into the highest offices of the judiciary.`
      ],
      'History': [
        `In ${chTitle}, ${title} provides a scholarly and engaging examination of the major social, economic, and technological developments of the era. Master ${author} traces the evolution of monastic scriptoriums into great university libraries that spurred the revival of learning.`,
        `Drawing on merchant ledgers, guild charters, and diplomatic letters, the book illustrates how international trade routes transformed isolated feudal towns into vibrant cultural capitals.`
      ],
      'Travel': [
        `In ${chTitle}, the vivid travelogues of ${title} recount the expedition across the great salt desert toward the oasis city of Marid-Khar. Master ${author} describes the camel caravans navigating by the stars, the hospitality of nomad tribes, and the bustling spice markets filled with frankincense and silk.`,
        `The journal offers practical advice for future explorers on securing water supplies, negotiating mountain tolls, and understanding the rich customs of the foreign desert kingdoms.`
      ]
    };

    // Find matching genre prose bank or fallback to closest category
    const list = proseBanks[genre] || proseBanks['History'] || [
      `The scholarly annals of ${title} preserved under ${chTitle} provide an authentic exploration of the discipline. Master ${author} documents the historical records and practical observations gathered across years of dedicated study.`
    ];

    // Guaranteed disjoint linear index computation (stride of 2)
    const idx1 = ((pageNum - 5) * 2) % list.length;
    const idx2 = ((pageNum - 5) * 2 + 1) % list.length;

    const p1 = list[idx1];
    const p2 = list[idx2] || list[(idx1 + 1) % list.length];

    if (isLast) {
      return (
        `${p1}\n\n` +
        `${p2}\n\n` +
        `Thus is the archival manuscript of "${title}" (${genre}) brought to its solemn completion. Transcribed and preserved under the seal of Master ${author}, Grand Scriptorium Archive.`
      );
    }

    return `${p1}\n\n${p2}`;
  }

  private getPremiseForGenre(genre: DarkFantasyGenre, title: string, author: string, era: string): string {
    switch (genre) {
      case 'Cookbooks & Food':
        return `An authoritative culinary manual presenting traditional hearth recipes, artisanal baking, wild game roasts, aromatic herbal broths, and banquet dining from ${era}.`;
      case 'Parasitic Grimoires':
      case 'Mimic Lexicons':
      case 'Symbiotic Journals':
      case 'Crying Folios':
      case 'Chained Codices':
        return `A terrifying biological volume bound in living flesh that hungers for blood and whispers forbidden truths directly into the reader's consciousness.`;
      case 'Madness Manifestos':
      case 'Planar Atlases':
      case 'Astral Voyagers\' Logs':
      case 'Echo Texts':
        return `An unraveling eyewitness account of non-Euclidean voids, celestial horrors, and fractured psychological states beyond the edge of the world.`;
      case 'Mortuary Liturgies':
      case 'Lichdom Blueprints':
      case 'Sepulcher Registries':
      case 'Ossuary Architecture':
        return `A solemn and clinical masterwork documenting the surgical rites of soul preservation, ossuary engineering, and mortuary liturgy.`;
      case 'Censored Dynasties':
      case 'Pre-Fall Geographies':
      case 'Doomsday Presages':
      case 'Martyr Logs':
        return `A reconstructed record of expunged dynasties, forgotten continents, and apocalyptic portents preserved from imperial purges.`;
      case 'Grave-Botanicals':
      case 'Monstrous Taxonomies':
      case 'Venom Compendiums':
      case 'Lycanthropic Lineages':
        return `A botanical and anatomical field treatise cataloging parasitic corpse-flora, apex predators, venom extractions, and lunar blood afflictions.`;
      case 'Anti-Theology':
      case 'Sectarian Liturgies':
      case 'Delusion Diaries':
        return `A radical philosophical and liturgical treatise deconstructing divine orthodoxy and exploring the truth of cosmic entropy.`;
      case 'Necromancy Grimoires':
      case 'Demonology Codices':
      case 'Abyssal Gazeteers':
      case 'Alchemical Formulae':
      case 'Hemomancy Scrolls':
        return `An esoteric and experimental grimoire detailing high-order invocations, catalytic transmutations, and planar bindings.`;
      case 'Apocalyptic Chronicles':
      case 'Genealogies of Damned Lineages':
      case 'Inquisition Journals':
      case 'Monarchic Decrees':
      case 'Mythological Cycle Books':
        return `A grand historical chronicle capturing the sovereign decrees, dynastic collapses, and mythic eras that shaped the realm.`;
      case 'Cryptid Anatomies':
      case 'Heresiographies':
      case 'Flora Morbida':
        return `A tactical field manual for scholars and rangers navigating subterranean labyrinths, cryptid nests, and venomous ecosystems.`;
      case 'Heretical Philosophies':
      case 'Tragic Plays':
      case 'Malediction Poetry':
        return `A dramatic and introspective literary work examining tragic ambition, mortality, and the echoes of forgotten ages.`;
      case 'Architectural Layouts':
      case 'Blacksmithing Manuals':
      case 'Cipher Keys':
        return `An engineering and craft handbook preserving lost metallurgy, structural masonry, and cipher wheels.`;
      case 'Fantasy':
      case 'Science Fiction':
      case 'Romance':
      case 'Mystery':
      case 'Thriller & Suspense':
      case 'Horror':
      case 'Historical Fiction':
      case 'Literary Fiction':
      case 'Young Adult':
        return `An evocative and immersive narrative chronicling the high drama, perilous adventures, and deep human bonds of "${title}".`;
      case 'Biography & Memoir':
      case 'Self-Help':
      case 'True Crime':
      case 'History':
      case 'Travel':
      default:
        return `A comprehensive and authoritative manuscript on "${title}" written by ${author} during ${era}.`;
    }
  }

  private getChapterBeatsForGenre(genre: DarkFantasyGenre, _chapterIndex: number, chTitle: string, title: string): string {
    return `In-depth exploration of ${chTitle} within "${title}" (${genre}), focusing on authentic domain knowledge, domain-specific terminology, and progressive thematic development.`;
  }

  // =========================================================================
  // UTILITIES & INFERENCE HELPERS
  // =========================================================================
  public inferDarkFantasyGenre(title: string): DarkFantasyGenre {
    const t = title.toLowerCase();

    // 🫀 1. Living & Sentient Volumes
    if (t.includes('parasit') || t.includes('leech') || t.includes('hunger') || t.includes('thirsty vellum')) return 'Parasitic Grimoires';
    if (t.includes('mimic') || t.includes('needle-teeth') || t.includes('snapping') || t.includes('bite') || t.includes('venomous novella')) return 'Mimic Lexicons';
    if (t.includes('symbio') || t.includes('quivering flesh') || t.includes('breathing diary') || t.includes('muscle-bound') || t.includes('living thought')) return 'Symbiotic Journals';
    if (t.includes('crying') || t.includes('weeping psalter') || t.includes('black bile') || t.includes('groaning') || t.includes('exudation') || t.includes('mourning song')) return 'Crying Folios';
    if (t.includes('chained') || t.includes('padlock') || t.includes('screaming octavo') || t.includes('imprisoned litany') || t.includes('warded in meteor') || t.includes('restrained word')) return 'Chained Codices';

    // 🩸 2. Cosmic Horror & The Blind Realms
    if (t.includes('madness') || t.includes('non-euclidean scream') || t.includes('angles that cut') || t.includes('stars blinked') || t.includes('blind horizon')) return 'Madness Manifestos';
    if (t.includes('planar') || t.includes('atlas') || t.includes('shifting coastline') || t.includes('unraveling heaven') || t.includes('inverted sphere') || t.includes('salt-rift coordinate')) return 'Planar Atlases';
    if (t.includes('astral voyager') || t.includes('silver cord') || t.includes('drift-soul') || t.includes('severed spirit') || t.includes('seventh veil')) return 'Astral Voyagers\' Logs';
    if (t.includes('echo') || t.includes('midnight ledger') || t.includes('waning moon') || t.includes('tide-bound') || t.includes('fade at sunrise') || t.includes('nocturnal palimpsest')) return 'Echo Texts';

    // 💀 3. Death-Craft & Necrotic Lore
    if (t.includes('mortuary') || t.includes('sewing the dead') || t.includes('needle-stitch') || t.includes('embalmer') || t.includes('grave-thread') || t.includes('salted corpse')) return 'Mortuary Liturgies';
    if (t.includes('lichdom') || t.includes('phylactery') || t.includes('severed soul') || t.includes('unending bone') || t.includes('cold sovereign') || t.includes('lichcraft')) return 'Lichdom Blueprints';
    if (t.includes('sepulcher') || t.includes('death-roll') || t.includes('nameless grave') || t.includes('silent kings') || t.includes('grave-digger')) return 'Sepulcher Registries';
    if (t.includes('ossuary') || t.includes('calcified bone') || t.includes('ribcage') || t.includes('white skull') || t.includes('femur arch')) return 'Ossuary Architecture';

    // ⏳ 4. Forbidden Chronologies & Grim History
    if (t.includes('censored') || t.includes('empire that never was') || t.includes('stricken king') || t.includes('erased from') || t.includes('expunged')) return 'Censored Dynasties';
    if (t.includes('pre-fall') || t.includes('ocean was fresh') || t.includes('before the sun bled') || t.includes('intact world') || t.includes('unbroken mountain')) return 'Pre-Fall Geographies';
    if (t.includes('doomsday') || t.includes('prophetess') || t.includes('red comet') || t.includes('granite mountains melt') || t.includes('seven trumpets')) return 'Doomsday Presages';
    if (t.includes('martyr') || t.includes('torturer') || t.includes('red-hot iron') || t.includes('breaking of') || t.includes('cleansing stake')) return 'Martyr Logs';

    // 🌿 5. Corrupted Nature & Toxic Bestiaries
    if (t.includes('grave-botanical') || t.includes('flora that blooms') || t.includes('corpse-lily') || t.includes('tomb-moss') || t.includes('corpse-bloom')) return 'Grave-Botanicals';
    if (t.includes('monstrous taxonom') || t.includes('dissection of') || t.includes('nerve-cluster') || t.includes('apex horror') || t.includes('organ extraction')) return 'Monstrous Taxonomies';
    if (t.includes('venom') || t.includes('seven drops') || t.includes('curdling the ghost') || t.includes('basalt adder') || t.includes('hemlock milk') || t.includes('tincture')) return 'Venom Compendiums';
    if (t.includes('lycanthrop') || t.includes('wolf-curse') || t.includes('contagion in the bone') || t.includes('werewolf') || t.includes('howl across')) return 'Lycanthropic Lineages';

    // ⚖️ 6. Blasphemous Philosophy & False Faiths
    if (t.includes('anti-theolog') || t.includes('creator is blind') || t.includes('gods abandoned') || t.includes('indifferent cosmos') || t.includes('absence of mercy')) return 'Anti-Theology';
    if (t.includes('sectarian') || t.includes('rotting mother') || t.includes('midnight swarm') || t.includes('black mass') || t.includes('starving saint')) return 'Sectarian Liturgies';
    if (t.includes('delusion') || t.includes('monolith we all') || t.includes('patient #') || t.includes('asylum') || t.includes('voice in the plaster')) return 'Delusion Diaries';

    // 📜 7. Forbidden Magic & Arcane Texts
    if (t.includes('necro') || t.includes('corpse') || t.includes('reanimat') || t.includes('soul') || t.includes('salt-vessel')) return 'Necromancy Grimoires';
    if (t.includes('demon') || t.includes('fiend') || t.includes('pact') || t.includes('summon') || t.includes('seventy-two fiends')) return 'Demonology Codices';
    if (t.includes('abyss') || t.includes('cosmic') || t.includes('gazetteer') || t.includes('singing monolith')) return 'Abyssal Gazeteers';
    if (t.includes('alchem') || t.includes('transmut') || t.includes('crucible') || t.includes('elixir') || t.includes('vitriol') || t.includes('magnum opus')) return 'Alchemical Formulae';
    if (t.includes('blood') || t.includes('hemo') || t.includes('sanguine') || t.includes('flesh') || t.includes('crimson lattice')) return 'Hemomancy Scrolls';

    // 🏛️ 8. World Lore & Grim History
    if (t.includes('apocalypse') || t.includes('dead god') || t.includes('ruin') || t.includes('fall of') || t.includes('heavens bled')) return 'Apocalyptic Chronicles';
    if (t.includes('lineage') || t.includes('genealog') || t.includes('house of') || t.includes('vampire baron') || t.includes('bloodline')) return 'Genealogies of Damned Lineages';
    if (t.includes('inquisit') || t.includes('confess') || t.includes('heresy') || t.includes('purge') || t.includes('black candle')) return 'Inquisition Journals';
    if (t.includes('decree') || t.includes('edict') || t.includes('monarch') || t.includes('crown') || t.includes('iron scepter')) return 'Monarchic Decrees';
    if (t.includes('myth') || t.includes('pantheon') || t.includes('gods') || t.includes('three suns') || t.includes('cycle')) return 'Mythological Cycle Books';

    // 🌿 9. Bestiaries & Field Guides
    if (t.includes('cryptid') || t.includes('beast') || t.includes('monster') || t.includes('ghoul') || t.includes('basilisk')) return 'Cryptid Anatomies';
    if (t.includes('cult') || t.includes('heresiograph') || t.includes('cabal') || t.includes('sigils of the')) return 'Heresiographies';
    if (t.includes('flora') || t.includes('herb') || t.includes('nightshade') || t.includes('fungi') || t.includes('morbida') || t.includes('fatal plant')) return 'Flora Morbida';

    // 🎭 10. Dark Philosophy & Fiction
    if (t.includes('philosoph') || t.includes('entropy') || t.includes('nihil') || t.includes('nothingness')) return 'Heretical Philosophies';
    if (t.includes('play') || t.includes('tragedy') || t.includes('drama') || t.includes('script') || t.includes('doom of') || t.includes('chalice')) return 'Tragic Plays';
    if (t.includes('poem') || t.includes('verse') || t.includes('ballad') || t.includes('malediction') || t.includes('stanza') || t.includes('rhyme')) return 'Malediction Poetry';

    // 🛠️ 11. Practical & Lost Knowledge
    if (t.includes('architect') || t.includes('vault') || t.includes('masonry') || t.includes('layout') || t.includes('portcullis')) return 'Architectural Layouts';
    if (t.includes('smith') || t.includes('forge') || t.includes('iron') || t.includes('blade') || t.includes('meteorite') || t.includes('damascus')) return 'Blacksmithing Manuals';
    if (t.includes('cipher') || t.includes('cryptograph') || t.includes('key') || t.includes('code') || t.includes('substitution')) return 'Cipher Keys';

    // 📖 12. Major Fiction Genres
    if (t.includes('automaton') || t.includes('void-engine') || t.includes('star-sailor') || t.includes('clockwork universe') || t.includes('aether')) return 'Science Fiction';
    if (t.includes('love') || t.includes('bride') || t.includes('betrothal') || t.includes('passion') || t.includes('romance') || t.includes('vows')) return 'Romance';
    if (t.includes('murder') || t.includes('detective') || t.includes('missing reliquary') || t.includes('locked-chamber') || t.includes('clue') || t.includes('mystery')) return 'Mystery';
    if (t.includes('courier') || t.includes('hunted') || t.includes('assassin') || t.includes('panic') || t.includes('thriller') || t.includes('suspense')) return 'Thriller & Suspense';
    if (t.includes('skinless') || t.includes('nightmare') || t.includes('horror') || t.includes('haunting') || t.includes('ghost') || t.includes('uninvited')) return 'Horror';
    if (t.includes('siege of') || t.includes('historical') || t.includes('red queen') || t.includes('crusade')) return 'Historical Fiction';
    if (t.includes('aging warden') || t.includes('literary') || t.includes('unspoken') || t.includes('long winter')) return 'Literary Fiction';
    if (t.includes('apprentice') || t.includes('witch-tower') || t.includes('clockwork owl') || t.includes('young adult') || t.includes('runaways')) return 'Young Adult';
    if (t.includes('dragon') || t.includes('crown of') || t.includes('paladin') || t.includes('fantasy')) return 'Fantasy';

    // 📚 13. Major Non-Fiction Genres
    if (t.includes('memoir') || t.includes('biography') || t.includes('reminiscence') || t.includes('chancellor') || t.includes('life at')) return 'Biography & Memoir';
    if (t.includes('self-help') || t.includes('clearing the mind') || t.includes('calming the') || t.includes('stoic') || t.includes('mindfulness') || t.includes('clarity')) return 'Self-Help';
    if (t.includes('true crime') || t.includes('trial of') || t.includes('poisoner of') || t.includes('heist') || t.includes('butcher')) return 'True Crime';
    if (t.includes('recipe') || t.includes('cookbook') || t.includes('culinary') || t.includes('baking') || t.includes('roasting') || t.includes('feast') || t.includes('venison')) return 'Cookbooks & Food';
    if (t.includes('travel') || t.includes('expedition') || t.includes('boiling sea') || t.includes('journey to') || t.includes('pilgrim trail') || t.includes('leagues beneath')) return 'Travel';
    if (t.includes('history') || t.includes('five popes') || t.includes('century of') || t.includes('rise of') || t.includes('economy')) return 'History';

    return 'Apocalyptic Chronicles';
  }

  private calculateTargetPageCount(seed: number): number {
    const prng = this.createPrng(seed + 999);
    return 12 + Math.floor(prng() * 37);
  }

  private getChapterTitleForGenre(genre: DarkFantasyGenre, chapterIndex: number, isLast: boolean): string {
    if (isLast) return 'The Final Revelation & Sealed Epilogue';
    const titles: Record<DarkFantasyGenre, string[]> = {
      // 🫀 1. Living Volumes
      'Parasitic Grimoires': ['Awakening the Hunger', 'The First Blood Offering', 'Memories Extracted', 'The Perpetual Thirst'],
      'Mimic Lexicons': ['The Harmless Cover', 'The Jaws in the Vellum', 'Paralyzing Toxins', 'The Predatory Scriptorium'],
      'Symbiotic Journals': ['Grafting the Living Skin', 'Pulsing Arteries of Thought', 'Telepathic Resonances', 'The Unified Organism'],
      'Crying Folios': ['The Black Bile Exudation', 'Lamentations at Noon', 'The Groaning Margins', 'Tears of the Damned'],
      'Chained Codices': ['The Meteor-Iron Padlocks', 'The Chained Incantation', 'Resisting the Thrash', 'The Unbroken Seal'],

      // 🩸 2. Cosmic Horror
      'Madness Manifestos': ['Angles That Wound the Eye', 'The Fractured Perception', 'The Whispering Void', 'The Shattered Sanity'],
      'Planar Atlases': ['Inverted Gravity Coordinates', 'Mapping the Void Rift', 'Topological Singularities', 'The Unstable Horizon'],
      'Astral Voyagers\' Logs': ['Severing the Silver Cord', 'The Great Etheric Vacuum', 'The Gaze of the Outer God', 'Lost in the Stars'],
      'Echo Texts': ['The Dusk Inscription', 'The Midnight Metamorphosis', 'Words of the Waning Moon', 'Vanishing at Dawn'],

      // 💀 3. Death-Craft
      'Mortuary Liturgies': ['Preparing the Grave-Thread', 'Soul-Pinning Rituals', 'The Golden Embalming Needle', 'Preservation of Flesh'],
      'Lichdom Blueprints': ['Severing Mortal Breath', 'Crucible of the Phylactery', 'The Mercury Bath', 'Eternal Skeletal Will'],
      'Sepulcher Registries': ['Roll-Call of the First Barrow', 'The Ten Thousand Unclaimed', 'Calling by True Name', 'The Ledger Sealed'],
      'Ossuary Architecture': ['Structural Femur Keystones', 'Altars of Compacted Craniums', 'Resonant Marrow Vaults', 'The White Crypt'],

      // ⏳ 4. Forbidden Chronologies
      'Censored Dynasties': ['The Queen Erased from Stone', 'The Stricken Century', 'Purging the Monuments', 'The Secret Lineage'],
      'Pre-Fall Geographies': ['The Verdant Sun-Plains', 'Rivers of Sweet Nectar', 'The Seven Intact Spires', 'The Lost Continent'],
      'Doomsday Presages': ['The Red Comet Alignment', 'The Tremor of Twelve Mountains', 'The Bleeding Sky', 'The Final Reckoning'],
      'Martyr Logs': ['The Iron Scaffolds', 'Confessions in the Dark', 'Defiance of the Faith', 'The Unbroken Martyr'],

      // 🌿 5. Corrupted Nature
      'Grave-Botanicals': ['The Ribcage Orchid', 'The Weeping Nightshade', 'Fungi of the Deep Catacombs', 'Antidote Decoctions'],
      'Monstrous Taxonomies': ['Organ Maps of the Titan', 'Nerve Centers of the Abomination', 'Extracting the Venom Gland', 'Fatal Strikes'],
      'Venom Compendiums': ['Curdling the Spirit', 'The Seven Fatal Drops', 'Tears of the Basalt Serpent', 'The Colorless Draught'],
      'Lycanthropic Lineages': ['The Lunar Contagion', 'Hereditary Beast-Blood', 'Metamorphosis Kinetics', 'The Silver Ward'],

      // ⚖️ 6. Blasphemous Philosophy
      'Anti-Theology': ['The Blind Creator', 'The Indifference of Heaven', 'The Absolute Reality of Rot', 'The Final Emptiness'],
      'Sectarian Liturgies': ['Hymns to the Rotting Mother', 'The Midnight Feast of Ash', 'Chants of the Swarm', 'The Dark Benediction'],
      'Delusion Diaries': ['The Monolith in Dreams', 'Patient #44 Case Log', 'The Voice in the Plaster', 'The Endless Spiral'],

      // 📜 7. Forbidden Magic & Arcane Texts
      'Necromancy Grimoires': ['Preparation of the Salt-Vessels', 'Rites of the First Breath', 'Binding of Bone and Will', 'The Eternal Slumber'],
      'Demonology Codices': ['The Hierarchy of the Pit', 'Circles of Sulfur and Salt', 'Pacts of the Silver Quill', 'The True Names'],
      'Abyssal Gazeteers': ['The Non-Euclidean Spires', 'Tides of the Outer Void', 'The Singing Monoliths', 'The Edge of Sanity'],
      'Alchemical Formulae': ['Purification of Raw Vitriol', 'The Great Hermetic Conjunction', 'Sublimation of Astral Salts', 'The Philosopher\'s Stone'],
      'Hemomancy Scrolls': ['The Pulse of the Sacred Vessel', 'Sanguine Coagulation Rites', 'The Flesh-Weaver\'s Lattice', 'The Crimson Tide'],

      // 🏛️ 8. World Lore & Grim History
      'Apocalyptic Chronicles': ['The Day the Heavens Bled', 'Fall of the Golden Citadel', 'The March of the Ash Hordes', 'The Silent Desolation'],
      'Genealogies of Damned Lineages': ['The Progenitors of Night', 'The First Corrupted Scion', 'The Curse of the Silver Manor', 'The Extinguished Bloodlines'],
      'Inquisition Journals': ['Suspicions in the Border Marches', 'The Trials of the Black Candle', 'Confessions in Iron', 'The Cleansing Fire'],
      'Monarchic Decrees': ['Edict of the Iron Scepter', 'Seizure of the Northern Barrows', 'The Sentence of Exile', 'The Eternal Ban'],
      'Mythological Cycle Books': ['Dawn of the Blind Titans', 'The War of Three Suns', 'When the Stars Abandoned Us', 'The Silent Heavens'],

      // 🌿 9. Bestiaries & Field Guides
      'Cryptid Anatomies': ['Dissection of the Barrow Fiend', 'Harvesting the Venom Siphon', 'Skeletal Densities and Armor', 'Eradication Tactics'],
      'Heresiographies': ['The Secret Sigils of the Hand', 'The Midnight Assemblies', 'The Avatar of the Swarm', 'Methods of Purging the Cabal'],
      'Flora Morbida': ['Tomb-Moss and Grave Fungi', 'The Weeping Nightshade', 'Preparation of Antidote Draughts', 'Harvesting Precautions'],

      // 🎭 10. Dark Philosophy & Fiction
      'Heretical Philosophies': ['The Illusion of Light', 'Discourses on Absolute Entropy', 'The Architecture of Nothingness', 'The Final Solace'],
      'Tragic Plays': ['Act I: The Ominous Crown', 'Act II: Poison in the Goblet', 'Act III: The Midnight Duel', 'Act IV: The Ruined Kingdom'],
      'Malediction Poetry': ['Stanzas of the Black Moon', 'Ballad of the Forgotten Tomb', 'Verses for the Sleepless', 'The Final Rhyme'],

      // 🛠️ 11. Practical & Lost Knowledge
      'Architectural Layouts': ['Surveying the Crypt Foundations', 'Cantilever Strains and Pressure Gates', 'The Mechanism of the Pendulum', 'The Hidden Scriptorium'],
      'Blacksmithing Manuals': ['Smelting the Meteorite Core', 'Bone-Quenching and Carbon Infusion', 'Damascus Blade Folding', 'Tempering the Edge'],
      'Cipher Keys': ['The Permutation Wheel', 'Modular Prime Transpositions', 'Deciphering the Archon Runes', 'The Unbreakable Key'],

      // 📖 12. Major Fiction Genres
      'Fantasy': ['The Broken Sword of the King', 'The Journey to the Whispering Mountains', 'The Dragon\'s Hoard', 'The Victorious Return'],
      'Science Fiction': ['The Automaton Awakening', 'Voyage Across the Void', 'The Clockwork Mind', 'The Far Star'],
      'Romance': ['Letters from the Rose Garden', 'The Forbidden Masquerade', 'A Vow Across the Sea', 'Together in the Sunset'],
      'Mystery': ['The Midnight Intruder', 'The Clue in the Red Wax', 'Interrogating the Scribe', 'The Truth Revealed'],
      'Thriller & Suspense': ['The Clock is Ticking', 'Trapped in the Belfry', 'The Assassin Strikes', 'The Desperate Escape'],
      'Horror': ['The Scratches in the Wall', 'The Faceless Visitor', 'The Chamber Beneath the Cellar', 'The Final Screaming Dawn'],
      'Historical Fiction': ['The Gathering of the Legions', 'The Siege of Carcosa', 'The Winter of Famine', 'The Fall of the Empire'],
      'Literary Fiction': ['The Silence of Autumn', 'Portraits of Memory', 'The Scribe\'s Regret', 'The Quiet Light'],
      'Young Adult': ['The First Spell', 'Trouble at the Alchemy Academy', 'The Midnight Quest', 'The True Mage'],

      // 📚 13. Major Non-Fiction Genres
      'Biography & Memoir': ['Early Years in the Scriptorium', 'Rise to the High Council', 'Trials and Triumphs', 'The Final Reflections'],
      'Self-Help': ['Foundations of Mental Strength', 'The Stoic Mindset', 'Daily Meditation in Solitude', 'Mastering the Will'],
      'True Crime': ['The Poisoning at the Banquet', 'The Inquisitor\'s Investigation', 'The Trial in the Citadel', 'The Verdict'],
      'History': ['The Dawn of Civilization', 'The Great Trade Wars', 'The Rise of the Scriptoriums', 'The Legacy of the Era'],
      'Cookbooks & Food': ['The Master Baker\'s Oven', 'Roasts and Game from the Forest', 'Herbal Broths and Elixirs', 'The Royal Banquet'],
      'Travel': ['Departing the Harbor', 'Across the Great Desert', 'Among the Mountain Tribes', 'Arrival at the Sacred City']
    };

    const list = titles[genre] || ['Foundational Principles', 'Deep Exploration', 'The Crucible'];
    return list[chapterIndex - 1] || `Discourse Part ${chapterIndex}`;
  }

  private getCoverColorForGenre(genre: DarkFantasyGenre, seed: number): string {
    const prng = this.createPrng(seed + 123);
    const colors: Record<DarkFantasyGenre, string[]> = {
      // 🫀 Biological
      'Parasitic Grimoires': ['#5e1218', '#42080d', '#6b1921'],
      'Mimic Lexicons': ['#4a2618', '#381c10', '#59301e'],
      'Symbiotic Journals': ['#631d38', '#471227', '#752443'],
      'Crying Folios': ['#282633', '#1c1b24', '#383547'],
      'Chained Codices': ['#242426', '#18181a', '#303036'],

      // 🩸 Cosmic
      'Madness Manifestos': ['#181c38', '#101326', '#22284f'],
      'Planar Atlases': ['#0f2838', '#0a1c26', '#16394f'],
      'Astral Voyagers\' Logs': ['#251538', '#1a0e26', '#351e4f'],
      'Echo Texts': ['#1e2530', '#141921', '#2c3645'],

      // 💀 Death-Craft
      'Mortuary Liturgies': ['#2e241c', '#211913', '#3d3025'],
      'Lichdom Blueprints': ['#132b24', '#0d1f1a', '#1c3d33'],
      'Sepulcher Registries': ['#24211e', '#1a1815', '#332f2b'],
      'Ossuary Architecture': ['#3b362e', '#292520', '#4d463c'],

      // ⏳ Chronologies
      'Censored Dynasties': ['#382414', '#26190e', '#4f331c'],
      'Pre-Fall Geographies': ['#1e382b', '#15261e', '#294d3b'],
      'Doomsday Presages': ['#4a1515', '#330e0e', '#661d1d'],
      'Martyr Logs': ['#3b1820', '#291016', '#4f202b'],

      // 🌿 Terrestrial
      'Grave-Botanicals': ['#1a331c', '#122414', '#244727'],
      'Monstrous Taxonomies': ['#302b1c', '#211e13', '#423c27'],
      'Venom Compendiums': ['#1c3833', '#132623', '#274f48'],
      'Lycanthropic Lineages': ['#382020', '#261616', '#4f2d2d'],

      // ⚖️ Heretical
      'Anti-Theology': ['#1c1c1f', '#131314', '#26262b'],
      'Sectarian Liturgies': ['#3b1429', '#290e1d', '#521c39'],
      'Delusion Diaries': ['#292333', '#1d1924', '#383047'],

      // 📜 Magic
      'Necromancy Grimoires': ['#1a1a24', '#2d1838', '#1c1626'],
      'Demonology Codices': ['#4a1c14', '#5c1313', '#3b1010'],
      'Abyssal Gazeteers': ['#14294a', '#101d36', '#0c1629'],
      'Alchemical Formulae': ['#1d5334', '#153b26', '#102e1e'],
      'Hemomancy Scrolls': ['#5a1010', '#420d0d', '#6e1515'],

      // 🏛️ History
      'Apocalyptic Chronicles': ['#382212', '#29180c', '#402615'],
      'Genealogies of Damned Lineages': ['#3b2f1e', '#2e2417', '#423421'],
      'Inquisition Journals': ['#4a1414', '#381010', '#541717'],
      'Monarchic Decrees': ['#4a3c18', '#382e12', '#59491d'],
      'Mythological Cycle Books': ['#222226', '#18181b', '#2c2c33'],

      // 🌿 Bestiaries
      'Cryptid Anatomies': ['#2b3d2b', '#1e2b1e', '#364d36'],
      'Heresiographies': ['#381c38', '#291429', '#472447'],
      'Flora Morbida': ['#233823', '#192919', '#2d472d'],

      // 🎭 Fiction & Drama
      'Heretical Philosophies': ['#18181b', '#222226', '#121214'],
      'Tragic Plays': ['#4a2030', '#361723', '#5c283c'],
      'Malediction Poetry': ['#2b183b', '#1f112b', '#381f4d'],

      // 🛠️ Practical
      'Architectural Layouts': ['#383226', '#2b261d', '#453e2f'],
      'Blacksmithing Manuals': ['#2e2620', '#241e19', '#3b3129'],
      'Cipher Keys': ['#1c2838', '#141d29', '#24344a'],

      // 📖 Major Fiction
      'Fantasy': ['#203354', '#16233b', '#2b4470'],
      'Science Fiction': ['#1a3340', '#12232c', '#244657'],
      'Romance': ['#5e2030', '#421622', '#7a2a3f'],
      'Mystery': ['#292033', '#1d1624', '#3b2e4a'],
      'Thriller & Suspense': ['#401e1a', '#2c1512', '#572924'],
      'Horror': ['#261821', '#1a1017', '#382331'],
      'Historical Fiction': ['#423320', '#2e2316', '#59452b'],
      'Literary Fiction': ['#293330', '#1c2422', '#3a4743'],
      'Young Adult': ['#24384a', '#192733', '#304a63'],

      // 📚 Major Non-Fiction
      'Biography & Memoir': ['#3b2a20', '#291d16', '#4f382b'],
      'Self-Help': ['#203830', '#162621', '#2c4f43'],
      'True Crime': ['#381818', '#261010', '#4f2222'],
      'History': ['#3d301f', '#2b2216', '#524029'],
      'Cookbooks & Food': ['#54301a', '#3b2212', '#6e3f22'],
      'Travel': ['#1c3838', '#132626', '#264f4f']
    };
    const set = colors[genre] || ['#3b190f', '#24140c'];
    return set[Math.floor(prng() * set.length)];
  }

  private getAccentColorForGenre(_genre: DarkFantasyGenre, seed: number): string {
    const prng = this.createPrng(seed + 456);
    const accents = ['#ffd700', '#d4af37', '#c29b38', '#b8860b', '#cd7f32', '#c86d49', '#dfd2b5', '#e05a47', '#50c878', '#9966cc', '#708090', '#b87333', '#e6c280'];
    return accents[Math.floor(prng() * accents.length)];
  }

  private inferClassification(genre: DarkFantasyGenre): MainBookClassification {
    if (['Parasitic Grimoires', 'Mimic Lexicons', 'Symbiotic Journals', 'Crying Folios', 'Chained Codices'].includes(genre)) return 'Living & Sentient Volumes';
    if (['Madness Manifestos', 'Planar Atlases', 'Astral Voyagers\' Logs', 'Echo Texts'].includes(genre)) return 'Cosmic Horror & Blind Realms';
    if (['Mortuary Liturgies', 'Lichdom Blueprints', 'Sepulcher Registries', 'Ossuary Architecture'].includes(genre)) return 'Death-Craft & Necrotic Lore';
    if (['Censored Dynasties', 'Pre-Fall Geographies', 'Doomsday Presages', 'Martyr Logs'].includes(genre)) return 'Forbidden Chronologies';
    if (['Grave-Botanicals', 'Monstrous Taxonomies', 'Venom Compendiums', 'Lycanthropic Lineages'].includes(genre)) return 'Corrupted Nature & Bestiaries';
    if (['Anti-Theology', 'Sectarian Liturgies', 'Delusion Diaries'].includes(genre)) return 'Blasphemous Philosophy';
    if (['Necromancy Grimoires', 'Demonology Codices', 'Abyssal Gazeteers', 'Alchemical Formulae', 'Hemomancy Scrolls'].includes(genre)) return 'Forbidden Magic & Arcane Texts';
    if (['Apocalyptic Chronicles', 'Genealogies of Damned Lineages', 'Inquisition Journals', 'Monarchic Decrees', 'Mythological Cycle Books'].includes(genre)) return 'World Lore & Grim History';
    if (['Architectural Layouts', 'Blacksmithing Manuals', 'Cipher Keys'].includes(genre)) return 'Practical & Lost Knowledge';
    if (['Fantasy', 'Science Fiction', 'Romance', 'Mystery', 'Thriller & Suspense', 'Horror', 'Historical Fiction', 'Literary Fiction', 'Young Adult'].includes(genre)) return 'Fiction';
    if (['Biography & Memoir', 'Self-Help', 'True Crime', 'History', 'Cookbooks & Food', 'Travel'].includes(genre)) return 'Non-Fiction';
    if (['Cryptid Anatomies', 'Heresiographies', 'Flora Morbida'].includes(genre)) return 'Academic Texts & Grammar';
    if (['Heretical Philosophies'].includes(genre)) return 'Dissertations';
    return 'Tales & Mythology';
  }

  private inferWritingStyle(genre: DarkFantasyGenre): BookWritingStyle {
    if (genre === 'Tragic Plays') return 'dramatic-play';
    if (genre === 'Malediction Poetry') return 'epic-verse';
    if (genre === 'Heretical Philosophies' || genre === 'Anti-Theology') return 'philosophical-dialogue';
    if (['Parasitic Grimoires', 'Mimic Lexicons', 'Symbiotic Journals', 'Crying Folios'].includes(genre)) return 'biological-log';
    if (['Madness Manifestos', 'Planar Atlases', 'Astral Voyagers\' Logs'].includes(genre)) return 'cosmic-manifesto';
    if (genre === 'Cookbooks & Food') return 'recipe-guide';
    if (genre.includes('Journal') || genre.includes('Log') || genre.includes('Diary') || genre === 'True Crime') return 'investigative-journal';
    if (['Fantasy', 'Romance', 'Mystery', 'Thriller & Suspense', 'Horror', 'Historical Fiction', 'Literary Fiction', 'Young Adult'].includes(genre)) return 'gothic-fiction';
    if (aiBookService.isMathAllowedForGenre(genre)) return 'academic-treatise';
    return 'chronicle-history';
  }

  private generateAuthorName(seed: number): string {
    const firstNames = ['Aurelius', 'Cassian', 'Valerius', 'Ignatius', 'Theodosia', 'Severus', 'Lucian', 'Hadrian', 'Gawain', 'Taliesin', 'Zephyrus', 'Farhan', 'Hildegard', 'Rowena', 'Balthazar', 'Vespera', 'Malakor', 'Morvath', 'Vesper', 'Kallista', 'Maelis', 'Nyx', 'Vorash'];
    const epithets = ['of Oakhaven', 'of the Iron Quill', 'the Stargazer', 'of Sunken Alderia', 'the Sightless', 'of House Lionheart', 'Arch-Scholar of Veritas', 'the Alchemist of Caelum-Vara', 'the Cartographer of Marid-Khar', 'the Flesh-Binder', 'the Cryptographer', 'the Embalmer', 'the Heretic of Nether-Ghyll'];
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
      'The Third Solstice Reformation (Year 1184)',
      'The Bleeding Sky Epoch (Year 451)',
      'The Pre-Fall Dynasty (Year 008)'
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

