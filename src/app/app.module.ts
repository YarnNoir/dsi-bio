import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BgImgComponent } from './bg-img/bg-img.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { YarnComponent } from './yarn/yarn.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';
import { ImagesComponent } from './images/images.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    BgImgComponent,
    EventComponent,
    HomeComponent,
    DonateComponent,
    YarnComponent,
    NotFoundComponent,
    ImagesComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
