import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { StoreMapComponent } from './store-map/store-map.component';
import { StoresComponent } from './stores/stores.component';
import { IonicModule } from '@ionic/angular';
import { StorePickupComponent } from './store-pickup.component';



@NgModule({
  declarations: [HeaderComponent,StoreMapComponent,StoresComponent,StorePickupComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[
    HeaderComponent,StoreMapComponent,StoresComponent,StorePickupComponent
  ]
})
export class StorePickupModule { }
