import { Routes } from '@angular/router';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/login-view/login-view').then((m) => m.LoginView),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./views/dashboard-view/dashboard-view').then((m) => m.DashboardView),
  },
];
