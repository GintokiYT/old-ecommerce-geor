import { Component, OnInit, Injector } from '@angular/core';
import CountryInterface from 'src/app/interfaces/CountryInterface';
import { ViewComponent } from '@geor360/ecore';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss']
})
export class SelectCountryComponent extends ViewComponent implements OnInit {

  languageWelcomeSelectCountry: any;

  public countries: CountryInterface[] = [
    { id: 'PE', name: 'Perú', flag: '/assets/flags/pe.svg' },
    { id: 'AR', name: 'Argentina', flag: '/assets/flags/ar.svg' },
    { id: 'CL', name: 'Chile', flag: '/assets/flags/cl.svg' },
  ];

  public statusButton: boolean = true;

  constructor(_injector: Injector, private languageService: LanguageService) {
    super(_injector);
    this.languageService.getLanguageWelcomeSelectCountry.subscribe( language => this.languageWelcomeSelectCountry = language);
  }

  ngOnInit() {
    this.clearSelectedRadius();
  }

  clearSelectedRadius() {
    const contrys: NodeListOf<HTMLDivElement> = document.querySelectorAll('.container-flags--item .radio-contry');
    contrys.forEach( contry => contry.classList.remove('active'));
  }

  selectedContry(id: string) {
    localStorage.setItem('country', id);
    this.clearSelectedRadius();
    const contry: HTMLDivElement = document.querySelector(`.radio-contry.${id}`);
    contry.classList.toggle('active');
    this.statusButton = false;
  }

  navigateToWheAreYou() {
    if(this.statusButton === false) {
      this.navigation.root('/account/welcome/whe-are-you', 'forward');
    }

    // if(localStorage.getItem('language') === 'es_ES') {
    //   localStorage.setItem('language', 'en_EN');
    //   this.languageService.setLanguageWelcomeSelectCountry('en_EN');
    // } else {
    //   localStorage.setItem('language', 'es_ES');
    //   this.languageService.setLanguageWelcomeSelectCountry('es_ES');
    // }
  }
}
