import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { SchedulerComponent } from './pages/scheduler/scheduler.component';
import { ProviderGuard } from '../../core/guards/provider.guard';
import { ListDetailUserComponent } from './pages/list-detail-user/list-detail-user.component';
import { UserGuard } from '../../core/guards/user.guard';
import { ListDetailProviderComponent } from './pages/list-detail-provider/list-detail-provider.component';

export const SERVICES_ROUTES: Routes = [
  {
    path: 'list-detail-user', component: ListDetailUserComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'list-detail-provider', component: ListDetailProviderComponent,
    canActivate: [ProviderGuard]
  },
  {
    path: 'register', component: RegisterComponent,
    canActivate: [ProviderGuard]
  },
  {
    path: 'scheduler', component: SchedulerComponent,
    canActivate: [UserGuard]
  }
];
