import { Component, Injector, OnInit } from '@angular/core';
// import { CountrySelectedService } from 'src/app/account/services/country-selected.service';
import { ViewComponent } from '@geor360/ecore';
import { ActivatedRoute } from '@angular/router';
import { CountrySelectedService } from 'src/app/services/country-selected.service';
import { IonSearchbar } from '@ionic/angular';

interface DataCountry {
  id: string;
  country: string;
  flag: string;
  codePhone: string;
  selected: boolean;
}

@Component({
  selector: 'app-country-buy',
  templateUrl: './country-buy.component.html',
  styleUrls: ['./country-buy.component.scss'],
})
export class CountryBuyComponent extends ViewComponent implements OnInit {

  currentCountry = '';

  public dataCountries : DataCountry[] = [
    {
      id: 'PE',
      country: "Perú",
      flag: "/assets/flags/pe.svg",
      codePhone: '51',
      selected: false
    },
    {
      id: 'AR',
      country: "Argentina",
      flag: "/assets/flags/ar.svg",
      codePhone: '54 9 11',
      selected: false
    },
    {
      id: 'CL',
      country: "Chile",
      flag: "/assets/flags/cl.svg",
      codePhone: '56',
      selected:false
    },
  ]

  public filterDataCountries = this.dataCountries;

  constructor(
    private _injector: Injector,
    private countrySelectedService: CountrySelectedService,
    private route: ActivatedRoute) {
      super(_injector);
      this.countrySelectedService.getCurrentCountry.subscribe( country => this.currentCountry = country['codePhone'] )
   }

  ngOnInit() {
    this.dataCountries = this.dataCountries.map( country => country.codePhone === this.currentCountry? {...country, selected: true} : {...country, selected: false})
    this.filterDataCountries = this.dataCountries;
  }

  saveCountry(id: string) {

    this.filterDataCountries = this.dataCountries.map( country => country.id === id ? {...country, selected: true} : {...country, selected: false})

    this.countrySelectedService.setCountry(id);

    setTimeout(() => {
      this.navigation.back('/customer/buy');
    }, 300);
  }

  filterCountry(event: Event) {
    const value: string = event['detail'].value;

    this.filterDataCountries = this.dataCountries.filter( ({country}) => country.toLowerCase().includes(value.trim().toLowerCase()))
  }
  goBack(){
    this.navigation.back('/customer/buy');
  }
}
