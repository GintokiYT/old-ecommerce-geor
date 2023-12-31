import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-product',
  templateUrl: './header-product.component.html',
  styleUrls: ['./header-product.component.scss'],
})
export class HeaderProductComponent extends ViewComponent implements OnInit {

  previousRoute: string;

  constructor(private _injector: Injector, private router: Router) {
    super(_injector);
    this.previousRoute = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    console.log(this.previousRoute)
  }

  ngOnInit() { }

  goToHome() {
    const currentRouter = this.router.url;

    console.log(this.previousRoute)

    if (this.previousRoute.includes("manage-order")) {
      this.navigation.back(this.previousRoute);
      return;
    }

    if (currentRouter === '/customer/search-general/product-detail') {
      this.navigation.back('/customer/search-general/product');
      return;
    }
    if (currentRouter === '/customer/search-general/product-detail') {
      this.navigation.back('/customer/search-general/product');
      return;
    }
    if (currentRouter === '/customer/empty-basket/product') {
      this.navigation.back('/customer/empty-basket');
      return;
    }


    const back = localStorage.getItem('back') ?? '';

    if (back) {
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '');
    } else {
      this.navigation.root("/customer/home", "back");
    }
    //this.navigation.root(this.previousRoute,"back");

  }
  goMyBasket() {
    this.navigation.root("/customer/my-basket", "forward");
  }


}
