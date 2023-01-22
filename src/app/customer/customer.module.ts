import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer.routing.module';

import { InboxModule } from './inbox/inbox.module';

// Componentes (paginas)
// import { MainInboxComponent } from './inbox/main-inbox/main-inbox.component';
// import { InternalInboxComponent } from './inbox/internal-inbox/internal-inbox.component';

import { ConfirmarPedidoModule } from './confirmar-pedido/confirmar-pedido.module';
import { HomeComponent } from './home/home.component';
import { StorePickupModule } from './store-pickup/store-pickup.module';
import { DeliveryDetailModule } from './delivery-detail/delivery-detail.module';
import { RouterModule } from '@angular/router';


@NgModule({

  imports:[
    CommonModule,
    IonicModule,
    FormsModule,
    CustomerRoutingModule,
    ConfirmarPedidoModule,
    StorePickupModule,
    DeliveryDetailModule,
    InboxModule
  ],
  declarations:[
    HomeComponent
  ]

})
export class CustomerModule {}
