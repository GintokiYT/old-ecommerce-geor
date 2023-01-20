import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DejarPedidoComponent } from './dejar-pedido/dejar-pedido.component';
import { DetallesEntregaComponent } from './detalles-entrega/detalles-entrega.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SliderProductosComponent } from './slider-productos/slider-productos.component';
import { IonicModule } from '@ionic/angular';
import { ConfirmarPedidoComponent } from './confirmar-pedido.component';
import { ResumenPedidoComponent } from './resumen-pedido/resumen-pedido.component';



@NgModule({
  declarations: [DejarPedidoComponent,DetallesEntregaComponent,FooterComponent,
                HeaderComponent,SliderProductosComponent,ConfirmarPedidoComponent,
              ResumenPedidoComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[
    DejarPedidoComponent,DetallesEntregaComponent,FooterComponent,
                HeaderComponent,SliderProductosComponent,ConfirmarPedidoComponent,
                ResumenPedidoComponent
  ]
})
export class ConfirmarPedidoModule { }
