import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'bg-img',
  template: `
    <div class="bg-img" [ngStyle]="{'background-image': BgImg}"></div>
    <div class="in-bg"></div>
  `,
  styles: [
    
  ]
})
export class BgImgComponent implements AfterViewInit {
@ViewChild('random') randoms?: ElementRef;
imgRdm: number = Math.floor(Math.random() * 10) + 1;
BgImg: string = `url(/assets/bg/image${this.imgRdm}.jpg)`
  constructor() { }

   ngAfterViewInit(): void {
  }

}
