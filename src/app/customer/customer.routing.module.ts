import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './basket/team/team.component';
import { MainInboxComponent } from './inbox/main-inbox/main-inbox.component';
import { InternalInboxComponent } from './inbox/internal-inbox/internal-inbox.component';
import { DirectionComponent } from './delivery-detail/direction/direction.component';
import { DateComponent } from './delivery-detail/date/date.component';
import { ContactComponent } from './delivery-detail/contact/contact.component';
import { BuyComponent } from './delivery-detail/buy/buy.component';
import { DeliveryComponent } from './delivery-detail/delivery/delivery.component';
import { AlertComponent } from './delivery-detail/alert/alert.component';
import { StorePickupComponent } from './store-pickup/store-pickup.component';
import { StoreMapComponent } from './store-pickup/store-map/store-map.component';
import { StoresComponent } from './store-pickup/stores/stores.component';
import { CollaborativeBasketComponent } from './basket/collaborative-basket/collaborative-basket.component';
import { MyBasketComponent } from './basket/my-basket/my-basket.component';
import { DetailComponent } from './product-detail/detail/detail.component';
import { SendComponent } from './product-detail/send/send.component';
import { ProductComponent } from './product-detail/product/product.component';
import { VariantsComponent } from './product-detail/variants/variants.component';
import { PictureBigComponent } from './product-detail/picture-big/picture-big.component';
import { EmptyBasketComponent } from './basket/empty-basket/empty-basket.component';
import { ContactBasketComponent } from './basket/contact-basket/contact-basket.component';
import { WayPayComponent } from './pay-card/way-pay/way-pay.component';
import { PaymentMethodsComponent } from './pay-card/payment-methods/payment-methods.component';
import { AddCardComponent } from './pay-card/add-card/add-card.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';

import { MainSettingsComponent } from './settings/main-settings/main-settings.component';
import { MyDataSettingsComponent } from './settings/my-data-settings/my-data-settings.component';
import { PasswordSettingsComponent } from './settings/password-settings/password-settings.component';
import { AboutUsSettingsComponent } from './settings/about-us-settings/about-us-settings.component';
import { AboutSettingsComponent } from './settings/about-settings/about-settings.component';
import { PrivacyPoliciesSettingsComponent } from './settings/privacy-policies-settings/privacy-policies-settings.component';
import { TermsConditionsSettingsComponent } from './settings/terms-conditions-settings/terms-conditions-settings.component';
import { ReturnsExchangesSettingsComponent } from './settings/returns-exchanges-settings/returns-exchanges-settings.component';
import { AddCouponsComponent } from './add-coupons/add-coupons.component';
import { BillingDataComponent } from './billing-data/billing-data.component';
import { ManageUserInformationComponent } from './manage-user-information/manage-user-information.component';
import { CollaborativeTeamComponent } from './basket/team/collaborative-team/collaborative-team.component';
import { LastStepComponent } from './confirm-card-pay/last-step/last-step.component';
import { ContactSearchComponent } from './basket/contact-basket/contact-search/contact-search.component';
import { ScreenModeSettingsComponent } from './settings/screen-mode-settings/screen-mode-settings.component';
import { LanguageSettingsComponent } from './settings/language-settings/language-settings.component';
import { VariantsProductComponent } from './product-detail/variants-product/variants-product.component';
import { ContactTeamComponent } from './basket/contact-basket/contact-team/contact-team.component';
import { ManageFavoritesComponent } from './manage-favorites/manage-favorites.component';
import { ManageBillingDataComponent } from './manage-billing-data/manage-billing-data.component';
import { BillsDeleteComponent } from './manage-billing-data/bills-delete/bills-delete.component';
import { AddCompanyComponent } from './manage-billing-data/add-company/add-company.component';
import { PaymentMethodConfigurationComponent } from './pay-card/payment-method-configuration/payment-method-configuration.component';
import { CardPaymentMethodsComponent } from './pay-card/card-payment-methods/card-payment-methods.component';
import { UserHelpComponent } from './userHelp/user-help/user-help.component';
import { ComplaintsBookComponent } from './userHelp/complaints-book/complaints-book.component';
import { ReadContactsComponent } from './manage-billing-data/read-contacts/read-contacts.component';
import { SetContactComponent } from './manage-billing-data/set-contact/set-contact.component';
import { ComplaintThanksComponent } from './userHelp/complaint-thanks/complaint-thanks.component';
import { SearchGeneralComponent } from './search-general/search-general/search-general.component';
import { EditBillComponent } from './manage-billing-data/edit-bill/edit-bill.component';
import { ManageCouponsComponent } from './manage-coupons/manage-coupons.component';
import { AddCouponComponent } from './manage-coupons/add-coupon/add-coupon.component';
import { ProductsWithCouponComponent } from './manage-coupons/products-with-coupon/products-with-coupon.component';
import { ManageAddressesComponent } from './manage-addresses/manage-addresses.component';
import { AddressesDeleteComponent } from './manage-addresses/addresses-delete/addresses-delete.component';
import { SearchFilterComponent } from './search-general/search-filter/search-filter.component';
import { SearchProductComponent } from './search-general/search-product/search-product.component';
import { ConditionssComponent } from './add-coupons/conditions/conditions.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { OrderDetailComponent } from './manage-order/order-detail/order-detail.component';
import { InstructionsComponent } from './manage-order/instructions/instructions.component';
import { ConditionsComponent } from './manage-coupons/conditions/conditions.component';

//* Routes
import { searchGeneralRoutes } from './router/searchGeneralRoutes';
import { CountryDirectionComponent } from './product-detail/send/country-direction/country-direction.component';
import { ChangeReturnComponent } from './product-detail/change-return/change-return.component';
import { DirectionsComponent } from './product-detail/directions/directions.component';
import { CountryBuyComponent } from './delivery-detail/buy/country-buy/country-buy.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'collaborative-basket', component: CollaborativeBasketComponent},
      { path: 'team', component: TeamComponent },
      { path: 'my-basket', component: MyBasketComponent },
      { path: 'empty-basket', component: EmptyBasketComponent},
      { path: 'contact-search', component: ContactSearchComponent},


      { path: 'contact-basket', component: ContactBasketComponent},
      { path: 'detail', component: DetailComponent },
      { path: 'send', component: SendComponent },

      { path: 'product',component:ProductComponent},
      { path: 'product/internal-inbox/:id', component: InternalInboxComponent },


      { path: 'variants',component:VariantsComponent},
      { path: 'picture-big',component:PictureBigComponent},
      { path: 'variants-product',component:VariantsProductComponent},
      { path: 'country-direction',component:CountryDirectionComponent},
      { path: 'change-return',component:ChangeReturnComponent},
      { path: 'manage-favorites', component: ManageFavoritesComponent},
      { path: 'user-help', component: UserHelpComponent },
      { path: 'user-help/complaints-book', component: ComplaintsBookComponent },
      { path: 'user-help/complaints-book/thanks', component: ComplaintThanksComponent },
      { path: 'user-help/complaints-book/internal-inbox/:id', component: InternalInboxComponent },

      //* routes settings
      { path: 'settings/main-settings', component: MainSettingsComponent },
      { path: 'settings/my-data-settings', component: MyDataSettingsComponent },
      { path: 'settings/password-settings', component: PasswordSettingsComponent },
      { path: 'settings/about-us', component: AboutUsSettingsComponent },
      { path: 'settings/about-us/about', component: AboutSettingsComponent },
      { path: 'settings/about-us/privacy-policies', component: PrivacyPoliciesSettingsComponent },
      { path: 'settings/about-us/terms-conditions', component: TermsConditionsSettingsComponent },
      { path: 'settings/about-us/returns-exchanges', component: ReturnsExchangesSettingsComponent },
      { path: 'settings/screen-mode', component: ScreenModeSettingsComponent },
      { path: 'settings/language', component: LanguageSettingsComponent },
      //* End routes settings

        /*  { path: 'empty-bas'} */
     /*  { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', redirectTo: 'home' }, */
      { path: 'main-inbox', component: MainInboxComponent },
      { path: 'internal-inbox/:id', component: InternalInboxComponent },
      { path: 'direction', component:DirectionComponent},
      { path: 'date', component:DateComponent},
      { path: 'contact', component:ContactComponent},
      { path: 'contact/buy', component:BuyComponent},
      { path: 'buy', component:BuyComponent},
      { path: 'country-buy', component:CountryBuyComponent},
      { path: 'delivery', component:DeliveryComponent},
      { path: 'alert', component:AlertComponent},
      { path: 'store-pickup', component:StorePickupComponent },
      { path: 'store-map', component:StoreMapComponent },
      { path: 'stores', component:StoresComponent },

      { path: 'way-pay', component:WayPayComponent },
      { path: 'payment-methods', component:PaymentMethodsComponent },
      { path: 'add-card', component:AddCardComponent },
      { path: 'send-directions', component:DirectionsComponent},


      { path: 'last-step', component:LastStepComponent },
      { path: 'last-step/internal-inbox/:id', component: InternalInboxComponent },

      { path: 'confirm-order', component: ConfirmOrderComponent},
      {path: 'payment-method-configuration', component: PaymentMethodConfigurationComponent},
      {path: 'card-payment-methods', component: CardPaymentMethodsComponent},

      {path: 'add-coupons', component: AddCouponsComponent},
      {path: 'add-coupons/conditions', component: ConditionssComponent},
      {path: 'billing-data', component: BillingDataComponent},
      {path: 'manage-user-information', component: ManageUserInformationComponent},
      {path: 'manage-billing-data', component: ManageBillingDataComponent},
      {path: 'manage-billing-data/bills-delete', component:BillsDeleteComponent},
      {path: 'manage-billing-data/edit-bill/:id', component:EditBillComponent},
      {path: 'manage-billing-data/add-company', component:AddCompanyComponent},
      {path: 'manage-billing-data/add-company/read-contacts', component:ReadContactsComponent},
      {path: 'manage-billing-data/add-company/set-contact', component:SetContactComponent},
      {path: 'manage-addresses', component:ManageAddressesComponent},
      {path: 'manage-addresses/addresses-delete', component:AddressesDeleteComponent},
      {path: 'manage-coupons', component:ManageCouponsComponent},
      {path: 'manage-coupons/add-coupon', component:AddCouponComponent},
      {path: 'manage-coupons/conditions', component: ConditionsComponent},
      {path: 'manage-coupons/products-with-coupon', component:ProductsWithCouponComponent},
      {path: 'manage-order', component:ManageOrderComponent},
      {path: 'manage-order/order-detail/:id', component:OrderDetailComponent},
      {path: 'manage-order/instructions', component:InstructionsComponent},

      // {path: 'manage-addresses', component:ManageAddressesComponent},
      // {path: 'manage-addresses/addresses-delete', component:AddressesDeleteComponent},

      { path: 'collaborative-team/contact-search', component: ContactSearchComponent},
      { path: 'collaborative-team',component:CollaborativeTeamComponent},
      { path: 'collaborative-team/team', component: TeamComponent },
      { path: 'collaborative-team/contact-team',component: ContactTeamComponent},

      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', redirectTo: 'home' },

    ]
  }
];

routes[0].children.unshift(...searchGeneralRoutes);
// console.log(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
