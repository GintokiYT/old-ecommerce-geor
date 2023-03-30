import { Location } from '@angular/common';
import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-variants',
  templateUrl: './header-variants.component.html',
  styleUrls: ['./header-variants.component.scss'],
})
export class HeaderVariantsComponent extends ViewComponent implements OnInit {

  constructor( _injector: Injector, private location: Location, private router: Router ) {
    super(_injector)
  }

  ngOnInit() {}

  goBack(){

    const currentRouter = this.router.url;

    if(currentRouter === '/customer/search-general/product-detail/variants') {
      return this.navigation.back('/customer/search-general/product-detail');
    }

    if(currentRouter === '/customer/manage-favorites/variants') {
      return this.navigation.back('/customer/manage-favorites');
    }

    const back = localStorage.getItem('back') ?? '';
    if(back) {
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '');
    } else {
      this.navigation.back('/customer/product');
    }

  }

}
