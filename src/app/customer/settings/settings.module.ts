import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ShareModule } from 'src/app/shared/shared.module';
import { MainSettingsComponent } from './main-settings/main-settings.component';
import { PopupSignOffComponent } from './popup-sign-off/popup-sign-off.component';
import { MyDataSettingsComponent } from './my-data-settings/my-data-settings.component';
import { PasswordSettingsComponent } from './password-settings/password-settings.component';
import { AboutUsSettingsComponent } from './about-us-settings/about-us-settings.component';
import { AboutSettingsComponent } from './about-settings/about-settings.component';
import { PrivacyPoliciesSettingsComponent } from './privacy-policies-settings/privacy-policies-settings.component';
import { TermsConditionsSettingsComponent } from './terms-conditions-settings/terms-conditions-settings.component';
import { ReturnsExchangesSettingsComponent } from './returns-exchanges-settings/returns-exchanges-settings.component';
import { ScreenModeSettingsComponent } from './screen-mode-settings/screen-mode-settings.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule
  ],
  declarations: [
    MainSettingsComponent,
    PopupSignOffComponent,
    MyDataSettingsComponent,
    PasswordSettingsComponent,
    AboutUsSettingsComponent,
    AboutSettingsComponent,
    PrivacyPoliciesSettingsComponent,
    TermsConditionsSettingsComponent,
    ReturnsExchangesSettingsComponent,
    ScreenModeSettingsComponent
  ],
  exports:[
    MainSettingsComponent,
    PopupSignOffComponent,
    MyDataSettingsComponent,
    PasswordSettingsComponent,
    AboutUsSettingsComponent,
    AboutSettingsComponent,
    PrivacyPoliciesSettingsComponent,
    TermsConditionsSettingsComponent,
    ReturnsExchangesSettingsComponent,
    ScreenModeSettingsComponent
  ]
})
export class SettingsModule {}
