import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer.routing.module';
import { CoreModule } from '@geor360/ecore';
import { CestaModule } from './cesta/cesta.module';
import { ConfirmarPedidoModule } from './confirmar-pedido/confirmar-pedido.module';
import { HomeComponent } from './home/home.component';
import { StorePickupModule } from './store-pickup/store-pickup.module';
import { DeliveryDetailModule } from './delivery-detail/delivery-detail.module';
import { InboxModule } from './inbox/inbox.module';

@NgModule({

  imports:[
    CommonModule,
    IonicModule,
    CoreModule,
    CustomerRoutingModule,
    CestaModule,
    FormsModule,
    CustomerRoutingModule,
    ConfirmarPedidoModule,
    StorePickupModule,
    DeliveryDetailModule,
    InboxModule
  ],
  declarations: [
    HomeComponent,

  ],

})
export class CustomerModule {}
