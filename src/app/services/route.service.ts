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

  constructor() { }

  get currentMiPedidoLastBackDirection () : Observable<string> {
    return this.miPedidoLastBackDirection$;
  }

  setMiPedidoLastBackDirection( direction : string){
    this.miPedidoLastBackDirection = direction;
    this.miPedidoLastBackDirection$.next(this.miPedidoLastBackDirection);
  }

  get currentMyLocationLastBackDirection () : Observable<string>{
    return this.myLocationLastBackDirection$;
  }

  setMyLocationLastBackDirection( direction : string){
    this.myLocationLastBackDirection = direction;
    this.myLocationLastBackDirection$.next(this.myLocationLastBackDirection);
  }


}
