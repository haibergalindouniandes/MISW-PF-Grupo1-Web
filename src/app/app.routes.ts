import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routing').then(m => m.HOME_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routing').then(m => m.AUTH_ROUTES)
  }

];
