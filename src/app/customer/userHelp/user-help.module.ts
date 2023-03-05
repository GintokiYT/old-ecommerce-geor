import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ShareModule } from '../../shared/shared.module';
import { UserHelpComponent } from './user-help/user-help.component';
import { ComplaintsBookComponent } from './complaints-book/complaints-book.component';

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
    ComplaintsBookComponent
  ],
  exports: [
    UserHelpComponent,
    ComplaintsBookComponent
  ]
})
export class UserHelpModule {}
