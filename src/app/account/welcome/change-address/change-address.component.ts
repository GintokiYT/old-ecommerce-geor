import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
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
