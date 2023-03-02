import { Component, Injector, OnDestroy, OnInit } from "@angular/core";
import { AppThemeService } from "@geor360/core";
import { GeolocationService, GoogleMapService, ViewComponent } from '@geor360/ecore';
import { Platform } from "@ionic/angular";
import { Subscription } from "rxjs";
import { environment } from "src/environments/environment";

@Component({ template: '' })
export abstract class GeolocationComponent extends ViewComponent implements OnInit, OnDestroy {

  theme: AppThemeService;
  geolocation: GeolocationService;
  googleMap: GoogleMapService;
  platform: Platform;

  mapId: string;
  mapIddle: boolean;

  map: google.maps.Map;

  deviceWidth: number;
  deviceHeight: number;

  private mapLoaded: Subscription;
  private positionLoaded: Subscription;

  constructor(_injector: Injector) {
    super(_injector);
    this.theme = _injector.get(AppThemeService);
    this.geolocation = _injector.get(GeolocationService);
    this.googleMap = _injector.get(GoogleMapService);
    this.platform = _injector.get(Platform);
  }

  ngOnInit(): void {
    this.platform.ready().then(() => {
      this.deviceHeight = this.platform.height();
      this.deviceWidth = this.platform.width();
      this.loadPosition();
    });
  }

  ngOnDestroy(): void {
    this.positionLoaded?.unsubscribe();
    this.mapLoaded?.unsubscribe();
  }

  onPositionLoaded(): void {

  }

  onMapLoaded(): void {

  }

  loadCurrentPosition() {
    if (this.map.getZoom() != environment.maps.defaultZoom)
      this.map.setZoom(environment.maps.defaultZoom);
    this.map.setCenter(new google.maps.LatLng({ lat: this.geolocation.position.coords.latitude, lng: this.geolocation.position.coords.longitude }));
  }

  private loadPosition(): void {
    if (this.geolocation.position) {
      this.onPositionLoaded();
      this.startMapLoading();
    } else {
      this.positionLoaded = this.geolocation.newPosition.subscribe(() => {
        this.positionLoaded?.unsubscribe();
        this.startMapLoading();
      });
    }
  }

  private startMapLoading() {
    if (this.googleMap.loaded) {
      this.completeLoadMap();
    } else {
      this.mapLoaded = this.googleMap.loadingSubscription.subscribe(() => {
        this.mapLoaded?.unsubscribe();
        this.completeLoadMap();
      });
    }
  }

  private completeLoadMap(): void {
    const theme = document.querySelector('body').classList.contains('dark')? 'dark' : 'light';

    if (this.mapIddle)
      return;

    this.mapLoaded?.unsubscribe();

    // this.map = this.googleMap.createMap(document.getElementById(this.mapId), this.geolocation.position.coords.latitude, this.geolocation.position.coords.longitude, this.theme.theme, () => {
    //   this.mapIddle = true;
    //   this.onMapLoaded();
    // });

    this.map = this.googleMap.createMap(document.getElementById(this.mapId), this.geolocation.position.coords.latitude, this.geolocation.position.coords.longitude, theme, () => {
      this.mapIddle = true;
      this.onMapLoaded();
    });
  }
}
