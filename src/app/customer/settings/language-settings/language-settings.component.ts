import { Component, Injector, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { LanguageService } from '../../../services/language.service';
import { ViewComponent } from '@geor360/ecore';

interface Contenido {
  title: string;
  spanish: string;
  english: string;
}

@Component({
  selector: 'app-language-settings',
  templateUrl: './language-settings.component.html',
  styleUrls: ['./language-settings.component.scss', '../../../../theme/personalizado.scss'],
})
export class LanguageSettingsComponent extends ViewComponent implements OnInit {

  contenido: Contenido;

  ngAfterViewInit() {
    const Languages  = document.querySelectorAll('.item-language') as NodeListOf<HTMLDivElement>;

    Languages.forEach(language => language.classList.remove('active'));

    const LanguageSpanish: HTMLDivElement = Languages[0];
    const LanguageEnglish: HTMLDivElement = Languages[1];
    const LanguagePortuguese: HTMLDivElement = Languages[2];

   const language = localStorage.getItem('language');

   switch(language) {
    case 'es_ES':
      LanguageSpanish.classList.add('active');
    break;
    case 'en_US':
      LanguageEnglish.classList.add('active');
    break;
    case 'pt_PT':
      LanguagePortuguese.classList.add('active');
    break;
   }
  }

  constructor(_injector: Injector, private settingsService: SettingsService, private languageService: LanguageService) {
    super(_injector);
    languageService.getLanguage.subscribe( language => this.contenido = language['languageSettings'] );
  }

  ngOnInit() {}

  changeLanguage(language: string, event: Event) {
    const currentLanguage: HTMLDivElement = event.currentTarget as HTMLDivElement;
    const Languages  = document.querySelectorAll('.item-language') as NodeListOf<HTMLDivElement>;
    Languages.forEach(language => language.classList.remove('active'));

    switch(language) {
      case 'es_ES':
        currentLanguage.classList.add('active');
        localStorage.setItem('language', language);
      break;
      case 'en_US':
        currentLanguage.classList.add('active');
        localStorage.setItem('language', language);
      break;
      case 'pt_PT':
        currentLanguage.classList.add('active');
        localStorage.setItem('language', language);
      break;
    }

    const serviceLanguage = language === 'es_ES' ? 'Español' : language === 'en_US'? 'Inglés' : language === 'pt_PT' ? 'Portugués' : 'Español';
    this.settingsService.setLanguage(serviceLanguage);

    this.languageService.setLanguage(language);
  }

  onToBack(route: string) {
    this.navigation.back(route);
  }
}
