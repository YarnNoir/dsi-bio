import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../template/bio.template.html',
})
export class HomeComponent implements OnInit {
  cards?: any[] = [
    { link: 'link', svg: 'discord', name: 'discord official' },
    {},
  ];
  constructor(private element: ElementRef) {}

  ngOnInit(): void {}
}
