import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../template/bio.template.html',
})
export class HomeComponent implements OnInit {
  cards?: any[] = [
    { link: 'https://discord.gg/WvB8wpJvNH', svg: 'discord', name: 'Discord Server Official' },
    {name: "Dikala anda jadi Konten Kreator", link:"https://facebook.com/dinastikonten"},
    {name: "Dikala anda jadi Konten Kreator", link:"https://facebook.com/dinastikonten"},
    {name: "Dikala anda jadi Konten Kreator", link:"https://facebook.com/dinastikonten"},
  ];
  constructor(private element: ElementRef) {}

  ngOnInit(): void {}
}
