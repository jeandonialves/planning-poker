import { Route } from '@angular/router';

export const GAME_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/game/game.page').then(m => m.GamePage),
  },
  {
    path: 'room/:id',
    loadComponent: () => import('./pages/room/room.page').then(m => m.RoomPage),
  },
];
