import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from 'src/app/shared/shared.module';
import { AddCouponsComponent } from './add-coupons.component';
import { FormsModule } from '@angular/forms';
import { AvaibleCouponsComponent } from './avaible-coupons/avaible-coupons.component';
import { ExpiredCouponsComponent } from './expired-coupons/expired-coupons.component';



@NgModule({
  declarations: [AddCouponsComponent, AvaibleCouponsComponent,ExpiredCouponsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ShareModule,
    FormsModule
  ]
})
export class AddCouponsModule { }
