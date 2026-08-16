/**
 * Generative Mathematics, Physics, Logic & STEM Equation Engine
 * Procedurally synthesizes unique equations, matrices, integrals, theorems,
 * derivations, and physical constants for any book, chapter, or discipline.
 */
export interface GeneratedProof {
  theoremHeader: string;
  premiseText: string;
  primaryEquation: string;
  stepHeader: string;
  stepLines: string[];
  matrixEquation?: string;
  secondaryEquation?: string;
  conclusionText: string;
  qedText: string;
}

export class GenerativeMathEngine {
  /**
   * Procedurally generates a unique mathematical/scientific proof & equation block
   * based on discipline, chapter number, page number, realm, and seed.
   */
  public static generateUniqueProof(
    discipline: string,
    chapterIdx: number,
    pageIdx: number,
    realm: string,
    organization: string,
    seed: number
  ): GeneratedProof {
    const disc = discipline.toLowerCase();

    // 1. Classical Logic, Linguistics & Syntax
    if (disc.includes('logic') || disc.includes('linguistic') || disc.includes('rhetoric') || disc.includes('philology') || disc.includes('dialect')) {
      return this.generateLogicProof(chapterIdx, pageIdx, realm, organization, seed);
    }

    // 2. Astronomy, Celestial Mechanics & Ephemerides
    if (disc.includes('celestial') || disc.includes('astronom') || disc.includes('astral') || disc.includes('orbital') || disc.includes('starlight')) {
      return this.generateAstronomyProof(chapterIdx, pageIdx, realm, organization, seed);
    }

    // 3. Cryptography, Runic Matrix & Inversion
    if (disc.includes('crypt') || disc.includes('cipher') || disc.includes('runic') || disc.includes('seal') || disc.includes('inversion')) {
      return this.generateCryptoProof(chapterIdx, pageIdx, realm, organization, seed);
    }

    // 4. Metallurgy, Smelting, Alchemy & Thermodynamics
    if (disc.includes('metallurgy') || disc.includes('alchem') || disc.includes('smelt') || disc.includes('crucible') || disc.includes('thermodynamic')) {
      return this.generateMetallurgyProof(chapterIdx, pageIdx, realm, organization, seed);
    }

    // 5. Optics, Prism Dispersion & Wave Mechanics
    if (disc.includes('optics') || disc.includes('prism') || disc.includes('wave') || disc.includes('resonance') || disc.includes('dispersion') || disc.includes('light')) {
      return this.generateOpticsProof(chapterIdx, pageIdx, realm, organization, seed);
    }

    // 6. Default: Architecture, Stonemasonry, Vault Mechanics & Structural Statics
    return this.generateArchitectureProof(chapterIdx, pageIdx, realm, organization, seed);
  }

  // =========================================================================
  // 1. LOGIC, DIALECTIC & LINGUISTIC PROOFS
  // =========================================================================
  private static generateLogicProof(
    c: number,
    _p: number,
    realm: string,
    org: string,
    seed: number
  ): GeneratedProof {
    const topics: GeneratedProof[] = [
      {
        theoremHeader: `THEOREM ${this.toRoman(c + 1)}: MODAL SYLLOGISTIC SOUNDNESS IN ${realm.toUpperCase()}`,
        premiseText: `Let proposition $\\mathcal{P}(x)$ and modal predicate $\\mathcal{Q}(x)$ be defined over the universe of discourse $\\mathcal{U}$:`,
        primaryEquation: `$$\\forall x \\in \\mathcal{U} \\; [\\mathcal{M}(x) \\implies \\mathcal{P}(x)] \\quad \\land \\quad \\forall x \\in \\mathcal{U} \\; [\\mathcal{S}(x) \\implies \\mathcal{M}(x)]$$`,
        stepHeader: `[FORMAL DEDUCTIVE DERIVATION]:`,
        stepLines: [
          `1. Universal Instantiation for canonical instance $k \\in \\mathcal{U}$:`,
          `$$\\mathcal{M}(k) \\implies \\mathcal{P}(k) \\quad \\text{and} \\quad \\mathcal{S}(k) \\implies \\mathcal{M}(k)$$`,
          `2. Applying hypothetical transitive deduction (Modus Barbara):`,
          `$$\\mathcal{S}(k) \\implies \\mathcal{P}(k) \\implies \\forall x \\; [\\mathcal{S}(x) \\implies \\mathcal{P}(x)]$$`
        ],
        secondaryEquation: `$$\\therefore \\text{Omne } \\mathcal{S} \\text{ est } \\mathcal{P} \\quad [\\text{Preserved by the Scribes of } ${org}]$$`,
        conclusionText: `This confirms that dialectical soundness is invariant under semantic translation across ${realm}.`,
        qedText: `Quod Erat Demonstrandum • Q.E.D.`
      },
      {
        theoremHeader: `LEMMA ${this.toRoman(c + 1)}: GRAMMATICAL SYNTAX TRANSFORM TENSOR`,
        premiseText: `Let root dialect vector $\\vec{w} = [v_1, v_2]^T$ undergo morphological declension through inflection operator $\\mathbf{T}_{\\text{case}}$:`,
        primaryEquation: `$$\\mathbf{T}_{\\text{case}} \\vec{w} = \\begin{bmatrix} \\cos(\\phi_k) & -\\sin(\\phi_k) \\\\ \\sin(\\phi_k) & \\cos(\\phi_k) \\end{bmatrix} \\begin{bmatrix} w_{\\text{nom}} \\\\ w_{\\text{gen}} \\end{bmatrix} = \\begin{bmatrix} w_{\\text{abl}} \\\\ w_{\\text{acc}} \\end{bmatrix}$$`,
        stepHeader: `[PHONETIC EIGENVALUE RESOLUTION]:`,
        stepLines: [
          `1. Calculate characteristic root determinant for inflection angle $\\phi_k = \\frac{${(c + 2) * 15}^\\circ}{2}$:`
        ],
        matrixEquation: `$$\\det(\\mathbf{T} - \\lambda \\mathbf{I}) = \\lambda^2 - 2\\lambda\\cos(\\phi_k) + 1 = 0 \\implies \\lambda_{1,2} = e^{\\pm i \\phi_k}$$`,
        secondaryEquation: `$$\\sum_{j=1}^{${c + 3}} |w_j|^2 = \\text{Norm}(\\vec{w}) = 1.0000$$`,
        conclusionText: `Phonological conservation holds with zero loss of semantic information in ${realm}.`,
        qedText: `Quod Erat Demonstrandum • Q.E.D.`
      }
    ];

    return topics[(seed + c) % topics.length];
  }

  // =========================================================================
  // 2. ASTRONOMY & CELESTIAL MECHANICS PROOFS
  // =========================================================================
  private static generateAstronomyProof(
    c: number,
    _p: number,
    realm: string,
    org: string,
    seed: number
  ): GeneratedProof {
    const ecc = (0.012 + ((seed % 7) * 0.008) + c * 0.005).toFixed(4);
    const precArcSec = (38.4 + ((seed % 11) * 1.3) + c * 2.1).toFixed(2);
    const radiusAU = (1.42 + c * 0.35).toFixed(2);

    return {
      theoremHeader: `THEOREM ${this.toRoman(c + 1)}: HARMONIC MERIDIAN PRECESSION OF ${realm.toUpperCase()}`,
      premiseText: `Let $\\Psi(t)$ denote the celestial gimbal angle of the ${this.toRoman(c + 1)} astrolabe ring at semi-major axis $a = ${radiusAU} \\ \\text{AU}$:`,
      primaryEquation: `$$\\oint_{\\mathcal{S}} \\nabla \\Psi \\cdot d\\vec{A} = \\frac{4\\pi G \\cdot \\mathcal{M}_{\\odot}}{\\sqrt{1 - \\frac{2GM}{r c_e^2}}} \\cdot \\cos\\left(\\frac{${(c + 1) * 3} \\pi}{12}\\right)$$`,
      stepHeader: `[SECULAR PERIHELION SHIFT DERIVATION]:`,
      stepLines: [
        `1. Integrate the relativistic potential perturbation with orbital eccentricity $e = ${ecc}$:`
      ],
      matrixEquation: `$$\\Delta \\Psi_{\\text{prec}} = \\int_{0}^{2\\pi} \\frac{3 G \\mathcal{M}}{c^2 a (1 - e^2)} \\, d\\theta = \\frac{6 \\pi G \\mathcal{M}}{c^2 a (1 - e^2)}$$`,
      secondaryEquation: `$$\\Delta \\Psi_{\\text{measured}} = ${precArcSec}'' \\text{ per century} \\quad [\\text{Calibrated at } ${org}]$$`,
      conclusionText: `Observational ephemerides in ${realm} confirm non-decaying orbital stability.`,
      qedText: `Quod Erat Demonstrandum • Q.E.D.`
    };
  }

  // =========================================================================
  // 3. CRYPTOGRAPHY & RUNIC SEALS PROOFS
  // =========================================================================
  private static generateCryptoProof(
    c: number,
    _p: number,
    realm: string,
    org: string,
    seed: number
  ): GeneratedProof {
    const primeP = 61 + (seed % 13) * 6 + c * 12;
    const primeQ = 53 + (seed % 11) * 6 + c * 18;
    const modN = primeP * primeQ;
    const totient = (primeP - 1) * (primeQ - 1);
    const pubExp = 65537;

    return {
      theoremHeader: `PROPOSITION ${this.toRoman(c + 1)}: RECURSIVE VAULT SEAL INVERSION IN ${realm.toUpperCase()}`,
      premiseText: `Let the seal inscription on the ${this.toRoman(c + 1)} vault gate be encrypted by modular exponentiation:`,
      primaryEquation: `$$C \\equiv M^{${pubExp}} \\pmod{${modN}}, \\quad \\text{where } N = ${primeP} \\cdot ${primeQ} \\quad \\text{and} \\quad \\gcd(${pubExp}, \\phi(N)) = 1$$`,
      stepHeader: `[PROOF OF INVERTIBILITY & PRIVATE KEY EXTRACTION]:`,
      stepLines: [
        `1. By Euler's Totient Theorem: $\\phi(N) = (${primeP} - 1)(${primeQ} - 1) = ${totient}$.`,
        `2. Solve congruence $e \\cdot d \\equiv 1 \\pmod{\\phi(N)} \\implies e \\cdot d = 1 + k \\cdot ${totient}$:`
      ],
      matrixEquation: `$$C^d \\equiv (M^e)^d \\equiv M^{1 + k \\phi(N)} \\equiv M \\cdot (M^{\\phi(N)})^k \\equiv M \\pmod{${modN}}$$`,
      secondaryEquation: `$$\\therefore M \\equiv C^d \\pmod{${modN}} \\quad [\\text{Vault Inversion Seal Guaranteed by } ${org}]$$`,
      conclusionText: `This guarantees that the cryptographic locks of ${realm} cannot be forged without the private exponent.`,
      qedText: `Quod Erat Demonstrandum • Q.E.D.`
    };
  }

  // =========================================================================
  // 4. METALLURGY & ALCHEMY PROOFS
  // =========================================================================
  private static generateMetallurgyProof(
    c: number,
    _p: number,
    realm: string,
    org: string,
    seed: number
  ): GeneratedProof {
    const tempC = 1100 + (seed % 15) * 25 + c * 75;
    const deltaH = -280 - (seed % 9) * 15 - c * 20;
    const deltaS = (95.2 + (seed % 7) * 3.4 + c * 4.2).toFixed(1);
    const tCritK = Math.round((Math.abs(deltaH) * 1000) / parseFloat(deltaS));
    const tCritC = Math.round(tCritK - 273.15);

    return {
      theoremHeader: `FORMULA ${this.toRoman(c + 1)}: STOICHIOMETRIC DAMASCUS MATRIX SMELTING`,
      premiseText: `In the crucible blast hearths of ${realm} at operating temperature $\\Delta T = ${tempC}^\\circ \\text{C}$ ($${tempC + 273} \\ \\text{K}$):`,
      primaryEquation: `$$${c + 2}\\text{Fe}_{(\\alpha)} + ${c + 1}\\text{C}_{(\\text{graphite})} + \\text{W} \\xrightarrow{\\Delta H = ${deltaH} \\ \\text{kJ/mol}} \\text{Fe}_{${c + 2}}\\text{W}\\text{C}_{${c + 1}} \\downarrow \\ (\\text{Adamantine Steel})$$`,
      stepHeader: `[GIBBS SPONTANEOUS CRYSTALLIZATION DERIVATION]:`,
      stepLines: [
        `1. Compute Gibbs free energy $\\Delta G^\\circ(T) = \\Delta H^\\circ - T \\Delta S^\\circ$ with $\\Delta S^\\circ = +${deltaS} \\ \\text{J/(mol}\\cdot\\text{K)}$:`
      ],
      matrixEquation: `$$\\Delta G^\\circ(T) = ${deltaH * 1000} + ${deltaS} \\cdot T \\ \\text{J/mol}$$`,
      secondaryEquation: `$$T_{\\text{critical}} = \\frac{${Math.abs(deltaH) * 1000}}{${deltaS}} = ${tCritK} \\ \\text{K} \\equiv ${tCritC}^\\circ\\text{C}$$`,
      conclusionText: `Because $T_{\\text{operating}} (${tempC}^\\circ\\text{C}) < ${tCritC}^\\circ\\text{C}$, $\\Delta G < 0$, proving spontaneous crystallization in ${org}.`,
      qedText: `Quod Erat Demonstrandum • Q.E.D.`
    };
  }

  // =========================================================================
  // 5. OPTICS & WAVE DYNAMICS PROOFS
  // =========================================================================
  private static generateOpticsProof(
    c: number,
    _p: number,
    realm: string,
    org: string,
    seed: number
  ): GeneratedProof {
    const waveLength = 480 + (seed % 18) * 12 + c * 35;
    const waveSpeed = (299.79 + (seed % 5) * 0.05).toFixed(2);
    const prismAngle = (42 + (seed % 8) * 2 + c * 3);

    return {
      theoremHeader: `AXIOM ${this.toRoman(c + 1)}: ETHERIC WAVE DISPERSION & SPECTRAL CONTINUITY`,
      premiseText: `In a homogeneous vitreous prism in ${realm} with apex angle $\\alpha = ${prismAngle}^\\circ$, wave packet $\\Phi(x,t)$ at $\\lambda = ${waveLength} \\ \\text{nm}$ satisfies:`,
      primaryEquation: `$$\\frac{\\partial^2 \\Phi}{\\partial t^2} - c_e^2 \\nabla^2 \\Phi + \\mu_0^2 \\Phi^3 = 0, \\quad \\text{where } c_e = ${waveSpeed} \\times 10^6 \\ \\text{m/s}$$`,
      stepHeader: `[GROUP & PHASE VELOCITY RESOLUTION]:`,
      stepLines: [
        `1. Calculate Phase Velocity $v_p = \\frac{\\omega}{k}$ and Group Velocity $v_g = \\frac{d\\omega}{dk}$:`
      ],
      matrixEquation: `$$v_p = c_e \\sqrt{1 + \\frac{\\mu_0^2 A_0^2}{c_e^2 k^2}} > c_e \\quad \\text{and} \\quad v_g = \\frac{c_e^2 k}{\\sqrt{c_e^2 k^2 + \\mu_0^2 A_0^2}} < c_e$$`,
      secondaryEquation: `$$\\therefore v_p \\cdot v_g = c_e^2 \\equiv ${Math.round(parseFloat(waveSpeed) ** 2)} \\times 10^{12} \\ \\text{m}^2/\\text{s}^2 \\quad [\\text{Verified at } ${org}]$$`,
      conclusionText: `Energy conservation holds across the refractive boundary without attenuation.`,
      qedText: `Quod Erat Demonstrandum • Q.E.D.`
    };
  }

  // =========================================================================
  // 6. ARCHITECTURE & STRUCTURAL STATICS PROOFS
  // =========================================================================
  private static generateArchitectureProof(
    c: number,
    _p: number,
    realm: string,
    org: string,
    seed: number
  ): GeneratedProof {
    const angleDeg = 35 + (seed % 5) * 5 + c * 3;
    const maxStress = (36.5 + (seed % 15) * 1.8 + c * 4.2).toFixed(1);
    const thrustReduction = (24.2 + (seed % 10) * 1.1 + c * 1.5).toFixed(1);
    const spanM = (12.4 + (seed % 7) * 0.8 + c * 1.2).toFixed(1);

    return {
      theoremHeader: `LEMMA ${this.toRoman(c + 1)}: EQUILIBRIUM RESOLUTION OF THE POINTED ARCH IN ${realm.toUpperCase()}`,
      premiseText: `For a cathedral vault span of $L = ${spanM} \\ \\text{m}$ at apex thrust angle $\\alpha = ${angleDeg}^\\circ$, keystone compressive stress must satisfy:`,
      primaryEquation: `$$\\sigma_{\\text{keystone}} = \\frac{\\gamma_{\\text{stone}} \\cdot V_{\\text{vault}}}{2 \\sin(${angleDeg}^\\circ) \\cdot d_{\\text{buttress}}} \\le [\\sigma_{\\text{granite}}] = ${maxStress} \\ \\text{MPa}$$`,
      stepHeader: `[2x2 BIAXIAL STRESS ROTATION MATRIX]:`,
      stepLines: [
        `1. Resolve orthogonal equilibrium vectors against the flying buttress abutment:`
      ],
      matrixEquation: `$$\\begin{bmatrix} \\cos(${angleDeg}^\\circ) & -\\sin(${angleDeg}^\\circ) \\\\ \\sin(${angleDeg}^\\circ) & \\cos(${angleDeg}^\\circ) \\end{bmatrix} \\begin{bmatrix} F_{\\text{vertical}} \\\\ F_{\\text{lateral}} \\end{bmatrix} = \\begin{bmatrix} 0 \\\\ \\frac{\\rho g R^2}{2} \\end{bmatrix}$$`,
      secondaryEquation: `$$T_{\\text{horizontal}} = \\int_{0}^{\\pi/${c + 3}} \\rho g R^2 \\cos(\\theta) \\, d\\theta = \\rho g R^2 \\left(1 - \\frac{\\sqrt{2}}{2}\\right)$$`,
      conclusionText: `This establishes a verified ${thrustReduction}% reduction in lateral wall thrust for arches of ${org}.`,
      qedText: `Quod Erat Demonstrandum • Q.E.D.`
    };
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
