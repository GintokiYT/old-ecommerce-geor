import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-manage-payment-method',
  templateUrl: './manage-payment-method.component.html',
  styleUrls: ['./manage-payment-method.component.scss'],
})
export class ManagePaymentMethodComponent extends ViewComponent implements OnInit {

  constructor(_injector:Injector) {
    super(_injector);
   }

  ngOnInit() {}

  goAddCard(){
    const routes = {
      main: '/customer/payment-method-configuration',
      next: '/customer/card-payment-methods',
      back: ''
    }

    localStorage.setItem('back', JSON.stringify(routes));

    this.navigation.root('/customer/add-card','forward');
  }

}
