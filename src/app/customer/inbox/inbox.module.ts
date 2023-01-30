import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// Pages
import { MainInboxComponent } from './main-inbox/main-inbox.component';
import { InternalInboxComponent } from './internal-inbox/internal-inbox.component';

// Componentes
import { HeaderMainComponent } from './components/header-main/header-main.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { HeaderInboxComponent } from './components/header-inbox/header-inbox.component';
import { ShareModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule
  ],
  declarations: [
    MainInboxComponent,
    InternalInboxComponent,
    HeaderMainComponent,
    FooterMainComponent,
    HeaderInboxComponent
  ],
  exports:[
    MainInboxComponent,
    InternalInboxComponent,
    HeaderMainComponent,
    FooterMainComponent,
    HeaderInboxComponent
  ]
})
export class InboxModule {}
