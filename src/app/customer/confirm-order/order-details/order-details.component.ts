import { Component, OnInit,Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../services/confirm-order.service';
import pedidoInterface from '../../../interfaces/pedidoInterface';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent extends ViewComponent implements OnInit {

  
  pedido: pedidoInterface;

  constructor(_injector: Injector, public cpService: ConfirmOrderService) {
    super(_injector)
  }

  ngOnInit() {
    this.cpService.currentMiPedido$.subscribe((miPedido) => this.pedido = miPedido)
  }

  goTo(p1?: string, p2?: string) {

    if (p2) {
      this.message.confirm(`Al otorgar acceso, podrás ver tus <br/>contactos`
        , "¿Induacril quiere acceder a tus contactos?"
        , (confirmation) => {
          if (confirmation) {
            this.navigation.forward(p1)
          } else {
            this.navigation.forward(p2)
          }
        }, "Permitir", "No permitir"
      )
    } else {
      this.navigation.forward(p1);
    }


  }
}
