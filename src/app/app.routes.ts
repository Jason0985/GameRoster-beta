import { Routes } from '@angular/router';
import { rankingResumeGuard } from './features/ranking/ranking-resume-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(
        (module) => module.Home
      ),
  },
  {
    path: 'ranking',
    canActivate: [rankingResumeGuard],
    loadComponent: () =>
      import('./features/ranking/game-setup/game-setup').then((m) => m.GameSetup),
  },
  {
    path: 'ranking/game',
    loadComponent: () =>
      import('./features/ranking/scoreboard/scoreboard').then(
        (module) => module.Scoreboard
      ),
  },
  {
    path: 'ranking/end-score',
    loadComponent: () =>
      import('./features/ranking/end-score/end-score').then(
        (module) => module.EndScore
      ),
  },
  {
    path: 'collection',
    loadComponent: () =>
      import('./features/collection/collection').then(
        (module) => module.Collection
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile').then(
        (module) => module.Profile
      ),
  },
  {
    path: 'profile/auth',
    loadComponent: () =>
      import('./features/auth/auth').then(
        (module) => module.Auth
      ),
  },
];
