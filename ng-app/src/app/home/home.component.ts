import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './html/home.component.html',
  styleUrls: ['./css/home.component.css']

})
export class HomeComponent implements OnInit {
  ngOnInit(){}

  welcome = "Welcome Home!"
}
