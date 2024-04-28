import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InitComponent } from '../homeproveedores/pages/init/init.component';


export const AUTH_ROUTES: Routes = [
  { path: '', component: SigninComponent },
  { path: 'homeproveedores', component: InitComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }

];
