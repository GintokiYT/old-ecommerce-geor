import { AppNavigationService, ViewComponent } from '@geor360/ecore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-restore-password',
  templateUrl: 'restore-password.component.html',
  styleUrls: ['restore-password.component.scss']
})
export class RestorePasswordComponent extends ViewComponent implements OnInit {
  form!: FormGroup;
  constructor(private navigator: AppNavigationService,
    private _injector: Injector) {
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
    this.navigator.forward("/customer/home");
  }
}
