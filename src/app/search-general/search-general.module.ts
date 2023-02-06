import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SearchComponent } from './search/search.component';
import { IonicModule } from '@ionic/angular';
import { CustomerRoutingModule } from '../customer/customer.routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CatalogueComponent,SearchComponent],
  imports: [
    IonicModule,
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
  ],
  exports: [CatalogueComponent,SearchComponent]
})
export class SearchGeneralModule { }
