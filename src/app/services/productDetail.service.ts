import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  // Modal Variants
  private statusModalVariants = new BehaviorSubject<boolean>(false);

  setStatusModalVariants(status: boolean) {
    this.statusModalVariants.next(status);
  }
  get getStatusModalVariants():Observable<boolean>{
    return this.statusModalVariants;
  }

  // Modal Add
  private statusModalAdd = new BehaviorSubject<boolean>(false);

  setStatusModalAdd(status: boolean) {
    this.statusModalAdd.next(status);
  }

  get getStatusModalAdd():Observable<boolean> {
    return this.statusModalAdd;
  }

  // Modal basket
  private statusModalBasket = new BehaviorSubject<boolean>(false);

  setStatusModalBasket(status: boolean) {
    this.statusModalBasket.next(status);
  }

  get getStatusModalBasket(): Observable<boolean> {
    return this.statusModalBasket;
  }
}
