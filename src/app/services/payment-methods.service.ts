import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodsService {

  // data = {
  //   cardnumber: '',
  //   cardholder: '',
  //   expiration: '',
  //   code: '',
  // }

  paymentData : any[] = [
  ]

  paymentData$ = new BehaviorSubject<any[]>(this.paymentData);

  constructor() { }

  get currentPaymentData(): Observable<any[]>{
    return this.paymentData$;
  }

  setPaymentData(data : any[]){
    this.paymentData = data;
    this.paymentData$.next(this.paymentData);
  }
}
