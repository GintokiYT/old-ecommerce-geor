import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-close-search',
  template: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_9477_2052)">
      <path d="M6 6L18 18" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
      <path d="M6 18L18 6" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    </g>
    <defs>
      <clipPath id="clip0_9477_2052">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>
  `,
  styles: [`

  `]
})
export class iconCloseSearch implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
