import { AppNavigationService } from '@geor360/ecore';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteCollection } from 'src/shared/route-collection';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  showTextHelperPhoneOrEmail = false;
  showTextHelperPassword = false;

  //minimo 8 caracteres sean letras, numeros o caracteres especiales
  passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/;
  
  

  constructor(private navigator: AppNavigationService,
              private lgService: LoginService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordPattern)
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
    this.lgService.setUserLogged(true);
    this.navigator.forward("/customer/manage-user-information");
  }

  checkFocus(input : string){
    switch(input){
      case "phoneOrEmail" : 
        this.showTextHelperPhoneOrEmail = true; break;
      case "password":
        this.showTextHelperPassword = true; break;
    }
  }

  checkBlur(input:string){
    switch(input){
      case "phoneOrEmail" : 
        this.showTextHelperPhoneOrEmail = false; break;
      case "password":
        this.showTextHelperPassword = false; break;
    }
  }


  

  
}
