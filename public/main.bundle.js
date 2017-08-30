webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n<!--The content below is only a placeholder and can be replaced.-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_service_image_upload_component__ = __webpack_require__("../../../../../src/app/services/service-image-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_service_list_component__ = __webpack_require__("../../../../../src/app/services/service-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_service_form_component__ = __webpack_require__("../../../../../src/app/services/service-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_service_component__ = __webpack_require__("../../../../../src/app/services/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_nav_component__ = __webpack_require__("../../../../../src/app/auth/auth-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_service_main_component__ = __webpack_require__("../../../../../src/app/services/service-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_service_service__ = __webpack_require__("../../../../../src/app/services/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// PROVIDERS


// IMPORTS





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_6__services_service_component__["a" /* ServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_8__services_service_main_component__["a" /* ServiceMainComponent */],
            __WEBPACK_IMPORTED_MODULE_2__services_service_form_component__["a" /* ServiceFormComponent */],
            __WEBPACK_IMPORTED_MODULE_1__services_service_list_component__["a" /* ServiceListComponent */],
            __WEBPACK_IMPORTED_MODULE_0__services_service_image_upload_component__["a" /* ServiceImageUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__auth_auth_nav_component__["a" /* AuthNavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_router__["a" /* appRouter */],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_service_service__["a" /* ServiceService */], __WEBPACK_IMPORTED_MODULE_10__auth_auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_service_image_upload_component__ = __webpack_require__("../../../../../src/app/services/service-image-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_service_main_component__ = __webpack_require__("../../../../../src/app/services/service-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_nav_component__ = __webpack_require__("../../../../../src/app/auth/auth-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouter; });




//  REQUIRED

var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_1__services_service_main_component__["a" /* ServiceMainComponent */] },
    { path: 'services/upload', component: __WEBPACK_IMPORTED_MODULE_0__services_service_image_upload_component__["a" /* ServiceImageUploadComponent */] },
    { path: 'auth', component: __WEBPACK_IMPORTED_MODULE_3__auth_auth_nav_component__["a" /* AuthNavComponent */], loadChildren: './auth/auth.module#AuthModule' }
];
var appRouter = __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.router.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthNavComponent = (function () {
    function AuthNavComponent(authServ) {
        this.authServ = authServ;
    }
    AuthNavComponent.prototype.ngOnInit = function () { };
    return AuthNavComponent;
}());
AuthNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Component */])({
        selector: 'auth-nav',
        template: "\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthNavComponent);

var _a;
//# sourceMappingURL=auth-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_model__ = __webpack_require__("../../../../../src/app/auth/user.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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


// USE ADDITIONAL OPERATORS


// IMPORT USER MODEL

var AuthService = (function () {
    /*
      Constructor needs @Injectable decorator to use other services.
    */
    function AuthService(http
        // private errorService: ErrorService
    ) {
        this.http = http;
        this.backEnd = 'http://localhost:8080/users';
        this.prodBackEnd = 'users';
        // EXTRA FUNCTIONALITY
        this.showModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    // CREATE USER
    AuthService.prototype.signup = function (createUserReq) {
        var requestBody = JSON.stringify(createUserReq);
        var jsonHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.prodBackEnd, requestBody, { headers: jsonHeader })
            .map(function (createdUserRes) {
            createdUserRes.json();
            console.log(createdUserRes);
        })
            .catch(function (error) {
            // this.errorService.handleError(error.json());
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json());
        });
    };
    // LOGIN USER
    AuthService.prototype.login = function (signInUserReq) {
        var requestBody = JSON.stringify(signInUserReq);
        var jsonHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.prodBackEnd + '/login', requestBody, { headers: jsonHeader })
            .map(function (signedInUserRes) { return signedInUserRes.json(); })
            .catch(function (error) {
            // this.errorService.handleError(error.json());
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json());
        });
    };
    // CHECK IF USER IS LOGGED IN
    AuthService.prototype.isLoggedIn = function () {
        /*
          This will return a boolean of true or false.
          If token exists then it will return true, else false.
          This function can be used to show/hide front-end stuff.
        */
        return localStorage.getItem('token') !== null;
    };
    // LOGOUT USER
    AuthService.prototype.logOut = function () {
        localStorage.clear();
    };
    // GET/RETRIEVE USER
    AuthService.prototype.getProfile = function () {
        var _this = this;
        var userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : '';
        if (userId !== '') {
            return this.http.get(this.prodBackEnd + '/' + userId)
                .map(function (userInfoRes) {
                var retrievedUser = userInfoRes.json();
                var backToFront = new __WEBPACK_IMPORTED_MODULE_4__user_model__["a" /* User */](retrievedUser.userObject.email, retrievedUser.userObject.password, retrievedUser.userObject.admin, retrievedUser.userObject.joinDate, retrievedUser.userObject.firstName, retrievedUser.userObject.lastName, retrievedUser.userObject.userName, retrievedUser.userObject._id);
                _this.loggedInUser = backToFront;
                var msgFromBack = retrievedUser.message;
                console.log(msgFromBack);
                return _this.loggedInUser;
            })
                .catch(function (error) {
                // this.errorService.handleError(error.json());
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json());
            });
        }
    };
    AuthService.prototype.toggleModal = function (display) {
        this.showModal.emit(display);
    };
    return AuthService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === "function" && _a || Object)
], AuthService.prototype, "showModal", void 0);
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
// FRONT END USER MODEL
var User = (function () {
    function User(email, password, admin, joinedAt, firstName, lastName, userName, userId) {
        this.email = email;
        this.password = password;
        this.admin = admin;
        this.joinedAt = joinedAt;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.userId = userId;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "../../../../../src/app/home/css/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.welcome = "Welcome Home!";
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Component */])({
        selector: 'home-page',
        template: __webpack_require__("../../../../../src/app/home/html/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/css/home.component.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/html/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"jumbotron\">\n      <h1>{{welcome}}</h1>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nav/css/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  border-radius: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/html/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">SOHO Nails & Spa</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/home']\">Home</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/services']\">Services</a></li>\n\n        <!-- <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">Admin <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\">One more separated link</a></li>\n          </ul>\n        </li> -->\n      </ul>\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n          role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\n          *ngIf=\"!isLoggedIn()\">\n            <i class=\"fa fa-user\"></i>\n            <span class=\"caret\"></span>\n          </a>\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\n          *ngIf=\"isLoggedIn()\">\n            {{userFirstName}}\n            <span class=\"caret\"></span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['/auth/signup']\" (click)=\"showModal()\">Sign Up</a></li>\n            <li routerLinkActive=\"active\" *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['/auth/login']\">Log In</a></li>\n            <li *ngIf=\"isLoggedIn()\"><a [routerLink]=\"['/auth/profile']\">Profile</a></li>\n            <li role=\"separator\" class=\"divider\" *ngIf=\"isLoggedIn()\"></li>\n            <li *ngIf=\"isLoggedIn()\"><a (click)=\"logOutUser()\">Logout</a></li>\n          </ul>\n        </li>\n\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
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


var NavComponent = (function () {
    function NavComponent(authServ, router) {
        this.authServ = authServ;
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('userId') !== null) {
            this.authServ.getProfile().subscribe(function (profile) {
                _this.userFirstName = profile.firstName;
            });
        }
    };
    /*
     Call on AuthService function within a function for this component
     to confirm true or false.
   */
    NavComponent.prototype.isLoggedIn = function () {
        return this.authServ.isLoggedIn();
    };
    NavComponent.prototype.showModal = function () {
        this.authServ.toggleModal('block');
    };
    NavComponent.prototype.logOutUser = function () {
        this.authServ.logOut();
        this.router.navigate(['/auth', 'login']);
    };
    return NavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* Input */])(),
    __metadata("design:type", Object)
], NavComponent.prototype, "userFirstName", void 0);
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/html/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/css/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/css/service-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  text-align: center;\n  padding: 0!important;\n}\n\n.modal:before {\n  content: '';\n  display: inline-block;\n  height: 100%;\n  vertical-align: middle;\n  margin-right: -4px;\n}\n\n.modal-dialog {\n  display: inline-block;\n  text-align: left;\n  vertical-align: middle;\n}\n\n.close {\n\n  color: red;\n  padding: 10px 10px;\n  border-radius: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/css/service-image-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/css/service-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/css/service-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/services/html/service-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Button trigger modal -->\n<div class=\"container\" align=\"center\">\n  <div class=\"row\">\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"static\" data-keyboard=\"false\">\n      Add Service\n    </button>\n  </div>\n</div>\n\n\n<hr>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" >\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"onClear(f)\">\n          <span aria-hidden=\"true\"><i class=\"fa fa-times-circle\"></i></span>\n        </button>\n\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\" *ngIf=\"service == null\">New Service</h3>\n        <h3 class=\"modal-title\" id=\"exampleModalLabel\" *ngIf=\"service\">Edit Service</h3>\n\n      </div>\n\n\n        <!-- // Angular detects this form automatically if you've imported FormsModule -->\n        <form (ngSubmit)=\"onSave(f)\" #f=\"ngForm\">\n\n          <div class=\"modal-body\">\n\n            <div class=\"form-group\">\n\n                <div class=\"input-group input-group-lg\" >\n\n                  <span class=\"input-group-addon\">\n                  <i class=\"fa fa-picture-o\"></i>\n                  </span>\n\n                  <input type=\"file\" id=\"serviceImage\" class=\"form-control\" name=\"serviceImage\"\n                       (change)=\"imageChangeEvent($event)\"\n                       required />\n                </div>\n\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"name\">Name</label>\n              <input type=\"text\" id=\"name\" class=\"form-control\" [ngModel]=\"service?.name\" name=\"name\" required />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"price\">Price</label>\n              <input type=\"number\" id=\"price\" class=\"form-control\" [ngModel]=\"service?.price\" name=\"price\"  min=\"1\" max=\"100\" required />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"description\">Description</label>\n              <textarea  type=\"description\" id=\"description\" rows=\"3\" cols=\"2\" class=\"form-control\" [ngModel]=\"service?.description\" name=\"description\" required></textarea>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"type\">Service Type</label>\n              <br/>\n              <select name=\"type\" id=\"type\" [ngModel]=\"service?.type\" required>\n                <option *ngFor=\"let type of types\" [value]=\"type.value\" >{{type.value}}</option>\n\n              </select>\n            </div>\n\n        </div>\n\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onClear(f)\">Clear</button>\n          <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"service == null\">Save</button>\n          <button type=\"submit\" class=\"btn btn-primary\" *ngIf=\"service\">Update</button>\n        </div>\n\n      </form>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/services/html/service-image-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h1>Log In</h1>\n    </div>\n\n    <div class=\"panel-body\">\n      <!-- data driven reactive approach to forms  -->\n\n      <div ng-show=\"uploading\" class=\"progress\">\n        <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" >\n          <span class=\"sr-only\"></span>\n        </div>\n      </div>\n\n      <!-- FORM -->\n      <form  enctype=\"multipart/form-data\">\n\n        <div class=\"form-group\">\n\n          <div class=\"input-group input-group-lg\">\n\n            <span class=\"input-group-addon\">\n                  <i class=\"fa fa-picture-o\"></i>\n            </span>\n\n            <input type=\"file\" class=\"form-control\" name=\"serviceImage\" (change)=\"fileChangeEvent($event)\" placeholder=\"Upload file...\" multiple/>\n            <!-- <input name=\"serviceImage\" type=\"file\" id=\"serviceImage\" ng-disabled=\"uploading\" style=\"display: none;\"/> -->\n            <input name=\"width\" value=\"50%\" style=\"display: none\"/>\n            <input name=\"templateId\" value=\"serviceImageId\" style=\"display: none\"/>\n\n          </div>\n\n        </div>\n\n\n\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"upload()\">Upload</button>\n\n\n      </form>\n      <!-- END FORM -->\n      <br/>\n\n      <img style=\"display: block;\" align=\"center\" class=\"serviceThumbnail\" src=\"http://baxtercoaching.com/wp-content/uploads/2013/12/facebook-default-no-profile-pic-300x300.jpg\">\n\n      <br/>\n\n      <div ng-show=\"message\">\n        <div class=\"alert\"></div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/services/html/service-list.component.html":
/***/ (function(module, exports) {

module.exports = "<service\n\n  *ngFor=\"let service of services\"\n  [service]=\"service\">\n\n  Loading Services...\n\n</service>\n"

/***/ }),

/***/ "../../../../../src/app/services/html/service-main.component.html":
/***/ (function(module, exports) {

module.exports = "<service-form *ngIf=\"isAdmin()\"></service-form>\n\n<service-list></service-list>\n"

/***/ }),

/***/ "../../../../../src/app/services/html/service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\n  <article class=\"panel panel-default \">\n    <div class=\"panel-heading\">\n      <h4>{{service.name}}</h4>\n      <img src=\"/assets/images/services/{{service.serviceImage.filename}}\" alt=\"Image for {{service.serviceImage.filename}}\" width=\"100%\" height=\"100%\">\n      <img src=\"./assets/images/services/{{service.serviceImage.filename}}\" alt=\"Image for {{service.serviceImage.filename}}\" width=\"100%\" height=\"100%\">\n      <img src=\"public/assets/images/services/{{service.serviceImage.filename}}\" alt=\"Image for {{service.serviceImage.filename}}\" width=\"100%\" height=\"100%\">\n      <img src=\"{{service.serviceImage.path}}\" alt=\"Image for {{service.serviceImage.filename}}\" width=\"100%\" height=\"100%\">\n\n    </div>\n    <div class=\"panel-body\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          Created on: <span class=\"label label-success\">{{service.createdAt | date:'yMMMd'}} {{service.createdAt | date:'jm'}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          Id: <span class=\"label label-success\">{{service.serviceId}}\n            </span>\n        </li>\n        <li class=\"list-group-item\">\n          Name: <span class=\"label label-success\">{{service.name}}\n            </span>\n        </li>\n        <li class=\"list-group-item\">\n          Price: <span class=\"label label-success\">{{service.price | currency:'USD':true:'1.0'}}</span>\n        </li>\n        <li class=\"list-group-item\">\n          Description: <span class=\"label label-success\">{{service.description}}\n            </span>\n        </li>\n        <li class=\"list-group-item\">\n          Created by: <span class=\"label label-success\">{{service.userName}}</span>\n        </li>\n\n        <li class=\"list-group-item\">\n          User Id: <span class=\"label label-success\">{{service.userId}}</span>\n        </li>\n\n\n      </ul>\n\n        <div class=\"config\" *ngIf=\"belongsToUser()\">\n          <!-- Event Binding  -->\n          <a href=\"#\" class=\"btn btn-sm btn-danger\" (click)=\"onEdit()\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"static\" data-keyboard=\"false\">Edit</a>\n          <a href=\"#\" class=\"btn btn-sm btn-danger\" type=\"button\" type=\"button\" (click)=\"onDelete()\">Delete</a>\n          <!-- End Event Binding  -->\n        </div>\n\n\n    </div>\n  </article>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/services/service-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_service__ = __webpack_require__("../../../../../src/app/services/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_model__ = __webpack_require__("../../../../../src/app/services/service.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceFormComponent; });
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


var ServiceFormComponent = (function () {
    function ServiceFormComponent(router, serviceServ) {
        this.router = router;
        this.serviceServ = serviceServ;
        /*
          For select input.
        */
        this.types = [
            { value: 'Manicure' },
            { value: 'Pedicure' },
            { value: 'Artificial Nails' },
            { value: 'Waxing' }
        ];
    }
    ServiceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceServ.serviceEditSignal.subscribe(function (editServiceReq) { return _this.service = editServiceReq; });
    };
    ServiceFormComponent.prototype.imageChangeEvent = function (imageChangeEvent) {
        this.image = imageChangeEvent.target.files;
    };
    // SAVE NEW OR UPDATE SERVICE
    ServiceFormComponent.prototype.onSave = function (form) {
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
            var editServiceData = new FormData();
            if (this.image) {
                editServiceData.append('serviceImage', this.image[0], this.image[0].name);
            }
            editServiceData.append('name', form.value.name);
            editServiceData.append('description', form.value.description);
            editServiceData.append('type', form.value.type);
            editServiceData.append('price', form.value.price);
            this.serviceServ.updateService(editServiceData, this.service.serviceId)
                .subscribe(function (serviceEditedRes) {
                console.log(serviceEditedRes.message);
            });
            this.service = null;
        }
        else {
            /*
              Service don't exist so new mode.
            */
            // New Service
            var newService = new __WEBPACK_IMPORTED_MODULE_1__service_model__["a" /* Service */](form.value.name, form.value.price, form.value.description, form.value.type, this.image[0]);
            // FOR IMAGE SAVING / IMAGE UPLOAD
            var serviceData = new FormData();
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
                .subscribe(function (createdServiceRes) { return console.log(createdServiceRes); });
        }
        this.router.navigateByUrl('/services');
        // document.getElementById('myModal').style.display="none";
        jQuery('#myModal').modal('hide');
        form.resetForm();
    };
    ServiceFormComponent.prototype.onClear = function (form) {
        form.resetForm();
        this.service = null;
    };
    return ServiceFormComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_model__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_model__["a" /* Service */]) === "function" && _a || Object)
], ServiceFormComponent.prototype, "service", void 0);
ServiceFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["W" /* Component */])({
        selector: 'service-form',
        template: __webpack_require__("../../../../../src/app/services/html/service-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/css/service-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__service_service__["a" /* ServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_service__["a" /* ServiceService */]) === "function" && _c || Object])
], ServiceFormComponent);

var _a, _b, _c;
//# sourceMappingURL=service-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/service-image-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_service__ = __webpack_require__("../../../../../src/app/services/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceImageUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServiceImageUploadComponent = (function () {
    function ServiceImageUploadComponent(serviceServ, http) {
        this.serviceServ = serviceServ;
        this.http = http;
        this.filesToUpload = [];
    }
    ServiceImageUploadComponent.prototype.ngOnInit = function () {
    };
    // For multiple file uploads.
    ServiceImageUploadComponent.prototype.upload = function () {
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        var formData = new FormData();
        var files = this.filesToUpload;
        console.log(files);
        for (var i = 0; i < files.length; i++) {
            formData.append("serviceImages[]", files[i], files[i]['name']);
        }
        console.log('form data variable : ' + formData.toString());
        // this.address.documents = files.toString();
        this.http.post('http://localhost:8080/services/images' + token, formData)
            .map(function (files) { return files.json(); })
            .subscribe(function (files) { return console.log('files', files); });
    };
    ServiceImageUploadComponent.prototype.fileChangeEvent = function (fileInputEvent) {
        this.filesToUpload = fileInputEvent.target.files;
    };
    return ServiceImageUploadComponent;
}());
ServiceImageUploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Component */])({
        selector: 'service-img-upload',
        template: __webpack_require__("../../../../../src/app/services/html/service-image-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/css/service-image-upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__service_service__["a" /* ServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_service__["a" /* ServiceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _b || Object])
], ServiceImageUploadComponent);

var _a, _b;
//# sourceMappingURL=service-image-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/service-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_service__ = __webpack_require__("../../../../../src/app/services/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceListComponent; });
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

var ServiceListComponent = (function () {
    function ServiceListComponent(serviceServ) {
        this.serviceServ = serviceServ;
    }
    ServiceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceServ.getServices()
            .subscribe(function (services) {
            _this.services = services;
        });
    };
    return ServiceListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* Input */])(),
    __metadata("design:type", Array)
], ServiceListComponent.prototype, "services", void 0);
ServiceListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Component */])({
        selector: 'service-list',
        template: __webpack_require__("../../../../../src/app/services/html/service-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/css/service-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__service_service__["a" /* ServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_service__["a" /* ServiceService */]) === "function" && _a || Object])
], ServiceListComponent);

var _a;
//# sourceMappingURL=service-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/service-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceMainComponent; });
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

var ServiceMainComponent = (function () {
    function ServiceMainComponent(authServ) {
        this.authServ = authServ;
        this.currentUser = localStorage.getItem('userId') || null;
    }
    ServiceMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authServ.getProfile().subscribe(function (profile) {
            _this.admin = profile.admin;
            console.log('Admin user: ' + profile.userName);
        });
    };
    /*
      Allow adding services if current user is admin.
    */
    ServiceMainComponent.prototype.isAdmin = function () {
        if (this.currentUser) {
            if (this.admin) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    return ServiceMainComponent;
}());
ServiceMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Component */])({
        selector: 'services-page',
        template: __webpack_require__("../../../../../src/app/services/html/service-main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/services/css/service-main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ServiceMainComponent);

var _a;
//# sourceMappingURL=service-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_service__ = __webpack_require__("../../../../../src/app/services/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_model__ = __webpack_require__("../../../../../src/app/services/service.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
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

// USE ANGULAR SERVICE MODEL

var ServiceComponent = (function () {
    function ServiceComponent(serviceServ) {
        this.serviceServ = serviceServ;
    }
    ServiceComponent.prototype.ngOnInit = function () { };
    /*
      Allows user functionality if user exists/logged in.
    */
    ServiceComponent.prototype.belongsToUser = function () {
        // Returns boolean
        return localStorage.getItem('userId') == this.service.userId;
    };
    // EDIT SERVICE
    ServiceComponent.prototype.onEdit = function () {
        event.preventDefault();
        this.serviceServ.editService(this.service);
    };
    // DELETE SERVICE
    ServiceComponent.prototype.onDelete = function () {
        event.preventDefault();
        this.serviceServ.deleteService(this.service)
            .subscribe(function (deletedServiceRes) { return console.log(deletedServiceRes); });
    };
    return ServiceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_model__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_model__["a" /* Service */]) === "function" && _a || Object)
], ServiceComponent.prototype, "service", void 0);
ServiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* Component */])({
        selector: 'service',
        template: __webpack_require__("../../../../../src/app/services/html/service.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__service_service__["a" /* ServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__service_service__["a" /* ServiceService */]) === "function" && _b || Object])
], ServiceComponent);

var _a, _b;
//# sourceMappingURL=service.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/service.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/*
Front-end side modeling of Service class.
*/
var Service = (function () {
    function Service(name, price, description, type, createdAt, serviceId, userId, userName, serviceImage) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.type = type;
        this.createdAt = createdAt;
        this.serviceId = serviceId;
        this.userId = userId;
        this.userName = userName;
        this.serviceImage = serviceImage;
    }
    return Service;
}());

//# sourceMappingURL=service.model.js.map

/***/ }),

/***/ "../../../../../src/app/services/service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_model__ = __webpack_require__("../../../../../src/app/services/service.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// USE ADDITIONAL OPERATORS


// SERVICE MODEL

var ServiceService = (function () {
    /*
      Inject Dependencies/Other Services here.
    */
    function ServiceService(http
        // private errorService: ErrorService
    ) {
        this.http = http;
        this.services = [];
        /*
          The backend node server.
        */
        this.backEnd = 'http://localhost:8080/services';
        this.prodBackEnd = 'services';
        // EDIT SERVICE
        this.serviceEditSignal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    // CREATE (service-form.component.ts)
    ServiceService.prototype.addService = function (createServiceReq) {
        var _this = this;
        console.log(this.services);
        // const requestBody = JSON.stringify(createServiceReq);
        /*
          Add headers to read content as JSON or else it'll automatically read it
          as plain text which will throw a 500 error because we are sending the
          response through as json not plain text.
        */
        var multipartHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'enctype': 'multipart/form-data' });
        /*
          This token variable will be used to pass the user token onto the URL so
          we can authenticate the user with other requests.
        */
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        /*
          3rd argument in this http post should include the headers to set headers on the post.
          Also map the response service properties to the front-end service model for use on the front-end
          of backend data.
        */
        return this.http.post(this.prodBackEnd + token, createServiceReq, { headers: multipartHeaders })
            .map(function (createdServiceRes) {
            // turns createdServiceRes into json format and then saves it to a nerServideData variable.
            var newServiceData = createdServiceRes.json();
            /*
              IMPORTANT* to model the front-end service model. Always double-check.
            */
            var newService = new __WEBPACK_IMPORTED_MODULE_4__service_model__["a" /* Service */](newServiceData.obj.name, newServiceData.obj.price, newServiceData.obj.description, newServiceData.obj.type, newServiceData.obj.createdAt, newServiceData.obj._id, 
            // pull user data from service's user field.
            newServiceData.obj.user._id, newServiceData.obj.user.userName, newServiceData.obj.image);
            _this.services.push(newService);
            return newService;
        })
            .catch(function (error) {
            // this.errorService.handleError(error.json());
            // needs to return observable, can't be voide of returns.
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json());
        });
    };
    // FETCH SERVICES (service-list.component.ts)
    ServiceService.prototype.getServices = function () {
        /*
        This function will be used to retrieve the array of services from the database to be used.
        */
        var _this = this;
        return this.http.get(this.prodBackEnd)
            .map(function (fetchedServicesRes) {
            console.log(fetchedServicesRes.json().message);
            var servicesToTransform = fetchedServicesRes.json().obj;
            var transformedServices = [];
            for (var _i = 0, servicesToTransform_1 = servicesToTransform; _i < servicesToTransform_1.length; _i++) {
                var service = servicesToTransform_1[_i];
                /*
                  This will create a front-end version of each service in the database array,
                  by assigning the backend service properties to the corresponding front-end properties.
                  So refer to the front-end service model and names.
                  Example: service._id is pulling the id of the service from the backend database, and setting
                  the value returned by that property to become the value of the frontend serviceId property.
                */
                transformedServices.push(new __WEBPACK_IMPORTED_MODULE_4__service_model__["a" /* Service */](service.name, service.price, service.description, service.type, service.createdAt, service._id, service.user._id, service.user.userName, service.image));
            }
            _this.services = transformedServices;
            console.log(_this.services);
            return transformedServices;
        })
            .catch(function (error) {
            // this.errorService.handleError(error.json());
            // needs to return observable, can't be void
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json());
        });
    };
    /*
      Emits the object of th service to be editted.
      Listen to it on the form to fill up the form fields with it for editing.
    */
    ServiceService.prototype.editService = function (editServiceReq) {
        this.serviceEditSignal.emit(editServiceReq);
    };
    // UPDATE SERVICE
    ServiceService.prototype.updateService = function (updateServiceReq, serviceId) {
        // const requestBody = JSON.stringify(updateServiceReq);
        // const jsonHeader = new Headers({'Content-Type': 'application/json'});
        var multipartHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'enctype': 'multipart/form-data' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch(this.prodBackEnd + '/' + serviceId + token, updateServiceReq, { headers: multipartHeader })
            .map(function (updatedServiceRes) {
            var updatedService = updatedServiceRes.json();
            return updatedService;
        })
            .catch(function (error) {
            // this.errorService.handleError(error.json());
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json());
        });
    };
    // DELETE SERVICE
    ServiceService.prototype.deleteService = function (deleteServiceReq) {
        /*
          Front-end Deletion.
        */
        this.services.splice(this.services.indexOf(deleteServiceReq), 1);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        /*
          Back-end Deletion.
        */
        return this.http.delete(this.prodBackEnd + '/' + deleteServiceReq.serviceId + token)
            .map(function (deletedServiceRes) { return deletedServiceRes.json(); })
            .catch(function (error) {
            // this.errorService.handleError(error.json());
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json());
        });
    };
    return ServiceService;
}());
ServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ServiceService);

var _a;
//# sourceMappingURL=service.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map