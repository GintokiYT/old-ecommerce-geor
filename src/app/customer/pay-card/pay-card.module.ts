import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CustomerRoutingModule } from '../customer.routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WayPayComponent } from './way-pay/way-pay.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';

@NgModule({
  declarations: [WayPayComponent,PaymentMethodsComponent],
  imports: [
    IonicModule,
    CommonModule,
    CustomerRoutingModule,
    FormsModule
  ],
  exports:[
   
  ]
})
export class PayCardModule { }
