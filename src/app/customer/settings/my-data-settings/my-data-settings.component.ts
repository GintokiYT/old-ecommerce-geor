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
        console.log(formControlSettings)
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

        // if(this.myData.cellphone.length < 12) {
        //   this.statusButton = true
        // } else {
        //   this.statusButton = false
        // }
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

  saveData() {
    this.navigation.back('/customer/settings/main-settings')
  }

}
