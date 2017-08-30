import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

// USE ADDITIONAL OPERATORS
import { Observable } from 'rxjs';
import 'rxjs/Rx';

// SERVICE MODEL
import { Service } from './service.model';

  @Injectable()
  export class ServiceService {
    private services: Service[] = [];


    /*
      The backend node server.
    */

    backEnd = 'http://localhost:8080/services';
    prodBackEnd = 'services';

    /*
      Inject Dependencies/Other Services here.
    */
    constructor(
      private http: Http
      // private errorService: ErrorService
    ){}

    // CREATE (service-form.component.ts)
    addService(createServiceReq: FormData) {

      console.log(this.services);

      // const requestBody = JSON.stringify(createServiceReq);

      /*
        Add headers to read content as JSON or else it'll automatically read it
        as plain text which will throw a 500 error because we are sending the
        response through as json not plain text.
      */
      const multipartHeaders = new Headers({ 'enctype': 'multipart/form-data' });

      /*
        This token variable will be used to pass the user token onto the URL so
        we can authenticate the user with other requests.
      */
      const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

      /*
        3rd argument in this http post should include the headers to set headers on the post.
        Also map the response service properties to the front-end service model for use on the front-end
        of backend data.
      */
      return this.http.post(this.prodBackEnd + token, createServiceReq, { headers: multipartHeaders })
                      .map(
                        (createdServiceRes: Response) => {
                          // turns createdServiceRes into json format and then saves it to a nerServideData variable.
                          const newServiceData = createdServiceRes.json();
                          /*
                            IMPORTANT* to model the front-end service model. Always double-check.
                          */
                          const newService = new Service (
                            newServiceData.obj.name,
                            newServiceData.obj.price,
                            newServiceData.obj.description,
                            newServiceData.obj.type,
                            newServiceData.obj.createdAt,
                            newServiceData.obj._id,
                            // pull user data from service's user field.
                            newServiceData.obj.user._id,
                            newServiceData.obj.user.userName,
                            newServiceData.obj.image
                          );
                          this.services.push(newService);
                          return newService;
                        })
                        .catch(
                          (error: Response) => {
                            // this.errorService.handleError(error.json());
                            // needs to return observable, can't be voide of returns.
                            return Observable.throw(error.json());
                          }
                        );
    }

    // FETCH SERVICES (service-list.component.ts)
    getServices() {
      /*
      This function will be used to retrieve the array of services from the database to be used.
      */

      return this.http.get(this.prodBackEnd)
                      .map(
                        (fetchedServicesRes: Response) => {

                          console.log(fetchedServicesRes.json().message);

                          let servicesToTransform = fetchedServicesRes.json().obj;
                          let transformedServices: Service[] = [];
                          for (let service of servicesToTransform) {
                            /*
                              This will create a front-end version of each service in the database array,
                              by assigning the backend service properties to the corresponding front-end properties.
                              So refer to the front-end service model and names.
                              Example: service._id is pulling the id of the service from the backend database, and setting
                              the value returned by that property to become the value of the frontend serviceId property.
                            */
                            transformedServices.push(new Service(
                              service.name,
                              service.price,
                              service.description,
                              service.type,
                              service.createdAt,
                              service._id,
                              service.user._id,
                              service.user.userName,
                              service.image
                            ));
                          }
                          this.services = transformedServices;
                          console.log(this.services);
                          return transformedServices;
                        }
                      )
                      .catch(
                        (error: Response) => {
                          // this.errorService.handleError(error.json());
                          // needs to return observable, can't be void
                          return Observable.throw(error.json());
                        }
                      );
    }

    // EDIT SERVICE
    serviceEditSignal = new EventEmitter<Service>();
    /*
      Emits the object of th service to be editted.
      Listen to it on the form to fill up the form fields with it for editing.
    */
    editService(editServiceReq: Service) {
      this.serviceEditSignal.emit(editServiceReq);
    }

    // UPDATE SERVICE
    updateService(updateServiceReq: FormData, serviceId: String) {

      // const requestBody = JSON.stringify(updateServiceReq);

      // const jsonHeader = new Headers({'Content-Type': 'application/json'});
      const multipartHeader = new Headers({'enctype': 'multipart/form-data'});

      const token =  localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

      return this.http.patch(this.prodBackEnd + '/' + serviceId + token, updateServiceReq, {headers: multipartHeader})
                      .map(
                        (updatedServiceRes: Response) => {
                          const updatedService = updatedServiceRes.json();
                          return updatedService;
                        }
                      )
                      .catch(
                        (error: Response) => {
                          // this.errorService.handleError(error.json());

                          return Observable.throw(error.json());
                        }
                      );

    }

    // DELETE SERVICE
    deleteService(deleteServiceReq: Service) {
      /*
        Front-end Deletion.
      */
      this.services.splice(this.services.indexOf(deleteServiceReq), 1);

      const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

      /*
        Back-end Deletion.
      */
      return this.http.delete(this.prodBackEnd + '/' + deleteServiceReq.serviceId + token)
                      .map(
                        (deletedServiceRes: Response) => deletedServiceRes.json()
                      )
                      .catch(
                        (error: Response) => {
                          // this.errorService.handleError(error.json());

                          return Observable.throw(error.json());
                        }
                      );
    }



  }
