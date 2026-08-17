export type BookGenre =
  | 'Chronicle'
  | 'Bestiary'
  | 'ArcaneTreatise'
  | 'DarkFantasy'
  | 'Historical'
  | 'Alchemy'
  | 'Numerology'
  | 'AstralGeometry'
  | 'Fiction'
  | 'Philosophy';

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

export interface BookMetadata {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  era: string;
  classification: MainBookClassification;
  subgenre: string;
  genre: BookGenre;
  coverColor: string;
  accentColor: string;
  fontFamily: BookFontFamily;
  fontSize: BookFontSize;
  layoutFormat: BookLayoutFormat;
  writingStyle: BookWritingStyle;
  isSTEM: boolean;
  seed: number;
}

export interface GeneratedBookJson {
  title: string;
  author: string;
  genre: BookGenre;
  subtitle?: string;
  era?: string;
  summary?: string;
  pages: string[];
}

export interface BookData extends BookMetadata {
  pages: BookPage[];
  isLoaded: boolean;
  isAIGenerated?: boolean;
  summary?: string;
}
