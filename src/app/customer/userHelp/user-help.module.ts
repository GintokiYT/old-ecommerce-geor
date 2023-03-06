import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from '../../shared/shared.module';
import { UserHelpComponent } from './user-help/user-help.component';
import { ComplaintsBookComponent } from './complaints-book/complaints-book.component';
import { PopupDocumentTypeComponent } from './popup-document-type/popup-document-type.component';
import { PopupDepartmentsComponent } from './popup-departments/popup-departments.component';
import { ComplaintThanksComponent } from './complaint-thanks/complaint-thanks.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserHelpComponent,
    ComplaintsBookComponent,
    PopupDocumentTypeComponent,
    PopupDepartmentsComponent,
    ComplaintThanksComponent
  ],
  exports: [
    UserHelpComponent,
    ComplaintsBookComponent,
    PopupDocumentTypeComponent,
    PopupDepartmentsComponent,
    ComplaintThanksComponent
  ]
})
export class UserHelpModule {}
