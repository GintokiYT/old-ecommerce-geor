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
    localStorage.getItem('language') === 'en_US' ? 'Inglés' :
    localStorage.getItem('language') === 'pt_PT' ? 'Portugués' : ''
  );

  setLanguage(language: string) {
    this.localLanguage.next(language);
  }
  get getLanguage(): Observable<string> {
    return this.localLanguage;
  }

  // Address
  private addressMyLocation = new BehaviorSubject<string>('Pacto andino 8799');

  setAddressMyLocation(address: string) {
    this.addressMyLocation.next(address);
  }

  get getAddressMyLocation(): Observable<string> {
    return this.addressMyLocation;
  }
}
