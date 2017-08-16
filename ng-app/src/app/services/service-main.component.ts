import { AuthService } from '../auth/auth.service';

// REQUIRED
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services-page',
  templateUrl: './html/service-main.component.html',
  styleUrls: ['./css/service-main.component.css']
})
export class ServiceMainComponent implements OnInit {

  currentUser= localStorage.getItem('userId') || null;

  admin: Boolean;

  constructor(
    private authServ: AuthService
  ) { }

  ngOnInit() {
    this.authServ.getProfile().subscribe(
      profile => {
        this.admin = profile.admin;
        console.log('Admin user: ' + profile.userName);
      })
  }

  /*
    Allow adding services if current user is admin.
  */
  isAdmin(){
    if (this.currentUser) {
      if(this.admin) {
        return true
      }
    } else {
      return false
    }

  }

}
