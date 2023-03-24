import { AppNavigationService } from '@geor360/ecore';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  heightStart : string = window.innerHeight.toString();
  showFakeEye : boolean = false;
  showTrueEye: boolean = true;


  showTextHelperPhoneOrEmail = false;
  showTextHelperPassword = false;
  visibleFooterNavigation = true;

  //minimo 8 caracteres sean letras, numeros o caracteres especiales
  passwordPattern =  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040\.\;\,\_\[\]\{\}\/\\])(?=.*[A-Z])(?=.*[a-z])\S{7,}$/;



  constructor(private navigator: AppNavigationService,
              private lgService: LoginService,
              private ngZone: NgZone) {
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
    // window.onresize = () => {
    //   if(window.innerHeight.toString()<this.heightStart){
    //     this.showTrueEye = false;
    //     this.showFakeEye = true;
    //   }
    //   if(window.innerHeight.toString()===this.heightStart){
    //     this.showTrueEye = true;
    //     this.showFakeEye = false;
    //   }
    // }
    // Keyboard.addListener('keyboardWillHide', () => {
    //   this.visibleFooterNavigation = false;
    // });

    // Keyboard.addListener('keyboardDidHide', () => {
    //   this.visibleFooterNavigation = false;
    // });

    // Keyboard.addListener('keyboardWillShow',() => {
    //   this.visibleFooterNavigation = true;
    // })

    // Keyboard.addListener('keyboardDidShow',() => {
    //   this.visibleFooterNavigation = true;
    // })
  }

  ionViewDidEnter(){
    Keyboard.addListener('keyboardWillHide', () => {
      this.ngZone.run( () => {
        this.visibleFooterNavigation = true;
      })    
    });

    // Keyboard.addListener('keyboardDidHide', () => {
    //   this.ngZone.run( () => {
    //     this.visibleFooterNavigation = true;
    //   })
    // });

    Keyboard.addListener('keyboardWillShow', () => {
      this.ngZone.run( () => {
        this.visibleFooterNavigation = false;
      })    
    });

    // Keyboard.addListener('keyboardDidShow', () => {
    //   this.ngZone.run( () => {
    //     this.visibleFooterNavigation = false;
    //   })
    // });

  }

  onGoToRegister() {
    //this.navigator.forward(RouteCollection.auth.register);
    //this.visibleFooterNavigation = false;
    console.log("Hola para ir a register")
    setTimeout(() => {
      this.navigator.root("/register","forward")  
    }, 250);
  }

  onToForgotPassword() {

    //this.navigator.forward(RouteCollection.auth.recoverPassword);
    //this.visibleFooterNavigation = false;

  
    console.log("Hola para ir a olvidaste")
    setTimeout(() => {
      this.navigator.root("/recover-password","forward")
    }, 250);
    
  }

  onSubmit() {
    //this.visibleFooterNavigation = false;
    this.lgService.setUserLogged(true);
    setTimeout(() => {
      this.navigator.root("/customer/manage-user-information","forward");
    }, 250);
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
  }

  checkFocus(input : string){

    //this.visibleFooterNavigation = false;

    switch(input){
      case "phoneOrEmail" :
        this.showTextHelperPhoneOrEmail = true;
        this.content.scrollToTop();
        break;
      case "password":
        this.showTextHelperPassword = true;
        this.showTrueEye = false;
        this.showFakeEye = true;
        this.content.scrollByPoint(0,50,500)
        break;
    }
  }

  checkBlur(input:string){
    
    //this.visibleFooterNavigation = true;  

    switch(input){
      case "phoneOrEmail" :
        this.showTextHelperPhoneOrEmail = false; break;
      case "password":
        console.log("Blur password")
        this.showTrueEye = true;
        this.showFakeEye = false;
        this.showTextHelperPassword = false; break;
    }
  }


}
