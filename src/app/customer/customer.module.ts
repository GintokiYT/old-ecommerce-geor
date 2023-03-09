import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer.routing.module';
import { CoreModule } from '@geor360/ecore';
import { CestaModule } from './basket/basket.module';
import { StorePickupModule } from './store-pickup/store-pickup.module';
import { DeliveryDetailModule } from './delivery-detail/delivery-detail.module';
import { InboxModule } from './inbox/inbox.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
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
import { CouponsModule } from './coupons/coupons.module';
import { ManageFavoritesModule } from './manage-favorites/manage-favorites.module';
import { ManageBillingDataModule } from './manage-billing-data/manage-billing-data.module';
import { HomeModule } from './home/home.module';
import { UserHelpModule } from './userHelp/user-help.module';
import { SearchGeneralModule } from './search-general/search-general.module';


@NgModule({
  imports:[
    CommonModule,
    IonicModule,
    CoreModule,
    CustomerRoutingModule,
    FormsModule,
    ConfirmOrderModule,
    StorePickupModule,
    DeliveryDetailModule,
    InboxModule,
    ProductDetailModule,
    PayCardModule,
    IonicInputMaskModule,
    ShareModule,
    AddCouponsModule,
    BillingDataModule,
    ManageUserInformationModule,
    OtherFormsModule,
    ConfirmCardPayModule,
    CouponsModule,
    CestaModule,
    CestaModule,
    ManageFavoritesModule,
    ManageBillingDataModule,
    HomeModule,
    UserHelpModule,
    SettingsModule,
    SearchGeneralModule
  ],
  declarations: [

  ],

})
export class CustomerModule {}
