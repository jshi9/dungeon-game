export type BookCategory =
  | 'Arcane'
  | 'History'
  | 'Alchemy'
  | 'Mythology'
  | 'Cosmology'
  | 'Beasts'
  | 'Poetry'
  | 'Dungeon Secrets';

export type BookRarity = 'Common' | 'Rare' | 'Ancient' | 'Forbidden' | 'Legendary';

export interface BookPage {
  chapterTitle: string;
  pageNumber: number;
  content: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  era: string;
  category: BookCategory;
  rarity: BookRarity;
  coverColor: string;
  pages: BookPage[];
}

export class LibraryLoreGenerator {
  private static TITLES_PREFIX = [
    'The Chronicles of',
    'Tome of the',
    'Treatise on',
    'Whispers from the',
    'The Lost Gospel of',
    'Compendium of',
    'The Sacred Rites of',
    'Secrets of the',
    'Meditations upon',
    'The Architecture of',
    'Echoes of the',
    'The Song of',
    'Codex of the',
    'Visions of the',
    'The Black Grimoire of',
    'Lamentations for',
    'The Celestial Path to',
    'Historical Annals of',
    'The Alchemical Synthesis of',
    'Manual of the'
  ];

  private static NOUNS = [
    'Sunken Alderia',
    'Silverpeak Citadel',
    'Astral Pyromancy',
    'The Golden Lion',
    'The Obsidian Spire',
    'The Abyssal Behemoth',
    'The Eternal Starlight',
    'The Forgotten Archon',
    'Living Stone & Mortar',
    'Transmuted Quicksilver',
    'The Void Walker',
    'The Crimson Cathedral',
    'Deeproot Keep',
    'The Clockwork Heavens',
    'The Hollow King',
    'Veritas & Illuminatio',
    'The Moonlit Chalice',
    'The Seven Sealed Gates',
    'Runes of the First Age',
    'The Shadowed Nave'
  ];

  private static AUTHORS = [
    'Arch-Scholar Valerius of Oakhaven',
    'Grand Inquisitor Morvath',
    'Lady Seraphina the Stargazer',
    'Brother Ignatius of the Iron Quill',
    'High Magus Zephyrus',
    'The Anonymous Chronicler of 1242',
    'Master Artificer Bramwell',
    'Sorceress Yvaine the Sightless',
    'Venerable Bede the Younger',
    'High Patriarch Aurelius IX',
    'Alchemist Balthazar Vance',
    'Dame Eleanor of House Lionheart'
  ];

  private static ERAS = [
    'The First Age of Dawn (Year 312)',
    'Era of the Great Schism (Year 784)',
    'The Golden Century (Year 1102)',
    'Age of Eclipse (Year 1340)',
    'Reign of the Lion Kings (Year 1415)',
    'The Silent Interregnum (Year 988)',
    'Dawn of the Cathedral Archives (Year 1204)'
  ];

  private static CATEGORIES: BookCategory[] = [
    'Arcane',
    'History',
    'Alchemy',
    'Mythology',
    'Cosmology',
    'Beasts',
    'Poetry',
    'Dungeon Secrets'
  ];

  private static RARITIES: BookRarity[] = ['Common', 'Rare', 'Ancient', 'Forbidden', 'Legendary'];

  private static COVER_COLORS = ['#822020', '#1c3461', '#1f5932', '#6b4822', '#4b2169', '#242426', '#b08225'];

  /**
   * Deterministic seed PRNG (Mulberry32)
   */
  private static seededRandom(seed: number): () => number {
    return function () {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  public static generateBook(seed: number, customTitle?: string): Book {
    const prng = this.seededRandom(seed);

    const pick = <T>(arr: T[]): T => arr[Math.floor(prng() * arr.length)];

    const title = customTitle ?? `${pick(this.TITLES_PREFIX)} ${pick(this.NOUNS)}`;
    const author = pick(this.AUTHORS);
    const era = pick(this.ERAS);
    const category = pick(this.CATEGORIES);
    const rarity = pick(this.RARITIES);
    const coverColor = pick(this.COVER_COLORS);

    const pages: BookPage[] = [];
    const numPages = 4 + Math.floor(prng() * 3); // 4 to 6 pages

    for (let p = 1; p <= numPages; p++) {
      pages.push({
        chapterTitle: p === 1 ? 'Prologue & Inscription' : `Chapter ${p - 1}: ${this.generateChapterTitle(prng)}`,
        pageNumber: p,
        content: this.generatePageContent(category, p, prng, title)
      });
    }

    return {
      id: `book_${seed}`,
      title,
      author,
      era,
      category,
      rarity,
      coverColor,
      pages
    };
  }

  private static generateChapterTitle(prng: () => number): string {
    const verbs = ['Unveiling', 'The Burden of', 'Transmutation of', 'The Gate of', 'Meditations on', 'The Fall of'];
    const topics = ['Living Stone', 'The Sunken Crypts', 'The Lion Standards', 'Starlight Threads', 'Forgotten Tongues', 'The Outer Darkness'];
    return `${verbs[Math.floor(prng() * verbs.length)]} ${topics[Math.floor(prng() * topics.length)]}`;
  }

  private static generatePageContent(
    category: BookCategory,
    pageNum: number,
    _prng: () => number,
    _bookTitle: string
  ): string {
    if (pageNum === 1) {
      return `To the scholars and wanderers who traverse these hallowed cathedral halls, let it be known:\n\n"Within these vaulted stones lies the collective breath of ages past. Wisdom is not merely remembered; it is ignited by the light of the soul."\n\nPreserved under the seal of the Grand Archons. May no unhallowed hand defile these vellum leaves.`;
    }

    switch (category) {
      case 'Arcane':
        return `Draw upon the third harmonic of the astral sphere when channeling ether through polished amethyst focus stones.\n\n"When the candle flame turns azure in the presence of the night wind, know that the threshold between realms has worn thin. Speak the three names of binding before the hour strikes midnight."\n\nTake heed: never combine pulverized celestial quartz with quicksilver without grounding your circle with consecrated salt.`;

      case 'History':
        return `In the cold winter of Year 1102, High King Alden ordered the construction of the Great Vaults beneath the central nave.\n\nOver four hundred master masons carved the ribbed stone arches, while the monastic scribes labored through the candlelight to transcribe thirty thousand codices from the burning cities of the south. The heraldic lion banners were hung from the gallery to signify the eternal vigil of knowledge.`;

      case 'Alchemy':
        return `Recipe for the Elixir of Phantasmal Sight:\n\n1. Seven drams of crushed sunstone petals.\n2. Three drops of rectified vitriol distilled under a waxing moon.\n3. Heat gently upon an iron sand bath until the fumes turn emerald green.\n\nWhen imbibed, the seeker shall perceive the hidden ley-lines inscribed beneath the cathedral flagstones and the faint runes carved into the library balustrades.`;

      case 'Dungeon Secrets':
        return `Whispers of the Undercrypt:\n\n"Beyond the third iron grate beneath the eastern transept lies the ancient labyrinth. Beware the false flagstones; only those bearing the golden seal of the lion may pass unharmed."\n\nIt is recorded that a hidden mechanism rests behind the grand celestial globe—turning its brass meridian to the north star unlatches the secret archive below.`;

      case 'Mythology':
        return `Before the stone towers were raised, the ancients worshipped the Great Stag of the Northern Mist.\n\nLegends say that in the heart of the deepest forests, where the sunbeams never touch the moss, there stands a fountain of liquid starlight. Those who drink from it are blessed with visions of stars that have not yet been born.`;

      case 'Cosmology':
        return `Observations of the Celestial Spheres:\n\n"The heavens revolve in seven concentric rings of crystal, moved by the harmonious music of the spheres. At the center stands our earth, encircled by the oceans of eternity."\n\nThe brass globe within the cathedral was calibrated to mirror the equinox alignment with the high stained-glass lancets.`;

      case 'Beasts':
        return `On the Nature of the Vault Gargoyles:\n\nCarved from granite infused with ancient binding sigils, these stone sentinels awaken only when the sacred candles of the grand chandeliers are extinguished by malevolent forces. Their claws can tear through solid iron, yet they remain docile to those who whisper the greeting of peace.`;

      case 'Poetry':
      default:
        return `O towering vaults of silent stone,\nWhere centuries in dust are sown,\nThe candle flickers in the draft,\nAnd shadows dance upon the craft.\n\nThrough stained-glass arches, sunlight streams,\nTo wake the sleeping scholar's dreams;\nA thousand volumes line the wall,\nWhile silence reigns throughout the hall.`;
    }
  }
}
