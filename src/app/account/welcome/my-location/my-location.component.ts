import { Component, Injector, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

import { Router } from '@angular/router';
import { ViewComponent } from '@geor360/ecore';

import { AlertController } from '@ionic/angular';

import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';

import { Geolocation } from '@capacitor/geolocation';
import { Plugins } from '@capacitor/core';

interface Contenido {
  button: string;
}

declare var google: any;

@Component({
  selector: 'app-my-location',
  templateUrl: 'my-location.component.html',
  styleUrls: ['my-location.component.scss'],
})

export class MyLocationComponent extends ViewComponent implements OnInit {

  map: any;
  currentPosition: any;

  contenido: Contenido;

  @ViewChild('loading') loading: ElementRef;

  constructor(
    _injector: Injector,
    private router: Router,
    private languageService: LanguageService,
    private alertController: AlertController,
    private diagnostic: Diagnostic
  ) {
    super(_injector)
    this.languageService.getLanguage.subscribe(language => this.contenido = language['myLocation'])
    this.diagnostic.registerLocationStateChangeHandler((state) => {
      if (state === this.diagnostic.locationMode.LOCATION_OFF) {
        // alert('La ubicación se ha desactivado');
      } else {
        location.reload();
        // alert('La ubicación se ha activado');
      }
    })
  }

  ngOnInit() {}

  async ngAfterViewInit() {

    try {
      const position = await Geolocation.getCurrentPosition();

      const loading: HTMLDivElement = this.loading.nativeElement;
      const buttons: HTMLDivElement = document.querySelector('.buttons-maps')

      // setTimeout(() => {
      //   buttons.classList.remove('d-none')
      // }, 4000);

      const printCurrentPosition = async () => {

      const coordinates = await Geolocation.getCurrentPosition();
      localStorage.setItem('location', JSON.stringify(
        {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        }
      ));

      this.getCurrentPosition(coordinates.coords.latitude, coordinates.coords.longitude);

      setTimeout(() => loading.classList.add('d-none'), 1500);

      }
      printCurrentPosition();
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No se pudo obtener la ubicación. Por favor, asegúrese de que el GPS esté activado e inténtelo de nuevo.',
        buttons: [{
          text: 'Configuraciones',
          handler: () => this.diagnostic.switchToLocationSettings()
        }]
      });
      await alert.present();
    }
  }

  getCurrentPosition(latitude: any, longitude: any) {

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: latitude, lng: longitude },
      zoom: 15,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: this.obtenerEstiloMapa()
    });
    const marker = new google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: this.map,
      title: 'Pacto andino 8799',
      icon: {
        url: '/assets/icons/markers/location.png',
        scaledSize: new google.maps.Size(35, 60) // tamaño de la imagen en píxeles
      }
    });
  }

  obtenerEstiloMapa() {
    const body: HTMLBodyElement = document.querySelector('body');
    let estiloMapa: any;
    if(body.classList.contains('dark')) {
      estiloMapa = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ]
    } else {
      estiloMapa = [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f5f5"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dadada"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e5e5e5"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#c9c9c9"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        }
      ]
    }
    return estiloMapa;
  }

  onToChangeAddress() {
    const currentRouter=this.router.url;
    if(currentRouter==='/send/account/welcome/my-location'){
      this.navigation.back('send/account/welcome/change-address');
    }else{
      //R
      this.navigation.forward('/account/welcome/change-address');
    }
  }

  onBack() {
    const currentRouter = this.router.url;
    if(currentRouter==='/direction/account/welcome/my-location'){
      return this.navigation.root('/customer/direction','forward')
    }else if(currentRouter==="/customer/manage-addresses/my-location"){
      return this.navigation.root("/customer/manage-addresses","back")
    }else if(currentRouter==="/customer/manage-addresses/addresses-delete/my-location"){
      return this.navigation.root("customer/manage-addresses/addresses-delete","back")
    }

    this.navigation.back('/account/welcome/whe-are-you');
  }

  nextProyect() {
    //send y Direction
    const currentRouter = this.router.url;
    if(currentRouter==='/send/account/welcome/my-location'){
      return this.navigation.root('/customer/send-directions','forward')
    }else if(currentRouter==='/direction/account/welcome/my-location'){
      return this.navigation.root('/customer/direction','forward')
    }else if(currentRouter==="/customer/manage-addresses/my-location"){
      return this.navigation.root("/customer/manage-addresses","back")
    }else if(currentRouter==="customer/manage-addresses/addresses-delete/my-location"){
      return this.navigation.root("customer/manage-addresses/addresses-delete","back");
    }

    this.navigation.root('/customer/home', 'forward');
  }

  actualizar() {
    if(JSON.parse(localStorage.getItem('location'))) {
      const currentPosition = JSON.parse(localStorage.getItem('location'));
      this.getCurrentPosition(currentPosition.lat, currentPosition.lng);
    }
  }

  closeLoading() {
    const loading: HTMLDivElement = this.loading.nativeElement;

    loading.classList.add('d-none');
  }

  activeGPS() {
    this.diagnostic.switchToLocationSettings();
  }
}

