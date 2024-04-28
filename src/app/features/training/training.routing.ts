import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { UserGuard } from '../../core/guards/user.guard';

export const TRAINING_ROUTES: Routes = [
  {
    path: 'register-training-plan', component: RegisterComponent,
    canActivate: [UserGuard]
  }
];
