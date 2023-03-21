import { Component, Injector, OnInit} from '@angular/core';
import { CountrySelectedService } from 'src/app/account/services/country-selected.service';
import { ViewComponent } from '@geor360/ecore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-buy',
  templateUrl: './country-buy.component.html',
  styleUrls: ['./country-buy.component.scss'],
})
export class CountryBuyComponent extends ViewComponent implements OnInit {

   countryName:string;
   countryFlag:string;

  public data = [ 'Perú','Argentina','Chile'];
  public results = [...this.data];

  public dataCountries : any[] = [
    {
      country: "Perú",
      flag: "/assets/flags/pe.svg",
      selected: false
    },
    {
      country: "Argentina",
      flag: "/assets/flags/ar.svg",
      selected: false
    },
    {
      country: "Chile",
      flag: "/assets/flags/cl.svg",
      selected:false
    },

  ]

  public dataCountriesResults = [...this.dataCountries];

  constructor(private _injector: Injector, private cpService: CountrySelectedService,private route: ActivatedRoute) {
      super(_injector);
      this.countryName=this.route.snapshot.queryParamMap.get('countryName');
      this.countryFlag=this.route.snapshot.queryParamMap.get('countryFlag');

   }

  ngOnInit() {
    const selected=this.dataCountriesResults.map(country =>{
      if(country.country===this.countryName){
        country.selected=true;
      }else{
        country.selected=false;
      }
      return country;
    })
  }

  ngAfterViewInit(): void {
    let codePhone: string;
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

  onGoToBuy(parans?:any){
    if(parans){
      this.navigation.back("/customer/buy",parans);
    }else{
      const p={
      countryName:this.countryName,
      countryFlag:this.countryFlag,
      }
      this.navigation.back("/customer/buy",p);
    }


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

    const params={
      countryName:c.country,
      countryFlag:c.flag
    };

    setTimeout(() => {
      this.onGoToBuy(params);
    }, 200);
  }
}
