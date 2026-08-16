export type MainBookClassification =
  | 'Fiction'
  | 'Non-Fiction'
  | 'Academic Texts & Grammar'
  | 'Professional Manuals'
  | 'Breakthroughs & Theories'
  | 'Dissertations'
  | 'Mysticism & Magic'
  | 'Tales & Mythology';

export interface BookPage {
  chapterTitle: string;
  pageNumber: number;
  content: string;
}

export interface BookData {
  id: string;
  title: string;
  author: string;
  era: string;
  classification: MainBookClassification;
  subgenre: string;
  coverColor: string;
  accentColor: string;
  pages: BookPage[];
}

export class LibraryLoreGenerator {
  // 1. Classification Categories & Subgenres
  private static CLASSIFICATIONS: Record<MainBookClassification, string[]> = {
    'Fiction': ['High Fantasy', 'Gothic Tales', 'Fables & Parables', 'Epic Poetry'],
    'Non-Fiction': [
      'Biography',
      'Autobiography',
      'History',
      'Self-Help & Personal Growth',
      'General Knowledge & Trivia',
      'Science & Technology',
      'Travel & Culture',
      'Academics'
    ],
    'Academic Texts & Grammar': ['Ancient Linguistics & Lexicons', 'Classical Rhetoric', 'Aristotelian Logic', 'Cartography & Geometry'],
    'Professional Manuals': ['Master Stonemasonry', 'Cathedral Architecture', 'Herbalism & Apothecary', 'Alchemical Metallurgy', 'Tactical Siegecraft'],
    'Breakthroughs & Theories': ['Celestial Mechanics', 'Etheric Resonance Theory', 'Elemental Transmutation', 'Chrono-Geometric Principles'],
    'Dissertations': ['Theological Treatise', 'Metaphysical Inquiries', 'Subterranean Excavations', 'Cryptographic Syntheses'],
    'Mysticism & Magic': ['Astral Pyromancy', 'Void Weaving', 'Sacred Runic Inscriptions', 'Divination & Starlight Scrying'],
    'Tales & Mythology': ['Legends of the First Age', 'Chronicles of the Golden Lion', 'The Sunken Kingdoms', 'Behemoths of the Deep']
  };

  // 2. Procedural Title Assemblies
  private static TITLE_PATTERNS = [
    'The Codex of [Adjective] [Noun]',
    'Treatise on [Concept]',
    'Memoirs of a [Profession]',
    'The Principles of [Concept]',
    'Chronicles of [Noun]',
    'A Scholar\'s Guide to [Concept]',
    'The Lost Gospel of [ProperName]',
    'Observations on [Adjective] [Noun]',
    'The Architecture of [Noun]',
    'An Inquiry into [Concept]',
    'Discourses on [Adjective] [Concept]',
    'The Secrets of [Noun]',
    'A Compendium of [Adjective] [Concept]',
    'The Seven Pillars of [Concept]',
    'Meditations upon [Noun]',
    'Visions of [ProperName] and the [Noun]'
  ];

  private static ADJECTIVES = [
    'Astral', 'Forgotten', 'Golden', 'Obsidian', 'Celestial', 'Subterranean',
    'Arcane', 'Verdant', 'Eternal', 'Silent', 'Crimson', 'Hallowed',
    'Illuminated', 'Living', 'Sacred', 'Transmuted', 'Primordial', 'Sovereign',
    'Cathedral', 'Runic', 'Ethereal', 'Ancient', 'Starlight', 'Harmonic'
  ];

  private static NOUNS = [
    'Alderia', 'Silverpeak Keep', 'The Golden Lion', 'The Spire of Veritas',
    'The Astral Heavens', 'The Clockwork Sphere', 'The Abyssal Crypt',
    'The Iron Throne', 'The Living Hearth', 'The Moonlit Vaults',
    'The Sunken Archive', 'The Crystal Nexus', 'The Seven Portals',
    'The Obsidian Monolith', 'The Sacred Flame', 'The Celestial Gate'
  ];

  private static CONCEPTS = [
    'Etheric Transmutation', 'Cathedral Stone Vaulting', 'Celestial Harmony',
    'Astral Pyromancy', 'Ancient Runology', 'Subterranean Hydrodynamics',
    'Alchemical Distillation', 'Chrono-Geometry', 'The Architecture of the Soul',
    'Herbal Panaceas', 'Rhetorical Eloquence', 'Metaphysical Equilibrium',
    'Dungeon Fortifications', 'Sacred Geometry', 'Linguistic Roots of the First Tongue'
  ];

  private static PROFESSIONS = [
    'Cathedral Scribe', 'Royal Alchemist', 'Master Stonecutter', 'Astral Cartographer',
    'Grand Inquisitor', 'Herbal Apothecary', 'Cryptographic Scholar', 'High Archon',
    'Dungeon Architect', 'Knight Chronicler', 'Void Watcher', 'Master Clockmaker'
  ];

  private static PROPER_NAMES = [
    'Valerius', 'Seraphina', 'Ignatius', 'Morvath', 'Aurelius', 'Zephyrus',
    'Eleanor', 'Balthazar', 'Cassian', 'Mirella', 'Lucian', 'Theodosia',
    'Eldred', 'Vespera', 'Gideon', 'Roderick', 'Bramwell', 'Yvaine'
  ];

  private static AUTHORS_SUFFIX = [
    'of Oakhaven', 'of the Iron Quill', 'the Stargazer', 'of Sunken Alderia',
    'the Sightless', 'of House Lionheart', 'the Elder', 'of the High Spire',
    'Arch-Scholar of Veritas', 'Venerable Keeper of Scrolls', 'Master Artificer'
  ];

  private static ERAS = [
    'The First Age of Dawn (Year 312)',
    'Era of the Great Schism (Year 784)',
    'The Golden Century of the Lion (Year 1102)',
    'Age of the Obsidian Eclipse (Year 1340)',
    'Reign of Archon Aurelius IX (Year 1415)',
    'The Silent Interregnum (Year 988)',
    'Dawn of the Cathedral Archives (Year 1204)',
    'The Third Solstice Reformation (Year 1520)'
  ];

  private static COVER_COLORS = [
    '#5a1810', // Deep Crimson Leather
    '#1a335c', // Royal Blue Morocco
    '#184525', // Forest Green Calfskin
    '#4a2e12', // Rich Dark Oak
    '#381c45', // Imperial Purple Vellum
    '#6b4914', // Golden Amber Buckram
    '#1c1c24', // Midnight Obsidian
    '#692222', // Wine Red Velvet
    '#214a4a'  // Aegean Teal Leather
  ];

  private static ACCENT_COLORS = [
    '#ffd88a', // Gilded Gold
    '#e6c280', // Burnished Brass
    '#dcd2ba', // Silver Vellum
    '#f7a35c', // Copper Foil
    '#c792ea'  // Amethyst Inlay
  ];

  /**
   * Deterministic PRNG using Mulberry32 for seed-based generative output
   */
  public static createPrng(seed: number): () => number {
    return function() {
      let t = (seed += 0x6D2B79F5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * Generate a unique BookData object with procedural metadata and 3 to 5 multi-page chapters
   */
  public static generateBook(seed: number, overrideTitle?: string): BookData {
    const prng = this.createPrng(seed);

    // Pick Classification & Subgenre
    const classKeys = Object.keys(this.CLASSIFICATIONS) as MainBookClassification[];
    const classification = classKeys[Math.floor(prng() * classKeys.length)];
    const subgenres = this.CLASSIFICATIONS[classification];
    const subgenre = subgenres[Math.floor(prng() * subgenres.length)];

    // Generate Title
    const title = overrideTitle || this.generateTitle(prng, classification);

    // Generate Author & Era
    const authorFirstName = this.PROPER_NAMES[Math.floor(prng() * this.PROPER_NAMES.length)];
    const authorSuffix = this.AUTHORS_SUFFIX[Math.floor(prng() * this.AUTHORS_SUFFIX.length)];
    const author = `${authorFirstName} ${authorSuffix}`;
    const era = this.ERAS[Math.floor(prng() * this.ERAS.length)];

    // Colors
    const coverColor = this.COVER_COLORS[Math.floor(prng() * this.COVER_COLORS.length)];
    const accentColor = this.ACCENT_COLORS[Math.floor(prng() * this.ACCENT_COLORS.length)];

    // Generate 3 to 5 pages of readable content matching the classification
    const numPages = 3 + Math.floor(prng() * 3); // 3 to 5 pages
    const pages: BookPage[] = [];

    for (let page = 1; page <= numPages; page++) {
      pages.push({
        pageNumber: page,
        chapterTitle: this.generateChapterHeading(classification, page, prng),
        content: this.generatePageText(classification, subgenre, page, numPages, prng, title)
      });
    }

    return {
      id: `book_${seed}_${Math.floor(prng() * 10000)}`,
      title,
      author,
      era,
      classification,
      subgenre,
      coverColor,
      accentColor,
      pages
    };
  }

  private static generateTitle(prng: () => number, classification: MainBookClassification): string {
    const pattern = this.TITLE_PATTERNS[Math.floor(prng() * this.TITLE_PATTERNS.length)];

    const adj = this.ADJECTIVES[Math.floor(prng() * this.ADJECTIVES.length)];
    const noun = this.NOUNS[Math.floor(prng() * this.NOUNS.length)];
    const concept = this.CONCEPTS[Math.floor(prng() * this.CONCEPTS.length)];
    const prof = this.PROFESSIONS[Math.floor(prng() * this.PROFESSIONS.length)];
    const proper = this.PROPER_NAMES[Math.floor(prng() * this.PROPER_NAMES.length)];

    let res = pattern
      .replace('[Adjective]', adj)
      .replace('[Noun]', noun)
      .replace('[Concept]', concept)
      .replace('[Profession]', prof)
      .replace('[ProperName]', proper);

    // If classification is specific, flavor the title
    if (classification === 'Academic Texts & Grammar') {
      res = `${res}: Grammatical Commentary & Lexicon`;
    } else if (classification === 'Dissertations') {
      res = `Dissertation: ${res}`;
    }

    return res;
  }

  private static generateChapterHeading(classification: MainBookClassification, page: number, _prng: () => number): string {
    const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
    const num = romanNumerals[page - 1] || `${page}`;

    const headers: Record<MainBookClassification, string[]> = {
      'Fiction': ['The Threshold of Twilight', 'The Shadow in the Cloister', 'The Oath of Iron and Ash', 'The Awakening of the High Tower', 'Song of the Wounded Stag'],
      'Non-Fiction': ['Chronological Foundations', 'The Siege of the Outer Walls', 'Cultural Artifacts of Alderia', 'Anatomy of Statecraft', 'The Great Reconstruction'],
      'Academic Texts & Grammar': ['Morphology of Ancient Dialects', 'Rules of Classical Syntax', 'Etymological Transpositions', 'Orthography of Sacred Runes', 'The Canon of Dialectic'],
      'Professional Manuals': ['Preparation of Mortar & Keystones', 'Thermal Tempering of Knight Blades', 'Harvesting Lunar Nightshade', 'Foundations of Arch Buttresses', 'Standard Operating Protocols'],
      'Breakthroughs & Theories': ['The Hypothesis of Etheric Flow', 'Mathematical Geometries of Astral Spheres', 'Observation of Particle Flux', 'Harmonic Resonance Theorems', 'Empirical Corroborations'],
      'Dissertations': ['Theological Axioms of the Light', 'Epistemology of the Subterranean Mind', 'Excavation Findings at Level VII', 'Cryptographic Analysis of the Vault Seal', 'Synthesis & Concluding Theses'],
      'Mysticism & Magic': ['Igniting the Inner Hearth Flame', 'Invocations to the Starlight Wardens', 'Weaving the Wards of Protection', 'The Seven Veils of the Void', 'Rituals of Ascension'],
      'Tales & Mythology': ['The Primordial Slumber of the Earth', 'When the Lion Roared Over Silverpeak', 'The Tragedy of the Sunken Spires', 'The Celestial Falcon and the Wyrm', 'Epilogue: The Eternal Vigil']
    };

    const list = headers[classification] || headers['Fiction'];
    const title = list[Math.min(page - 1, list.length - 1)];
    return `CHAPTER ${num}: ${title.toUpperCase()}`;
  }

  private static generatePageText(
    classification: MainBookClassification,
    subgenre: string,
    page: number,
    totalPages: number,
    _prng: () => number,
    bookTitle: string
  ): string {
    if (page === 1) {
      return `To the noble scholars, seekers of truth, and wanderers of the Grand Cathedral Library:\n\n"Within these vaulted stone chambers lies the collective heartbeat of forgotten empires. He who reads with an earnest mind shall inherit the wisdom of a thousand architects."\n\nThis manuscript, cataloged under the archival classification of ${classification.toUpperCase()} (${subgenre}), is preserved under the perpetual seal of the High Cathedral Archons. May no reckless hand defile its vellum leaves.`;
    }

    if (page === totalPages) {
      return `Here ends this volume of ${bookTitle}.\n\n"The candle flame may flicker into shadow, yet the illuminated word remains carved into the immutable stone of memory."\n\nTranscribed by hand upon linen vellum in the scriptorium of the Grand Nave. Bound with oak boards, tanned leather, and brass clasps. Verified by the Keeper of the Sacred Archives.`;
    }

    // Dynamic thematic content per classification
    switch (classification) {
      case 'Fiction':
        return `The heavy oak gates creaked under the weight of the howling northern tempest. From the parapets, young Sir Rowan watched the violet lightning dance across the jagged peaks of Silverpeak Keep.\n\n"Do you hear that drumming in the deep stone?" whispered the elder warden, his hand trembling upon the pommel of his weathered broadsword. "It is not the thunder of the heavens; the ancient guardians of the undercroft have awoken from their centuried slumber."\n\nWith a slow, deliberate breath, Rowan drew his cloak tight and stepped toward the spiral stairs descending into the shadowed abyss.`;

      case 'Non-Fiction':
        return `During the zenith of the Third Dynastic Era (circa Year 1142), the Cathedral architects perfected the double-ribbed groin vault, permitting chambers to soar beyond thirty cubits without fear of lateral subsidence.\n\nRecords salvaged from the Great Fire indicate that over four hundred stonemasons laboured for seven seasons to carve the fluted pillars that support the central nave. Each keystone was blessed with sanctified oils to ward against tectonic fractures.\n\nTrade ledgers from this epoch demonstrate a tenfold increase in the importation of crystalline quartz and lapis lazuli for the rose windows.`;

      case 'Academic Texts & Grammar':
        return `In the High Alderian tongue, transitive verbs of motion take the locative prefix *Al-* when directed toward sacred sanctuaries, and *De-* when descending into subterranean depths.\n\nExample Lexicon:\n• *Al-veritas* (To strive toward illumination)\n• *De-profundis* (To descend through the stone strata)\n• *Cor-sanctum* (The inner sanctum of the library)\n\nNote: In manuscripts inscribed prior to the Second Council, double consonants were denoted by an overline titlo rather than duplicated letterforms.`;

      case 'Professional Manuals':
        return `Standard Protocol for Cathedral Buttress Reinforcement:\n\n1. Prepare hydraulic slaked lime mixed with ground volcanic pozzolana in a ratio of three parts coarse sand to one part lime binder.\n2. Ensure the diagonal springline of the flying buttress meets the exterior wall at precisely thirty-eight degrees from the vertical axis.\n3. Grout all interior voids with pulverized granite slurry before tightening the iron tension tie-rods.\n\nCaution: Never apply weight upon fresh timber scaffolding during high subterranean humidity.`;

      case 'Breakthroughs & Theories':
        return `The Etheric Resonance Hypothesis asserts that every mass of carved stone vibrates at a subtle harmonic fundamental frequency.\n\nBy measuring the standing wave acoustics beneath the high vaulted ceiling, we observed that sound waves above four hundred hertz coalesce at the central chandelier focal points, amplifying ambient candlelight through vibrational luminescence.\n\nThus, the architectural geometry of the Grand Cathedral acts not merely as structural shelter, but as a colossal resonator for celestial ether.`;

      case 'Dissertations':
        return `Thesis Statement: The spatial layout of the subterranean crypts mirrors the celestial constellation of the Seven Watchers, indicating a dual hermetic purpose.\n\nOur excavations at Level IV revealed alternating strata of basalt blocks and calcified bone ash, arranged in logarithmic concentric spirals. This arrangement directly correlates with the planetary epicycles described in the Lost Annals of Alexandria.\n\nConsequently, the dungeon cannot be viewed as a mere prison, but rather as an inverted celestial observatory.`;

      case 'Mysticism & Magic':
        return `Draw the circle of protection with crushed celestite and pulverized frankincense.\n\n"When the candle flame turns from golden amber to sapphire blue, know that the threshold between realms has thinned. Speak then the three syllables of binding before the hour bell strikes midnight."\n\nChannel your focus through polished amethyst. Should the etheric wind rise within the closed hall, ground your footsteps upon the central red carpet aisle and hold fast to the iron pillar rings.`;

      case 'Tales & Mythology':
        return `Before the first stone of the Cathedral was laid, the Great Golden Lion walked the primeval forests of Alderia. It was said that wherever his radiant paw touched the earth, springs of pure crystalline water burst forth from the bedrock.\n\nWhen the Shadow of the Eclipse threatened to swallow the sky, the Lion climbed the highest mountain and let forth a roar so profound that it shattered the darkness into ten thousand stars.\n\nTo this day, the heraldic standards hanging from our upper balconies bear his golden crest in everlasting reverence.`;

      default:
        return `The parchment pages are filled with meticulous handwritten notes, intricate mathematical diagrams of vaulted arches, and delicate botanical drawings of cave mosses and healing herbs.`;
    }
  }
}
