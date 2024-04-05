import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { ProviderGuard } from '../../core/guards/provider.guard';

export const SERVICES_ROUTES: Routes = [
  {
    path: 'register', component: RegisterComponent,
    canActivate: [ProviderGuard]
  }
];
