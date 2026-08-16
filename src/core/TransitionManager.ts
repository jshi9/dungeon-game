export class TransitionManager {
  public progress: number = 0; // 0.0 = inactive, 0.5 = midpoint/swapped, 1.0 = finished
  public isTransitioning: boolean = false;
  public duration: number = 0.8; // seconds
  private elapsed: number = 0;
  private onMidpointCallback: (() => void) | null = null;
  private onCompleteCallback: (() => void) | null = null;
  private hasTriggeredMidpoint: boolean = false;

  public startTransition(onMidpoint: () => void, onComplete?: () => void, duration: number = 0.8): void {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.progress = 0;
    this.elapsed = 0;
    this.duration = duration;
    this.onMidpointCallback = onMidpoint;
    this.onCompleteCallback = onComplete ?? null;
    this.hasTriggeredMidpoint = false;
  }

  public update(delta: number): void {
    if (!this.isTransitioning) return;

    this.elapsed += delta;
    this.progress = Math.min(1.0, this.elapsed / this.duration);

    // Midpoint trigger (swap map/lighting when screen is completely obscured)
    if (this.progress >= 0.5 && !this.hasTriggeredMidpoint) {
      this.hasTriggeredMidpoint = true;
      if (this.onMidpointCallback) {
        this.onMidpointCallback();
      }
    }

    if (this.progress >= 1.0) {
      this.isTransitioning = false;
      this.progress = 0;
      if (this.onCompleteCallback) {
        this.onCompleteCallback();
      }
    }
  }

  /**
   * Returns a 0.0 -> 1.0 -> 0.0 wipe envelope for shader uniforms
   */
  public getWipeAmount(): number {
    if (!this.isTransitioning) return 0.0;
    if (this.progress < 0.5) {
      return this.progress * 2.0; // 0 -> 1
    } else {
      return (1.0 - this.progress) * 2.0; // 1 -> 0
    }
  }
}
