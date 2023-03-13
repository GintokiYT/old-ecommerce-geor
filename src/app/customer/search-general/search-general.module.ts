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
import { ModalFilterComponent } from './modal-filter/modal-filter.component';
import { iconArrowBottom } from './icon-arrow-bottom';
import { FilterSizeComponent } from './modal-filter/filter-size';


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
    ModalFilterComponent,
    FilterSizeComponent,
    iconScanner,
    iconInputClose,
    iconCloseSearch,
    iconDeleteTrash,
    iconArrowBack,
    iconArrow,
    iconFilter,
    iconArrowBottom
  ],
  exports:[
    SearchGeneralComponent,
    SearchFilterComponent,
    SearchProductComponent,
    FeaturedComponent,
    ModalFilterComponent,
    FilterSizeComponent,
    iconScanner,
    iconInputClose,
    iconCloseSearch,
    iconDeleteTrash,
    iconArrowBack,
    iconArrow,
    iconFilter,
    iconArrowBottom
  ]
})
export class SearchGeneralModule {}
