import { Component, OnInit, Injector } from '@angular/core';
import CountryInterface from 'src/app/interfaces/CountryInterface';
import { ViewComponent } from '@geor360/ecore';
import { LanguageService } from '../../../services/language.service';

interface Contenido {
  title: string;
  subTitle: string;
  button: string;
}

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss']
})
export class SelectCountryComponent extends ViewComponent implements OnInit {

  contenido: Contenido;
  statusButton: boolean = true;

  public countries: CountryInterface[] = [
    { id: 'PE', name: 'Perú', flag: '/assets/flags/pe.svg' },
    { id: 'AR', name: 'Argentina', flag: '/assets/flags/ar.svg' },
    { id: 'CL', name: 'Chile', flag: '/assets/flags/cl.svg' },
  ];

  constructor(_injector: Injector, private languageService: LanguageService) {
    super(_injector);
    this.languageService.getLanguage.subscribe( language => this.contenido = language['selectCountry'] )
  }

  ngOnInit() {
    this.clearSelectedRadius();
  }

  clearSelectedRadius() {
    const contrys: NodeListOf<HTMLDivElement> = document.querySelectorAll('.item .radio');
    contrys.forEach( contry => contry.classList.remove('active'));
  }

  selectedContry(id: string) {
    localStorage.setItem('country', id);
    this.clearSelectedRadius();
    const contry: HTMLDivElement = document.querySelector(`.radio.${id}`);
    contry.classList.toggle('active');
    this.statusButton = false;
  }

  navigateToWheAreYou() {
    this.navigation.root('/account/welcome/whe-are-you', 'forward');
  }
}
