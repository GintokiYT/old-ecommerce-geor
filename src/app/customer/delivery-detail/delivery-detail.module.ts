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



@NgModule({
  declarations: [AlertComponent,BuyComponent,ContactComponent,DateComponent,
                DeliveryComponent,DirectionComponent],
  imports: [
    CommonModule,
    IonicModule,
    CustomerRoutingModule
  ],
  exports:[
    AlertComponent,BuyComponent,ContactComponent,DateComponent,
                DeliveryComponent,DirectionComponent
  ]
})
export class DeliveryDetailModule { }
