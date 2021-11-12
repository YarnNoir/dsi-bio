import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yarn',
  templateUrl: '../template/bio.template.html',
})
export class YarnComponent implements OnInit {
  cards?: any[] = [
    { link: 'link', svg: 'discord', name: 'discord official' },
    {},
  ];
  constructor() {}

  ngOnInit(): void {}
}
