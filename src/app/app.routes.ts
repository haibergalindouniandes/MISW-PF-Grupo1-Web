import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.routing').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routing').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'services',
    loadChildren: () => import('./features/services/services.routing').then(m => m.SERVICES_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.routing').then(m => m.HOME_ROUTES)
  },
  {
    path: 'homeproveedores',
    loadChildren: () => import('./features/homeproveedores/home.routing').then(m => m.HOME_ROUTES_PROVIDERS)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('./features/nutrition/nutrition.routing').then(m => m.NUTRITION_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: 'training',
    loadChildren: () => import('./features/training/training.routing').then(m => m.TRAINING_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];
