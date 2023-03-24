import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {


  ordersData : any[] = [
    {
      id: "12345678910",
      state: "PENDIENTE DE PAGO",
      amount: "4",
      price: "S/ 12,890.00",
      date: "22 dic 2022"
    },
    {
      id: "23454359101",
      state: "ANULADO",
      amount: "2",
      price: "S/ 18,982.00",
      date: "1 dic 2022",
      owner: "Juliano del carmen"
    },
    {
      id: "812312312910",
      state: "ENTREGADO",
      amount: "3",
      price: "S/ 11,322.00",
      date: "14 dic 2022"
    },
    {
      id: "51232131230",
      state: "EN PROCESO",
      amount: "6",
      price: "S/ 13,111.00",
      date: "14 dic 2022"
    },
    {
      id: "712452348910",
      state: "EN PROCESO",
      amount: "8",
      price: "S/ 11,444.00",
      date: "14 dic 2022"
    },
    {
      id: "3123318910",
      state: "ENTREGADO",
      amount: "5",
      price: "S/ 25,322.00",
      date: "28 dic 2022"
    },
  ]

  ordersData$ = new BehaviorSubject<any[]>(this.ordersData);

  constructor() { }

  get currentOrdersData$() : Observable<any[]>{
    return this.ordersData$;
  }

  setOrdersData(ordersData: any[]): void{
    this.ordersData = ordersData;
    this.ordersData$.next(this.ordersData);
  }
}
