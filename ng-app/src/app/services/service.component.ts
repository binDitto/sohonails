import {Component, Input } from '@angular/core';

// USE ANGULAR SERVICE MODEL
import { Service } from "./service.model";

@Component({
  selector: 'service-page',
  templateUrl: './html/service.component.html'

})
export class ServiceComponent {

  @Input() service: Service;

}
