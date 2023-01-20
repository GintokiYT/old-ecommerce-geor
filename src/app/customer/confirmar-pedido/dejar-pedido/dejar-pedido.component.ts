import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dejar-pedido',
  templateUrl: './dejar-pedido.component.html',
  styleUrls: ['./dejar-pedido.component.scss'],
})
export class DejarPedidoComponent implements OnInit {

  pedido: string = "¿Donde dejaremos tu pedido?";

  @Input()
  envioADomicilio: boolean = false;

  @Input()
  recojoTienda: boolean = false;

  constructor() { }

  ngOnInit() {}

}
