import { DarkFantasyGenre, BookBlueprint, ChapterOutlineBeat } from '../lore/BookTypes';
import { aiConfigManager } from '../config/aiConfig';

export interface BatchGenerationResult {
  pages: string[];
  batchSummary: string;
}

export class AiBookService {
  private static instance: AiBookService;

  private constructor() {}

  public static getInstance(): AiBookService {
    if (!AiBookService.instance) {
      AiBookService.instance = new AiBookService();
    }
    return AiBookService.instance;
  }

  // =========================================================================
  // GENRE TAXONOMY & MATH GATING
  // =========================================================================
  public isMathAllowedForGenre(genre: DarkFantasyGenre): boolean {
    const mathGenres: DarkFantasyGenre[] = [
      'Alchemical Formulae',
      'Abyssal Gazeteers',
      'Architectural Layouts',
      'Cipher Keys',
      'Necromancy Grimoires',
      'Hemomancy Scrolls'
    ];
    return mathGenres.includes(genre);
  }

  public getGenrePromptGuidance(genre: DarkFantasyGenre): string {
    switch (genre) {
      case 'Necromancy Grimoires':
        return 'Tone: Sinister, macabre, instructional. Focus on soul weights, corpse preservation salts, reanimation rites, decay curses, and necromantic binding circles. Use LaTeX formulas for soul mass dissipation and decay constants.';
      case 'Demonology Codices':
        return 'Tone: Ominous, scholastic, strictly cautionary. Detail true demonic names, hierarchical demon ranks, abyssal circles, blood pact contracts, and salt-warding geometries.';
      case 'Abyssal Gazeteers':
        return 'Tone: Cosmic horror, dread-inducing, spatial anomaly log. Describe non-Euclidean angles, sunken cyclopean spires, insanity rifts, and dimensional folds. Use LaTeX expressions for multi-dimensional curvatures and tensor manifolds.';
      case 'Alchemical Formulae':
        return 'Tone: Precise, arcane-scientific, laboratory treatise. Detail crucible heat thresholds, homunculi incubation matrices, vitriol distillations, and mercury salts. Use LaTeX for stoichiometric reaction equations and enthalpy proofs.';
      case 'Hemomancy Scrolls':
        return 'Tone: Visceral, forbidden, ritualistic. Detail sanguine viscosities, coagulation runes, flesh-stitch binding, and sacrificial vessel capacities. Use LaTeX for blood hydrostatic flow rates.';
      case 'Apocalyptic Chronicles':
        return 'Tone: Tragic, epic, harrowing eyewitness accounts. Pure natural prose detailing the sundering of heavens, the death of elder gods, shattered mountain peaks, and ash-buried empires. NO MATH.';
      case 'Genealogies of Damned Lineages':
        return 'Tone: Aristocratic, decaying, heraldic. Pure natural prose cataloging corrupted dynasties, vampiric bloodlines, cursed scions, hereditary madness, and ancestral mausoleums. NO MATH.';
      case 'Inquisition Journals':
        return 'Tone: Fanatical, austere, chillingly bureaucratic. Pure natural prose recording heresy trials, confessions extracted under iron pincers, witch-stake decrees, and purge manifests. NO MATH.';
      case 'Monarchic Decrees':
        return 'Tone: Imperial, authoritarian, solemn. Pure natural prose featuring royal edicts, treason condemnations, martial law declarations, and seal of the Iron Scepter. NO MATH.';
      case 'Mythological Cycle Books':
        return 'Tone: Mythic, cosmological, contradictory lore. Pure natural prose detailing primordial creator gods, why the sun eclipsed, titan wars, and the celestial silence. NO MATH.';
      case 'Cryptid Anatomies':
        return 'Tone: Field naturalist, tactical, forensic dissection. Pure natural prose detailing organ harvesting, bone density, venom sac extraction, stalking behavior, and combat vulnerabilities of dungeon horrors. NO MATH.';
      case 'Heresiographies':
        return 'Tone: Undercover investigation, cautionary occult catalog. Pure natural prose documenting clandestine cult cabals, secret handshakes, sacrificial alters, and rites to banish cult avatars. NO MATH.';
      case 'Flora Morbida':
        return 'Tone: Herbalist apothecary, botanical field guide. Pure natural prose cataloging poisonous tomb-mosses, weeping nightshades, corpse-bloom spores, antidote brews, and harvesting safety gloves. NO MATH.';
      case 'Heretical Philosophies':
        return 'Tone: Nihilistic, existential, sharp philosophical disputation. Pure natural prose deconstructing orthodox faith, praising cosmic void, arguing for entropy as the ultimate truth. NO MATH.';
      case 'Tragic Plays':
        return 'Tone: Theatrical, poetic, Shakespearean dark tragedy. Written as dramatic play scripts with [Scene I, Act II], character dialogue prefixes (e.g. "LORD VALERIUS:"), stage directions in parentheses, and doomed betrayals. NO MATH.';
      case 'Malediction Poetry':
        return 'Tone: Darkly lyrical, metered verse, gothic balladry. Structured as poetic stanzas with rhyme schemes containing veiled directions and cryptic riddles to dungeon secrets. NO MATH.';
      case 'Architectural Layouts':
        return 'Tone: Structural engineer, dungeon surveyor, fortress architect. Describe subterranean vault spans, portcullis counterbalance gears, pressure plate traps, and masonry strain limits. Use LaTeX for cantilever beam loads and shear stress tensors.';
      case 'Blacksmithing Manuals':
        return 'Tone: Industrial, soot-stained, metallurgy craft. Pure natural prose detailing meteor ore smelting, bone-quenched blade tempering, Damascus fold patterns, and anvil resonance. NO MATH.';
      case 'Cipher Keys':
        return 'Tone: Cryptanalytic, paranoid, mathematical intrigue. Describe substitution alphabets, steganographic grids, and cipher wheel permutations. Use LaTeX for modular congruence equations and prime factorization proofs.';
      default:
        return 'Tone: 2000s retro dark fantasy immersive manuscript. Rich atmospheric prose.';
    }
  }

  // =========================================================================
  // TIER 1: BLUEPRINT GENERATION
  // =========================================================================
  public async generateBlueprint(
    title: string,
    author: string,
    genre: DarkFantasyGenre,
    era: string,
    targetPageCount: number
  ): Promise<BookBlueprint> {
    const isMathAllowed = this.isMathAllowedForGenre(genre);
    const genreGuidance = this.getGenrePromptGuidance(genre);

    const systemPrompt = `You are the Grand Arch-Scribe of the Imperial Citadel Library in a dark fantasy 2000s retro realm.
Create a comprehensive Book Blueprint and Chapter Outline for a ${targetPageCount}-page manuscript titled "${title}".
Genre: "${genre}".
Author: "${author}".
Historical Era: "${era}".

${genreGuidance}

Divide the book into 3 to 6 major thematic chapters that span the total of ${targetPageCount} pages (approx 4-10 pages per chapter).
Respond ONLY with a valid JSON object matching this schema:
{
  "title": "${title}",
  "subtitle": "Evocative Subtitle",
  "author": "${author}",
  "era": "${era}",
  "genre": "${genre}",
  "targetPageCount": ${targetPageCount},
  "overallPremise": "2-3 sentence overarching narrative thesis or premise.",
  "chapterOutlines": [
    {
      "chapterIndex": 1,
      "title": "Chapter I: Title",
      "pageRange": [5, 8],
      "keyBeats": "Key events, treatises, or revelations covered in this chapter",
      "hasMath": ${isMathAllowed}
    }
  ]
}`;

    const userPrompt = `Generate the Blueprint and Chapter Outlines for "${title}" (${genre}, ${targetPageCount} pages total).`;

    const json = await this.callAI<{
      title: string;
      subtitle: string;
      author: string;
      era: string;
      genre: DarkFantasyGenre;
      targetPageCount: number;
      overallPremise: string;
      chapterOutlines: ChapterOutlineBeat[];
    }>(systemPrompt, userPrompt);

    return {
      id: `blueprint_${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
      title: json.title || title,
      subtitle: json.subtitle || `A Volume of ${genre}`,
      author: json.author || author,
      era: json.era || era,
      genre,
      classification: this.inferClassification(genre),
      subgenre: genre,
      targetPageCount: json.targetPageCount || targetPageCount,
      overallPremise: json.overallPremise || `The authentic chronicles of ${title}.`,
      chapterOutlines: json.chapterOutlines || [],
      coverColor: '#3b190f',
      accentColor: '#d4af37',
      fontFamily: isMathAllowed ? 'crimson' : genre === 'Malediction Poetry' ? 'mystic' : 'garamond',
      fontSize: isMathAllowed ? 'compact' : 'regular',
      layoutFormat: genre === 'Malediction Poetry' ? 'verse' : genre === 'Tragic Plays' ? 'play-script' : 'standard',
      writingStyle: this.inferWritingStyle(genre),
      isSTEM: isMathAllowed,
      seed: Math.floor(Math.random() * 100000)
    };
  }

  // =========================================================================
  // TIER 2: BATCH PAGE GENERATION (Contiguous 4-8 Pages)
  // =========================================================================
  public async generatePageBatch(
    blueprint: BookBlueprint,
    startPage: number,
    endPage: number,
    summaryOfPreviousPages: string,
    currentChapter?: ChapterOutlineBeat
  ): Promise<BatchGenerationResult> {
    const isMathAllowed = blueprint.isSTEM;
    const count = endPage - startPage + 1;
    const genreGuidance = this.getGenrePromptGuidance(blueprint.genre);

    const mathInstruction = isMathAllowed
      ? `This is a technical/arcane volume (${blueprint.genre}). Format mathematical proofs and equations using standalone $$...$$ blocks or inline $x$ notation. Ensure equations are mathematically plausible rather than arbitrary characters.`
      : `CRITICAL MANDATE: This is a pure narrative/literary volume (${blueprint.genre}). YOU MUST USE 100% NATURAL, RICH DARK FANTASY PROSE. DO NOT INCLUDE ANY LATEX, KA-TEX, OR MATHEMATICAL FORMULAS.`;

    const systemPrompt = `You are the Grand Arch-Scribe of the Imperial Citadel Library.
Author pages ${startPage} through ${endPage} (exactly ${count} pages) for the book "${blueprint.title}".
Author: "${blueprint.author}".
Genre: "${blueprint.genre}".
Overall Premise: "${blueprint.overallPremise}".
Active Chapter Context: "${currentChapter ? currentChapter.title + ' — ' + currentChapter.keyBeats : 'Continuing lore'}".
Previous Story Context: "${summaryOfPreviousPages || 'Opening folios'}".

${genreGuidance}
${mathInstruction}

Formatting Rules:
- Output exactly ${count} substantive in-world pages in the "pages" array (each page ~130-180 words, 2-3 paragraphs or scripted dialogue/poetry).
- Maintain direct continuity from the previous pages.
- Also include a 1-sentence "batchSummary" describing what happened on these pages for subsequent context chaining.

Respond ONLY with valid JSON:
{
  "pages": [
    "Page ${startPage} text...",
    "Page ${startPage + 1} text..."
  ],
  "batchSummary": "Brief summary of pages ${startPage}-${endPage}"
}`;

    const userPrompt = `Write pages ${startPage} to ${endPage} for "${blueprint.title}".`;

    const json = await this.callAI<{ pages: string[]; batchSummary: string }>(systemPrompt, userPrompt);
    return {
      pages: json.pages || [],
      batchSummary: json.batchSummary || `Pages ${startPage}–${endPage} inscribed.`
    };
  }

  // =========================================================================
  // LOW-LEVEL AI CLIENT (Gemini 2.0 / 1.5, OpenAI, Groq, Custom)
  // =========================================================================
  private async callAI<T>(systemPrompt: string, userPrompt: string): Promise<T> {
    const provider = aiConfigManager.getProvider();
    const apiKey = aiConfigManager.getApiKey();
    const model = aiConfigManager.getModel();
    const endpoint = aiConfigManager.getEndpoint();

    if (provider === 'gemini') {
      return this.callGemini<T>(apiKey, model, systemPrompt, userPrompt);
    } else if (provider === 'openai' || provider === 'groq') {
      return this.callOpenAICompatible<T>(apiKey, model, provider, endpoint, systemPrompt, userPrompt);
    } else if (provider === 'custom' && endpoint) {
      return this.callCustom<T>(endpoint, apiKey, systemPrompt, userPrompt);
    }

    return this.callGemini<T>(apiKey, model, systemPrompt, userPrompt);
  }

  private async callGemini<T>(apiKey: string, modelName: string, systemPrompt: string, userPrompt: string): Promise<T> {
    const model = modelName || 'gemini-1.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 14000);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
          generationConfig: {
            temperature: 0.82,
            topP: 0.95,
            response_mime_type: 'application/json'
          }
        })
      });
      clearTimeout(timeoutId);

      if (!res.ok) {
        const err = await res.text();
        throw new Error(`Gemini HTTP ${res.status}: ${err}`);
      }

      const data = await res.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error('Empty response from Gemini');
      return JSON.parse(text) as T;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private async callOpenAICompatible<T>(
    apiKey: string,
    modelName: string,
    provider: 'openai' | 'groq',
    endpoint: string,
    systemPrompt: string,
    userPrompt: string
  ): Promise<T> {
    let url = endpoint;
    if (!url) {
      url = provider === 'groq'
        ? 'https://api.groq.com/openai/v1/chat/completions'
        : 'https://api.openai.com/v1/chat/completions';
    }
    const model = modelName || (provider === 'groq' ? 'llama-3.1-8b-instant' : 'gpt-4o-mini');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 14000);

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        signal: controller.signal,
        body: JSON.stringify({
          model,
          temperature: 0.82,
          response_format: { type: 'json_object' },
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ]
        })
      });
      clearTimeout(timeoutId);

      if (!res.ok) {
        const err = await res.text();
        throw new Error(`${provider.toUpperCase()} HTTP ${res.status}: ${err}`);
      }

      const data = await res.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error('Empty response from API');
      return JSON.parse(content) as T;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private async callCustom<T>(endpoint: string, apiKey: string, systemPrompt: string, userPrompt: string): Promise<T> {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (apiKey) headers['Authorization'] = `Bearer ${apiKey}`;

    const res = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ systemPrompt, userPrompt })
    });
    if (!res.ok) throw new Error(`Custom endpoint HTTP ${res.status}`);
    return (await res.json()) as T;
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
    if (this.isMathAllowedForGenre(genre)) return 'academic-treatise';
    return 'chronicle-history';
  }
}

export const aiBookService = AiBookService.getInstance();
