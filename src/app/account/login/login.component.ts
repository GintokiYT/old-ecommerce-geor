import { AppNavigationService } from '@geor360/ecore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouteCollection } from 'src/shared/route-collection';
import { LoginService } from '../services/login.service';
import { IonContent } from '@ionic/angular';
import { Keyboard } from '@geor360/capacitor-keyboard';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  loginForm!: FormGroup;

  showTextHelperPhoneOrEmail = false;
  showTextHelperPassword = false;
  visibleFooterNavigation = true;

  //minimo 8 caracteres sean letras, numeros o caracteres especiales
  passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/;
  
  constructor(private navigator: AppNavigationService,
              private lgService: LoginService) {
        
  }

  ngOnInit() {

    //Este evento se llama antes de que se muestre el teclado.
    Keyboard.addListener('keyboardWillShow', info => {
      this.visibleFooterNavigation = false;
    });
        

    //Este evento se evoca antes de que se cierre el teclado.
    Keyboard.addListener('keyboardWillHide', () => {
      this.visibleFooterNavigation = true;
    });


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

  checkFocus(input : string){
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
