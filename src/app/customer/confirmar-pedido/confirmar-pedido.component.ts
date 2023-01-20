import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrls: ['./confirmar-pedido.component.scss'],
})
export class ConfirmarPedidoComponent extends ViewComponent implements OnInit {

  pedido: string = "¿Donde dejaremos tu pedido?";
  envioADomicilio: boolean = true;
  recojoTienda: boolean = false;

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngOnInit() {
    this.message.confirm("Al otorgar acceso, podrás ver tus contactos"
      , "¿Induacril quiere acceder a tus contactos?"
      , (confirmation) => {
        console.log(confirmation)
      },"permitir", "No permitir"
      )
  }


  cambiarOpciones(argumento: any): void {
    const { envioADomicilio, recojoEnTienda } = argumento;
    this.envioADomicilio = envioADomicilio;
    this.recojoTienda = recojoEnTienda;

  }

  Click(){
    this.navigation.back("");
  }



}
