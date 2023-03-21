import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrySelectedService {

  dataCountry = {
    'PE': {
      'flag': '/assets/flags/pe.svg',
      'codePhone': '51'
    },
    'AR': {
      'flag': '/assets/flags/ar.svg',
      'codePhone': '54 9 11'
    },
    'CL': {
      'flag': '/assets/flags/cl.svg',
      'codePhone': '56'
    }
  }

  currentCountry = this.dataCountry[localStorage.getItem('country') ?? 'PE'];

  private infoCountry = new BehaviorSubject<Object>({
    flag: this.currentCountry['flag'],
    codePhone: this.currentCountry['codePhone']
  })

  get getCurrentCountry(): Observable<Object> {
    return this.infoCountry
  }

  setCountry(flag: string) {
    this.infoCountry.next(this.dataCountry[flag]);
  }
}
