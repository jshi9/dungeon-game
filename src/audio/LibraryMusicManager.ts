/**
 * Medieval Audio Engine & Library Music Manager
 * Procedural Web Audio API synthesizer generating peaceful, authentic medieval ambient music on shuffled repeat.
 */

export interface MedievalTrack {
  id: string;
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
  'C2': 65.41, 'D2': 73.42, 'E2': 82.41, 'F2': 87.31, 'G2': 98.00, 'A2': 110.00, 'B2': 123.47,
  'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
  'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
  'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00, 'B5': 987.77,
  'C6': 1046.50, 'D6': 1174.66
};

// -------------------------------------------------------------
// CALM MEDIEVAL COMPOSITIONS (Dorian / Aeolian / Modal)
// -------------------------------------------------------------

const TRACKS: MedievalTrack[] = [
  // 1. "The Scribe's Vigil" (D Dorian - Lute & Wood Flute)
  {
    id: 'scribes_vigil',
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
      // D Dorian Arpeggios
      { note: 'D3', time: 0, duration: 1.5 }, { note: 'A3', time: 1, duration: 1.2 }, { note: 'F4', time: 2, duration: 1.2 }, { note: 'E4', time: 3, duration: 1.2 },
      { note: 'D4', time: 4, duration: 1.5 }, { note: 'A3', time: 5, duration: 1.2 }, { note: 'F4', time: 6, duration: 1.2 }, { note: 'G4', time: 7, duration: 1.2 },
      { note: 'A4', time: 8, duration: 2.0 }, { note: 'F4', time: 10, duration: 1.2 }, { note: 'E4', time: 12, duration: 1.5 }, { note: 'D4', time: 14, duration: 2.0 },

      // C Major / Am turnaround
      { note: 'C3', time: 16, duration: 1.5 }, { note: 'G3', time: 17, duration: 1.2 }, { note: 'E4', time: 18, duration: 1.2 }, { note: 'D4', time: 19, duration: 1.2 },
      { note: 'C4', time: 20, duration: 1.5 }, { note: 'G3', time: 21, duration: 1.2 }, { note: 'E4', time: 22, duration: 1.2 }, { note: 'G4', time: 23, duration: 1.2 },
      { note: 'F4', time: 24, duration: 2.0 }, { note: 'E4', time: 26, duration: 1.5 }, { note: 'D4', time: 28, duration: 1.5 }, { note: 'C4', time: 30, duration: 2.0 },

      // D Dorian Resolution
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

  // 2. "Hymn of the Golden Lion" (A Aeolian - Cathedral Organ, Harp & Celestial Chimes)
  {
    id: 'golden_lion_hymn',
    title: 'Hymn of the Golden Lion',
    subtitle: 'Cathedral Organ, Harp & Resonant Chimes in A Minor',
    tempoBpm: 56,
    totalBeats: 48,
    notesOrgan: [
      // Am
      { note: 'A2', time: 0, duration: 12, gain: 0.35 },
      { note: 'E3', time: 0, duration: 12, gain: 0.28 },
      { note: 'C4', time: 0, duration: 12, gain: 0.22 },
      // G
      { note: 'G2', time: 12, duration: 12, gain: 0.35 },
      { note: 'D3', time: 12, duration: 12, gain: 0.28 },
      { note: 'B3', time: 12, duration: 12, gain: 0.22 },
      // F
      { note: 'F2', time: 24, duration: 12, gain: 0.35 },
      { note: 'C3', time: 24, duration: 12, gain: 0.28 },
      { note: 'A3', time: 24, duration: 12, gain: 0.22 },
      // E / Am
      { note: 'E2', time: 36, duration: 6, gain: 0.35 },
      { note: 'B2', time: 36, duration: 6, gain: 0.28 },
      { note: 'A2', time: 42, duration: 6, gain: 0.4 },
      { note: 'E3', time: 42, duration: 6, gain: 0.3 }
    ],
    notesLute: [
      // Gentle Harp Arpeggiations
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

  // 3. "Echoes of Alexandria" (E Minor / Contemplative Lute & Bell Chimes)
  {
    id: 'echoes_alexandria',
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

  // 4. "The Star-Chamber Canticle" (G Dorian - Peaceful Cathedral Polyphony)
  {
    id: 'starchamber_canticle',
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
];

export class LibraryMusicManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private reverbConvolver: ConvolverNode | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.7;

  private isPlaying: boolean = false;
  private isLibraryMode: boolean = false;

  private shuffledPlaylist: number[] = [];
  private currentTrackIndex: number = 0;
  private scheduleTimer: number | null = null;

  public onTrackChange?: (title: string, subtitle: string) => void;

  constructor() {
    this.initPlaylist();
  }

  private initPlaylist(): void {
    const indices = TRACKS.map((_, i) => i);
    // Fisher-Yates shuffle
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    this.shuffledPlaylist = indices;
    this.currentTrackIndex = 0;
  }

  private ensureAudioContext(): boolean {
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

  /**
   * Procedural Cathedral Impulse Response Generator (Lush 3.2-second tail)
   */
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
      // Soft early reflections + smooth gaussian noise tail
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
    if (this.ctx && this.masterGain && this.isLibraryMode && !this.isMuted) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.1);
    }
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.ctx && this.masterGain) {
      const target = this.isMuted || !this.isLibraryMode ? 0.0001 : this.volume;
      this.masterGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.2);
    }
  }

  /**
   * Called when entering/exiting Library mode
   */
  public setLibraryMode(active: boolean): void {
    this.isLibraryMode = active;

    if (active) {
      this.ensureAudioContext();
      if (!this.isPlaying) {
        this.playNextShuffledTrack();
      }
      if (this.ctx && this.masterGain && !this.isMuted) {
        this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 1.2);
      }
    } else {
      // Fade out smoothly when leaving the library
      if (this.ctx && this.masterGain) {
        this.masterGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 1.0);
      }
    }
  }

  private playNextShuffledTrack(): void {
    if (!this.ensureAudioContext() || !this.ctx || !this.masterGain) return;

    if (this.shuffledPlaylist.length === 0) {
      this.initPlaylist();
    }

    const trackIndex = this.shuffledPlaylist[this.currentTrackIndex];
    const track = TRACKS[trackIndex];

    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.shuffledPlaylist.length;
    if (this.currentTrackIndex === 0) {
      this.initPlaylist(); // Reshuffle after full cycle
    }

    if (this.onTrackChange) {
      this.onTrackChange(track.title, track.subtitle);
    }

    this.scheduleTrack(track);
  }

  private scheduleTrack(track: MedievalTrack): void {
    if (!this.ctx || !this.masterGain) return;

    this.isPlaying = true;
    const now = this.ctx.currentTime + 0.1;
    const secondsPerBeat = 60 / track.tempoBpm;
    const totalDurationSeconds = track.totalBeats * secondsPerBeat;

    // 1. Schedule Lute / Harp Plucks
    if (track.notesLute) {
      track.notesLute.forEach((n) => {
        const startTime = now + n.time * secondsPerBeat;
        const dur = n.duration * secondsPerBeat;
        this.playLuteString(n.note, startTime, dur, n.gain ?? 0.45);
      });
    }

    // 2. Schedule Wood Flute Melodies
    if (track.notesFlute) {
      track.notesFlute.forEach((n) => {
        const startTime = now + n.time * secondsPerBeat;
        const dur = n.duration * secondsPerBeat;
        this.playFluteNote(n.note, startTime, dur, n.gain ?? 0.35);
      });
    }

    // 3. Schedule Cathedral Organ Chords
    if (track.notesOrgan) {
      track.notesOrgan.forEach((n) => {
        const startTime = now + n.time * secondsPerBeat;
        const dur = n.duration * secondsPerBeat;
        this.playOrganNote(n.note, startTime, dur, n.gain ?? 0.3);
      });
    }

    // 4. Schedule Warm Drone Bases
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
      if (this.isLibraryMode) {
        this.playNextShuffledTrack();
      } else {
        this.isPlaying = false;
      }
    }, (totalDurationSeconds + 1.5) * 1000);
  }

  /**
   * Synthesize Plucked Lute / Harp String
   */
  private playLuteString(noteName: string, startTime: number, duration: number, gainLevel: number): void {
    if (!this.ctx || !this.masterGain) return;
    const freq = NOTE_FREQS[noteName];
    if (!freq) return;

    const osc = this.ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    // Subtle 2nd harmonic sine for string body resonance
    const subOsc = this.ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(freq * 2, startTime);

    // Lowpass filter simulates wooden lute cavity
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(2800, freq * 5), startTime);
    filter.frequency.exponentialRampToValueAtTime(Math.max(400, freq * 1.5), startTime + duration);

    const gain = this.ctx.createGain();
    // Fast attack pluck
    gain.gain.setValueAtTime(0.0001, startTime);
    gain.gain.linearRampToValueAtTime(gainLevel * 0.4, startTime + 0.005);
    // Exponential string decay
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

  /**
   * Synthesize Medieval Wood Flute / Recorder with gentle breath vibrato
   */
  private playFluteNote(noteName: string, startTime: number, duration: number, gainLevel: number): void {
    if (!this.ctx || !this.masterGain) return;
    const freq = NOTE_FREQS[noteName];
    if (!freq) return;

    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    // Flute Vibrato LFO
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(5.2, startTime); // 5.2 Hz vibrato
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(freq * 0.015, startTime);
    lfo.connect(osc.frequency);

    // Warm Lowpass Filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1900, startTime);

    const gain = this.ctx.createGain();
    // Gentle breath envelope
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

  /**
   * Synthesize Cathedral Pipe Organ Timbre (Multi-octave rank)
   */
  private playOrganNote(noteName: string, startTime: number, duration: number, gainLevel: number): void {
    if (!this.ctx || !this.masterGain) return;
    const freq = NOTE_FREQS[noteName];
    if (!freq) return;

    // 8' fundamental + 4' octave flute stops
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

  /**
   * Synthesize Soft Resonant Cathedral Drone Bass
   */
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
