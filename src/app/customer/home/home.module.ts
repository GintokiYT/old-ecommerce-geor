import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'
import { FeaturedComponent } from './featured/featured.component';
import { InboxModule } from '../inbox/inbox.module';
import { ShareModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    FeaturedComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    InboxModule,
    ShareModule,
    FormsModule,
  ],
  exports:[
    FeaturedComponent
  ]
})
export class HomeModule { }
