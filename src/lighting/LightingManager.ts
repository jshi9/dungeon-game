import * as THREE from 'three';

export type EnvironmentMode = 'surface' | 'dungeon' | 'library';

export class LightingManager {
  public scene: THREE.Scene;
  public mode: EnvironmentMode = 'surface';

  // Surface Lights
  public hemiLight: THREE.HemisphereLight;
  public dirLight: THREE.DirectionalLight;
  public dirLightTarget: THREE.Object3D;

  // Grand Cathedral Library Sunbeams (North Stained Glass)
  public librarySunLight: THREE.DirectionalLight;
  public librarySunTarget: THREE.Object3D;

  // Ambient Fill
  public dungeonAmbient: THREE.AmbientLight;

  // Fogs
  private surfaceFog: THREE.FogExp2;
  private dungeonFog: THREE.FogExp2;
  private libraryFog: THREE.FogExp2;

  // Equirectangular Sky Texture (Pure background without clipping sphere meshes)
  private surfaceSkyTexture: THREE.CanvasTexture;

  // Background Colors (2000s Retro Dark Fantasy Palette)
  private dungeonBgColor = new THREE.Color(0x0a0c16); // Dark Obsidian Crypt (Image 5)
  private libraryBgColor = new THREE.Color(0x080914); // Midnight Gothic Vault

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // 1. Hemisphere Ambient Light (Deep Midnight Cyan & Earth Tone)
    this.hemiLight = new THREE.HemisphereLight(0x9cc8f8, 0x3e526a, 2.6);
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    // 2. Directional Silvery Moonlight (Overworld - angled from front-left for stunning rim lighting)
    this.dirLight = new THREE.DirectionalLight(0xd8eeff, 3.2);
    this.dirLight.position.set(-25, 52, -35);
    this.dirLight.castShadow = true;

    this.dirLight.shadow.mapSize.width = 1024;
    this.dirLight.shadow.mapSize.height = 1024;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 160;
    this.dirLight.shadow.bias = -0.0005;

    const d = 38;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;

    this.dirLightTarget = new THREE.Object3D();
    this.dirLightTarget.position.set(0, 0, -15);
    this.scene.add(this.dirLightTarget);
    this.dirLight.target = this.dirLightTarget;
    this.scene.add(this.dirLight);

    // 3. Cathedral Library Stained Glass Sunbeam
    this.librarySunLight = new THREE.DirectionalLight(0xffeed6, 2.4);
    this.librarySunLight.position.set(0, 24, 38);
    this.librarySunLight.castShadow = true;
    this.librarySunLight.shadow.mapSize.width = 1024;
    this.librarySunLight.shadow.mapSize.height = 1024;
    this.librarySunLight.shadow.camera.near = 1.0;
    this.librarySunLight.shadow.camera.far = 85;
    this.librarySunLight.shadow.bias = -0.001;

    const ld = 26;
    this.librarySunLight.shadow.camera.left = -ld;
    this.librarySunLight.shadow.camera.right = ld;
    this.librarySunLight.shadow.camera.top = ld;
    this.librarySunLight.shadow.camera.bottom = -ld;

    this.librarySunTarget = new THREE.Object3D();
    this.librarySunTarget.position.set(0, 2.0, 16.0);
    this.scene.add(this.librarySunTarget);
    this.librarySunLight.target = this.librarySunTarget;
    this.scene.add(this.librarySunLight);

    // 4. Ambient Fill Light
    this.dungeonAmbient = new THREE.AmbientLight(0x283244, 0.95);
    this.scene.add(this.dungeonAmbient);

    // 5. Exponential Fog (Atmospheric 2000s Dark Fantasy Depth)
    this.surfaceFog = new THREE.FogExp2(0x0a1428, 0.008);
    this.dungeonFog = new THREE.FogExp2(0x0a0c16, 0.022);
    this.libraryFog = new THREE.FogExp2(0x080914, 0.018);

    // 6. Procedural 2000s Retro Dark Fantasy Celestial Background (0 mesh clipping)
    this.surfaceSkyTexture = this.createDarkFantasySkyTexture();

    this.setMode('surface');
  }

  private createDarkFantasySkyTexture(): THREE.CanvasTexture {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // 1. Smooth Vertical Gradient (Midnight Void -> Royal Sapphire -> Cyan Horizon)
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0.0, '#040816'); // Zenith deep midnight
    grad.addColorStop(0.35, '#0a1636'); // Deep indigo
    grad.addColorStop(0.60, '#142a54'); // Royal sapphire
    grad.addColorStop(0.82, '#22446a'); // Cyan-tinged haze
    grad.addColorStop(1.0, '#0c182c'); // Below horizon
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Uniform Procedural Starfield
    const starCount = 2000;
    for (let i = 0; i < starCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = Math.acos(1.0 - u * 0.85); // Uniform distribution over upper hemisphere
      const phi = v * Math.PI * 2;

      const px = (phi / (Math.PI * 2)) * canvas.width;
      const py = (theta / Math.PI) * canvas.height;

      const starSize = Math.random() < 0.85 ? (0.7 + Math.random() * 1.0) : (1.6 + Math.random() * 1.4);
      const alpha = 0.45 + Math.random() * 0.55;
      const isWarm = Math.random() < 0.22;
      const color = isWarm ? `rgba(255, 235, 190, ${alpha})` : `rgba(205, 230, 255, ${alpha})`;

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(px, py, starSize * 0.5, 0, Math.PI * 2);
      ctx.fill();

      if (starSize > 2.0) {
        ctx.fillStyle = isWarm ? `rgba(255, 220, 160, 0.20)` : `rgba(180, 220, 255, 0.20)`;
        ctx.beginPath();
        ctx.arc(px, py, starSize * 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 3. Glowing Luminous Crescent Moon with Atmospheric Aura
    const moonX = canvas.width * 0.35;
    const moonY = canvas.height * 0.32;
    const moonR = 26;

    // Outer moon aura glow
    const moonGlow = ctx.createRadialGradient(moonX, moonY, moonR * 0.5, moonX, moonY, moonR * 6.0);
    moonGlow.addColorStop(0.0, 'rgba(210, 235, 255, 0.35)');
    moonGlow.addColorStop(0.4, 'rgba(160, 205, 255, 0.12)');
    moonGlow.addColorStop(1.0, 'rgba(100, 160, 240, 0.0)');
    ctx.fillStyle = moonGlow;
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonR * 6.0, 0, Math.PI * 2);
    ctx.fill();

    // Luminous Moon Disc
    const moonGrad = ctx.createRadialGradient(moonX - 4, moonY - 4, 2, moonX, moonY, moonR);
    moonGrad.addColorStop(0.0, '#ffffff');
    moonGrad.addColorStop(0.7, '#e8f4ff');
    moonGrad.addColorStop(1.0, '#b8d8ff');
    ctx.fillStyle = moonGrad;
    ctx.beginPath();
    ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  public updateRenderDistance(renderDistanceChunks: number, _chunkSize: number = 16): void {
    const density = Math.max(0.0012, 0.015 * (4 / Math.max(2, renderDistanceChunks)));
    this.surfaceFog.density = density;

    const d = Math.min(140, Math.max(28, renderDistanceChunks * 6.5));
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;
    this.dirLight.shadow.camera.updateProjectionMatrix();
  }

  public update(_playerPos: THREE.Vector3, _time: number): void {}

  public updateSunPosition(playerPos: THREE.Vector3): void {
    this.dirLight.position.set(playerPos.x - 25, playerPos.y + 52, playerPos.z - 35);
    this.dirLightTarget.position.set(playerPos.x, playerPos.y, playerPos.z - 15);
  }

  public setMode(mode: EnvironmentMode): void {
    this.mode = mode;

    if (mode === 'surface') {
      this.scene.background = this.surfaceSkyTexture;
      this.scene.fog = this.surfaceFog;

      this.hemiLight.color.setHex(0x9cc8f8);
      this.hemiLight.groundColor.setHex(0x3e526a);
      this.hemiLight.intensity = 2.6;

      this.dirLight.intensity = 3.2;
      this.dirLight.color.setHex(0xd8eeff);
      this.librarySunLight.intensity = 0.0;
      this.dungeonAmbient.intensity = 0.95;
    } else if (mode === 'dungeon') {
      this.scene.background = this.dungeonBgColor;
      this.scene.fog = this.dungeonFog;

      this.hemiLight.color.setHex(0x703838);
      this.hemiLight.groundColor.setHex(0x382222);
      this.hemiLight.intensity = 1.6;

      this.dirLight.intensity = 0.0;
      this.librarySunLight.intensity = 0.0;
      this.dungeonAmbient.intensity = 1.35;
    } else if (mode === 'library') {
      this.scene.background = this.libraryBgColor;
      this.scene.fog = this.libraryFog;

      this.hemiLight.color.setHex(0x2a2038);
      this.hemiLight.groundColor.setHex(0x120e18);
      this.hemiLight.intensity = 0.85;

      this.dirLight.intensity = 0.0;
      this.librarySunLight.intensity = 2.4;
      this.dungeonAmbient.intensity = 0.65;
    }
  }
}
