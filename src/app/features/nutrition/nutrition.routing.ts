import { Routes } from '@angular/router';
import { RegisterFeedingResultsComponent } from './pages/register-feeding-results/register-feeding-results.component';
import { UserGuard } from '../../core/guards/user.guard';

export const SERVICES_NUTRITION: Routes = [
  {
    path: 'register-feeding-results', component: RegisterFeedingResultsComponent,
    canActivate: [UserGuard]
  }
];
