import { Component, OnInit, Injector } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { PaymentMethodsService } from '../../../services/payment-methods.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent extends ViewComponent implements OnInit {

  data = {
    cardnumber: '',
    cardholder: '',
    expiration: '',
    code: '',
  }

  paymentData : any[];

  isModalOpen = false;
  previousRoute: string;
  items = [];

  constructor(private _injector: Injector,
     private location: Location, 
     private router: Router,
     private pms: PaymentMethodsService) {
    super(_injector);
    const prevUrl = this.router.getCurrentNavigation().previousNavigation?.finalUrl.toString();
    this.previousRoute = prevUrl;
    this.pms.currentPaymentData.subscribe( d => this.paymentData = d);
  }

  ngOnInit() { }

  goToPaymentMethods() {

    if (localStorage.getItem('back')) {
      const localData = JSON.parse(localStorage.getItem('back'));
      this.navigation.forward(localData['next']);

      const routes = {
        main: '/customer/payment-method-configuration',
        next: '/customer/card-payment-methods',
        back: '/customer/add-card'
      }

      localStorage.setItem('back', JSON.stringify(routes));

      const inputs = document.querySelectorAll('ion-input');
      inputs.forEach(input => input.value = '');

    } else {
      this.paymentData.push({...this.data,id:this.paymentData.length+1,selected:false})
      this.pms.setPaymentData(this.paymentData)
      this.navigation.root('/customer/payment-methods', 'forward')
    }
  }


  goBack() {
    /* const localData = JSON.parse(localStorage.getItem('back')) ?? '';
    if(localData) {
      this.navigation.back(localData['main']);
      localStorage.setItem('back', '');
    } else {
      this.navigation.root('/customer/way-pay','back');
    }
 */
    this.navigation.root(this.previousRoute, "back");
  }

  onSubmit(formulario: NgForm) { }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
