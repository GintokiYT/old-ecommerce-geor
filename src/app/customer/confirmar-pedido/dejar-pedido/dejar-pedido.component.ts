import { Component, OnInit, Injector, Input } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmarPedidoService } from '../services/confirmar-pedido.service';
import pedidoInterface from '../../../interfaces/pedidoInterface';

@Component({
  selector: 'app-dejar-pedido',
  templateUrl: './dejar-pedido.component.html',
  styleUrls: ['./dejar-pedido.component.scss'],
})
export class DejarPedidoComponent extends ViewComponent implements OnInit {

  pedido: pedidoInterface;

  constructor(_injector: Injector, public cpService: ConfirmarPedidoService) {
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
