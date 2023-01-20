import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CustomerRoutingModule } from './customer.routing.module';
import { StorePickupComponent } from './store-pickup/store-pickup.component';
import { StoreMapComponent } from './store-pickup/store-map/store-map.component';
import { StoresComponent } from './store-pickup/stores/stores.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerRoutingModule,
    
  ],
  declarations: [
    HomeComponent,
    StorePickupComponent,
    StoreMapComponent,
    StoresComponent,
  ],
  exports:[
    StorePickupComponent,
    StoreMapComponent,
    StoresComponent,
  ]
})
export class CustomerModule {}
