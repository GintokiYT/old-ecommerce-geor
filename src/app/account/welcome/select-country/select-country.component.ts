import { Component, OnInit, Injector } from '@angular/core';
import CountryInterface from 'src/app/interfaces/CountryInterface';
import { ViewComponent } from '@geor360/ecore';
import { LanguageService } from '../../../services/language.service';

import { ScreenOrientation } from '@capacitor/screen-orientation';
// import { ScreenOrientation, OrientationType } from '@capawesome/capacitor-screen-orientation';

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

  constructor(
    _injector: Injector,
    private languageService: LanguageService,
    ) {
    super(_injector);
    this.languageService.getLanguage.subscribe( language => this.contenido = language['selectCountry'] )
  }

  ngOnInit() {

    ScreenOrientation.lock({ orientation: 'portrait' }).catch(err => console.log(err));

    // this.screenOrientation.lock()

    this.clearSelectedRadius();
  }

  ngOnDestroy() {
    ScreenOrientation.unlock();
  }

  // ngAfterViewInit(): void {
  //   const contrys: NodeListOf<HTMLDivElement> = document.querySelectorAll('.item .radio');
  //   alert(JSON.stringify(localStorage.getItem('country')))
  //   if(JSON.stringify(localStorage.getItem('country'))){
  //     const country = JSON.stringify(localStorage.getItem('country'));
  //     contrys.forEach( contry => contry.classList.remove('active'));
  //     if(country === 'PE') {
  //       contrys[0].classList.add('active');
  //     } else if (country === 'AR') {
  //       contrys[1].classList.add('active')
  //     } else if (country === 'CL'){
  //       contrys[2].classList.add('active')
  //     }
  //     this.statusButton = false;
  //   }
  // }

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
    if(this.statusButton === false) {
      this.navigation.forward('/account/welcome/whe-are-you');
    }
  }
}
