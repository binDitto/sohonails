webpackJsonp([0],{

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_profile_component__ = __webpack_require__("../../../../../src/app/auth/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_login_component__ = __webpack_require__("../../../../../src/app/auth/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_router__ = __webpack_require__("../../../../../src/app/auth/auth.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_signup_component__ = __webpack_require__("../../../../../src/app/auth/user-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// REQUIRED



var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__user_signup_component__["a" /* UserSignupComponent */],
            __WEBPACK_IMPORTED_MODULE_1__user_login_component__["a" /* UserLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_0__user_profile_component__["a" /* UserProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__auth_router__["a" /* authRouter */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_profile_component__ = __webpack_require__("../../../../../src/app/auth/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_login_component__ = __webpack_require__("../../../../../src/app/auth/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_signup_component__ = __webpack_require__("../../../../../src/app/auth/user-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authRouter; });



// REQUIRED

var authRoutes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__user_signup_component__["a" /* UserSignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__user_login_component__["a" /* UserLoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_0__user_profile_component__["a" /* UserProfileComponent */] }
];
/*
  Register as child routes, this setup is for 'lazy loading'.
  note: .forChild();
*/
var authRouter = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(authRoutes);
//# sourceMappingURL=auth.router.js.map

/***/ }),

/***/ "../../../../../src/app/auth/css/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/css/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/css/user-signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/html/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h1>Log In</h1>\n    </div>\n    <div class=\"panel-body\">\n      <!-- data driven reactive approach to forms  -->\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n          <div class=\"form-group\">\n\n            <div class=\"input-group input-group-lg\">\n              <span class=\"input-group-addon\">\n                  <i class=\"fa fa-envelope fa-fw\"></i>\n                </span>\n              <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n            </div>\n\n          </div>\n\n          <div class=\"form-group\">\n            <div class=\"input-group input-group-lg\">\n              <span class=\"input-group-addon\">\n                  <i class=\"fa fa-lock fa-fw\"></i>\n                </span>\n              <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n            </div>\n\n\n          </div>\n\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n\n\n      </form>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/html/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h1>{{userProfile.userName}}'s Profile</h1>\n    </div>\n    <div class=\"panel-body\">\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <td>User Id:</td>\n            <td>\n              <span class=\"label label-success\">{{userProfile.userId}}</span>\n            </td>\n          </tr>\n          <tr>\n            <td>Name:</td>\n            <td>\n              <span class=\"label label-success\">{{userProfile.firstName}} {{userProfile.lastName}}</span>\n            </td>\n          </tr>\n          <tr>\n            <td>Username:</td>\n            <td>\n              <span class=\"label label-success\">{{userProfile.userName}}</span>\n            </td>\n          </tr>\n          <tr>\n            <td>Email:</td>\n            <td>\n              <span class=\"label label-success\">{{userProfile.email}}</span>\n            </td>\n          </tr>\n          <tr>\n          <tr>\n            <td>Admin:</td>\n            <td>\n              <span class=\"label label-success\">{{userProfile.admin}}</span>\n            </td>\n          </tr>\n          <tr>\n            <td>Joined:</td>\n            <td>\n              <span class=\"label label-success\">{{userProfile.joinedAt | date:'yMMMd'}} {{userProfile.joinedAt | date:'jm'}}</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/auth/html/user-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-md-offset-2\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h1>Sign Up</h1>\n      </div>\n      <div class=\"panel-body\">\n          <!-- data driven reactive approach to forms  -->\n      <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\">\n        <!-- ^^ Form is made in signup component ts  -->\n        <div class=\"col-md-6\">\n          <div class=\"form-group \">\n\n            <div class=\"input-group input-group-lg\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-smile-o fa-fw\"></i>\n              </span>\n              <input type=\"text\" id=\"firstName\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"First Name\">\n            </div>\n\n            <!-- formControlName synchronizes input  -->\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group \">\n\n            <div class=\"input-group input-group-lg\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-smile-o fa-fw\"></i>\n              </span>\n              <input type=\"text\" id=\"lastName\" class=\"form-control\" formControlName=\"lastName\" placeholder=\"Last Name\">\n            </div>\n\n            <!-- formControlName synchronizes input  -->\n          </div>\n        </div>\n\n        <div class=\"col-md-12\">\n            <div class=\"form-group\">\n\n              <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-user fa-fw\" ></i>\n                </span>\n                <input type=\"text\" id=\"userName\" class=\"form-control\" formControlName=\"userName\" placeholder=\"Username\">\n              </div>\n\n            </div>\n\n            <div class=\"form-group\">\n\n              <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-envelope fa-fw\"></i>\n                </span>\n                <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n              </div>\n\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-lg\">\n                <span class=\"input-group-addon\">\n                  <i class=\"fa fa-lock fa-fw\"></i>\n                </span>\n                <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n              </div>\n\n\n            </div>\n\n            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!signUpForm.valid\"><i class=\"fa fa-user-plus\"></i> Register</button>\n        </div>\n\n\n        </form>\n\n      </div>\n\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/auth/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("../../../../../src/app/auth/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// REQUIRED



var UserLoginComponent = (function () {
    function UserLoginComponent(router, authServ) {
        this.router = router;
        this.authServ = authServ;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].pattern(this.emailRegex)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required)
        });
    };
    /*
      Pull new user data from front-end request body into a variable for saving.
      Makre sure to add the data according to front-end User model.
    */
    UserLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var loginUserReq = new __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* User */](this.loginForm.value.email, this.loginForm.value.password);
        this.authServ.login(loginUserReq)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.user._id);
            _this.router.navigateByUrl('/auth/profile');
            console.log(data.user.userName + ': ' + data.user._id);
        }, function (error) { return console.error(error); });
        this.loginForm.reset();
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["W" /* Component */])({
        selector: 'login-page',
        template: __webpack_require__("../../../../../src/app/auth/html/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/css/user-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], UserLoginComponent);

var _a, _b;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("../../../../../src/app/auth/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// REQUIRED

var UserProfileComponent = (function () {
    function UserProfileComponent(authServ) {
        this.authServ = authServ;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authServ.getProfile().subscribe(function (retrievedUser) {
            _this.userProfile = retrievedUser;
            console.log('Logged in User : ' + retrievedUser.userName);
            console.log('Username shown on front-end: ' + _this.userProfile);
        }, function (err) {
            console.error(err);
            return false;
        });
    };
    return UserProfileComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* User */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* User */]) === "function" && _a || Object)
], UserProfileComponent.prototype, "userProfile", void 0);
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["W" /* Component */])({
        selector: 'profile-page',
        template: __webpack_require__("../../../../../src/app/auth/html/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/css/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], UserProfileComponent);

var _a, _b;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_model__ = __webpack_require__("../../../../../src/app/auth/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserSignupComponent = (function () {
    function UserSignupComponent(authServ, router) {
        this.authServ = authServ;
        this.router = router;
        this.display = 'none';
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    /*
      Use build in ngForm, in the html add property directed [formGroup]="nameOfForm" (ngSubmit)="nameOfSubmitFunction",
      import ReactiveFormsModule inside app.module to make this work.
    */
    /*
      Set validations for each formcontrol field.
    */
    UserSignupComponent.prototype.ngOnInit = function () {
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].pattern(this.emailRegex)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            lastName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
            userName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required),
        });
    };
    UserSignupComponent.prototype.onSubmit = function () {
        /*
          Make sure user input from front-end request body conforms to front-end User model.
        */
        var createUser = new __WEBPACK_IMPORTED_MODULE_0__user_model__["a" /* User */](this.signUpForm.value.email, this.signUpForm.value.password, this.signUpForm.value.firstName, this.signUpForm.value.lastName, this.signUpForm.value.userName);
        var requestBody = {
            email: this.signUpForm.value.email,
            password: this.signUpForm.value.password,
            firstName: this.signUpForm.value.firstName,
            lastName: this.signUpForm.value.lastName,
            userName: this.signUpForm.value.userName
        };
        this.authServ.signup(requestBody)
            .subscribe(function (createdUserRes) { return console.log(createdUserRes); }, function (error) { return console.error(error); });
        this.signUpForm.reset();
        this.router.navigate(['/auth', 'login']);
    };
    // For Modal
    UserSignupComponent.prototype.onErrorHandled = function () {
        this.display = 'none';
    };
    return UserSignupComponent;
}());
UserSignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["W" /* Component */])({
        selector: 'signup-page',
        template: __webpack_require__("../../../../../src/app/auth/html/user-signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/css/user-signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserSignupComponent);

var _a, _b;
//# sourceMappingURL=user-signup.component.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map