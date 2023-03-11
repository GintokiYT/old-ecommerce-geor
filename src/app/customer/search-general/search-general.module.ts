import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ShareModule } from 'src/app/shared/shared.module';
import { SearchGeneralComponent } from './search-general/search-general.component';

import { iconScanner } from './icon-scanner';
import { iconInputClose } from './icon-input-close';
import { iconCloseSearch } from './icon-close-search';
import { iconDeleteTrash } from './icon-delete-trash';
import { iconArrow } from './icon-arrow';
import { SearchFilterComponent } from './search-filter/search-filter.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule
  ],
  declarations: [
    SearchGeneralComponent,
    SearchFilterComponent,
    iconScanner,
    iconInputClose,
    iconCloseSearch,
    iconDeleteTrash,
    iconArrow
  ],
  exports:[
    SearchGeneralComponent,
    SearchFilterComponent,
    iconScanner,
    iconInputClose,
    iconCloseSearch,
    iconDeleteTrash,
    iconArrow
  ]
})
export class SearchGeneralModule {}
