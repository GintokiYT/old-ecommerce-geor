import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  miPedidoLastBackDirection : string = "";

  miPedidoLastBackDirection$ = new BehaviorSubject<string>(this.miPedidoLastBackDirection);

  constructor() { }

  get currentMiPedidoLastBackDirection () : Observable<string> {
    return this.miPedidoLastBackDirection$;
  }

  setMiPedidoLastBackDirection( direction : string){
    this.miPedidoLastBackDirection = direction;
    this.miPedidoLastBackDirection$.next(this.miPedidoLastBackDirection);
  }


}
