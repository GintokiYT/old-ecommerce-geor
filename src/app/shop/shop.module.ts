import { ShareModule } from './../shared/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopRoutingModule } from './shop-routing.module';

import { HomeComponent } from './home/home.component';
import { ToDecimalsPipe } from '../pipes/to-decimals.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopRoutingModule,
    ShareModule,
  ],
  declarations: [HomeComponent, ToDecimalsPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShopModule {}
