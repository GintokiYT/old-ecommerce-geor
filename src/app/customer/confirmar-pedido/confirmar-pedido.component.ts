import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrls: ['./confirmar-pedido.component.scss'],
})
export class ConfirmarPedidoComponent extends ViewComponent implements OnInit {

  envioADomicilio: boolean = true;
  recojoTienda: boolean = false;

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngOnInit() {
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
