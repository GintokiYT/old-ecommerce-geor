import { Injectable, Injector } from "@angular/core";
import { Subject } from "rxjs";
import { AppConfigurationService, ScriptLoaderService } from "@geor360/core";

interface IGoogleMapConfiguration {
  url: string;
  icons: IGoogleMapMarkerIcons;
  styles: IGoogleMapStyles;
}

interface IGoogleMapMarkerIcons {
  location: () => IGoogleMapMarkerIcon;
}

interface IGoogleMapMarkerIcon {
  url: string;
  size?: google.maps.Size;
  scaledSize?: google.maps.Size;
  origin: google.maps.Point;
  anchor: google.maps.Point;
}

interface IGoogleMapStyles {
  yellow: string;
  blue: string;
  green: string;
}

interface IGoogleMapMarkerSettings {
  latitude: number;
  longitude: number;
}

@Injectable()
export class GoogleMapService {

  private _configuration: AppConfigurationService;
  private _loader: ScriptLoaderService;

  configuration: IGoogleMapConfiguration = {
    url: 'https://maps.googleapis.com/maps/api/js?',
    icons: {
      location: () => {
        return {
          url: '/assets/icons/markers/location.png',
          size: new google.maps.Size(28, 28),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(8, 8),
        }
      }
    },
    styles: {
      yellow: 'info-location-bottom info-yellow',
      blue: 'info-location-bottom info-blue',
      green: 'info-location-bottom info-green'
    }
  };

  loadingSubscription: Subject<boolean> = new Subject<boolean>();
  loaded: boolean = false;
  styleMapLight: google.maps.MapTypeStyle[] = [
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
  ];

  styleMapDark: google.maps.MapTypeStyle[] = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8ec3b9"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1a3646"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#64779e"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#334e87"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6f9ba5"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3C7680"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#304a7d"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2c6675"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#255763"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#b0d5ce"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3a4762"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0e1626"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#4e6d70"
        }
      ]
    }
  ];

  constructor(_injector: Injector) {
    this._configuration = _injector.get(AppConfigurationService);
    this._loader = _injector.get(ScriptLoaderService);
  }

  init(): void {
    if (this.loaded)
      return;

    this._loader.loadScript(`${this.configuration.url}key=AIzaSyB3iDWSD87oIotNQNnfDT1kram3J_4epOA&libraries=geometry&language=es`).then(() => {
      setTimeout(() => {
        this.loadingSubscription.next(true);
        this.loaded = true;
      }, 500);
    });
  }

  createMap(element: HTMLElement, latitude: number, longitude: number, iddle: () => void): google.maps.Map {
    const map: google.maps.Map = new google.maps.Map(element, {
      center: new google.maps.LatLng({ lat: latitude, lng: longitude }),
      minZoom: this._configuration.get().google.maps.minZoom,
      zoom: this._configuration.get().google.maps.defaultZoom,
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      draggable: true,
      scrollwheel: true,
      fullscreenControl: false,
      disableDoubleClickZoom: false,
      clickableIcons: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: localStorage.getItem("mode") == "light" ? this.styleMapLight:this.styleMapDark
    });

    google.maps.event.addListenerOnce(map, 'idle', () => iddle());

    return map;
  }

  fitBounds(map: google.maps.Map) {
    setTimeout(() => {
      const bound: google.maps.LatLngBounds = this.paddedBounds(map, 300, 250, 50, 50);
      map.setCenter(bound.getCenter());

      this.fitZoom(map, bound.getNorthEast());
    }, 1000)
  }

  getBoundsZoomLevel(bounds: google.maps.LatLngBounds, dimensions: { width: number, height: number }): number {
    const WORLD_DIM = { height: 256, width: 256 };
    const ZOOM_MAX = 21;

    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();

    const latFraction = (this.latitudeToRadian(ne.lat()) - this.latitudeToRadian(sw.lat())) / Math.PI;

    const lngDiff = ne.lng() - sw.lng();
    const lngFraction = ((lngDiff < 0) ? (lngDiff + 360) : lngDiff) / 360;

    const latZoom = this.boundZoom(dimensions.height, WORLD_DIM.height, latFraction);
    const lngZoom = this.boundZoom(dimensions.width, WORLD_DIM.width, lngFraction);

    return Math.min(latZoom, lngZoom, ZOOM_MAX) - 1.5;
  }

  /**
   * Crea el marcador en el mapa y lo regresa
   * @param map
   * @param settings Latitud y longitud
   * @returns marcador
   */
  createMarker(map: google.maps.Map, settings: IGoogleMapMarkerSettings): google.maps.Marker {
    const marker: google.maps.Marker = new google.maps.Marker({
      position: new google.maps.LatLng({ lat: settings.latitude, lng: settings.longitude }),
      draggable: false,
      map: map,
      icon: this.configuration.icons.location(),
      shape: {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly',
      },
      zIndex: 1,
      optimized: true
    });

    return marker;
  }

  private boundZoom(mapPx: number, worldPx: number, fraction: number) {
    return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
  }

  private latitudeToRadian(lat) {
    let sin = Math.sin(lat * Math.PI / 180);
    let radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
    return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
  }

  private paddedBounds(map: google.maps.Map, npad: number, spad: number, epad: number, wpad: number): google.maps.LatLngBounds {
    const SW = map.getBounds().getSouthWest();
    const NE = map.getBounds().getNorthEast();
    const topRight = map.getProjection().fromLatLngToPoint(NE);
    const bottomLeft = map.getProjection().fromLatLngToPoint(SW);
    const scale = Math.pow(2, map.getZoom());

    const SWtopoint = map.getProjection().fromLatLngToPoint(SW);
    const SWpoint = new google.maps.Point(((SWtopoint.x - bottomLeft.x) * scale) + wpad, ((SWtopoint.y - topRight.y) * scale) - spad);
    const SWworld = new google.maps.Point(SWpoint.x / scale + bottomLeft.x, SWpoint.y / scale + topRight.y);
    const pt1 = map.getProjection().fromPointToLatLng(SWworld);

    const NEtopoint = map.getProjection().fromLatLngToPoint(NE);
    const NEpoint = new google.maps.Point(((NEtopoint.x - bottomLeft.x) * scale) - epad, ((NEtopoint.y - topRight.y) * scale) + npad);
    const NEworld = new google.maps.Point(NEpoint.x / scale + bottomLeft.x, NEpoint.y / scale + topRight.y);
    const pt2 = map.getProjection().fromPointToLatLng(NEworld);

    const bound: google.maps.LatLngBounds = new google.maps.LatLngBounds(pt1, pt2);

    return bound;
  }

  private fitZoom(map: google.maps.Map, point: google.maps.LatLng) {
    try {
      // reduces the zoom-level of myMap until it contains myPoint
      // note that the googlemaps function "contains" works correctly and does not add
      // any padding to myPoint
      if (!map.getBounds().contains(point)) {
        map.setZoom(map.getZoom() - 1);
        this.fitZoom(map, point);
      }
    } catch (error) {

    }
  }
}
