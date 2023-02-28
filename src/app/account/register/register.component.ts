import { Component, OnInit, ViewChild, Injector, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IonModal, IonInput, IonContent } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';
import { ViewComponent } from '@geor360/ecore';
import { CountrySelectedService } from '../services/country-selected.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent extends ViewComponent implements OnInit {

  flag: string;
  codePhone: string;

  form!: FormGroup;
  isPreventClose: boolean = false;
  modalIsVisible : boolean = false;
  @ViewChild(IonModal) modalValidate!: IonModal;
  @ViewChild("inputPhone") inputPhone: IonInput;
  @ViewChild("inputPassword") inputPassword: IonInput;
  @ViewChild(IonContent) content: IonContent;
  inputPasswordType : string = "password";
  countryBorderColorState : string = "default"

  showTextHelperName = false;
  showTextHelperPhone = false;
  showTextHelperEmail = false;
  showTextHelperPassword = false;

  focusEmail = false;
  focusPassword = false;
  focusInputPhone : boolean = false;

  //minimo 8 caracteres sean letras, numeros o caracteres especiales
  passwordPattern =  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040\.\;\,\_\[\]\{\}\/\\])(?=.*[A-Z])(?=.*[a-z])\S{7,}$/;

  constructor(private router: Router, private _injector: Injector,
              private cpService: CountrySelectedService) {
    super(_injector)
    this.cpService.currentFlag$.subscribe( (flag) => {
      this.flag = flag;
    })

    this.cpService.currentCodePhone$.subscribe( (code) => {
      this.codePhone = code;
    }) 
  } 

  ngOnInit() {

    this.form = new FormGroup({

      name: new FormControl('', [
        Validators.required,
      ]),
      movil: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
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

  ngAfterViewInit(): void {
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
                   break;
      case "phone": 
                    this.focusInputPhone = true;
                    if(this.inputPhone?.value.toString().length>0){
                      if(this.inputPhone?.value.toString().length===11){
                        this.countryBorderColorState = "correct";
                      }else{
                        this.countryBorderColorState = "error"
                      }
                    }else{
                      this.countryBorderColorState = "correct";
                    }

                    break;

      case "email": this.showTextHelperEmail = true;
                    this.focusEmail = true;
                    this.focusPassword = false;
                    break;
      case "password": this.showTextHelperPassword = true;
                    this.focusEmail = false;
                    this.focusPassword = true;
                    this.content.scrollToBottom();
                    break;
    }
  }


  checkBlur(input: string, phone: boolean) {

    switch (input) {
      case "name": this.showTextHelperName = false; break;
      case "phone": this.showTextHelperPhone = false
                    if(this.inputPhone.value.toString().length===0
                       || this.inputPhone.value.toString().length===11){
                      this.countryBorderColorState = "default";
                    }
                    this.focusInputPhone = false;
                    ; break;
      case "email": this.showTextHelperEmail = false; break;
      case "password": this.showTextHelperPassword = false; break;
    }

  }

  changeValueInputPhone(){
    if(this.inputPhone?.value.toString().length>0){
      if(this.inputPhone?.value.toString().length===11){
        this.countryBorderColorState = "correct";
      }else{
        this.countryBorderColorState = "error"
      }
    }else{
      this.countryBorderColorState = "correct";
    }
  }

}
