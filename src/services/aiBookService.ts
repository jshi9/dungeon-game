import { DarkFantasyGenre, BookBlueprint, ChapterOutlineBeat } from '../lore/BookTypes';
import { aiConfigManager } from '../config/aiConfig';

export interface BatchGenerationResult {
  pages: string[];
  batchSummary: string;
  isProceduralFallback?: boolean;
}

export class AiBookService {
  private static instance: AiBookService;
  private static readonly REQUEST_TIMEOUT_MS = 8000; // 8s fast failover

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
      'Planar Atlases',
      'Lichdom Blueprints',
      'Architectural Layouts',
      'Ossuary Architecture',
      'Cipher Keys',
      'Necromancy Grimoires',
      'Hemomancy Scrolls'
    ];
    return mathGenres.includes(genre);
  }

  public getGenrePromptGuidance(genre: DarkFantasyGenre): string {
    switch (genre) {
      // 🫀 1. Living & Sentient Volumes (The Biological Texts)
      case 'Parasitic Grimoires':
        return 'Tone: Visceral, predatory, sentient parchment. The book actively hungers for the reader\'s blood, memories, and vitality in exchange for forbidden knowledge. Describe pulsing veins in margins, moist pages, and the cost of turning each folio.';
      case 'Mimic Lexicons':
        return 'Tone: Deceptive, predatory, sudden visceral horror. The book is disguised as a mundane innocent book that snaps with needle-teeth, oozes paralyzing venom, or mimics voices when opened.';
      case 'Symbiotic Journals':
        return 'Tone: Organic, quivering, telepathic bond. The text rearranges itself in real-time to answer the reader\'s unvoiced thoughts. The cover is warm living skin that bruises and heals.';
      case 'Crying Folios':
        return 'Tone: Mournful, tortured, weeping black bile. The volume emits low groans and bitter weeping when near holy symbols or daylight. Words are written in dark excretions and tears.';
      case 'Chained Codices':
        return 'Tone: Extremely volatile, dangerous, restrained containment. Locked behind triple iron padlocks and meteor-steel chains. The text thrashes and attempts to cast itself aloud if loosened.';

      // 🩸 2. Cosmic Horror & The Blind Realms (The Unraveling Texts)
      case 'Madness Manifestos':
        return 'Tone: Cosmic dread, psychic fracture, geometric insanity. Eyewitness accounts of the deep void beyond the stars. Describe angles that hurt human vision and words that induce vertigo. Use occasional non-Euclidean LaTeX dimensional expressions.';
      case 'Planar Atlases':
        return 'Tone: Spatial cartography of impossible realms where physical laws invert. Describe gravity anomalies, leaking void-matter, and shifting coordinates. Use LaTeX for topological manifolds and tensor curvature.';
      case 'Astral Voyagers\' Logs':
        return 'Tone: Transcendent, eerie, severed consciousness. Diaries of occultists whose soul projected beyond the silver cord, capturing the terrible moment an outer god looked directly back at them.';
      case 'Echo Texts':
        return 'Tone: Shifting, nocturnal, moon-dependent. The written text changes entirely depending on the hour of night and the phase of the dying moon.';

      // 💀 3. Death-Craft & Necrotic Lore (The Bone Texts)
      case 'Mortuary Liturgies':
        return 'Tone: Surgical, ritualistic, macabre craft. Step-by-step instructions on soul-harvesting, pinning wandering phantoms to iron vessels, and sewing flesh with grave-threads.';
      case 'Lichdom Blueprints':
        return 'Tone: Ultimate forbidden formula, clinical agony of transcendence. Documents the exact severance of soul from flesh, preparation of the mercury phylactery, and eternal preservation. Use LaTeX for soul-binding energy transfer integrals.';
      case 'Sepulcher Registries':
        return 'Tone: Archival, solemn death-roll. Detailed registries of every corpse and spirit interred in forgotten catacombs, used to summon specific spirits by their true mortal names.';
      case 'Ossuary Architecture':
        return 'Tone: Structural skeletal engineering, gothic calcification. Architectural blueprints for erecting cathedrals, altars, and keystone arches out of human ribs, skull keystones, and marrow mortar. Use LaTeX for structural thrust equations.';

      // ⏳ 4. Forbidden Chronologies & Grim History (The Erased Texts)
      case 'Censored Dynasties':
        return 'Tone: Reconstructed forbidden history, political erased memory. Chronicles of sovereign empires, blasphemous queens, and fallen kings completely stricken from public monuments.';
      case 'Pre-Fall Geographies':
        return 'Tone: Nostalgic, majestic, vanished golden age. Maps and geographical surveys of the lush world before the sun fractured and the oceans turned to black sulfur.';
      case 'Doomsday Presages':
        return 'Tone: Prophetic dread, apocalyptic certainty. Astrological horoscopes and seer visions predicting the exact regional cataclysms and the hour the mountains collapse.';
      case 'Martyr Logs':
        return 'Tone: Clinical, dispassionate torturer records. Transcripts of the final words, confessions, and unbroken defiance of saints and condemned heretics under the inquisitor\'s iron.';

      // 🌿 5. Corrupted Nature & Toxic Bestiaries (The Terrestrial Texts)
      case 'Grave-Botanicals':
        return 'Tone: Morbid botanical naturalist. Detailed sketches of parasitic plants, corpse-bloom lilies, and nightshades that grow only inside human ribcages or feed on despair.';
      case 'Monstrous Taxonomies':
        return 'Tone: Forensic beast dissection, tactical hunter guide. Dissection records of apex dungeon abominations, detailing nerve clusters, organ weaknesses, and venom harvest protocols.';
      case 'Venom Compendiums':
        return 'Tone: Toxicological masterwork, sinister apothecary. Recipes for poisons that rot the bloodline, curdle the ghost, or induce permanent paralytic stasis.';
      case 'Lycanthropic Lineages':
        return 'Tone: Hereditary curse pathology, lunar biology. Case studies tracking the contagion of the beast-blood through noble houses and full moon physiological transformations.';

      // ⚖️ 6. Blasphemous Philosophy & False Faiths (The Heretical Texts)
      case 'Anti-Theology':
        return 'Tone: Deconstructive, nihilistic, coldly rational. Philosophical proofs arguing that the creators of the universe are either blind, dead, or actively predatory.';
      case 'Sectarian Liturgies':
        return 'Tone: Underground cult prayer-book, decadent and beautiful. Holy scriptures of secret covens worshiping decay, swarms, and starvation with hymn-like cadence.';
      case 'Delusion Diaries':
        return 'Tone: Psychological decay, asylum case studies. The feverish journals of asylum patients who all sketched the exact same obsidian obelisk on the same night.';

      // 📜 7. Forbidden Magic & Arcane Texts (Spells & Stats)
      case 'Necromancy Grimoires':
        return 'Tone: Sinister, macabre, instructional. Focus on soul weights, corpse preservation salts, reanimation rites, decay curses, and necromantic binding circles. Use LaTeX formulas for soul mass dissipation and decay constants.';
      case 'Demonology Codices':
        return 'Tone: Ominous, scholastic, strictly cautionary. Detail true demonic names, hierarchical demon ranks, abyssal circles, blood pact contracts, and salt-warding geometries.';
      case 'Abyssal Gazeteers':
        return 'Tone: Cosmic horror, spatial anomaly log. Describe non-Euclidean angles, sunken cyclopean spires, and dimensional folds. Use LaTeX expressions for multi-dimensional curvatures and tensor manifolds.';
      case 'Alchemical Formulae':
        return 'Tone: Arcane-scientific laboratory treatise. Detail crucible heat thresholds, homunculi incubation matrices, vitriol distillations, and mercury salts. Use LaTeX for stoichiometric reaction equations and enthalpy proofs.';
      case 'Hemomancy Scrolls':
        return 'Tone: Visceral, ritualistic blood magic. Detail sanguine viscosities, coagulation runes, flesh-stitch binding, and sacrificial vessel capacities. Use LaTeX for blood hydrostatic flow rates.';

      // 🏛️ 8. World Lore & Grim History
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

      // 🌿 9. Bestiaries & Field Guides
      case 'Cryptid Anatomies':
        return 'Tone: Field naturalist, tactical, forensic dissection. Pure natural prose detailing organ harvesting, bone density, venom sac extraction, stalking behavior, and combat vulnerabilities of dungeon horrors. NO MATH.';
      case 'Heresiographies':
        return 'Tone: Undercover investigation, cautionary occult catalog. Pure natural prose documenting clandestine cult cabals, secret handshakes, sacrificial alters, and rites to banish cult avatars. NO MATH.';
      case 'Flora Morbida':
        return 'Tone: Herbalist apothecary, botanical field guide. Pure natural prose cataloging poisonous tomb-mosses, weeping nightshades, corpse-bloom spores, antidote brews, and harvesting safety gloves. NO MATH.';

      // 🎭 10. Dark Philosophy & Fiction
      case 'Heretical Philosophies':
        return 'Tone: Nihilistic, existential, sharp philosophical disputation. Pure natural prose deconstructing orthodox faith, praising cosmic void, arguing for entropy as the ultimate truth. NO MATH.';
      case 'Tragic Plays':
        return 'Tone: Theatrical, poetic, Shakespearean dark tragedy. Written as dramatic play scripts with [Scene I, Act II], character dialogue prefixes (e.g. "LORD VALERIUS:"), stage directions in parentheses, and doomed betrayals. NO MATH.';
      case 'Malediction Poetry':
        return 'Tone: Darkly lyrical, metered verse, gothic balladry. Structured as poetic stanzas with rhyme schemes containing veiled directions and cryptic riddles to dungeon secrets. NO MATH.';

      // 🛠️ 11. Practical & Lost Knowledge
      case 'Architectural Layouts':
        return 'Tone: Structural engineer, dungeon surveyor, fortress architect. Describe subterranean vault spans, portcullis counterbalance gears, pressure plate traps, and masonry strain limits. Use LaTeX for cantilever beam loads and shear stress tensors.';
      case 'Blacksmithing Manuals':
        return 'Tone: Industrial, soot-stained, metallurgy craft. Pure natural prose detailing meteor ore smelting, bone-quenched blade tempering, Damascus fold patterns, and anvil resonance. NO MATH.';
      case 'Cipher Keys':
        return 'Tone: Cryptanalytic, paranoid, mathematical intrigue. Describe substitution alphabets, steganographic grids, and cipher wheel permutations. Use LaTeX for modular congruence equations and prime factorization proofs.';

      // 📖 12. Major Fiction Genres
      case 'Fantasy':
        return 'Tone: High fantasy epic, sweeping adventure, legendary swords, ancient kingdoms, and arcane wonder.';
      case 'Science Fiction':
        return 'Tone: Futuristic steampunk, chrono-mechanics, void vessels, automaton consciousness, and clockwork logic.';
      case 'Romance':
        return 'Tone: Passionate, emotional, courtly romance, doomed lovers, secret letters, and dramatic devotion.';
      case 'Mystery':
        return 'Tone: Inquisitorial detective intrigue, deduction, locked-chamber puzzles, forensic clues, and shocking reveals.';
      case 'Thriller & Suspense':
        return 'Tone: Fast-paced, high tension, desperate escapes, ticking clocks, assassins, and mortal peril.';
      case 'Horror':
        return 'Tone: Gothic dread, psychological terror, haunted halls, apparitions, and grotesque revelations.';
      case 'Historical Fiction':
        return 'Tone: Richly textured historical drama, siege of ancient citadels, realpolitik, and era-authentic lives.';
      case 'Literary Fiction':
        return 'Tone: Introspective, deep character exploration, lyrical prose, existential nuance, and melancholic beauty.';
      case 'Young Adult':
        return 'Tone: Energetic coming-of-age, young apprentices discovering secret powers, bravery, and friendship in dark worlds.';

      // 📚 13. Major Non-Fiction Genres
      case 'Biography & Memoir':
        return 'Tone: First-person memoirs, personal reflections, legacy, triumphs, and candid confessions of historical figures.';
      case 'Self-Help':
        return 'Tone: Practical guidance for mental fortitude, mindfulness, stoicism, memory improvement, and resilience.';
      case 'True Crime':
        return 'Tone: Investigative, forensic, detailing historical court trials, famous poisonings, and notorious relics heists.';
      case 'History':
        return 'Tone: Scholarly historical analysis, military campaigns, cultural shifts, and economic developments across eras.';
      case 'Cookbooks & Food':
        return 'Tone: Culinary arts, recipes, foraging guides, festive banquets, baking, and aromatic seasoning.';
      case 'Travel':
        return 'Tone: Vivid travelogue, expeditions into distant lands, maritime voyages, customs of nomad tribes, and maps.';

      default:
        return 'Tone: Immersive retro manuscript with rich atmospheric prose.';
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

    // If previous summaries are missing (e.g. on direct jump to Page 32), interpolate from chapter beats
    const contextSummary = summaryOfPreviousPages
      ? summaryOfPreviousPages
      : `Premise: ${blueprint.overallPremise}. Chapter Context: ${currentChapter ? currentChapter.keyBeats : 'Advancing lore'}`;

    const systemPrompt = `You are the Grand Arch-Scribe of the Imperial Citadel Library.
Author pages ${startPage} through ${endPage} (exactly ${count} pages) for the book "${blueprint.title}".
Author: "${blueprint.author}".
Genre: "${blueprint.genre}".
Overall Premise: "${blueprint.overallPremise}".
Active Chapter: "${currentChapter ? currentChapter.title : 'Chapter I'}".
Active Chapter Focus: "${currentChapter ? currentChapter.keyBeats : 'Advancing the core theme'}".
Story Context So Far: "${contextSummary}".

${genreGuidance}
${mathInstruction}

CRITICAL MANDATES:
1. STRICT TOPIC & CHAPTER FIDELITY: Every single paragraph MUST directly align with the book's title ("${blueprint.title}") and active chapter ("${currentChapter ? currentChapter.title : ''}").
   - If the book is Cookbooks & Food, write authentic historical recipes, sourdough starters, stone hearth ovens, spitted forest game, herbal broths, saffron reductions, and royal banquet feasts. DO NOT drift into dungeon expeditions or soldier garrisons.
   - If the book is Living & Sentient Volumes, write about margins drinking blood, needle-teeth, weeping bile, or shivering flesh bindings.
   - If the book is Romance, write romantic devotion, stolen glances, emotional conflict, and tender vows.
   - If the book is Mystery or True Crime, write clues, forensic examinations, suspect interrogations, and criminal trials.
   - If the book is Travel, write caravan expeditions, mountain passes, foreign oasis cities, and maritime charts.
   - If the book is Science Fiction, write clockwork automatons, ether engines, void-faring craft, and artificial minds.
2. Output exactly ${count} substantive in-world pages in the "pages" array (each page ~130-180 words, 2-3 paragraphs or scripted dialogue/poetry).
3. Maintain direct narrative continuity from previous folios.
4. Include a 1-sentence "batchSummary" describing what happened on these pages for subsequent context chaining.

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
    const timeoutId = setTimeout(() => controller.abort(), AiBookService.REQUEST_TIMEOUT_MS);

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
    const timeoutId = setTimeout(() => controller.abort(), AiBookService.REQUEST_TIMEOUT_MS);

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

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), AiBookService.REQUEST_TIMEOUT_MS);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers,
        signal: controller.signal,
        body: JSON.stringify({ systemPrompt, userPrompt })
      });
      clearTimeout(timeoutId);
      if (!res.ok) throw new Error(`Custom endpoint HTTP ${res.status}`);
      return (await res.json()) as T;
    } finally {
      clearTimeout(timeoutId);
    }
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
