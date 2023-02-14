import { Component, OnInit, Injector } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ViewComponent } from '@geor360/ecore';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
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

   ngOnInit() {
     this.generateItems();
   }
  goTo(path:string){
    this.navigation.forward(path)
  }
  onSubmit(formulario:NgForm){ }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }
  onIonInfinite(ev) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
