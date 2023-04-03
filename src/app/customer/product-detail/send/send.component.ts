import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { CountryService } from '../../../services/Country.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
})
export class SendComponent extends ViewComponent implements OnInit {
  modalCountry: boolean;
  countryName:string="Perú";
  countryFlag:string="/assets/flags/pe.svg";

  constructor(_injector:Injector,private country:CountryService,private route: ActivatedRoute) {
    super(_injector)
    this.country.getStatusModalCountry.subscribe(status=>this.modalCountry=status);
    if(this.route.snapshot.queryParamMap.get('countryName')){
      this.countryName= this.route.snapshot.queryParamMap.get('countryName');
      this.countryFlag= this.route.snapshot.queryParamMap.get('countryFlag');
    }else{
      this.countryName="Perú";
      this.countryFlag="/assets/flags/pe.svg";
    }
   /*  console.log(this.countryName);
    console.log(this.countryFlag); */

   }

  ngOnInit() {}

  goDirection(){
    this.navigation.forward('/customer/send-directions');
  }

  OpenCountryDirection(){
    const params={
      countryName:this.countryName,
      countryFlag:this.countryFlag
    }
    this.navigation.root('/customer/country-direction','forward',params);
  }

  selectedCountry: any = {
    country: "Perú ",
    flag: "/assets/flags/pe.svg",
    //selected: false
  };

  onCountrySelected(country: any) {
    this.selectedCountry = country;
    this.country.setStatusModalCountry(false);
  }

  }

    //


