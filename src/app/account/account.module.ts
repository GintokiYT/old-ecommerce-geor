import { ChangeAddressComponent } from './welcome/change-address/change-address.component';
import { MyLocationComponent } from './welcome/my-location/my-location.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account.routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoreModule } from '@geor360/ecore';
import { LoginComponent } from './login/login.component';
import { SelectCountryComponent } from './welcome/select-country/select-country.component';
import { WheAreYouComponent } from './welcome/whe-are-you/whe-are-you.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoreModule,
    AccountRoutingModule,
  ],
  declarations: [
    WelcomeComponent,
    LoginComponent,
    SelectCountryComponent,
    WheAreYouComponent,
    MyLocationComponent,
    ChangeAddressComponent,
  ],
})
export class AccountModule {}
