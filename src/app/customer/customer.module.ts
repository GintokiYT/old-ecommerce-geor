import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CustomerRoutingModule } from './customer.routing.module';
import { CestaColaborativaComponent } from './cesta/cesta-colaborativa/cesta-colaborativa.component';
import { HeaderCestaComponent } from './cesta/cesta-colaborativa/header-cesta/header-cesta.component';
import { EquiposComponent } from './cesta/equipos/equipos.component';
import { HeaderEquiposComponent } from './cesta/equipos/header-equipos/header-equipos.component';
import { CoreModule } from '@geor360/ecore';
import { ModalCestaComponent } from './cesta/cesta-colaborativa/modal-cesta/modal-cesta.component';
import { MiCestaComponent } from './cesta/mi-cesta/mi-cesta.component';
import { HeaderMiCestaComponent } from './cesta/mi-cesta/header-mi-cesta/header-mi-cesta.component';
import { ModalMiCestaComponent } from './cesta/mi-cesta/modal-mi-cesta/modal-mi-cesta.component';
import { FooterCestaComponent } from './cesta/cesta-colaborativa/footer-cesta/footer-cesta.component';
import { CestaModule } from './cesta/cesta.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    CustomerRoutingModule,
    CestaModule
  ],
  declarations: [
    HomeComponent,

  ],

})
export class CustomerModule {}
