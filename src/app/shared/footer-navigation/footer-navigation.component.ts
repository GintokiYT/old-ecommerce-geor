import { Component, Injector, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

import { Router } from '@angular/router';
import { LoginService } from 'src/app/account/services/login.service';

@Component({
  selector: 'app-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  styleUrls: ['./footer-navigation.component.scss'],
})
export class FooterNavigationComponent extends ViewComponent implements OnInit {

  @ViewChildren('myItemFooter') myItemFooter: QueryList<ElementRef>;
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
    const currentRoute: string = this.router.url;
    const itemsFooter = Array.from(this.myItemFooter.toArray().map( item => item.nativeElement)) as HTMLDivElement[]
    this.addActiveClass(itemsFooter, currentRoute);

    itemsFooter.forEach( (item, index) => {
      item.addEventListener('click', () => {
        if(itemsFooter[index].classList.contains('active') !== true) {
          this.navigation.forward(this.getRoutes()[index][0]);
          this.addActiveClass(itemsFooter, currentRoute);
        }
      })
    })
 }

  addActiveClass(itemsFooter: HTMLDivElement[], currentRoute: string) {
    itemsFooter.forEach( item => item.classList.remove('active'));
    const active = Object.entries(this.getRoutes()).find(([key, value]) => value.includes(currentRoute));
    itemsFooter[active[0]].classList.add('active');
  }

  getRoutes() {
    return {
      0: ['/customer/home'],
      1: ['/customer/catalogue'],
      2: ['/customer/main-inbox'],
      3: [
          '/customer/empty-basket',
          '/customer/my-basket',
          '/customer/collaborative-basket'
        ],
      4: ['/customer/manage-user-information', '/login'],
    }
  }
}
