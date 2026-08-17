import { GenerativeMathEngine } from './GenerativeMathEngine';

export type MainBookClassification =
  | 'Fiction'
  | 'Non-Fiction'
  | 'Academic Texts & Grammar'
  | 'Professional Manuals'
  | 'Breakthroughs & Theories'
  | 'Dissertations'
  | 'Mysticism & Magic'
  | 'Tales & Mythology';

export type PageSectionType =
  | 'half-title'
  | 'frontispiece'
  | 'title-page'
  | 'copyright'
  | 'dedication'
  | 'toc'
  | 'foreword'
  | 'prologue'
  | 'chapter'
  | 'epilogue'
  | 'acknowledgments'
  | 'appendix'
  | 'glossary'
  | 'author-bio';

export type BookFontFamily =
  | 'garamond'    // Classic scholarly serif (EB Garamond / Baskerville)
  | 'gothic'      // Medieval Blackletter / Gothic title with crisp serif body
  | 'scriptorium' // Old-style manuscript serif (Palatino / IM Fell)
  | 'crimson'     // Modern academic scholarly (Crimson Pro)
  | 'mystic';     // Arcane / poetic serif with calligraphic flair (Alegreya)

export type BookFontSize =
  | 'compact' // 13.5px body, line-height 1.6
  | 'regular' // 14.5px body, line-height 1.68
  | 'relaxed'; // 15.5px body, line-height 1.75

export type BookLayoutFormat =
  | 'standard'     // Single column with drop cap
  | 'two-column'   // Two-column scholarly layout
  | 'marginalia'   // Text with scriptorium marginal glosses
  | 'illuminated'  // Decorative border frame around pages
  | 'verse';       // Centered poetic stanzas for Epic Poetry

export type BookWritingStyle =
  | 'academic-treatise'
  | 'mystic-grimoire'
  | 'technical-manual'
  | 'chronicle-history'
  | 'epic-verse'
  | 'philosophical-dialogue'
  | 'gothic-fiction';

export interface BookPage {
  pageType: PageSectionType;
  chapterTitle: string;
  pageNumber: number;
  content: string;
  headerText?: string;
  hasMathProof?: boolean;
  marginalNote?: string;
}

export interface BookData {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  era: string;
  classification: MainBookClassification;
  subgenre: string;
  coverColor: string;
  accentColor: string;
  pages: BookPage[];
  fontFamily: BookFontFamily;
  fontSize: BookFontSize;
  layoutFormat: BookLayoutFormat;
  writingStyle: BookWritingStyle;
  isSTEM: boolean;
}

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

    const isSTEM = this.isStemSubject(classification, subgenre, title, subtitle);

    const fontFamilies: BookFontFamily[] = ['garamond', 'gothic', 'scriptorium', 'crimson', 'mystic'];
    const fontSizes: BookFontSize[] = ['compact', 'regular', 'relaxed'];

    let fontFamily: BookFontFamily = isSTEM ? 'crimson' : fontFamilies[Math.floor(prng() * fontFamilies.length)];
    let fontSize: BookFontSize = isSTEM ? 'compact' : fontSizes[Math.floor(prng() * fontSizes.length)];

    let layoutFormat: BookLayoutFormat = 'standard';
    let writingStyle: BookWritingStyle = 'academic-treatise';

    if (subgenre.includes('Poetry') || subgenre.includes('Ballads')) {
      layoutFormat = 'verse';
      writingStyle = 'epic-verse';
    } else if (classification === 'Fiction' || classification === 'Tales & Mythology') {
      writingStyle = 'gothic-fiction';
    } else if (classification === 'Professional Manuals') {
      layoutFormat = prng() < 0.4 ? 'marginalia' : 'standard';
      writingStyle = 'technical-manual';
    } else if (classification === 'Mysticism & Magic') {
      layoutFormat = prng() < 0.45 ? 'illuminated' : 'standard';
      writingStyle = 'mystic-grimoire';
    } else if (classification === 'Dissertations') {
      layoutFormat = prng() < 0.35 ? 'marginalia' : 'standard';
      writingStyle = 'philosophical-dialogue';
    } else if (classification === 'Non-Fiction') {
      writingStyle = isSTEM ? 'academic-treatise' : 'chronicle-history';
    }

    const numChapters = 4;
    const pages: BookPage[] = [];

    // -------------------------------------------------------------
    // 1. FRONT MATTER
    // -------------------------------------------------------------
    pages.push({
      pageType: 'half-title',
      chapterTitle: '',
      pageNumber: 1,
      content: `\n\n\n\n\n\n${title.toUpperCase()}\n\n❦`
    });

    pages.push({
      pageType: 'frontispiece',
      chapterTitle: 'FRONTISPIECE',
      pageNumber: 2,
      content: this.generateFrontispieceText(classification, realm, organization, prng)
    });

    pages.push({
      pageType: 'title-page',
      chapterTitle: 'TITLE PAGE',
      pageNumber: 3,
      content: `${title.toUpperCase()}\n\n— ${subtitle} —\n\n\nBY\n${author.toUpperCase()}\n\n\nARCHIVAL CLASSIFICATION: ${classification.toUpperCase()}\nACADEMIC DISCIPLINE: ${subgenre.toUpperCase()}\n\n\n❦ ══════════════════ ❧\nPUBLISHED UNDER THE AEGIS OF ${organization.toUpperCase()}\nARCHIVES OF ${realm.toUpperCase()} • ${era.toUpperCase()}`
    });

    const isbn = `ARCH-${1000 + Math.floor(prng() * 9000)}-${realm.slice(0, 3).toUpperCase()}-${10 + Math.floor(prng() * 90)}`;
    pages.push({
      pageType: 'copyright',
      chapterTitle: 'ARCHIVAL NOTICE',
      pageNumber: 4,
      content: `ARCHIVAL REPOSITORY OF ${realm.toUpperCase()}\nPreserved under the Perpetual Edict of ${organization}.\n\nManuscript Registry Code: ${isbn}\nAcademic Discipline: ${subgenre}\nCatalog Location: Bay ${1 + (seed % 6)}, Tier ${1 + (seed % 5)}\nHistorical Era: ${era}\n\nHand-transcribed upon Linen Vellum with Iron-Gall Ink.\nBound in Calfskin with Cast Brass Hardware.\n\nAll rights reserved. Inscribed by the Scribes of ${realm}.`
    });

    pages.push({
      pageType: 'dedication',
      chapterTitle: 'DEDICATION',
      pageNumber: 5,
      content: this.generateDedication(authorFirst, realm, prng)
    });

    const forewordText1 = this.generateForeword(classification, title, author, realm, organization, 1, prng);
    const forewordText2 = this.generateForeword(classification, title, author, realm, organization, 2, prng);

    pages.push({
      pageType: 'toc',
      chapterTitle: 'TABLE OF CONTENTS',
      pageNumber: 6,
      content: ''
    });

    pages.push({
      pageType: 'foreword',
      chapterTitle: 'PREFACE TO THE ARCHIVAL EDITION',
      pageNumber: 7,
      content: forewordText1
    });

    pages.push({
      pageType: 'foreword',
      chapterTitle: 'PREFACE (CONTINUED)',
      pageNumber: 8,
      content: forewordText2
    });

    // -------------------------------------------------------------
    // 2. BODY MATTER (Narrative Arc across Chapters I to IV)
    // -------------------------------------------------------------
    pages.push({
      pageType: 'prologue',
      chapterTitle: 'PROLOGUE: FOUNDATIONAL PREMISES',
      pageNumber: 9,
      content: this.generatePrologue(classification, subgenre, title, realm, organization, isSTEM, prng)
    });

    const tocEntries: { title: string; page: number }[] = [
      { title: 'Frontispiece & Title Page', page: 2 },
      { title: 'Preface & Archival Commentary', page: 7 },
      { title: 'Prologue', page: 9 }
    ];

    const chapterTitles = this.getChapterTitlesForBook(classification, subgenre, numChapters, prng);

    let curPageNum = 10;
    for (let c = 0; c < numChapters; c++) {
      const cTitle = chapterTitles[c];
      tocEntries.push({ title: cTitle, page: curPageNum });

      const pagesInChapter = 2;
      for (let cp = 1; cp <= pagesInChapter; cp++) {
        const pageContent = this.generateFittedChapterPageContent(
          classification,
          subgenre,
          writingStyle,
          c,
          cp,
          pagesInChapter,
          title,
          cTitle,
          realm,
          organization,
          isSTEM,
          seed + c * 1013 + cp * 97,
          prng
        );

        pages.push({
          pageType: 'chapter',
          chapterTitle: `CHAPTER ${this.toRoman(c + 1)}: ${cTitle.toUpperCase()}`,
          pageNumber: curPageNum,
          content: pageContent,
          headerText: `${title.toUpperCase()} • CHAPTER ${this.toRoman(c + 1)}`,
          hasMathProof: isSTEM && cp === 2,
          marginalNote: layoutFormat === 'marginalia' && cp === 1 ? `Glosa ${this.toRoman(c + 1)}: Inscriptum in ${realm}.` : undefined
        });
        curPageNum++;
      }
    }

    // Epilogue
    tocEntries.push({ title: 'Epilogue', page: curPageNum });
    pages.push({
      pageType: 'epilogue',
      chapterTitle: 'EPILOGUE: THE ETERNAL HORIZON',
      pageNumber: curPageNum,
      content: this.generateEpilogue(classification, title, author, realm, organization, prng),
      headerText: `${title.toUpperCase()} • EPILOGUE`
    });
    curPageNum++;

    // -------------------------------------------------------------
    // 3. BACK MATTER
    // -------------------------------------------------------------
    tocEntries.push({ title: 'Acknowledgments', page: curPageNum });
    pages.push({
      pageType: 'acknowledgments',
      chapterTitle: 'ACKNOWLEDGMENTS',
      pageNumber: curPageNum,
      content: this.generateAcknowledgments(author, realm, organization, prng)
    });
    curPageNum++;

    tocEntries.push({ title: 'Appendix: Scholarly Notes', page: curPageNum });
    pages.push({
      pageType: 'appendix',
      chapterTitle: 'APPENDIX & SCHOLARLY NOTES',
      pageNumber: curPageNum,
      content: this.generateAppendix(classification, realm, prng)
    });
    curPageNum++;

    tocEntries.push({ title: 'Glossary of Terms', page: curPageNum });
    pages.push({
      pageType: 'glossary',
      chapterTitle: 'GLOSSARY OF TERMS',
      pageNumber: curPageNum,
      content: this.generateGlossary(classification, prng)
    });
    curPageNum++;

    tocEntries.push({ title: 'Author Biography', page: curPageNum });
    pages.push({
      pageType: 'author-bio',
      chapterTitle: 'ABOUT THE AUTHOR',
      pageNumber: curPageNum,
      content: this.generateAuthorBio(author, era, realm, organization, classification, prng)
    });

    pages[5].content = this.formatTableOfContents(tocEntries);

    return {
      id: `book_${seed}_${classification.replace(/\s+/g, '_')}`,
      title,
      subtitle,
      author,
      era,
      classification,
      subgenre,
      coverColor,
      accentColor,
      pages,
      fontFamily,
      fontSize,
      layoutFormat,
      writingStyle,
      isSTEM
    };
  }

  private static isStemSubject(
    classification: MainBookClassification,
    subgenre: string,
    title: string,
    subtitle: string
  ): boolean {
    if (classification === 'Breakthroughs & Theories') return true;
    if (classification === 'Academic Texts & Grammar' && (subgenre.includes('Geometry') || subgenre.includes('Logic') || subgenre.includes('Arithmetic'))) return true;
    if (classification === 'Professional Manuals' && (subgenre.includes('Architecture') || subgenre.includes('Stonemasonry') || subgenre.includes('Metallurgy') || subgenre.includes('Clockmaking'))) return true;
    if (classification === 'Dissertations' && (subgenre.includes('Cryptographic') || subgenre.includes('Metaphysical'))) return true;
    if (subgenre.includes('Science') || subgenre.includes('Natural Philosophy') || subgenre.includes('Celestial') || subgenre.includes('Resonance')) return true;

    const combined = `${title} ${subtitle} ${subgenre}`.toLowerCase();
    const stemKeywords = [
      'geometry', 'geometria', 'astronomia', 'mechanics', 'optics', 'calculus', 'ratio',
      'theory', 'architecture', 'stonemasonry', 'metallurgy', 'alchemy',
      'principles', 'cipher', 'cryptographic', 'harmonic', 'sphere',
      'equations', 'vectors', 'flux', 'clockwork', 'astrolabe', 'proofs'
    ];
    return stemKeywords.some((kw) => combined.includes(kw));
  }

  private static generateGenerativeTitle(prng: () => number, realm: string, subgenre: string): string {
    if (subgenre.includes('Linguistics') || subgenre.includes('Philology')) {
      const titles = [
        `Lexicon of Classical Dialects in ${realm}`,
        `Morphology and Syntax of the Ancient Tongue`,
        `Etymological Roots of Ancient ${realm}`,
        `Grammatica Antiqua of the High Scriptorium`,
        `The Phonetics of the First Inscriptions`
      ];
      return titles[Math.floor(prng() * titles.length)];
    }
    if (subgenre.includes('Logic') || subgenre.includes('Rhetoric')) {
      const titles = [
        `The Canon of Dialectic and Syllogistic Inference`,
        `Treatise on Modal Logic in ${realm}`,
        `Discourses on Formal Demonstration`,
        `The Organon of Veritas and Proof`,
        `Axiomatic Structures of Classical Thought`
      ];
      return titles[Math.floor(prng() * titles.length)];
    }

    const template = this.TITLE_TEMPLATES[Math.floor(prng() * this.TITLE_TEMPLATES.length)];
    const adj = this.ADJECTIVES[Math.floor(prng() * this.ADJECTIVES.length)];
    const noun = this.NOUNS[Math.floor(prng() * this.NOUNS.length)];
    const concept = this.CONCEPTS[Math.floor(prng() * this.CONCEPTS.length)];
    const concept2 = this.CONCEPTS[(Math.floor(prng() * this.CONCEPTS.length) + 1) % this.CONCEPTS.length];

    return template
      .replace('[Adjective]', adj)
      .replace('[Noun]', noun)
      .replace('[Concept]', concept)
      .replace('[Concept2]', concept2)
      .replace('[Realm]', realm);
  }

  private static formatTableOfContents(entries: { title: string; page: number }[]): string {
    let text = `TABLE OF CONTENTS\n\n`;
    entries.forEach((e) => {
      const dots = ' . '.repeat(Math.max(2, 14 - Math.floor(e.title.length / 2)));
      text += `${e.title.toUpperCase()}${dots}${e.page}\n`;
    });
    return text;
  }

  private static generateFrontispieceText(
    classification: MainBookClassification,
    realm: string,
    organization: string,
    _prng: () => number
  ): string {
    const mottos: Record<MainBookClassification, string> = {
      'Fiction': 'IN TENEBRIS LUX LUCET • IN SHADOWS THE LIGHT SHINES',
      'Non-Fiction': 'HISTORIA MAGISTRA VITAE • HISTORY IS THE TEACHER OF LIFE',
      'Academic Texts & Grammar': 'SCIENTIA IPSA POTESTAS EST • KNOWLEDGE ITSELF IS POWER',
      'Professional Manuals': 'MANU FACTUM ET LAPIDE STRUCTUM • BUILT BY HAND AND STONE',
      'Breakthroughs & Theories': 'PER ARDUA AD ASTRA • THROUGH STRUGGLE TO THE STARS',
      'Dissertations': 'VERITAS OMNIA VINCIT • TRUTH CONQUERS ALL',
      'Mysticism & Magic': 'IGNIS ET ASTRALIS ORDO • FIRE AND THE CELESTIAL ORDER',
      'Tales & Mythology': 'SEMPER VIGILANS • EVER WATCHFUL ACROSS THE AGES'
    };

    const emblemAscii = `
       ╔══════════════════════════════════╗
       ║             ⚜  ⚜  ⚜              ║
       ║           ╔══════════╗           ║
       ║           ║  ✦    ✦  ║           ║
       ║        ╔══╩══════════╩══╗        ║
       ║        ║   ⚔  🏛  ⚔   ║        ║
       ║        ╚══╦══════════╦══╝        ║
       ║           ║  ✦    ✦  ║           ║
       ║           ╚══════════╝           ║
       ║             ❦  ❧  ❦              ║
       ╚══════════════════════════════════╝
    `;

    return `${emblemAscii}\n\n"${mottos[classification] || mottos['Fiction']}"\n\nIlluminated under the Authority of ${organization} in ${realm}.`;
  }

  private static generateDedication(authorFirst: string, realm: string, prng: () => number): string {
    const dedications = [
      `To the master craftsmen and architects of ${realm}, whose chisel marks and geometrical canons remain our eternal guide.`,
      `For Lady ${this.FIRST_NAMES[Math.floor(prng() * this.FIRST_NAMES.length)]}, who preserved the midnight oil and defended these manuscripts during the winter tempests of ${realm}.`,
      `To the seekers of empirical truth across the cloisters of ${realm}, holding a solitary candle against the darkness.`,
      `Dedicated to Chancellor ${authorFirst} of the High Council, who sheltered these scrolls in the stone vaults.`,
      `For those who dare to decipher the starlight, and who recognize the divine geometry underlying every stone.`
    ];
    return `\n\n\n\n\n\n"${dedications[Math.floor(prng() * dedications.length)]}"\n\n— The Author`;
  }

  private static generateForeword(
    classification: MainBookClassification,
    bookTitle: string,
    author: string,
    realm: string,
    organization: string,
    part: number,
    prng: () => number
  ): string {
    const prefectName = `${this.FIRST_NAMES[Math.floor(prng() * this.FIRST_NAMES.length)]} ${this.SURNAMES_AND_EPITHETS[Math.floor(prng() * this.SURNAMES_AND_EPITHETS.length)]}`;

    if (part === 1) {
      return `It is with profound reverence that ${organization} presents this archival edition of ${bookTitle}. For generations, the original parchment folios lay securely preserved within the stone chests of ${realm}, shielded from the elements and the turbulence of forgotten wars.\n\nThe author, ${author}, was a celebrated authority in ${classification.toLowerCase()}. Applying rigorous observation, sacred proportion, and empirical discipline, their conclusions continue to illuminate scholars across the civilized realms.\n\nAs the reader turns these leaves, remember that wisdom is not a passive heirloom, but an active covenant between past and present.`;
    }
    return `In preparing this definitive codex, the scribes of ${organization} have carefully verified every citation against the original calfskin folios. Minor annotations in the margins have been preserved, for they reveal the living intellectual debate that surrounded this work.\n\nMay this treatise inspire all scholars who walk these silent cloisters. Let the candle burn bright upon the study desk, and let no word of truth be forgotten.\n\n— Prefect ${prefectName}\nCustodian of the Archives of ${realm}`;
  }

  private static generatePrologue(
    classification: MainBookClassification,
    subgenre: string,
    bookTitle: string,
    realm: string,
    organization: string,
    isSTEM: boolean,
    _prng: () => number
  ): string {
    const stemAddon = isSTEM
      ? `\n\nThe mathematical derivations and technical figures contained within these pages have been verified using the calibrated instruments of ${organization}. Let no reader assume that geometry is detached from reality; for every equation inscribed upon these leaves reflects the exact physical laws governing keystones, etheric resonance, and planetary orbits.`
      : `\n\nLet the reader cast aside trivial distractions and step across the threshold into the deeper mysteries of ${classification.toLowerCase()}. May the illuminated wisdom of the past grant insight into the unfolding destiny of ${realm}.`;

    return `Before the first cornerstone was laid in the ancient city of ${realm}, the principles of ${subgenre.toLowerCase()} had already been decreed by the first masters. It is written that the cosmos speaks in a language of resonance, proportion, and light.\n\nWithin this volume of ${bookTitle}, we endeavor to bridge the chasm between ancient lore and empirical truth. Every observation recorded herein has been verified within the consecrated halls of ${organization}.${stemAddon}`;
  }

  private static getChapterTitlesForBook(
    classification: MainBookClassification,
    subgenre: string,
    count: number,
    _prng: () => number
  ): string[] {
    if (subgenre.includes('Linguistics') || subgenre.includes('Philology')) {
      return [
        'Morphology of Ancient Dialects',
        'Rules of Classical Syntax',
        'Etymological Transpositions',
        'Phonetic Inflections in the First Tongue'
      ].slice(0, count);
    }
    if (subgenre.includes('Logic') || subgenre.includes('Rhetoric')) {
      return [
        'The Canon of Syllogistic Inference',
        'Modus Barbara and Modal Validity',
        'Dialectical Refutation of Paradox',
        'Axiomatic Foundations of Truth'
      ].slice(0, count);
    }

    const chapterPools: Record<MainBookClassification, string[]> = {
      'Fiction': [
        'The Descent into the Cloister',
        'Labyrinth of the Iron Vaults',
        'The Awakening of the Ancient Relic',
        'Climax at the Gilded Gate'
      ],
      'Non-Fiction': [
        'Chronological Foundations',
        'The Siege of the Outer Walls',
        'Cultural Artifacts of Antiquity',
        'The Great Reconstruction'
      ],
      'Academic Texts & Grammar': [
        'Morphology of Ancient Dialects',
        'Rules of Classical Syntax',
        'Etymological Transpositions',
        'Orthography of Sacred Runes'
      ],
      'Professional Manuals': [
        'Preparation of Mortar & Keystones',
        'Thermal Tempering of Knight Blades',
        'Foundations of Arch Buttresses',
        'Inspection Protocols & Tolerances'
      ],
      'Breakthroughs & Theories': [
        'The Hypothesis of Etheric Flow',
        'Mathematical Geometries of Astral Spheres',
        'Harmonic Resonance Theorems',
        'The Classical Field Circulation Axiom'
      ],
      'Dissertations': [
        'Theological Axioms of the Light',
        'Epistemology of the Subterranean Mind',
        'Excavation Findings at Level VII',
        'Cryptographic Analysis of the Vault Seal'
      ],
      'Mysticism & Magic': [
        'Igniting the Inner Hearth Flame',
        'Invocations to the Starlight Wardens',
        'Weaving the Wards of Protection',
        'The Seven Veils of the Void'
      ],
      'Tales & Mythology': [
        'The Primordial Slumber of the Earth',
        'When the Lion Roared Over Silverpeak',
        'The Tragedy of the Sunken Spires',
        'The Celestial Falcon and the Wyrm'
      ]
    };

    const pool = chapterPools[classification] || chapterPools['Fiction'];
    return pool.slice(0, count);
  }

  private static generateFittedChapterPageContent(
    classification: MainBookClassification,
    subgenre: string,
    writingStyle: BookWritingStyle,
    chapterIdx: number,
    pageInChapter: number,
    _totalPagesInChapter: number,
    bookTitle: string,
    chapterTitle: string,
    realm: string,
    organization: string,
    isSTEM: boolean,
    pageSeed: number,
    prng: () => number
  ): string {
    // 1. Epic Verse Formatting
    if (writingStyle === 'epic-verse') {
      const verseStanzas = [
        `When shadows lengthen o'er the silent stone,\nAnd solemn winds through empty cloisters moan,\nThe ancient guardians take their vigilant stand,\nWith silver blades unsheathed in righteous hand.`,
        `Behold the golden sun across the nave,\nWhere once the banner of the sovereign gave\nIts proud salute unto the vaulted skies,\nBefore the stars in silent slumber rise.`,
        `No mortal iron can break the sacred seal,\nNor turn aside the truth that stones reveal;\nFrom deep foundations to the spire on high,\nThe bells of ${realm} shall never die.`,
        `Through iron gates where ancient monarchs trod,\nBeneath the vaulted firmament of God,\nThe silent scrolls their mystic light bestow,\nWhile centuries in solemn cadence flow.`
      ];
      const s1 = verseStanzas[chapterIdx % verseStanzas.length];
      const s2 = verseStanzas[(chapterIdx + 1) % verseStanzas.length];

      return `[VERSE CANTO ${chapterIdx + 1}]\n\n${s1}\n\n${s2}\n\n❦ ════════════════════ ❧\n\n*Refrain: "Hark to the chime that echoes in the deep, where forgotten kings their ancient vigil keep."*`;
    }

    // 2. Discipline-Specific STEM / Science / Math / Logic Generation
    if (isSTEM) {
      if (pageInChapter === 1) {
        // Dynamically select varied diagram for this chapter
        const diagramList = ['GOTHIC_ARCH', 'ASTROLABE_MERIDIAN', 'OPTICAL_PRISM', 'ALCHEMICAL_CRUCIBLE', 'CIPHER_LATTICE', 'WAVE_DISPERSION', 'VAULT_FLOORPLAN', 'SYLLOGISM_EULER'];
        
        let chosenType = diagramList[(pageSeed + chapterIdx) % diagramList.length];
        if (chapterIdx === 0) {
          if (subgenre.includes('Linguistics') || subgenre.includes('Logic')) chosenType = 'SYLLOGISM_EULER';
          else if (subgenre.includes('Celestial') || subgenre.includes('Astral')) chosenType = 'ASTROLABE_MERIDIAN';
          else if (subgenre.includes('Optics') || subgenre.includes('Light')) chosenType = 'OPTICAL_PRISM';
          else if (subgenre.includes('Metallurgy') || subgenre.includes('Smelting')) chosenType = 'ALCHEMICAL_CRUCIBLE';
          else if (subgenre.includes('Cryptographic') || subgenre.includes('Runic')) chosenType = 'CIPHER_LATTICE';
          else if (subgenre.includes('Wave') || subgenre.includes('Resonance')) chosenType = 'WAVE_DISPERSION';
          else chosenType = 'GOTHIC_ARCH';
        }

        const diagramTitle = `${chosenType.replace(/_/g, ' ')} IN ${realm.toUpperCase()}`;
        const diagramCaption = `Fig ${chapterIdx + 1}.1 — Verified in the Scriptorium of ${organization}.`;

        const leadIntros = [
          `To establish the empirical foundations of ${chapterTitle.toLowerCase()}, the scholars of ${organization} conducted precise measurements across the observatories of ${realm}. Every structural and mathematical relation observed conforms strictly to invariant physical laws:`,
          `When analyzing the primary harmonics of ${chapterTitle.toLowerCase()}, natural philosophers at ${organization} demonstrated that continuous equilibrium is preserved along all boundary surfaces in ${realm}:`,
          `An investigation into the foundational axioms of ${chapterTitle.toLowerCase()} reveals that empirical observations recorded in ${realm} match theoretical predictions within an experimental variance of less than $0.05\\%$:`
        ];
        const leadText = leadIntros[chapterIdx % leadIntros.length];
        const diagramToken = `[SVG_DIAGRAM:${chosenType}:${diagramTitle}:${diagramCaption}:${pageSeed}]`;

        return `${leadText}\n\n${diagramToken}`;
      } else {
        // Procedurally generated unique mathematical proof & equation
        const proof = GenerativeMathEngine.generateUniqueProof(subgenre, chapterIdx, pageInChapter, realm, organization, pageSeed);

        let proofContent = `[${proof.theoremHeader}]\n\n${proof.premiseText}\n\n${proof.primaryEquation}\n\n${proof.stepHeader}\n\n${proof.stepLines.join('\n\n')}`;
        if (proof.matrixEquation) {
          proofContent += `\n\n${proof.matrixEquation}`;
        }
        if (proof.secondaryEquation) {
          proofContent += `\n\n${proof.secondaryEquation}`;
        }
        proofContent += `\n\n${proof.conclusionText}\n\n[${proof.qedText}]`;

        return proofContent;
      }
    }

    // 3. Gothic Fiction & Narrative Story Arcs (Protagonist quest, expedition, relic, climax)
    if (writingStyle === 'gothic-fiction' || classification === 'Fiction' || classification === 'Tales & Mythology') {
      const heroName = this.FIRST_NAMES[(pageSeed + 3) % this.FIRST_NAMES.length];
      const companionName = this.FIRST_NAMES[(pageSeed + 7) % this.FIRST_NAMES.length];

      if (chapterIdx === 0) {
        if (pageInChapter === 1) {
          return `The autumn fog hung thick over the iron-crested towers of ${realm}. ${heroName} tightened their woolen cloak against the biting wind as the heavy oak doors of ${organization} groaned open on rusted iron hinges.\n\nInside, the smell of damp stone and beeswax candles filled the cloisters. In their hand, ${heroName} clutched the faded parchment map—the only remaining clue to the location of the subterranean vaults sealed centuries ago by the Archon.`;
        } else {
          return `"We cannot delay," whispered ${companionName}, stepping from the shadows with a brass lantern aloft. "The celestial alignment reaches its meridian at midnight. If we do not breach the threshold before the third bell toll, the wards will reset for another century."\n\nTogether, they descended the spiral stairwell carved directly into the living granite bedrock of ${realm}, their boots echoing softly in the descending silence.`;
        }
      } else if (chapterIdx === 1) {
        if (pageInChapter === 1) {
          return `At the bottom of the landing lay the Great Labyrinth of ${realm}. Rows of fluted stone pillars stretched into the gloom, their capitals carved with gargoyles and interlocking heraldic vines. Water dripped steadily from the ceiling vaults into shallow crystalline basins.\n\n${heroName} checked the compass bearing against the ancient script. Every archway bore the seal of ${organization}, guarding secrets that had brought empires to their knees.`;
        } else {
          return `A sudden mechanical grinding reverberated through the corridor. The flagstones beneath their feet shifted, revealing a hidden stairwell plunging into the deepest crypts. "The mechanism is alive," ${heroName} murmured in awe.\n\nFrom the depths arose a faint, ethereal violet illumination—the telltale signature of an undisturbed primordial relic.`;
        }
      } else if (chapterIdx === 2) {
        if (pageInChapter === 1) {
          return `In the center of the vaulted chamber stood an octagonal marble dais. Suspended in mid-air by intricate magnetic counterweights floated the Relic of ${realm}—a sphere of polished obsidian surrounded by interlocking brass astrolabe rings.\n\nFaint glyphs pulsed along its equator, casting geometric lattice shadows across the damp stone walls of the crypt.`;
        } else {
          return `${heroName} approached with measured breaths, extending a gloved hand toward the outer gimbal. As their fingers brushed the inscription, a harmonic resonance chimed throughout the cathedral above.\n\nThe glyphs aligned, releasing the pneumatic pressure seal with a hiss of ancient air trapped since the Fourth Era.`;
        }
      } else {
        if (pageInChapter === 1) {
          return `With the seal unlocked, the forgotten knowledge of ${realm} flowed into the illuminated manuscript. The shadows that had haunted the cloister receded before the radiant dawn light filtering down through the clerestory stained-glass windows.\n\n${companionName} looked upon the translated folios with reverence. "The truth was never lost," they said softly. "It was merely waiting for those who dared to seek it."`;
        } else {
          return `As they returned to the sunlit upper cloisters of ${organization}, the bells of ${realm} began their solemn morning chimes. The expedition was complete, but the grand legacy inscribed within ${bookTitle} would echo across generations to come.\n\nFinis • Here ends the chronicle of the deep vaults.`;
        }
      }
    }

    // 4. Mysticism & Magic (Incantations, alchemy notes, astral pathways)
    if (writingStyle === 'mystic-grimoire' || classification === 'Mysticism & Magic') {
      if (pageInChapter === 1) {
        return `To prepare the sanctified circle within the sanctuary of ${realm}, the adept must first purify the brazier with essence of cedar and powdered amber. Let the four cardinal points be consecrated under the invocation of ${organization}:\n\n"Ignis in Caelo • Lux in Tenebris • Pax in Aeternum."\n\nWhen the planetary transit enters the house of the Solstice Star, trace the protective glyph upon linen parchment using crushed lapis lazuli and distilled spring dew.`;
      } else {
        return `Behold the Astral Seal of the ${this.toRoman(chapterIdx + 1)} Sphere:\n\n$$\\Phi_{\\text{ward}}(r, \\theta) = \\sum_{n=1}^{4} \\frac{\\Omega_n}{r^n} \\cos(n\\theta - \\delta_k)$$\n\nMaintain focused intent for twenty-four breaths. When the incense smoke curls into vertical spirals, the portal to ${realm} is established. Let no uninitiated hand touch the perimeter until the closing invocation is chanted.\n\n❦ Explicit Grimoire Sanctum ❦`;
      }
    }

    // 5. Professional Manuals & Historical Chronicles (Default)
    const masterName = `${this.FIRST_NAMES[Math.floor(prng() * this.FIRST_NAMES.length)]} ${this.SURNAMES_AND_EPITHETS[Math.floor(prng() * this.SURNAMES_AND_EPITHETS.length)]}`;
    if (pageInChapter === 1) {
      return `The architectural treatise preserved in the archives of ${organization} establishes strict geometric tolerances for ${chapterTitle.toLowerCase()} in ${realm}.\n\nMaster Architect ${masterName} recorded that every cornerstone must be dressed with a tolerance of less than one-twelfth of an inch, using lime-pozzolana mortar cured over forty days.\n\nAdherence to these canons guarantees stability against seasonal frost heaves and ground subsidence.`;
    } else {
      return `Table of Operational Specifications (${realm})\n• Foundation Depth: ${(3.5 + chapterIdx * 0.8).toFixed(1)} m\n• Maximum Keystone Span: ${(14.2 + chapterIdx * 2.4).toFixed(1)} m\n• Compressive Strength: ${(42.5 + chapterIdx * 5.2).toFixed(1)} MPa\n• Arch Thrust Deflection: < 0.18%\n\nVerified by the High Master Mason-Artificers of ${organization}. Finis Sectionis.`;
    }
  }

  private static generateEpilogue(
    classification: MainBookClassification,
    bookTitle: string,
    author: string,
    realm: string,
    organization: string,
    _prng: () => number
  ): string {
    return `Here terminates the core exposition of ${bookTitle}.\n\n"The candle flame upon the reading desk may flicker and fade as the night deepens, but the illuminated word inscribed upon parchment remains forever impervious to the decay of time."\n\nThrough wars, schisms, and the silent passage of centuries, the insights of ${author} have endured within ${realm}. May those who walk the halls of ${organization} continue to seek, to question, and to preserve the heritage of ${classification.toLowerCase()}.\n\nFinis Coronat Opus • The End Crowns the Work.`;
  }

  private static generateAcknowledgments(author: string, realm: string, organization: string, _prng: () => number): string {
    return `The author wishes to express gratitude to:\n\n• The High Chapter of ${organization} for granting access to the sequestered vaults of ${realm}.\n\n• Master Scribe ${author} of the Iron Quill for meticulous transcription and correction of the draft leaves.\n\n• The Guild of Illuminators for the gold-leaf drop caps, frontispiece engraving, and hand-tooled binding.\n\n• Fellow scholars of ${realm}, whose rigorous debates provided the intellectual crucible in which these ideas were refined.`;
  }

  private static generateAppendix(_classification: MainBookClassification, realm: string, _prng: () => number): string {
    return `APPENDIX: HISTORICAL CITATIONS & COMPARATIVE CHRONOLOGY\n\n1. Codex ${realm} (Vol. IV, fol. 112r) — Primary source for the architectural dimensions of the first cathedral.\n\n2. The Solstice Ephemeris (Fourth Era, Year 742) — Astronomical tables recording the celestial alignment of the meridian rings.\n\n3. Liber Alchimia (ARCH-742-ALD-09) — Reference formulas for the preservation of oak gall ink and calfskin vellum.\n\n4. Edict of the High Council of ${realm} — Decreeing the perpetual preservation of all manuscripts.\n\nAll documents are held in the secure archives and may be inspected by petition.`;
  }

  private static generateGlossary(_classification: MainBookClassification, _prng: () => number): string {
    return `GLOSSARY OF TERMS\n\n• Alembic: A classical distillation apparatus consisting of a cucurbit and helm.\n\n• Apse: The semicircular vaulted recess at the eastern sanctuary of the cathedral.\n\n• Clerestory: The upper tier of walls pierced with stained-glass lancet windows.\n\n• Drop-Cap: An oversized, illuminated initial capital letter opening a chapter.\n\n• Keystones: The central wedge-shaped stone locking an arch into place.\n\n• Vellum: Fine parchment prepared from calfskin, noted for its durability.\n\n• Wainscot: Polished dark oak paneling lining the lower interior stone walls.`;
  }

  private static generateAuthorBio(
    author: string,
    era: string,
    realm: string,
    organization: string,
    classification: MainBookClassification,
    _prng: () => number
  ): string {
    return `ABOUT THE AUTHOR\n\n${author} was one of the most distinguished scholars of ${era} within ${realm}. Appointed Senior Chronicler of ${organization} at the age of thirty-two, they authored over twenty treatises on ${classification.toLowerCase()}, architecture, and natural philosophy.\n\nTheir pioneering work in archival preservation established standards still practiced today. When not writing in their cell overlooking the cloisters of ${realm}, they could be found lecturing before the Guild of Architects.\n\nTheir memory is preserved in the marble inscription plaque upon the southern ambulatory: "Sapientia Aeterna" (Eternal Wisdom).`;
  }

  private static toRoman(num: number): string {
    const romanMap: [number, string][] = [
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let res = '';
    let n = num;
    for (const [val, roman] of romanMap) {
      while (n >= val) {
        res += roman;
        n -= val;
      }
    }
    return res || `${num}`;
  }
}
