export type DarkFantasyGenre =
  // 1. Forbidden Magic & Arcane Texts (Formulas / LaTeX Allowed)
  | 'Necromancy Grimoires'
  | 'Demonology Codices'
  | 'Abyssal Gazeteers'
  | 'Alchemical Formulae'
  | 'Hemomancy Scrolls'
  // 2. World Lore & Grim History (Prose Only)
  | 'Apocalyptic Chronicles'
  | 'Genealogies of Damned Lineages'
  | 'Inquisition Journals'
  | 'Monarchic Decrees'
  | 'Mythological Cycle Books'
  // 3. Bestiaries & Field Guides (Prose & Tactical Notes)
  | 'Cryptid Anatomies'
  | 'Heresiographies'
  | 'Flora Morbida'
  // 4. Dark Philosophy & Fiction (Atmospheric Prose & Poetry)
  | 'Heretical Philosophies'
  | 'Tragic Plays'
  | 'Malediction Poetry'
  // 5. Practical & Lost Knowledge (Technical & Cipher-Heavy)
  | 'Architectural Layouts'
  | 'Blacksmithing Manuals'
  | 'Cipher Keys';

export type BookGenre = DarkFantasyGenre;

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
  | 'dramatic-play';

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
  summary?: string;
  blueprint?: BookBlueprint;
  prefetchedPagesCount?: number;
}
