import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CustomerRoutingModule } from './customer.routing.module';

import { InboxModule } from './inbox/inbox.module';

// Componentes (paginas)
// import { MainInboxComponent } from './inbox/main-inbox/main-inbox.component';
// import { InternalInboxComponent } from './inbox/internal-inbox/internal-inbox.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerRoutingModule,
    InboxModule
  ],
  declarations: [
    HomeComponent,
  ]
})
export class CustomerModule {}
