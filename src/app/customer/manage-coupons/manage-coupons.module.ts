import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageCouponsComponent } from './manage-coupons.component';
import { AddCouponComponent } from './add-coupon/add-coupon.component';
import { AvaibleCouponsComponent } from './avaible-coupons/avaible-coupons.component';
import { ExpiredCouponsComponent } from './expired-coupons/expired-coupons.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ProductsWithCouponComponent } from './products-with-coupon/products-with-coupon.component';



@NgModule({
  declarations: [ManageCouponsComponent,AddCouponComponent,AvaibleCouponsComponent,ExpiredCouponsComponent, ConditionsComponent,
  ProductsWithCouponComponent],
  imports: [
    CommonModule,
    ShareModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ManageCouponsModule { }
