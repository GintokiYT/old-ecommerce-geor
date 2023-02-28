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
      input.nativeElement.addEventListener('input', (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.myData = {
          ...this.myData,
          [target.name]: target.value
        }
        if(this.myData.curretpassword !== '' && this.myData.newpassword !== '' && this.myData.confirmpassword !== '') {
          this.statusButton = false;
        } else {
          this.statusButton = true;
        }
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
      inputs[0].focus();
    }
    if(button === 'newpassword') {
      inputs[1].focus();
    }
    if(button === 'confirmpassword') {
      inputs[2].focus();
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
