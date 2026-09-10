import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/scoreboard/scoreboard').then(
        (module) => module.Scoreboard
      ),
  },
  {
    path: 'end-score',
    loadComponent: () =>
      import('./features/end-score/end-score').then(
        (module) => module.EndScore
      ),
  },
];
