import { Routes } from '@angular/router';
import { RegisterFeedingResultsComponent } from './pages/register-feeding-results/register-feeding-results.component';
import { RegisterFeedingPlanComponent } from './pages/register-feeding-plan/register-feeding-plan.component';
import { UserGuard } from '../../core/guards/user.guard';

export const NUTRITION_ROUTES: Routes = [
  {
    path: 'register-feeding-results', component: RegisterFeedingResultsComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'register-feeding-plan', component: RegisterFeedingPlanComponent,
    canActivate: [UserGuard]
  }
];
