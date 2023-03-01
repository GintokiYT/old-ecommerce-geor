import { AppNavigationService } from '@geor360/ecore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteCollection } from 'src/shared/route-collection';
import { LoginService } from '../services/login.service';
import { IonContent, IonInput } from '@ionic/angular';
import { Keyboard } from '@geor360/capacitor-keyboard';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  @ViewChild("inputPassword") inputPassword: IonInput;
  loginForm!: FormGroup;
  inputPasswordType : string = "password";

  showTextHelperPhoneOrEmail = false;
  showTextHelperPassword = false;
  visibleFooterNavigation = true;

  //minimo 8 caracteres sean letras, numeros o caracteres especiales
  passwordPattern =  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040\.\;\,\_\[\]\{\}\/\\])(?=.*[A-Z])(?=.*[a-z])\S{7,}$/;



  constructor(private navigator: AppNavigationService,
              private lgService: LoginService) {
                this.visibleFooterNavigation = true;

  }

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

  ngAfterViewInit(){

  }

  onGoToRegister() {
    this.navigator.forward(RouteCollection.auth.register);
    this.navigator.root("/register","forward")
  }

  onToForgotPassword() {
    this.navigator.forward(RouteCollection.auth.recoverPassword);
  }

  onSubmit() {
    this.lgService.setUserLogged(true);
    this.navigator.forward("/customer/manage-user-information");
  }

  onChangeType(ev){
    ev.preventDefault();
    ev.stopPropagation();
    if(this.inputPassword.type === "password"){
      this.inputPasswordType = "text";
      this.inputPassword.type = "text";
    }else{
      this.inputPasswordType = "password";
      this.inputPassword.type = "password";
    }
    console.log("Hola2")
  }

  checkFocus(event,input : string){
    console.log("Hola mundo")
    switch(input){
      case "phoneOrEmail" :
        this.showTextHelperPhoneOrEmail = true;
        this.content.scrollToTop();
        break;
      case "password":
        this.showTextHelperPassword = true;
        this.content.scrollByPoint(0,50,500)
        break;
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
