import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';

@Component({
  selector: 'app-recover-password-code',
  templateUrl: 'recover-password-code.component.html',
  styleUrls: ['recover-password-code.component.scss']
})
export class RecoverPasswordCodeComponent implements OnInit {
  email: string | null = '';
  counter: number = 60;
  counterTime: string = '';
  timer: any;
  isCounterInZero: boolean = false;
  form!: FormGroup;
  @ViewChild('inputCode') inputCode!: IonInput;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(() => {
      this.email = this.route.snapshot.queryParamMap.get('email');
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  onChangeEmail(): void {
    this.router.navigate([RouteCollection.auth.recoverPassword]);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputCode.setFocus();
    }, 500);
  }

  onChangeCode() {
    const code = this.form.get('code')?.value;
    if (code) {
      if (new String(code).length === 6) {
        this.inputCode.readonly = true;
        const params: NavigationExtras = {
          queryParams: {
            email: this.route.snapshot.queryParamMap.get('email'),
          },
        };
        this.router.navigate([RouteCollection.auth.restorePassword], params);
      }
    }
  }

  onResendCode(): void {
    if (this.isCounterInZero) {
      this.counter = 60;
      this.isCounterInZero = false;
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      code: new FormControl('', [Validators.required]),
    });

    this.timer = setInterval(() => {
      if (this.counter >= 0) {
        const minutes = Math.floor((this.counter % 3600) / 60)
          .toString()
          .padStart(2, '0');
        const seconds = Math.floor(this.counter % 60)
          .toString()
          .padStart(2, '0');

        this.counterTime = `${minutes}:${seconds}`;
        this.counter--;
      }
      if (this.counter === 0) {
        this.isCounterInZero = true;
      }
    }, 1000);
  }
}
