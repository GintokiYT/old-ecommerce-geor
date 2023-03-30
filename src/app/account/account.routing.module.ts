import { RestorePasswordComponent } from './restore-password/restore-password.component';
import { RecoverPasswordCodeComponent } from './recover-password-code/recover-password-code.component';
import { ValidMailComponent } from './valid-mail/valid-mail.component';
import { ValidPhoneComponent } from './valid-phone/valid-phone.component';
import { RegisterComponent } from './register/register.component';
import { ChangeAddressComponent } from './welcome/change-address/change-address.component';
import { WheAreYouComponent } from './welcome/whe-are-you/whe-are-you.component';
import { SelectCountryComponent } from './welcome/select-country/select-country.component';
import { RouteCollection } from '../../shared/route-collection';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyLocationComponent } from './welcome/my-location/my-location.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LoadingAppComponent } from './welcome/loading-app/loading-app.component';
import { CountrySelectComponent } from './register/country-select/country-select.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'loading',
        component: LoadingAppComponent
      },
      {
        path: 'account/welcome/select-country',
        // path: RouteCollection.account.welcome.selectCountry,
        component: SelectCountryComponent,
      },
      {
        path: RouteCollection.account.welcome.wheAreYou,
        component: WheAreYouComponent,
      },
      {
        path: 'account/welcome/my-location',
        /* path: RouteCollection.account.welcome.myLocation, */
        component: MyLocationComponent,
      },
       //Send
      {
        path: 'send/account/welcome/my-location',
        component: MyLocationComponent,
      },
      //
      //Direction
      {
        path: 'direction/account/welcome/my-location',
        component: MyLocationComponent,
      },
       //

      {
        path: "customer/manage-addresses/my-location",
        component: MyLocationComponent
      },
      {
        path: "customer/manage-addresses/addresses-delete/my-location",
        component: MyLocationComponent
      },

      {
        path: RouteCollection.account.welcome.changeAddress,
        component: ChangeAddressComponent,
      },
      {
         path:'send/account/welcome/change-address',
         component: ChangeAddressComponent,
       },
      {
        path: RouteCollection.auth.login,
        component: LoginComponent
      },
      {
        path: RouteCollection.auth.register,
        component: RegisterComponent
      },
      {
        path: RouteCollection.auth.validPhone,
        component: ValidPhoneComponent
      },
      {
        path: RouteCollection.auth.validEmail,
        component: ValidMailComponent
      },
      {
        path: RouteCollection.auth.recoverPassword,
        component: RecoverPasswordComponent,
      },
      {
        path: RouteCollection.auth.recoverPasswordEmail,
        component: RecoverPasswordCodeComponent,
      },
      {
        path: RouteCollection.auth.restorePassword,
        component: RestorePasswordComponent,
      },
      {
        path: "register/country-select",
        component: CountrySelectComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'loading',
      },
      { path: '**', redirectTo: 'welcome' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
