import { AuthService } from './auth.service';
// REQUIRED
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'profile-page',
  templateUrl: './html/user-profile.component.html',
  styleUrls: ['./css/user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  userProfile: Object;
  currentUserId = localStorage.getItem('userId');

  constructor(
    private authServ: AuthService
  ){}

  ngOnInit(){
    this.authServ.getProfile(this.currentUserId).subscribe(
      profile => {
        this.userProfile = profile.user;
        console.log(profile.user);
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
