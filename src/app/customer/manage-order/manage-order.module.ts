import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageOrderComponent } from './manage-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from 'src/app/shared/shared.module';
import { ModalFilterComponent } from './modal-filter/modal-filter.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { ModalCameraComponent } from './order-detail/modal-camera/modal-camera.component';



@NgModule({
  declarations: [ManageOrderComponent, ModalFilterComponent, OrderDetailComponent, InstructionsComponent,ModalCameraComponent],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ShareModule
  ]
})
export class ManageOrderModule { }
