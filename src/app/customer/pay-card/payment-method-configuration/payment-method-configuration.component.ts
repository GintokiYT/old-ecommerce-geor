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
    localStorage.setItem('back', '/customer/card-payment-methods');
    this.navigation.root('/customer/add-card','forward');
  }
}
