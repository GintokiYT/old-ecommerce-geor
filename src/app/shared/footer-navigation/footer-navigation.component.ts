import { Component, Injector, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

import { Router } from '@angular/router';
import { LoginService } from 'src/app/account/services/login.service';

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss'],
})
export class FooterNavigationComponent extends ViewComponent implements OnInit {

  @ViewChild('myItems') myItems: ElementRef;

  @ViewChild('myChat') myChat: ElementRef;
  @ViewChild('myBuy') myBuy: ElementRef;
  @ViewChild('myProfile') myProfile: ElementRef;
  @ViewChild('myHome') myHome: ElementRef;

  userLogged: boolean = false;

  constructor(_injector: Injector, private router: Router,
              private lgService : LoginService) {
    super(_injector);
  }

  ngOnInit() {
    this.lgService.currentUserLogged$.subscribe( (logged) => {
      this.userLogged = logged;
    })
  }

  ngAfterViewInit() {

    console.log(this.router.url);

    const listItems = this.myItems.nativeElement;
    const items = listItems.querySelectorAll('.inbox-footer__content--item');

    items.forEach(item => item.classList.remove('active'));

    if(this.router.url === '/customer/main-inbox') {
      this.myChat.nativeElement.classList.add('active')
    }
    if(this.router.url === '/customer/empty-basket') {
      this.myBuy.nativeElement.classList.add('active')
    }
    if(this.router.url === '/login' || this.router.url === '/customer/manage-user-information') {
      this.myProfile.nativeElement.classList.add('active');
    }
    if(this.router.url === '/customer/home') {
      this.myHome.nativeElement.classList.add('active');
    }
 }

  onActive(id: string) {
    switch(id) {
      case 'Chat':
        this.navigation.forward('/customer/main-inbox');
        break;
      case 'Buy':
        this.navigation.forward('/customer/empty-basket');
        break;
      case 'Profile':
        if(this.userLogged){
          this.navigation.forward("/customer/manage-user-information")
        }else{
          this.navigation.forward('/login');
        }
        break;
      case 'Home':
        this.navigation.forward('/customer/home');
        break;
    }
  }

}
