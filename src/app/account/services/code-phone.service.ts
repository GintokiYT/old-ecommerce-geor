import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodePhoneService {

  private flag: string = "/assets/flags/pe.svg";
  private flag$ = new BehaviorSubject<string>(this.flag);

  private codePhone: string = "51";
  private codePhone$ = new BehaviorSubject<string>(this.codePhone);

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

  constructor() { }
}
