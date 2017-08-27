import { ServiceImageUploadComponent } from './services/service-image-upload.component';
import { ServiceMainComponent } from './services/service-main.component';

import { HomeComponent } from './home/home.component';
import { AuthNavComponent } from './auth/auth-nav.component';

//  REQUIRED
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {  path: '', redirectTo: '/home', pathMatch: 'full' },
  {  path: 'home', component: HomeComponent },
  {  path: 'services', component: ServiceMainComponent},
  {  path: 'services/upload', component: ServiceImageUploadComponent},
  {  path: 'auth', component: AuthNavComponent, loadChildren: './auth/auth.module#AuthModule'}
];

export const appRouter = RouterModule.forRoot(appRoutes);
