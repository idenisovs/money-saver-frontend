import { Routes } from '@angular/router';

import { authGuard } from '@guards/auth-guard';
import { guestGuard } from '@guards/guest-guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [guestGuard],
    loadComponent: () => import('./views/login-view/login-view').then((m) => m.LoginView),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./views/dashboard-view/dashboard-view').then((m) => m.DashboardView),
  },
];
