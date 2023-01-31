import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { StoreMapComponent } from './store-map/store-map.component';
import { StoresComponent } from './stores/stores.component';
import { IonicModule } from '@ionic/angular';
import { StorePickupComponent } from './store-pickup.component';
import { CustomerRoutingModule } from '../customer.routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent,StoreMapComponent,StoresComponent,StorePickupComponent],
  imports: [
    IonicModule,
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,StoreMapComponent,StoresComponent,StorePickupComponent
  ]
})
export class StorePickupModule { }
