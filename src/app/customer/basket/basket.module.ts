import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaborativeBasketComponent } from './collaborative-basket/collaborative-basket.component';
import { HeaderBasketComponent } from './collaborative-basket/header-basket/header-basket.component';
import { TeamComponent } from './team/team.component';
import { HeaderTeamComponent } from './team/header-team/header-team.component';
import { HeaderMyBasketComponent } from './my-basket/header-my-basket/header-my-basket.component';
import { ModalMiCestaComponent } from './my-basket/modal-mi-cesta/modal-mi-cesta.component';
import { IonicModule } from '@ionic/angular';
import { ProductComponent } from './collaborative-basket/product/product.component';
import { MyBasquetComponent } from './my-basket/my-basquet.component';
import { ModalBasketComponent } from './collaborative-basket/modal-basket/modal-basket.component';
import { InboxModule } from '../inbox/inbox.module';
import { MainProductComponent } from './collaborative-basket/main-product/main-product.component';

@NgModule({
  declarations: [
    CollaborativeBasketComponent,
    HeaderBasketComponent,
    HeaderTeamComponent,
    TeamComponent,
    ModalBasketComponent,
    MyBasquetComponent,
    HeaderMyBasketComponent,
    ModalMiCestaComponent,
    ProductComponent,
    MainProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    InboxModule,
  ],
  exports:[
    HeaderBasketComponent,
    HeaderTeamComponent,
    ModalBasketComponent,
    HeaderMyBasketComponent,
    ProductComponent,
    MainProductComponent
  ]
})
export class CestaModule { }
