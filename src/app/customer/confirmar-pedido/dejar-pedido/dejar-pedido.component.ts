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

  ngOnInit() {}



}
