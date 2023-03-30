import { Component, OnInit, Injector } from '@angular/core';
import {Location} from '@angular/common';
import { GeolocationComponent } from 'src/shared/inherit/geolocation.component';
import { Geolocation } from '@capacitor/geolocation';

import { AlertController } from '@ionic/angular';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { ViewComponent } from '@geor360/ecore';
@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.component.html',
  styleUrls: ['./store-map.component.scss'],
})
export class StoreMapComponent extends ViewComponent implements OnInit {
  map:any;
  constructor(_injector: Injector,private alertController: AlertController,
    private diagnostic: Diagnostic) { 
    super(_injector);
    this.diagnostic.registerLocationStateChangeHandler((state) => {
      if (state === this.diagnostic.locationMode.LOCATION_OFF) {
        // alert('La ubicación se ha desactivado');
      } else {
        location.reload();
        // alert('La ubicación se ha activado');
      }
    })
  }
  ngOnInit(): void {
  }


  // override ngOnInit(): void {
  //   const mql: MediaQueryList | undefined = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  //   mql.addEventListener('change', () => {
  //     location.reload();
  //   });
    
  //   super.ngOnInit();

  //   this.geolocation.init();
  //   this.googleMap.init('AIzaSyB3iDWSD87oIotNQNnfDT1kram3J_4epOA', <any>this.language);
  // }

  // override ngOnDestroy(): void {
  //   super.ngOnDestroy();
  // }

  // override onMapLoaded(): void {
  // }
  goBack(){
    this.navigation.back("/customer/stores");
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
      icon: {
        url: '/assets/icons/markers/location.png',
        scaledSize: new google.maps.Size(21, 36.57) // tamaño de la imagen en píxeles
      }
    });

    const marker2 = new google.maps.Marker({
      position: { lat: latitude - 0.002 , lng: longitude - 0.002 },
      map: this.map,
      icon: {
        url: '/assets/icons/markers/group.png',
        scaledSize: new google.maps.Size(43.9, 51.41) // tamaño de la imagen en píxeles
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

  async ngAfterViewInit(){
    try {
      const position = await Geolocation.getCurrentPosition();
      // const loading: HTMLDivElement = this.loading.nativeElement;

    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      localStorage.setItem('location', JSON.stringify(
        {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        }
      ));

      this.getCurrentPosition(coordinates.coords.latitude, coordinates.coords.longitude);

      // setTimeout(() => loading.classList.add('d-none'), 1500);
    };

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

  actualizar() {
    if(JSON.parse(localStorage.getItem('location'))) {
      const currentPosition = JSON.parse(localStorage.getItem('location'));
      this.getCurrentPosition(currentPosition.lat, currentPosition.lng);
    }
  }
}
