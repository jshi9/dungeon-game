import { Engine } from './core/Engine';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
  const hudRoot = document.getElementById('hud-root') as HTMLElement;

  if (!canvas || !hudRoot) {
    console.error('Failed to find #game-canvas or #hud-root in DOM.');
    return;
  }

  const engine = new Engine(canvas, hudRoot);
  (window as any).engine = engine;
  engine.start();

  console.log('Retro-3D Dungeon & Surface Engine initialized successfully.');
});
