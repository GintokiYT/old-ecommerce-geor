import { Component, OnInit, ViewChild, Injector, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IonModal, IonInput, IonContent } from '@ionic/angular';
import { RouteCollection } from 'src/shared/route-collection';
import { ViewComponent } from '@geor360/ecore';
import { CountrySelectedService } from 'src/app/account/services/country-selected.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss'],
})
export class BuyComponent extends ViewComponent implements OnInit {
  flag: string;
  codePhone: string;

  form!: FormGroup;
  isPreventClose: boolean = false;
  modalIsVisible : boolean = false;
  @ViewChild(IonModal) modalValidate!: IonModal;
  @ViewChild("inputPhone") inputPhone: IonInput;

  @ViewChild(IonContent) content: IonContent;

  countryBorderColorState : string = "default";
  showFakeEye : boolean = false;
  showTrueEye: boolean = true;

  showTextHelperName = false;
  showTextHelpersurNames= false;
  showTextHelperPost= false;
  showTextHelperPhone = false;
  showTextHelperEmail = false;


  focusEmail = false;

  focusInputPhone : boolean = false;



  constructor(private router: Router, private _injector: Injector,
              private cpService: CountrySelectedService) {
    super(_injector)
    this.cpService.currentFlag$.subscribe( (flag) => {
      this.flag = flag;
    })

    this.cpService.currentCodePhone$.subscribe( (code) => {
      this.codePhone = code;
    })
  }

  ngOnInit() {

    this.form = new FormGroup({

      name: new FormControl('', [
        Validators.required,
      ]),
      surnames: new FormControl('', [
        Validators.required,
      ]),
      post: new FormControl('', [
        Validators.required,
      ]),
      movil: new FormControl('', [
        Validators.required,
        Validators.minLength(11),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(190),
      ]),

    });
  }

  ngAfterViewInit(): void {
  }

  async openModalValidate(value){
    this.modalIsVisible = false;
    if(value==="validate"){
      await this.modalValidate.present();
    }
  }

  async onSubmit() {
    setTimeout(() => {
      this.modalIsVisible = true;
    }, 300);
  }


  async onValidPhone(type: string) {
    this.isPreventClose = true;
    await this.modalValidate.dismiss(null, 'confirm');

    const params: NavigationExtras = {
      queryParams: {
        email: this.form.get('email')?.value,
        movil: this.form.get('movil')?.value,
      },
    };

    this.router.navigate([RouteCollection.auth.validPhone], params);
  }

  onGoToCountrySelect(){
    this.navigation.forward("/register/country-select")
  }





  checkFocus(input: string) {
    switch (input) {
      case "name": this.showTextHelperName = true;
                    this.focusEmail = false;

                   break;
      case'surnames':this.showTextHelpersurNames=true;
                      this.showTextHelperName=false;
                      this.focusEmail = false;
                      break
      case'post':this.showTextHelperPost=true;
                      this.showTextHelperName=false;
                      this.showTextHelpersurNames=false;
                      this.focusEmail = false;
                      break
      case "phone":
                    this.focusInputPhone = true;
                    if(this.inputPhone?.value.toString().length>0){
                      if(this.inputPhone?.value.toString().length===11){
                        this.countryBorderColorState = "correct";
                      }else{
                        this.countryBorderColorState = "error"
                      }
                    }else{
                      this.countryBorderColorState = "correct";
                    }

                    break;

      case "email": this.showTextHelperEmail = true;
                    this.focusEmail = true;

                    break;

    }
  }


  checkBlur(input: string, phone: boolean) {

    switch (input) {
      case "name": this.showTextHelperName = false; break;
      case "surnames": this.showTextHelpersurNames = false; break;
      case "post": this.showTextHelperPost = false; break;
      case "phone": this.showTextHelperPhone = false
                    if(this.inputPhone.value.toString().length===0
                       || this.inputPhone.value.toString().length===11){
                      this.countryBorderColorState = "default";
                    }
                    this.focusInputPhone = false;
                    ; break;
      case "email": this.showTextHelperEmail = false; break;

    }

  }

  changeValueInputPhone(){
    if(this.inputPhone?.value.toString().length>0){
      if(this.inputPhone?.value.toString().length===11){
        this.countryBorderColorState = "correct";
      }else{
        this.countryBorderColorState = "error"
      }
    }else{
      this.countryBorderColorState = "correct";
    }
  }


}
