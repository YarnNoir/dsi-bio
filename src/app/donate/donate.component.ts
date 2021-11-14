import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: '../template/bio.template.html',
})
export class DonateComponent implements OnInit {
  cards?: any[] = [
    { link: 'https://trakteer.id/yarn', svg: 'trakteer', name: 'Trakteer' },
    { svg: 'saweria', name: 'Saweria', link: 'https://saweria.co/yarn' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
