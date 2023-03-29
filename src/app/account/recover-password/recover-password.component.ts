import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-recover-password',
  templateUrl: 'recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent extends ViewComponent implements OnInit {

  form!: FormGroup;
  showTextHelperEmail = false;

  constructor(private _injector: Injector) {
    super(_injector);
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ]),
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    const params = {
      email: this.form.get('email')?.value
    }
    this.navigation.root("recover-password-code", "forward", params)
  }

  checkFocus() {
    this.showTextHelperEmail = true;
  }

  checkBlur() {
    this.showTextHelperEmail = false;
  }
}
