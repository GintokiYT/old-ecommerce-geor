import { Injectable } from '@angular/core';
import pedidoInterface from '../../../interfaces/pedidoInterface';


@Injectable({
  providedIn: 'root'
})
export class ConfirmarPedidoService {

  public miPedido: pedidoInterface = {

    detallesEntregaADomicilio: {
      direction : "¿Donde dejaremos tu pedido?",
      time: "Llega el 26 dic, 8:00am - 9:00am",
      who: "Wilfredo",
      requisitos: ""
    },


    detallesEntregaATienda:{
      direction : "¿Donde recojeras tu pedido?",
      who: "Wilfredo"
    }
    
  }

  changeDirectionDomicilio(direction:string):void{
    this.miPedido.detallesEntregaADomicilio.direction = direction;
  }




  constructor() { }
}
