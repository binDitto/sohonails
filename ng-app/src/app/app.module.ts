// PROVIDERS
import { ServiceService } from './services/service.service';

// IMPORTS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// COMPONENT DECLARATIONS
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ServiceComponent } from './services/service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
