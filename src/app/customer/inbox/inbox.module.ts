import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MainInboxComponent } from './main-inbox/main-inbox.component';
import { InternalInboxComponent } from './internal-inbox/internal-inbox.component';
import { TelefonoComponent } from './telefono/telefono.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    MainInboxComponent,
    InternalInboxComponent,
    TelefonoComponent
  ]
})
export class InboxModule {}
