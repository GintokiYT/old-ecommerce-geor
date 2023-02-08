import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CustomerRoutingModule } from '../customer.routing.module';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/shared/shared.module';
import { OtherFormsPayComponent } from './other-forms-pay/other-forms-pay.component';



@NgModule({
  declarations: [OtherFormsPayComponent],
  imports: [
    IonicModule,
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ShareModule,
  ],
  exports:[

  ]
})
export class OtherFormsModule{ }