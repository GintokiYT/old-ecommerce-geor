import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonInput, IonModal } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';
import { ViewComponent } from '@geor360/ecore';
import { LoginService } from '../services/login.service';
import { Keyboard } from '@geor360/capacitor-keyboard';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-valid-mail',
  templateUrl: 'valid-mail.component.html',
  styleUrls: ['./valid-mail.component.scss']
})
export class ValidMailComponent extends ViewComponent implements OnInit {
  email: string | null = '';
  counter: number = 59;
  counterTime: string = '01:00';
  timer: any;
  isCounterInZero: boolean = false;
  form!: FormGroup;
  @ViewChild('inputCode') inputCode!: IonInput;
  isPreventClose: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private _injector: Injector, private lgService: LoginService, public platform: Platform ) {
                super(_injector)
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  // async onContinue() {
  //   this.isPreventClose = true;

  //   // const params: NavigationExtras = {
  //   //   queryParams: {
  //   //     email: this.route.snapshot.queryParamMap.get('email'),
  //   //   },
  //   // };
  //   // this.router.navigate([RouteCollection.shop.home]);
  //   this.router.navigate(["/customer/home"]);

  // }

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputCode.setFocus();
    }, 800);
  }

  async onChangeCode() {
    const code = this.form.get('code')?.value;
    if (code){
      if (new String(code).length === 6) {
        this.inputCode.readonly = true;
        this.lgService.setUserLogged(true);
        this.platform.ready().then( () => {
            if(this.platform.is("ios")){
              setTimeout(() => {
                this.navigation.root("customer/manage-user-information","forward");
              }, 300);
              Keyboard.hide();
            }
            else{
              this.navigation.root("customer/manage-user-information","forward");
            }
        })
        
        
      }
    }
  }

  onResendCode(): void {
    if (this.isCounterInZero) {
      this.counter = 60;
      this.isCounterInZero = false;
    }
  }

  onGoTo(path: string) : void{
    this.navigation.back(path)
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
