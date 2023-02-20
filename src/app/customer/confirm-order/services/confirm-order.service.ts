import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import IOrder from '../../../interfaces/IOrder';
import ICoupon from '../../../interfaces/ICoupon';
import IBill from '../../../interfaces/IBill';
import IPayMethod from '../../../interfaces/IPayMethod';

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

    bill: 
      {
        name: "",
        code: "",
        type: "",
      }
    ,

    detailsOrderToHome: {
      direction : "¿Donde dejaremos tu pedido?",
      dClass: "lugar-pedido",
      time: "Llega el 26 dic, 8:00am - 9:00am",
      who: "Wilfredo",
      requirements: ""
    },
  
  
    detailsOrderToStore:{
      store: "",
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

  setDirectionStore(ubication:any):void{
    this.myOrder.detailsOrderToStore.direction = ubication.direction;
    this.myOrder.detailsOrderToStore.store = ubication.store;
    this.myOrder.detailsOrderToStore.dClass = "lugar-pedido with-direction"
    this.myOrder$.next(this.myOrder);
  }

  setTypeOrder(tipo:string){
    this.myOrder.typeOrder = tipo;
    this.myOrder$.next(this.myOrder);
  }

  setPayMethod(metodo: IPayMethod){
    this.myOrder.payMethod = metodo;
    this.myOrder$.next(this.myOrder);
  }

  setCoupon(coupon:ICoupon){
    this.myOrder.coupon = coupon;
    this.myOrder$.next(this.myOrder);
  }

  setBill(bill:IBill){
    this.myOrder.bill = bill;
    this.myOrder$.next(this.myOrder);
  }



}
