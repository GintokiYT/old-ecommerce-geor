import { Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IonModal, IonContent } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {

  //@ViewChild(IonContent) content: IonContent;
  form!: FormGroup;
  isPreventClose: boolean = false;
  @ViewChild(IonModal) modal!: IonModal;
  @ViewChild("inputPhone") inputPhone;
  @ViewChild("contentInputPhone") contentInputPhone;
  inputPhoneValue: string;

  showTextHelperName = false;
  showTextHelperPhone = false;
  showTextHelperEmail = false;
  showTextHelperPassword = false;

  focusEmail = false;
  focusPassword = false;

  //minimo 8 caracteres sean letras, numeros o caracteres especiales
  passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/;

  constructor(private router: Router) {

    //Este evento se llama antes de que se muestre el teclado.
    Keyboard.addListener('keyboardWillShow', info => {
      console.log('keyboard will show with height:', info.keyboardHeight);
    });

    //Este evento se activa cuando el teclado está completamente abierto. 
    Keyboard.addListener('keyboardDidShow', info => {
      console.log('keyboard did show with height:', info.keyboardHeight);
      // if(!this.focusEmail && !this.focusPassword){
      //   //any
      // }
      // if(this.focusEmail===true){
      //   this.content.scrollByPoint(0,50,500)
      // }
      // if(this.focusPassword===true){
      //   this.content.scrollByPoint(0,150,500)
      // }
    });


    //Este evento se evoca antes de que se cierre el teclado.
    Keyboard.addListener('keyboardWillHide', () => {
      console.log('keyboard will hide');
    });
    
    //Este evento se dispara cuando el teclado está completamente cerrado.
    Keyboard.addListener('keyboardDidHide', () => {
    });
  }

  ngOnInit() {
    
    this.form = new FormGroup({

      name: new FormControl('', [
        Validators.required,
      ]),
      movil: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(190),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(this.passwordPattern),
      ]),
    });
  }

  async onSubmit() {
    this.modal.present();
  }

  async onValidPhone(type: string) {
    this.isPreventClose = true;
    await this.modal.dismiss(null, 'confirm');

    const params: NavigationExtras = {
      queryParams: {
        email: this.form.get('email')?.value,
        movil: this.form.get('movil')?.value,
      },
    };

    this.router.navigate([RouteCollection.auth.validPhone], params);
  }


  checkFocus(input: string) {
    switch (input) {
      case "name": this.showTextHelperName = true; 
                    this.focusEmail = false;
                    this.focusPassword = false;
                    //this.content.scrollToTop();
                   break;
      case "phone": this.showTextHelperPhone = true; 
                    this.focusEmail = false;
                    this.focusPassword = false;
                    break;

      case "email": this.showTextHelperEmail = true;
                    this.focusEmail = true;
                    this.focusPassword = false;
                    //this.content.scrollByPoint(0,50,500)
                    break;
      case "password": this.showTextHelperPassword = true; 
                    this.focusEmail = false;
                    this.focusPassword = true;
                    //this.content.scrollByPoint(0,150,500)
                    break;
    }
  }


  checkBlur(input: string, phone: boolean) {

    switch (input) {
      case "name": this.showTextHelperName = false; break;
      case "phone": this.showTextHelperPhone = false; break;
      case "email": this.showTextHelperEmail = false; break;
      case "password": this.showTextHelperPassword = false; break;
    }

    if(phone){
      if (this.inputPhoneValue) {
        const inputValue = this.inputPhoneValue?.trim();
        if (inputValue.length > 0) {
          this.contentInputPhone.nativeElement.classList.add("have-elements")
        } else {
          this.contentInputPhone.nativeElement.classList.remove("have-elements")
        }
      } else {
        this.contentInputPhone.nativeElement.classList.remove("have-elements")
      }
    }
    
  }

}
