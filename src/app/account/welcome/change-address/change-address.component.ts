import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AppNavigationService } from '@geor360/ecore';
import { IonInput, IonSearchbar } from '@ionic/angular';
import { SettingsService } from 'src/app/services/settings.service';
import { RouteCollection } from 'src/shared/route-collection';
import { LanguageService } from '../../../services/language.service';

interface Contenido {
  title: string;
  placeholder: string;
}

@Component({
  selector: 'app-change-adddress',
  templateUrl: 'change-address.component.html',
  styleUrls: ['change-address.component.scss']
})
export class ChangeAddressComponent {

  contenido: Contenido;

  filter: string | null = '';
  GoogleAutocomplete: any;
  addresses: string[] = [];
  lat: number = 0;
  lng: number = 0;
  @ViewChild('inputAddress') inputAddress: IonSearchbar;

  constructor(
    private route: ActivatedRoute,
    private navigator: AppNavigationService,
    private settingsService: SettingsService,
    private router: Router,
    private languageService: LanguageService) {
    // this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.languageService.getLanguage.subscribe( language =>  this.contenido = language['changeAddress'])
  }
  // ionViewWillEnter(): void {
  //   this.filter = this.route.snapshot.queryParamMap.get('address');
  //   this.lat = Number(this.route.snapshot.queryParamMap.get('latitude') || 0);
  //   this.lng = Number(this.route.snapshot.queryParamMap.get('longitude') || 0);
  // }

  onToBack() {

    const currentRouter=this.router.url;
    if(currentRouter==='/send/account/welcome/change-address'){
      return this.navigator.back('/send/account/welcome/my-location');
    }else if(currentRouter==="/customer/manage-addresses/my-location/search"){
      return this.navigator.root("/customer/manage-addresses/my-location","back")
    }else if(currentRouter==="/customer/manage-addresses/addresses-delete/my-location/search"){
      return this.navigator.root("/customer/manage-addresses/addresses-delete/my-location","back");
    }else if (currentRouter=='/direction/account/welcome/change-address'){
      return this.navigator.root("/direction/account/welcome/my-location","back");
    }

    this.navigator.back('/account/welcome/my-location');

  }

  onSelectAddress(address: string) {
    // const params: NavigationExtras = {
    //   queryParams: {
    //     address,
    //     lat: this.lat,
    //     lng: this.lng,
    //   },
    // };
    // this.settingsService.setAddressMyLocation(params.queryParams["address"]);
    // this.navigator.back(RouteCollection.account.welcome.myLocation);
  }

  onSearch() {
    // this.GoogleAutocomplete.getPlacePredictions(
    //   { input: this.filter },
    //   (predictions: any) => {
    //     predictions.forEach((address: any) => {
    //       this.addresses.push(address.description);
    //     });
    //   }
    // );
  }
}
