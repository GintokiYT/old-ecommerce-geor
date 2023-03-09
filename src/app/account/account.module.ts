import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { RecoverPasswordCodeComponent } from './recover-password-code/recover-password-code.component';
import { ValidMailComponent } from './valid-mail/valid-mail.component';
import { ValidPhoneComponent } from './valid-phone/valid-phone.component';
import { RegisterComponent } from './register/register.component';
import { ShareModule } from './../shared/shared.module';
import { ChangeAddressComponent } from './welcome/change-address/change-address.component';
import { MyLocationComponent } from './welcome/my-location/my-location.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account.routing.module';
import { CoreModule } from '@geor360/ecore';
import { LoginComponent } from './login/login.component';
import { SelectCountryComponent } from './welcome/select-country/select-country.component';
import { WheAreYouComponent } from './welcome/whe-are-you/whe-are-you.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LoadingAppComponent } from './welcome/loading-app/loading-app.component';
import {IonicInputMaskModule} from "@thiagoprz/ionic-input-mask";
import { ModalTermsComponent } from './register/modal-terms/modal-terms.component';
import { CountrySelectComponent } from './register/country-select/country-select.component';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoreModule,
    AccountRoutingModule,
    ShareModule,
    IonicInputMaskModule
  ],
  declarations: [
    LoginComponent,
    SelectCountryComponent,
    WheAreYouComponent,
    MyLocationComponent,
    ChangeAddressComponent,
    RegisterComponent,
    ValidPhoneComponent,
    ValidMailComponent,
    RecoverPasswordComponent,
    RecoverPasswordCodeComponent,
    RestorePasswordComponent,
    LoadingAppComponent,
    ModalTermsComponent,
    CountrySelectComponent
  ],
  providers:[
    Diagnostic
  ]
})
export class AccountModule {}
