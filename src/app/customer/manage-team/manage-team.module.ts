import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTeamComponent } from './manage-team.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../shared/shared.module';
import { InboxModule } from '../inbox/inbox.module';
import { HomeModule } from '../home/home.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ModalInviteTeamComponent } from './modal-invite-team/modal-invite-team.component';

@NgModule({
  declarations: [
    ManageTeamComponent,
    ModalInviteTeamComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShareModule,
    InboxModule,
    HomeModule,
    ScrollingModule

  ]
})
export class ManageTeamModule { }
