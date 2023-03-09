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




}
