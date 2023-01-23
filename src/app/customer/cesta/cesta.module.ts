import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaColaborativaComponent } from './cesta-colaborativa/cesta-colaborativa.component';
import { FooterCestaComponent } from './cesta-colaborativa/footer-cesta/footer-cesta.component';
import { HeaderCestaComponent } from './cesta-colaborativa/header-cesta/header-cesta.component';
import { ModalCestaComponent } from './cesta-colaborativa/modal-cesta/modal-cesta.component';
import { EquiposComponent } from './equipos/equipos.component';
import { HeaderEquiposComponent } from './equipos/header-equipos/header-equipos.component';
import { HeaderMiCestaComponent } from './mi-cesta/header-mi-cesta/header-mi-cesta.component';
import { MiCestaComponent } from './mi-cesta/mi-cesta.component';
import { ModalMiCestaComponent } from './mi-cesta/modal-mi-cesta/modal-mi-cesta.component';
import { IonicModule } from '@ionic/angular';
import { ProductoComponent } from './cesta-colaborativa/producto/producto.component';



@NgModule({
  declarations: [
    CestaColaborativaComponent,
    HeaderCestaComponent,
    HeaderEquiposComponent,
    EquiposComponent,
    ModalCestaComponent,
    MiCestaComponent,
    HeaderMiCestaComponent,
    ModalMiCestaComponent,
    FooterCestaComponent,
    ProductoComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports:[
    HeaderCestaComponent,
    HeaderEquiposComponent,
    ModalCestaComponent,
    HeaderMiCestaComponent,
    FooterCestaComponent,
    ProductoComponent
  ]
})
export class CestaModule { }
