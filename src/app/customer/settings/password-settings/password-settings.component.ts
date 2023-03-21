import { Component, ElementRef, Injector, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-password-settings',
  templateUrl: './password-settings.component.html',
  styleUrls: ['./password-settings.component.scss', '../../../../theme/personalizado.scss'],
})
export class PasswordSettingsComponent extends ViewComponent implements OnInit {

  focoActivo = true;

  myData = {
    curretpassword: '',
    newpassword: '',
    confirmpassword: ''
  }

  statusButtons = {
    curretpassword: false,
    newpassword: false,
    confirmpassword: false
  }

  inputValidator = {
    curretpassword: false,
    newpassword: false,
    confirmpassword: false
  }

  statusButton: boolean = true;

  @ViewChildren('myInput') myInput: QueryList<ElementRef>;

  constructor(_injector: Injector) {
    super(_injector)
  }

  changeStatusButtom() {
    if(this.inputValidator.curretpassword === true &&
      this.inputValidator.newpassword === true &&
      this.inputValidator.confirmpassword === true) {
       this.statusButton = false;
   } else {
     this.statusButton = true;
   }
  }

  ngAfterViewInit() {

    // document.addEventListener('keydown', (event: KeyboardEvent) => {
		// 	if (event.key === 'Tab') {
		// 		// Evitamos que el comportamiento predeterminado se produzca
		// 		event.preventDefault();
		// 	}
		// });

    const inputs: HTMLInputElement[] = this.myInput.toArray().map((el: ElementRef) => el.nativeElement);

    //* Input curretpassword (contraseña actual)
    inputs[0].addEventListener('input', (event: Event) => {
      const target = event.target as HTMLInputElement;
      this.myData.curretpassword = target.value

      //* Evaluamos que almenos tenga texto la contraseña
      if(this.myData.curretpassword.length === 0) {
        this.inputValidator.curretpassword = false;
      } else {
        this.inputValidator.curretpassword = true;
      }

      this.changeStatusButtom();
    })

    //* Input newpassword (contraseña nueva)
    inputs[1].addEventListener('input', (event: Event) => {
      const target = event.target as HTMLInputElement;
      this.myData.newpassword = target.value;

      //* Evaluamos que cumpla con la expresion regular
      const passwordPattern = /^(?=.*\d)(?=.*[A-Z])(?=.*\W)(?=.*[a-z]).{8,}$/;

      if(passwordPattern.test(this.myData.newpassword)) {
        this.inputValidator.newpassword = true;
        console.log('Paso el test');
      } else {
        this.inputValidator.newpassword = false;
        console.log('No paso el test');
      }

      const formcontrolsettings = inputs[1].parentNode as HTMLDivElement;
      const spanError = formcontrolsettings.parentNode.querySelector('.form-control-alert') as HTMLSpanElement;
      console.log(spanError)

      if(this.inputValidator.newpassword) {
        formcontrolsettings.classList.remove('error');
        spanError.style.display = 'none';
      } else {
        formcontrolsettings.classList.add('error');
        spanError.style.display = 'block';
      }

      this.changeStatusButtom();
    })

    //* Input confirmpassword (confirmar contraseña)
    inputs[2].addEventListener('input', (event: Event) => {
      const target = event.target as HTMLInputElement;
      this.myData.confirmpassword = target.value;

      if(this.myData.newpassword === this.myData.confirmpassword) {
        this.inputValidator.confirmpassword = true;
      } else {
        this.inputValidator.confirmpassword = false;
      }

      const formcontrolsettings = inputs[2].parentNode as HTMLDivElement;
      const spanError = formcontrolsettings.parentNode.querySelector('.form-control-alert') as HTMLSpanElement;
      console.log(spanError)

      if(this.inputValidator.confirmpassword) {
        formcontrolsettings.classList.remove('error');
        spanError.style.display = 'none';
      } else {
        formcontrolsettings.classList.add('error');
        spanError.style.display = 'block';
      }

      this.changeStatusButtom();
    })

    // Focus al primer input
    // setTimeout(() => {
    //   const firstInput: HTMLInputElement =  this.myInput.toArray()[0].nativeElement;
    //   firstInput.focus();
    // }, 300);

    const footerButton: HTMLDivElement = document.querySelector('.form-control-button');

    this.myInput.forEach( input => {

      input.nativeElement.addEventListener('focus', () => {
        this.focoActivo = true;
        console.log(this.focoActivo);
        const formControlSettings: HTMLDivElement = input.nativeElement.parentNode;
        formControlSettings.classList.add('active')
        formControlSettings.classList.remove('data');

        footerButton.classList.add('active');
        footerButton.classList.remove('disabled');
      });

      input.nativeElement.addEventListener('blur', (event: any) => {

        const inputFakes = document.querySelectorAll('.input-fake');
        if (event.relatedTarget === inputFakes[0] ||
            event.relatedTarget === inputFakes[1] ||
            event.relatedTarget === inputFakes[2]) {
          return;
        }

        this.focoActivo = false;

        const formControlSettings: HTMLDivElement = input.nativeElement.parentNode;
        formControlSettings.classList.remove('active');
        if(input.nativeElement.value !== '') {
          formControlSettings.classList.add('data');
        }

        footerButton.classList.add('disabled');
        footerButton.classList.remove('active');
      });

    })


  }

  ngOnInit() {}

  onBack() {
    this.navigation.back('/customer/settings/main-settings')
  }

  toggleShow(button: string, event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.form-control-settings .form-input')

    // No perder el foco del input
    //event.preventDefault();
    if(button === 'curretpassword') {
      if(this.focoActivo) {
        inputs[0].focus();
        setTimeout(() => {
          inputs[0].setSelectionRange(inputs[0].value.length, inputs[0].value.length)
        }, 0);
      }
    }
    if(button === 'newpassword') {
      if(this.focoActivo) {
        inputs[1].focus();
        setTimeout(() => {
          inputs[1].setSelectionRange(inputs[1].value.length, inputs[1].value.length)
        }, 0);
      }
    }
    if(button === 'confirmpassword') {
      if(this.focoActivo) {
        inputs[2].focus();
        setTimeout(() => {
          inputs[2].setSelectionRange(inputs[2].value.length, inputs[2].value.length)
        }, 0);
      }
    }

    this.statusButtons = {
      ...this.statusButtons,
      [button]: !this.statusButtons[button]
    }
  }


  onToBack(route: string) {
    this.navigation.back(route);
  }

  saveData() {
    this.navigation.back('/customer/settings/main-settings')
  }
}
