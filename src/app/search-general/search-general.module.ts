import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SearchComponent } from './search/search.component';
import { IonicModule } from '@ionic/angular';
import { CustomerRoutingModule } from '../customer/customer.routing.module';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ProductsComponent } from './products/products.component';
import { ShareModule } from "../shared/shared.module";



@NgModule({
    declarations: [CatalogueComponent, SearchComponent, SearchbarComponent, FiltroComponent, ProductsComponent],
    exports: [CatalogueComponent, SearchComponent, SearchbarComponent, FiltroComponent, ProductsComponent],
    imports: [
        IonicModule,
        CommonModule,
        CustomerRoutingModule,
        FormsModule,
        ShareModule
    ]
})
export class SearchGeneralModule { }
