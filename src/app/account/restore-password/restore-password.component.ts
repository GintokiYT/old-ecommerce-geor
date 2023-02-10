import { AppNavigationService, ViewComponent } from '@geor360/ecore';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';
import { LoginService } from '../services/login.service';
import { RestoreService } from './restore.service';
import { PasswordValidator } from './passwordValidator';


@Component({
  selector: 'app-restore-password',
  templateUrl: 'restore-password.component.html',
  styleUrls: ['restore-password.component.scss']
})
export class RestorePasswordComponent extends ViewComponent implements OnInit {

  form!: FormGroup;
  showTextHelperPassword = false;
  showTextHelperPasswordConfirmation = false;

  inputPasswordValue = ""
  inputPasswordConfirmValue = "";

  //minimo 8 caracteres sean letras, numeros o caracteres especiales
  passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/;


  constructor(
    private navigator: AppNavigationService,
    private _injector: Injector,
    private lgService: LoginService,
    private restoreService : RestoreService
  ) {
    super(_injector);
    this.restoreService.currentInputPasswordValue$.subscribe( value => this.inputPasswordValue=value)
    this.restoreService.currentInputPasswordConfirmValue$.subscribe ( value => this.inputPasswordConfirmValue = value)
  }

  ngOnInit() {

    this.form = new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.pattern(this.passwordPattern)
        ]),
        password_confirmation: new FormControl('', [
          Validators.required,
          // Validators.minLength(6),
          // Validators.maxLength(50),
        ],PasswordValidator.createValidatorConfirm(this.restoreService)),
      }


    );
  }

  changeInputValue(){
    this.restoreService.setInputPasswordValue(this.inputPasswordValue);
    const auxInput = this.inputPasswordConfirmValue;
    setTimeout(() => {
      this.inputPasswordConfirmValue = "";
    }, 0);
    setTimeout(() => {
      this.inputPasswordConfirmValue = auxInput;
    }, 0);
  }

  changeInputPasswordConfirmValue(){
    this.restoreService.setInputPasswordConfirmValue(this.inputPasswordConfirmValue);
  }

  onGoToLogin() {
    this.navigation.back("/login")
  }

  onSubmit() {
    this.lgService.setUserLogged(true);
    this.navigator.forward("/login");
  }

  checkFocus(input: string) {

    switch (input) {
      case "password": this.showTextHelperPassword = true; break;
      case "passwordConfirmation": this.showTextHelperPasswordConfirmation = true; break;
    }
  }

  checkBlur(input: string) {
    switch (input) {
      case "password": this.showTextHelperPassword = false; break;
      case "passwordConfirmation": this.showTextHelperPasswordConfirmation = false; break;
    }
  }
}
