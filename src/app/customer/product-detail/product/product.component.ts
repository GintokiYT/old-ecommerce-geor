import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';
import { RouteService } from '../../../services/route.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent extends ViewComponent implements OnInit {

  constructor(_injector:Injector, private router: Router,
    private rs : RouteService) {
    super(_injector)
  }

  ngOnInit() {}

  goSend(){
    this.rs.setSetEnvioLastBackDirection(this.router.url);
    this.navigation.root('/customer/send' ,'forward')
  }
  goDetails(){
    this.navigation.root('/customer/detail','forward');
  }
  goPicture(){
    this.navigation.root('/customer/picture-big','forward');
  }

  goReturnsExchanges() {

    this.navigation.forward('/customer/change-return',)

/*
    const currentRouter = this.router.url;

    if(currentRouter === '/customer/search-general/product-detail') {
      return this.navigation.forward('/customer/search-general/product-detail/returns-exchanges');
    }

    localStorage.setItem('back', '/customer/product');
    this.navigation.forward('/customer/settings/about-us/returns-exchanges'); */
  }


}
