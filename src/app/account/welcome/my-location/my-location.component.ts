import { RouteCollection } from 'src/shared/route-collection';
import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { GeolocationComponent } from 'src/shared/inherit/geolocation.component';
import { Geolocation,  } from '@capacitor/geolocation';

import { AlertController } from '@ionic/angular';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { RouteService } from '../../../services/route.service';

interface Contenido {
  button: string;
}

@Component({
  selector: 'app-my-location',
  templateUrl: 'my-location.component.html',
  styleUrls: ['my-location.component.scss'],
})
export class MyLocationComponent extends GeolocationComponent implements OnInit, OnDestroy {

  APIkey: string = 'AIzaSyB3iDWSD87oIotNQNnfDT1kram3J_4epOA';
  contenido: Contenido;
  previousRoute: string;

  positionMarker: google.maps.Marker;

  constructor(
    _injector: Injector,
    private languageService: LanguageService,
    private alertController: AlertController,
    private diagnostic: Diagnostic,
    private rs: RouteService
  ) {
    super(_injector);
    this.mapId = 'map';
    this.languageService.getLanguage.subscribe( language => this.contenido = language['myLocation'])
    this.rs.currentMyLocationLastBackDirection.subscribe( d => this.previousRoute = d)
  }


  override ngOnInit(): void {

    const mql: MediaQueryList | undefined = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    mql.addEventListener('change', () => {
      location.reload();
    });

    this.diagnostic.isLocationEnabled().then((isEnabled) => {
      if (isEnabled !== true) this.CheckGpsStatus();
    });

    super.ngOnInit();
    this.geolocation.init();
    this.googleMap.init(this.APIkey, <any>this.language);
  }

  checkGPS() {
    let status: boolean;
    this.diagnostic.isLocationEnabled().then((isEnabled) => {
      if (isEnabled) status = true;
      else status = false;
    });
    return status;
  }

  async CheckGpsStatus() {
    const alert = await this.alertController.create({
      header: 'Ubicación desactivada',
      message: 'Para utilizar esta aplicación, debes habilitar la ubicación en tu dispositivo.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Ir a configuración',
          handler: () => {
            this.diagnostic.switchToLocationSettings();
          }
        }
      ]
    });

    await alert.present();
  }

  async checkGpsPermissions() {
    try {
      const requestPermissions = await Geolocation.requestPermissions();
      console.log(requestPermissions);
      return true;
    } catch(error) {
      console.log('No tienes permisos')
      return false;
    }
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  override onMapLoaded(): void {
  }

  onToChangeAddress() {
    this.navigation.forward('/account/welcome/change-address');
  }

  onBack() {
    //this.navigation.back(RouteCollection.account.welcome.wheAreYou);
    this.navigation.back(this.previousRoute);
  }

  nextProyect() {
    this.navigation.forward('customer/home');
  }

}


