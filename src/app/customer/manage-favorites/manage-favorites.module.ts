import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ShareModule } from 'src/app/shared/shared.module';
import { ManageFavoritesComponent } from './manage-favorites.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule
  ],
  declarations: [
    ManageFavoritesComponent
  ],
  exports:[
    ManageFavoritesComponent
  ]
})
export class ManageFavoritesModule {}
