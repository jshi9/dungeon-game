import {
  BookData,
  BookGenre,
  BookPage,
  MainBookClassification,
  DarkFantasyGenre,
  BookFontFamily,
  BookFontSize,
  BookLayoutFormat,
  BookWritingStyle,
  PageSectionType
} from './BookTypes';
import { aiBookService } from '../services/aiBookService';

export {
  type BookData,
  type BookGenre,
  type BookPage,
  type MainBookClassification,
  type DarkFantasyGenre,
  type BookFontFamily,
  type BookFontSize,
  type BookLayoutFormat,
  type BookWritingStyle,
  type PageSectionType
};

export class LibraryLoreGenerator {
  public static sessionSeed = Math.floor(Math.random() * 10000000);

  // 1. Master Classifications Mapping
  public static CLASSIFICATIONS: Record<MainBookClassification, DarkFantasyGenre[]> = {
    'Living & Sentient Volumes': [
      'Parasitic Grimoires',
      'Mimic Lexicons',
      'Symbiotic Journals',
      'Crying Folios',
      'Chained Codices'
    ],
    'Cosmic Horror & Blind Realms': [
      'Madness Manifestos',
      'Planar Atlases',
      'Astral Voyagers\' Logs',
      'Echo Texts'
    ],
    'Death-Craft & Necrotic Lore': [
      'Mortuary Liturgies',
      'Lichdom Blueprints',
      'Sepulcher Registries',
      'Ossuary Architecture'
    ],
    'Forbidden Chronologies': [
      'Censored Dynasties',
      'Pre-Fall Geographies',
      'Doomsday Presages',
      'Martyr Logs'
    ],
    'Corrupted Nature & Bestiaries': [
      'Grave-Botanicals',
      'Monstrous Taxonomies',
      'Venom Compendiums',
      'Lycanthropic Lineages'
    ],
    'Blasphemous Philosophy': [
      'Anti-Theology',
      'Sectarian Liturgies',
      'Delusion Diaries'
    ],
    'Forbidden Magic & Arcane Texts': [
      'Necromancy Grimoires',
      'Demonology Codices',
      'Abyssal Gazeteers',
      'Alchemical Formulae',
      'Hemomancy Scrolls'
    ],
    'World Lore & Grim History': [
      'Apocalyptic Chronicles',
      'Genealogies of Damned Lineages',
      'Inquisition Journals',
      'Monarchic Decrees',
      'Mythological Cycle Books'
    ],
    'Practical & Lost Knowledge': [
      'Architectural Layouts',
      'Blacksmithing Manuals',
      'Cipher Keys'
    ],
    'Fiction': [
      'Fantasy',
      'Science Fiction',
      'Romance',
      'Mystery',
      'Thriller & Suspense',
      'Horror',
      'Historical Fiction',
      'Literary Fiction',
      'Young Adult'
    ],
    'Non-Fiction': [
      'Biography & Memoir',
      'Self-Help',
      'True Crime',
      'History',
      'Cookbooks & Food',
      'Travel'
    ],
    'Academic Texts & Grammar': [
      'Cryptid Anatomies',
      'Heresiographies',
      'Flora Morbida'
    ],
    'Professional Manuals': [
      'Architectural Layouts',
      'Blacksmithing Manuals',
      'Alchemical Formulae'
    ],
    'Breakthroughs & Theories': [
      'Abyssal Gazeteers',
      'Planar Atlases',
      'Cipher Keys'
    ],
    'Dissertations': [
      'Heretical Philosophies',
      'Anti-Theology'
    ],
    'Mysticism & Magic': [
      'Necromancy Grimoires',
      'Demonology Codices',
      'Hemomancy Scrolls'
    ],
    'Tales & Mythology': [
      'Tragic Plays',
      'Malediction Poetry',
      'Mythological Cycle Books'
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
    'Seraphina', 'Mirella', 'Vespera', 'Yvaine', 'Azrael', 'Malakor', 'Zephyrine', 'Solara', 'Balthazar',
    'Vane', 'Vesper', 'Kallista', 'Maelis', 'Kaelthas', 'Sariel', 'Nyx', 'Vorash', 'Zephyr'
  ];

  private static SURNAMES_AND_EPITHETS = [
    'of Oakhaven', 'of the Iron Quill', 'the Stargazer', 'of Sunken Alderia', 'the Sightless',
    'of House Lionheart', 'the Elder', 'of the Obsidian Scriptorium', 'Arch-Scholar of Veritas',
    'Venerable Keeper of Scrolls', 'Master Artificer', 'of the Obsidian Gate', 'the Clockmaker of Val-Doran',
    'of the Silver Crescent', 'Chronicler of Wessex', 'the Cartographer of Marid-Khar',
    'the Alchemist of Caelum-Vara', 'of the Northern Marches', 'Keeper of the Solstice Vaults', 'of the Amber Coast',
    'the Void-Weaver', 'of House Ravenshade', 'Master of the Gilded Chisel', 'the Silent Archimandrite',
    'of St. Jude the Confessor', 'of the Seven Towers', 'the Geometer of Silverpeak', 'of the Aethelgard Scriptorium',
    'the Astrolabist of Dun-Mora', 'the Epigrapher of Khorsabad', 'the Metallurgist of Iron-Reach', 'of House Vesperia',
    'the Luminary of Thalassia', 'of the Frostholm Scriptorium', 'the Sovereign Exarch', 'the Flesh-Carver',
    'the Embalmer of Golgotha', 'the Astromancer', 'the Heretic of Nether-Ghyll', 'the Penitent'
  ];

  private static ORGANIZATIONS = [
    'The Guild of Master Astrolabists',
    'The Order of the Silver Compass',
    'The Brotherhood of the Obsidian Chisel',
    'The Collegium of Celestial Mechanics',
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
    'The Custodians of the Obsidian Vault',
    'The Asylum of the Weeping Wall',
    'The Inquisitorial Tribunal of the Black Candle',
    'The Mortuary Scribes of Alderia'
  ];

  private static REALMS_AND_CITIES = [
    'Alderia', 'Caelum-Vara', 'Thalassia', 'Silverpeak', 'Oakhaven', 'Nether-Ghyll', 'Solstice Reach',
    'Val-Doran', 'Aethelgard', 'Marid-Khar', 'Vesperia', 'Lunaria', 'Wessex', 'Ravenhall', 'Dun-Mora',
    'Myth-Drannor', 'Khorsabad', 'Al-Zafira', 'Zephyrion', 'Astragard', 'Sunken Alderia', 'Golgotha',
    'The High Barrows', 'Frostholm', 'Amber-Glen', 'Elyria', 'Veridiana', 'Crescent Isle', 'Carcosa'
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
    'Reign of Grand Magister Valerius (Year 892)',
    'The Bleeding Sky Epoch (Year 451)',
    'The Pre-Fall Dynasty (Year 008)'
  ];

  private static COVER_COLORS = [
    '#82181e', '#9e1c25', '#631317', '#1c3761', '#14294a', '#26497d',
    '#1d5334', '#133d25', '#2b6942', '#542d17', '#6b3a1e', '#7a4422',
    '#521c63', '#6a2280', '#3e134d', '#184e57', '#206670', '#222226',
    '#18181b', '#8c6227', '#a3722e', '#8c3823', '#732b1a', '#2c3e50',
    '#4a1525', '#331832', '#1a2e22', '#2f1f0f', '#191924', '#3d2614'
  ];

  private static ACCENT_COLORS = [
    '#ffd700', '#e5b84c', '#9a7838', '#d1d7e3', '#c86d49', '#dfd2b5', '#c09853',
    '#e05a47', '#50c878', '#9966cc', '#708090', '#b87333', '#e6c280'
  ];

  public static generatedTitlesRegistry = new Set<string>();

  public static clearRegistry(): void {
    this.generatedTitlesRegistry.clear();
  }

  public static createPrng(seed: number): () => number {
    let s = (seed + this.sessionSeed) >>> 0;
    return function() {
      let t = (s += 0x6D2B79F5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // =========================================================================
  // MASTER COMBINATORIAL TITLE SYNTHESIZER (MILLIONS OF UNIQUE COMBINATIONS)
  // =========================================================================
  public static generateDynamicTitle(genre: DarkFantasyGenre, seed: number, realm: string, attempt: number = 0): string {
    const prng = this.createPrng(seed + attempt * 7919);
    const pick = (arr: string[]) => arr[Math.floor(prng() * arr.length)];
    const roll = prng();

    switch (genre) {
      // 🫀 1. LIVING & SENTIENT VOLUMES
      case 'Parasitic Grimoires': {
        const p1 = ['The Hunger', 'The Crimson Thirst', 'Nine Drops', 'The Blood-Siphon', 'The Flesh-Bond', 'The Sanguine Debt', 'The Living Pulse', 'The Devouring Vellum', 'The Crimson Ledger', 'The Scribe\'s Sacrifice', 'The Leech'];
        const p2 = ['That Reads Back', 'of the Scriptorium', 'Beneath the Parchment', 'in Red Ink', 'for Seven Drops', 'of the Flayed Scholar', 'of the Solstice Vaults', 'of the Iron Penitent', 'of the Wounded Page'];
        if (roll < 0.35) return `${pick(p1)} ${pick(p2)}`;
        if (roll < 0.7) return `The Skin-Bound Leech of ${realm}`;
        return `Blood-Debt of ${realm}: ${pick(p1)}`;
      }
      case 'Mimic Lexicons': {
        const p1 = ['A Gentle Primer on', 'The Deceptive Novella of', 'The Snapping Pocket-Book of', 'Beware the Spine of', 'The Needle-Toothed Folio of', 'A Harmless Compendium of', 'Tales for the Unsuspecting Scholar of', 'The Predatory Lexicon of', 'The Gilded Trap of'];
        const p2 = ['Garden Roses', 'Innocence', 'Children\'s Fables', 'Common Grammar', 'Herbal Flora', 'Ancient Proverbs', 'Cathedral Hymns', 'Quiet Slumber', 'The Gilded Lily', 'Mundane Etiquette'];
        if (roll < 0.4) return `${pick(p1)} ${pick(p2)}`;
        if (roll < 0.75) return `${pick(p1)} ${realm}`;
        return `Do Not Open to Folio ${1 + Math.floor(prng() * 30)}`;
      }
      case 'Symbiotic Journals': {
        const p1 = ['The Beating Heart of', 'Reflections in', 'The Breathing Diary of', 'Pages That Whisper', 'Symbiosis of', 'The Muscle-Bound Soliloquy of', 'The Living Thought-Trap of', 'Warm Skin and', 'The Telepathic Codex of', 'The Shivering Folio of'];
        const p2 = ['Quivering Flesh', 'Unvoiced Desires', 'Bone and Quill', 'the Silent Scholar', 'the Embalmed Mind', 'the Solitary Watcher', 'the Wounded Scribe', 'the Midnight Pulse', 'the Neural Vellum'];
        if (roll < 0.45) return `${pick(p1)} ${pick(p2)}`;
        if (roll < 0.8) return `${pick(p1)} House ${realm}`;
        return `Veins Across the Margin of ${realm}`;
      }
      case 'Crying Folios': {
        const p1 = ['The Weeping Psalter of', 'Lamentations in', 'Tears of', 'The Groaning Testament of', 'Bitter Exudations of', 'The Mourning Song of', 'Black Bile and', 'The Weeping Octavo of', 'Sorrowful Transcripts of'];
        const p2 = ['the Blind Nun', 'the Iron Martyr', 'the Penitent King', 'the Silent Sisterhood', 'the Wounded Faith', 'the Hollow Belfry', 'the Forsaken Convent', 'the Midnight Vigil', 'the Broken Relic'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        if (roll < 0.85) return `${pick(p1)} ${realm}`;
        return `Lamentations of ${realm} in Black Bile`;
      }
      case 'Chained Codices': {
        const p1 = ['The Three-Padlocked Grimoire of', 'Restrained in Meteor-Steel:', 'The Screaming Octavo of', 'Chained Beneath Seven Hundredweights of Iron:', 'The Warded Litany of', 'The Imprisoned Folio of', 'The Bound Incantations of', 'Locked Behind Triple Iron:'];
        const p2 = ['Azrael', 'the Seven Sins', 'the Void Flame', 'the Lower Crypts', 'the Sunken Dynasty', 'the Unspoken Name', 'the Bound Leviathan', 'the Bleeding Eclipse', 'the Iron Sovereign'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }

      // 🩸 2. COSMIC HORROR & THE BLIND REALMS
      case 'Madness Manifestos': {
        const p1 = ['When the Stars', 'The Geometry of', 'Twelve Angles That', 'Voices Beyond', 'The Blind Horizon of', 'The Eye That', 'Fractures in', 'The Vertigo of', 'The Infinite Spiral of', 'Echoes from'];
        const p2 = ['Blinked First', 'Non-Euclidean Screams', 'Cut the Mind', 'the Seventh Sky', 'Looked Back', 'the Mortal Mind', 'the Starlit Void', 'the Sunken Geometry', 'the Abyssal Fold'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `The Madness of ${realm}: ${pick(p1)} ${pick(p2)}`;
      }
      case 'Planar Atlases': {
        const p1 = ['Cartography of', 'Shifting Coastlines of', 'Topography of', 'Where Gravity Forgets', 'The Inverted Horizon of', 'Surveying the Rifts of', 'Topological Manifolds of', 'The Edge of'];
        const p2 = ['the Unraveling Heavens', 'the Void Tides', 'the Seventh Fault', 'Its Weight', 'the Salt-Abyss', 'the Outer Fold', 'the Inverted Firmament', 'the Astral Coordinate Grid'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Astral Voyagers\' Logs': {
        const p1 = ['Forty Days Beyond', 'Severing the Silver Cord in', 'Drifting Past', 'The Astral Crossing of', 'The Watcher at', 'Solitary Drift through', 'Consciousness Severance in', 'Transits Across'];
        const p2 = ['the Seventh Veil', 'the Celestial Chasm', 'the Silent Spheres', 'the Star-Well', 'the Outer Dark', 'the Void Corridors', 'the Ethereal Abyss', 'the Infinite Boundary'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Echo Texts': {
        const p1 = ['The Midnight Ledger of', 'Words Written in', 'The Tide-Bound Manuscript of', 'Nocturnal Palimpsests of', 'The Ephemeral Chronicle of', 'The Waxing Annals of', 'Pages That Fade at'];
        const p2 = ['Waning Moonlight', 'the Dying Moon', 'the Fog-Bound Shore', 'the Silent Watch', 'the Vanishing Dawn', 'the Midnight Mist', 'the Nocturnal Horizon'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }

      // 💀 3. DEATH-CRAFT & NECROTIC LORE
      case 'Mortuary Liturgies': {
        const p1 = ['The Art of', 'Seven Stitches for', 'The Embalmer\'s Guide to', 'Preserving the Dead of', 'Ritual Washing and', 'The Cedar-Oil Liturgy of', 'The Mortuary Scriptorium of', 'Surgical Binding of'];
        const p2 = ['Sewing the Dead', 'the Lingering Spirit', 'the Royal Crypts', 'the Silent Sleeper', 'the Salt-Vaults', 'the Preserved Sovereign', 'the Embalmed Flesh', 'the Catacomb Vow'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Lichdom Blueprints': {
        const p1 = ['The Agony of', 'Preserving the Phylactery in', 'The Formula of', 'Transference Kinetics of', 'The Cold Sovereign of', 'The Geometry of Soul Severance in', 'Eternal Stasis through', 'The Calculus of'];
        const p2 = ['the Severed Soul', 'Liquid Mercury', 'Unending Bone', 'the Gemstone Vessel', 'Eternal Stasis', 'the Frozen Spirit', 'the Undying Matrix', 'the Black Diamond Core'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Sepulcher Registries': {
        const p1 = ['The Death-Roll of', 'The Nameless Graves of', 'Registry of Interred Kings in', 'Ten Thousand Skeletons of', 'The Sepulchral Ledger of', 'The Silent Vaults of', 'Corpse Census of'];
        const p2 = ['the High Barrows', 'the Lower Catacombs', 'the First Dynasty', 'the Iron Vaults', 'the Plague Solstice', 'the Sunken Basilica', 'the Royal Mausoleum'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Ossuary Architecture': {
        const p1 = ['Towers of', 'Vaulting with', 'The Cathedral of', 'Compressive Stresses in', 'Keystone Geometries of', 'Acoustic Resonance of', 'Architectural Masonry of', 'The Skeletal Arch of'];
        const p2 = ['Calcified Bone', 'Ribcages and Mortar', 'the White Skull', 'Skeletal Arches', 'the Femur Crypts', 'Ten Thousand Craniums', 'the Charnel Nave'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }

      // ⏳ 4. FORBIDDEN CHRONOLOGIES & GRIM HISTORY
      case 'Censored Dynasties': {
        const p1 = ['The Empire That', 'The Stricken Kings of', 'Names Erased from', 'The Expunged Queens of', 'Forgotten Sovereigns of', 'The Lost Lineage of', 'Chronicles of the Exiled'];
        const p2 = ['Never Was', 'the Granite Obelisks', 'the Third Dynasty', 'the Forbidden Throne', 'the Stricken Monument', 'the Erased Solstice', 'the Sunken Crown'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Pre-Fall Geographies': {
        const p1 = ['When the Ocean Was', 'The Seven Golden Spires of', 'Before the Sun', 'Emerald Valleys of', 'The Pristine Continents of', 'Rivers of Crystal in', 'The Vanished Coastline of'];
        const p2 = ['Fresh Water', 'Bled Ash', 'the First Dawn', 'the Golden Age', 'the Primordial Spring', 'the Unbroken Sun', 'the Verdant Era'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Doomsday Presages': {
        const p1 = ['Twelve Signs Before', 'The Prophetess of', 'The Day the Mountains', 'Countdown to the Final', 'Prophecies of the Blood-Red', 'Astrological Portents of', 'The Great Cataclysm of'];
        const p2 = ['the Final Eclipse', 'the Red Comet', 'Melt into Ash', 'the Solstice Collapse', 'the Shattered Sky', 'the Falling Stars', 'the Dying Horizon'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Martyr Logs': {
        const p1 = ['The Torturer\'s Ledger:', 'Confessions Extracted Under', 'The Defiant Words of', 'The Inquisitor\'s Record of', 'The Final Testimony of', 'Trial Records of', 'The Unbroken Heretic of'];
        const p2 = ['the Condemned Saints', 'Red-Hot Iron', 'the Scribes of Veritas', 'the Pyre at Noon', 'the Unyielding Scholars', 'the Secret Synod', 'the Cathedral Steps'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }

      // 🌿 5. CORRUPTED NATURE & TOXIC BESTIARIES
      case 'Grave-Botanicals': {
        const p1 = ['Flora That Blooms in', 'The Weeping Nightshade of', 'Corpse-Bloom Lilies and', 'Parasitic Roots of', 'Foraging in the Soil of', 'Botanical Sketches of', 'Tomb-Moss and'];
        const p2 = ['the Ribcage', 'the Bone Marrow', 'the Barrow Mounds', 'the Crypt Vaults', 'the Charnel Ground', 'the Silent Grave', 'the Necrotic Humus'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Monstrous Taxonomies': {
        const p1 = ['Dissection of', 'Where to Strike', 'Anatomical Atlas of', 'Harvesting the Glands of', 'Tactical Combat Guide against', 'Nerve Clusters of', 'Internal Anatomy of'];
        const p2 = ['the Horned Titan', 'an Apex Horror', 'the Subterranean Stalker', 'the Barrow Fiend', 'the Chitin Behemoth', 'the Deep Crawler', 'the Obsidian Chimera'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Venom Compendiums': {
        const p1 = ['Seven Drops to', 'The Toxicologist\'s Guide to', 'Distillation of', 'Curdling the Ghost:', 'Antidote Titrations against', 'The Black Bile of', 'The Lethal Phial:'];
        const p2 = ['Rot the Lineage', 'Rare Tinctures', 'Basalt Adder Venom', 'Paralyzing Toxins', 'the Corpse-Spider Secretion', 'Slow Neurotoxins', 'the Midnight Nightshade'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Lycanthropic Lineages': {
        const p1 = ['The Blood-Tide of', 'Twelve Generations of', 'Contagion in', 'The Lunar Pathology of', 'Slaying the Alpha Beast of', 'Hereditary Wolf-Blood in', 'The Beast-Fever of'];
        const p2 = ['the Full Moon', 'the Wolf-Curse', 'the Bone Marrow', 'the Winter Pack', 'the Solstice Night', 'the Forest Clans', 'the Predatory Bloodline'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} House ${realm}`;
      }

      // ⚖️ 6. BLASPHEMOUS PHILOSOPHY & FALSE FAITHS
      case 'Anti-Theology': {
        const p1 = ['The Creator is', 'Why the Gods', 'The Indifferent Cosmos and', 'Logical Refutations of', 'The Illusion of Divine Grace in', 'Deconstructing the Faith of', 'In Praise of Cosmic Entropy in'];
        const p2 = ['Blind and Deaf', 'Abandoned Us', 'Its Rot', 'Salvation', 'the Material World', 'the Silent Heavens', 'the Uncaring Void'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Sectarian Liturgies': {
        const p1 = ['Hymns to', 'The Sublime Beauty of', 'Chants of the Midnight', 'Prayers from the Crypt of', 'The Liturgy of Ashes for', 'Clandestine Rites of', 'Sacred Songs of'];
        const p2 = ['the Rotting Mother', 'Slow Decay', 'the Swarm', 'the Unseeing Eye', 'the Broken Altar', 'the Midnight Coven', 'the Shadow Brotherhood'];
        if (roll < 0.5) return `${pick(p1)} ${pick(p2)}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Delusion Diaries': {
        if (roll < 0.35) return `Drawings from Cell ${1 + Math.floor(prng() * 99)} of the Asylum`;
        if (roll < 0.7) return `Patient #${100 + Math.floor(prng() * 900)}: The Plaster Whispers`;
        return `The Monolith We All Dreamt of in ${realm}`;
      }

      // 📜 7. FORBIDDEN MAGIC & ARCANE TEXTS
      case 'Necromancy Grimoires': {
        const p1 = ['The Soul-Binder\'s Handbook of', 'Rites of Reanimation in', 'Grave-Dust Wards of', 'Salt-Binding Circles for', 'Awakening the Fallen of', 'Necrotic Transmutation in'];
        const p2 = ['the Lower Crypts', 'the Black Moon', 'the Restless Dead', 'the Solstice Necropolis', 'the Sunken Barrows'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Demonology Codices': {
        const p1 = ['True Names of', 'Circles of Warding and', 'Blood Contracts with', 'Hierarchies of the Abyssal Lords of', 'Binding Fiends within', 'Sealing the Rifts of'];
        const p2 = ['the Nether Fiends', 'Abyssal Defense', 'the Seven Circles', 'the Obsidian Seal', 'the Burning Horizon'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Abyssal Gazeteers': {
        const p1 = ['Non-Euclidean Horizons of', 'Coordinates of the Deep Chasm in', 'The Dimensional Rift at', 'Navigating the Sunken Spire of', 'Surveying the Void Folds of'];
        const p2 = ['the Nether Gulf', 'the Inverted Sea', 'the Basalt Void', 'the Fracture Zone', 'the Starless Trench'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Alchemical Formulae': {
        const p1 = ['Transmutation Kinetics of', 'Sublimation of Astral Mercury in', 'The Great Work of', 'Enthalpy Calculations for', 'Distilling Vitriol and Cinnabar in'];
        const p2 = ['Basalt Ore', 'the Sealed Crucible', 'the Philosopher\'s Salt', 'the High Laboratory', 'the Calcined Slag'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Hemomancy Scrolls': {
        const p1 = ['Tears of Sanguis:', 'Viscosity and Flow Rate of', 'Flesh-Stitching Rites in', 'The Sanguine Vessel of', 'Coagulation Runes for'];
        const p2 = ['The Flesh Compendium', 'Enchanted Blood', 'the Crimson Altar', 'the Heart-Well', 'the Living Arteries'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }

      // 🏛️ 8. WORLD LORE & GRIM HISTORY
      case 'Apocalyptic Chronicles': {
        const p1 = ['The Day the Heavens', 'Eyewitness Annals of', 'The Great Sundering of', 'When Fire Fell upon', 'The Winter of Ash in'];
        const p2 = ['Bled Crimson', 'the Cataclysm', 'the Mountain Citadels', 'the First Age', 'the Northern Ramparts'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Genealogies of Damned Lineages': {
        const p1 = ['The Extinguished Bloodlines of', 'The Corrupted Scions of', 'The Heraldic Curse of', 'Seven Generations of Madness in', 'Ancestral Tombs of'];
        if (roll < 0.5) return `${pick(p1)} House ${realm}`;
        return `${pick(p1)} ${realm}`;
      }
      case 'Inquisition Journals': {
        const p1 = ['Confessions in Iron from', 'The Purge of the Heretics in', 'Witch-Stake Decrees of', 'The Tribunal Dossiers of', 'Burning the Blasphemous Codices of'];
        const p2 = ['the High Scriptorium', 'the Winter Solstice', 'the Black Candle', 'the Citadel Court', 'the Secret Synod'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Monarchic Decrees': {
        const p1 = ['The Condemnation of', 'Edict of the Iron Scepter over', 'Seizure of the Grain Stores in', 'Imperial Decree of Exile against', 'Proclamations of Martial Law in'];
        const p2 = ['the Northern Barons', 'the Border Marches', 'the Rebellious Dukes', 'the Mountain Passes', 'the Traitorous Guilds'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Mythological Cycle Books': {
        const p1 = ['The War of', 'Primordial Creation Legends of', 'When the Sun Was Swallowed by', 'The Silence of the Elder Gods of', 'Hymns to the Titan of'];
        const p2 = ['Three Suns', 'the Serpent', 'the Star-Well', 'the Primordial Deep', 'the First Dawn'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }

      // 🌿 9. BESTIARIES & FIELD GUIDES
      case 'Cryptid Anatomies': {
        const p1 = ['Field Guide to', 'Organ Harvesting and Vulnerabilities of', 'Dissection Records of', 'Surviving the Nest of', 'The Ranger\'s Manual on'];
        const p2 = ['the Barrow Ghouls', 'the Subterranean Fiends', 'the Chitin Stalkers', 'the Horned Terrors', 'the Deep Wyrms'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Heresiographies': {
        const p1 = ['Secret Sigils of', 'Infiltration of the Cult of', 'Clandestine Covens in', 'Breaking the Unholy Rites of', 'Guide to Banishing the Avatars of'];
        const p2 = ['the Obsidian Hand', 'the Black Swarm', 'the Midnight Brotherhood', 'the False Gods', 'the Charnel Cabal'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Flora Morbida': {
        const p1 = ['The Blight That Consumes', 'Field Identification of', 'Poisonous Mosses and Spores of', 'Foraging Antidote Herbs in', 'The Herbalist\'s Warning on'];
        const p2 = ['the Wheat', 'the Tomb-Fungi', 'the Low Swamps', 'the Shadow Forest', 'the Weeping Nightshades'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }

      // 🎭 10. DARK PHILOSOPHY & FICTION
      case 'Heretical Philosophies': {
        const p1 = ['The Rationality of', 'Discourses on Absolute Entropy in', 'The Architecture of', 'In Praise of', 'The Sublime Sanctuary of'];
        const p2 = ['Surrender', 'Nothingness', 'the Cosmic Void', 'the Final Silence', 'the Great Unmaking'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Tragic Plays': {
        const p1 = ['The Fall of the House of', 'The Doomed Reign of', 'Tragedy of', 'The Poisoned Crown of', 'The Blood Feast of'];
        const p2 = ['Prince Alistair', 'Lady Morvath', 'the Broken Throne', 'the Midnight Duel', 'the Traitor King'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Malediction Poetry': {
        const p1 = ['Stanzas of', 'Ballad of', 'Verses for', 'The Malediction of', 'Dark Rhymes from'];
        const p2 = ['the Black Moon', 'the Forgotten Tomb', 'the Sleepless Scribes', 'the Gallow Hill', 'the Withered Rose'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }

      // 🛠️ 11. PRACTICAL & LOST KNOWLEDGE
      case 'Architectural Layouts': {
        const p1 = ['The Hidden Escape Labyrinths of', 'Vaulting Stresses and Keystone Loads in', 'Mechanical Schematics of', 'Subterranean Drainage Channels of', 'Fortress Counterweight Gates of'];
        const p2 = ['the Citadel', 'the Sunken Crypts', 'the High Belfry', 'the Imperial Bastion', 'the Old Fortress'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Blacksmithing Manuals': {
        const p1 = ['The Forging of', 'Hardening the Meteor-Tipped Spear in', 'Anvil Harmonics and Cold-Hammering of', 'Damascus Steel Folding Methods in', 'Quenching the Relic Blades of'];
        const p2 = ['Cursed Blades', 'the Master Armorers', 'the Frostholm Forge', 'the Iron Scriptorium', 'the Crucible Guild'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Cipher Keys': {
        const p1 = ['Modular Substitution Wheels of', 'Cryptanalysis of the Royal Ciphers of', 'The Unbreakable Key of', 'Polyalphabetic Steganography in', 'Deciphering the Runes of'];
        const p2 = ['the Archon', 'the Citadel Scriptorium', 'the Secret Synod', 'the Iron Vaults', 'the Imperial Chancery'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }

      // 📖 12. MAJOR FICTION GENRES
      case 'Fantasy': {
        const p1 = ['A Crown of', 'The Sword of', 'The Legend of', 'Journey to the Broken Spire of', 'The Quest for the Golden Relic of', 'The Dragon of', 'The Sorcerer\'s Heir in', 'The Battle of'];
        const p2 = ['Ash and Thorns', 'the Lost King', 'the Dragon\'s Crest', 'the High Kingdoms', 'the Obsidian Mountain', 'the Forgotten Realm', 'the Silver Throne'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Science Fiction': {
        const p1 = ['The Automaton That', 'Voyage of the Iron', 'The Clockwork Mind of', 'Engines of the Void:', 'Transmitting Signals to the Far Stars of', 'The Synthetic Soul of', 'Chronometer Kinetics in', 'The Celestial Engine of'];
        const p2 = ['Learned to Pray', 'Nautilus', 'the Etheric Core', 'the Forgotten Galaxy', 'the Void-Farer', 'the Brass Observatory', 'the Clockwork Spire', 'the Iron Star'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Romance': {
        const p1 = ['Love in the Shadow of', 'The Doomed Betrothal of', 'Letters from the Rose Garden of', 'A Vow Across', 'The Clandestine Romance of', 'Stolen Glances at the Masquerade of', 'The Knight\'s Devotion in', 'Whispered Promises beneath the Belfry of', 'A Rose for the Lady of'];
        const p2 = ['the Guillotine', 'the Stormy Sea', 'the Walled Abbey', 'the Red Bastion', 'the Winter Castle', 'the High Scriptorium', 'the Sunken Garden', 'the Royal Court'];
        if (roll < 0.5) return `${pick(p1)} House ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Mystery': {
        const p1 = ['Murder in', 'The Clue in the Red Wax of', 'The Mystery of the Poisoned Goblet at', 'The Missing Scribe of', 'Who Killed the Arch-Scholar of', 'The Sealed Room in', 'The Case of the Forged Will in', 'Blood on the Vellum of'];
        const p2 = ['the High Scriptorium', 'the Royal Banquet', 'the Obsidian Vault', 'the Cathedral Chapter', 'the Clocktower', 'the Gilded Library', 'the Old Belfry'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Thriller & Suspense': {
        const p1 = ['The Clock is Ticking in', 'Escape from the Belfry of', 'The Assassin of', 'Trapped in the Labyrinth of', 'Midnight Flight across', 'Desperate Gambits in', 'The Traitor in'];
        const p2 = ['the Citadel', 'the Iron Gate', 'the Flooded Undercroft', 'the City Walls', 'the Scriptorium Catacombs', 'the Sovereign Guard'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Horror': {
        const p1 = ['The Scratches in the Masonry of', 'The Faceless Visitor of', 'The Haunting of', 'Whispers in the Cellar of', 'Terror at', 'The Entity Beneath', 'The Nightmare in'];
        const p2 = ['the Old Manor', 'the Abandoned Priory', 'the Midnight Watch', 'the Weeping Crypt', 'the Belltower Attic', 'the Forgotten Tomb'];
        if (roll < 0.5) return `${pick(p1)} House ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Historical Fiction': {
        const p1 = ['The Gathering of the Legions at', 'The Great Siege of', 'The Winter Campaign in', 'Soldiers of the Empire of', 'The Chronicle of the War for', 'The Last Centurion of', 'Shield-Wall at'];
        const p2 = ['the Red Fortress', 'the Northern Marches', 'the Sovereign Crown', 'the River Crossing', 'the Iron Border', 'the High Gate'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Literary Fiction': {
        const p1 = ['The Silence of Autumn in', 'Portraits of Memory from', 'The Scribe\'s Regret at', 'The Quiet Light over', 'Echoes of Youth in', 'The Solitary Walk through', 'Shadows of the Cathedral in'];
        const p2 = ['the Cathedral Square', 'the Old Scriptorium', 'the Sunken Abbey', 'the Provincial Towns', 'the River Walk', 'the Walled Courtyard'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Young Adult': {
        const p1 = ['The First Spell of', 'Trouble at the Alchemy Academy of', 'The Secret Chamber of', 'The Midnight Trial of', 'Apprentices of', 'The Stolen Wand of', 'The Spellbinder of'];
        const p2 = ['the Young Mage', 'the Clockwork Tower', 'the Spellweavers', 'the Gilded Quill', 'the Hidden Library', 'the Silver Spire'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }

      // 📚 13. MAJOR NON-FICTION GENRES
      case 'Biography & Memoir': {
        const p1 = ['Confessions of', 'Early Years in the Scriptorium of', 'Life and Trials of', 'Reflections from the High Council of', 'The Memoirs of Master', 'The Journey of an Inquisitor in', 'The Scribe\'s Life:'];
        const p2 = ['the Last Grand Inquisitor', 'the Sovereign Chancellor', 'the Arch-Librarian', 'the Master Artificer', 'the Solitary Epigrapher'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Self-Help': {
        const p1 = ['Overcoming the Dread of', 'The Stoic Mindset for', 'Daily Meditations on Fortitude in', 'Mastering the Will:', 'The Art of Calm in Times of Crisis at', 'Inner Discipline for', 'The Resilient Spirit in'];
        const p2 = ['the Midnight Watch', 'the Weary Scholar', 'Finding Focus in Chaos', 'the Imperial Court', 'Solitary Confinement', 'the Daily Struggle'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'True Crime': {
        const p1 = ['The Poisoner of', 'The Forger Who Fooled', 'Trial of the Conspirators of', 'The Great Heist at', 'Forensic Records of the Murders in', 'The Assassin\'s Confession in', 'The Black Market of Scriptorium Relics in'];
        const p2 = ['the Royal Court', 'the Citadel Treasury', 'the Old Belfry', 'the Scriptorium Vaults', 'the Palace of Veritas', 'the Cathedral Square'];
        if (roll < 0.5) return `${pick(p1)} the Archon of ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'History': {
        const p1 = ['Rise of the Monastic Scriptoriums in', 'The Trade Guilds and Merchant Wars of', 'A Complete History of the Architecture of', 'The Evolution of Civil Law in', 'The Golden Century of', 'Chronicles of the Great Siege of', 'The Fall of the First Empire of', 'Diplomatic Treaties and Alliances in'];
        const p2 = ['the Northern Seas', 'the Cathedral Cities', 'the First Dynasty', 'the Lion Kings', 'the Red Bastion', 'the Silver Armada', 'the Solstice Epoch'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)}`;
      }
      case 'Cookbooks & Food': {
        const p1 = ['100 Recipes for', 'The Master Baker\'s Guide to', 'Artisanal Hearth Cookery in', 'Traditional Methods for', 'Secrets of the Royal Kitchens of', 'The Forest Forager\'s Pantry in', 'Slow-Simmered Broths and Stews of', 'Spiced Wines and Festive Banquets of', 'Baking Sourdough Breads in', 'The Butcher\'s Craft and Game Roasts in', 'Herbal Infusions and Healing Draughts of', 'Preserving Winter Stores in'];
        const p2 = ['Wild Game and Forest Roasts', 'Sourdough Breads and Stone Ovens', 'Herbal Broths and Restorative Stews', 'Spiced Hypocras and Vintage Wines', 'Candied Quinces and Spun Sugar', 'Winter Preserves and Salted Meats', 'Mushroom Broths and Foraged Greens', 'Smoked Venison and Juniper Glazes', 'Citadel Pastries and Honey Cakes', 'Peasant Potages and Hearth Porridges', 'Baking Bread in Times of Siege', 'The Royal Banquet Dishes', 'Aged Cheeses and Cellar Vinegars', 'Spit-Roasted Boar and Glazed Fowl'];
        if (roll < 0.45) return `${pick(p1)} ${pick(p2)}`;
        if (roll < 0.8) return `${pick(p1)} ${realm}`;
        return `The Alchemical Kitchen of ${realm}: ${pick(p2)}`;
      }
      case 'Travel': {
        const p1 = ['Crossing the Boiling Sea of', '1,000 Leagues Beneath', 'Walking the Ancient Pilgrim Trail to', 'Caravan Routes through the Great Wastes of', 'The Voyager\'s Guide to the Isles of', 'Expedition into the Frozen Peaks of', 'Navigating the Turbulent Straits of', 'Ten Months Among the Nomads of'];
        const p2 = ['the Living Mountain', 'the Coral Reefs', 'the Southern Archipelago', 'the Obsidian Canyon', 'the Whispering Steppes', 'the Cloud Passes'];
        if (roll < 0.5) return `${pick(p1)} ${realm}`;
        return `${pick(p1)} ${pick(p2)} of ${realm}`;
      }

      default:
        return `The Chronicle of ${realm}`;
    }
  }

  private static generateDynamicSubtitle(
    genre: DarkFantasyGenre,
    realm: string,
    organization: string,
    era: string,
    seed: number
  ): string {
    const prng = this.createPrng(seed + 888);
    const pick = (arr: string[]) => arr[Math.floor(prng() * arr.length)];

    const genericSubtitles = [
      `A Masterwork Preserved in ${realm} during ${era}`,
      `Compiled Under the Auspices of ${organization}`,
      `Being an Eyewitness Account Transcribed in ${realm}`,
      `Archived in the High Scriptorium of ${organization}`,
      `A Comprehensive Folio of ${genre} from ${era}`,
      `Restricted Archival Volume • Seal of ${organization}`
    ];

    if (genre.includes('Formulae') || genre.includes('Architecture') || genre.includes('Layouts') || genre.includes('Cipher')) {
      return pick([
        `With Mathematical Proofs, Structural Calculations, and Generative Figures`,
        `Complete Equations and Schematics Verified by ${organization}`,
        `A Technical Reference for Master Artificers of ${realm}`,
        ...genericSubtitles
      ]);
    }

    if (genre.includes('Grimoire') || genre.includes('Codex') || genre.includes('Manifesto') || genre.includes('Parasitic') || genre.includes('Mimic') || genre.includes('Living')) {
      return pick([
        `Classified Under the Highest Inquisitorial Seal of ${organization}`,
        `Handle with Sanctified Iron Tongs • Do Not Recite Aloud`,
        `Preserved in the Salted Vaults of ${realm} since ${era}`,
        ...genericSubtitles
      ]);
    }

    return pick(genericSubtitles);
  }

  // =========================================================================
  // PUBLIC BOOK GENERATOR (CALLED FOR SHELVES, TABLES, AND PEDESTALS)
  // GUARANTEES 100% ONE OF ONE UNIQUE BOOKS ACROSS THE ENTIRE LIBRARY
  // =========================================================================
  public static generateBook(seed: number, overrideTitle?: string): BookData {
    const prng = this.createPrng(seed);

    // 1. Pick Master Classification & Genre
    const classKeys = Object.keys(this.CLASSIFICATIONS) as MainBookClassification[];
    const classification = classKeys[Math.floor(prng() * classKeys.length)];
    const genresInClass = this.CLASSIFICATIONS[classification];
    const genre: DarkFantasyGenre = genresInClass[Math.floor(prng() * genresInClass.length)];

    const realm = this.REALMS_AND_CITIES[Math.floor(prng() * this.REALMS_AND_CITIES.length)];
    const organization = this.ORGANIZATIONS[Math.floor(prng() * this.ORGANIZATIONS.length)];
    const era = this.ERAS[Math.floor(prng() * this.ERAS.length)];

    // 2. Generate Guaranteed 1-of-1 Unique Title
    let title = overrideTitle;
    if (!title) {
      let attempts = 0;
      do {
        title = this.generateDynamicTitle(genre, seed + attempts * 7919, realm, attempts);
        attempts++;
      } while (this.generatedTitlesRegistry.has(title) && attempts < 50);

      // If collision occurs after 50 attempts, append a unique volumetric marker
      if (this.generatedTitlesRegistry.has(title)) {
        let v = 1;
        while (this.generatedTitlesRegistry.has(`${title} (Vol. ${v})`)) {
          v++;
        }
        title = `${title} (Vol. ${v})`;
      }
      this.generatedTitlesRegistry.add(title);
    }

    const subtitle = this.generateDynamicSubtitle(genre, realm, organization, era, seed);

    const authorFirst = this.FIRST_NAMES[Math.floor(prng() * this.FIRST_NAMES.length)];
    const authorSuffix = this.SURNAMES_AND_EPITHETS[Math.floor(prng() * this.SURNAMES_AND_EPITHETS.length)];
    const author = `${authorFirst} ${authorSuffix}`;

    const coverColor = this.COVER_COLORS[Math.floor(prng() * this.COVER_COLORS.length)];
    const accentColor = this.ACCENT_COLORS[Math.floor(prng() * this.ACCENT_COLORS.length)];

    const isSTEM = aiBookService.isMathAllowedForGenre(genre);

    const fontFamilies: BookFontFamily[] = ['garamond', 'gothic', 'scriptorium', 'crimson', 'mystic'];
    const fontSizes: BookFontSize[] = ['compact', 'regular', 'relaxed'];

    const fontFamily: BookFontFamily = isSTEM
      ? 'crimson'
      : genre === 'Malediction Poetry'
      ? 'mystic'
      : fontFamilies[Math.floor(prng() * fontFamilies.length)];

    const fontSize: BookFontSize = isSTEM ? 'compact' : fontSizes[Math.floor(prng() * fontSizes.length)];

    let layoutFormat: BookLayoutFormat = 'standard';
    let writingStyle: BookWritingStyle = 'chronicle-history';

    if (genre === 'Tragic Plays') {
      layoutFormat = 'play-script';
      writingStyle = 'dramatic-play';
    } else if (genre === 'Malediction Poetry') {
      layoutFormat = 'verse';
      writingStyle = 'epic-verse';
    } else if (genre === 'Heretical Philosophies' || genre === 'Anti-Theology') {
      layoutFormat = 'marginalia';
      writingStyle = 'philosophical-dialogue';
    } else if (genre === 'Cookbooks & Food') {
      layoutFormat = 'two-column';
      writingStyle = 'recipe-guide';
    } else if (isSTEM) {
      layoutFormat = 'standard';
      writingStyle = 'academic-treatise';
    } else if (genre.includes('Journal') || genre.includes('Log') || genre.includes('Diary')) {
      layoutFormat = 'standard';
      writingStyle = 'investigative-journal';
    }

    const id = `book_${seed}_${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}`;
    const targetPageCount = 12 + Math.floor(prng() * 37); // 12 to 48 pages

    return {
      id,
      title,
      subtitle,
      author,
      era,
      classification,
      subgenre: genre,
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
}
