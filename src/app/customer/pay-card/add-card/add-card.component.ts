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
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '/customer/add-card');
    } else {
      this.navigation.root('/customer/way-pay','forward')
    }
  }
   /*  this.navigation.root('/customer/way-pay','forward'); */


   back(){
    this.navigation.root('/customer/way-pay','back');
   }

  onSubmit(formulario:NgForm){ }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
