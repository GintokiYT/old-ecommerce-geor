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

  //Open Documente Type
  popupDocument: boolean = false;

  //end

  flag: string;
  codePhone: string;

  form!: FormGroup;
  isPreventClose: boolean = false;
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
  showTextHelperDocument = false;

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
      document: new FormControl('', [
        Validators.required,
        Validators.minLength(2)]),

      numberDocument: new FormControl('', [
        Validators.required]),

    });
  }



  ngAfterViewInit(): void {
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
                      break;
      case'document':this.showTextHelperDocument=true;
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
      case "document": this.showTextHelperDocument = false; break;

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
 /* console.log("aqui")
    setTimeout(() => { */

    /*   }, 100); */

  openDocument(){
    this.popupDocument = true;
  }

   changeStatusPopupDocument(status: boolean) {
    this.popupDocument = status;
  }

  changeDocumentForm(value: string) {
    this.form.get('document').setValue(value);
  }

  goBack(){
    this.navigation.back('/customer/contact')
  }


}
