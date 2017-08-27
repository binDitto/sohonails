import { ServiceService } from './service.service';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'service-img-upload',
  templateUrl: './html/service-image-upload.component.html',
  styleUrls: ['./css/service-image-upload.component.css']
})
export class ServiceImageUploadComponent implements OnInit {

  filesToUpload: Array<File> = [];


  constructor(
    private serviceServ: ServiceService,
    private http: Http
  ){}

  ngOnInit(){

  }


  // For multiple file uploads.
  upload() {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i = 0; i < files.length; i++) {
      formData.append("serviceImages[]", files[i], files[i]['name']);
    }
    console.log('form data variable : ' + formData.toString());

    // this.address.documents = files.toString();

    this.http.post('http://localhost:8080/services/images' + token, formData)
             .map( files => files.json())
             .subscribe(files => console.log('files', files))
  }

  fileChangeEvent(fileInputEvent: any){
    this.filesToUpload = <Array<File>>fileInputEvent.target.files;

  }


}
