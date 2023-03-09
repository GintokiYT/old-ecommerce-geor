import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingDataService {

  private contactTemp : any = {
    name : null,
    number : null
  }

  private billingData: any[] = [
    {
      name: "La Samaritana Corporation S.A.C - LAAC",
      id: "20713995789",
      type: "Factura",
      contact: {
        name: "Miguel Suarez",
        number: "+51 955 965 964"
      }
    },
    {
      name: "Negocios del Carmen Portocarreo - NCM Comercial",
      id: "20713695783",
      type: "Factura",
      contact: {
        name: "Antonio Perez",
        number: "+51 978 389 487"
      }
    },
    {
      name: "Norman Osword Sánchez",
      id: "23457418",
      type: "Boleta",
      contact: {
        name: "Felipe Gutierres",
        number: "+51 947 125 667"
      }
    },
  ]

  private billingData$ = new BehaviorSubject<any[]>(this.billingData);

  private contactTemp$ = new BehaviorSubject<any>(this.contactTemp);


  constructor() { }


  get currentBillingData$(): Observable<any[]> {
    return this.billingData$;
  }

  setBillingData(nbd: any[]): void {
    this.billingData = nbd;
    this.billingData$.next(this.billingData);
  }

  get currentContactTemp$(): Observable<any>{
    return this.contactTemp$;
  }

  setContactTemp(contact: any): void{
    this.contactTemp = contact;
    this.contactTemp$.next(this.contactTemp);
  }
}
