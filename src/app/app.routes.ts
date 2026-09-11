import { Routes } from '@angular/router';

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
    loadComponent: () =>
      import('./features/ranking/game-setup/game-setup').then(
        (module) => module.GameSetup
      ),
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
    path: 'apps',
    loadComponent: () =>
      import('./features/games/games').then(
        (module) => module.Apps
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
