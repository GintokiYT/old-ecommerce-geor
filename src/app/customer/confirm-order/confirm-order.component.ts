import { Component, OnInit, Injector } from '@angular/core';
import { ConfirmOrderService } from './services/confirm-order.service';
import MetodoPago from '../../interfaces/MetodoPago';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
})
export class ConfirmOrderComponent extends ViewComponent implements OnInit {

  metodoPago : MetodoPago;

  constructor(private cpService: ConfirmOrderService,
              private _injector:Injector) {
                super(_injector)
   }

   
  ngOnInit() {
    this.cpService.currentMiPedido$.subscribe( (miPedido) => {
      this.metodoPago = miPedido.metodoPago;
    })
  }


  onGoToPayMethods(){
    this.navigation.root("customer/payment-methods","forward")
  }


}
