import { Component, Injector, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-main',
  templateUrl: './footer-main.component.html',
  styleUrls: ['./footer-main.component.scss'],
})
export class FooterMainComponent extends ViewComponent implements OnInit {

  @ViewChild('myItems') myItems: ElementRef;

  @ViewChild('myChat') myChat: ElementRef;
  @ViewChild('myBuy') myBuy: ElementRef;
  @ViewChild('myProfile') myProfile: ElementRef;

  constructor(_injector: Injector, private router: Router) {
    super(_injector);
  }

  ngOnInit() {}

  ngAfterViewInit() {

    console.log(this.router.url);

    const listItems = this.myItems.nativeElement;
    const items = listItems.querySelectorAll('.inbox-footer__content--item');

    items.forEach(item => item.classList.remove('active'));

    if(this.router.url === '/customer/main-inbox') {
      this.myChat.nativeElement.classList.add('active')
    }
    if(this.router.url === '/customer/collaborative-basket') {
      this.myBuy.nativeElement.classList.add('active')
    }
    if(this.router.url === '/login') {
      this.myProfile.nativeElement.classList.add('active');
    }
 }

  onActive(id: string) {
    switch(id) {
      case 'Chat':
        this.navigation.root('/customer/main-inbox', 'forward');
        break;
      case 'Buy':
        this.navigation.root('/customer/collaborative-basket', 'forward');
        break;
      case 'Profile':
        this.navigation.root('/login', 'forward');
        break;
    }
  }
}
