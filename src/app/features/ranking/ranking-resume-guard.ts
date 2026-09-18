import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GameService } from './game.service';

export const rankingResumeGuard: CanActivateFn = async () => {
  const game = inject(GameService);
  const router = inject(Router);

  await game.ready(); // warten bis Zustand geladen ist

  const phase = game.currentPhase();
  if (phase === 'playing') return router.parseUrl('/ranking/game');
  if (phase === 'finished') return router.parseUrl('/ranking/end-score');
  return true; // 'setup' -> game-setup normal anzeigen
};