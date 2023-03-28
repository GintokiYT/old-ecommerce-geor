import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { BuyComponent } from './buy/buy.component';
import { ContactComponent } from './contact/contact.component';
import { DateComponent } from './date/date.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { DirectionComponent } from './direction/direction.component';
import { IonicModule } from '@ionic/angular';
import { CustomerRoutingModule } from '../customer.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../shared/shared.module';
import { CoreModule } from '@geor360/ecore';
import { AccountRoutingModule } from 'src/app/account/account.routing.module';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';
import { PopupDocumentComponent } from './buy/popup-document/popup-document.component';
import { CountryBuyComponent } from './buy/country-buy/country-buy.component';
import {ScrollingModule} from "@angular/cdk/scrolling";



@NgModule({
  declarations: [AlertComponent,BuyComponent,ContactComponent,DateComponent,
                DeliveryComponent,DirectionComponent,PopupDocumentComponent,CountryBuyComponent],
  imports: [
    CommonModule,
    IonicModule,
    CustomerRoutingModule,
    FormsModule,
    ShareModule,
    ReactiveFormsModule,
    CoreModule,
    AccountRoutingModule,
    IonicInputMaskModule,
    ScrollingModule
  ],

  exports:[
    AlertComponent,BuyComponent,ContactComponent,DateComponent,
                DeliveryComponent,DirectionComponent
  ]
})
export class DeliveryDetailModule { }
