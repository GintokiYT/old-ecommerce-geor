import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-settings',
  templateUrl: './language-settings.component.html',
  styleUrls: ['./language-settings.component.scss'],
})
export class LanguageSettingsComponent implements OnInit {

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
    case 'es_EN':
      LanguageEnglish.classList.add('active');
    break;
    case 'es_PT':
      LanguagePortuguese.classList.add('active');
    break;
   }
  }

  constructor() { }

  ngOnInit() {}

  changeLanguage(language: string, event: Event) {
    const currentLanguage: HTMLDivElement = event.currentTarget as HTMLDivElement;
    const Languages  = document.querySelectorAll('.item-language') as NodeListOf<HTMLDivElement>;
    Languages.forEach(language => language.classList.remove('active'));

    switch(language) {
      case 'es_ES':
        currentLanguage.classList.add('active');
      break;
      case 'es_US':
        currentLanguage.classList.add('active');
      break;
      case 'es_PT':
        currentLanguage.classList.add('active');
      break;
    }
  }
}
