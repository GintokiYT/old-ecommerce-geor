import { Component, Injector, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
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
  userLogged: boolean;

  constructor(_injector: Injector, private router: Router,
              private lgService : LoginService) {
    super(_injector);
    this.lgService.currentUserLogged$.subscribe( userLogged => this.userLogged = userLogged);
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

          if(this.userLogged === true && index === 4) {
            this.navigation.root(this.getRoutes()[index][1], 'forward')
          } else {
            this.navigation.root(this.getRoutes()[index][0], 'forward');
          }

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
      1: ['/customer/search-general'],
      2: ['/customer/main-inbox'],
      3: [
          '/customer/empty-basket',
          '/customer/my-basket',
          '/customer/collaborative-basket'
        ],
      4: ['/login', '/customer/manage-user-information'],
    }
  }
}
