import * as THREE from 'three';
import { TransitionManager } from './TransitionManager';

export interface RenderPipelineOptions {
  canvas: HTMLCanvasElement;
  internalWidth?: number;
  internalHeight?: number;
}

export class RenderPipeline {
  public renderer: THREE.WebGLRenderer;
  public renderTarget: THREE.WebGLRenderTarget;
  public internalWidth: number = 640;
  public internalHeight: number = 360;

  private blitScene: THREE.Scene;
  private blitCamera: THREE.OrthographicCamera;
  private blitMaterial: THREE.ShaderMaterial;
  private blitQuad: THREE.Mesh;

  public transitionManager: TransitionManager;

  constructor(options: RenderPipelineOptions) {
    this.internalWidth = options.internalWidth ?? 640;
    this.internalHeight = options.internalHeight ?? 360;
    this.transitionManager = new TransitionManager();

    // 1. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: options.canvas,
      antialias: false,
      powerPreference: 'high-performance',
      stencil: false,
      depth: true
    });

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap; // High-performance crisp shadows
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.renderer.setPixelRatio(1); // Keep 1:1 pixel grid for crisp upscale

    // 2. Offscreen Low-Resolution Render Target
    this.renderTarget = new THREE.WebGLRenderTarget(this.internalWidth, this.internalHeight, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      generateMipmaps: false,
      format: THREE.RGBAFormat,
      colorSpace: THREE.SRGBColorSpace,
      depthBuffer: true,
      stencilBuffer: false
    });

    // 3. Fullscreen Blit Scene & Shader
    this.blitScene = new THREE.Scene();
    this.blitCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const blitVertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const blitFragmentShader = `
      uniform sampler2D tDiffuse;
      uniform vec2 uResolution;
      uniform float uWipeProgress;
      uniform float uShowCrosshair;
      varying vec2 vUv;

      void main() {
        vec4 color = texture2D(tDiffuse, vUv);

        // 1. In-Engine Dynamic Color-Inverting Crosshair (Rendered in Native Pixel Grid)
        if (uShowCrosshair > 0.5) {
          vec2 pixelCoord = floor(vUv * uResolution);
          vec2 center = floor(uResolution * 0.5);
          vec2 d = abs(pixelCoord - center);

          // 4 ticks: 1 pixel wide, 5 pixels long, 2 pixel gap from center
          bool isVerticalTick = (d.x == 0.0 && d.y >= 2.0 && d.y <= 6.0);
          bool isHorizontalTick = (d.y == 0.0 && d.x >= 2.0 && d.x <= 6.0);

          if (isVerticalTick || isHorizontalTick) {
            color.rgb = abs(vec3(1.0) - color.rgb);
          }
        }

        // 2. Retro Diamond-Grid Screen-Wipe Transition Effect
        if (uWipeProgress > 0.001) {
          vec2 gridCount = vec2(32.0, 18.0);
          vec2 cellUv = fract(vUv * gridCount);
          vec2 cellIndex = floor(vUv * gridCount);

          float stagger = (cellIndex.x + cellIndex.y) / (gridCount.x + gridCount.y) * 0.3;
          float adjustedProgress = clamp((uWipeProgress - stagger * 0.5) / (1.0 - 0.5 * 0.3), 0.0, 1.0);
          float diamondDist = abs(cellUv.x - 0.5) + abs(cellUv.y - 0.5);

          if (diamondDist < adjustedProgress * 1.1) {
            color = vec4(0.03, 0.02, 0.05, 1.0);
          }
        }

        gl_FragColor = color;
      }
    `;

    this.blitMaterial = new THREE.ShaderMaterial({
      uniforms: {
        tDiffuse: { value: this.renderTarget.texture },
        uResolution: { value: new THREE.Vector2(this.internalWidth, this.internalHeight) },
        uWipeProgress: { value: 0.0 },
        uShowCrosshair: { value: 1.0 }
      },
      vertexShader: blitVertexShader,
      fragmentShader: blitFragmentShader,
      depthTest: false,
      depthWrite: false
    });

    const quadGeom = new THREE.PlaneGeometry(2, 2);
    this.blitQuad = new THREE.Mesh(quadGeom, this.blitMaterial);
    this.blitScene.add(this.blitQuad);

    this.resize();
  }

  public setCrosshairVisible(visible: boolean): void {
    this.blitMaterial.uniforms.uShowCrosshair.value = visible ? 1.0 : 0.0;
  }

  public setResolution(width: number, height: number): void {
    this.internalWidth = width;
    this.internalHeight = height;
    this.renderTarget.setSize(width, height);
    this.blitMaterial.uniforms.uResolution.value.set(width, height);
  }

  public setExposure(exposure: number): void {
    this.renderer.toneMappingExposure = THREE.MathUtils.clamp(exposure, 0.8, 2.0);
  }

  public resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.renderer.setSize(w, h, false);
  }

  public render(scene: THREE.Scene, camera: THREE.Camera, delta: number): void {
    // Update transition animation
    this.transitionManager.update(delta);
    this.blitMaterial.uniforms.uWipeProgress.value = this.transitionManager.getWipeAmount();

    // Pass 1: Render main 3D scene into low-res WebGLRenderTarget
    this.renderer.setRenderTarget(this.renderTarget);
    this.renderer.clear();
    this.renderer.render(scene, camera);

    // Pass 2: Blit low-res texture with NearestFilter to display canvas (with in-engine crosshair & wipe)
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.blitScene, this.blitCamera);
  }
}
