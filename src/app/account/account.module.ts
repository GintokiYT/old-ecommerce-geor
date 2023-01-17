import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account.routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoreModule } from '@geor360/ecore';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    AccountRoutingModule
  ],
  declarations: [
    WelcomeComponent,
    LoginComponent
  ]
})
export class AccountModule {}
