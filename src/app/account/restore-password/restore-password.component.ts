import { RouteCollection } from 'src/shared/route-collection';
import { AppNavigationService } from '@geor360/ecore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restore-password',
  templateUrl: 'restore-password.component.html',
})
export class RestorePasswordComponent implements OnInit {
  form!: FormGroup;
  constructor(private navigator: AppNavigationService) {}

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
      ]),
      password_confirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
      ]),
    });
  }

  onSubmit() {
    this.navigator.forward(RouteCollection.shop.home);
  }
}
