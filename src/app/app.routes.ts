import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'sala/:id',
    loadComponent: () =>
      import('./pages/room/room.component').then((m) => m.RoomComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
