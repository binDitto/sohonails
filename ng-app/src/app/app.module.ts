import { ServiceListComponent } from './services/service-list.component';
import { ServiceFormComponent } from './services/service-form.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ServiceComponent } from './services/service.component';
import { AuthNavComponent } from './auth/auth-nav.component';
import { ServiceMainComponent } from './services/service-main.component';

// PROVIDERS
import { ServiceService } from './services/service.service';
import { AuthService } from './auth/auth.service';

// IMPORTS
import { appRouter } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ServiceComponent,
    ServiceMainComponent,
    ServiceFormComponent,
    ServiceListComponent,
    HomeComponent,
    AuthNavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouter,
    FormsModule
  ],
  providers: [ServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
