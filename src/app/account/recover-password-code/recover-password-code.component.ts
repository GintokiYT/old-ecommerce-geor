import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonInput } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';
import { ViewComponent } from '@geor360/ecore';
import { Keyboard } from '@geor360/capacitor-keyboard';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-recover-password-code',
  templateUrl: 'recover-password-code.component.html',
  styleUrls: ['recover-password-code.component.scss']
})
export class RecoverPasswordCodeComponent extends ViewComponent implements OnInit {
  email: string | null = '';
  counter: number = 59;
  counterTime: string = '01:00';
  timer: any;
  isCounterInZero: boolean = false;
  form!: FormGroup;
  @ViewChild('inputCode') inputCode!: IonInput;

  constructor(private route: ActivatedRoute, private router: Router
              ,_injector: Injector,  public platform: Platform ) {
    super(_injector)
    this.router.events.subscribe(() => {
      this.email = this.route.snapshot.queryParamMap.get('email');
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  onChangeEmail(): void {
    this.navigation.back("/recover-password")
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.inputCode.setFocus();
    }, 800);
  }

  async onChangeCode() {
    const code = this.form.get('code')?.value;
    if (code) {
      if (new String(code).length === 6) {
        this.inputCode.readonly = true;
        // const params: NavigationExtras = {
        //   queryParams: {
        //     email: this.route.snapshot.queryParamMap.get('email'),
        //   },
        // };
        const params = {
          email: this.route.snapshot.queryParamMap.get('email'),
        }
        
        this.platform.ready().then( () => {
          if(this.platform.is("ios")){
            setTimeout(() => {
              // this.router.navigate([RouteCollection.auth.
              //   restorePassword], params);
              this.navigation.root("/restore-password","forward",params)  
            }, 250);
            Keyboard.hide();
          }
          else{
            // this.router.navigate([RouteCollection.auth.
            //   restorePassword], params);
            this.navigation.root("/restore-password","forward",params)  
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
