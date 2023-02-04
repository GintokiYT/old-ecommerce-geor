import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreMapComponent } from './store-map/store-map.component';
import { StoresComponent } from './stores/stores.component';
import { IonicModule } from '@ionic/angular';
import { StorePickupComponent } from './store-pickup.component';
import { CustomerRoutingModule } from '../customer.routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../../shared/shared.module';

@NgModule({
  declarations: [StoreMapComponent,StoresComponent,StorePickupComponent],
  imports: [
    IonicModule,
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ShareModule,
  ],
  exports:[
    StoreMapComponent,StoresComponent,StorePickupComponent
  ]
})
export class StorePickupModule { }
