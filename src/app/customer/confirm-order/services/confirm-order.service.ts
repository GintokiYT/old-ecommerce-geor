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

  //Servicio para obtenr los datos de delivery
  private deliveryRequirements = new BehaviorSubject<string>('Requisitos para la entrega');

  get getDeliveryRequirements():Observable<string> {
    return this.deliveryRequirements;
  }

  setDeliveryRequirements(value: string) {
    this.deliveryRequirements.next(value);
  }





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
        id: "",
        type: "",
      }
    ,

    detailsOrderToHome: {
      direction : "¿Dónde dejaremos tu pedido?",
      dClass: "lugar-pedido",
      time: "Llega el 26 dic, 8:00am - 9:00am",
      who: "Wilfredo",
      requirements: ""
    },


    detailsOrderToStore:{
      store: "",
      direction : "¿Dónde recogerás tu pedido?",
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

  setContactDomicilio(contactName: string){
    this.myOrder.detailsOrderToHome.who = contactName;
    this.myOrder$.next(this.myOrder);
  }

  setContactTienda(contactName: string){
    this.myOrder.detailsOrderToStore.who = contactName;
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
