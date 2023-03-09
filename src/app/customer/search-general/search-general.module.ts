import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ShareModule } from 'src/app/shared/shared.module';
import { SearchGeneralComponent } from './search-general/search-general.component';

import { iconScanner } from './icon-scanner';
import { iconInputClose } from './icon-input-close';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule
  ],
  declarations: [
    SearchGeneralComponent,
    iconScanner,
    iconInputClose
  ],
  exports:[
    SearchGeneralComponent,
    iconScanner,
    iconInputClose
  ]
})
export class SearchGeneralModule {}
