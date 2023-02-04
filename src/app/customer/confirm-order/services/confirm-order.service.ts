import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import pedidoInterface from '../../../interfaces/pedidoInterface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConfirmOrderService {

  private miPedido: pedidoInterface = {

    tipoPedido: "domicilio",

    metodoPago: {
      tipo: "Aún no eliges como pagar",
      numero : "",
      icon: "/assets/icons/icon-danger.svg"
    } ,

    detallesEntregaADomicilio: {
      direction : "¿Donde dejaremos tu pedido?",
      dClass: "lugar-pedido",
      time: "Llega el 26 dic, 8:00am - 9:00am",
      who: "Wilfredo",
      requisitos: ""
    },
  
  
    detallesEntregaATienda:{
      direction : "¿Donde recojeras tu pedido?",
      dClass: "lugar-pedido",
      who: "Wilfredo"
    }
    
  }
  
  private miPedido$ = new BehaviorSubject<pedidoInterface>(this.miPedido);

  get currentMiPedido$():Observable<pedidoInterface>{
    return this.miPedido$;
  }

  constructor() { }

  setDirectionDomicilio(direction:string):void{
    this.miPedido.detallesEntregaADomicilio.direction = direction;
    this.miPedido.detallesEntregaADomicilio.dClass = "lugar-pedido with-direction"
    this.miPedido$.next(this.miPedido);
  }

  setDirectionTienda(direction:string):void{
    this.miPedido.detallesEntregaATienda.direction = direction;
    this.miPedido.detallesEntregaATienda.dClass = "lugar-pedido with-direction"
    this.miPedido$.next(this.miPedido);
  }

  setTipoPedido(tipo:string){
    this.miPedido.tipoPedido = tipo;
    this.miPedido$.next(this.miPedido);
  }

  setMetodoPago(metodo){
    this.miPedido.metodoPago = metodo;
    this.miPedido$.next(this.miPedido);
  }



}
