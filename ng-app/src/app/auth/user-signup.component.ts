import { User } from './user.model';
import { AuthService } from './auth.service';


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-page',
  templateUrl: './html/user-signup.component.html',
  styleUrls: ['./css/user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  display = 'none';

  signUpForm: FormGroup;

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private authServ: AuthService,
    private router: Router
  ){}

  /*
    Use build in ngForm, in the html add property directed [formGroup]="nameOfForm" (ngSubmit)="nameOfSubmitFunction",
    import ReactiveFormsModule inside app.module to make this work.
  */
    /*
      Set validations for each formcontrol field.
    */
  ngOnInit(){

    this.signUpForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]),
      password: new FormControl( null, Validators.required),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      userName: new FormControl(null, Validators.required),
    });

    // For Modal
    this.authServ.showModal.subscribe(
      (display) => {
        this.display = 'display';
      }
    );
  }

  onSubmit(){
    /*
      Make sure user input from front-end request body conforms to front-end User model.
    */
    const createUser: User = new User(
      this.signUpForm.value.email,
      this.signUpForm.value.password,
      this.signUpForm.value.firstName,
      this.signUpForm.value.lastName,
      this.signUpForm.value.userName,
    );

    this.authServ.signup(createUser)
                 .subscribe(
                   createdUserRes => console.log(createdUserRes),
                   error => console.error(error)
                 );

    this.signUpForm.reset();
    this.router.navigate(['/auth', 'login']);
  }

// For Modal
onErrorHandled(){
  this.display = 'none';
}




}
