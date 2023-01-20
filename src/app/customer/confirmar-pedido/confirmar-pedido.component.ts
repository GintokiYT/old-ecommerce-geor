import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.component.html',
  styleUrls: ['./confirmar-pedido.component.scss'],
})
export class ConfirmarPedidoComponent implements OnInit {

  pedido: string = "¿Donde dejaremos tu pedido?";
  envioADomicilio: boolean = true;
  recojoTienda: boolean = false;

  constructor() { }

  ngOnInit() {}


  cambiarOpciones(argumento:any):void{
    const {envioADomicilio,recojoEnTienda} = argumento;
    this.envioADomicilio = envioADomicilio;
    this.recojoTienda = recojoEnTienda;
  }

  

}
