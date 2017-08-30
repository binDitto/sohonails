import { ServiceService } from './service.service';
import { Service } from './service.model';

// REQUIRED
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  @Input() service: Service;
  image: any;

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
    private router: Router,
    private serviceServ: ServiceService
  ){}

  ngOnInit(){
    this.serviceServ.serviceEditSignal.subscribe(
      (editServiceReq: Service) => this.service = editServiceReq
    );
  }



  imageChangeEvent(imageChangeEvent: any) {
    this.image = <File>imageChangeEvent.target.files;

  }

  // SAVE NEW OR UPDATE SERVICE
  onSave(form: NgForm){

    console.log(form);




    // FOR SERVICE SAVING
    if (this.service) {
      /*
        Service exists so edit mode.
      */
      // this.service.name = form.value.name;
      // this.service.price = form.value.price;
      // this.service.description = form.value.description;
      // this.service.type = form.value.type;

      const editServiceData = new FormData();

      if (this.image){
          editServiceData.append('serviceImage', this.image[0], this.image[0].name);
      }
      editServiceData.append('name', form.value.name);
      editServiceData.append('description', form.value.description);
      editServiceData.append('type', form.value.type);
      editServiceData.append('price', form.value.price);

      this.serviceServ.updateService(editServiceData, this.service.serviceId)
                      .subscribe(
                        (serviceEditedRes) => {
                          console.log(serviceEditedRes.message);



                        }


                      );

                      this.service = null;
    } else {
      /*
        Service don't exist so new mode.
      */
      // New Service
      const newService = new Service(
        form.value.name,
        form.value.price,
        form.value.description,
        form.value.type,
        this.image[0]
      );
      // FOR IMAGE SAVING / IMAGE UPLOAD
      const serviceData = new FormData();
      // for (let key in newService) {
      //   if ( key === 'serviceImage'){
      //     serviceData.append(key, newService[key]);
      //   } else {
      //     serviceData.append(key, newService[key]);
      //   }

      // }

      serviceData.append('serviceImage', this.image[0], this.image[0].name);
      serviceData.append('name', form.value.name);
      serviceData.append('description', form.value.description);
      serviceData.append('price', form.value.price);
      serviceData.append('type', form.value.type);

      console.log('form data variable : ' + serviceData.toString());

      this.serviceServ.addService(serviceData)
        .subscribe(
        createdServiceRes => console.log(createdServiceRes)
        );



    }

    this.router.navigateByUrl('/services');
    // document.getElementById('myModal').style.display="none";
    jQuery('#myModal').modal('hide');

    form.resetForm();
  }

  onClear(form: NgForm){
    form.resetForm();
    this.service = null;
  }
}
