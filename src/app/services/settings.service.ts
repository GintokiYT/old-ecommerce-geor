import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface AddressMyLocation {
  lat: number;
  lng: number;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // https://maps.googleapis.com/maps/api/geocode/json?latlng=-12.0450779,%20-76.9288012&key=API_KEY

  // Theme
  private theme = new BehaviorSubject<string>(localStorage.getItem('defaultTheme') || 'auto');

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
