import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./core/pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'auth',
    loadComponent: () => import('./core/layout/auth/auth.layout').then(m => m.AuthLayout),
    children: [
      {
        path: '',
        loadChildren: () => import('./domain/auth/auth.routes').then(m => m.AUTH_ROUTES),
      },
    ],
  },
  {
    path: 'game',
    loadComponent: () => import('./core/layout/game/game.layout').then(m => m.GameLayout),
    children: [
      {
        path: '',
        loadChildren: () => import('./domain/game/game.routes').then(m => m.GAME_ROUTES),
      },
    ],
  },
];
