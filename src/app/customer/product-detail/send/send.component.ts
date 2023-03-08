import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { CountryService } from '../../../services/Country.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss'],
})
export class SendComponent extends ViewComponent implements OnInit {
  modalCountry: boolean;

  constructor(_injector:Injector,private country:CountryService) {
    super(_injector)
    this.country.getStatusModalCountry.subscribe(status=>this.modalCountry=status);
   }

  ngOnInit() {}

  goDirection(){
    this.navigation.root('/customer/direction','forward');
  }

    OpenModalCountry() {
      this.country.setStatusModalCountry(true);
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


