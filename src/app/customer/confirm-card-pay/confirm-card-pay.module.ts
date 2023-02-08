import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CustomerRoutingModule } from '../customer.routing.module';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/shared/shared.module';
import { LastStepComponent } from './last-step/last-step.component';


@NgModule({
  declarations: [LastStepComponent],
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
export class ConfirmCardPayModule{ }