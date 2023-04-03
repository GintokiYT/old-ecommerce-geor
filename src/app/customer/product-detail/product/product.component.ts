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

   slides: any[] = [
     {imgSrc: 'assets/images/img_productos.png', description: 'product'},
     {imgSrc: 'assets/images/img_productos.png', description: 'product'},
     {imgSrc: 'assets/images/img_productos.png', description: 'product'}
    ];

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
  }


}
