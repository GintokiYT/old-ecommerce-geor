import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer.routing.module';
import { StorePickupComponent } from './store-pickup/store-pickup.component';
import { StoreMapComponent } from './store-pickup/store-map/store-map.component';
import { StoresComponent } from './store-pickup/stores/stores.component';
import { HeaderComponent } from './store-pickup/header/header.component';

import { ConfirmarPedidoModule } from './confirmar-pedido/confirmar-pedido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerRoutingModule,,
    ConfirmarPedidoModule
  ],
  declarations: [
    HomeComponent,
    StorePickupComponent,
    StoreMapComponent,
    StoresComponent,
    HeaderComponent
  ],
  exports:[
    StorePickupComponent,
    StoreMapComponent,
    StoresComponent,
  ]
})
export class CustomerModule {}
