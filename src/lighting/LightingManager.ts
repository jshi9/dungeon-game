import * as THREE from 'three';

export type EnvironmentMode = 'surface' | 'dungeon' | 'library';

export class LightingManager {
  public scene: THREE.Scene;
  public mode: EnvironmentMode = 'surface';

  // Surface Lights
  public hemiLight: THREE.HemisphereLight;
  public dirLight: THREE.DirectionalLight;
  public dirLightTarget: THREE.Object3D;

  // Grand Cathedral Library Sunbeams
  public librarySunLight: THREE.DirectionalLight;
  public librarySunTarget: THREE.Object3D;

  // Dungeon / Library Ambient
  public dungeonAmbient: THREE.AmbientLight;

  // Fogs
  private surfaceFog: THREE.FogExp2;
  private dungeonFog: THREE.Fog;
  private libraryFog: THREE.Fog;

  // Background Colors
  private surfaceBgColor = new THREE.Color(0x8bc3ea);
  private dungeonBgColor = new THREE.Color(0x0a0812);
  private libraryBgColor = new THREE.Color(0x1a131b);

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // 1. Hemisphere Light
    this.hemiLight = new THREE.HemisphereLight(0xfffaed, 0x3d3024, 0.95);
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    // 2. Directional Sun (Surface)
    this.dirLight = new THREE.DirectionalLight(0xfff7d6, 1.8);
    this.dirLight.position.set(28, 42, 20);
    this.dirLight.castShadow = true;

    this.dirLight.shadow.mapSize.width = 2048;
    this.dirLight.shadow.mapSize.height = 2048;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 120;
    this.dirLight.shadow.bias = -0.0005;

    const d = 26;
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;

    this.dirLightTarget = new THREE.Object3D();
    this.scene.add(this.dirLightTarget);
    this.dirLight.target = this.dirLightTarget;
    this.scene.add(this.dirLight);

    // 3. Majestic Directional Sunbeams (Grand Cathedral Library)
    this.librarySunLight = new THREE.DirectionalLight(0xfff0d4, 2.8);
    this.librarySunLight.position.set(0, 22, 38);
    this.librarySunLight.castShadow = true;
    this.librarySunLight.shadow.mapSize.width = 2048;
    this.librarySunLight.shadow.mapSize.height = 2048;
    this.librarySunLight.shadow.camera.near = 1.0;
    this.librarySunLight.shadow.camera.far = 80;
    this.librarySunLight.shadow.bias = -0.001;

    const ld = 24;
    this.librarySunLight.shadow.camera.left = -ld;
    this.librarySunLight.shadow.camera.right = ld;
    this.librarySunLight.shadow.camera.top = ld;
    this.librarySunLight.shadow.camera.bottom = -ld;

    this.librarySunTarget = new THREE.Object3D();
    this.librarySunTarget.position.set(0, 2.0, 14.0);
    this.scene.add(this.librarySunTarget);
    this.librarySunLight.target = this.librarySunTarget;
    this.scene.add(this.librarySunLight);

    // 4. Ambient
    this.dungeonAmbient = new THREE.AmbientLight(0xffe8c8, 1.2);
    this.scene.add(this.dungeonAmbient);

    // 5. Atmospheric Fogs
    this.surfaceFog = new THREE.FogExp2(0x8bc3ea, 0.010);
    this.dungeonFog = new THREE.Fog(0x06050e, 18, 95);
    this.libraryFog = new THREE.Fog(0x1a131b, 28, 100);

    this.setMode('surface');
  }

  public setMode(mode: EnvironmentMode): void {
    this.mode = mode;

    if (mode === 'surface') {
      this.scene.background = this.surfaceBgColor;
      this.scene.fog = this.surfaceFog;
      this.hemiLight.color.setHex(0xfffaed);
      this.hemiLight.groundColor.setHex(0x3d3024);
      this.hemiLight.intensity = 0.95;
      this.dirLight.intensity = 1.8;
      this.librarySunLight.intensity = 0.0;
      this.dungeonAmbient.intensity = 0.1;
      this.dungeonAmbient.color.setHex(0x4c425e);
    } else if (mode === 'dungeon') {
      this.scene.background = this.dungeonBgColor;
      this.scene.fog = this.dungeonFog;
      this.hemiLight.color.setHex(0x5a5070);
      this.hemiLight.groundColor.setHex(0x2a2220);
      this.hemiLight.intensity = 0.35;
      this.dirLight.intensity = 0.0;
      this.librarySunLight.intensity = 0.0;
      this.dungeonAmbient.intensity = 1.2;
      this.dungeonAmbient.color.setHex(0x4c425e);
    } else {
      // Grand Cathedral Library: Majestic Warm Golden Cathedral Atmosphere
      this.scene.background = this.libraryBgColor;
      this.scene.fog = this.libraryFog;
      this.hemiLight.color.setHex(0xfff3db);
      this.hemiLight.groundColor.setHex(0x593b2a);
      this.hemiLight.intensity = 1.65;
      this.dirLight.intensity = 0.0;
      this.librarySunLight.intensity = 3.2; // Majestic golden sunlight beam!
      this.dungeonAmbient.intensity = 1.85; // Warm luminous ambient fill
      this.dungeonAmbient.color.setHex(0xffe4bc);
    }
  }

  public updateSunPosition(playerPos: THREE.Vector3): void {
    if (this.mode === 'surface') {
      this.dirLight.position.set(playerPos.x + 28, playerPos.y + 42, playerPos.z + 20);
      this.dirLightTarget.position.copy(playerPos);
    }
  }
}
