import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: '../template/bio.template.html',
})
export class DonateComponent implements OnInit {
  cards?: any[] = [
    { link: 'link', svg: 'trakteer', name: 'discord official' },
    { svg: 'saweria' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
