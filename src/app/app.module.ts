import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// canActivateChild - same as canActivate but if anonther component or page assoc with current page is trying to be viewed,
// canActivateChild will determine if user able to have access
// canDeactivate - determines if user can leave page
// canLoad - whether a route can be loaded to browser or not
// Resolve - check dynamic data and other read-only data

// To add module with routing AND assoc with the parent app - CLI command
// ng g module NAME --route 
