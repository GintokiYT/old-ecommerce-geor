import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  miPedidoLastBackDirection : string = "";
  miPedidoLastBackDirection$ = new BehaviorSubject<string>(this.miPedidoLastBackDirection);

  myLocationLastBackDirection : string = "";
  myLocationLastBackDirection$ = new BehaviorSubject<string>(this.myLocationLastBackDirection);

  setContactLastSubmitBackDirection : string = "";
  setContactLastSubmitBackDirection$ = new BehaviorSubject<string>(this.setContactLastSubmitBackDirection);

  setProductLastBackDirection : string = "";
  setProductLastBackDirection$ = new BehaviorSubject<string>(this.setProductLastBackDirection);

  setEnvioLastBackDirection : string = "";
  setEnvioLastBackDirection$ = new BehaviorSubject<string>(this.setEnvioLastBackDirection);

  setPaymentMethodsLastBackDirection : string = "";
  setPaymentMethodsLastBackDirection$ = new BehaviorSubject<string>(this.setEnvioLastBackDirection);

  setDetailBackDirection : string = "";
  setDetailBackDirection$ = new BehaviorSubject<string>(this.setDetailBackDirection);


  constructor() { }

  get currentMiPedidoLastBackDirection () : Observable<string> {
    return this.miPedidoLastBackDirection$;
  }

  get currentMyLocationLastBackDirection () : Observable<string>{
    return this.myLocationLastBackDirection$;
  }

  get currentSetContactLastSubmitBackDirection() : Observable<string>{
    return this.setContactLastSubmitBackDirection$;
  }

  get currentSetEnvioLastBackDirection() : Observable<string>{
    return this.setEnvioLastBackDirection$;
  }

  get currentSetPaymentMethodsLastBackDirection() : Observable<string>{
    return this.setPaymentMethodsLastBackDirection$;
  }

  get currentsetDetailBackDirection(): Observable<string>{
    return this.setDetailBackDirection$;
  }

  setMiPedidoLastBackDirection( direction : string){
    this.miPedidoLastBackDirection = direction;
    this.miPedidoLastBackDirection$.next(this.miPedidoLastBackDirection);
  }

  setMyLocationLastBackDirection( direction : string){
    this.myLocationLastBackDirection = direction;
    this.myLocationLastBackDirection$.next(this.myLocationLastBackDirection);
  }

  setSetContactLastSubmitBackDirection(direction : string){
    this.setContactLastSubmitBackDirection = direction;
    this.setContactLastSubmitBackDirection$.next(this.setContactLastSubmitBackDirection);
  }

  setSetEnvioLastBackDirection(direction: string){
    this.setEnvioLastBackDirection = direction;
    this.setEnvioLastBackDirection$.next(this.setEnvioLastBackDirection);
  }

  setSetPaymentMethodsLastBackDirection(direction : string){
    this.setPaymentMethodsLastBackDirection = direction;
    this.setPaymentMethodsLastBackDirection$.next(this.setPaymentMethodsLastBackDirection);
  }

  setSetDetailBackDirection(direction : string){
    this.setDetailBackDirection = direction;
    this.setDetailBackDirection$.next(this.setDetailBackDirection);
  }

  




}
