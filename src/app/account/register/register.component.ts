import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  isPreventClose: boolean = false;
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
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
        Validators.minLength(6),
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
}
