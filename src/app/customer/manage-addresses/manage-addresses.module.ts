import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAddressesComponent } from './manage-addresses.component';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from 'src/app/shared/shared.module';
import { AddressesDeleteComponent } from './addresses-delete/addresses-delete.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ManageAddressesComponent,AddressesDeleteComponent],
  imports: [
    CommonModule,
    IonicModule,
    ShareModule,
    FormsModule

  ]
})
export class ManageAddressesModule { }
