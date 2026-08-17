import {
  BookData,
  BookGenre,
  BookPage,
  GeneratedBookJson,
  MainBookClassification,
  BookFontFamily,
  BookFontSize,
  BookLayoutFormat,
  BookWritingStyle
} from '../lore/BookTypes';
import { aiConfigManager } from '../config/aiConfig';

export interface GenerateBookParams {
  id?: string;
  title: string;
  subtitle?: string;
  author?: string;
  classification?: MainBookClassification;
  subgenre?: string;
  era?: string;
  genre?: BookGenre;
  seed?: number | string;
  pageCount?: number;
  forceRefresh?: boolean;
}

export class BookGeneratorService {
  private static instance: BookGeneratorService;
  private memoryCache: Map<string, BookData> = new Map();

  private constructor() {
    this.restoreCacheFromStorage();
  }

  public static getInstance(): BookGeneratorService {
    if (!BookGeneratorService.instance) {
      BookGeneratorService.instance = new BookGeneratorService();
    }
    return BookGeneratorService.instance;
  }

  private getCacheKey(id?: string, title?: string): string {
    return (id || title || 'unknown_book').toLowerCase().replace(/[^a-z0-9]/g, '_');
  }

  private restoreCacheFromStorage(): void {
    try {
      const keys = Object.keys(localStorage);
      for (const k of keys) {
        if (k.startsWith('retro3d_book_cache_')) {
          const raw = localStorage.getItem(k);
          if (raw) {
            const data: BookData = JSON.parse(raw);
            this.memoryCache.set(data.id, data);
            this.memoryCache.set(this.getCacheKey(undefined, data.title), data);
          }
        }
      }
    } catch {}
  }

  private saveToStorage(book: BookData): void {
    try {
      const cacheKey = `retro3d_book_cache_${this.getCacheKey(book.id, book.title)}`;
      localStorage.setItem(cacheKey, JSON.stringify(book));
    } catch {}
  }

  public getCachedBook(id?: string, title?: string): BookData | null {
    if (id && this.memoryCache.has(id)) {
      return this.memoryCache.get(id)!;
    }
    const titleKey = this.getCacheKey(id, title);
    if (this.memoryCache.has(titleKey)) {
      return this.memoryCache.get(titleKey)!;
    }
    return null;
  }

  /**
   * Generates a complete book using configured AI provider or in-universe procedural fallback.
   */
  public async generateBook(params: GenerateBookParams): Promise<BookData> {
    const cacheKey = this.getCacheKey(params.id, params.title);

    // 1. Check Caches unless forceRefresh is set
    if (!params.forceRefresh) {
      const cached = this.getCachedBook(params.id, params.title);
      if (cached && cached.isLoaded && cached.pages.length > 0) {
        return cached;
      }
    }

    const title = params.title || 'The Untitled Volume';
    const numSeed = typeof params.seed === 'number' ? params.seed : this.hashString(title + (params.seed || ''));
    const genre = params.genre || this.inferGenre(title, params.classification, params.subgenre);
    const classification = params.classification || this.inferClassification(genre);
    const subgenre = params.subgenre || genre;
    const author = params.author || this.generateAuthorName(numSeed);
    const era = params.era || this.generateEra(numSeed);
    const id = params.id || `book_${this.getCacheKey(undefined, title)}`;

    const isSTEM = this.isStemGenre(genre);

    let generatedJson: GeneratedBookJson | null = null;
    let isAIGenerated = false;

    // 2. Attempt Real-Time AI Generation if API key is active
    if (aiConfigManager.hasActiveKey()) {
      try {
        generatedJson = await this.callAIProvider(title, author, genre, era, params.pageCount || 4, isSTEM);
        isAIGenerated = true;
      } catch (err) {
        console.warn('[BookGeneratorService] AI generation encountered error, falling back to Scriptorium Weaver:', err);
      }
    }

    // 3. Fallback to In-Universe Scriptorium Weaver
    if (!generatedJson || !generatedJson.pages || generatedJson.pages.length === 0) {
      generatedJson = this.generateProceduralLore(title, author, genre, era, numSeed, params.pageCount || 4, isSTEM);
      isAIGenerated = false;
    }

    // 4. Assemble BookData with structured manuscript pages
    const bookData: BookData = this.assembleBookData({
      id,
      title: generatedJson.title || title,
      subtitle: generatedJson.subtitle || params.subtitle || `A Chronicle of ${genre}`,
      author: generatedJson.author || author,
      era: generatedJson.era || era,
      classification,
      subgenre,
      genre,
      summary: generatedJson.summary,
      seed: numSeed,
      isSTEM,
      isAIGenerated,
      pageStrings: generatedJson.pages
    });

    // 5. Save to Caches
    this.memoryCache.set(id, bookData);
    this.memoryCache.set(cacheKey, bookData);
    this.saveToStorage(bookData);

    return bookData;
  }

  // =========================================================================
  // AI PROVIDER DISPATCHER
  // =========================================================================
  private async callAIProvider(
    title: string,
    author: string,
    genre: BookGenre,
    era: string,
    pageCount: number,
    isSTEM: boolean
  ): Promise<GeneratedBookJson> {
    const provider = aiConfigManager.getProvider();
    const apiKey = aiConfigManager.getApiKey();
    const model = aiConfigManager.getModel();
    const endpoint = aiConfigManager.getEndpoint();

    const systemPrompt = this.buildSystemPrompt(genre, isSTEM, pageCount);
    const userPrompt = `Generate a complete in-world book titled "${title}". Author: "${author}". Historical Era: "${era}". Genre: "${genre}". Required Pages: ${pageCount}.`;

    if (provider === 'gemini') {
      return this.callGemini(apiKey, model, systemPrompt, userPrompt);
    } else if (provider === 'openai' || provider === 'groq') {
      return this.callOpenAICompatible(apiKey, model, provider, endpoint, systemPrompt, userPrompt);
    } else if (provider === 'custom' && endpoint) {
      return this.callCustomEndpoint(endpoint, apiKey, systemPrompt, userPrompt);
    }

    // Default to Gemini
    return this.callGemini(apiKey, model, systemPrompt, userPrompt);
  }

  private buildSystemPrompt(genre: BookGenre, isSTEM: boolean, pageCount: number): string {
    const mathDirective = isSTEM
      ? `This book belongs to the "${genre}" academic discipline. You MAY include authentic, elegant LaTeX mathematical expressions (using $$ for display equations or $ for inline math) such as geometric proofs, alchemical balances, or astral matrices where appropriate.`
      : `CRITICAL RULE: This is a narrative "${genre}" volume (Tales, Chronicles, Lore, Bestiary, or History). It MUST CONTAIN 100% NATURAL, RICH, ATMOSPHERIC DARK FANTASY PROSE. DO NOT USE ANY LATEX, MATH FORMULAS, OR EQUATIONS IN THIS BOOK.`;

    return `You are the Grand Arch-Scribe of the Imperial Citadel Library in a 2000s retro dark fantasy realm.
Your task is to author a coherent, atmospheric, beautifully written manuscript based on the book's title and genre.

${mathDirective}

Each page in the "pages" array should contain 2 to 3 substantive paragraphs of immersive in-world lore, dialogue, historical accounts, or mystical treatises (approx 120-180 words per page).
Provide exactly ${pageCount} pages that tell a continuous, engaging story or treatise across:
- Page 1: Foundational premise, historical context, or ominous beginning.
- Page 2: Rising tension, expeditions, deeper discoveries, or core methodology.
- Page 3: The crucible, encounter, revelation, or esoteric climax.
- Page 4: Archival conclusion, philosophical resolution, or warnings to posterity.

Respond ONLY with valid JSON matching this exact structure:
{
  "title": "Title of the Book",
  "subtitle": "Poetic Subtitle",
  "author": "Author Name",
  "genre": "${genre}",
  "summary": "1-2 sentence archival summary",
  "pages": [
    "Page 1 paragraph text...",
    "Page 2 paragraph text...",
    "Page 3 paragraph text...",
    "Page 4 paragraph text..."
  ]
}`;
  }

  private async callGemini(
    apiKey: string,
    modelName: string,
    systemPrompt: string,
    userPrompt: string
  ): Promise<GeneratedBookJson> {
    const model = modelName || 'gemini-1.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemPrompt }]
          },
          contents: [
            {
              role: 'user',
              parts: [{ text: userPrompt }]
            }
          ],
          generationConfig: {
            temperature: 0.8,
            topP: 0.95,
            response_mime_type: 'application/json'
          }
        })
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Gemini API HTTP ${response.status}: ${errorText}`);
      }

      const json = await response.json();
      const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error('Empty response from Gemini API');

      return JSON.parse(text) as GeneratedBookJson;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private async callOpenAICompatible(
    apiKey: string,
    modelName: string,
    provider: 'openai' | 'groq',
    customEndpoint: string,
    systemPrompt: string,
    userPrompt: string
  ): Promise<GeneratedBookJson> {
    let url = customEndpoint;
    if (!url) {
      url = provider === 'groq'
        ? 'https://api.groq.com/openai/v1/chat/completions'
        : 'https://api.openai.com/v1/chat/completions';
    }

    const model = modelName || (provider === 'groq' ? 'llama-3.1-8b-instant' : 'gpt-4o-mini');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        signal: controller.signal,
        body: JSON.stringify({
          model,
          temperature: 0.8,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ]
        })
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`${provider.toUpperCase()} API HTTP ${response.status}: ${errorText}`);
      }

      const json = await response.json();
      const content = json.choices?.[0]?.message?.content;
      if (!content) throw new Error('Empty response from API');

      return JSON.parse(content) as GeneratedBookJson;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private async callCustomEndpoint(
    endpoint: string,
    apiKey: string,
    systemPrompt: string,
    userPrompt: string
  ): Promise<GeneratedBookJson> {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (apiKey) headers['Authorization'] = `Bearer ${apiKey}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ systemPrompt, userPrompt })
    });

    if (!response.ok) {
      throw new Error(`Custom endpoint HTTP ${response.status}`);
    }

    return (await response.json()) as GeneratedBookJson;
  }

  // =========================================================================
  // INTELLIGENT PROCEDURAL SCRIPTORIUM WEAVER (Deterministic Offline Scribe)
  // =========================================================================
  private generateProceduralLore(
    title: string,
    author: string,
    genre: BookGenre,
    era: string,
    seed: number,
    pageCount: number,
    isSTEM: boolean
  ): GeneratedBookJson {
    const prng = this.createPrng(seed);

    const titleKeywords = this.extractTitleKeywords(title);
    const primaryConcept = titleKeywords[0] || 'the Unspoken Mystery';
    const secondaryConcept = titleKeywords[1] || 'the Elder Realm';

    const locations = ['the lower catacombs', 'the Solstice Spire', 'the Whispering Crypts', 'the Iron Vault of Veritas', 'the Sunken Citadel'];
    const location = locations[Math.floor(prng() * locations.length)];

    const pages: string[] = [];

    if (isSTEM) {
      // Arcane Treatise / Alchemy / Astral Geometry
      pages.push(
        `It is the fundamental axiom of ${primaryConcept} that all observable matter resonates with an underlying etheric harmonic. In ${location}, prior to the great reformation of ${era}, natural philosophers posited that every spatial volume possesses an intrinsic flux.\n\n` +
        `When the boundary conditions are subjected to harmonic convergence, the celestial gradient establishes equilibrium:\n\n` +
        `$$\\oint_{\\partial \\Omega} \\nabla \\Psi \\cdot d\\mathbf{S} = \\lambda \\int_{\\Omega} \\rho(\\mathbf{r}) \\, dV$$\n\n` +
        `Here $\\Psi$ represents the astral potential while $\\lambda$ denotes the sacred resonance coefficient observed across the northern obsidian spires.`
      );

      pages.push(
        `Upon applying the transformation matrices of ${secondaryConcept}, the perturbation expansion yields distinct eigenmodes. Observations recorded within the high observatory demonstrate that spectral divergence remains bounded under continuous curvature.\n\n` +
        `$$\\mathbf{M}_{\\kappa} = \\begin{pmatrix} \\cos \\theta & -\\sin \\theta & 0 \\\\ \\sin \\theta & \\cos \\theta & 0 \\\\ 0 & 0 & e^{-\\alpha t} \\end{pmatrix}$$\n\n` +
        `Thus, the dissipation of etheric tension occurs exponentially along the tertiary axis, affirming the theorem of celestial conservation first inscribed by Master ${author}.`
      );

      pages.push(
        `The alchemical distillation of these principles requires meticulous crucible containment. When metallic salts are exposed to polarized moonlight at the solstice zenith, the latent transmutation energy attains critical resonance:\n\n` +
        `$$\\Delta G^{\\circ} = -R T \\ln \\mathcal{K}_{\\mathrm{trans}} + \\hbar \\omega_{\\mathrm{astral}}$$\n\n` +
        `Measurements confirmed across four consecutive lunar alignments exhibited an empirical error margin below three parts in ten thousand, establishing this proof beyond dispute.`
      );

      pages.push(
        `Let all subsequent scholars and apprentices take heed: while the mathematical scaffolding of ${title} remains unyielding, improper invocation of these field invariants risks catastrophic planar collapse.\n\n` +
        `We leave these theorems sealed within the Great Citadel Archives for the preservation of truth across all forthcoming eras.\n\n` +
        `❦ Quod Erat Demonstrandum • Inscribed by ${author}.`
      );
    } else {
      // Pure Narrative Prose (Chronicle, Bestiary, DarkFantasy, Historical, Fiction, Philosophy)
      pages.push(
        `The earliest records of ${primaryConcept} were carved into the damp slate of ${location} long before stone towers crowned the northern crags. In those forgotten years of ${era}, the wind carried whispers across the mist-shrouded valleys, speaking of ancient covenants struck between man and shadow.\n\n` +
        `Travellers journeying along the Old King's Highway would often speak of solitary lights flickering high among the pine ridges, where no hearth or fortress had ever been raised. It was said that whoever sought the truth of ${secondaryConcept} would find their footsteps inexorably drawn toward the deep forest barrows.`
      );

      pages.push(
        `By the time Master ${author} reached the border marches, the autumn rains had turned the logging trails into black mire. Deep within the ruined sanctuary, amongst moss-choked flagstones and rusted iron braziers, lay the first unmistakable signs of the ancient congregation.\n\n` +
        `There, etched into the lintel above the vault, were names belonging to lineages long thought extinguished. The air grew heavy with the scent of ozone and crushed juniper, and every shadow seemed to cast its gaze upon the intruder.`
      );

      pages.push(
        `In the darkest hours before the false dawn, the true nature of ${title} revealed itself with terrible clarity. The vault doors, forged from star-fallen iron and bound with brass rivets, opened without sound to reveal an abyss bathed in pale silver phosphorescence.\n\n` +
        `Neither sword nor shield could stay the dread that settled over the expedition. Those who ventured beyond the threshold returned changed, their voices reduced to dry whispers and their eyes bearing the reflection of constellations that no living astronomer had ever charted.`
      );

      pages.push(
        `Let this volume stand as a solemn testament to what transpired beneath the roots of the world. The chronicle of ${primaryConcept} is not merely a tale of stone and sorcery, but a warning to all who dare awaken what the ancients chose to bury.\n\n` +
        `Preserve these folios under lock and seal, and let no candle burn near these pages when the new moon rises over the citadel spires.\n\n` +
        `— Recorded by ${author}, Master Chronicler.`
      );
    }

    return {
      title,
      subtitle: `A Narrative Account of ${genre}`,
      author,
      genre,
      era,
      summary: `An authentic ${genre} manuscript chronicling ${primaryConcept} and the mysteries of ${secondaryConcept}.`,
      pages: pages.slice(0, pageCount)
    };
  }

  // =========================================================================
  // MANUSCRIPT SPREAD ASSEMBLER
  // =========================================================================
  private assembleBookData(params: {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    era: string;
    classification: MainBookClassification;
    subgenre: string;
    genre: BookGenre;
    summary?: string;
    seed: number;
    isSTEM: boolean;
    isAIGenerated: boolean;
    pageStrings: string[];
  }): BookData {
    const prng = this.createPrng(params.seed);

    const coverColors = ['#4a1c14', '#1f2e24', '#1c2838', '#382212', '#2d1838', '#3b2f1e', '#1c1c24'];
    const accentColors = ['#d4af37', '#c29b38', '#b8860b', '#cd7f32', '#997a3d', '#aa823a'];
    const coverColor = coverColors[Math.floor(prng() * coverColors.length)];
    const accentColor = accentColors[Math.floor(prng() * accentColors.length)];

    const fontFamilies: BookFontFamily[] = ['garamond', 'gothic', 'scriptorium', 'crimson', 'mystic'];
    const fontSizes: BookFontSize[] = ['compact', 'regular', 'relaxed'];

    const fontFamily: BookFontFamily = params.isSTEM ? 'crimson' : fontFamilies[Math.floor(prng() * fontFamilies.length)];
    const fontSize: BookFontSize = params.isSTEM ? 'compact' : fontSizes[Math.floor(prng() * fontSizes.length)];

    let layoutFormat: BookLayoutFormat = 'standard';
    let writingStyle: BookWritingStyle = 'chronicle-history';

    if (params.isSTEM) {
      layoutFormat = 'standard';
      writingStyle = 'academic-treatise';
    } else if (params.genre === 'DarkFantasy' || params.genre === 'Fiction') {
      layoutFormat = 'standard';
      writingStyle = 'gothic-fiction';
    } else if (params.genre === 'Philosophy') {
      layoutFormat = 'marginalia';
      writingStyle = 'philosophical-dialogue';
    }

    const pages: BookPage[] = [];

    // 1. Half-Title (Folio 1)
    pages.push({
      pageType: 'half-title',
      chapterTitle: '',
      pageNumber: 1,
      content: `\n\n\n\n\n\n${params.title.toUpperCase()}\n\n❦`
    });

    // 2. Frontispiece (Folio 2)
    pages.push({
      pageType: 'frontispiece',
      chapterTitle: 'FRONTISPIECE',
      pageNumber: 2,
      content: `═══════════════════════════════\n    IMPERIAL CITADEL SCRIPTORIUM\n    ARCHIVAL CATALOGUE REGISTRY\n═══════════════════════════════\n\nPreserved in the Solstice Vaults\nDiscipline: ${params.genre.toUpperCase()}\nEra: ${params.era.toUpperCase()}\n\n❦ Omnia Vincit Veritas ❦`
    });

    // 3. Title Page (Folio 3)
    pages.push({
      pageType: 'title-page',
      chapterTitle: 'TITLE PAGE',
      pageNumber: 3,
      content: `${params.title.toUpperCase()}\n\n— ${params.subtitle} —\n\n\nBY\n${params.author.toUpperCase()}\n\n\nARCHIVAL GENRE: ${params.genre.toUpperCase()}\nACADEMIC DISCIPLINE: ${params.subgenre.toUpperCase()}\n\n\n❦ ══════════════════ ❧\nPUBLISHED BY THE ORDER OF THE COMPASS\nARCHIVES OF ALDERIA • ${params.era.toUpperCase()}`
    });

    // 4. Archival Notice / Copyright (Folio 4)
    pages.push({
      pageType: 'copyright',
      chapterTitle: 'ARCHIVAL NOTICE',
      pageNumber: 4,
      content: `ARCHIVAL REPOSITORY OF ALDERIA\nPreserved under the Perpetual Edict of the Imperial Council.\n\nManuscript Registry: ARCH-${1000 + (params.seed % 9000)}-AL-${10 + (params.seed % 89)}\nClassification: ${params.genre}\nCatalog Location: Imperial Bay ${1 + (params.seed % 8)}, Shelf ${1 + (params.seed % 6)}\nHistorical Era: ${params.era}\n\nHand-inscribed upon Linen Vellum with Iron-Gall Ink.\nBound in Calfskin with Brass Hardware.\n\n${params.isAIGenerated ? '✦ Transcribed via Real-Time Scriptorium AI Intelligence ✦' : '✦ Transcribed via Canonical Archival Codex ✦'}`
    });

    // 5. Narrative Chapter Pages (Folios 5..N)
    const chapterRomanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
    let pageNum = 5;

    for (let i = 0; i < params.pageStrings.length; i++) {
      const roman = chapterRomanNumerals[i] || `${i + 1}`;
      const pageContent = params.pageStrings[i];

      pages.push({
        pageType: 'chapter',
        chapterTitle: `CHAPTER ${roman}`,
        pageNumber: pageNum,
        content: pageContent,
        headerText: `${params.title.toUpperCase()} • FOLIO ${pageNum}`,
        hasMathProof: params.isSTEM
      });
      pageNum++;
    }

    // 6. Epilogue (Last Folio)
    pages.push({
      pageType: 'epilogue',
      chapterTitle: 'EPILOGUE: THE SEAL OF SECRETS',
      pageNumber: pageNum,
      content: `Thus concludes the manuscript of ${params.title}.\n\n` +
        `Let those who hold this vellum remember that words once spoken into the dark never truly perish. ` +
        `May the light of wisdom guide those who wander the deep archives.\n\n` +
        `❦ Ex Libris Bibliotheca Magna • Finis ❦`,
      headerText: `${params.title.toUpperCase()} • EPILOGUE`
    });

    return {
      id: params.id,
      title: params.title,
      subtitle: params.subtitle,
      author: params.author,
      era: params.era,
      classification: params.classification,
      subgenre: params.subgenre,
      genre: params.genre,
      coverColor,
      accentColor,
      fontFamily,
      fontSize,
      layoutFormat,
      writingStyle,
      isSTEM: params.isSTEM,
      seed: params.seed,
      summary: params.summary,
      pages,
      isLoaded: true,
      isAIGenerated: params.isAIGenerated
    };
  }

  // =========================================================================
  // UTILITIES & INFERENCE HELPERS
  // =========================================================================
  public inferGenre(title: string, classification?: string, subgenre?: string): BookGenre {
    const t = `${title} ${classification || ''} ${subgenre || ''}`.toLowerCase();

    if (t.includes('algebra') || t.includes('geometry') || t.includes('calculat') || t.includes('astral') || t.includes('ephemeris') || t.includes('orbital') || t.includes('sphere')) {
      return 'AstralGeometry';
    }
    if (t.includes('alchem') || t.includes('smelt') || t.includes('crucible') || t.includes('transmutation') || t.includes('elixir') || t.includes('potions')) {
      return 'Alchemy';
    }
    if (t.includes('treatise') || t.includes('theorem') || t.includes('axiom') || t.includes('mechanic') || t.includes('arcane') || t.includes('optics') || t.includes('resonance')) {
      return 'ArcaneTreatise';
    }
    if (t.includes('number') || t.includes('ratio') || t.includes('numerology') || t.includes('cipher') || t.includes('crypt')) {
      return 'Numerology';
    }
    if (t.includes('beast') || t.includes('monster') || t.includes('dragon') || t.includes('fauna') || t.includes('flora') || t.includes('serpent') || t.includes('griffin')) {
      return 'Bestiary';
    }
    if (t.includes('chronicle') || t.includes('history') || t.includes('annals') || t.includes('conquest') || t.includes('war') || t.includes('empire') || t.includes('reign')) {
      return 'Chronicle';
    }
    if (t.includes('philosophy') || t.includes('truth') || t.includes('dialogue') || t.includes('doctrine') || t.includes('meditation') || t.includes('epistemology')) {
      return 'Philosophy';
    }
    if (t.includes('legend') || t.includes('myth') || t.includes('tale') || t.includes('ballad') || t.includes('saga') || t.includes('shadow') || t.includes('knight')) {
      return 'DarkFantasy';
    }

    return 'DarkFantasy';
  }

  public isStemGenre(genre: BookGenre): boolean {
    return genre === 'ArcaneTreatise' || genre === 'Alchemy' || genre === 'Numerology' || genre === 'AstralGeometry';
  }

  private inferClassification(genre: BookGenre): MainBookClassification {
    switch (genre) {
      case 'ArcaneTreatise':
      case 'AstralGeometry':
      case 'Numerology':
        return 'Breakthroughs & Theories';
      case 'Alchemy':
        return 'Professional Manuals';
      case 'Chronicle':
      case 'Historical':
        return 'Non-Fiction';
      case 'Bestiary':
        return 'Academic Texts & Grammar';
      case 'Philosophy':
        return 'Dissertations';
      case 'DarkFantasy':
      case 'Fiction':
      default:
        return 'Tales & Mythology';
    }
  }

  private extractTitleKeywords(title: string): string[] {
    const stopWords = new Set(['the', 'of', 'and', 'in', 'on', 'a', 'an', 'to', 'for', 'with', 'by', 'from', 'at', 'into', 'upon']);
    const words = title
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .split(/\s+/)
      .filter((w) => w.length > 2 && !stopWords.has(w.toLowerCase()));
    return words.length > 0 ? words : ['The Elder Relic', 'Ancient Lore'];
  }

  private generateAuthorName(seed: number): string {
    const firstNames = ['Aurelius', 'Cassian', 'Valerius', 'Ignatius', 'Theodosia', 'Severus', 'Lucian', 'Hadrian', 'Gawain', 'Taliesin', 'Zephyrus', 'Farhan', 'Hildegard', 'Rowena', 'Balthazar'];
    const epithets = ['of Oakhaven', 'of the Iron Quill', 'the Stargazer', 'of Sunken Alderia', 'of House Lionheart', 'Arch-Scholar of Veritas', 'the Alchemist of Caelum-Vara', 'the Cartographer'];
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
}

export const bookGeneratorService = BookGeneratorService.getInstance();
