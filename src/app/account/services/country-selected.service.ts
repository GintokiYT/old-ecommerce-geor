import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrySelectedService {

  private flag: string;
  private flag$;

  private codePhone: string;
  private codePhone$;

  get currentFlag$():Observable<string>{
    return this.flag$;
  }

  setFlag(flag: string):void{
    this.flag = flag;
    this.flag$.next(this.flag);
  }

  get currentCodePhone$():Observable<string>{
    return this.codePhone$;
  }

  setCodePhone(codePhone:string):void{
    this.codePhone = codePhone;
    this.codePhone$.next(this.codePhone);
  }

  constructor() { 
    const countrySelected = localStorage.getItem("country");
    switch(countrySelected){
      case "CL" : this.codePhone = "56"
                  this.flag = "/assets/flags/cl.svg"
                  break;
      case "AR" : this.codePhone = "54 9 11"
                  this.flag = "/assets/flags/ar.svg"
                  break;
      case "PE" : this.codePhone = "51"
                  this.flag = "/assets/flags/pe.svg"
                  break;
    }

    this.flag$ = new BehaviorSubject<string>(this.flag);
    this.codePhone$ = new BehaviorSubject<string>(this.codePhone);
  }
}
