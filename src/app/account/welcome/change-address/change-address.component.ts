import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { AppNavigationService } from '@geor360/ecore';
import { IonInput } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';

import { AcountService } from '../../services/acount.service';

@Component({
  selector: 'app-change-adddress',
  templateUrl: 'change-address.component.html',
  styleUrls: ['change-address.component.scss']
})
export class ChangeAddressComponent {
  filter: string | null = '';
  GoogleAutocomplete: any;
  addresses: string[] = [];
  lat: number = 0;
  lng: number = 0;
  @ViewChild('inputAddress', { static: false }) inputAddress!: IonInput;

  constructor(
    private route: ActivatedRoute,
    private navigator: AppNavigationService,

    private acountService: AcountService
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
  }
  ionViewWillEnter(): void {
    this.filter = this.route.snapshot.queryParamMap.get('address');
    this.lat = Number(this.route.snapshot.queryParamMap.get('latitude') || 0);
    this.lng = Number(this.route.snapshot.queryParamMap.get('longitude') || 0);
    setTimeout(() => this.inputAddress.setFocus(), 1000);
  }

  onToBack() {
    this.navigator.back(RouteCollection.account.welcome.myLocation);
  }

  onSelectAddress(address: string) {
    const params: NavigationExtras = {
      queryParams: {
        address,
        lat: this.lat,
        lng: this.lng,
      },
    };
    this.acountService.direction =  params.queryParams['address'] || '';
    this.navigator.back(RouteCollection.account.welcome.myLocation);
  }

  onSearch() {
    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.filter },
      (predictions: any) => {
        predictions.forEach((address: any) => {
          this.addresses.push(address.description);
        });
      }
    );
  }
}
