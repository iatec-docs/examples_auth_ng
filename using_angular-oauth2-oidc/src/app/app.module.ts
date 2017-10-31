import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, OAuthModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
