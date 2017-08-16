import { User } from './user.model';
import { AuthService } from './auth.service';


// REQUIRED
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'login-page',
  templateUrl: './html/user-login.component.html',
  styleUrls: ['./css/user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private router: Router,
    private authServ: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl( null, [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]),
      password: new FormControl( null, Validators.required )
    });
  }

  /*
    Pull new user data from front-end request body into a variable for saving.
    Makre sure to add the data according to front-end User model.
  */
  onSubmit(){

    const loginUserReq = new User(
      this.loginForm.value.email,
      this.loginForm.value.password
    );

    this.authServ.login(loginUserReq)
                .subscribe(
                    data => {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('userId', data.user._id);

                        this.router.navigateByUrl('/auth/profile');
                        console.log(data.user.userName + ': ' + data.user._id);
                    },
                    error => console.error(error)
                );

    this.loginForm.reset();

  }

  // LogOut functionality in nav ts.

}
