import { Component, Injector, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

import { Router } from '@angular/router';
import { ViewComponent } from '@geor360/ecore';

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
  previousRoute: string;

  @ViewChild('loading') loading: ElementRef;

  constructor(
    _injector: Injector,
    private router: Router,
    private languageService: LanguageService
  ) {
    super(_injector)
    this.languageService.getLanguage.subscribe(language => this.contenido = language['myLocation'])
  }

  ngAfterViewInit(): void {

    // async function checkGPS() {
    //   const { location: state } = await Geolocation.requestPermissions();
    //   // alert(state)
    //   if(state === 'denied') {
    //     alert('denegado')
    //     const confirm = await Geolocation.requestPermissions();
    //     alert(JSON.stringify(confirm))
    //   }
    // }

    // checkGPS();




    const loading: HTMLDivElement = this.loading.nativeElement;

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
    };

    printCurrentPosition();
  }

  ngOnInit(): void {

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
    this.navigation.forward('/account/welcome/change-address');
  }

  onBack() {
    this.navigation.back('/account/welcome/whe-are-you');
    // this.navigation.back(this.previousRoute);
  }

  nextProyect() {
    // if (this.previousRoute.includes("manage")) {
    //   this.navigation.back(this.previousRoute);
    // } else {
    //   this.navigation.root('/customer/home','forward');
    // }
    //send y Direction
    const currentRouter = this.router.url;
    if(currentRouter==='/send/account/welcome/my-location'){
      return this.navigation.root('/customer/send-directions','forward')
    }else if(currentRouter==='/direction/account/welcome/my-location'){
      return this.navigation.root('/customer/direction','forward')
    }
    this.navigation.root('/customer/home', 'forward');
  }

  actualizar() {
    if(JSON.parse(localStorage.getItem('location'))) {
      const currentPosition = JSON.parse(localStorage.getItem('location'));
      this.getCurrentPosition(currentPosition.lat, currentPosition.lng);
    }
  }
}


