import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Tema
  private themeApp: string = localStorage.getItem('themeApp') || 'Automático';
  private themeApp$ = new BehaviorSubject<string>(this.themeApp);
  get currentThemeApp$():Observable<string>{
    return this.themeApp$;
  }
  setThemeApp(theme: string):void {
    this.themeApp = theme;
    this.themeApp$.next(this.themeApp);
  }

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
