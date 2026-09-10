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
      import('./features/scoreboard/scoreboard').then(
        (module) => module.Scoreboard
      ),
  },
  {
    path: 'ranking/end-score',
    loadComponent: () =>
      import('./features/end-score/end-score').then(
        (module) => module.EndScore
      ),
  },
];
