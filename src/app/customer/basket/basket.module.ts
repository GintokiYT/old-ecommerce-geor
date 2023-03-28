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
import { ContactSearchComponent } from './contact-basket/contact-search/contact-search.component';
import { FormsModule } from '@angular/forms';
import { CollaborativeTeamComponent } from './team/collaborative-team/collaborative-team.component';
import { ModalResendInvitationComponent } from './team/modal-resend-invitation/modal-resend-invitation.component';
import { ContactTeamComponent } from './contact-basket/contact-team/contact-team.component';
import { ModalInviteTeamComponent } from './team/collaborative-team/modal-invite-team/modal-invite-team.component';
import { HomeModule } from '../home/home.module';
import { ModalMyBasketComponent } from './my-basket/modal-Mybasket/modal-Mybasket.component';
import {ScrollingModule} from "@angular/cdk/scrolling";

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
    ContactBasketComponent,
    ContactSearchComponent,
    CollaborativeTeamComponent,
    ModalResendInvitationComponent,
    ContactTeamComponent,
    ModalInviteTeamComponent,
    ModalMyBasketComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    InboxModule,
    ShareModule,
    FormsModule,
    HomeModule,
    ScrollingModule

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
