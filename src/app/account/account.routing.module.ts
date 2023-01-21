import { ChangeAddressComponent } from './welcome/change-address/change-address.component';
import { WheAreYouComponent } from './welcome/whe-are-you/whe-are-you.component';
import { SelectCountryComponent } from './welcome/select-country/select-country.component';
import { RouteCollection } from '../../shared/route-collection';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyLocationComponent } from './welcome/my-location/my-location.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: RouteCollection.account.welcome.selectCountry,
        component: SelectCountryComponent,
      },
      {
        path: RouteCollection.account.welcome.wheAreYou,
        component: WheAreYouComponent,
      },
      {
        path: RouteCollection.account.welcome.myLocation,
        component: MyLocationComponent,
      },
      {
        path: RouteCollection.account.welcome.changeAddress,
        component: ChangeAddressComponent,
      },
      { path: 'login', component: LoginComponent },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: RouteCollection.account.welcome.selectCountry,
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
