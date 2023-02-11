import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ConditionComponent } from './condition/condition.component';
import { ExpiredComponent } from './expired/expired.component';
import { ProductsbarComponent } from './productsbar/productsbar.component';
import { StartComponent } from './start/start.component';
import { VoucherComponent } from './voucher/voucher.component';
import { IonicModule } from '@ionic/angular';
import { CustomerRoutingModule } from '../customer.routing.module';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../../shared/shared.module';



@NgModule({
  declarations: [AddComponent,ConditionComponent,ExpiredComponent,ProductsbarComponent,StartComponent,VoucherComponent],
  imports: [
    IonicModule,
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ShareModule
  ]
})
export class CouponsModule { }
