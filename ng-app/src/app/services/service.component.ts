import { ServiceService } from './service.service';

// REQUIRED
import {Component, Input, OnInit} from '@angular/core';

// USE ANGULAR SERVICE MODEL
import { Service } from "./service.model";

@Component({
  selector: 'service',
  templateUrl: './html/service.component.html'

})
export class ServiceComponent implements OnInit{

  @Input() service: Service;

  constructor(
    private serviceServ: ServiceService
  ){}

  ngOnInit(){}

  /*
    Allows user functionality if user exists/logged in.
  */
  belongsToUser(){
    // Returns boolean
    return localStorage.getItem('userId') == this.service.userId;
  }

  // EDIT SERVICE
  onEdit() {
    event.preventDefault();
    this.serviceServ.editService(this.service);
  }

  // DELETE SERVICE
  onDelete(){
    event.preventDefault();
    this.serviceServ.deleteService(this.service)
                    .subscribe(
                      deletedServiceRes => console.log(deletedServiceRes)
                    );
  }
}
