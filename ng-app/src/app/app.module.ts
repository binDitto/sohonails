
// PROVIDERS
import { ServiceService } from './services/service.service';
import { AuthService } from './auth/auth.service';

// IMPORTS
import { appRouter } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// COMPONENT DECLARATIONS
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ServiceComponent } from './services/service.component';
import { AuthNavComponent } from './auth/auth-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ServiceComponent,
    HomeComponent,
    AuthNavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouter
  ],
  providers: [ServiceService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
