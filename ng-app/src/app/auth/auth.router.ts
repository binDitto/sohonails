import { UserProfileComponent } from './user-profile.component';
import { UserLoginComponent } from './user-login.component';
import { UserSignupComponent } from './user-signup.component';

// REQUIRED
import { Routes, RouterModule } from '@angular/router';


const authRoutes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full'},
  { path: 'signup', component: UserSignupComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'profile', component: UserProfileComponent}
];

/*
  Register as child routes, this setup is for 'lazy loading'.
  note: .forChild();
*/
export const authRouter = RouterModule.forChild(authRoutes);
