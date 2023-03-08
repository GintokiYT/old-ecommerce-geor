import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // Modal Country
  private statusModalCountry = new BehaviorSubject<boolean>(false);

  setStatusModalCountry(status: boolean) {
    this.statusModalCountry.next(status);
  }
  get getStatusModalCountry():Observable<boolean>{
    return this.statusModalCountry;
  }


}
