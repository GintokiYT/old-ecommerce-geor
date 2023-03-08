import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contactsData : any[] = [];

  private contactsData$ = new BehaviorSubject<any []>(this.contactsData);

  constructor() { }


  get currentContacts$() : Observable<any[]>{
    return this.contactsData$;
  }

  setContactsData(cd : any[]){
    this.contactsData = cd;
    this.contactsData$.next(this.contactsData);
  }

  
}
