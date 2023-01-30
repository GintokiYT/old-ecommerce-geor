import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { IconTruckComponent } from './icon-truck/icon-truck.component';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password/input-password.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';
import { FooterButtonsComponent } from './footer-buttons/footer-buttons.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  exports: [
    FooterButtonsComponent,
    ValidationMessagesComponent,
    BackButtonComponent,
    InputPasswordComponent,
    IconTruckComponent,
    FooterNavigationComponent,
    HeaderComponent
  ],
  declarations: [
    FooterButtonsComponent,
    ValidationMessagesComponent,
    BackButtonComponent,
    InputPasswordComponent,
    IconTruckComponent,
    FooterNavigationComponent,
    HeaderComponent
  ],
  providers: [],
})
export class ShareModule {}
