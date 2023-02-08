import { AppNavigationService, ViewComponent } from '@geor360/ecore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: 'restore-password.component.html',
  styleUrls: ['restore-password.component.scss']
})
export class RestorePasswordComponent extends ViewComponent implements OnInit {
  form!: FormGroup;
  constructor(private navigator: AppNavigationService,
    private _injector: Injector, private lgService: LoginService) {
      super(_injector);
    }

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
      ]),
      password_confirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
      ]),
    });
  }

  onGoToLogin(){
    this.navigation.back("/login")
  }

  onSubmit() {
    this.lgService.setUserLogged(true);
    this.navigator.forward("/customer/home");
  }
}
