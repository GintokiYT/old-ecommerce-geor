import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import IOrder from '../../../interfaces/IOrder';
import ICoupon from '../../../interfaces/ICoupon';

@Injectable({
  providedIn: 'root'
})
export class ConfirmOrderService {

  private myOrder: IOrder = {

    typeOrder: "domicilio",

    payMethod: {
      type: "Aún no eliges como pagar",
      number : "",
      icon: "/assets/icons/icon-danger.svg"
    },

    coupon: {
      discount: "",
      code: "Agregar cupón",
      ocassion: "",
      expiration: "",
      conditions: ""
    },

    detailsOrderToHome: {
      direction : "¿Donde dejaremos tu pedido?",
      dClass: "lugar-pedido",
      time: "Llega el 26 dic, 8:00am - 9:00am",
      who: "Wilfredo",
      requirements: ""
    },
  
  
    detailsOrderToStore:{
      direction : "¿Donde recojeras tu pedido?",
      dClass: "lugar-pedido",
      who: "Wilfredo"
    }
    
  }
  
  private myOrder$ = new BehaviorSubject<IOrder>(this.myOrder);

  get currentMyOrder$():Observable<IOrder>{
    return this.myOrder$;
  }

  constructor() { }

  setDirectionHome(direction:string):void{
    this.myOrder.detailsOrderToHome.direction = direction;
    this.myOrder.detailsOrderToHome.dClass = "lugar-pedido with-direction"
    this.myOrder$.next(this.myOrder);
  }

  setDirectionStore(direction:string):void{
    this.myOrder.detailsOrderToStore.direction = direction;
    this.myOrder.detailsOrderToStore.dClass = "lugar-pedido with-direction"
    this.myOrder$.next(this.myOrder);
  }

  setTypeOrder(tipo:string){
    this.myOrder.typeOrder = tipo;
    this.myOrder$.next(this.myOrder);
  }

  setPayMethod(metodo){
    this.myOrder.payMethod = metodo;
    this.myOrder$.next(this.myOrder);
  }

  setCoupon(coupon:ICoupon){
    this.myOrder.coupon = coupon;
    this.myOrder$.next(this.myOrder);
  }



}
