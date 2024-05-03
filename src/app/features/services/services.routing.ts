import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { ProviderGuard } from '../../core/guards/provider.guard';
import { ListDetailComponent } from './pages/list-detail/list-detail.component';
import { UserGuard } from '../../core/guards/user.guard';

export const SERVICES_ROUTES: Routes = [
  {
    path: 'list', component: ListDetailComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'register', component: RegisterComponent,
    canActivate: [ProviderGuard]
  }
];
