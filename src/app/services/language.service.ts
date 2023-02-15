import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  //* Welcome Select Country
  languageWelcomeSelectCountry = {
    es_ES: {
      title: '¡Bienvenido!',
      subTitle: 'Elige el país donde quieres comprar',
      button: 'Confirmar'
    },
    en_EN: {
      title: 'Welcome!',
      subTitle: 'Choose the country where you want to buy',
      button: 'Confirm'
    },
    pt_PT: {
      title: 'Bem-vindo!',
      subTitle: 'Escolha o país onde deseja comprar',
      button: 'Confirme'
    }
  }

  private $languageWelcomeSelectCountry = new BehaviorSubject<object>(localStorage.getItem('language') === 'es_ES'? this.languageWelcomeSelectCountry.es_ES : localStorage.getItem('language') === 'en_EN'? this.languageWelcomeSelectCountry.en_EN : localStorage.getItem('language') === 'pt_PT'? this.languageWelcomeSelectCountry.pt_PT : this.languageWelcomeSelectCountry.es_ES);

  setLanguageWelcomeSelectCountry(language: string) {
    this.$languageWelcomeSelectCountry.next(this.languageWelcomeSelectCountry[language]);
  }

  get getLanguageWelcomeSelectCountry(): Observable<object> {
    return this.$languageWelcomeSelectCountry;
  }
  //* End Welcome Select Country

  //* Welcome Whe are you
  languageWelcomeWheareyou = {
    es_ES: {
      subTitle: 'Cuentanos dónde te encuentras',
      description: 'Esto nos ayudará a ofrecerte productos disponibles para tu ubicación',
      button: 'Confirmar'
    },
    en_EN: {
      subTitle: 'Tell us where you are',
      description: 'This will help us offer you products available for your location.',
      button: 'Confirm'
    },
    pt_PT: {
      subTitle: 'Diga-nos onde você está',
      description: 'Isso nos ajudará a oferecer produtos disponíveis para a sua localização.',
      button: 'Confirme'
    }
  }

  private $languageWelcomeWheareyou = new BehaviorSubject<object>(localStorage.getItem('language') === 'es_ES'? this.languageWelcomeWheareyou.es_ES : localStorage.getItem('language') === 'en_EN'? this.languageWelcomeWheareyou.en_EN : localStorage.getItem('language') === 'pt_PT'? this.languageWelcomeWheareyou.pt_PT : this.languageWelcomeWheareyou.es_ES);

  setLanguageWelcomeWheareyou(language: string) {
    this.$languageWelcomeWheareyou.next(this.languageWelcomeWheareyou[language]);
  }

  get getLanguageWelcomeWheareyou(): Observable<object> {
    return this.$languageWelcomeWheareyou;
  }
  //* End Welcome Whe are you

}
