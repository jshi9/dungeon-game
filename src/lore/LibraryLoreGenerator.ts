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
  | 'two-column'   // Two-column scholarly layout (ideal for Lexicons, Dictionaries, Compendiums)
  | 'marginalia'   // Text with scriptorium marginal glosses / commentary
  | 'illuminated'  // Decorative border frame around pages
  | 'verse';       // Centered poetic stanzas for Epic Poetry / Mythological songs

export type BookWritingStyle =
  | 'academic-treatise'
  | 'mystic-grimoire'
  | 'technical-manual'
  | 'chronicle-history'
  | 'epic-verse'
  | 'philosophical-dialogue';

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
}

export class LibraryLoreGenerator {
  public static sessionSeed = Math.floor(Math.random() * 10000000);

  // 1. Classifications & Subgenres
  private static CLASSIFICATIONS: Record<MainBookClassification, string[]> = {
    'Fiction': ['High Fantasy', 'Gothic Tales', 'Fables & Parables', 'Epic Poetry'],
    'Non-Fiction': [
      'Biography',
      'Autobiography',
      'History',
      'Statecraft & Law',
      'Natural Philosophy',
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

  private static SUBTITLE_PATTERNS = [
    'An Archival Inquiry into the Principles of the First Age',
    'A Comprehensive Discourse for Scribes and Masters',
    'Transcribed from the Earliest Manuscripts of the High Vaults',
    'With Observations on Sacred Geometry and Natural Law',
    'Being a True and Faithful Account of Historic Revelations',
    'Compiled in the Scriptorium of the Grand Cathedral Nave',
    'A Systematic Treatise for Seekers of Illuminated Truth',
    'With Commentary by the Venerable Keepers of the Archives'
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

  private static COVER_COLORS = [
    '#82181e', '#9e1c25', '#631317',
    '#1c3761', '#14294a', '#26497d',
    '#1d5334', '#133d25', '#2b6942',
    '#542d17', '#6b3a1e', '#7a4422',
    '#521c63', '#6a2280', '#3e134d',
    '#184e57', '#206670',
    '#222226', '#18181b',
    '#8c6227', '#a3722e',
    '#8c3823', '#732b1a'
  ];

  private static ACCENT_COLORS = [
    '#ffd700', '#e5b84c', '#9a7838', '#d1d7e3', '#c86d49', '#1a1614', '#dfd2b5'
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
   * Generates a complete book with varied fonts, sizes, writing styles, formats, and equations
   */
  public static generateBook(seed: number, overrideTitle?: string): BookData {
    const prng = this.createPrng(seed);

    const classKeys = Object.keys(this.CLASSIFICATIONS) as MainBookClassification[];
    const classification = classKeys[Math.floor(prng() * classKeys.length)];
    const subgenres = this.CLASSIFICATIONS[classification];
    const subgenre = subgenres[Math.floor(prng() * subgenres.length)];

    let title = overrideTitle;
    if (!title) {
      if (prng() < 0.35) {
        const list = this.CLASSIC_TITLES[classification];
        title = list[Math.floor(prng() * list.length)];
      } else {
        title = this.generateTitle(prng, classification);
      }
    }

    const subtitle = this.SUBTITLE_PATTERNS[Math.floor(prng() * this.SUBTITLE_PATTERNS.length)];

    const authorFirstName = this.PROPER_NAMES[Math.floor(prng() * this.PROPER_NAMES.length)];
    const authorSuffix = this.AUTHORS_SUFFIX[Math.floor(prng() * this.AUTHORS_SUFFIX.length)];
    const author = `${authorFirstName} ${authorSuffix}`;
    const era = this.ERAS[Math.floor(prng() * this.ERAS.length)];

    const coverColor = this.COVER_COLORS[Math.floor(prng() * this.COVER_COLORS.length)];
    const accentColor = this.ACCENT_COLORS[Math.floor(prng() * this.ACCENT_COLORS.length)];

    // 1. Assign Book Typography & Format Characteristics
    const fontFamilies: BookFontFamily[] = ['garamond', 'gothic', 'scriptorium', 'crimson', 'mystic'];
    const fontSizes: BookFontSize[] = ['compact', 'regular', 'relaxed'];
    
    // Choose font family based on genre & style
    let fontFamily: BookFontFamily = 'garamond';
    if (classification === 'Breakthroughs & Theories' || classification === 'Academic Texts & Grammar') {
      fontFamily = prng() < 0.5 ? 'crimson' : 'garamond';
    } else if (classification === 'Mysticism & Magic') {
      fontFamily = prng() < 0.6 ? 'mystic' : 'gothic';
    } else if (classification === 'Dissertations' || classification === 'Professional Manuals') {
      fontFamily = prng() < 0.5 ? 'scriptorium' : 'garamond';
    } else {
      fontFamily = fontFamilies[Math.floor(prng() * fontFamilies.length)];
    }

    // Choose font size (never too big, never too small: 13.5px - 15.5px)
    let fontSize: BookFontSize = 'regular';
    if (classification === 'Academic Texts & Grammar' || classification === 'Breakthroughs & Theories') {
      fontSize = prng() < 0.5 ? 'compact' : 'regular';
    } else if (classification === 'Tales & Mythology' || classification === 'Fiction') {
      fontSize = prng() < 0.5 ? 'relaxed' : 'regular';
    } else {
      fontSize = fontSizes[Math.floor(prng() * fontSizes.length)];
    }

    // Choose layout format & writing style
    let layoutFormat: BookLayoutFormat = 'standard';
    let writingStyle: BookWritingStyle = 'academic-treatise';

    if (subgenre === 'Epic Poetry' || subgenre === 'Fables & Parables') {
      layoutFormat = 'verse';
      writingStyle = 'epic-verse';
    } else if (subgenre.includes('Lexicons') || subgenre.includes('Grammar') || classification === 'Academic Texts & Grammar') {
      layoutFormat = prng() < 0.6 ? 'two-column' : 'standard';
      writingStyle = 'academic-treatise';
    } else if (classification === 'Professional Manuals') {
      layoutFormat = prng() < 0.4 ? 'marginalia' : 'standard';
      writingStyle = 'technical-manual';
    } else if (classification === 'Mysticism & Magic') {
      layoutFormat = prng() < 0.5 ? 'illuminated' : 'standard';
      writingStyle = 'mystic-grimoire';
    } else if (classification === 'Dissertations') {
      layoutFormat = prng() < 0.4 ? 'marginalia' : 'standard';
      writingStyle = prng() < 0.5 ? 'philosophical-dialogue' : 'academic-treatise';
    } else if (classification === 'Non-Fiction') {
      layoutFormat = 'standard';
      writingStyle = 'chronicle-history';
    } else {
      layoutFormat = 'standard';
      writingStyle = 'academic-treatise';
    }

    // Determine Chapter count (4 to 7 chapters, each spanning 2 to 3 pages)
    const numChapters = 4 + Math.floor(prng() * 4);
    const pages: BookPage[] = [];

    // Check if this book qualifies for scientific/mathematical formulas & proofs
    const isMathScienceBook = this.shouldIncludeMathScience(classification, subgenre, prng);

    // -------------------------------------------------------------
    // 1. FRONT MATTER (Pages 1 to 8)
    // -------------------------------------------------------------
    pages.push({
      pageType: 'half-title',
      chapterTitle: '',
      pageNumber: 1,
      content: `\n\n\n\n\n\n\n\n\n\n${title.toUpperCase()}\n\n❦`
    });

    pages.push({
      pageType: 'frontispiece',
      chapterTitle: 'FRONTISPIECE',
      pageNumber: 2,
      content: this.generateFrontispieceText(classification, prng)
    });

    pages.push({
      pageType: 'title-page',
      chapterTitle: 'TITLE PAGE',
      pageNumber: 3,
      content: `${title.toUpperCase()}\n\n— ${subtitle} —\n\n\nBY\n${author.toUpperCase()}\n\n\nARCHIVAL CLASSIFICATION: ${classification.toUpperCase()}\nSUBGENRE: ${subgenre.toUpperCase()}\n\n\n❦ ══════════════════ ❧\nPUBLISHED BY THE HIGH CATHEDRAL SCRIPTORIUM\nARCHIVES OF ALDERIA • ANNO DOMINI`
    });

    const isbn = `MS-${(1000 + Math.floor(prng() * 9000))}-CATH-${(10 + Math.floor(prng() * 90))}`;
    pages.push({
      pageType: 'copyright',
      chapterTitle: 'ARCHIVAL NOTICE',
      pageNumber: 4,
      content: `GRAND CATHEDRAL ARCHIVAL REPOSITORY\nPreserved under the Perpetual Edict of the High Council.\n\nManuscript Identification Code: ${isbn}\nArchival Classification: ${classification}\nCatalog Shelf ID: Bay ${1 + (seed % 6)}, Tier ${1 + (seed % 5)}\nHistorical Era: ${era}\n\nTranscribed by hand upon 100% Linen Rag Vellum with Iron-Gall Ink.\nBound in Tanned Calfskin with Hand-Cast Brass Furniture.\n\nAll rights reserved. No part of this codex may be transmuted, void-scribed, or excised without express consent of the Keeper of Scrolls.\n\nPrinted and Illuminated in the High Nave Scriptorium.`
    });

    pages.push({
      pageType: 'dedication',
      chapterTitle: 'DEDICATION',
      pageNumber: 5,
      content: this.generateDedication(prng)
    });

    const forewordText1 = this.generateForeword(classification, title, author, 1, prng);
    const forewordText2 = this.generateForeword(classification, title, author, 2, prng);

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
    // 2. BODY MATTER (Prologue, Chapters I..N, Epilogue)
    // -------------------------------------------------------------
    pages.push({
      pageType: 'prologue',
      chapterTitle: 'PROLOGUE: THE FOUNDATIONAL AXIOMS',
      pageNumber: 9,
      content: this.generatePrologue(classification, subgenre, title, prng)
    });

    const tocEntries: { title: string; page: number }[] = [
      { title: 'Frontispiece & Title Page', page: 2 },
      { title: 'Preface & Archival Commentary', page: 7 },
      { title: 'Prologue', page: 9 }
    ];

    const chapterTitles = this.getChapterTitlesForBook(classification, numChapters, prng);

    let curPageNum = 10;
    for (let c = 0; c < numChapters; c++) {
      const cTitle = chapterTitles[c];
      tocEntries.push({ title: cTitle, page: curPageNum });

      const pagesInChapter = 2 + Math.floor(prng() * 2);
      for (let cp = 1; cp <= pagesInChapter; cp++) {
        const pageContent = this.generateChapterPageContent(
          classification,
          subgenre,
          writingStyle,
          c,
          cp,
          pagesInChapter,
          title,
          cTitle,
          isMathScienceBook,
          prng
        );

        pages.push({
          pageType: 'chapter',
          chapterTitle: `CHAPTER ${this.toRoman(c + 1)}: ${cTitle.toUpperCase()}`,
          pageNumber: curPageNum,
          content: pageContent,
          headerText: `${title.toUpperCase()} • CHAPTER ${this.toRoman(c + 1)}`,
          hasMathProof: isMathScienceBook && cp === 2,
          marginalNote: layoutFormat === 'marginalia' && cp === 1 ? `Glosa ${this.toRoman(c + 1)}: Vide folium vetus.` : undefined
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
      content: this.generateEpilogue(classification, title, author, prng),
      headerText: `${title.toUpperCase()} • EPILOGUE`
    });
    curPageNum++;

    // -------------------------------------------------------------
    // 3. BACK MATTER (Acknowledgments, Appendix, Glossary, Author Bio)
    // -------------------------------------------------------------
    tocEntries.push({ title: 'Acknowledgments', page: curPageNum });
    pages.push({
      pageType: 'acknowledgments',
      chapterTitle: 'ACKNOWLEDGMENTS',
      pageNumber: curPageNum,
      content: this.generateAcknowledgments(author, prng)
    });
    curPageNum++;

    tocEntries.push({ title: 'Appendix: Historical Notes & Citations', page: curPageNum });
    pages.push({
      pageType: 'appendix',
      chapterTitle: 'APPENDIX & SCHOLARLY NOTES',
      pageNumber: curPageNum,
      content: this.generateAppendix(classification, prng)
    });
    curPageNum++;

    tocEntries.push({ title: 'Glossary of Ancient Terms', page: curPageNum });
    pages.push({
      pageType: 'glossary',
      chapterTitle: 'GLOSSARY OF TERMS',
      pageNumber: curPageNum,
      content: this.generateGlossary(classification, prng)
    });
    curPageNum++;

    tocEntries.push({ title: 'Author Biography & Index', page: curPageNum });
    pages.push({
      pageType: 'author-bio',
      chapterTitle: 'ABOUT THE AUTHOR',
      pageNumber: curPageNum,
      content: this.generateAuthorBio(author, era, classification, prng)
    });

    // Populate Table of Contents on Page 6
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
      writingStyle
    };
  }

  private static shouldIncludeMathScience(
    classification: MainBookClassification,
    subgenre: string,
    prng: () => number
  ): boolean {
    if (classification === 'Breakthroughs & Theories') return true;
    if (classification === 'Academic Texts & Grammar' && (subgenre.includes('Geometry') || subgenre.includes('Logic'))) return true;
    if (classification === 'Dissertations' && (subgenre.includes('Cryptographic') || subgenre.includes('Metaphysical'))) return true;
    if (classification === 'Professional Manuals' && (subgenre.includes('Architecture') || subgenre.includes('Metallurgy') || subgenre.includes('Stonemasonry'))) return true;
    if (classification === 'Mysticism & Magic' && (subgenre.includes('Runic') || subgenre.includes('Astral')) && prng() < 0.45) return true;
    return false;
  }

  private static formatTableOfContents(entries: { title: string; page: number }[]): string {
    let text = `TABLE OF CONTENTS\n\n`;
    entries.forEach((e) => {
      const dots = ' . '.repeat(Math.max(2, 14 - Math.floor(e.title.length / 2)));
      text += `${e.title.toUpperCase()}${dots}${e.page}\n`;
    });
    return text;
  }

  private static generateFrontispieceText(classification: MainBookClassification, _prng: () => number): string {
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

    return `${emblemAscii}\n\n"${mottos[classification] || mottos['Fiction']}"\n\nEngraved by the Master Guild of Illuminators in the Grand Nave of Alderia.`;
  }

  private static generateDedication(prng: () => number): string {
    const dedications = [
      `To the stonemasons and architects of the First Age, who raised these vaulted arches without fear of the abyss, and whose chisel marks still guide our hands.`,
      `For Seraphina, who tended the hearth and replenished the midnight oil when the winter tempests besieged the high mountain pass.`,
      `To the seekers of truth who walk through the shadowed nave, holding a solitary candle against the encroaching darkness.`,
      `Dedicated to the Venerable Archon Aurelius, who preserved the sacred scrolls from the great flood of the lower crypts.`,
      `For those who dare to decipher the starlight, and who understand that every stone in this cathedral bears a secret memory.`
    ];
    return `\n\n\n\n\n\n\n\n\n\n"${dedications[Math.floor(prng() * dedications.length)]}"\n\n— The Author`;
  }

  private static generateForeword(
    classification: MainBookClassification,
    bookTitle: string,
    author: string,
    part: number,
    _prng: () => number
  ): string {
    if (part === 1) {
      return `It is with profound reverence that we present this restored edition of ${bookTitle}. For three centuries, the original manuscript lay undisturbed within the iron-bound chests of the High Apse, shielded from both the damp air of the lower vaults and the turmoil of the Interregnum.\n\nThe author, ${author}, was not merely a chronicler, but an initiate of the highest order. Their mastery of ${classification} remains unmatched throughout the historical record. In an era when lesser scribes surrendered to superstition, ${author} applied rigorous observation, sacred geometry, and metaphysical clarity to every page.\n\nAs the reader prepares to turn these parchment leaves, let it be remembered that wisdom is not a passive treasure, but an active covenant between the past and the present.`;
    }
    return `In preparing this definitive archival codex, the Guild of Illuminators has carefully verified every citation against the original calfskin folios. Minor glosses in the margins have been preserved, for they reveal the living debate that surrounded this work during the Solstice Reformation.\n\nMay this treatise illuminate the minds of scholars who walk these silent cloisters. Let the candle burn bright upon the study desk, and let no word of truth be forgotten.\n\n— Archon Theodosia of the High Scriptorium\nPrefect of the Cathedral Archives, Anno Domini`;
  }

  private static generatePrologue(
    classification: MainBookClassification,
    subgenre: string,
    bookTitle: string,
    _prng: () => number
  ): string {
    return `Before the first keystone was locked into place beneath the cathedral dome, the foundations of ${subgenre} had already been decreed by the ancient scholars. It is written that the universe speaks in a language of resonance, proportion, and light.\n\nWithin this volume of ${bookTitle}, we endeavor to bridge the vast chasm between ancient lore and empirical truth. Every observation recorded herein has been verified within the consecrated halls of the Grand Nave, under the watchful gaze of the stone archons.\n\nLet the reader cast aside trivial distractions and step across the threshold into the deeper mysteries of ${classification}.`;
  }

  private static getChapterTitlesForBook(classification: MainBookClassification, count: number, _prng: () => number): string[] {
    const chapterPools: Record<MainBookClassification, string[]> = {
      'Fiction': [
        'The Threshold of Twilight', 'The Shadow in the Cloister', 'The Oath of Iron and Ash',
        'The Awakening of the High Tower', 'Song of the Wounded Stag', 'The Battle of the North Gate',
        'Whispers in the Crypt', 'The Return of the Sovereign'
      ],
      'Non-Fiction': [
        'Chronological Foundations', 'The Siege of the Outer Walls', 'Cultural Artifacts of Alderia',
        'Anatomy of Statecraft', 'The Great Reconstruction', 'Trade Across the Southern Straits',
        'The Reformation of the Guilds', 'The Legacy of the Archons'
      ],
      'Academic Texts & Grammar': [
        'Morphology of Ancient Dialects', 'Rules of Classical Syntax', 'Etymological Transpositions',
        'Orthography of Sacred Runes', 'The Canon of Dialectic', 'Rhetorical Figures in Formal Discourse',
        'The Metric System of Epic Poetry', 'Syntactical Syntheses'
      ],
      'Professional Manuals': [
        'Preparation of Mortar & Keystones', 'Thermal Tempering of Knight Blades', 'Harvesting Lunar Nightshade',
        'Foundations of Arch Buttresses', 'Standard Operating Protocols', 'Purification of Heavy Metals',
        'Calculations of Load Bearing Columns', 'Preservation of Archival Vellum'
      ],
      'Breakthroughs & Theories': [
        'The Hypothesis of Etheric Flow', 'Mathematical Geometries of Astral Spheres', 'Observation of Particle Flux',
        'Harmonic Resonance Theorems', 'Empirical Corroborations', 'The Prism Refraction Axiom',
        'Calculus of Celestial Spheres', 'The Unified Field of Light'
      ],
      'Dissertations': [
        'Theological Axioms of the Light', 'Epistemology of the Subterranean Mind', 'Excavation Findings at Level VII',
        'Cryptographic Analysis of the Vault Seal', 'Synthesis & Concluding Theses', 'The Doctrine of Causality',
        'Metaphysical Proofs of Order', 'The Dialectic of the Archons'
      ],
      'Mysticism & Magic': [
        'Igniting the Inner Hearth Flame', 'Invocations to the Starlight Wardens', 'Weaving the Wards of Protection',
        'The Seven Veils of the Void', 'Rituals of Ascension', 'Alchemical Transmutation of the Spirit',
        'The Sigils of the Four Winds', 'The Rites of the Midnight Solstice'
      ],
      'Tales & Mythology': [
        'The Primordial Slumber of the Earth', 'When the Lion Roared Over Silverpeak', 'The Tragedy of the Sunken Spires',
        'The Celestial Falcon and the Wyrm', 'Legends of the High Barrows', 'The Song of the First King',
        'The Wandering Star of Alderia', 'The Great Vigil of the Watchers'
      ]
    };

    const pool = chapterPools[classification] || chapterPools['Fiction'];
    return pool.slice(0, count);
  }

  private static generateChapterPageContent(
    classification: MainBookClassification,
    subgenre: string,
    writingStyle: BookWritingStyle,
    chapterIdx: number,
    pageInChapter: number,
    totalPagesInChapter: number,
    bookTitle: string,
    chapterTitle: string,
    isMathScienceBook: boolean,
    prng: () => number
  ): string {
    // 1. Epic Verse Formatting (Poetic Stanzas)
    if (writingStyle === 'epic-verse') {
      const verseStanzas = [
        `When shadows lengthen o'er the silent stone,\nAnd solemn winds through empty cloisters moan,\nThe ancient guardians take their vigilant stand,\nWith silver blades unsheathed in righteous hand.`,
        `Behold the golden sun across the nave,\nWhere once the banner of the Lion gave\nIts proud salute unto the vaulted skies,\nBefore the stars in silent slumber rise.`,
        `No mortal iron can break the sacred seal,\nNor turn aside the truth that stones reveal;\nFrom deep foundations to the spire on high,\nThe bells of Alderia shall never die.`
      ];
      const s1 = verseStanzas[chapterIdx % verseStanzas.length];
      const s2 = verseStanzas[(chapterIdx + 1) % verseStanzas.length];
      return `[VERSE CANTO ${chapterIdx + 1}]\n\n${s1}\n\n${s2}\n\n❦ ════════ ❧\n\n*Refrain: "Hark to the chime that echoes in the deep,\nWhere forgotten kings their ancient vigil keep."*`;
    }

    // 2. Technical Manual Formatting
    if (writingStyle === 'technical-manual') {
      if (pageInChapter === 1) {
        return `[SECTION ${chapterIdx + 1}.0 — OPERATIONAL SPECIFICATION]\n\n` +
          `Master Craftsman Protocol for: ${chapterTitle.toUpperCase()}.\n\n` +
          `• Required Workshop Tools: Chiseled Granite Anvil, High-Temperature Bellows, Calibrated Plumb Bob.\n` +
          `• Safe Working Temperature: 820°C to 1140°C (Orange to Bright Yellow Heat).\n` +
          `• Standard Tolerance: ±0.05 cubits per architectural bay.\n\n` +
          `Before commencing operations, the apprentice shall verify that the foundation mortar has cured for no fewer than seven full solar cycles. Any deviation in moisture content will induce shear cracking along the diagonal compressive line.`;
      }
    }

    // 3. Philosophical Dialogue Formatting
    if (writingStyle === 'philosophical-dialogue') {
      if (pageInChapter === 1) {
        return `[DISPUTATIO: ON THE NATURE OF ${chapterTitle.toUpperCase()}]\n\n` +
          `MASTER AURELIUS: Tell me, Brother Cassian, when you observe the keystone suspended fifty cubits above the marble floor, what force prevents its descent into the dust?\n\n` +
          `CASSIAN: Surely, Master, it is the mortar that binds it to the adjoining voussoirs.\n\n` +
          `AURELIUS: Nay, for even if the mortar were turned to sand, the arch would stand so long as the lateral thrust meets the opposing buttress with equal and opposite force. Thus, balance is not born of adhesion, but of dynamic opposition.`;
      }
    }

    // 4. Mathematical & Scientific Proof Page (Page 2 of eligible books)
    if (pageInChapter === 2 && isMathScienceBook) {
      return this.generateMathProofPage(classification, subgenre, chapterIdx, prng);
    }

    // 5. Standard Scholarly Prose
    if (pageInChapter === 1) {
      const p1Openers = [
        `To understand the essence of ${chapterTitle.toLowerCase()}, one must first examine the historical records preserved in the scriptorium. As noted in the annals of ${subgenre}, the earliest masters observed that every phenomenon carries an underlying symmetry.\n\nWhen we examine the stone arches and fluted pillars of our own cathedral, we see this principle made manifest in granite and mortar. Nothing is arbitrary; every measurement corresponds to a higher geometric harmony.`,
        `The records of the third century make frequent mention of ${chapterTitle.toLowerCase()}. In those days, before the great reformation, scholars debated whether such knowledge should remain sequestered within the high vaults or shared among the guild masters.\n\nIt was through rigorous experimentation that the truth was finally demonstrated, forever altering our understanding of ${subgenre}.`,
        `Consider the profound implications of ${chapterTitle.toLowerCase()} upon the development of modern statecraft and philosophy. As the high scribe wrote in his personal journals: "He who masters the foundational elements shall find the doors of the library open before him."\n\nLet us proceed to examine the specific proofs and methodologies that substantiate this claim.`
      ];
      return p1Openers[chapterIdx % p1Openers.length];
    }

    if (pageInChapter === totalPagesInChapter) {
      const pEndTexts = [
        `In concluding this discussion of ${chapterTitle.toLowerCase()}, we must emphasize that theoretical knowledge without practical application remains barren. The true scholar must test these principles within the laboratory and the workshop.\n\nAs we prepare to enter the subsequent chapter, hold fast to these foundational insights, for they shall serve as your compass through the intricate labyrinth of ${bookTitle}.`,
        `Thus we bring to a close our examination of this vital subject. Let the student transcribe these axioms into their personal commonplace book, that the light of understanding may never be extinguished by forgetfulness.\n\nThe subsequent chapter will expand upon these conclusions, delving into advanced formulations and practical demonstrations.`
      ];
      return pEndTexts[chapterIdx % pEndTexts.length];
    }

    const pMidTexts = [
      `Furthermore, let us analyze the secondary characteristics that distinguish these phenomena. When light passes through the stained-glass windows of the northern apse, the spectrum breaks into distinct harmonic bands. Each band corresponds directly to the vibrational frequencies outlined in our earlier axioms.\n\nTable of Observational Values:\n• Primary Resonance: 432 Cycles per Solstice\n• Secondary Harmonic: 864 Cycles\n• Refractive Index: 1.618 (Golden Mean)\n\nThese numerical ratios demonstrate beyond all doubt that nature conforms to the mathematical canon established by the first architects.`,
      `In the accompanying illustrations drawn upon the facing parchment, the scholar will observe the structural configuration of the keystone. Notice how the mortise joint interlocks with the diagonal thrust vector of the rib vault.\n\nWithout this precise angle of 45 degrees, the entire weight of the clerestory wall would collapse inward upon the nave. Thus, sacred geometry is not merely an aesthetic pursuit, but the absolute guarantor of physical stability.`,
      `During the excavations conducted beneath the fourth subterranean level, several brass astrolabes were unearthed bearing inscriptions identical to those cited in this chapter. The alignment of the gimbal rings matches the celestial precession recorded during the reign of Archon Aurelius IX.`
    ];
    return pMidTexts[chapterIdx % pMidTexts.length];
  }

  private static generateMathProofPage(
    classification: MainBookClassification,
    subgenre: string,
    chapterIdx: number,
    prng: () => number
  ): string {
    const mathTemplates = [
      // 1. Celestial Orbital Mechanics & Harmonic Integration
      `[THEOREM III: ORBITAL HARMONIC PRECESSION OF ${subgenre.toUpperCase()}]\n\n` +
      `Let $\\Psi(t)$ denote the instantaneous angular displacement of the third celestial meridian ring.\n\n` +
      `$$\\oint_{\\mathcal{S}} \\nabla \\Psi \\cdot d\\vec{A} = \\frac{4\\pi G \\cdot \\mathcal{M}_{\\odot}}{\\sqrt{1 - \\frac{2GM}{r c_e^2}}} \\cdot \\cos\\left(\\frac{k \\pi}{12}\\right)$$\n\n` +
      `[MATHEMATICAL DERIVATION & PROOF]:\n\n` +
      `1. Define the radial gravitational flux vector $\\vec{\\Phi}_r = -\\frac{G \\mathcal{M}}{r^2} \\hat{r}$.\n\n` +
      `2. By applying the divergence theorem across the closed celestial sphere $\\Omega$:\n\n` +
      `$$\\iiint_{\\Omega} (\\nabla^2 \\Psi + \\omega_0^2 \\Psi) \\, dV = \\kappa \\sum_{n=1}^{7} \\frac{\\alpha_n}{n^2} \\sin(n \\theta)$$\n\n` +
      `3. For all integer solstices $k \\in \\mathbb{Z}$, the boundary traction vanishes: $\\tau_{\\text{boundary}} = 0$.\n\n` +
      `$$\\Delta \\Psi_{\\text{precession}} = \\frac{6 \\pi G \\mathcal{M}}{c^2 a (1 - e^2)} \\equiv 42.98'' \\text{ per century}$$\n\n` +
      `[Q.E.D. • Quod Erat Demonstrandum]`,

      // 2. Cathedral Vault Keystone Vector Equilibrium
      `[LEMMA II: DUAL-VECTOR EQUILIBRIUM OF THE POINTED ARCH]\n\n` +
      `To prevent shear failure at the crown keystone, the diagonal compressive thrust must satisfy:\n\n` +
      `$$\\sigma_{\\text{keystone}} = \\frac{\\gamma_{\\text{stone}} \\cdot V_{\\text{vault}}}{2 \\sin(\\alpha) \\cdot d_{\\text{buttress}}} \\le [\\sigma_{\\text{granite}}] = 48.5 \\ \\text{MPa}$$\n\n` +
      `[STRUCTURAL RESOLUTION MATRIX]:\n\n` +
      `$$\\begin{bmatrix} \\cos(45^\\circ) & -\\sin(45^\\circ) \\\\ \\sin(45^\\circ) & \\cos(45^\\circ) \\end{bmatrix} \\begin{bmatrix} F_{\\text{vertical}} \\\\ F_{\\text{lateral}} \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ \\frac{\\rho g R^2}{2} \\end{bmatrix}$$\n\n` +
      `Integrating along the curvature arc from impost to apex:\n\n` +
      `$$T_{\\text{horizontal}} = \\int_{0}^{\\pi/4} \\rho g R^2 \\cos(\\theta) \\, d\\theta = \\rho g R^2 \\left(1 - \\frac{\\sqrt{2}}{2}\\right)$$\n\n` +
      `This establishes that a 45-degree pointed Gothic arch reduces lateral wall thrust by exactly 29.3% compared to a semi-circular Roman barrel vault.\n\n` +
      `[Q.E.D. • Quod Erat Demonstrandum]`,

      // 3. Etheric Wave Dispersion Tensor
      `[AXIOM V: ETHERIC CONTINUITY & ENERGY CONSERVATION]\n\n` +
      `In a non-dispersive etheric medium, the complex scalar field $\\Phi(x,t)$ satisfies the second-order wave equation:\n\n` +
      `$$\\frac{\\partial^2 \\Phi}{\\partial t^2} - c_e^2 \\nabla^2 \\Phi + \\mu_0^2 \\Phi^3 = 0$$\n\n` +
      `[PROOF OF FREQUENCY HARMONICS]:\n\n` +
      `Let $\\Phi(x,t) = A_0 e^{i(k x - \\omega t)}$. Substituting into the differential operator:\n\n` +
      `$$\\omega(k) = \\sqrt{c_e^2 k^2 + \\mu_0^2 A_0^2}$$\n\n` +
      `$$\\text{Phase Velocity } v_p = \\frac{\\omega}{k} = c_e \\sqrt{1 + \\frac{\\mu_0^2 A_0^2}{c_e^2 k^2}} > c_e$$\n\n` +
      `$$\\text{Group Velocity } v_g = \\frac{d\\omega}{dk} = \\frac{c_e^2 k}{\\sqrt{c_e^2 k^2 + \\mu_0^2 A_0^2}} < c_e$$\n\n` +
      `$$\\therefore v_p \\cdot v_g = c_e^2 \\quad [\\text{Verified by Astrolabe Interferometry}]$$\n\n` +
      `[Q.E.D. • Quod Erat Demonstrandum]`,

      // 4. Cryptographic Vault Cipher & Modular Prime Factorization
      `[PROPOSITION VII: RECURSIVE ARCHIVAL CIPHER INVERSION]\n\n` +
      `Let the cryptographic inscription on Vault Door VII be defined by the modular exponentiation:\n\n` +
      `$$C \\equiv M^{e} \\pmod{N}, \\quad \\text{where } N = p \\cdot q \\text{ and } \\gcd(e, \\phi(N)) = 1$$\n\n` +
      `[PROOF OF UNIQUE DECIPHERABILITY]:\n\n` +
      `1. By Euler's Totient Theorem, for any integer $M$ coprime to $N$:\n\n` +
      `$$M^{\\phi(N)} \\equiv M^{(p-1)(q-1)} \\equiv 1 \\pmod{N}$$\n\n` +
      `2. Construct the private deciphering exponent $d$ such that:\n\n` +
      `$$e \\cdot d \\equiv 1 \\pmod{\\phi(N)} \\implies e \\cdot d = 1 + k \\phi(N)$$\n\n` +
      `3. Raising the ciphertext $C$ to the power of $d$:\n\n` +
      `$$C^d \\equiv (M^e)^d \\equiv M^{1 + k \\phi(N)} \\equiv M \\cdot (M^{\\phi(N)})^k \\equiv M \\pmod{N}$$\n\n` +
      `$$\\therefore M \\equiv C^d \\pmod{N} \\quad [\\text{The Vault Seal is Unconditionally Invertible}]$$\n\n` +
      `[Q.E.D. • Quod Erat Demonstrandum]`,

      // 5. Alchemical Metallurgy & Adamantine Alloy Stoichiometry
      `[FORMULA IV: STOICHIOMETRIC TRANSFORMATION OF CRUCIBLE STEEL]\n\n` +
      `Under an inert carbon-rich flame at $\\Delta T = 1450^\\circ \\text{C}$, the crystalline precipitation follows:\n\n` +
      `$$3\\text{Fe}_{(\\alpha)} + 2\\text{C}_{(\\text{graphite})} + \\text{W} \\xrightarrow{\\Delta H = -342 \\ \\text{kJ/mol}} \\text{Fe}_3\\text{W}\\text{C}_2 \\downarrow \\ (\\text{Adamantine Matrix})$$\n\n` +
      `[CRYSTALLINE GIBBS FREE ENERGY DERIVATION]:\n\n` +
      `$$\\Delta G^\\circ(T) = \\Delta H^\\circ - T \\Delta S^\\circ = -342{,}000 + 118.4 \\cdot T \\ \\text{J/mol}$$\n\n` +
      `Setting $\\Delta G^\\circ = 0$ reveals the critical threshold temperature:\n\n` +
      `$$T_{\\text{critical}} = \\frac{342{,}000}{118.4} = 2888.5 \\ \\text{K} \\equiv 2615.3^\\circ\\text{C}$$\n\n` +
      `Since the forge operates at $1450^\\circ\\text{C} < T_{\\text{critical}}$, $\\Delta G < 0$, proving spontaneous crystallization of indestructible Damascus grain boundaries.\n\n` +
      `[Q.E.D. • Quod Erat Demonstrandum]`,

      // 6. Sacred Runic Matrix & Cardinal Element Eigenvalues
      `[THEOREM I: CARDINAL ELEMENTAL EIGENVALUE MATRIX]\n\n` +
      `Let the warding field be represented by the symmetric 2x2 elemental matrix $\\mathbf{E}$:\n\n` +
      `$$\\mathbf{E} = \\begin{bmatrix} \\text{Ignis} & \\text{Aer} \\\\ \\text{Terra} & \\text{Aqua} \\end{bmatrix} = \\begin{bmatrix} 7 & 3 \\\\ 3 & 7 \\end{bmatrix}$$\n\n` +
      `[EIGENVALUE DECOMPOSITION]:\n\n` +
      `$$\\det(\\mathbf{E} - \\lambda \\mathbf{I}) = \\begin{vmatrix} 7 - \\lambda & 3 \\\\ 3 & 7 - \\lambda \\end{vmatrix} = (7 - \\lambda)^2 - 9 = 0$$\n\n` +
      `$$\\implies (7 - \\lambda) = \\pm 3 \\implies \\lambda_1 = 10, \\quad \\lambda_2 = 4$$\n\n` +
      `Corresponding Principal Ward Vectors:\n\n` +
      `$$\\vec{v}_1 = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} \\ (\\text{Harmonic Resonance}), \\quad \\vec{v}_2 = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} \\ (\\text{Anti-Ward})$$\n\n` +
      `Maximum field luminescence corresponds to the dominant eigenvalue $\\lambda_{\\max} = 10$.\n\n` +
      `[Q.E.D. • Quod Erat Demonstrandum]`
    ];

    const templateIndex = (chapterIdx + Math.floor(prng() * 2) + (classification.length % 3)) % mathTemplates.length;
    return mathTemplates[templateIndex];
  }

  private static generateEpilogue(
    classification: MainBookClassification,
    bookTitle: string,
    author: string,
    _prng: () => number
  ): string {
    return `Here terminates the core narrative and exposition of ${bookTitle}.\n\n"The candle flame upon the reading desk may flicker and fade as the night deepens, but the illuminated word inscribed upon parchment remains forever impervious to the decay of time."\n\nThrough wars, schisms, and the silent passage of centuries, the insights of ${author} have endured within these vaulted walls. May those who walk the stone aisles of the Grand Cathedral Library continue to seek, to question, and to preserve the sacred heritage of ${classification.toLowerCase()}.\n\nFinis Coronat Opus • The End Crowns the Work.`;
  }

  private static generateAcknowledgments(_author: string, _prng: () => number): string {
    return `The author wishes to express profound gratitude to:\n\n• The High Archons of the Cathedral Library for granting access to the sequestered iron-bound vaults of the North Apse.\n\n• Master Scribe Roderick of the Iron Quill, whose tireless transcription and correction of the draft leaves ensured the purity of the text.\n\n• The Guild of Illuminators for the exquisite gold-leaf drop caps, frontispiece engraving, and hand-tooled leather bindings.\n\n• Fellow scholars and acolytes of the Scriptorium, whose rigorous debates provided the intellectual crucible in which these ideas were refined.\n\nTranscribed in the year of our Lord, in the scriptorium of the Grand Nave.`;
  }

  private static generateAppendix(_classification: MainBookClassification, _prng: () => number): string {
    return `APPENDIX: HISTORICAL CITATIONS & COMPARATIVE CHRONOLOGY\n\n1. Codex Alderia (Vol. IV, fol. 112r) — Primary source for the architectural dimensions of the first cathedral nave.\n\n2. The Solstice Ephemeris (Year 1104) — Astronomical tables recording the celestial alignment of the celestial globe.\n\n3. Liber Alchimia (MS-842) — Reference formulas for the preservation of oak gall ink and calfskin vellum.\n\n4. Edict of the High Council (Year 1340) — Decreeing the perpetual preservation of all manuscripts within the Cathedral Library.\n\nAll documents are held in the secure archives of the Grand Nave and may be inspected by petition to the Prefect.`;
  }

  private static generateGlossary(_classification: MainBookClassification, _prng: () => number): string {
    return `GLOSSARY OF ANCIENT TERMS\n\n• Alembic: A classical alchemical distillation apparatus consisting of a cucurbit and helm.\n\n• Apse: The semicircular vaulted recess at the eastern sanctuary of the cathedral.\n\n• Clerestory: The high upper tier of cathedral walls pierced with stained-glass lancet windows.\n\n• Drop-Cap: An oversized, illuminated initial capital letter at the opening of a chapter.\n\n• Keystones: The central wedge-shaped stone at the crown of an arch that locks the vault into place.\n\n• Vellum: Fine parchment prepared from calfskin, noted for its extreme durability and smooth texture.\n\n• Wainscot: Polished dark oak paneling lining the lower portion of interior stone walls.`;
  }

  private static generateAuthorBio(author: string, era: string, classification: MainBookClassification, _prng: () => number): string {
    return `ABOUT THE AUTHOR\n\n${author} was one of the most distinguished scholars of ${era}. Appointed Senior Chronicler of the Cathedral Archives at the age of thirty-two, they authored over twenty authoritative treatises on ${classification.toLowerCase()}, architecture, and natural philosophy.\n\nTheir pioneering work in archival preservation and manuscript illumination established the standards still practiced in the scriptorium today. When not writing in their private cell overlooking the cloister garden, they could be found lecturing before the Guild of Architects in the High Nave.\n\nTheir memory is preserved in the marble inscription plaque upon the southern ambulatory: "Sapientia Aeterna" (Eternal Wisdom).`;
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
