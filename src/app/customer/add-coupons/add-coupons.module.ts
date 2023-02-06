import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from 'src/app/shared/shared.module';
import { AddCouponsComponent } from './add-coupons.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddCouponsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ShareModule,
    FormsModule
  ]
})
export class AddCouponsModule { }
