import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent extends ViewComponent implements OnInit {

  constructor(_injector:Injector) {
    super(_injector)
   }

  ngOnInit() {}

  goSend(){
    this.navigation.root('/customer/send' ,'forward')
  }
  goDetails(){
    this.navigation.root('/customer/detail','forward')
    console.log("detail");
  }
  goPicture(){
    this.navigation.root('/customer/picture-big','forward')
  }

  goReturnsExchanges() {
    this.navigation.forward('/customer/settings/about-us/returns-exchanges');
  }

}
