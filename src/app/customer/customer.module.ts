import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer.routing.module';
import { ConfirmarPedidoModule } from './confirmar-pedido/confirmar-pedido.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerRoutingModule,
    ConfirmarPedidoModule
  ],
  declarations: [
  ]
})
export class CustomerModule {}
