import { Component, Injector, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-my-data-settings',
  templateUrl: './my-data-settings.component.html',
  styleUrls: ['./my-data-settings.component.scss', '../../../../theme/personalizado.scss'],
})
export class MyDataSettingsComponent extends ViewComponent implements OnInit {

  myData = {
    name: '',
    email: '',
    cellphone: ''
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
          footerButton.style.paddingBottom = 'calc(var(--ion-safe-area-bottom) + 24px)';
        }
        footerButton.classList.add('disabled');
        footerButton.classList.remove('active');
      });
      input.nativeElement.addEventListener('input', (event: Event) => {
        console.log(this.myData)
        const target = event.target as HTMLInputElement;
        this.myData = {
          ...this.myData,
          [target.name]: target.value
        }
        if(this.myData.name !== '' && this.myData.email !== '' && this.myData.cellphone !== '') {
          this.statusButton = false;
        } else {
          this.statusButton = true;
        }
      })
      // input.nativeElement.addEventListener('click', (event: Event) => {
      //   const selectedInput: any = event.target;

      //   setTimeout(() => {
      //     selectedInput.scrollIntoView({ behavior: 'smooth' });
      //   }, 200);
      // })
    })
  }

  ngOnInit() {}

  onToBack(route: string) {
    this.navigation.back(route);
  }

}
