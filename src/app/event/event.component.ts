import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events',
  template: `
    <p class="flex justify-center items-center h-full font-bold text-xl">
      No event this today!
    </p>
  `,
  styles: [],
})
export class EventComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
