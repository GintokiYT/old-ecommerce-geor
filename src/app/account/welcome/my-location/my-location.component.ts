import { RouteCollection } from 'src/shared/route-collection';
import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
// import { AppNavigationService, ViewComponent } from '@geor360/ecore';
// import { SettingsService } from 'src/app/services/settings.service';
import { LanguageService } from '../../../services/language.service';
// import { GoogleMapService } from 'src/app/services/google-map.service';
  import { GeolocationComponent } from 'src/shared/inherit/geolocation.component';

interface Contenido {
  button: string;
}

@Component({
  selector: 'app-my-location',
  templateUrl: 'my-location.component.html',
  styleUrls: ['my-location.component.scss'],
})
export class MyLocationComponent extends GeolocationComponent implements OnInit, OnDestroy {

  contenido: Contenido;

  // private mapCenterChangeListener: google.maps.MapsEventListener;
  // private mapCenterDragEndListener: google.maps.MapsEventListener;

  positionMarker: google.maps.Marker;

  constructor(_injector: Injector, private languageService: LanguageService ) {
    super(_injector);
    this.mapId = 'map';
    this.languageService.getLanguage.subscribe( language => this.contenido = language['myLocation'])
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.geolocation.init();
    this.googleMap.init('AIzaSyB3iDWSD87oIotNQNnfDT1kram3J_4epOA', <any>this.language);
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();

    //google.maps.event.removeListener(this.mapCenterChangeListener);
    //google.maps.event.removeListener(this.mapCenterDragEndListener);
  }

  override onMapLoaded(): void {

    // this.positionMarker = this.googleMap.createMarker(this.map, {
    //   latitude: this.geolocation.position.coords.latitude,
    //   longitude: this.geolocation.position.coords.longitude
    // });

    // this.mapCenterChangeListener = google.maps.event.addListener(this.map, 'center_changed', () => {
    //   this.positionMarker.setPosition(this.map.getCenter());
    // });

    // this.mapCenterDragEndListener = google.maps.event.addListener(this.map, 'dragend', () => {
    //   const center: google.maps.LatLng = this.map.getCenter();

    // });
  }

  onToChangeAddress() {
    this.navigation.forward('/account/welcome/change-address');
    // this.navigator.forward('/account/welcome/change-address');
  }

  onBack() {
    this.navigation.back(RouteCollection.account.welcome.wheAreYou);
    // this.navigator.root(RouteCollection.account.welcome.wheAreYou, 'back');
  }

  nextProyect() {
    this.navigation.forward('customer/home');
    // this.navigator.forward('customer/home');
  }

}


