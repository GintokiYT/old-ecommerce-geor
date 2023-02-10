import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Theme
  private themeApp: string = localStorage.getItem('themeApp') || 'Automático';
  private themeApp$ = new BehaviorSubject<string>(this.themeApp);

  get currentThemeApp$():Observable<string>{
    return this.themeApp$;
  }
  setThemeApp(theme: string):void {
    this.themeApp = theme;
    this.themeApp$.next(this.themeApp);
  }

  // Language
  private localLanguage: string = localStorage.getItem('language') === 'es_ES'? 'Español' : localStorage.getItem('language') === 'es_US'? 'Inglés' : localStorage.getItem('language') === 'es_PT'? 'Portugués' : '';

  private languageApp: string = this.localLanguage || 'Español';
  private languageApp$ = new BehaviorSubject<string>(this.languageApp);

  get currentLanguageApp$():Observable<string>{
    return this.languageApp$;
  }
  setLanguageApp(language: string):void {
    this.languageApp = language;
    this.languageApp$.next(this.languageApp);
  }


  constructor() { }
}
