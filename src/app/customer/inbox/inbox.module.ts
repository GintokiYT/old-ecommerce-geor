import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// Pages
import { MainInboxComponent } from './main-inbox/main-inbox.component';
import { InternalInboxComponent } from './internal-inbox/internal-inbox.component';
import { TelefonoComponent } from './telefono/telefono.component';

// Componentes
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { HeaderInboxComponent } from './components/header-inbox/header-inbox.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    MainInboxComponent,
    InternalInboxComponent,
    TelefonoComponent,
    HeaderMainComponent,
    FooterMainComponent,
    HeaderInboxComponent
  ],
  exports:[
    MainInboxComponent,
    InternalInboxComponent,
    TelefonoComponent,
    HeaderMainComponent,
    FooterMainComponent,
    HeaderInboxComponent
  ]
})
export class InboxModule {}
