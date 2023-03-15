import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Injector } from '@angular/core';
import { RouteCollection } from 'src/shared/route-collection';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-recover-password',
  templateUrl: 'recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent extends ViewComponent implements OnInit {

  form!: FormGroup;
  urlBack: string = RouteCollection.auth.login;
  showTextHelperEmail = false;

  constructor(private router: Router, private _injector: Injector) {
    super(_injector);
  }

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
    // const params: NavigationExtras = {
    //   queryParams: {
    //     email: this.form.get('email')?.value,
    //   },
    // };
    //this.router.navigate([RouteCollection.auth.recoverPasswordEmail], params);


    const params = {
      email: this.form.get('email')?.value
    }

    this.navigation.root("recover-password-code","forward",params)
    
  }


  checkFocus(){
    this.showTextHelperEmail = true;
  }

  checkBlur(){
    this.showTextHelperEmail = false;
  }
}
