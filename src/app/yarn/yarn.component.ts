import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yarn',
  templateUrl: '../template/bio.template.html',
})
export class YarnComponent implements OnInit {
  cards?: any[] = [
    { link: 'link', svg: 'youtube', name: 'discord official' },
    { svg: 'twitter'},
  ];
  constructor() {}

  ngOnInit(): void {}
}
