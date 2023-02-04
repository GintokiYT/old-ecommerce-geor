import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaborativeBasketComponent } from './collaborative-basket/collaborative-basket.component';
import { HeaderBasketComponent } from './collaborative-basket/header-basket/header-basket.component';
import { TeamComponent } from './team/team.component';
import { HeaderTeamComponent } from './team/header-team/header-team.component';
import { HeaderMyBasketComponent } from './my-basket/header-my-basket/header-my-basket.component';
import { IonicModule } from '@ionic/angular';
import { ProductComponent } from './collaborative-basket/product/product.component';
import { MyBasketComponent } from './my-basket/my-basket.component';
import { ModalBasketComponent } from './collaborative-basket/modal-basket/modal-basket.component';
import { InboxModule } from '../inbox/inbox.module';
import { MainProductComponent } from './collaborative-basket/main-product/main-product.component';
import { EmptyBasketComponent } from './empty-basket/empty-basket.component';
import { ModalInviteComponent } from './my-basket/modal-invite/modal-invite.component';
import { ModalResendComponent } from './team/modal-resend/modal-resend.component';
import { ModalAcceptedComponent } from './team/modal-accepted/modal-accepted.component';
import { ContactBasketComponent } from './contact-basket/contact-basket.component';
import { ShareModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CollaborativeBasketComponent,
    HeaderBasketComponent,
    HeaderTeamComponent,
    TeamComponent,
    ModalBasketComponent,
    MyBasketComponent,
    HeaderMyBasketComponent,
    ProductComponent,
    MainProductComponent,
    EmptyBasketComponent,
    ModalInviteComponent,
    ModalResendComponent,
    ModalAcceptedComponent,
    ContactBasketComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    InboxModule,
    ShareModule
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
