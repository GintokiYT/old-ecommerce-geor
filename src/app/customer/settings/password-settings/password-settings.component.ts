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
    this.myInput.forEach( input => {
      input.nativeElement.addEventListener('focus', () => {
        const formControlSettings: HTMLDivElement = input.nativeElement.parentNode;
        formControlSettings.classList.add('active')
        formControlSettings.classList.remove('data');
      });
      input.nativeElement.addEventListener('blur', () => {
        const formControlSettings: HTMLDivElement = input.nativeElement.parentNode;
        formControlSettings.classList.remove('active');
        if(input.nativeElement.value !== '') {
          formControlSettings.classList.add('data');
        }
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
    this.statusButtons = {
      ...this.statusButtons,
      [button]: !this.statusButtons[button]
    }
  }

  onToBack(route: string) {
    this.navigation.back(route);
  }
}
