import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  //TODO: Language (Spanish and English )
  language = {
    es_ES: {
      // Select Country
      selectCountry: {
        title: '¡Bienvenido!',
        subTitle: 'Elige el país donde quieres comprar',
        button: 'Confirmar'
      },
      // whe are you
      wheAreYou: {
        subTitle: 'Cuentanos dónde te encuentras',
        description: 'Esto nos ayudará a ofrecerte productos disponibles para tu ubicación',
        button: 'Confirmar'
      },
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
      // Select Country
      selectCountry: {
        title: 'Welcome!',
        subTitle: 'Choose the country where you want to buy',
        button: 'Confirm'
      },
      // whe are you
      wheAreYou: {
        subTitle: 'Tell us where you are',
        description: 'This will help us offer you products available for your location.',
        button: 'Confirm'
      },
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
