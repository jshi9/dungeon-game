/**
 * Generative SVG Diagram Engine for Medieval & Scientific Books
 * Generates vector graphics with antique parchment styling, crisp lines, geometric compass arcs,
 * and mathematical annotations.
 */
export class SvgDiagramGenerator {
  public static generateDiagram(diagramType: string, title: string, caption: string, seed: number): string {
    const type = diagramType.toUpperCase();
    let svgBody = '';

    if (type.includes('GOTHIC') || type.includes('ARCH') || type.includes('KEYSTONE') || type.includes('STRESS') || type.includes('MASONRY')) {
      svgBody = this.renderGothicArchSvg(seed);
    } else if (type.includes('ASTROLABE') || type.includes('CELESTIAL') || type.includes('MERIDIAN') || type.includes('ORBITAL') || type.includes('ASTRAL')) {
      svgBody = this.renderAstrolabeSvg(seed);
    } else if (type.includes('CRUCIBLE') || type.includes('ALCHEMICAL') || type.includes('RETORT') || type.includes('METALLURGY') || type.includes('SMELTING')) {
      svgBody = this.renderCrucibleSvg(seed);
    } else if (type.includes('PRISM') || type.includes('OPTICAL') || type.includes('REFRACTION') || type.includes('DISPERSION') || type.includes('LIGHT')) {
      svgBody = this.renderOpticalPrismSvg(seed);
    } else if (type.includes('CIPHER') || type.includes('LATTICE') || type.includes('RUNIC') || type.includes('CRYPT') || type.includes('SEAL')) {
      svgBody = this.renderCipherLatticeSvg(seed);
    } else if (type.includes('WAVE') || type.includes('HARMONIC') || type.includes('RESONANCE') || type.includes('ETHERIC')) {
      svgBody = this.renderWaveDispersionSvg(seed);
    } else if (type.includes('FLOORPLAN') || type.includes('VAULT') || type.includes('DUNGEON') || type.includes('BLUEPRINT')) {
      svgBody = this.renderVaultFloorplanSvg(seed);
    } else {
      svgBody = this.renderSyllogismEulerSvg(seed);
    }

    // Return as a single clean HTML string without newlines
    const cleanSvg = svgBody.replace(/[\r\n]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
    const cleanCaption = caption ? `<div class="diagram-caption">❧ ${caption}</div>` : '';

    return `<div class="medieval-diagram-box"><div class="diagram-title">✦ ${title} ✦</div><div class="diagram-svg-container">${cleanSvg}</div>${cleanCaption}</div>`;
  }

  /**
   * 1. Gothic Arch & Keystone Biaxial Stress Vector Diagram
   */
  private static renderGothicArchSvg(_seed: number): string {
    return `
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowRed" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#9e2a1e" />
          </marker>
          <marker id="arrowBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#1b4970" />
          </marker>
        </defs>

        <!-- Baseline Floor -->
        <line x1="30" y1="135" x2="350" y2="135" stroke="#4a2e18" stroke-width="2" stroke-dasharray="4,3" />
        <text x="190" y="148" font-family="Georgia, serif" font-size="8.5" fill="#5a3818" text-anchor="middle">Level Y=0 (Paved Marble Nave Foundation)</text>

        <!-- Vertical Impost Columns -->
        <rect x="70" y="70" width="24" height="65" fill="#e8d5b5" stroke="#4a2e18" stroke-width="1.5" />
        <rect x="286" y="70" width="24" height="65" fill="#e8d5b5" stroke="#4a2e18" stroke-width="1.5" />

        <!-- Pointed Arch Voussoir Ribs -->
        <path d="M82,70 A140,140 0 0,1 190,18 A140,140 0 0,1 298,70" fill="none" stroke="#4a2e18" stroke-width="2.5" />
        <path d="M94,70 A120,120 0 0,1 190,32 A120,120 0 0,1 286,70" fill="none" stroke="#4a2e18" stroke-width="1" stroke-dasharray="2,2" />

        <!-- Keystone Block at Apex -->
        <polygon points="178,14 202,14 198,34 182,34" fill="#d99f36" stroke="#4a2e18" stroke-width="1.5" />
        <text x="190" y="10" font-family="'Cinzel', Georgia, serif" font-size="8.5" font-weight="bold" fill="#731f14" text-anchor="middle">Keystone [σ = 48.5 MPa]</text>

        <!-- Compressive Force Vector F_c (Red Arrow along Rib) -->
        <line x1="182" y1="36" x2="115" y2="82" stroke="#9e2a1e" stroke-width="2" marker-end="url(#arrowRed)" />
        <text x="135" y="52" font-family="Georgia, serif" font-style="italic" font-size="9" fill="#9e2a1e">F_compressive</text>

        <!-- Lateral Thrust Vector T_h (Blue Arrow to Right Abutment) -->
        <line x1="298" y1="70" x2="345" y2="70" stroke="#1b4970" stroke-width="2" marker-end="url(#arrowBlue)" />
        <text x="325" y="62" font-family="Georgia, serif" font-style="italic" font-size="9" fill="#1b4970">T_thrust</text>

        <!-- Center Angle Arc α = 45° -->
        <path d="M190,70 L230,70 A40,40 0 0,0 218,42 Z" fill="rgba(122,85,24,0.15)" stroke="#7a5518" stroke-width="1" />
        <text x="238" y="58" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#7a5518">α = 45°12'</text>
        <line x1="190" y1="20" x2="190" y2="135" stroke="#7a5518" stroke-width="0.8" stroke-dasharray="2,2" />
      </svg>
    `;
  }

  /**
   * 2. Celestial Astrolabe & Armillary Ring Precession
   */
  private static renderAstrolabeSvg(_seed: number): string {
    return `
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowAst" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#8c581e" />
          </marker>
        </defs>

        <!-- Outer Brass Mater Ring -->
        <circle cx="190" cy="78" r="66" fill="none" stroke="#5a3818" stroke-width="2.5" />
        <circle cx="190" cy="78" r="60" fill="rgba(245,230,200,0.3)" stroke="#7a4e20" stroke-width="1" stroke-dasharray="2,2" />

        <!-- Meridian Tilted Ellipse (Equinoctial Precession Ring) -->
        <ellipse cx="190" cy="78" rx="60" ry="24" transform="rotate(-23.5 190 78)" fill="none" stroke="#943124" stroke-width="2" />

        <!-- Celestial Coordinate Axes -->
        <line x1="190" y1="10" x2="190" y2="146" stroke="#4a2e18" stroke-width="1.2" stroke-dasharray="3,3" />
        <line x1="120" y1="78" x2="260" y2="78" stroke="#4a2e18" stroke-width="1.2" stroke-dasharray="3,3" />

        <!-- Center Pivot Finial Pin -->
        <circle cx="190" cy="78" r="4.5" fill="#d99f36" stroke="#4a2e18" stroke-width="1.5" />

        <!-- Fixed Star Markers (Spica, Vega) -->
        <polygon points="160,54 162,59 167,59 163,62 165,67 160,64 155,67 157,62 153,59 158,59" fill="#9e2a1e" />
        <text x="142" y="50" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#9e2a1e">Vega (α-Lyr)</text>

        <polygon points="228,88 230,93 235,93 231,96 233,101 228,98 223,101 225,96 221,93 226,93" fill="#1b4970" />
        <text x="238" y="94" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#1b4970">Spica (α-Vir)</text>

        <!-- Precession Rotation Vector -->
        <path d="M245,55 A60,60 0 0,1 252,85" fill="none" stroke="#8c581e" stroke-width="2" marker-end="url(#arrowAst)" />
        <text x="256" y="68" font-family="Georgia, serif" font-size="9" font-weight="bold" fill="#6d4414">ω_prec</text>

        <!-- Axis Labels -->
        <text x="190" y="8" font-family="'Cinzel', Georgia, serif" font-size="8" font-weight="bold" fill="#4a2e18" text-anchor="middle">North Celestial Pole (Nadir Y)</text>
      </svg>
    `;
  }

  /**
   * 3. Alchemical Crucible & Distillation Retort
   */
  private static renderCrucibleSvg(_seed: number): string {
    return `
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#b83218" />
            <stop offset="60%" stop-color="#e38c20" />
            <stop offset="100%" stop-color="#f5df58" />
          </linearGradient>
        </defs>

        <!-- Tripod Furnace Stand -->
        <path d="M105,140 L120,95 L170,95 L185,140" fill="none" stroke="#3d2919" stroke-width="2.2" />
        <line x1="113" y1="118" x2="177" y2="118" stroke="#3d2919" stroke-width="1.5" />

        <!-- Transmutation Hearth Fire -->
        <path d="M130,136 Q145,102 145,115 Q148,98 152,112 Q158,100 160,136 Z" fill="url(#flameGrad)" />

        <!-- Alembic Cucurbit Flask -->
        <circle cx="145" cy="72" r="28" fill="rgba(240,225,200,0.5)" stroke="#4a2e18" stroke-width="1.8" />
        <rect x="140" y="24" width="10" height="24" fill="rgba(240,225,200,0.5)" stroke="#4a2e18" stroke-width="1.5" />

        <!-- Curved Condenser Delivery Neck -->
        <path d="M145,26 C155,10 210,12 245,70 L255,90" fill="none" stroke="#4a2e18" stroke-width="2.5" />

        <!-- Receiver Flask on Stand -->
        <path d="M246,90 L264,90 L278,132 L232,132 Z" fill="rgba(240,225,200,0.5)" stroke="#4a2e18" stroke-width="1.8" />
        <rect x="228" y="132" width="54" height="6" fill="#8c581e" stroke="#3d2919" stroke-width="1" />

        <!-- Alchemical Symbols -->
        <text x="145" y="78" font-family="Georgia, serif" font-size="14" font-weight="bold" fill="#781a0e" text-anchor="middle">☉</text>
        <text x="255" y="122" font-family="Georgia, serif" font-size="13" font-weight="bold" fill="#1b4970" text-anchor="middle">☿</text>

        <text x="60" y="50" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#5a3d24">🜂 Vapor Condenser</text>
        <text x="275" y="60" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#5a3d24">Reflux Column</text>
        <text x="290" y="120" font-family="Georgia, serif" font-size="8" fill="#781a0e">ΔG &lt; 0 (Precipitate)</text>
      </svg>
    `;
  }

  /**
   * 4. Optical Prism Spectral Dispersion
   */
  private static renderOpticalPrismSvg(_seed: number): string {
    return `
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <!-- Triangular Optical Glass Prism -->
        <polygon points="190,16 110,132 270,132" fill="rgba(230,240,250,0.5)" stroke="#3a4856" stroke-width="2" />

        <!-- Incident White Light Beam -->
        <line x1="30" y1="88" x2="148" y2="76" stroke="#8c6227" stroke-width="2.5" />
        <text x="35" y="76" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#6d4f1c">Incident Ray (λ=589nm)</text>

        <!-- Refracted Rays inside Glass -->
        <line x1="148" y1="76" x2="226" y2="72" stroke="#c42518" stroke-width="1.5" />
        <line x1="148" y1="76" x2="230" y2="82" stroke="#256b35" stroke-width="1.5" />
        <line x1="148" y1="76" x2="234" y2="92" stroke="#5d1ea8" stroke-width="1.5" />

        <!-- Dispersed Spectral Rays exiting right face -->
        <line x1="226" y1="72" x2="350" y2="48" stroke="#bd1a0d" stroke-width="2" />
        <text x="355" y="52" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#bd1a0d">Red (700nm)</text>

        <line x1="230" y1="82" x2="350" y2="78" stroke="#2b753a" stroke-width="2" />
        <text x="355" y="82" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#2b753a">Green (530nm)</text>

        <line x1="234" y1="92" x2="350" y2="114" stroke="#5d1ea8" stroke-width="2" />
        <text x="355" y="118" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#5d1ea8">Violet (400nm)</text>

        <!-- Angle of Dispersion Annotations -->
        <path d="M250,72 A35,35 0 0,1 254,94" fill="none" stroke="#4a2e18" stroke-width="1" stroke-dasharray="2,2" />
        <text x="260" y="86" font-family="Georgia, serif" font-size="8" font-style="italic" fill="#4a2e18">δθ = 3°42'</text>
      </svg>
    `;
  }

  /**
   * 5. 4x4 Cryptographic Runic Substitution Cipher Lattice
   */
  private static renderCipherLatticeSvg(_seed: number): string {
    const runes = [
      ['𝒩₁₁', 'ᚱ', 'ᚦ', '𝒩₁₄'],
      ['𝒩₂₁', '✦', '✦', '𝒩₂₄'],
      ['𝒩₃₁', '✦', '✦', '𝒩₃₄'],
      ['𝒩₄₁', 'ᛋ', 'ᛏ', '𝒩₄₄']
    ];

    let cells = '';
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        const x = 115 + c * 38;
        const y = 14 + r * 32;
        const isCore = (r === 1 || r === 2) && (c === 1 || c === 2);
        const fill = isCore ? 'rgba(166, 36, 36, 0.12)' : 'rgba(215, 185, 140, 0.25)';
        cells += `<rect x="${x}" y="${y}" width="36" height="30" fill="${fill}" stroke="#5a3818" stroke-width="1.2" rx="2" /><text x="${x + 18}" y="${y + 20}" font-family="'Cinzel', Georgia, serif" font-size="12" font-weight="bold" fill="${isCore ? '#8c2418' : '#3d2510'}" text-anchor="middle">${runes[r][c]}</text>`;
      }
    }

    return `
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        ${cells}
        <rect x="110" y="10" width="158" height="134" fill="none" stroke="#8c6227" stroke-width="2" rx="4" />
        <text x="55" y="45" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#6d4414">Det(M) = 65537</text>
        <text x="45" y="80" font-family="Georgia, serif" font-size="8" fill="#7a2a1a">Modular Hash:</text>
        <text x="45" y="94" font-family="Georgia, serif" font-size="8" font-style="italic" fill="#7a2a1a">H(M) ≡ M^e (mod N)</text>
        <text x="278" y="45" font-family="Georgia, serif" font-size="8" fill="#1b4970">GCD(e, φ(N)) = 1</text>
        <text x="278" y="80" font-family="Georgia, serif" font-size="8" font-weight="bold" fill="#1b4970">Key Inversion:</text>
        <text x="278" y="94" font-family="Georgia, serif" font-size="8" font-style="italic" fill="#1b4970">d ≡ e⁻¹ (mod φ(N))</text>
      </svg>
    `;
  }

  /**
   * 6. Harmonic Wave Dispersion & Envelope
   */
  private static renderWaveDispersionSvg(_seed: number): string {
    return `
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowWave" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#4a2e18" />
          </marker>
        </defs>

        <!-- Coordinate Axes -->
        <line x1="40" y1="80" x2="350" y2="80" stroke="#4a2e18" stroke-width="1.4" marker-end="url(#arrowWave)" />
        <line x1="60" y1="140" x2="60" y2="15" stroke="#4a2e18" stroke-width="1.4" marker-end="url(#arrowWave)" />
        <text x="355" y="84" font-family="Georgia, serif" font-size="8.5" fill="#4a2e18">t</text>
        <text x="60" y="10" font-family="Georgia, serif" font-size="8.5" fill="#4a2e18" text-anchor="middle">Ψ(x,t)</text>

        <!-- Waveform Envelope -->
        <path d="M60,35 Q190,18 330,68" fill="none" stroke="#9e2a1e" stroke-width="1.4" stroke-dasharray="3,3" />
        <path d="M60,125 Q190,142 330,92" fill="none" stroke="#9e2a1e" stroke-width="1.4" stroke-dasharray="3,3" />

        <!-- Carrier Wave -->
        <path d="M60,80 Q75,35 90,80 T120,80 T150,80 T180,80 T210,80 T240,80 T270,80 T300,80 T330,80" fill="none" stroke="#1b4970" stroke-width="2" />

        <!-- Velocity Indicators -->
        <line x1="160" y1="40" x2="220" y2="40" stroke="#8c581e" stroke-width="2" marker-end="url(#arrowWave)" />
        <text x="190" y="32" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#8c581e" text-anchor="middle">Group Velocity v_g</text>

        <text x="90" y="142" font-family="Georgia, serif" font-size="8" fill="#1b4970">λ₁ = 432 Hz</text>
        <text x="230" y="142" font-family="Georgia, serif" font-size="8" fill="#1b4970">λ₂ = 864 Hz [v_p · v_g = c_e²]</text>
      </svg>
    `;
  }

  /**
   * 7. Vault Floorplan & Axial Blueprint
   */
  private static renderVaultFloorplanSvg(_seed: number): string {
    return `
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="20" width="280" height="110" fill="rgba(240,225,195,0.4)" stroke="#4a2e18" stroke-width="2" />

        <!-- Groin Diagonals -->
        <line x1="50" y1="20" x2="143" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />
        <line x1="143" y1="20" x2="50" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />
        <line x1="143" y1="20" x2="236" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />
        <line x1="236" y1="20" x2="143" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />
        <line x1="236" y1="20" x2="330" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />
        <line x1="330" y1="20" x2="236" y2="130" stroke="#8c683b" stroke-width="1.2" stroke-dasharray="2,2" />

        <!-- Footings -->
        <rect x="137" y="16" width="12" height="8" fill="#3b2010" />
        <rect x="137" y="126" width="12" height="8" fill="#3b2010" />
        <rect x="230" y="16" width="12" height="8" fill="#3b2010" />
        <rect x="230" y="126" width="12" height="8" fill="#3b2010" />

        <line x1="40" y1="75" x2="340" y2="75" stroke="#9e2a1e" stroke-width="1" stroke-dasharray="4,2" />
        <text x="190" y="72" font-family="'Cinzel', Georgia, serif" font-size="8" font-weight="bold" fill="#9e2a1e" text-anchor="middle">Principal Cathedral Nave Axis</text>

        <!-- Compass -->
        <circle cx="310" cy="45" r="12" fill="rgba(255,255,255,0.7)" stroke="#4a2e18" stroke-width="1" />
        <polygon points="310,35 313,45 307,45" fill="#9e2a1e" />
        <polygon points="310,55 313,45 307,45" fill="#4a2e18" />
        <text x="310" y="32" font-family="'Cinzel', Georgia, serif" font-size="7" font-weight="bold" fill="#9e2a1e" text-anchor="middle">N</text>
      </svg>
    `;
  }

  /**
   * 8. Classical Aristotelian Syllogism & Euler Logic Circle
   */
  private static renderSyllogismEulerSvg(_seed: number): string {
    return `
      <svg viewBox="0 0 380 155" class="diagram-svg" xmlns="http://www.w3.org/2000/svg">
        <circle cx="190" cy="78" r="66" fill="rgba(215, 185, 140, 0.25)" stroke="#5a3818" stroke-width="1.8" />
        <text x="190" y="24" font-family="'Cinzel', Georgia, serif" font-size="8.5" font-weight="bold" fill="#5a3818" text-anchor="middle">Major Premise: Predicate Term (P)</text>

        <circle cx="190" cy="85" r="44" fill="rgba(166, 36, 36, 0.12)" stroke="#943124" stroke-width="1.5" />
        <text x="190" y="52" font-family="'Cinzel', Georgia, serif" font-size="8" font-weight="bold" fill="#943124" text-anchor="middle">Middle Term (M)</text>

        <circle cx="190" cy="95" r="22" fill="#d99f36" stroke="#4a2e18" stroke-width="1.5" />
        <text x="190" y="98" font-family="'Cinzel', Georgia, serif" font-size="8" font-weight="bold" fill="#2e1a0c" text-anchor="middle">Subject (S)</text>

        <text x="45" y="65" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#4a2e18">1. Omne M est P</text>
        <text x="45" y="80" font-family="Georgia, serif" font-size="8.5" font-style="italic" fill="#4a2e18">2. Omne S est M</text>
        <line x1="45" y1="86" x2="120" y2="86" stroke="#4a2e18" stroke-width="1" />
        <text x="45" y="100" font-family="Georgia, serif" font-size="8.5" font-weight="bold" fill="#943124">∴ Omne S est P</text>

        <text x="275" y="82" font-family="'Cinzel', Georgia, serif" font-size="8" font-weight="bold" fill="#6d4414">Modus Barbara</text>
        <text x="275" y="96" font-family="Georgia, serif" font-size="8" font-style="italic" fill="#6d4414">Universal Affirmative</text>
      </svg>
    `;
  }
}
