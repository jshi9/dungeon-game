import * as THREE from 'three';

export type EnvironmentMode = 'surface' | 'dungeon';

export class LightingManager {
  public scene: THREE.Scene;
  public mode: EnvironmentMode = 'surface';

  // Surface Lights
  public hemiLight: THREE.HemisphereLight;
  public dirLight: THREE.DirectionalLight;
  public dirLightTarget: THREE.Object3D;

  // Dungeon Ambient
  public dungeonAmbient: THREE.AmbientLight;

  // Fogs
  private surfaceFog: THREE.FogExp2;
  private dungeonFog: THREE.FogExp2;

  // Background Colors
  private surfaceBgColor = new THREE.Color(0x8bc3ea);
  private dungeonBgColor = new THREE.Color(0x08060c);

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // 1. Hemisphere Light (Surface)
    this.hemiLight = new THREE.HemisphereLight(0xfffaed, 0x3d3024, 0.85);
    this.hemiLight.position.set(0, 50, 0);
    this.scene.add(this.hemiLight);

    // 2. Directional Sun (Surface)
    this.dirLight = new THREE.DirectionalLight(0xfff7d6, 1.8);
    this.dirLight.position.set(28, 42, 20);
    this.dirLight.castShadow = true;

    // Hard-edged shadow maps
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

    // 3. Dungeon Ambient
    this.dungeonAmbient = new THREE.AmbientLight(0x181420, 0.25);
    this.scene.add(this.dungeonAmbient);

    // 4. Fogs
    this.surfaceFog = new THREE.FogExp2(0x8bc3ea, 0.012);
    this.dungeonFog = new THREE.FogExp2(0x08060c, 0.065);

    this.setMode('surface');
  }

  public setMode(mode: EnvironmentMode): void {
    this.mode = mode;

    if (mode === 'surface') {
      this.scene.background = this.surfaceBgColor;
      this.scene.fog = this.surfaceFog;
      this.hemiLight.intensity = 0.9;
      this.dirLight.intensity = 1.8;
      this.dungeonAmbient.intensity = 0.1;
    } else {
      this.scene.background = this.dungeonBgColor;
      this.scene.fog = this.dungeonFog;
      this.hemiLight.intensity = 0.05;
      this.dirLight.intensity = 0.0;
      this.dungeonAmbient.intensity = 0.35;
    }
  }

  public updateSunPosition(playerPos: THREE.Vector3): void {
    if (this.mode === 'surface') {
      this.dirLight.position.set(playerPos.x + 28, playerPos.y + 42, playerPos.z + 20);
      this.dirLightTarget.position.copy(playerPos);
    }
  }
}
