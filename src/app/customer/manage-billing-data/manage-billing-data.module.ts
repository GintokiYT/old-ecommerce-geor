import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageBillingDataComponent } from './manage-billing-data.component';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from 'src/app/shared/shared.module';
import { BillsDeleteComponent } from './bills-delete/bills-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ModalTypeBillComponent } from './modal-type-bill/modal-type-bill.component';
import { ReadContactsComponent } from './read-contacts/read-contacts.component';
import { SetContactComponent } from './set-contact/set-contact.component';
import {IonicInputMaskModule} from "@thiagoprz/ionic-input-mask";
import { EditBillComponent } from './edit-bill/edit-bill.component';



@NgModule({
  declarations: [
    ManageBillingDataComponent,
    BillsDeleteComponent, 
    AddCompanyComponent, 
    ModalTypeBillComponent,
    ReadContactsComponent,
    SetContactComponent,
    EditBillComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    IonicInputMaskModule
  ]
})
export class ManageBillingDataModule { }
