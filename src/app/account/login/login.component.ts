import { AppNavigationService } from '@geor360/ecore';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteCollection } from 'src/shared/route-collection';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private navigator: AppNavigationService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onToRegister() {
    this.navigator.forward(RouteCollection.auth.register);
  }

  onToForgotPassword() {
    this.navigator.forward(RouteCollection.auth.recoverPassword);
  }

  onSubmit() {
    this.navigator.forward(RouteCollection.shop.home);
  }
}
