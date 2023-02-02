import { Component, OnInit, Injector } from '@angular/core';
import CountryInterface from 'src/app/interfaces/CountryInterface';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.scss']
})
export class SelectCountryComponent extends ViewComponent implements OnInit {

  public countries: CountryInterface[] = [];
  public statusButton: boolean = true;

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
    this.countries = [
      { id: 'PE', name: 'Perú', flag: './assets/flags/pe.svg' },
      { id: 'AR', name: 'Argentina', flag: './assets/flags/ar.svg' },
      { id: 'CL', name: 'Chile', flag: './assets/flags/cl.svg' },
    ];

    this.clearSelectedRadius();
  }

  clearSelectedRadius() {
    const contrys = document.querySelectorAll('.container-flags--item .radio-contry');
    contrys.forEach( contry => contry.classList.remove('active'));
  }

  selectedContry(id: string) {
    localStorage.setItem('country', id);
    this.clearSelectedRadius();
    const contry = document.querySelector(`.radio-contry.${id}`);
    contry.classList.toggle('active');

    this.statusButton = false;
  }

  navigateToWheAreYou() {
    if(this.statusButton === false) {
      this.navigation.root('/account/welcome/whe-are-you', 'forward');
    }
  }
}
