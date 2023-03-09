import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'icon-input-close',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
      <rect x="0.599976" y="0.799805" width="16.4" height="16.4" rx="8.2" fill="#E0E0E0"/>
      <g clip-path="url(#clip0_9433_1499)">
      <path d="M6.30005 6.5L11.3 11.5" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"/>
      <path d="M6.30005 11.5L11.3 6.5" stroke="white" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round"/>
      </g>
      <defs>
      <clipPath id="clip0_9433_1499">
      <rect width="10" height="10" fill="white" transform="translate(3.80005 4)"/>
      </clipPath>
      </defs>
    </svg>
  `,
  styles: [`

  `]
})
export class iconInputClose implements OnInit {

  constructor() { }

  ngOnInit() {}

}
