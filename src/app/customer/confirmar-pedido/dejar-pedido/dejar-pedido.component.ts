import { Component, OnInit, Injector, Input } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-dejar-pedido',
  templateUrl: './dejar-pedido.component.html',
  styleUrls: ['./dejar-pedido.component.scss'],
})
export class DejarPedidoComponent extends ViewComponent implements OnInit {

  pedido: string = "¿Donde dejaremos tu pedido?";

  @Input()
  envioADomicilio: boolean = false;

  @Input()
  recojoTienda: boolean = false;

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngOnInit() { }

  goTo(p1?: string, p2?: string) {

    if (p2) {
      this.message.confirm("Al otorgar acceso, podrás ver tus contactos"
        , "¿Induacril quiere acceder a tus contactos?"
        , (confirmation) => {
          if (confirmation) {
            this.navigation.forward(p1)
          } else {
            this.navigation.forward(p2)
          }
        }, "permitir", "No permitir"
      )
    }else{
      this.navigation.forward(p1);
    }


  }

}
