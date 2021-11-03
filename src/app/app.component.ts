import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dsi-bio';
  crlRdm: number = Math.floor(Math.random() * 720) + 1 - 360;
  isActive: string = "";

    //console.log(this.router.url);
  constructor(
    private location: Location,
    private router: Router,
    private titleService:Title
  ) {
    // decide what to do when this event is triggered.
    router.events.subscribe(val => {
      this.isActive = (location.path() === "") ? "active" : "";
      
      switch (location.path()) {
        case "":
        this.titleService.setTitle("Home | DSI Bio");
        break;
        case "donate":
        this.titleService.setTitle("Donate | DSI Bio");
        break;
        case "yarn":
        this.titleService.setTitle("Yarn | DSI Bio");
        break;
        default:
        this.titleService.setTitle("Page not found | DSI Bio");
        break;
      }
    });
  }
}