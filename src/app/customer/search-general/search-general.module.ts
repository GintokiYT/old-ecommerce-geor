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
import { SearchProductComponent } from './search-product/search-product.component';
import { iconArrowBack } from './icon-arrow-back';
import { iconFilter } from './icon-filter';
import { FeaturedComponent } from './featured/featured.component';


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
    SearchProductComponent,
    FeaturedComponent,
    iconScanner,
    iconInputClose,
    iconCloseSearch,
    iconDeleteTrash,
    iconArrowBack,
    iconArrow,
    iconFilter
  ],
  exports:[
    SearchGeneralComponent,
    SearchFilterComponent,
    SearchProductComponent,
    FeaturedComponent,
    iconScanner,
    iconInputClose,
    iconCloseSearch,
    iconDeleteTrash,
    iconArrowBack,
    iconArrow,
    iconFilter
  ]
})
export class SearchGeneralModule {}
