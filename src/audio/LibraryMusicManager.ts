/**
 * Medieval Audio Engine & Multi-Realm Music Manager
 * Procedural Web Audio API synthesizer generating peaceful, authentic medieval ambient music on shuffled repeat.
 */

export interface MedievalTrack {
  id: string;
  realm: 'title' | 'surface' | 'dungeon' | 'library';
  title: string;
  subtitle: string;
  tempoBpm: number;
  notesLute?: Array<{ note: string; time: number; duration: number; gain?: number }>;
  notesFlute?: Array<{ note: string; time: number; duration: number; gain?: number }>;
  notesOrgan?: Array<{ note: string; time: number; duration: number; gain?: number }>;
  notesDrone?: Array<{ note: string; time: number; duration: number; gain?: number }>;
  totalBeats: number;
}

const NOTE_FREQS: Record<string, number> = {
  'A1': 55.00, 'B1': 61.74,
  'C2': 65.41, 'D2': 73.42, 'E2': 82.41, 'F2': 87.31, 'G2': 98.00, 'A2': 110.00, 'B2': 123.47,
  'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
  'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
  'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00, 'B5': 987.77,
  'C6': 1046.50, 'D6': 1174.66, 'E6': 1318.51
};

// -------------------------------------------------------------
// CURATED SOUNDTRACK PLAYLISTS (4 Realms: Title, Overworld, Dungeon, Library)
// -------------------------------------------------------------

const REALM_TRACKS: Record<'title' | 'surface' | 'dungeon' | 'library', MedievalTrack[]> = {
  // =============================================================
  // 1. TITLE SCREEN (Ethereal, Hollow Knight Aesthetic, Melancholic)
  // =============================================================
  title: [
    {
      id: 'title_hollow_horizons',
      realm: 'title',
      title: 'Hollow Horizons',
      subtitle: 'Ethereal Lute & Melancholic High Flute in A Minor',
      tempoBpm: 52,
      totalBeats: 48,
      notesDrone: [
        { note: 'A1', time: 0, duration: 24, gain: 0.35 },
        { note: 'E2', time: 0, duration: 24, gain: 0.25 },
        { note: 'F2', time: 24, duration: 12, gain: 0.35 },
        { note: 'D2', time: 36, duration: 12, gain: 0.35 }
      ],
      notesLute: [
        { note: 'A3', time: 0, duration: 3 }, { note: 'E4', time: 2, duration: 2.5 }, { note: 'C4', time: 4, duration: 2 }, { note: 'B3', time: 6, duration: 2 },
        { note: 'A3', time: 8, duration: 3 }, { note: 'C4', time: 10, duration: 2 }, { note: 'E4', time: 12, duration: 3 }, { note: 'G4', time: 15, duration: 2.5 },
        { note: 'F3', time: 24, duration: 3 }, { note: 'C4', time: 26, duration: 2 }, { note: 'A4', time: 28, duration: 2.5 }, { note: 'G4', time: 31, duration: 2 },
        { note: 'D3', time: 36, duration: 3 }, { note: 'A3', time: 38, duration: 2 }, { note: 'F4', time: 40, duration: 2.5 }, { note: 'E4', time: 43, duration: 5 }
      ],
      notesFlute: [
        { note: 'E5', time: 6, duration: 4.5 },
        { note: 'A5', time: 11, duration: 4.0 },
        { note: 'G5', time: 16, duration: 3.5 },
        { note: 'E5', time: 20, duration: 4.0 },
        { note: 'C5', time: 28, duration: 3.5 },
        { note: 'D5', time: 32, duration: 3.5 },
        { note: 'F5', time: 38, duration: 3.0 },
        { note: 'E5', time: 42, duration: 5.5 }
      ]
    },
    {
      id: 'title_ember_realm',
      realm: 'title',
      title: 'Ember of the Lost Realm',
      subtitle: 'Soft Ambient Drones & Distant Harp Chimes in D Dorian',
      tempoBpm: 54,
      totalBeats: 48,
      notesDrone: [
        { note: 'D2', time: 0, duration: 16, gain: 0.35 },
        { note: 'A2', time: 0, duration: 16, gain: 0.25 },
        { note: 'C2', time: 16, duration: 16, gain: 0.35 },
        { note: 'G2', time: 16, duration: 16, gain: 0.25 },
        { note: 'D2', time: 32, duration: 16, gain: 0.35 }
      ],
      notesLute: [
        { note: 'D3', time: 0, duration: 2 }, { note: 'A3', time: 1.5, duration: 2 }, { note: 'F4', time: 3, duration: 2 }, { note: 'E4', time: 5, duration: 2.5 },
        { note: 'F4', time: 8, duration: 2 }, { note: 'A4', time: 10, duration: 3 }, { note: 'G4', time: 13, duration: 2.5 },
        { note: 'C3', time: 16, duration: 2 }, { note: 'G3', time: 17.5, duration: 2 }, { note: 'E4', time: 19, duration: 2 }, { note: 'D4', time: 21, duration: 2.5 },
        { note: 'D3', time: 32, duration: 2 }, { note: 'A3', time: 34, duration: 2 }, { note: 'F4', time: 36, duration: 3 }, { note: 'D4', time: 40, duration: 6 }
      ],
      notesFlute: [
        { note: 'A4', time: 4, duration: 4.0 },
        { note: 'D5', time: 9, duration: 3.5 },
        { note: 'C5', time: 13, duration: 3.0 },
        { note: 'B4', time: 18, duration: 3.5 },
        { note: 'A4', time: 22, duration: 4.0 },
        { note: 'E5', time: 35, duration: 3.0 },
        { note: 'D5', time: 39, duration: 6.0 }
      ]
    },
    {
      id: 'title_forgotten_crest',
      realm: 'title',
      title: 'The Ancient Crest',
      subtitle: 'Contemplative Plucked Lute & Long Viola Harmonics in E Minor',
      tempoBpm: 50,
      totalBeats: 48,
      notesDrone: [
        { note: 'E2', time: 0, duration: 24, gain: 0.32 },
        { note: 'B2', time: 0, duration: 24, gain: 0.25 },
        { note: 'A1', time: 24, duration: 12, gain: 0.32 },
        { note: 'E2', time: 36, duration: 12, gain: 0.38 }
      ],
      notesLute: [
        { note: 'E3', time: 0, duration: 2.5 }, { note: 'B3', time: 1.5, duration: 2 }, { note: 'G4', time: 3, duration: 2.5 }, { note: 'F4', time: 5, duration: 2 },
        { note: 'E4', time: 7, duration: 3 }, { note: 'B4', time: 10, duration: 2.5 }, { note: 'A4', time: 13, duration: 3 },
        { note: 'A3', time: 24, duration: 2.5 }, { note: 'E4', time: 26, duration: 2 }, { note: 'C4', time: 28, duration: 2.5 }, { note: 'B3', time: 31, duration: 3 },
        { note: 'E3', time: 36, duration: 2.5 }, { note: 'B3', time: 38, duration: 2 }, { note: 'G4', time: 40, duration: 3 }, { note: 'E4', time: 43, duration: 5 }
      ],
      notesFlute: [
        { note: 'B4', time: 6, duration: 4 },
        { note: 'E5', time: 11, duration: 4 },
        { note: 'D5', time: 16, duration: 3 },
        { note: 'C5', time: 28, duration: 3.5 },
        { note: 'B4', time: 32, duration: 4 },
        { note: 'G4', time: 39, duration: 3 },
        { note: 'E4', time: 43, duration: 5 }
      ]
    },
    {
      id: 'title_stars_aethelgard',
      realm: 'title',
      title: 'Stars Over Aethelgard',
      subtitle: 'Mystical Ambient Shimmer & Solitary Woodwind in C Lydian',
      tempoBpm: 56,
      totalBeats: 48,
      notesDrone: [
        { note: 'C2', time: 0, duration: 24, gain: 0.3 },
        { note: 'G2', time: 0, duration: 24, gain: 0.25 },
        { note: 'D2', time: 24, duration: 12, gain: 0.3 },
        { note: 'C2', time: 36, duration: 12, gain: 0.35 }
      ],
      notesLute: [
        { note: 'C3', time: 0, duration: 2 }, { note: 'G3', time: 1.5, duration: 2 }, { note: 'E4', time: 3, duration: 2 }, { note: 'B4', time: 5, duration: 3 },
        { note: 'C4', time: 8, duration: 2 }, { note: 'G4', time: 10, duration: 2.5 }, { note: 'F4', time: 13, duration: 2.5 },
        { note: 'D3', time: 24, duration: 2 }, { note: 'A3', time: 25.5, duration: 2 }, { note: 'F4', time: 27, duration: 2 }, { note: 'E4', time: 29, duration: 2.5 },
        { note: 'C3', time: 36, duration: 2 }, { note: 'G3', time: 38, duration: 2 }, { note: 'E4', time: 40, duration: 3 }, { note: 'C4', time: 43, duration: 5 }
      ],
      notesFlute: [
        { note: 'G4', time: 4, duration: 3.5 },
        { note: 'B4', time: 8, duration: 3.5 },
        { note: 'C5', time: 12, duration: 4.0 },
        { note: 'E5', time: 17, duration: 4.5 },
        { note: 'D5', time: 27, duration: 3.5 },
        { note: 'C5', time: 31, duration: 3.5 },
        { note: 'G5', time: 39, duration: 3.0 },
        { note: 'C5', time: 43, duration: 5.0 }
      ]
    }
  ],

  // =============================================================
  // 2. OVERWORLD / SURFACE (Expansive, Pastoral, Adventurous, Bright)
  // =============================================================
  surface: [
    {
      id: 'surf_verdant_highlands',
      realm: 'surface',
      title: 'Breeze of the Verdant Highlands',
      subtitle: 'Pastoral Lute Arpeggios & Soaring Flute in G Major',
      tempoBpm: 72,
      totalBeats: 48,
      notesDrone: [
        { note: 'G2', time: 0, duration: 16, gain: 0.28 },
        { note: 'D3', time: 0, duration: 16, gain: 0.2 },
        { note: 'C2', time: 16, duration: 16, gain: 0.28 },
        { note: 'G2', time: 32, duration: 16, gain: 0.3 }
      ],
      notesLute: [
        { note: 'G3', time: 0, duration: 1 }, { note: 'B3', time: 1, duration: 1 }, { note: 'D4', time: 2, duration: 1 }, { note: 'G4', time: 3, duration: 1 },
        { note: 'B4', time: 4, duration: 2 }, { note: 'A4', time: 6, duration: 1.5 }, { note: 'G4', time: 8, duration: 2 }, { note: 'D4', time: 10, duration: 2 },
        { note: 'C3', time: 16, duration: 1 }, { note: 'E3', time: 17, duration: 1 }, { note: 'G3', time: 18, duration: 1 }, { note: 'C4', time: 19, duration: 1 },
        { note: 'E4', time: 20, duration: 2 }, { note: 'D4', time: 22, duration: 1.5 }, { note: 'C4', time: 24, duration: 2 }, { note: 'G3', time: 26, duration: 2 },
        { note: 'G3', time: 32, duration: 1.5 }, { note: 'D4', time: 34, duration: 1.5 }, { note: 'B4', time: 36, duration: 2 }, { note: 'G4', time: 39, duration: 5 }
      ],
      notesFlute: [
        { note: 'D5', time: 3, duration: 2.5 },
        { note: 'G5', time: 6, duration: 3.5 },
        { note: 'F5', time: 10, duration: 2.0 },
        { note: 'E5', time: 12, duration: 3.0 },
        { note: 'C5', time: 18, duration: 2.5 },
        { note: 'E5', time: 21, duration: 3.5 },
        { note: 'D5', time: 25, duration: 3.0 },
        { note: 'G5', time: 34, duration: 3.0 },
        { note: 'B5', time: 38, duration: 2.5 },
        { note: 'G5', time: 41, duration: 4.5 }
      ]
    },
    {
      id: 'surf_emerald_canopies',
      realm: 'surface',
      title: 'Sunlight Through Emerald Canopies',
      subtitle: 'Bright Harp Cascades & Woodwinds in D Major',
      tempoBpm: 68,
      totalBeats: 48,
      notesDrone: [
        { note: 'D2', time: 0, duration: 16, gain: 0.28 },
        { note: 'A2', time: 0, duration: 16, gain: 0.2 },
        { note: 'G2', time: 16, duration: 16, gain: 0.28 },
        { note: 'D2', time: 32, duration: 16, gain: 0.3 }
      ],
      notesLute: [
        { note: 'D3', time: 0, duration: 1.2 }, { note: 'F4', time: 1.2, duration: 1.2 }, { note: 'A4', time: 2.4, duration: 1.2 }, { note: 'D5', time: 3.6, duration: 2 },
        { note: 'C5', time: 6, duration: 1.5 }, { note: 'B4', time: 8, duration: 2 }, { note: 'A4', time: 10, duration: 2 },
        { note: 'G3', time: 16, duration: 1.2 }, { note: 'B3', time: 17.2, duration: 1.2 }, { note: 'D4', time: 18.4, duration: 1.2 }, { note: 'G4', time: 19.6, duration: 2 },
        { note: 'D3', time: 32, duration: 1.5 }, { note: 'A3', time: 34, duration: 1.5 }, { note: 'F4', time: 36, duration: 2 }, { note: 'D4', time: 39, duration: 5 }
      ],
      notesFlute: [
        { note: 'A4', time: 2, duration: 3.0 },
        { note: 'D5', time: 5.5, duration: 3.5 },
        { note: 'E5', time: 9.5, duration: 3.0 },
        { note: 'B4', time: 17.5, duration: 3.0 },
        { note: 'D5', time: 21, duration: 4.0 },
        { note: 'F5', time: 34, duration: 3.0 },
        { note: 'D5', time: 38, duration: 5.0 }
      ]
    },
    {
      id: 'surf_roaming_pilgrim',
      realm: 'surface',
      title: 'The Roaming Pilgrim',
      subtitle: 'Strummed Folk Lute & Travelling Flute in A Dorian',
      tempoBpm: 76,
      totalBeats: 48,
      notesDrone: [
        { note: 'A2', time: 0, duration: 24, gain: 0.3 },
        { note: 'G2', time: 24, duration: 12, gain: 0.28 },
        { note: 'A2', time: 36, duration: 12, gain: 0.32 }
      ],
      notesLute: [
        { note: 'A3', time: 0, duration: 1 }, { note: 'C4', time: 1, duration: 1 }, { note: 'E4', time: 2, duration: 1.5 }, { note: 'D4', time: 3.5, duration: 1 },
        { note: 'E4', time: 5, duration: 2 }, { note: 'G4', time: 7.5, duration: 1.5 }, { note: 'A4', time: 9.5, duration: 2 }, { note: 'E4', time: 12, duration: 2 },
        { note: 'G3', time: 24, duration: 1 }, { note: 'B3', time: 25, duration: 1 }, { note: 'D4', time: 26, duration: 1.5 }, { note: 'G4', time: 28, duration: 2 },
        { note: 'A3', time: 36, duration: 1.5 }, { note: 'E4', time: 38, duration: 1.5 }, { note: 'C4', time: 40, duration: 2 }, { note: 'A3', time: 42, duration: 5 }
      ],
      notesFlute: [
        { note: 'E5', time: 3, duration: 2.5 },
        { note: 'A5', time: 6, duration: 3.0 },
        { note: 'G5', time: 9.5, duration: 2.5 },
        { note: 'E5', time: 12.5, duration: 3.5 },
        { note: 'D5', time: 26, duration: 3.0 },
        { note: 'B4', time: 29.5, duration: 3.0 },
        { note: 'A4', time: 38, duration: 4.5 }
      ]
    },
    {
      id: 'surf_frostpeak_valleys',
      realm: 'surface',
      title: 'Whispers of Frostpeak Valley',
      subtitle: 'Crisp Mountain Harp & Expansive Alpine Winds in E Dorian',
      tempoBpm: 60,
      totalBeats: 48,
      notesDrone: [
        { note: 'E2', time: 0, duration: 24, gain: 0.3 },
        { note: 'B2', time: 0, duration: 24, gain: 0.22 },
        { note: 'D2', time: 24, duration: 12, gain: 0.3 },
        { note: 'E2', time: 36, duration: 12, gain: 0.35 }
      ],
      notesLute: [
        { note: 'E3', time: 0, duration: 1.5 }, { note: 'B3', time: 1.5, duration: 1.5 }, { note: 'G4', time: 3, duration: 2 }, { note: 'F4', time: 5.5, duration: 2 },
        { note: 'E4', time: 8, duration: 2.5 }, { note: 'B4', time: 11, duration: 2.5 }, { note: 'D5', time: 14, duration: 3 },
        { note: 'D3', time: 24, duration: 1.5 }, { note: 'A3', time: 25.5, duration: 1.5 }, { note: 'F4', time: 27, duration: 2 }, { note: 'E4', time: 29.5, duration: 2.5 },
        { note: 'E3', time: 36, duration: 2 }, { note: 'B3', time: 38, duration: 2 }, { note: 'G4', time: 40, duration: 3 }, { note: 'E4', time: 43, duration: 5 }
      ],
      notesFlute: [
        { note: 'B4', time: 4, duration: 3.5 },
        { note: 'E5', time: 8.5, duration: 4.0 },
        { note: 'F5', time: 13, duration: 3.0 },
        { note: 'D5', time: 26, duration: 3.5 },
        { note: 'E5', time: 38, duration: 3.0 },
        { note: 'B4', time: 41.5, duration: 4.5 }
      ]
    }
  ],

  // =============================================================
  // 3. DUNGEON CATACOMBS (Ominous, Deep Sub-Bass, Tense, Gothic)
  // =============================================================
  dungeon: [
    {
      id: 'dung_crypt_echoes',
      realm: 'dungeon',
      title: 'Echoes of the Crypt',
      subtitle: 'Deep Sub-Bass Drone & Eerie Distant Organ in D Minor',
      tempoBpm: 46,
      totalBeats: 48,
      notesDrone: [
        { note: 'D2', time: 0, duration: 24, gain: 0.42 },
        { note: 'A1', time: 0, duration: 24, gain: 0.35 },
        { note: 'B1', time: 24, duration: 12, gain: 0.4 },
        { note: 'D2', time: 36, duration: 12, gain: 0.45 }
      ],
      notesOrgan: [
        { note: 'D3', time: 4, duration: 8, gain: 0.28 },
        { note: 'F3', time: 6, duration: 6, gain: 0.24 },
        { note: 'A3', time: 8, duration: 6, gain: 0.22 },
        { note: 'C4', time: 24, duration: 6, gain: 0.28 },
        { note: 'B3', time: 30, duration: 6, gain: 0.25 },
        { note: 'D3', time: 36, duration: 10, gain: 0.3 }
      ],
      notesFlute: [
        { note: 'D5', time: 8, duration: 4.0, gain: 0.25 },
        { note: 'C5', time: 14, duration: 3.5, gain: 0.22 },
        { note: 'F5', time: 26, duration: 4.0, gain: 0.25 },
        { note: 'E5', time: 32, duration: 3.5, gain: 0.25 },
        { note: 'D5', time: 38, duration: 6.0, gain: 0.28 }
      ]
    },
    {
      id: 'dung_lost_souls',
      realm: 'dungeon',
      title: 'Labyrinth of Lost Souls',
      subtitle: 'Tense Staccato Lute & Haunting Flute in A Minor',
      tempoBpm: 50,
      totalBeats: 48,
      notesDrone: [
        { note: 'A1', time: 0, duration: 24, gain: 0.4 },
        { note: 'E2', time: 0, duration: 24, gain: 0.3 },
        { note: 'F2', time: 24, duration: 12, gain: 0.38 },
        { note: 'E2', time: 36, duration: 12, gain: 0.4 }
      ],
      notesLute: [
        { note: 'A3', time: 0, duration: 1 }, { note: 'C4', time: 2, duration: 1 }, { note: 'E4', time: 4, duration: 1.5 }, { note: 'D4', time: 6, duration: 1 },
        { note: 'E4', time: 8, duration: 2 }, { note: 'F4', time: 11, duration: 1.5 }, { note: 'E4', time: 13, duration: 2 },
        { note: 'F3', time: 24, duration: 1 }, { note: 'A3', time: 26, duration: 1 }, { note: 'C4', time: 28, duration: 2 },
        { note: 'E3', time: 36, duration: 1.5 }, { note: 'G3', time: 38, duration: 1.5 }, { note: 'B3', time: 40, duration: 2 }, { note: 'A3', time: 42, duration: 5 }
      ],
      notesFlute: [
        { note: 'A4', time: 5, duration: 4.0, gain: 0.26 },
        { note: 'C5', time: 10, duration: 3.5, gain: 0.25 },
        { note: 'B4', time: 15, duration: 4.0, gain: 0.22 },
        { note: 'F5', time: 27, duration: 3.5, gain: 0.25 },
        { note: 'E5', time: 39, duration: 5.5, gain: 0.28 }
      ]
    },
    {
      id: 'dung_torchlight_dark',
      realm: 'dungeon',
      title: 'Torchlight in the Dark',
      subtitle: 'Slow Rhythmic Bass & Tremolo Ambient Chords in E Minor',
      tempoBpm: 48,
      totalBeats: 48,
      notesDrone: [
        { note: 'E2', time: 0, duration: 24, gain: 0.38 },
        { note: 'B1', time: 0, duration: 24, gain: 0.3 },
        { note: 'C2', time: 24, duration: 12, gain: 0.35 },
        { note: 'E2', time: 36, duration: 12, gain: 0.4 }
      ],
      notesOrgan: [
        { note: 'E3', time: 0, duration: 8, gain: 0.25 },
        { note: 'G3', time: 8, duration: 8, gain: 0.25 },
        { note: 'B3', time: 16, duration: 8, gain: 0.22 },
        { note: 'C4', time: 24, duration: 8, gain: 0.25 },
        { note: 'E3', time: 36, duration: 10, gain: 0.3 }
      ],
      notesFlute: [
        { note: 'B4', time: 6, duration: 4.0, gain: 0.25 },
        { note: 'E5', time: 12, duration: 4.5, gain: 0.28 },
        { note: 'D5', time: 20, duration: 3.5, gain: 0.24 },
        { note: 'C5', time: 28, duration: 4.0, gain: 0.25 },
        { note: 'E5', time: 38, duration: 6.0, gain: 0.28 }
      ]
    },
    {
      id: 'dung_forgotten_catacombs',
      realm: 'dungeon',
      title: 'The Forgotten Catacombs',
      subtitle: 'Gothic Resonant Organ & Somber Sub-Bass in G Minor',
      tempoBpm: 44,
      totalBeats: 48,
      notesDrone: [
        { note: 'G2', time: 0, duration: 24, gain: 0.4 },
        { note: 'D2', time: 0, duration: 24, gain: 0.32 },
        { note: 'F2', time: 24, duration: 12, gain: 0.38 },
        { note: 'G2', time: 36, duration: 12, gain: 0.45 }
      ],
      notesOrgan: [
        { note: 'G3', time: 4, duration: 10, gain: 0.3 },
        { note: 'B3', time: 8, duration: 8, gain: 0.26 },
        { note: 'D4', time: 12, duration: 8, gain: 0.24 },
        { note: 'F3', time: 24, duration: 8, gain: 0.3 },
        { note: 'G3', time: 36, duration: 10, gain: 0.32 }
      ],
      notesFlute: [
        { note: 'D5', time: 8, duration: 4.0, gain: 0.25 },
        { note: 'G5', time: 14, duration: 4.0, gain: 0.25 },
        { note: 'F5', time: 26, duration: 3.5, gain: 0.25 },
        { note: 'D5', time: 38, duration: 5.5, gain: 0.28 }
      ]
    }
  ],

  // =============================================================
  // 4. GRAND CATHEDRAL LIBRARY (Original Acclaimed Compositions)
  // =============================================================
  library: [
    {
      id: 'lib_scribes_vigil',
      realm: 'library',
      title: "The Scribe's Vigil",
      subtitle: 'Medieval Lute & Solitary Wood Flute in D Dorian',
      tempoBpm: 64,
      totalBeats: 48,
      notesDrone: [
        { note: 'D2', time: 0, duration: 16, gain: 0.35 },
        { note: 'A2', time: 0, duration: 16, gain: 0.25 },
        { note: 'C2', time: 16, duration: 16, gain: 0.35 },
        { note: 'G2', time: 16, duration: 16, gain: 0.25 },
        { note: 'D2', time: 32, duration: 16, gain: 0.35 },
        { note: 'A2', time: 32, duration: 16, gain: 0.25 }
      ],
      notesLute: [
        { note: 'D3', time: 0, duration: 1.5 }, { note: 'A3', time: 1, duration: 1.2 }, { note: 'F4', time: 2, duration: 1.2 }, { note: 'E4', time: 3, duration: 1.2 },
        { note: 'D4', time: 4, duration: 1.5 }, { note: 'A3', time: 5, duration: 1.2 }, { note: 'F4', time: 6, duration: 1.2 }, { note: 'G4', time: 7, duration: 1.2 },
        { note: 'A4', time: 8, duration: 2.0 }, { note: 'F4', time: 10, duration: 1.2 }, { note: 'E4', time: 12, duration: 1.5 }, { note: 'D4', time: 14, duration: 2.0 },
        { note: 'C3', time: 16, duration: 1.5 }, { note: 'G3', time: 17, duration: 1.2 }, { note: 'E4', time: 18, duration: 1.2 }, { note: 'D4', time: 19, duration: 1.2 },
        { note: 'C4', time: 20, duration: 1.5 }, { note: 'G3', time: 21, duration: 1.2 }, { note: 'E4', time: 22, duration: 1.2 }, { note: 'G4', time: 23, duration: 1.2 },
        { note: 'F4', time: 24, duration: 2.0 }, { note: 'E4', time: 26, duration: 1.5 }, { note: 'D4', time: 28, duration: 1.5 }, { note: 'C4', time: 30, duration: 2.0 },
        { note: 'D3', time: 32, duration: 2.0 }, { note: 'A3', time: 33, duration: 1.5 }, { note: 'F4', time: 34, duration: 1.5 }, { note: 'E4', time: 36, duration: 1.5 },
        { note: 'F4', time: 38, duration: 1.5 }, { note: 'A4', time: 40, duration: 2.0 }, { note: 'G4', time: 42, duration: 1.5 }, { note: 'D4', time: 44, duration: 4.0 }
      ],
      notesFlute: [
        { note: 'A4', time: 4, duration: 3.5 },
        { note: 'G4', time: 8, duration: 2.0 },
        { note: 'F4', time: 10, duration: 2.0 },
        { note: 'E4', time: 12, duration: 4.0 },
        { note: 'C5', time: 20, duration: 3.0 },
        { note: 'B4', time: 23, duration: 2.0 },
        { note: 'A4', time: 25, duration: 3.0 },
        { note: 'G4', time: 28, duration: 4.0 },
        { note: 'D5', time: 34, duration: 3.5 },
        { note: 'E5', time: 38, duration: 2.0 },
        { note: 'F5', time: 40, duration: 2.5 },
        { note: 'E5', time: 42.5, duration: 2.0 },
        { note: 'D5', time: 44.5, duration: 3.5 }
      ]
    },
    {
      id: 'lib_golden_lion_hymn',
      realm: 'library',
      title: 'Hymn of the Golden Lion',
      subtitle: 'Cathedral Organ, Harp & Resonant Chimes in A Minor',
      tempoBpm: 56,
      totalBeats: 48,
      notesOrgan: [
        { note: 'A2', time: 0, duration: 12, gain: 0.35 },
        { note: 'E3', time: 0, duration: 12, gain: 0.28 },
        { note: 'C4', time: 0, duration: 12, gain: 0.22 },
        { note: 'G2', time: 12, duration: 12, gain: 0.35 },
        { note: 'D3', time: 12, duration: 12, gain: 0.28 },
        { note: 'B3', time: 12, duration: 12, gain: 0.22 },
        { note: 'F2', time: 24, duration: 12, gain: 0.35 },
        { note: 'C3', time: 24, duration: 12, gain: 0.28 },
        { note: 'A3', time: 24, duration: 12, gain: 0.22 },
        { note: 'E2', time: 36, duration: 6, gain: 0.35 },
        { note: 'B2', time: 36, duration: 6, gain: 0.28 },
        { note: 'A2', time: 42, duration: 6, gain: 0.4 },
        { note: 'E3', time: 42, duration: 6, gain: 0.3 }
      ],
      notesLute: [
        { note: 'A3', time: 0, duration: 2 }, { note: 'C4', time: 1.5, duration: 2 }, { note: 'E4', time: 3, duration: 2 }, { note: 'A4', time: 4.5, duration: 2 }, { note: 'C5', time: 6, duration: 3 }, { note: 'B4', time: 9, duration: 2 },
        { note: 'G3', time: 12, duration: 2 }, { note: 'B3', time: 13.5, duration: 2 }, { note: 'D4', time: 15, duration: 2 }, { note: 'G4', time: 16.5, duration: 2 }, { note: 'B4', time: 18, duration: 3 }, { note: 'A4', time: 21, duration: 2 },
        { note: 'F3', time: 24, duration: 2 }, { note: 'A3', time: 25.5, duration: 2 }, { note: 'C4', time: 27, duration: 2 }, { note: 'F4', time: 28.5, duration: 2 }, { note: 'A4', time: 30, duration: 3 }, { note: 'G4', time: 33, duration: 2 },
        { note: 'E3', time: 36, duration: 2 }, { note: 'G3', time: 37.5, duration: 2 }, { note: 'B3', time: 39, duration: 2 }, { note: 'E4', time: 40.5, duration: 2 }, { note: 'A3', time: 42, duration: 6 }
      ],
      notesFlute: [
        { note: 'E5', time: 3, duration: 3.5 },
        { note: 'A5', time: 7, duration: 4.0 },
        { note: 'G5', time: 15, duration: 3.0 },
        { note: 'D5', time: 19, duration: 4.0 },
        { note: 'C5', time: 27, duration: 3.5 },
        { note: 'E5', time: 31, duration: 4.0 },
        { note: 'B4', time: 37, duration: 3.0 },
        { note: 'A4', time: 41, duration: 6.0 }
      ]
    },
    {
      id: 'lib_echoes_alexandria',
      realm: 'library',
      title: 'Echoes of Alexandria',
      subtitle: 'Contemplative Lute Solos & Distant Flute Harmonics in E Minor',
      tempoBpm: 60,
      totalBeats: 48,
      notesDrone: [
        { note: 'E2', time: 0, duration: 24, gain: 0.3 },
        { note: 'B2', time: 0, duration: 24, gain: 0.25 },
        { note: 'A2', time: 24, duration: 12, gain: 0.3 },
        { note: 'E2', time: 36, duration: 12, gain: 0.35 }
      ],
      notesLute: [
        { note: 'E3', time: 0, duration: 2 }, { note: 'B3', time: 1, duration: 1.5 }, { note: 'G4', time: 2, duration: 1.5 }, { note: 'F4', time: 3.5, duration: 1.5 },
        { note: 'E4', time: 5, duration: 2 }, { note: 'G4', time: 6.5, duration: 1.5 }, { note: 'B4', time: 8, duration: 2.5 }, { note: 'A4', time: 10.5, duration: 1.5 },
        { note: 'G4', time: 12, duration: 2 }, { note: 'F4', time: 14, duration: 2 }, { note: 'E4', time: 16, duration: 3 }, { note: 'D4', time: 19, duration: 2 },
        { note: 'A3', time: 24, duration: 2 }, { note: 'E4', time: 25.5, duration: 1.5 }, { note: 'C4', time: 27, duration: 1.5 }, { note: 'B3', time: 29, duration: 2 },
        { note: 'C4', time: 31, duration: 2 }, { note: 'E4', time: 33, duration: 2.5 }, { note: 'D4', time: 35.5, duration: 2 },
        { note: 'E3', time: 38, duration: 2 }, { note: 'B3', time: 39.5, duration: 1.5 }, { note: 'G4', time: 41, duration: 2 }, { note: 'E4', time: 43, duration: 5 }
      ],
      notesFlute: [
        { note: 'B4', time: 5, duration: 3 },
        { note: 'E5', time: 8.5, duration: 3.5 },
        { note: 'D5', time: 13, duration: 2.5 },
        { note: 'B4', time: 16, duration: 4 },
        { note: 'A4', time: 27, duration: 3 },
        { note: 'C5', time: 30.5, duration: 3 },
        { note: 'B4', time: 34, duration: 3.5 },
        { note: 'G4', time: 40, duration: 2.5 },
        { note: 'F4', time: 42.5, duration: 2 },
        { note: 'E4', time: 44.5, duration: 3.5 }
      ]
    },
    {
      id: 'lib_starchamber_canticle',
      realm: 'library',
      title: 'The Star-Chamber Canticle',
      subtitle: 'Peaceful Cathedral Flute & Harp Polyphony in G Dorian',
      tempoBpm: 58,
      totalBeats: 48,
      notesOrgan: [
        { note: 'G2', time: 0, duration: 16, gain: 0.32 },
        { note: 'D3', time: 0, duration: 16, gain: 0.25 },
        { note: 'F2', time: 16, duration: 16, gain: 0.32 },
        { note: 'C3', time: 16, duration: 16, gain: 0.25 },
        { note: 'G2', time: 32, duration: 16, gain: 0.35 },
        { note: 'D3', time: 32, duration: 16, gain: 0.28 }
      ],
      notesLute: [
        { note: 'G3', time: 0, duration: 1.8 }, { note: 'D4', time: 1.2, duration: 1.5 }, { note: 'B3', time: 2.4, duration: 1.5 }, { note: 'C4', time: 3.6, duration: 1.5 },
        { note: 'D4', time: 4.8, duration: 2.0 }, { note: 'F4', time: 6.5, duration: 1.5 }, { note: 'G4', time: 8, duration: 2.5 }, { note: 'F4', time: 11, duration: 2 },
        { note: 'D4', time: 13, duration: 2 }, { note: 'C4', time: 15, duration: 2 },
        { note: 'F3', time: 16, duration: 1.8 }, { note: 'C4', time: 17.5, duration: 1.5 }, { note: 'A3', time: 19, duration: 1.5 }, { note: 'B3', time: 20.5, duration: 1.5 },
        { note: 'C4', time: 22, duration: 2.0 }, { note: 'E4', time: 24, duration: 1.5 }, { note: 'F4', time: 26, duration: 2.5 }, { note: 'E4', time: 29, duration: 2 },
        { note: 'C4', time: 31, duration: 2 },
        { note: 'G3', time: 32, duration: 2 }, { note: 'D4', time: 33.5, duration: 1.5 }, { note: 'F4', time: 35, duration: 1.5 }, { note: 'G4', time: 37, duration: 3 },
        { note: 'A4', time: 40, duration: 2.5 }, { note: 'G4', time: 43, duration: 5 }
      ],
      notesFlute: [
        { note: 'D5', time: 4, duration: 3.5 },
        { note: 'G5', time: 8, duration: 4.0 },
        { note: 'F5', time: 13, duration: 3.0 },
        { note: 'D5', time: 16.5, duration: 4.0 },
        { note: 'C5', time: 22, duration: 3.5 },
        { note: 'F5', time: 26, duration: 3.5 },
        { note: 'E5', time: 30, duration: 3.0 },
        { note: 'G5', time: 36, duration: 3.5 },
        { note: 'A5', time: 40, duration: 2.5 },
        { note: 'G5', time: 43, duration: 4.5 }
      ]
    }
  ]
};

export class LibraryMusicManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private reverbConvolver: ConvolverNode | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.7;

  private isPlaying: boolean = false;
  public currentRealm: 'title' | 'surface' | 'dungeon' | 'library' = 'title';

  private shuffledPlaylists: Record<'title' | 'surface' | 'dungeon' | 'library', number[]> = {
    title: [],
    surface: [],
    dungeon: [],
    library: []
  };
  private currentTrackIndices: Record<'title' | 'surface' | 'dungeon' | 'library', number> = {
    title: 0,
    surface: 0,
    dungeon: 0,
    library: 0
  };

  private scheduleTimer: number | null = null;

  public onTrackChange?: (title: string, subtitle: string) => void;

  constructor() {
    this.initAllPlaylists();
  }

  private initAllPlaylists(): void {
    (['title', 'surface', 'dungeon', 'library'] as const).forEach((realm) => {
      this.initPlaylist(realm);
    });
  }

  private initPlaylist(realm: 'title' | 'surface' | 'dungeon' | 'library'): void {
    const list = REALM_TRACKS[realm];
    const indices = list.map((_, i) => i);
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    this.shuffledPlaylists[realm] = indices;
    this.currentTrackIndices[realm] = 0;
  }

  public ensureAudioContext(): boolean {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return false;
      this.ctx = new AudioContextClass();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);

      // Algorithmic Cathedral Reverb (Convolver)
      this.reverbConvolver = this.createCathedralReverb(this.ctx);

      const dryGain = this.ctx.createGain();
      dryGain.gain.setValueAtTime(0.7, this.ctx.currentTime);

      const wetGain = this.ctx.createGain();
      wetGain.gain.setValueAtTime(0.65, this.ctx.currentTime);

      this.masterGain.connect(dryGain);
      dryGain.connect(this.ctx.destination);

      if (this.reverbConvolver) {
        this.masterGain.connect(this.reverbConvolver);
        this.reverbConvolver.connect(wetGain);
        wetGain.connect(this.ctx.destination);
      }
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }

    return true;
  }

  private createCathedralReverb(ctx: AudioContext): ConvolverNode {
    const rate = ctx.sampleRate;
    const length = rate * 3.2; // 3.2 seconds reverb decay
    const decay = 2.8;
    const impulse = ctx.createBuffer(2, length, rate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const t = i / rate;
      const env = Math.exp(-t * decay);
      const noiseL = (Math.random() * 2 - 1) * env;
      const noiseR = (Math.random() * 2 - 1) * env;
      left[i] = noiseL;
      right[i] = noiseR;
    }

    const convolver = ctx.createConvolver();
    convolver.buffer = impulse;
    return convolver;
  }

  public setVolume(vol: number): void {
    this.volume = THREE_MathClamp(vol, 0, 1);
    if (this.ctx && this.masterGain && !this.isMuted) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.1);
    }
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.ctx && this.masterGain) {
      const target = this.isMuted ? 0.0001 : this.volume;
      this.masterGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.2);
    }
  }

  /**
   * Seamlessly set active realm soundtrack (title, surface, dungeon, library)
   */
  public setRealm(realm: 'title' | 'surface' | 'dungeon' | 'library'): void {
    if (this.currentRealm === realm && this.isPlaying) return;

    this.currentRealm = realm;
    this.ensureAudioContext();

    if (this.scheduleTimer !== null) {
      window.clearTimeout(this.scheduleTimer);
      this.scheduleTimer = null;
    }

    this.isPlaying = false;
    this.playNextShuffledTrack();

    if (this.ctx && this.masterGain && !this.isMuted) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.8);
    }
  }

  // Backwards compatibility for previous calls
  public setLibraryMode(active: boolean): void {
    if (active) {
      this.setRealm('library');
    }
  }

  private playNextShuffledTrack(): void {
    if (!this.ensureAudioContext() || !this.ctx || !this.masterGain) return;

    const realm = this.currentRealm;
    const playlist = REALM_TRACKS[realm];
    let shuffled = this.shuffledPlaylists[realm];

    if (!shuffled || shuffled.length === 0) {
      this.initPlaylist(realm);
      shuffled = this.shuffledPlaylists[realm];
    }

    let trackIdx = this.currentTrackIndices[realm];
    if (trackIdx >= shuffled.length) {
      this.initPlaylist(realm);
      shuffled = this.shuffledPlaylists[realm];
      trackIdx = 0;
    }

    const actualTrackIndex = shuffled[trackIdx];
    const track = playlist[actualTrackIndex];

    this.currentTrackIndices[realm] = (trackIdx + 1) % shuffled.length;

    if (this.onTrackChange) {
      this.onTrackChange(track.title, track.subtitle);
    }

    this.scheduleTrack(track);
  }

  private scheduleTrack(track: MedievalTrack): void {
    if (!this.ctx || !this.masterGain) return;

    this.isPlaying = true;
    const scheduledRealm = this.currentRealm;
    const now = this.ctx.currentTime + 0.08;
    const secondsPerBeat = 60 / track.tempoBpm;
    const totalDurationSeconds = track.totalBeats * secondsPerBeat;

    // 1. Lute / Harp Strings
    if (track.notesLute) {
      track.notesLute.forEach((n) => {
        const startTime = now + n.time * secondsPerBeat;
        const dur = n.duration * secondsPerBeat;
        this.playLuteString(n.note, startTime, dur, n.gain ?? 0.45);
      });
    }

    // 2. Wood Flute Melodies
    if (track.notesFlute) {
      track.notesFlute.forEach((n) => {
        const startTime = now + n.time * secondsPerBeat;
        const dur = n.duration * secondsPerBeat;
        this.playFluteNote(n.note, startTime, dur, n.gain ?? 0.35);
      });
    }

    // 3. Cathedral Pipe Organ
    if (track.notesOrgan) {
      track.notesOrgan.forEach((n) => {
        const startTime = now + n.time * secondsPerBeat;
        const dur = n.duration * secondsPerBeat;
        this.playOrganNote(n.note, startTime, dur, n.gain ?? 0.3);
      });
    }

    // 4. Drone Bases
    if (track.notesDrone) {
      track.notesDrone.forEach((n) => {
        const startTime = now + n.time * secondsPerBeat;
        const dur = n.duration * secondsPerBeat;
        this.playDroneNote(n.note, startTime, dur, n.gain ?? 0.3);
      });
    }

    // Schedule next track transition
    if (this.scheduleTimer !== null) {
      window.clearTimeout(this.scheduleTimer);
    }

    this.scheduleTimer = window.setTimeout(() => {
      if (this.currentRealm === scheduledRealm) {
        this.playNextShuffledTrack();
      } else {
        this.isPlaying = false;
      }
    }, (totalDurationSeconds + 1.2) * 1000);
  }

  private playLuteString(noteName: string, startTime: number, duration: number, gainLevel: number): void {
    if (!this.ctx || !this.masterGain) return;
    const freq = NOTE_FREQS[noteName];
    if (!freq) return;

    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    const subOsc = this.ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(freq * 2, startTime);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(2800, freq * 5), startTime);
    filter.frequency.exponentialRampToValueAtTime(Math.max(400, freq * 1.5), startTime + duration);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(gainLevel * 0.4, startTime + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    subOsc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    subOsc.start(startTime);
    osc.stop(startTime + duration + 0.05);
    subOsc.stop(startTime + duration + 0.05);
  }

  private playFluteNote(noteName: string, startTime: number, duration: number, gainLevel: number): void {
    if (!this.ctx || !this.masterGain) return;
    const freq = NOTE_FREQS[noteName];
    if (!freq) return;

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(5.2, startTime);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(freq * 0.015, startTime);
    lfo.connect(osc.frequency);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1900, startTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(gainLevel * 0.35, startTime + 0.12);
    gain.gain.setValueAtTime(gainLevel * 0.32, startTime + duration - 0.25);
    gain.gain.linearRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    lfo.start(startTime);
    osc.start(startTime);
    lfo.stop(startTime + duration);
    osc.stop(startTime + duration + 0.05);
  }

  private playOrganNote(noteName: string, startTime: number, duration: number, gainLevel: number): void {
    if (!this.ctx || !this.masterGain) return;
    const freq = NOTE_FREQS[noteName];
    if (!freq) return;

    const osc1 = this.ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, startTime);

    const osc2 = this.ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, startTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(gainLevel * 0.28, startTime + 0.25);
    gain.gain.setValueAtTime(gainLevel * 0.25, startTime + duration - 0.3);
    gain.gain.linearRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.1);
    osc2.stop(startTime + duration + 0.1);
  }

  private playDroneNote(noteName: string, startTime: number, duration: number, gainLevel: number): void {
    if (!this.ctx || !this.masterGain) return;
    const freq = NOTE_FREQS[noteName];
    if (!freq) return;

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(gainLevel * 0.35, startTime + 0.8);
    gain.gain.setValueAtTime(gainLevel * 0.30, startTime + duration - 1.0);
    gain.gain.linearRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.2);
  }
}

function THREE_MathClamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}
