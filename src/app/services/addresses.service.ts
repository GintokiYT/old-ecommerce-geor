import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  private addressesData: any[] = [
    {
      direction: "Jr. Samaritanos 879  Miraflores, Lima, Lima, Perú"
    },
    {
      direction: "Jr. Enrique Segobiano 879  Miraflores, Lima, Lima, Perú"
    }
  ]

  private addressesData$ = new BehaviorSubject<any[]>(this.addressesData);

  constructor() { }

  get currentAddressesData(): Observable<any[]> {
    return this.addressesData$;
  }

  setAddressesData(ad: any[]) {
    this.addressesData = ad;
    this.addressesData$.next(this.addressesData);
  }

}
