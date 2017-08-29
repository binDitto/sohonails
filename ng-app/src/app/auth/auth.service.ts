
// REQUIRED
import { Injectable, EventEmitter, Output} from '@angular/core';

import { Http, Response, Headers } from '@angular/http';

// USE ADDITIONAL OPERATORS
import { Observable } from 'rxjs';
import 'rxjs/Rx';


// IMPORT USER MODEL
import { User } from './user.model';

@Injectable()
export class AuthService {

      loggedInUser: User;
      users: User[];

      backEnd = 'http://localhost:8080/users'
      prodBackEnd = 'users';

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

    return this.http.post(this.prodBackEnd, requestBody, { headers: jsonHeader })
                    .map(
                      (createdUserRes: Response) => {
                        createdUserRes.json();
                        console.log(createdUserRes);
                      }

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

    return this.http.post(this.prodBackEnd + '/login', requestBody, { headers: jsonHeader })
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

  // GET/RETRIEVE USER

  getProfile(){

    const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';

    if(userId !== '') {
      return this.http.get(this.prodBackEnd + '/' + userId)
                      .map(
                        (userInfoRes: Response) => {
                          const retrievedUser = userInfoRes.json();

                          const backToFront = new User(
                            retrievedUser.userObject.email,
                            retrievedUser.userObject.password,
                            retrievedUser.userObject.admin,
                            retrievedUser.userObject.joinDate,
                            retrievedUser.userObject.firstName,
                            retrievedUser.userObject.lastName,
                            retrievedUser.userObject.userName,
                            retrievedUser.userObject._id
                          );

                          this.loggedInUser = backToFront;

                          const msgFromBack = retrievedUser.message;
                          console.log(msgFromBack);

                          return this.loggedInUser;
                        }
                      )
                      .catch(
                        (error: Response) => {
                          // this.errorService.handleError(error.json());

                          return Observable.throw(error.json());
                        }
                      );
    }

  }

  // EXTRA FUNCTIONALITY
  @Output() showModal: EventEmitter<any> = new EventEmitter<any>();

  toggleModal(display: any){
    this.showModal.emit(display);
  }
}
