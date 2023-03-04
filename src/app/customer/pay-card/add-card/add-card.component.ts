import { Component, OnInit, Injector } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent extends ViewComponent implements OnInit {

  isModalOpen = false;


  data={
    cardnumber:'',
    cardholder:'',
    expiration:'',
    code:'',
  }
  constructor(private _injector: Injector,private location:Location) {
    super(_injector)
   }
   items = [];

   ngOnInit() { }

/*   goTo(path:string){
    this.navigation.forward(path)
  } */
  goWayPay(){

    if(localStorage.getItem('back')) {
      const localData = JSON.parse(localStorage.getItem('back'));
      this.navigation.forward(localData['next']);

      const routes = {
        main: '/customer/payment-method-configuration',
        next: '/customer/card-payment-methods',
        back: '/customer/add-card'
      }

      localStorage.setItem('back', JSON.stringify(routes));

      const inputs = document.querySelectorAll('ion-input');
      inputs.forEach( input => input.value = '');

    } else {
      this.navigation.root('/customer/way-pay','forward')
    }
  }
   /*  this.navigation.root('/customer/way-pay','forward'); */


   back(){
    const localData = JSON.parse(localStorage.getItem('back')) ?? '';

    if(localData) {
      this.navigation.back(localData['main']);
      localStorage.setItem('back', '');
    } else {
      this.navigation.root('/customer/way-pay','back');
    }

   }

  onSubmit(formulario:NgForm){ }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
