import { Component, ElementRef, Injector, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-password-settings',
  templateUrl: './password-settings.component.html',
  styleUrls: ['./password-settings.component.scss', '../../../../theme/personalizado.scss'],
})
export class PasswordSettingsComponent extends ViewComponent implements OnInit {

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

  statusButton: boolean = true;

  @ViewChildren('myInput') myInput: QueryList<ElementRef>;

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngAfterViewInit() {

    // Focus al primer input
    setTimeout(() => {
      const firstInput: HTMLInputElement =  this.myInput.toArray()[0].nativeElement;
      firstInput.focus();
    }, 300);

    const footerButton: HTMLDivElement = document.querySelector('.form-control-button');

    this.myInput.forEach( input => {
      input.nativeElement.addEventListener('focus', () => {
        const formControlSettings: HTMLDivElement = input.nativeElement.parentNode;
        formControlSettings.classList.add('active')
        formControlSettings.classList.remove('data');

        footerButton.classList.add('active');
        footerButton.classList.remove('disabled');
      });
      input.nativeElement.addEventListener('blur', () => {
        const formControlSettings: HTMLDivElement = input.nativeElement.parentNode;
        formControlSettings.classList.remove('active');
        if(input.nativeElement.value !== '') {
          formControlSettings.classList.add('data');
        }

        footerButton.classList.add('disabled');
        footerButton.classList.remove('active');
      });
      input.nativeElement.addEventListener('input', (event: Event): boolean => {
        const target = event.target as HTMLInputElement;
        this.myData = {
          ...this.myData,
          [target.name]: target.value
        }

        if(this.myData.curretpassword === '' ||
           this.myData.newpassword === '' ||
           this.myData.confirmpassword === '') {
          return this.statusButton = true;
        }

        if(this.myData.newpassword !== this.myData.confirmpassword) {
          return this.statusButton = true;
        }

        return this.statusButton = false;
      })
    })
  }

  ngOnInit() {}

  onBack() {
    this.navigation.back('/customer/settings/main-settings')
  }

  toggleShow(button: string) {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.form-control-settings input')
    // No perder el foco del input
    if(button === 'curretpassword') {
      setTimeout(() => {
        inputs[0].focus();
        inputs[0].setSelectionRange(inputs[0].value.length, inputs[0].value.length)
      }, 100);
    }
    if(button === 'newpassword') {
      setTimeout(() => {
        inputs[1].focus();
        inputs[1].setSelectionRange(inputs[1].value.length, inputs[1].value.length)
      }, 100);
    }
    if(button === 'confirmpassword') {
      setTimeout(() => {
        inputs[2].focus();
        inputs[2].setSelectionRange(inputs[2].value.length, inputs[2].value.length)
      }, 100);
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
