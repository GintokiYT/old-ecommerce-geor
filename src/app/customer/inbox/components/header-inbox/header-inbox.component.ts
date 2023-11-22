import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-inbox',
  templateUrl: './header-inbox.component.html',
  styleUrls: ['./header-inbox.component.scss'],
})
export class HeaderInboxComponent extends ViewComponent implements OnInit {

  previousRoute: string;

  constructor(
    _injector: Injector,
    private callNumber: CallNumber,
    private location: Location,
    private router: Router
  ) {
    super(_injector);
    const prevUrl = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    this.previousRoute = prevUrl;
  }

  ngOnInit() {}

  goBack() {

    const ionfooter: any = document.querySelector('.ion-footer');
    ionfooter.style.display = 'none';

    const currentRouter = this.router.url;

    if(currentRouter.includes('/customer/search-general/product-detail/internal-inbox')) {
      return this.navigation.back('/customer/search-general/product-detail');
    }

    if(currentRouter.includes('/customer/product/internal-inbox')) {
      return this.navigation.back('/customer/product');
    }

    if(currentRouter.includes('/customer/last-step/internal-inbox')) {
      return this.navigation.back('/customer/last-step');
    }

    //this.navigation.back('/customer/main-inbox');
    this.navigation.back(this.previousRoute ?? '/customer/main-inbox');
  }

  openTelf() {
    console.log('Llamando...')
    // this.navigation.root('/customer/telefono', 'forward');
    this.callNumber.callNumber("18001010101", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
