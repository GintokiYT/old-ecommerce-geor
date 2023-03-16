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

  




}
