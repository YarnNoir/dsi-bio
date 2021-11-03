import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../template/bio.template.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
ColorRipple: string = "white";
  constructor() { }

  ngOnInit(): void {
  }

}
