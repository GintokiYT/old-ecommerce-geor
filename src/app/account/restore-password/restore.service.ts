import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestoreService {

  private inputPasswordValue = "";
  private inputPasswordValue$ = new BehaviorSubject<string>(this.inputPasswordValue);
  get currentInputPasswordValue$(): Observable<string>{
    return this.inputPasswordValue$;
  }

  private inputPasswordConfirmValue = "";
  private inputPasswordConfirmValue$ = new BehaviorSubject<string>(this.inputPasswordConfirmValue);
  get currentInputPasswordConfirmValue$(): Observable<string>{
    return this.inputPasswordConfirmValue$;
  }

  constructor() { }

  
  setInputPasswordValue(value: string):void{
    this.inputPasswordValue = value;
    this.inputPasswordValue$.next(this.inputPasswordValue);
  }

  setInputPasswordConfirmValue(value: string):void{
    this.inputPasswordConfirmValue = value;
    this.inputPasswordConfirmValue$.next(this.inputPasswordConfirmValue);
  }

  checkEqualPasswordConfirm(value: string) : Observable<boolean> {
    console.log("value: "+value);
    console.log("inputNormalValue: "+this.inputPasswordValue)
    return of(this.inputPasswordValue.trim()!==value.trim()).pipe(
      delay(0)
    );
  }

  checkEqualPasswordNormal(value: string) : Observable<boolean> {
    console.log("value: "+value);
    console.log("inputConfirmValue: "+this.inputPasswordConfirmValue)
    return of(this.inputPasswordConfirmValue.trim()!==value.trim()).pipe(
      delay(0)
    );
  }

}
