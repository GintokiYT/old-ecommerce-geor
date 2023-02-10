import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Theme
  private theme = new BehaviorSubject<string>(localStorage.getItem('themeApp') || 'Automático');

  setTheme(theme: string) {
    this.theme.next(theme);
  }
  get getTheme():Observable<string>{
    return this.theme;
  }

  // Language
  private localLanguage = new BehaviorSubject<string>(
    localStorage.getItem('language') === 'es_ES' ? 'Español' :
    localStorage.getItem('language') === 'es_US' ? 'Inglés' :
    localStorage.getItem('language') === 'es_PT' ? 'Portugués' : ''
  );

  setLanguage(language: string) {
    this.localLanguage.next(language);
  }
  get getLanguage(): Observable<string> {
    return this.localLanguage;
  }
}
