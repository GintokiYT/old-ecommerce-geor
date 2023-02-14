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
        ]),
      }
    );
  }

  changeInputValue(){
    this.restoreService.setInputPasswordValue(this.inputPasswordValue);
    //to comunicate the other input the change of the current input
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
    // this.inputPasswordValue = "";
    // this.inputPasswordConfirmValue = "";
    // this.restoreService.setInputPasswordValue(this.inputPasswordValue);
    // this.restoreService.setInputPasswordConfirmValue(this.inputPasswordConfirmValue);
    this.navigation.back("/login")
    this.inputPasswordValue = "";
    this.inputPasswordConfirmValue = "";
  }

  onSubmit() {
    // this.inputPasswordValue = "";
    // this.inputPasswordConfirmValue = "";
    // this.restoreService.setInputPasswordValue(this.inputPasswordValue);
    // this.restoreService.setInputPasswordConfirmValue(this.inputPasswordConfirmValue);
    // this.lgService.setUserLogged(true);
    this.navigator.forward("/login");
    this.inputPasswordValue = "";
    this.inputPasswordConfirmValue = "";
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
