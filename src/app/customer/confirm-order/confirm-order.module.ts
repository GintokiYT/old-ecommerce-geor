import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderTypeComponent } from './order-type/order-type.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SliderProductsComponent } from './slider-products/slider-products.component';
import { ConfirmOrderComponent } from './confirm-order.component';
import { ModalAccessContactComponent } from './modal-access-contact/modal-access-contact.component';



@NgModule({
  declarations: [FooterComponent,OrderDetailsComponent,OrderTypeComponent,
                  OrderSummaryComponent,SliderProductsComponent,ConfirmOrderComponent,ModalAccessContactComponent],
  imports: [
    CommonModule, IonicModule, RouterModule, ShareModule
  ]
})
export class ConfirmOrderModule { }
