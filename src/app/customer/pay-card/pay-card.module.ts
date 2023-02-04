import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { CustomerRoutingModule } from '../customer.routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WayPayComponent } from './way-pay/way-pay.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { ShareModule } from '../../shared/shared.module';
import { AddCardComponent } from './add-card/add-card.component';

import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';

@NgModule({
  declarations: [ WayPayComponent,PaymentMethodsComponent, AddCardComponent],
  imports: [
    IonicModule,
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ShareModule,
    IonicInputMaskModule,
  ],
  exports:[
   
  ]
})
export class PayCardModule { }
