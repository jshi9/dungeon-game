import * as THREE from 'three';
import { BookData } from '../lore/LibraryLoreGenerator';

export interface RaycasterCallbacks {
  onHoverBook: (book: BookData | null) => void;
  onSelectBook: (book: BookData) => void;
}

export class InteractionRaycaster {
  private raycaster: THREE.Raycaster;
  private camera: THREE.Camera;
  private canvas: HTMLCanvasElement;
  private callbacks: RaycasterCallbacks;

  private mouseNDC: THREE.Vector2 = new THREE.Vector2(0, 0);
  private isPointerLocked: boolean = false;
  private hoveredMesh: THREE.Mesh | null = null;
  private hoveredBookData: BookData | null = null;
  private originalEmissive: THREE.Color = new THREE.Color(0x000000);
  private originalEmissiveIntensity: number = 0;

  public maxDistance: number = 6.5;
  public isEnabled: boolean = true;

  constructor(camera: THREE.Camera, canvas: HTMLCanvasElement, callbacks: RaycasterCallbacks) {
    this.camera = camera;
    this.canvas = canvas;
    this.callbacks = callbacks;
    this.raycaster = new THREE.Raycaster();
    this.raycaster.far = this.maxDistance;

    this.bindEvents();
  }

  private bindEvents(): void {
    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = document.pointerLockElement !== null;
      if (this.isPointerLocked) {
        this.mouseNDC.set(0, 0); // Center crosshair
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isPointerLocked) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouseNDC.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      }
    });

    this.canvas.addEventListener('click', (e) => {
      if (!this.isEnabled) return;
      if (this.hoveredBookData) {
        e.preventDefault();
        e.stopPropagation();
        this.callbacks.onSelectBook(this.hoveredBookData);
      }
    });
  }

  public update(targetBooks: THREE.Mesh[]): void {
    if (!this.isEnabled || targetBooks.length === 0) {
      this.clearHover();
      return;
    }

    if (this.isPointerLocked) {
      this.raycaster.setFromCamera(new THREE.Vector2(0, 0), this.camera);
    } else {
      this.raycaster.setFromCamera(this.mouseNDC, this.camera);
    }

    const intersects = this.raycaster.intersectObjects(targetBooks, false);

    if (intersects.length > 0) {
      const hit = intersects[0];
      const mesh = hit.object as THREE.Mesh;
      const bookData = mesh.userData?.bookData as BookData | undefined;

      if (bookData && hit.distance <= this.maxDistance) {
        if (this.hoveredMesh !== mesh) {
          this.clearHover();
          this.setHover(mesh, bookData);
        }
        return;
      }
    }

    this.clearHover();
  }

  private setHover(mesh: THREE.Mesh, bookData: BookData): void {
    this.hoveredMesh = mesh;
    this.hoveredBookData = bookData;

    if (Array.isArray(mesh.material)) {
      mesh.material.forEach((mat) => {
        const stdMat = mat as THREE.MeshStandardMaterial;
        if (stdMat && stdMat.emissive) {
          stdMat.emissive.setHex(0xfce59f);
          stdMat.emissiveIntensity = 0.65;
        }
      });
    } else {
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (mat && mat.emissive) {
        this.originalEmissive.copy(mat.emissive);
        this.originalEmissiveIntensity = mat.emissiveIntensity;

        mat.emissive.setHex(0xfce59f); // Golden amber hover glow
        mat.emissiveIntensity = 0.65;
      }
    }

    this.callbacks.onHoverBook(bookData);
  }

  public clearHover(): void {
    if (this.hoveredMesh) {
      if (Array.isArray(this.hoveredMesh.material)) {
        this.hoveredMesh.material.forEach((mat) => {
          const stdMat = mat as THREE.MeshStandardMaterial;
          if (stdMat && stdMat.emissive) {
            stdMat.emissive.setHex(0x000000);
            stdMat.emissiveIntensity = 0;
          }
        });
      } else {
        const mat = this.hoveredMesh.material as THREE.MeshStandardMaterial;
        if (mat && mat.emissive) {
          mat.emissive.copy(this.originalEmissive);
          mat.emissiveIntensity = this.originalEmissiveIntensity;
        }
      }
      this.hoveredMesh = null;
      this.hoveredBookData = null;
      this.callbacks.onHoverBook(null);
    }
  }

  public getHoveredBook(): BookData | null {
    return this.hoveredBookData;
  }
}
