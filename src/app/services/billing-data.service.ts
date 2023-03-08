import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingDataService {


  private billingData : any[] = [
    {
      name: "La Samaritana Corporation S.A.C - LAAC",
      id: "20713995789",
      type: "Factura",
    },
    {
      name: "Negocios del Carmen Portocarreo - NCM Comercial",
      id: "20713995789",
      type: "Factura",
    },
    {
      name: "Norman Osword Sánchez",
      id: "27421234",
      type: "Boleta",
    },
  ]

  private billingData$ = new BehaviorSubject<any []>(this.billingData);


  constructor() { }


  get currentBillingData$():Observable<any []>{
    return this.billingData$;
  }

  setBillingData(nbd: any[]): void{
    this.billingData = nbd;
    this.billingData$.next(this.billingData);
  }
}
