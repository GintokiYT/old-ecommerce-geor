import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageUserInformationComponent } from './manage-user-information.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/shared/shared.module';
import { ModalCameraComponent } from './modal-camera/modal-camera.component';



@NgModule({
  declarations: [ManageUserInformationComponent, ModalCameraComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ShareModule
  ]
})
export class ManageUserInformationModule { }

