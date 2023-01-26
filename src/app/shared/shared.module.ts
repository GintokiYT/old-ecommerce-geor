import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password/input-password.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';
import { IonicModule } from '@ionic/angular';
import { FooterButtonsComponent } from './footer-buttons/footer-buttons.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [
    FooterButtonsComponent,
    ValidationMessagesComponent,
    BackButtonComponent,
    InputPasswordComponent,
  ],
  declarations: [
    FooterButtonsComponent,
    ValidationMessagesComponent,
    BackButtonComponent,
    InputPasswordComponent,
  ],
  providers: [],
})
export class ShareModule {}
