import { Component, Injector, OnInit, ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
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

  @ViewChild('telefono') telefono: HTMLInputElement;

  constructor(_injector: Injector) {
    super(_injector)
  }

  aplicarMascara(telefonoInput: HTMLInputElement) {
    let valor = telefonoInput.value;
    valor = valor.replace(/\D/g, "");
    let valorFormateado = "";
    for (let i = 0; i < valor.length && i < 9; i++) {
      if (i === 3 || i === 6) {
        valorFormateado += " ";
      }
      valorFormateado += valor.charAt(i);
    }
    telefonoInput.value = valorFormateado;
  }


  ngAfterViewInit() {

    const containerfooterbottom: HTMLDivElement = document.querySelector('.container-footer-bottom');

    // Focus al primer input
    // setTimeout(() => {
    //   const firstInput: HTMLInputElement =  this.myInput.toArray()[0].nativeElement;
    //   firstInput.focus();
    // }, 300);

    this.myInput.forEach( (input, index) => {

      // Telefono
      if(index === 2) {
        input.nativeElement.addEventListener('input', () => {
          this.aplicarMascara(input.nativeElement)
          console.log(this.myData.cellphone.length)
        })
      }

      input.nativeElement.addEventListener('focus', () => {
        const formControlSettings: HTMLDivElement = input.nativeElement.parentNode;
        formControlSettings.classList.add('active')
        formControlSettings.classList.remove('data');

        containerfooterbottom.style.paddingBottom = 'var(--ion-padding-bottom)';
      });
      input.nativeElement.addEventListener('blur', () => {
        const formControlSettings: HTMLDivElement = input.nativeElement.parentNode;
        formControlSettings.classList.remove('active');
        if(input.nativeElement.value !== '') {
          formControlSettings.classList.add('data');
        }
        containerfooterbottom.style.paddingBottom = 'calc(var(--ion-safe-area-bottom) + var(--ion-padding-bottom))';
      });

      input.nativeElement.addEventListener('input', (event: Event): boolean => {

        const target = event.target as HTMLInputElement;
        this.myData = {
          ...this.myData,
          [target.name]: target.value
        }

        if (this.myData.name === '' ||
            this.myData.email === '' ||
            this.myData.cellphone === '') {
          return this.statusButton = true;
        }

        if(this.myData.cellphone.length < 11) {
          return this.statusButton = true;
        }

        return this.statusButton = false;
      })
    })
  }

  ngOnInit() {}

  onToBack(route: string) {
    this.navigation.back(route);
  }

  saveData() {
    this.navigation.back('/customer/settings/main-settings')
  }

}
