import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

export interface LoadedModelResult {
  scene: THREE.Group;
  animations: THREE.AnimationClip[];
  isGLTF: boolean;
}

export class CustomModelLoader {
  private static instance: CustomModelLoader;
  private gltfLoader: GLTFLoader;
  private objLoader: OBJLoader;
  private fbxLoader: FBXLoader;
  private cache: Map<string, THREE.Group> = new Map();

  private constructor() {
    this.gltfLoader = new GLTFLoader();
    this.objLoader = new OBJLoader();
    this.fbxLoader = new FBXLoader();
  }

  public static getInstance(): CustomModelLoader {
    if (!CustomModelLoader.instance) {
      CustomModelLoader.instance = new CustomModelLoader();
    }
    return CustomModelLoader.instance;
  }

  /**
   * Load any 3D model (.glb, .gltf, .obj, .fbx) from public/models path
   */
  public async loadModel(url: string, fitToHeight?: number): Promise<THREE.Group> {
    if (this.cache.has(url)) {
      return this.cache.get(url)!.clone();
    }

    const ext = url.split('.').pop()?.toLowerCase();
    let group: THREE.Group;

    try {
      if (ext === 'glb' || ext === 'gltf') {
        const gltf = await this.loadGLTF(url);
        group = gltf.scene;
      } else if (ext === 'obj') {
        group = await this.loadOBJ(url);
      } else if (ext === 'fbx') {
        group = await this.loadFBX(url);
      } else {
        // Default attempt GLTF
        const gltf = await this.loadGLTF(url);
        group = gltf.scene;
      }

      // Configure shadows and retro materials
      group.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          if (mesh.material) {
            const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
            mats.forEach((m) => {
              if (m instanceof THREE.MeshStandardMaterial) {
                m.roughness = Math.max(0.6, m.roughness);
              }
            });
          }
        }
      });

      // Optional normalization to target world height
      if (fitToHeight && fitToHeight > 0) {
        const box = new THREE.Box3().setFromObject(group);
        const size = new THREE.Vector3();
        box.getSize(size);
        if (size.y > 0) {
          const scale = fitToHeight / size.y;
          group.scale.setScalar(scale);
        }
      }

      this.cache.set(url, group);
      return group.clone();
    } catch (err) {
      console.warn(`[CustomModelLoader] Failed to load model at ${url}:`, err);
      throw err;
    }
  }

  private loadGLTF(url: string): Promise<GLTF> {
    return new Promise((resolve, reject) => {
      this.gltfLoader.load(url, resolve, undefined, reject);
    });
  }

  private loadOBJ(url: string): Promise<THREE.Group> {
    return new Promise((resolve, reject) => {
      this.objLoader.load(url, resolve, undefined, reject);
    });
  }

  private loadFBX(url: string): Promise<THREE.Group> {
    return new Promise((resolve, reject) => {
      this.fbxLoader.load(url, resolve, undefined, reject);
    });
  }
}

export const customModelLoader = CustomModelLoader.getInstance();
