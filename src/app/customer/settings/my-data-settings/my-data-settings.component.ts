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
    this.myInput.forEach( input => {
      input.nativeElement.addEventListener('focus', () => {
        const formControlSettings: HTMLDivElement = input.nativeElement.parentNode;
        formControlSettings.classList.add('active')
        formControlSettings.classList.remove('data');

        setTimeout(() => {
          const $input: HTMLInputElement = input.nativeElement;
          const positionInputY: number = $input.getBoundingClientRect().y;
          const height: number = document.querySelector('ion-content').clientHeight - 92;

          if(positionInputY > height) {
            $input.scrollIntoView({ behavior: 'smooth'})
          }
        }, 300);

      });
      input.nativeElement.addEventListener('blur', () => {
        const formControlSettings: HTMLDivElement = input.nativeElement.parentNode;
        formControlSettings.classList.remove('active');
        if(input.nativeElement.value !== '') {
          formControlSettings.classList.add('data');
        }
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
