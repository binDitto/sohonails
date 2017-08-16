import { AuthService } from '../auth/auth.service';

// REQUIRED
import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './html/nav.component.html',
  styleUrls: ['./css/nav.component.css']
})
export class NavComponent implements OnInit {

  /*
    Binds it so that changes are updated.
  */
  @Input() userFirstName: String;

  constructor(
    private authServ: AuthService,
    private router: Router
  ){}

  ngOnInit() {
    if(localStorage.getItem('userId') !== null){
      this.authServ.getProfile().subscribe(
        profile => {
          this.userFirstName = profile.firstName;
        }
      );
    }
  }

  /*
   Call on AuthService function within a function for this component
   to confirm true or false.
 */
  isLoggedIn() {
    return this.authServ.isLoggedIn();
  }

  showModal(){
    this.authServ.toggleModal('block');
  }

  logOutUser(){
    this.authServ.logOut();
    this.router.navigate(['/auth', 'login']);
  }
}
