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
  public static sessionSeed = Math.floor(Math.random() * 10000000);

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

  // 2. Iconic Medieval & Gothic Historical Book Titles (Inspired by Reference Art)
  private static CLASSIC_TITLES: Record<MainBookClassification, string[]> = {
    'Fiction': [
      'The Chronicles of Wessex', 'Poems of the Minstrels', 'Song of the Wounded Stag',
      'The Knight of the Silver Shield', 'The Phantom of the Cloister', 'The Winter King'
    ],
    'Non-Fiction': [
      'Historia Britanniae', 'The Lives of Saints', 'Tacitus Annales', 'The Art of War',
      'Chronicles of the Crusades', 'Gesta Danorum', 'Chronicon Saxonicum', 'On Virtue and Honor'
    ],
    'Academic Texts & Grammar': [
      'Geometria', 'De Officiis Regum', 'Grammatica Antiqua', 'The Oxford Lexicon',
      'Ars Grammatica', 'The Canon of Dialectic', 'De Interpretatione'
    ],
    'Professional Manuals': [
      'Herbarius', 'De Medicina', 'Treatise on Archery', 'Liber Florum',
      'Master Stonemasonry', 'Compendium Architecturae', 'Apothecary Formulary'
    ],
    'Breakthroughs & Theories': [
      'Astronomia', 'Philosophia Naturalis', 'The Harmonies of the Spheres',
      'Treatise on Etheric Flow', 'Chrono-Geometric Axioms', 'Optics of the Prism'
    ],
    'Dissertations': [
      'De Rerum Natura', 'Compendium Theologiae', 'Epistemology of the Light',
      'Speculum Humanae Salvationis', 'The Subterranean Vaults: A Study', 'Treatise on Free Will'
    ],
    'Mysticism & Magic': [
      'Ars Magica', 'Liber Alchimia', 'The Emerald Tablet', 'Malleus Arcanum',
      'Grimoire of Starlight', 'The Seven Sacred Seals', 'The Book of Shadows'
    ],
    'Tales & Mythology': [
      'Celtic Myths & Legends', 'The Book of Kells', 'Tales of the Golden Lion',
      'The Primordial Slumber', 'Legends of the High Barrows', 'The Sunken Spires of Alderia'
    ]
  };

  // 3. Procedural Title Assemblies
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
    'Arcane', 'Ancient', 'Celestial', 'Forgotten', 'Gilded', 'Immutable',
    'Shadowed', 'Verdant', 'Astral', 'Hallowed', 'Primordial', 'Luminescent',
    'Forbidden', 'Eternal', 'Sacred', 'Subterranean', 'Obsidian', 'Iron-Bound'
  ];

  private static NOUNS = [
    'Wessex', 'Alderia', 'the Cathedral', 'the High Archons', 'the Starlight',
    'the Nether Depths', 'the Golden Lion', 'the Sunken Kingdom', 'the Sacred Oak',
    'the Astral Loom', 'the Silver Flame', 'the Whispering Vaults', 'the Seven Veils'
  ];

  private static CONCEPTS = [
    'Etheric Geometry', 'Astral Pyromancy', 'Living Stone & Mortar',
    'Celestial Harmonics', 'Temporal Flux', 'Alchemical Transmutation',
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

  // Rich Leather Palette Matching Reference Image
  private static COVER_COLORS = [
    '#1c2841', // Midnight Blue Morocco (The Chronicles of Wessex)
    '#5c1417', // Deep Cardinal Crimson (De Officiis Regum)
    '#1b3b28', // Emerald Forest Leather (Historia Britanniae)
    '#402415', // Rich Chestnut Oak (Ars Magica)
    '#152e42', // Prussian Blue (Liber Florum)
    '#5a2166', // Royal Imperial Purple (Astronomia)
    '#273b32', // Dark Sage Herbarium (Herbarius)
    '#6b1b22', // Wine Red Calfskin (De Medicina)
    '#1d2d3d', // Deep Teal Morocco (Geometria)
    '#1c1c1f', // Dark Obsidian Leather
    '#4a3319'  // Antique Tan Leather
  ];

  private static ACCENT_COLORS = [
    '#ffd88a', // Gilded Gold
    '#e6c280', // Burnished Brass
    '#fce59f', // Radiant Starlight Gold
    '#ffeaad', // Bright Gold Foil
    '#d4af37'  // Antique Metallic Gold
  ];

  /**
   * Deterministic PRNG using Mulberry32 for seed-based generative output
   */
  public static createPrng(seed: number): () => number {
    let s = (seed + this.sessionSeed) >>> 0;
    return function() {
      let t = (s += 0x6D2B79F5);
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

    // Generate Title (35% classic medieval title, 65% procedural template)
    let title = overrideTitle;
    if (!title) {
      if (prng() < 0.35) {
        const list = this.CLASSIC_TITLES[classification];
        title = list[Math.floor(prng() * list.length)];
      } else {
        title = this.generateTitle(prng, classification);
      }
    }

    // Generate Author & Era
    const authorFirstName = this.PROPER_NAMES[Math.floor(prng() * this.PROPER_NAMES.length)];
    const authorSuffix = this.AUTHORS_SUFFIX[Math.floor(prng() * this.AUTHORS_SUFFIX.length)];
    const author = `${authorFirstName} ${authorSuffix}`;
    const era = this.ERAS[Math.floor(prng() * this.ERAS.length)];

    // Colors
    const coverColor = this.COVER_COLORS[Math.floor(prng() * this.COVER_COLORS.length)];
    const accentColor = this.ACCENT_COLORS[Math.floor(prng() * this.ACCENT_COLORS.length)];

    // Generate 3 to 5 pages of readable content matching the classification
    const numPages = 3 + Math.floor(prng() * 3); // 3, 4, or 5 pages
    const pages: BookPage[] = [];

    for (let p = 1; p <= numPages; p++) {
      pages.push({
        chapterTitle: this.generateChapterHeading(classification, p, prng),
        pageNumber: p,
        content: this.generatePageText(classification, subgenre, p, numPages, prng, title)
      });
    }

    return {
      id: `book_${seed}_${classification.replace(/\s+/g, '_')}`,
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

    if (classification === 'Professional Manuals' && !res.includes('Manual') && !res.includes('Guide') && !res.includes('Treatise')) {
      res = `Manual of ${concept}`;
    } else if (classification === 'Academic Texts & Grammar' && !res.includes('Grammar') && !res.includes('Lexicon') && !res.includes('Guide')) {
      res = `Lexicon of ${adj} Syntax`;
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

    const loreSnippets: Record<MainBookClassification, string[]> = {
      'Fiction': [
        `The iron gates groaned as the knight drew his greatsword. Beyond the courtyard, the shadow of the cathedral towered against the blood-red moon. "We stand here not for glory," whispered Sir Morvath, "but so the light beyond the mountains never fades."`,
        `Through the subterranean crypts, the chanting began. It was not words of sorrow, but a resonant hymn that shook the mortar between the granite slabs. Down below, the vault doors glowed with golden runes.`
      ],
      'Non-Fiction': [
        `In the year 1102 of the Solar Calendar, the Guild of Architects laid the first cornerstone of the Grand Nave. Over three hundred stonemasons labored through frost and tempest, carving the fluted pillars from the granite quarries of the Silverpeak range.`,
        `Trade routes spanning the southern straits brought manuscripts inscribed upon dyed calfskin and papyrus scrolls from the Sunken Kingdoms. These records formed the nucleus of the High Library's archival collection.`
      ],
      'Academic Texts & Grammar': [
        `In classical Alderian syntax, the imperative mood carries an intrinsic reverence for the light. Verbs describing creation and construction require the prefix 'Ael-', denoting divine inspiration, whereas verbs of ruin require 'Vor-'.`,
        `The declension of sacred nouns follows the triadic rule: Nominative of Presence, Genitive of Ancestry, and Dative of Legacy. Consider the inscription upon the western apse: 'Ael-Veritas Omnia Vincit'.`
      ],
      'Professional Manuals': [
        `To properly temper a cathedral arch key-stone: Ensure the mortise is chisel-dressed with a crosshatch pattern of thirty-two grooves per cubit. The mortar must comprise slaked lime, crushed quartz, and powdered basalt.`,
        `When distilling Lunar Nightshade: Harvest the leaves only when the second moon ascends above the cathedral spires. Heat gently within a copper alembic until the vapor turns from violet to shimmering silver.`
      ],
      'Breakthroughs & Theories': [
        `The Etheric Resonance Theory posits that stone, light, and harmonic sound are manifestations of a singular celestial vibration. When church bells strike the resonant pitch of F-sharp, the ambient magical field stabilizes.`,
        `By observing the orbital precession of the Astral Spheres through the cathedral's meridian brass line, we establish that the subterranean dungeon labyrinth mirrors the constellations above with exact symmetry.`
      ],
      'Dissertations': [
        `The thesis proposes that the subterranean chambers beneath Level IV were not constructed as dungeons, but as an inverted cathedral designed to channel celestial radiation into the deep mantle of the world.`,
        `A rigorous cryptographic analysis of the runic plaques reveals a recursive cipher. Each Latin category header (HISTORIA, ARCANUM) serves as a key to decipher the celestial coordinate grid of the dungeon vault.`
      ],
      'Mysticism & Magic': [
        `Draw the circle of warding using powdered cinnabar and pulverized silver. Inscribe the four cardinal sigils: Ignis at the East, Terra at the South, Aer at the West, and Aqua at the North. Breathe three times and ignite the hearth candle.`,
        `To summon the astral luminescence: Clear the mind of mortal dread. Visualize the stained-glass lancet windows of the High Nave catching the first ray of dawn. The flame within the hand will burn with heatless golden brilliance.`
      ],
      'Tales & Mythology': [
        `Before the high spires were raised, when the realm was shrouded in eternal mist, the Great Golden Lion walked the primeval forests. Where his golden paws touched the soil, veins of luminescent stone crystallized.`,
        `It is written that in the end of days, when the last candle in the library flickers out, the stone gargoyles perched upon the cathedral battlements shall take flight to herald the rebirth of the dawn.`
      ]
    };

    const list = loreSnippets[classification] || loreSnippets['Fiction'];
    return list[(page - 2) % list.length];
  }
}
