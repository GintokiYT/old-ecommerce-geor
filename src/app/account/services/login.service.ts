import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLogged: boolean = false;

  private userLogged$ = new BehaviorSubject<boolean>(this.userLogged);

  get currentUserLogged$():Observable<boolean>{
    return this.userLogged$;
  }

  setUserLogged(logged: boolean):void{
    this.userLogged = logged;
    this.userLogged$.next(this.userLogged);
  }

  constructor() { }
}
