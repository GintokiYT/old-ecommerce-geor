import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BillingDataComponent } from './billing-data.component';
import { ShareModule } from '../../shared/shared.module';



@NgModule({
  declarations: [BillingDataComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ShareModule
  ]
})
export class BillingDataModule { }
