import { ServiceService } from './service.service';
import { Service } from './service.model';

// REQUIRED
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare const jQuery: any;

@Component({
  selector: 'service-form',
  templateUrl: './html/service-form.component.html',
  styleUrls: ['./css/service-form.component.css']
})
export class ServiceFormComponent implements OnInit {


  /*
    this variable will be used for new, and edit services.
    [ngModel]='service' is modeling this actual variable.
  */
  service: Service;

  /*
    For select input.
  */
  types = [
    { value: 'Manicure' },
    { value: 'Pedicure' },
    { value: 'Artificial Nails' },
    { value: 'Waxing' }
  ]

  constructor(
    private serviceServ: ServiceService
  ){}

  ngOnInit(){
    this.serviceServ.serviceEditSignal.subscribe(
      (editServiceReq: Service) => this.service = editServiceReq
    );
  }

  // SAVE NEW OR UPDATE SERVICE
  onSave(form: NgForm){

    console.log(form);

    if (this.service) {
      /*
        Service exists so edit mode.
      */
      this.service.name = form.value.name;
      this.service.price = form.value.price;
      this.service.description = form.value.description;
      this.service.type = form.value.type;
      this.serviceServ.updateService(this.service)
                      .subscribe(
                        serviceEditedRes => console.log(serviceEditedRes.message)
                      );
    } else {
      /*
        Service don't exist so new mode.
      */
      // New Service
      const newService = new Service(
        form.value.name,
        form.value.price,
        form.value.description,
        form.value.type
      );

      this.serviceServ.addService(newService)
        .subscribe(
        createdServiceRes => console.log(createdServiceRes),
        err => console.error(err)
        );

    }


    // document.getElementById('myModal').style.display="none";
    jQuery('#myModal').modal('hide');

    form.resetForm();
  }

  onClear(form: NgForm){
    form.resetForm();
    this.service = null;
  }
}
