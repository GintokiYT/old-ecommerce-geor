import { RouteCollection } from 'src/shared/route-collection';
import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
// import { AppNavigationService, ViewComponent } from '@geor360/ecore';
// import { SettingsService } from 'src/app/services/settings.service';
import { LanguageService } from '../../../services/language.service';
// import { GoogleMapService } from 'src/app/services/google-map.service';
import { GeolocationComponent } from 'src/shared/inherit/geolocation.component';


import { Geolocation } from '@capacitor/geolocation';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/services/route.service';

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
  previousRoute: string;

  // private mapCenterChangeListener: google.maps.MapsEventListener;
  // private mapCenterDragEndListener: google.maps.MapsEventListener;

  positionMarker: google.maps.Marker;

  constructor(_injector: Injector, private languageService: LanguageService, private rs: RouteService) {
    super(_injector);
    this.mapId = 'map';
    this.rs.currentMyLocationLastBackDirection.subscribe(d => this.previousRoute = d);
    this.languageService.getLanguage.subscribe(language => this.contenido = language['myLocation'])
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.geolocation.init();
    this.googleMap.init('AIzaSyB3iDWSD87oIotNQNnfDT1kram3J_4epOA', <any>this.language);

    const mql: MediaQueryList | undefined = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener('change', () => {
      location.reload();
    });



    // this.geolocation.init();
    // this.googleMap.init('AIzaSyB3iDWSD87oIotNQNnfDT1kram3J_4epOA', <any>this.language);

    this.encenderGPS();
  }

  async encenderGPS() {
    Geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((position) => {
      console.log('Latitud: ' + position.coords.latitude + ', Longitud: ' + position.coords.longitude);
    }).catch((error) => {
      console.log('Error al obtener la ubicación: ' + error);
    });
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();

    //google.maps.event.removeListener(this.mapCenterChangeListener);
    //google.maps.event.removeListener(this.mapCenterDragEndListener);
  }

  override onMapLoaded(): void {

    // this.googleMap.createMap(document.querySelector('#id'), 12000, 12000, 'dark');

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
    this.navigation.back(this.previousRoute);
  }

  nextProyect() {
    if (this.previousRoute.includes("manage-addresses")) {
      this.navigation.back("customer/manage-addresses")
    } else {
      if (this.previousRoute.includes("addresses-delete")) {
        this.navigation.back("customer/manage-addresses/addresses-delete")
      }else{
        this.navigation.forward('customer/home');
      }
    }

  }

}


