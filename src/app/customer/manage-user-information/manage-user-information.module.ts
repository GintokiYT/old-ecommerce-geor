import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserInformationComponent } from './manage-user-information.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ManageUserInformationComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ShareModule
  ]
})
export class ManageUserInformationModule { }

