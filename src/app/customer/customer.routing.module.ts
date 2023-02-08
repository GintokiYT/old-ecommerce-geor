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
import { CatalogueComponent } from '../search-general/catalogue/catalogue.component';
import { SearchComponent } from '../search-general/search/search.component';
import { ContactSearchComponent } from './basket/contact-basket/contact-search/contact-search.component';
import { VariantsProductComponent } from './product-detail/variants-product/variants-product.component';
import { CollaborativeTeamComponent } from './basket/team/collaborative-team/collaborative-team.component';
import { LastStepComponent } from './confirm-card-pay/last-step/last-step.component';
import { AddCouponsComponent } from './add-coupons/add-coupons.component';
import { BillingDataComponent } from './billing-data/billing-data.component';
import { ManageUserInformationComponent } from './manage-user-information/manage-user-information.component';
import { OtherFormsPayComponent } from './other-forms/other-forms-pay/other-forms-pay.component';


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
      { path: 'variants',component:VariantsComponent},
      { path: 'picture-big',component:PictureBigComponent},
      { path: 'variants-product',component:VariantsProductComponent},
      { path: 'collaborative-team',component:CollaborativeTeamComponent},

        /*  { path: 'empty-bas'} */
     /*  { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', redirectTo: 'home' }, */
      { path: 'main-inbox', component: MainInboxComponent },
      { path: 'internal-inbox/:id', component: InternalInboxComponent },
      { path: 'direction', component:DirectionComponent},
      { path: 'date', component:DateComponent},
      { path: 'contact', component:ContactComponent},
      { path: 'buy', component:BuyComponent},
      { path: 'delivery', component:DeliveryComponent},
      { path: 'alert', component:AlertComponent},
      { path: 'store-pickup', component:StorePickupComponent },
      { path: 'store-map', component:StoreMapComponent },
      { path: 'stores', component:StoresComponent },

      { path: 'way-pay', component:WayPayComponent },
      { path: 'payment-methods', component:PaymentMethodsComponent },
      { path: 'other-forms-pay', component:OtherFormsPayComponent },
      { path: 'add-card', component:AddCardComponent },
      { path: 'last-step', component:LastStepComponent },
      { path: 'confirm-order', component: ConfirmOrderComponent},
      { path: 'catalogue', component: CatalogueComponent },
      { path: 'search', component: SearchComponent },

      {path: 'add-coupons', component: AddCouponsComponent},
      {path: 'billing-data', component: BillingDataComponent},
      {path: 'manage-user-information', component: ManageUserInformationComponent},

      { path: '', pathMatch: 'full', redirectTo: 'main-inbox' },
      { path: '**', redirectTo: 'main-inbox' },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
