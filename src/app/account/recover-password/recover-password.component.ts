import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouteCollection } from 'src/shared/route-collection';

@Component({
  selector: 'app-recover-password',
  templateUrl: 'recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  form!: FormGroup;
  urlBack: string = RouteCollection.auth.login;

  constructor(private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(190),
      ]),
    });
  }

  onSubmit() {
    const params: NavigationExtras = {
      queryParams: {
        email: this.form.get('email')?.value,
      },
    };
    this.router.navigate([RouteCollection.auth.recoverPasswordEmail], params);
  }
}
