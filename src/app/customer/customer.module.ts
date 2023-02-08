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
import { ProductDetailModule } from './product-detail/product-detail.module';
import { SearchGeneralModule } from '../search-general/search-general.module';
import { PayCardModule } from './pay-card/pay-card.module';

import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';
import { ShareModule } from '../shared/shared.module';
import { ConfirmOrderModule } from './confirm-order/confirm-order.module';
import { SettingsModule } from './settings/settings.module';
import { AddCouponsModule } from './add-coupons/add-coupons.module';
import { BillingDataModule } from './billing-data/billing-data.module';
import { ManageUserInformationModule } from './manage-user-information/manage-user-information.module';
import { OtherFormsModule } from './other-forms/other-forms.module';
import { ConfirmCardPayModule } from './confirm-card-pay/confirm-card-pay.module';

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
    ProductDetailModule,
    SearchGeneralModule,
    PayCardModule,
    IonicInputMaskModule,
    ShareModule,
    SettingsModule,
    AddCouponsModule,
    BillingDataModule,
    ManageUserInformationModule,
    OtherFormsModule,
    ConfirmCardPayModule
  ],
  declarations: [
    HomeComponent
  ],

})
export class CustomerModule {}
