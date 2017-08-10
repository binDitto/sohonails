import { Routes, RouterModule } from '@angular/router';


// COMPONENTS
import { HomeComponent } from './home/home.component';
import { AuthNavComponent } from './auth/auth-nav.component';


const appRoutes: Routes = [
  {  path: '', redirectTo: '/home', pathMatch: 'full' },
  {  path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthNavComponent, loadChildren: './auth/auth.module#AuthModule'}
];

export const appRouter = RouterModule.forRoot(appRoutes);
