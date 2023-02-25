import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
})
export class CountrySelectComponent  extends ViewComponent implements OnInit {

  public data = [ 'Perú +51','Argentina +54 9 11','Chile +56'];
  public results = [...this.data];

  public dataCountries = [
    {
      country: "Perú +51",
      flag: "/assets/flags/pe.svg"
    },
    {
      country: "Argentina +54 9 11",
      flag: "/assets/flags/ar.svg"
    },
    {
      country: "Chile +56",
      flag: "/assets/flags/cl.svg"
    },

  ]

  public dataCountriesResults = [...this.dataCountries];

  constructor(private _injector: Injector) {
      super(_injector);
   }

  ngOnInit() {}


  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.dataCountriesResults = this.dataCountries.filter(d => d.country.toLowerCase().indexOf(query) > -1);
  }

  onGoToRegister(){
    this.navigation.back("/register")
  }

}
