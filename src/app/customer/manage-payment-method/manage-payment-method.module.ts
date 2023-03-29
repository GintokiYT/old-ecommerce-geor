import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagePaymentMethodComponent } from './manage-payment-method.component';
import { ShareModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardPaymentMethodsComponent } from './card-payment-methods/card-payment-methods.component';



@NgModule({
  declarations: [
    ManagePaymentMethodComponent,
    CardPaymentMethodsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShareModule,
  ]
})
export class ManagePaymentMethodModule { }
