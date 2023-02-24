import { Component, OnInit, Injector } from '@angular/core';
import {Location} from '@angular/common';
import { GeolocationComponent } from 'src/shared/inherit/geolocation.component';
@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.component.html',
  styleUrls: ['./store-map.component.scss'],
})
export class StoreMapComponent extends GeolocationComponent implements OnInit {

  constructor(private location: Location,_injector: Injector,) { 
    super(_injector);
    this.mapId = 'map';
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
  goBack(){
    this.location.back();
  }


}
