import { Component, OnInit, Injector } from '@angular/core';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
import { ViewComponent } from '@geor360/ecore';
import IPayMethod from '../../../interfaces/IPayMethod';

@Component({
  selector: 'app-card-payment-methods',
  templateUrl: './card-payment-methods.component.html',
  styleUrls: ['./card-payment-methods.component.scss'],
})
export class CardPaymentMethodsComponent extends ViewComponent implements OnInit {

  constructor(private _injector: Injector, private cpService: ConfirmOrderService) {
    super(_injector)
   }

  ngOnInit() {}

  goAddCard(){
    const back = localStorage.getItem('back') ?? '';
    if(back) {
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '/customer/card-payment-methods');
    } else {
      this.navigation.root('/customer/add-card','forward')
    }
/*
    localStorage.setItem('back', '/customer/card-payment-methods');
    this.navigation.root('/customer/add-card','forward') */
  }

  delete(tarjetaId: string) {
    this.message.confirm('¿Seguro que quieres eliminar la tarjeta?','',(confirmation)=>{
      const tarjetaAEliminar = document.getElementById(tarjetaId);
      tarjetaAEliminar.remove();

    },'Eliminar','Cancelar')
  }

  goback(){
  localStorage.setItem('back', '/customer/card-payment-methods');
  this.navigation.root('/customer/add-card','back');
  }

}
