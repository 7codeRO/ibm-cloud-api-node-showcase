import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrlNluComponent } from './components/url-nlu/url-nlu.component';
import { MaterialModule } from "./material.module";
import { HttpClientModule } from "@angular/common/http";
import { UrlNluService } from "./components/url-nlu/url-nlu.service";

@NgModule({
  declarations: [
    AppComponent,
    UrlNluComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    MaterialModule
  ],
  providers: [UrlNluService],
  bootstrap: [AppComponent]
})
export class AppModule { }
