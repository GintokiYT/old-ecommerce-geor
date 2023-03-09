import { Component, OnInit, Injector, Input } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { CountrySelectedService } from '../../services/country-selected.service';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
})
export class CountrySelectComponent  extends ViewComponent implements OnInit {

  public data = [ 'Perú +51','Argentina +54 9 11','Chile +56'];
  public results = [...this.data];



  public dataCountries : any[] = [
    {
      country: "Perú +51",
      flag: "/assets/flags/pe.svg",
      selected: false
    },
    {
      country: "Argentina +54 9 11",
      flag: "/assets/flags/ar.svg",
      selected: false
    },
    {
      country: "Chile +56",
      flag: "/assets/flags/cl.svg",
      selected:false
    },

  ]

  public dataCountriesResults = [...this.dataCountries];

  constructor(private _injector: Injector, private cpService: CountrySelectedService) {
      super(_injector);
   }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    let codePhone: string;
    this.cpService.currentCodePhone$.subscribe( (code) => {
      codePhone = code;
    })
    this.dataCountries = this.dataCountries.map( c => {
      if(c.country.includes(codePhone)){
        c.selected = true;
      }
      return c;
    })
  }
  


  handleChange(event) {
    const query = event.target.value.toLowerCase();
    //this.dataCountriesResults = this.dataCountries.filter(d => d.country.toLowerCase().indexOf(query) > -1);
    this.dataCountriesResults = this.dataCountries.filter(d => d.country.toLowerCase().includes(query));
  }

  onGoToRegister(){
    this.navigation.back("/register")
  }

  onSelectCountry(c){
    const code = c.country;
    const codeFormated = code.split("+")[1];
    const flag = c.flag;

    this.dataCountries = this.dataCountries.map( country => {
      if(country.flag === c.flag){
        country.selected = true;
      }else{
        country.selected = false;
      }
      return country;
    })

    this.cpService.setCodePhone(codeFormated);
    this.cpService.setFlag(flag);

    setTimeout(() => {
      this.onGoToRegister();
    }, 200);
  }

}
