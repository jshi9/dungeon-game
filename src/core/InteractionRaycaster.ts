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
  private scene: THREE.Scene;
  private callbacks: RaycasterCallbacks;

  private mouseNDC: THREE.Vector2 = new THREE.Vector2(0, 0);
  private isPointerLocked: boolean = false;
  private hoveredBookData: BookData | null = null;
  private hoveredKey: string | null = null;

  // Single shared high-performance highlight overlay mesh
  private highlightMesh: THREE.Mesh;
  private tempMatrix: THREE.Matrix4 = new THREE.Matrix4();
  private tempPos: THREE.Vector3 = new THREE.Vector3();
  private tempQuat: THREE.Quaternion = new THREE.Quaternion();
  private tempScale: THREE.Vector3 = new THREE.Vector3();

  // Throttling & change tracking for 60fps performance
  private lastCheckTime: number = 0;
  private checkIntervalMs: number = 33; // ~30Hz max check rate
  private lastCameraPos: THREE.Vector3 = new THREE.Vector3();
  private lastCameraQuat: THREE.Quaternion = new THREE.Quaternion();
  private pendingTargetBooks: THREE.Object3D[] = [];

  public maxDistance: number = 6.5;
  public isEnabled: boolean = true;

  constructor(scene: THREE.Scene, camera: THREE.Camera, canvas: HTMLCanvasElement, callbacks: RaycasterCallbacks) {
    this.scene = scene;
    this.camera = camera;
    this.canvas = canvas;
    this.callbacks = callbacks;
    this.raycaster = new THREE.Raycaster();
    this.raycaster.far = this.maxDistance;

    // Build shared highlight overlay box
    const boxGeom = new THREE.BoxGeometry(1, 1, 1);
    const boxMat = new THREE.MeshStandardMaterial({
      color: 0xffeab3,
      emissive: 0xfce59f,
      emissiveIntensity: 0.85,
      transparent: true,
      opacity: 0.55,
      roughness: 0.3,
      metalness: 0.4,
      depthTest: true,
      depthWrite: false
    });

    this.highlightMesh = new THREE.Mesh(boxGeom, boxMat);
    this.highlightMesh.visible = false;
    this.highlightMesh.renderOrder = 999;
    this.scene.add(this.highlightMesh);

    this.bindEvents();
  }

  private bindEvents(): void {
    document.addEventListener('pointerlockchange', () => {
      this.isPointerLocked = document.pointerLockElement !== null;
      if (this.isPointerLocked) {
        this.mouseNDC.set(0, 0);
      }
    });

    // Native mousemove listener for event-driven cursor tracking
    window.addEventListener('mousemove', (e) => {
      if (!this.isEnabled) return;

      if (!this.isPointerLocked) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouseNDC.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      }

      // Event-driven raycast on mouse move
      this.performRaycast(this.pendingTargetBooks);
    });

    // Native click listener
    this.canvas.addEventListener('click', (e) => {
      if (!this.isEnabled) return;

      // Force immediate raycast check on click
      this.performRaycast(this.pendingTargetBooks, true);

      if (this.hoveredBookData) {
        e.preventDefault();
        e.stopPropagation();
        this.callbacks.onSelectBook(this.hoveredBookData);
      }
    });
  }

  /**
   * Called each frame from tick(). Uses dirty checking and time throttling
   * to avoid redundant per-frame raycasting calculations.
   */
  public update(targetBooks: THREE.Object3D[]): void {
    this.pendingTargetBooks = targetBooks;

    if (!this.isEnabled || targetBooks.length === 0) {
      this.clearHover();
      return;
    }

    const now = performance.now();
    if (now - this.lastCheckTime < this.checkIntervalMs) {
      return;
    }

    // In FPP mode, check if camera moved or rotated
    if (this.isPointerLocked) {
      const posDistSq = this.camera.position.distanceToSquared(this.lastCameraPos);
      const quatAngle = 2 * Math.acos(Math.abs(THREE.MathUtils.clamp(this.camera.quaternion.dot(this.lastCameraQuat), -1, 1)));

      if (posDistSq < 0.0001 && quatAngle < 0.002) {
        return; // Camera is still, no raycast needed
      }

      this.lastCameraPos.copy(this.camera.position);
      this.lastCameraQuat.copy(this.camera.quaternion);
    }

    this.lastCheckTime = now;
    this.performRaycast(targetBooks);
  }

  private performRaycast(targetBooks: THREE.Object3D[], force: boolean = false): void {
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
      const obj = hit.object;

      // 1. InstancedMesh Hit
      if (obj instanceof THREE.InstancedMesh && hit.instanceId !== undefined) {
        const books = obj.userData?.books as BookData[] | undefined;
        if (books && hit.instanceId < books.length && hit.distance <= this.maxDistance) {
          const bookData = books[hit.instanceId];
          const key = `inst_${obj.id}_${hit.instanceId}`;

          if (this.hoveredKey !== key || force) {
            this.hoveredKey = key;
            this.hoveredBookData = bookData;

            // Extract instance matrix & world transform
            obj.getMatrixAt(hit.instanceId, this.tempMatrix);
            this.tempMatrix.premultiply(obj.matrixWorld);

            this.tempMatrix.decompose(this.tempPos, this.tempQuat, this.tempScale);
            this.highlightMesh.position.copy(this.tempPos);
            this.highlightMesh.quaternion.copy(this.tempQuat);
            this.highlightMesh.scale.set(
              this.tempScale.x * 1.03,
              this.tempScale.y * 1.03,
              this.tempScale.z * 1.03
            );
            this.highlightMesh.visible = true;

            this.callbacks.onHoverBook(bookData);
          }
          return;
        }
      }

      // 2. Regular Mesh Hit (Desks / Globe)
      if (obj instanceof THREE.Mesh) {
        const bookData = obj.userData?.bookData as BookData | undefined;
        if (bookData && hit.distance <= this.maxDistance) {
          const key = `mesh_${obj.id}`;

          if (this.hoveredKey !== key || force) {
            this.hoveredKey = key;
            this.hoveredBookData = bookData;

            obj.matrixWorld.decompose(this.tempPos, this.tempQuat, this.tempScale);
            this.highlightMesh.position.copy(this.tempPos);
            this.highlightMesh.quaternion.copy(this.tempQuat);

            // Get mesh geometry bounding size
            if (obj.geometry.boundingBox) {
              const size = new THREE.Vector3();
              obj.geometry.boundingBox.getSize(size);
              this.highlightMesh.scale.set(size.x * 1.03, size.y * 1.03, size.z * 1.03);
            } else {
              this.highlightMesh.scale.set(this.tempScale.x * 1.03, this.tempScale.y * 1.03, this.tempScale.z * 1.03);
            }

            this.highlightMesh.visible = true;
            this.callbacks.onHoverBook(bookData);
          }
          return;
        }
      }
    }

    this.clearHover();
  }

  public clearHover(): void {
    if (this.hoveredBookData || this.highlightMesh.visible) {
      this.hoveredBookData = null;
      this.hoveredKey = null;
      this.highlightMesh.visible = false;
      this.callbacks.onHoverBook(null);
    }
  }

  public getHoveredBook(): BookData | null {
    return this.hoveredBookData;
  }
}
