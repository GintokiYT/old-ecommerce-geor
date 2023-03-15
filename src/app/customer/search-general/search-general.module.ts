import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ShareModule } from 'src/app/shared/shared.module';
import { SearchGeneralComponent } from './search-general/search-general.component';

import { iconInputClose } from './icon-input-close';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { FeaturedComponent } from './featured/featured.component';
import { ModalFilterComponent } from './modal-filter/modal-filter.component';
import { FilterSizeComponent } from './modal-filter/filter-size/filter-size.component';
import { FilterThicknessComponent } from './modal-filter/filter-thickness/filter-thickness.component';
import { FilterColorComponent } from './modal-filter/filter-color/filter-color.component';
import { FilterPriceComponent } from './modal-filter/filter-price/filter-price.component';


@NgModule({
  declarations: [
    SearchGeneralComponent,
    SearchFilterComponent,
    SearchProductComponent,
    FeaturedComponent,
    ModalFilterComponent,
    FilterSizeComponent,
    FilterThicknessComponent,
    FilterColorComponent,
    FilterPriceComponent,
    iconInputClose,
  ],
  exports: [
    SearchGeneralComponent,
    SearchFilterComponent,
    SearchProductComponent,
    FeaturedComponent,
    ModalFilterComponent,
    FilterSizeComponent,
    FilterThicknessComponent,
    FilterColorComponent,
    FilterPriceComponent,
    iconInputClose,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
  ]
})
export class SearchGeneralModule {}
