export type DarkFantasyGenre =
  // 🫀 1. Living & Sentient Volumes (The Biological Texts)
  | 'Parasitic Grimoires'
  | 'Mimic Lexicons'
  | 'Symbiotic Journals'
  | 'Crying Folios'
  | 'Chained Codices'

  // 🩸 2. Cosmic Horror & The Blind Realms (The Unraveling Texts)
  | 'Madness Manifestos'
  | 'Planar Atlases'
  | 'Astral Voyagers\' Logs'
  | 'Echo Texts'

  // 💀 3. Death-Craft & Necrotic Lore (The Bone Texts)
  | 'Mortuary Liturgies'
  | 'Lichdom Blueprints'
  | 'Sepulcher Registries'
  | 'Ossuary Architecture'

  // ⏳ 4. Forbidden Chronologies & Grim History (The Erased Texts)
  | 'Censored Dynasties'
  | 'Pre-Fall Geographies'
  | 'Doomsday Presages'
  | 'Martyr Logs'

  // 🌿 5. Corrupted Nature & Toxic Bestiaries (The Terrestrial Texts)
  | 'Grave-Botanicals'
  | 'Monstrous Taxonomies'
  | 'Venom Compendiums'
  | 'Lycanthropic Lineages'

  // ⚖️ 6. Blasphemous Philosophy & False Faiths (The Heretical Texts)
  | 'Anti-Theology'
  | 'Sectarian Liturgies'
  | 'Delusion Diaries'

  // 📜 7. Forbidden Magic & Arcane Texts (Spells & Stats - LaTeX Allowed)
  | 'Necromancy Grimoires'
  | 'Demonology Codices'
  | 'Abyssal Gazeteers'
  | 'Alchemical Formulae'
  | 'Hemomancy Scrolls'

  // 🏛️ 8. World Lore & Grim History (Plot & Background)
  | 'Apocalyptic Chronicles'
  | 'Genealogies of Damned Lineages'
  | 'Inquisition Journals'
  | 'Monarchic Decrees'
  | 'Mythological Cycle Books'

  // 🌿 9. Bestiaries & Field Guides (Gameplay Hints)
  | 'Cryptid Anatomies'
  | 'Heresiographies'
  | 'Flora Morbida'

  // 🎭 10. Dark Philosophy & Fiction (Atmosphere & Flavour)
  | 'Heretical Philosophies'
  | 'Tragic Plays'
  | 'Malediction Poetry'

  // 🛠️ 11. Practical & Lost Knowledge (Crafting & Skills)
  | 'Architectural Layouts'
  | 'Blacksmithing Manuals'
  | 'Cipher Keys'

  // 📖 12. Major Fiction Genres
  | 'Fantasy'
  | 'Science Fiction'
  | 'Romance'
  | 'Mystery'
  | 'Thriller & Suspense'
  | 'Horror'
  | 'Historical Fiction'
  | 'Literary Fiction'
  | 'Young Adult'

  // 📚 13. Major Non-Fiction Genres
  | 'Biography & Memoir'
  | 'Self-Help'
  | 'True Crime'
  | 'History'
  | 'Cookbooks & Food'
  | 'Travel';

export type BookGenre = DarkFantasyGenre;

export type MainBookClassification =
  | 'Living & Sentient Volumes'
  | 'Cosmic Horror & Blind Realms'
  | 'Death-Craft & Necrotic Lore'
  | 'Forbidden Chronologies'
  | 'Corrupted Nature & Bestiaries'
  | 'Blasphemous Philosophy'
  | 'Forbidden Magic & Arcane Texts'
  | 'World Lore & Grim History'
  | 'Practical & Lost Knowledge'
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
  | 'appendix';

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
  | 'verse'        // Centered poetic stanzas for Malediction Poetry
  | 'play-script'; // Script format for Tragic Plays

export type BookWritingStyle =
  | 'academic-treatise'
  | 'mystic-grimoire'
  | 'technical-manual'
  | 'chronicle-history'
  | 'epic-verse'
  | 'philosophical-dialogue'
  | 'gothic-fiction'
  | 'dramatic-play'
  | 'biological-log'
  | 'cosmic-manifesto'
  | 'recipe-guide'
  | 'investigative-journal';

export interface ChapterOutlineBeat {
  chapterIndex: number;
  title: string;
  pageRange: [number, number];
  keyBeats: string;
  hasMath: boolean;
}

export interface BookBlueprint {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  era: string;
  genre: DarkFantasyGenre;
  classification: MainBookClassification;
  subgenre: string;
  targetPageCount: number; // 10 to 50 pages
  overallPremise: string;
  chapterOutlines: ChapterOutlineBeat[];
  coverColor: string;
  accentColor: string;
  fontFamily: BookFontFamily;
  fontSize: BookFontSize;
  layoutFormat: BookLayoutFormat;
  writingStyle: BookWritingStyle;
  isSTEM: boolean;
  seed: number;
}

export interface BookPage {
  pageType: PageSectionType;
  chapterTitle: string;
  pageNumber: number;
  content: string;
  headerText?: string;
  hasMathProof?: boolean;
  marginalNote?: string;
  isLoadingPlaceholder?: boolean;
  isProceduralFallback?: boolean;
}

export interface BookMetadata {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  era: string;
  classification: MainBookClassification;
  subgenre: string;
  genre: DarkFantasyGenre;
  targetPageCount: number;
  coverColor: string;
  accentColor: string;
  fontFamily: BookFontFamily;
  fontSize: BookFontSize;
  layoutFormat: BookLayoutFormat;
  writingStyle: BookWritingStyle;
  isSTEM: boolean;
  seed: number;
}

export interface BookData extends BookMetadata {
  pages: BookPage[];
  isLoaded: boolean;
  isFullyPrefetched?: boolean;
  isAIGenerated?: boolean;
  isProceduralFallback?: boolean;
  summary?: string;
  prefetchedPagesCount?: number;
  blueprint?: BookBlueprint;
}
