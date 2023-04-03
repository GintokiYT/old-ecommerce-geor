import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { HeaderDetailComponent } from './detail/header-detail/header-detail.component';
import { IonicModule } from '@ionic/angular';
import { SendComponent } from './send/send.component';
import { ProductComponent } from './product/product.component';
import { FooterProductComponent } from './product/footer-product/footer-product.component';

import { HeaderVariantsComponent } from './variants/header-variants/header-variants.component';
import { SliderVariantsComponent } from './product/slider-variants/slider-variants.component';
import { SliderCostsComponent } from './product/slider-costs/slider-costs.component';
import { HeaderProductComponent } from './product/header-product/header-product.component';
import { ModalVariantsComponent } from './variants/modal-variants/modal-variants.component';
import { ModalAddComponent } from './variants/modal-add/modal-add.component';
import { ModalBasketComponent } from './variants/modal-basket/modal-basket.component';
import { PictureBigComponent } from './picture-big/picture-big.component';
import { VariantsProductComponent } from './variants-product/variants-product.component';
/* import { ModalCountryComponent } from './send/modal-country/modal-country.component'; */
import { CountryDirectionComponent } from './send/country-direction/country-direction.component';
import { ChangeReturnComponent } from './change-return/change-return.component';
import { DirectionsComponent } from './send/directions/directions.component';
import { ShareModule } from "../../shared/shared.module";
import { FormsModule } from '@angular/forms';
import { SliderCostComponent } from './variants/slider-cost/slider-cost.component';
import { VariantsComponent } from './variants/variants.component';


@NgModule({
    declarations: [
        DetailComponent,
        HeaderDetailComponent,
        SendComponent,
        ProductComponent,
        FooterProductComponent,
        VariantsComponent,
        HeaderVariantsComponent,
        SliderVariantsComponent,
        SliderCostsComponent,
        SliderCostComponent,
        HeaderProductComponent,
        ModalVariantsComponent,
        ModalAddComponent,
        ModalBasketComponent,
        PictureBigComponent,
        VariantsProductComponent,
        /* ModalCountryComponent, */
        CountryDirectionComponent,
        ChangeReturnComponent,
        DirectionsComponent
    ],
    exports: [
        HeaderDetailComponent,
        FooterProductComponent,
        HeaderVariantsComponent,
        SliderVariantsComponent,
        SliderCostsComponent,
        SliderCostComponent,
        HeaderProductComponent,
        ModalVariantsComponent,
        ModalAddComponent,
        ModalBasketComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        ShareModule,
        FormsModule
    ]
})
export class ProductDetailModule { }
