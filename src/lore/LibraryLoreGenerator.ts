import {
  BookData,
  BookGenre,
  BookPage,
  MainBookClassification,
  BookFontFamily,
  BookFontSize,
  BookLayoutFormat,
  BookWritingStyle,
  PageSectionType
} from './BookTypes';
import { bookGeneratorService } from '../services/BookGeneratorService';
import { aiBookService } from '../services/aiBookService';

export {
  type BookData,
  type BookGenre,
  type BookPage,
  type MainBookClassification,
  type BookFontFamily,
  type BookFontSize,
  type BookLayoutFormat,
  type BookWritingStyle,
  type PageSectionType
};

export class LibraryLoreGenerator {
  public static sessionSeed = Math.floor(Math.random() * 10000000);

  // 1. Classifications & Subgenres
  private static CLASSIFICATIONS: Record<MainBookClassification, string[]> = {
    'Fiction': ['High Fantasy', 'Gothic Tales', 'Fables & Parables', 'Epic Poetry', 'Chivalric Romance', 'Courtly Allegories'],
    'Non-Fiction': [
      'Biography & Memoirs',
      'Cartography & Expeditions',
      'Chronicles of Antiquity',
      'Statecraft & Jurisprudence',
      'Natural Philosophy',
      'Science & Technology',
      'Travelogues of the Great Sea',
      'Academics & Curricula'
    ],
    'Academic Texts & Grammar': [
      'Ancient Linguistics & Lexicons',
      'Classical Rhetoric & Oratory',
      'Aristotelian Logic & Dialectics',
      'Cartography & Spatial Geometry',
      'Sacred Arithmetic & Ratios',
      'Philology of the First Tongue'
    ],
    'Professional Manuals': [
      'Master Stonemasonry & Vaulting',
      'Cathedral & Fortress Architecture',
      'Herbalism & Field Apothecary',
      'Alchemical Metallurgy & Smelting',
      'Tactical Siegecraft & Ballistics',
      'Horology & Precision Clockmaking',
      'Vellum Curing & Bookbinding'
    ],
    'Breakthroughs & Theories': [
      'Celestial Mechanics & Orbitals',
      'Etheric Resonance & Wave Dynamics',
      'Elemental Transmutation Kinetics',
      'Chrono-Geometric Field Axioms',
      'Optics & Prism Light Dispersion',
      'Thermodynamics of Crucible Steels'
    ],
    'Dissertations': [
      'Theological Axioms of the Light',
      'Metaphysical Inquiries on Form',
      'Subterranean Strata Excavations',
      'Cryptographic Analysis of Archon Seals',
      'Epistemology of Objective Truth',
      'The Doctrine of Cosmic Equilibrium'
    ],
    'Mysticism & Magic': [
      'Astral Pyromancy & Fire Wards',
      'Void Weaving & Spatial Foldings',
      'Sacred Runic Glyph Inscriptions',
      'Divination & Starlight Ephemerides',
      'Hermetic Matrix Binding & Seals',
      'The Rites of the Equinoctial Gate'
    ],
    'Tales & Mythology': [
      'Legends of the Primordial Dawn',
      'Chronicles of the Sunken Spires',
      'Mythos of the Silver Falcon',
      'Ballads of the Wandering King',
      'Sagas of the High Barrows',
      'The Great Vigil of the Star-Watchers'
    ]
  };

  private static FIRST_NAMES = [
    'Aurelius', 'Cassian', 'Valerius', 'Ignatius', 'Theodosia', 'Claudius', 'Severus', 'Octavius',
    'Tiberius', 'Marcellus', 'Decimus', 'Lucian', 'Felix', 'Hadrian', 'Titus', 'Antoninus', 'Aurelia',
    'Gideon', 'Branok', 'Rhiannon', 'Gawain', 'Isolde', 'Gareth', 'Kaelen', 'Cormac', 'Torin',
    'Morvath', 'Arthur', 'Percival', 'Bedivere', 'Cador', 'Elowen', 'Bryn', 'Meredith', 'Taliesin',
    'Zephyrus', 'Alexios', 'Irene', 'Basil', 'Leontios', 'Demetrios', 'Theophano', 'Konstantinos',
    'Helene', 'Andronikos', 'Niketas', 'Kassandra', 'Thales', 'Eudoxia', 'Herakleios', 'Zenobia',
    'Roderick', 'Eldred', 'Bramwell', 'Aldhelm', 'Sigurd', 'Wulfric', 'Ethelwulf', 'Hildegard',
    'Alistair', 'Gunther', 'Berengar', 'Conrad', 'Anselm', 'Wulfstan', 'Godric', 'Rowena', 'Dietrich',
    'Darius', 'Farhan', 'Cyrus', 'Soraya', 'Navid', 'Roxana', 'Bahram', 'Zal', 'Yasmin',
    'Seraphina', 'Mirella', 'Vespera', 'Yvaine', 'Azrael', 'Malakor', 'Zephyrine', 'Solara', 'Balthazar'
  ];

  private static SURNAMES_AND_EPITHETS = [
    'of Oakhaven', 'of the Iron Quill', 'the Stargazer', 'of Sunken Alderia', 'the Sightless',
    'of House Lionheart', 'the Elder', 'of the High Spire', 'Arch-Scholar of Veritas',
    'Venerable Keeper of Scrolls', 'Master Artificer', 'of the Obsidian Gate', 'the Clockmaker of Val-Doran',
    'of the Silver Crescent', 'Chronicler of Wessex', 'of the Whispering Sands', 'the Cartographer of Marid-Khar',
    'the Alchemist of Caelum-Vara', 'of the Northern Marches', 'Keeper of the Solstice Vaults', 'of the Amber Coast',
    'the Void-Weaver', 'of House Ravenshade', 'Master of the Gilded Chisel', 'the Silent Archimandrite',
    'of St. Jude the Confessor', 'of the Seven Towers', 'the Geometer of Silverpeak', 'of the Aethelgard Scriptorium',
    'the Astrolabist of Dun-Mora', 'the Epigrapher of Khorsabad', 'the Metallurgist of Iron-Spire', 'of House Vesperia',
    'the Luminary of Thalassia', 'of the Frostholm Scriptorium', 'the Sovereign Exarch', 'of the Solstice Reach'
  ];

  private static ORGANIZATIONS = [
    'The Guild of Master Astrolabists',
    'The Order of the Silver Compass',
    'The Brotherhood of the Obsidian Chisel',
    'The Collegium of Celestial Mechanics',
    'The Scriptorium of the Whispering Sands',
    'The Conclave of Hermetic Philologists',
    'The Society of Subterranean Antiquarians',
    'The Academy of Lunar Pyromancy',
    'The Fellowship of the Iron Clavicle',
    'The Syndicate of Amber Cartographers',
    'The Sovereign Synod of Veritas',
    'The Covenant of the Seven Lanterns',
    'The Guild of Master Mason-Artificers',
    'The High Council of Caelum-Vara',
    'The Monastic Order of St. Anselm',
    'The Scholarly Circle of the Solstice Star',
    'The Royal Society of Natural Philosophy',
    'The Archival Scribes of Oakhaven',
    'The Guild of Clockmakers and Horologists',
    'The Sisterhood of the Silver Loom',
    'The Alchemical Guild of the Crucible',
    'The Cartographic Guild of Thalassia',
    'The Cathedral Chapter of Marid-Khar',
    'The Venerable Academy of Aethelgard',
    'The Custodians of the Obsidian Vault'
  ];

  private static REALMS_AND_CITIES = [
    'Alderia', 'Caelum-Vara', 'Thalassia', 'Silverpeak', 'Oakhaven', 'Nether-Ghyll', 'Solstice Reach',
    'Val-Doran', 'Aethelgard', 'Marid-Khar', 'Vesperia', 'Lunaria', 'Wessex', 'Ravenhall', 'Dun-Mora',
    'Myth-Drannor', 'Khorsabad', 'Al-Zafira', 'Zephyrion', 'Astragard', 'Iron-Spire', 'Sunken Alderia',
    'The High Barrows', 'Frostholm', 'Amber-Glen', 'Elyria', 'Veridiana', 'Crescent Isle', 'Barrow-Downs'
  ];

  private static ERAS = [
    'Fourth Era, Year 742',
    'The First Age of Dawn (Year 312)',
    'Era of the Great Schism (Year 784)',
    'The Golden Century of the Lion (Year 1102)',
    'Age of the Obsidian Eclipse (Year 1340)',
    'Reign of Archon Aurelius IX (Year 1415)',
    'The Silent Interregnum (Year 988)',
    'Dawn of the Cathedral Archives (Year 1204)',
    'The Third Solstice Reformation (Year 1184)',
    'Era of the Clockwork Spire (Year 1288)',
    'Age of the Silver Armada (Year 1056)',
    'The Great Deluge of Nether-Ghyll (Year 640)',
    'The Council of Seven Crowns (Year 1392)',
    'The Solstice Concordat (Year 1478)',
    'Reign of Grand Magister Valerius (Year 892)'
  ];

  private static TITLE_TEMPLATES = [
    'The Codex of [Adjective] [Noun]',
    'Treatise on [Concept]',
    'The Principles of [Concept] in [Realm]',
    'Chronicles of [Noun]',
    'A Scholar\'s Guide to [Concept]',
    'The Architecture of [Noun]',
    'Observations on [Adjective] [Concept]',
    'Discourses on [Adjective] [Noun]',
    'Calculations and Geometries of [Concept]',
    'The Seven Pillars of [Concept]',
    'Meditations upon [Adjective] [Noun]',
    'Compendium of [Concept] and [Concept2]',
    'The Hermetic Secrets of [Realm]',
    'The Natural History of [Realm]',
    'Foundations of [Adjective] [Concept]',
    'The Annals of [Realm]',
    'Axioms of [Concept] and [Noun]',
    'The Ephemeris of [Adjective] Spheres'
  ];

  private static SUBTITLE_TEMPLATES = [
    'An Archival Inquiry into the Foundational Principles of [Realm]',
    'A Comprehensive Discourse for the Masters of [Organization]',
    'Transcribed from the Earliest Manuscripts of [Realm]',
    'With Mathematical Proofs, Sacred Geometry, and Generative Vector Diagrams',
    'Being a Faithful Record Preserved in [Realm] during [Era]',
    'Compiled in the High Scriptorium of [Organization]',
    'A Systematic Treatise for Seekers of Illuminated Truth across [Realm]'
  ];

  private static ADJECTIVES = [
    'Arcane', 'Ancient', 'Celestial', 'Forgotten', 'Gilded', 'Immutable',
    'Shadowed', 'Verdant', 'Astral', 'Hallowed', 'Primordial', 'Luminescent',
    'Forbidden', 'Eternal', 'Sacred', 'Subterranean', 'Obsidian', 'Iron-Bound',
    'Ethereal', 'Sovereign', 'Resonant', 'Chrono-Spatial', 'Meridian', 'Vitreous'
  ];

  private static NOUNS = [
    'the High Spire', 'the Iron Vault', 'the Astral Loom', 'the Sacred Oak',
    'the Silver Flame', 'the Whispering Crypts', 'the Seven Veils', 'the Golden Lion',
    'the Celestial Horizon', 'the Great Meridian', 'the Monolith', 'the Clockwork Heavens',
    'the Living Granite', 'the Sunken Kingdom', 'the Silver Raven', 'the Prismatic Arch'
  ];

  private static CONCEPTS = [
    'Biaxial Vault Stress', 'Celestial Precession', 'Etheric Wave Flow',
    'Alchemical Transmutation', 'Sacred Geometry', 'Pointed Arch Buttresses',
    'Modular Cryptography', 'Prism Refraction Optics', 'Living Stone Mortar',
    'Aristotelian Logic', 'Cardinal Matrix Eigenvalues', 'Thermal Damascus Smelting',
    'Astrolabe Calibration', 'Zodiac Orbital Mechanics', 'Linguistic Roots of the First Tongue'
  ];

  private static COVER_COLORS = [
    '#82181e', '#9e1c25', '#631317', '#1c3761', '#14294a', '#26497d',
    '#1d5334', '#133d25', '#2b6942', '#542d17', '#6b3a1e', '#7a4422',
    '#521c63', '#6a2280', '#3e134d', '#184e57', '#206670', '#222226',
    '#18181b', '#8c6227', '#a3722e', '#8c3823', '#732b1a', '#2c3e50'
  ];

  private static ACCENT_COLORS = [
    '#ffd700', '#e5b84c', '#9a7838', '#d1d7e3', '#c86d49', '#dfd2b5', '#c09853'
  ];

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
   * Generates lightweight library book catalog metadata for shelves, tables, and pedestals.
   * Full contents are generated dynamically in real-time when the book is opened.
   */
  public static generateBook(seed: number, overrideTitle?: string): BookData {
    const prng = this.createPrng(seed);

    const classKeys = Object.keys(this.CLASSIFICATIONS) as MainBookClassification[];
    const classification = classKeys[Math.floor(prng() * classKeys.length)];
    const subgenres = this.CLASSIFICATIONS[classification];
    const subgenre = subgenres[Math.floor(prng() * subgenres.length)];

    const realm = this.REALMS_AND_CITIES[Math.floor(prng() * this.REALMS_AND_CITIES.length)];
    const organization = this.ORGANIZATIONS[Math.floor(prng() * this.ORGANIZATIONS.length)];
    const era = this.ERAS[Math.floor(prng() * this.ERAS.length)];

    let title = overrideTitle;
    if (!title) {
      title = this.generateGenerativeTitle(prng, realm, subgenre);
    }

    const subtitleTemplate = this.SUBTITLE_TEMPLATES[Math.floor(prng() * this.SUBTITLE_TEMPLATES.length)];
    const subtitle = subtitleTemplate
      .replace('[Realm]', realm)
      .replace('[Organization]', organization)
      .replace('[Era]', era);

    const authorFirst = this.FIRST_NAMES[Math.floor(prng() * this.FIRST_NAMES.length)];
    const authorSuffix = this.SURNAMES_AND_EPITHETS[Math.floor(prng() * this.SURNAMES_AND_EPITHETS.length)];
    const author = `${authorFirst} ${authorSuffix}`;

    const coverColor = this.COVER_COLORS[Math.floor(prng() * this.COVER_COLORS.length)];
    const accentColor = this.ACCENT_COLORS[Math.floor(prng() * this.ACCENT_COLORS.length)];

    const genre = bookGeneratorService.inferDarkFantasyGenre(title);
    const isSTEM = aiBookService.isMathAllowedForGenre(genre);

    const fontFamilies: BookFontFamily[] = ['garamond', 'gothic', 'scriptorium', 'crimson', 'mystic'];
    const fontSizes: BookFontSize[] = ['compact', 'regular', 'relaxed'];

    const fontFamily: BookFontFamily = isSTEM ? 'crimson' : genre === 'Malediction Poetry' ? 'mystic' : fontFamilies[Math.floor(prng() * fontFamilies.length)];
    const fontSize: BookFontSize = isSTEM ? 'compact' : fontSizes[Math.floor(prng() * fontSizes.length)];

    let layoutFormat: BookLayoutFormat = 'standard';
    let writingStyle: BookWritingStyle = 'chronicle-history';

    if (genre === 'Tragic Plays') {
      layoutFormat = 'play-script';
      writingStyle = 'dramatic-play';
    } else if (genre === 'Malediction Poetry') {
      layoutFormat = 'verse';
      writingStyle = 'epic-verse';
    } else if (genre === 'Heretical Philosophies') {
      layoutFormat = 'marginalia';
      writingStyle = 'philosophical-dialogue';
    } else if (isSTEM) {
      layoutFormat = 'standard';
      writingStyle = 'academic-treatise';
    }

    const id = `book_${seed}_${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
    const targetPageCount = 12 + Math.floor(prng() * 37); // 12 to 48 pages

    // Return lightweight metadata skeleton; full pages are resolved on-demand by BookGeneratorService
    return {
      id,
      title,
      subtitle,
      author,
      era,
      classification,
      subgenre,
      genre,
      targetPageCount,
      coverColor,
      accentColor,
      fontFamily,
      fontSize,
      layoutFormat,
      writingStyle,
      isSTEM,
      seed,
      pages: [],
      isLoaded: false
    };
  }

  private static generateGenerativeTitle(prng: () => number, realm: string, subgenre: string): string {
    const template = this.TITLE_TEMPLATES[Math.floor(prng() * this.TITLE_TEMPLATES.length)];
    const adj = this.ADJECTIVES[Math.floor(prng() * this.ADJECTIVES.length)];
    const noun = this.NOUNS[Math.floor(prng() * this.NOUNS.length)];
    const concept1 = this.CONCEPTS[Math.floor(prng() * this.CONCEPTS.length)];
    const concept2 = this.CONCEPTS[Math.floor(prng() * this.CONCEPTS.length)];

    let t = template
      .replace('[Adjective]', adj)
      .replace('[Noun]', noun)
      .replace('[Concept]', concept1)
      .replace('[Concept2]', concept2)
      .replace('[Realm]', realm);

    if (subgenre.includes('Geometry') || subgenre.includes('Arithmetic')) {
      t = t.replace('Chronicles of', 'Calculations of').replace('The Codex of', 'The Geometry of');
    }
    return t;
  }
}
