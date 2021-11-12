import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  @Input() svg?: string;
  @Input() pic?: string;
  constructor() {}

  ngOnInit(): void {}
}
