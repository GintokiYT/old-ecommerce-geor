import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IonModal, IonInput } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent extends ViewComponent implements OnInit {

  form!: FormGroup;
  isPreventClose: boolean = false;
  modalIsVisible : boolean = false;
  @ViewChild(IonModal) modalValidate!: IonModal;
  @ViewChild("inputPhone") inputPhone: IonInput;
  @ViewChild("contentInputPhone") contentInputPhone;
  @ViewChild("inputPassword") inputPassword: IonInput;
  inputPhoneValue: string;
  inputPasswordType : string = "password";

  showTextHelperName = false;
  showTextHelperPhone = false;
  showTextHelperEmail = false;
  showTextHelperPassword = false;

  focusEmail = false;
  focusPassword = false;

  //minimo 8 caracteres sean letras, numeros o caracteres especiales
  //passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/;
  passwordPattern = ('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$._@$!%*?&])[A-Za-z\d$._@$!%*?&].{8,}')

  constructor(private router: Router, private _injector: Injector) {
    super(_injector)

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

  async openModalValidate(value){
    this.modalIsVisible = false;
    if(value==="validate"){
      await this.modalValidate.present();
    }
  }

  async onSubmit() {
    setTimeout(() => {
      this.modalIsVisible = true;
    }, 300);
  }


  async onValidPhone(type: string) {
    this.isPreventClose = true;
    await this.modalValidate.dismiss(null, 'confirm');

    const params: NavigationExtras = {
      queryParams: {
        email: this.form.get('email')?.value,
        movil: this.form.get('movil')?.value,
      },
    };

    this.router.navigate([RouteCollection.auth.validPhone], params);
  }

  onGoToCountrySelect(){
    this.navigation.forward("/register/country-select")
  }

  onChangeType(){
    if(this.inputPassword.type === "password"){
      this.inputPasswordType = "text";
      this.inputPassword.type = "text";
    }else{
      this.inputPasswordType = "password";
      this.inputPassword.type = "password";
    }
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
