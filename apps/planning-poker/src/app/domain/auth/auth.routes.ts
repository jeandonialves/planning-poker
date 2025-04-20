import { isLoggedInGuard } from '@core/guards/is-logged-in/is-logged-in.guard';
import { Route } from '@angular/router';

export const AUTH_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage),
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage),
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./pages/reset-password/reset-password.page').then(m => m.ResetPasswordPage),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/sign-up/sign-up.page').then(m => m.SignUpPage),
    canActivate: [isLoggedInGuard],
  },
];
