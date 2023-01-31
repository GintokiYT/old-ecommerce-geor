import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DejarPedidoComponent } from './dejar-pedido/dejar-pedido.component';
import { DetallesEntregaComponent } from './detalles-entrega/detalles-entrega.component';
import { FooterComponent } from './footer/footer.component';
import { SliderProductosComponent } from './slider-productos/slider-productos.component';
import { IonicModule } from '@ionic/angular';
import { ConfirmarPedidoComponent } from './confirmar-pedido.component';
import { ResumenPedidoComponent } from './resumen-pedido/resumen-pedido.component';
import { CustomerRoutingModule } from '../customer.routing.module';
import { RouterModule } from '@angular/router';
import { ShareModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [DejarPedidoComponent, DetallesEntregaComponent, FooterComponent, SliderProductosComponent, ConfirmarPedidoComponent,
    ResumenPedidoComponent],
  imports: [
    CommonModule, IonicModule, CustomerRoutingModule, RouterModule, ShareModule
  ],
  exports: [
    DejarPedidoComponent, DetallesEntregaComponent, FooterComponent,
    SliderProductosComponent, ConfirmarPedidoComponent,
    ResumenPedidoComponent
  ]
})
export class ConfirmarPedidoModule { }
