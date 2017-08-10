import { UserProfileComponent } from './user-profile.component';
import { UserLoginComponent } from './user-login.component';
import { authRouter } from './auth.router';
import { AuthService } from './auth.service';
import { UserSignupComponent } from './user-signup.component';


// REQUIRED
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserSignupComponent,
    UserLoginComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    authRouter
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule {

}
