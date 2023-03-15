import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'icon-scanner',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22.5 12.8057H1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.6299 8.59559V7.08259C20.6299 5.02159 18.9589 3.35059 16.8969 3.35059H15.6919" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.37012 8.59559V7.08259C3.37012 5.02159 5.04112 3.35059 7.10312 3.35059H8.33912" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.6299 12.8047V16.8787C20.6299 18.9407 18.9589 20.6117 16.8969 20.6117H15.6919" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.37012 12.8047V16.8787C3.37012 18.9407 5.04112 20.6117 7.10312 20.6117H8.33912" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  styles: [`
    svg path {
      stroke: var(--ion-color-basic);
    }
  `]
})
export class iconScanner implements OnInit {

  constructor() { }

  ngOnInit() {}

}
