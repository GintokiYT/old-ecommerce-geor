import { Router } from '@angular/router';
import { RoutesCollection } from './../../../../conts/routes-collection';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  pathRecoverPassword: string = RoutesCollection.auth.recoverPassword;
  pathRegister: string = RoutesCollection.auth.register;

  constructor(private router: Router) {}

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

  onSubmit() {
    this.router.navigate([RoutesCollection.shop.home]);
  }
}
