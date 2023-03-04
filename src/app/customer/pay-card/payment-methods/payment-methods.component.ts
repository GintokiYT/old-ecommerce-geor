import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent extends ViewComponent implements OnInit {

  constructor(private _injector: Injector) {
    super(_injector)
   }

  ngOnInit() {}
 /*  goTo(path:string){
    this.navigation.forward(path)
  } */
   goTo(path:string){
    const back = localStorage.getItem('back') ?? '';
    if(back) {
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '');
    } else {
    this.navigation.forward(path)
    }
  }

}
