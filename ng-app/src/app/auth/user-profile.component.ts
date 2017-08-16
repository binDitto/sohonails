import { User } from './user.model';
import { AuthService } from './auth.service';
// REQUIRED
import { Component, OnInit, Input, Output } from '@angular/core';


@Component({
  selector: 'profile-page',
  templateUrl: './html/user-profile.component.html',
  styleUrls: ['./css/user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

  @Input() userProfile: User;

  constructor(
    private authServ: AuthService
  ){}

  ngOnInit(){
    this.authServ.getProfile().subscribe(
      retrievedUser => {
        this.userProfile = retrievedUser;
        console.log('Logged in User : ' + retrievedUser.userName);
        console.log('Username shown on front-end: ' + this.userProfile);

      },
      err => {
        console.error(err);
        return false;
      }
    );
  }



}
