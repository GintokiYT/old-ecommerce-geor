import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  //minimo 8 caracteres sean letras, numeros o caracteres especiales
  passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/;

  constructor(private router: Router) { }
  items = [];


  ngOnInit() {
    this.generateItems();
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
      case "name": this.showTextHelperName = true; break;
      case "phone": this.showTextHelperPhone = true; break;
      case "email": this.showTextHelperEmail = true; break;
      case "password": this.showTextHelperPassword = true; break;
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
  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }
  onIonInfinite(ev) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
}
