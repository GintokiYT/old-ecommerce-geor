import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import {
  AppDialogService,
  GeolocationService,
  GoogleMapService,
} from '@geor360/ecore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-location',
  templateUrl: 'my-location.component.html',
  styleUrls: ['my-location.component.scss'],
})
export class MyLocationComponent implements OnInit, OnDestroy {
  private dialog: AppDialogService;
  private geolocation: GeolocationService;
  private googleMap: GoogleMapService;

  private hasPermissionSubscription: Subscription;
  private hasErrorSubscription: Subscription;
  private hasPositionSubscription: Subscription;

  map: google.maps.Map;

  constructor(_injector: Injector) {
    this.dialog = _injector.get(AppDialogService);
    this.geolocation = _injector.get(GeolocationService);
    this.googleMap = _injector.get(GoogleMapService);
  }

  ngOnInit() {
    if (this.geolocation.loaded) {
      if (this.googleMap.loaded) {
        this.map = this.googleMap.createMap(
          document.getElementById('google-map-id'),
          this.geolocation.position.coords.latitude,
          this.geolocation.position.coords.longitude,
          () => {
            console.log('Render');
          }
        );
      } else {
      }
    } else {
      this.hasPermissionSubscription = this.geolocation.permission.subscribe(
        (permission) => {
          if (!permission) {
          }
        }
      );
      this.hasErrorSubscription = this.geolocation.exception.subscribe(
        (error) => {
          if (!error) {
          }
        }
      );
      this.geolocation.newPosition.subscribe((position) => {
        this.geolocation.clearWatch(() => {});
        this.googleMap.loadingSubscription.subscribe(() => {
          console.log('Load Complete');
          this.map = this.googleMap.createMap(
            document.getElementById('google-map-id'),
            position.coords.latitude,
            position.coords.longitude,
            () => {
              console.log('Render');
            }
          );
        });
        this.googleMap.init();
      });
      this.geolocation.init();
    }
  }

  ngOnDestroy(): void {
    this.hasPermissionSubscription?.unsubscribe();
    this.hasErrorSubscription?.unsubscribe();
    this.hasPositionSubscription?.unsubscribe();
  }

  confirm() {
    this.dialog.dismiss('confirm');
  }

  cancel() {
    this.dialog.dismiss('cancel');
  }
}
