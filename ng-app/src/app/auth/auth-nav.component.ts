import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-nav',
  template: `
    <div class="container">
      <router-outlet></router-outlet>

    </div>
  `
})
export class AuthNavComponent implements OnInit {
  constructor(
    private authServ: AuthService
  ){}
  ngOnInit () {}



}
