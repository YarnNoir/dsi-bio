import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../template/bio.template.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards?: any[] = [{ link: 'link', svgDiscord: true }, {}];
  constructor(private element: ElementRef) {}

  ngOnInit(): void {}
}
