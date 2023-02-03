import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer.routing.module';
import { CoreModule } from '@geor360/ecore';
import { CestaModule } from './basket/basket.module';
import { HomeComponent } from './home/home.component';
import { StorePickupModule } from './store-pickup/store-pickup.module';
import { DeliveryDetailModule } from './delivery-detail/delivery-detail.module';
import { InboxModule } from './inbox/inbox.module';
import { ShareModule } from '../shared/shared.module';
import { ConfirmOrderModule } from './confirm-order/confirm-order.module';

@NgModule({
  imports:[
    CommonModule,
    IonicModule,
    CoreModule,
    CustomerRoutingModule,
    CestaModule,
    FormsModule,
    ConfirmOrderModule,
    StorePickupModule,
    DeliveryDetailModule,
    InboxModule,
    ShareModule,
  ],
  declarations: [
    HomeComponent,
  ],

})
export class CustomerModule {}
