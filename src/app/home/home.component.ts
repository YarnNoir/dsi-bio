import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../template/bio.template.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  ColorRipple: string = "white";

  constructor(private element: ElementRef) {}

  ngOnInit(): void {}
  
  addRipple(event:any) {
    console.log(event.currentTarget)
    
  }

  ngAfterViewInit(): void {
    console.log(this.element.nativeElement)

    const doc = this.element.nativeElement

    
  }

}
