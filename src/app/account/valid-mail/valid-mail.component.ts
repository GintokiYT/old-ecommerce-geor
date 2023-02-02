import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInput, IonModal } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';

@Component({
  selector: 'app-valid-mail',
  templateUrl: 'valid-mail.component.html',
  styleUrls: ['./valid-mail.component.scss']
})
export class ValidMailComponent implements OnInit {
  email: string | null = '';
  counter: number = 60;
  counterTime: string = '';
  timer: any;
  isCounterInZero: boolean = false;
  form!: FormGroup;
  @ViewChild('inputCode') inputCode!: IonInput;
  isPreventClose: boolean = false;
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  async onContinue() {
    this.isPreventClose = true;
    await this.modal.dismiss();

    // const params: NavigationExtras = {
    //   queryParams: {
    //     email: this.route.snapshot.queryParamMap.get('email'),
    //   },
    // };
    // this.router.navigate([RouteCollection.shop.home]);
    this.router.navigate(["/customer/home"]);

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
        this.modal.present();
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
    this.email = this.route.snapshot.queryParamMap.get('email');

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
