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
    en_US: {
      title: 'Welcome!',
      subTitle: 'Choose the country where you want to buy',
      button: 'Confirm'
    }
  }

  private $languageWelcomeSelectCountry = new BehaviorSubject<object>(
    localStorage.getItem('language') === 'es_ES'? this.languageWelcomeSelectCountry.es_ES : localStorage.getItem('language') === 'en_US'? this.languageWelcomeSelectCountry.en_US : this.languageWelcomeSelectCountry.es_ES);

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
    en_US: {
      subTitle: 'Tell us where you are',
      description: 'This will help us offer you products available for your location.',
      button: 'Confirm'
    }
  }

  private $languageWelcomeWheareyou = new BehaviorSubject<object>(
    localStorage.getItem('language') === 'es_ES'? this.languageWelcomeWheareyou.es_ES : localStorage.getItem('language') === 'en_US'? this.languageWelcomeWheareyou.en_US :
    this.languageWelcomeWheareyou.es_ES);

  setLanguageWelcomeWheareyou(language: string) {
    this.$languageWelcomeWheareyou.next(this.languageWelcomeWheareyou[language]);
  }

  get getLanguageWelcomeWheareyou(): Observable<object> {
    return this.$languageWelcomeWheareyou;
  }
  //* End Welcome Whe are you



  //TODO: Language (Spanish and English )
  language = {
    es_ES: {
      // Main Settings
      mainSettings: {
        title: 'Configuración',
        mydata: 'Mis datos',
        password: 'Contraseña',
        language: 'Idioma',
        screenmode: 'Modo de pantalla',
        about: 'Acerca de',
        signoff: 'Cerrar sesión'
      },
      // LanguageSettings
      languageSettings: {
        title: 'Idioma',
        spanish: 'Español',
        english: 'Inglés'
      }
    },
    en_US: {
      // Main Settings
      mainSettings: {
        title: 'Setting',
        mydata: 'My data',
        password: 'Password',
        language: 'Language',
        screenmode: 'Screen mode',
        about: 'About',
        signoff: 'Sign off'
      },
      // LanguageSettings
      languageSettings: {
        title: 'Language',
        spanish: 'Spanish',
        english: 'English'
      }
    }

  }

  private $language = new BehaviorSubject<Object>(
    localStorage.getItem('language') === 'es_ES'? this.language.es_ES :
    localStorage.getItem('language') === 'en_US'? this.language.en_US :
    this.language.es_ES);

  setLanguage(language: string) {
    this.$language.next(this.language[language]);
  }

  get getLanguage(): Observable<object> {
    return this.$language;
  }

}
