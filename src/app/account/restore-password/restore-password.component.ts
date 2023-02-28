import { AppNavigationService, ViewComponent } from '@geor360/ecore';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';


@Component({
  selector: 'app-restore-password',
  templateUrl: 'restore-password.component.html',
  styleUrls: ['restore-password.component.scss']
})
export class RestorePasswordComponent extends ViewComponent implements OnInit {

  @ViewChild("inputPassword") inputPassword : IonInput;
  @ViewChild("inputPasswordConfirm") inputPasswordConfirm : IonInput;
  equalPassword : boolean = false;
  inputConfirmHaveValue: boolean = false;

  form!: FormGroup;
  showTextHelperPassword = false;
  showTextHelperPasswordConfirmation = false;

  inputPasswordType = "password";
  inputPasswordTypeConfirm = "password";

  //minimo 8 caracteres sean letras, numeros o caracteres especiales
  passwordPattern =  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040\.\;\,\_\[\]\{\}\/\\])(?=.*[A-Z])(?=.*[a-z])\S{7,}$/;


  constructor(
    private navigator: AppNavigationService,
    private _injector: Injector,
  ) {
    super(_injector);

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
    if(this.inputPassword?.value === this.inputPasswordConfirm?.value){
      if(this.inputPasswordConfirm?.value.toString().length>0){
        console.log("hola1")
        this.equalPassword = true;
      }
    }else{
      this.equalPassword = false
    }
  }

  changeInputPasswordConfirmValue(){
    if(this.inputPassword?.value === this.inputPasswordConfirm?.value){
      if(this.inputPasswordConfirm?.value.toString().length>0){
        console.log("hola2")
        this.equalPassword = true;
      }
    }else{
      this.equalPassword = false
    }

    if(this.inputPasswordConfirm?.value.toString().length>0){
      this.inputConfirmHaveValue = true;
    }else{
      this.inputConfirmHaveValue = false;
    }
  }

  onGoToLogin() {
    this.navigation.back("/login");
    this.inputPassword.value = "";
    this.inputPasswordConfirm.value = ""
  }

  onSubmit() {
    this.navigator.forward("/login");
    this.inputPassword.value = "";
    this.inputPasswordConfirm.value = ""
  }

  onChangeType(input:string){
    if(input==="default"){
      if(this.inputPassword.type === "password"){
        this.inputPasswordType = "text";
        this.inputPassword.type = "text";
      }else{
        this.inputPasswordType = "password";
        this.inputPassword.type = "password";
      }
    }else{
      if(this.inputPasswordConfirm.type === "password"){
        this.inputPasswordTypeConfirm = "text";
        this.inputPasswordConfirm.type = "text";
      }else{
        this.inputPasswordTypeConfirm = "password";
        this.inputPasswordConfirm.type = "password";
      }
    }
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
