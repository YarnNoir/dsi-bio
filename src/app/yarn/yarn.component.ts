import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yarn',
  templateUrl: '../template/bio.template.html',
})
export class YarnComponent implements OnInit {
  cards?: any[] = [
    {
      link: 'https://youtube.com/channel/UCR6SWzQ-xgl9VV-W1iJtgFQ',
      svg: 'youtube',
      name: 'Youtube',
    },
    {
      svg: 'twitter',
      name: 'Twitter',
      link: 'https://twitter.com/yarndinasti',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
