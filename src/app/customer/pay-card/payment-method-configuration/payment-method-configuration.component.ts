import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-payment-method-configuration',
  templateUrl: './payment-method-configuration.component.html',
  styleUrls: ['./payment-method-configuration.component.scss'],
})
export class PaymentMethodConfigurationComponent extends ViewComponent implements OnInit {

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
