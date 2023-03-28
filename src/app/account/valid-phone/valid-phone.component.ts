import { IonInput, IonModal } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { RouteCollection } from 'src/shared/route-collection';
import { ViewComponent } from '@geor360/ecore';
import { Injector } from '@angular/core';
import { CountrySelectedService } from '../services/country-selected.service';

@Component({
  selector: 'app-valid-phone',
  templateUrl: 'valid-phone.component.html',
  styleUrls: ['./valid-phone.component.scss']
})
export class ValidPhoneComponent extends ViewComponent implements OnInit, OnDestroy, AfterViewInit {
  movil: string | null = '';
  counter: number = 59;
  counterTime: string = '01:00';
  timer: any;
  isCounterInZero: boolean = false;
  form!: FormGroup;
  codePhone: string = "";
  @ViewChild('inputCode') inputCode!: IonInput;
  isPreventClose: boolean = false;
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private route: ActivatedRoute, 
              private router: Router, _injector:Injector,
              private csService: CountrySelectedService) {
    super(_injector);
    this.csService.currentCodePhone$.subscribe( (code) => {
      this.codePhone = code;
    } )          
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  async onContinue() {
    this.isPreventClose = true;
    await this.modal.dismiss();

    const params: NavigationExtras = {
      queryParams: {
        email: this.route.snapshot.queryParamMap.get('email'),
      },
    };
    this.router.navigate([RouteCollection.auth.validEmail], params);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputCode.setFocus();
    }, 800);
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

  onGoTo(path: string){
    this.navigation.back(path)
  }

  ngOnInit() {
    this.movil = this.route.snapshot.queryParamMap.get('movil');

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
