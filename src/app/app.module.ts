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

@NgModule({
  declarations: [
    AppComponent,
    BgImgComponent,
    EventComponent,
    HomeComponent,
    DonateComponent,
    YarnComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
