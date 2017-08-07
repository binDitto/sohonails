import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

// USE ADDITIONAL OPERATORS
import { Observable } from 'rxjs';
import 'rxjs/Rx';


// IMPORT USER MODEL
import { User } from './user.model';

@Injectable()
export class AuthService {

  backEnd = 'http://localhost:8080/users'

  /*
    Constructor needs @Injectable decorator to use other services.
  */
  constructor(
    private http: Http
    // private errorService: ErrorService
  ){}

  // CREATE USER
  signup(createUserReq: User) {

    const requestBody = JSON.stringify(createUserReq);

    const jsonHeader = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.backEnd, requestBody, { headers: jsonHeader })
                    .map(
                      (createdUserRes: Response) => createdUserRes.json()
                    )
                    .catch(
                      (error: Response) => {
                        // this.errorService.handleError(error.json());

                        return Observable.throw(error.json());
                      }
                    );
  }

  // LOGIN USER
  login(signInUserReq: User) {

    const requestBody = JSON.stringify(signInUserReq);

    const jsonHeader = new Headers({'Content-Type': 'application/json'});

    return this.http.post(this.backEnd + '/login', requestBody, { headers: jsonHeader })
                    .map(
                      (signedInUserRes: Response) => signedInUserRes.json()
                    )
                    .catch(
                      (error: Response) => {
                        // this.errorService.handleError(error.json());

                        return Observable.throw(error.json());
                      }
                    );
  }

  // CHECK IF USER IS LOGGED IN
  isLoggedIn(){
    /*
      This will return a boolean of true or false.
      If token exists then it will return true, else false.
      This function can be used to show/hide front-end stuff.
    */
    return localStorage.getItem('token') !== null;
  }

  // LOGOUT USER
  logOut() {
    localStorage.clear();
  }


}
