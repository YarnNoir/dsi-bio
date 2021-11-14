import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../template/bio.template.html',
})
export class HomeComponent implements OnInit {
  cards?: any[] = [
    {
      link: 'https://discord.gg/WvB8wpJvNH',
      svg: 'discord',
      name: 'Discord Server Official',
    },
    {
      name: 'Dikala Anda Menjadi Konten Kreator',
      link: 'https://facebook.com/dinastikonten',
    },
    {
      name: 'Dikala Anda Menjadi Gamer',
      link: 'https://facebook.com/damgfb',
    },
    {
      name: 'Keluh Kesah Kehidupan Manusia',
      link: 'https://facebook.com/dinastishitpost',
    },
    {
      name: 'Dunia DSI',
      link: 'https://facebook.com/dsiworld',
    },
  ];
  constructor(private element: ElementRef) {}

  ngOnInit(): void {}
}
