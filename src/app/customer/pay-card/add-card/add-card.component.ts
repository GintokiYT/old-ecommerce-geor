import { Component, OnInit, Injector } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';

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
  constructor(private _injector: Injector) {
    super(_injector)
   }
   items = [];

   ngOnInit() { }

  goTo(path:string){
    this.navigation.forward(path)
  }
  onSubmit(formulario:NgForm){ }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
