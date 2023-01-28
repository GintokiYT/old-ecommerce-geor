import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-collaborative-basket',
  templateUrl: './collaborative-basket.component.html',
  styleUrls: ['./collaborative-basket.component.scss'],
})
export class CollaborativeBasketComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector);
   }

  ngOnInit() {}

  goToConfirmOrder() {
    this.navigation.root('/customer/confirmar-pedido', 'forward');
  }
}
