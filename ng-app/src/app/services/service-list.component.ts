import { Service } from './service.model';
import { ServiceService } from './service.service';

// REQUIRED
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'service-list',
  templateUrl: './html/service-list.component.html',
  styleUrls: ['./css/service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: Service[];

  constructor(
    private serviceServ: ServiceService
  ){}

  ngOnInit(){
    this.serviceServ.getServices()
                    .subscribe(
                      (services: Service[]) => {
                        this.services = services;
                      }
                    )
  }
}
