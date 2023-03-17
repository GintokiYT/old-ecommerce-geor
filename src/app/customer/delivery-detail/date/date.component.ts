
import { Component, Input, OnInit,Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

interface ICost {
  date: string,
}

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent extends ViewComponent implements OnInit {

  diasDeLaSemana = {
    0: 'Dom',
    1: 'Lun',
    2: 'Mar',
    3: 'Mie',
    4: 'Jue',
    5: 'Vie',
    6: 'Sab'
  }

  //select
  selectedDate: string;

  //slider
  slideOptions: any = {
    autoplay: {
      delay: 5000,
    },
  };

  dates: ICost[] = [];

  dateSlidesOptions: any = {
    spaceBetween: 8,
    slidesPerView: 'auto',
  };

  @Input() title: string = ""
  currentDate: Date = new Date(); // fecha actual

  constructor(private location: Location,_injector: Injector) {
    super(_injector)
  }

  ngOnInit() {

    function obtenerDiasMes(anio, mes) {
      var fecha = new Date(anio, mes - 1, 1); // mes comienza en 0 (enero)
      var dias = [];
      while (fecha.getMonth() === mes - 1) {
        dias.push(new Date(fecha));
        fecha.setDate(fecha.getDate() + 1);
      }
      return dias;
    }
    const diasdelmes = obtenerDiasMes(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1)


    diasdelmes.forEach( dia => {
      const currentDay = new Date(dia);

      if( currentDay.getDate() >= new Date().getDate() ) {
        const diaSemana = this.diasDeLaSemana[currentDay.getDay()];
        this.dates.push({
          date: `${diaSemana} ${currentDay.getDate()}/ ${currentDay.getMonth() + 1}`
        })
      }
    })
  }

  goTo(path: string){
    this.navigation.back(path);
  }

  //fecha slideOptions: any = {

  onDateSelected(date: string) {
    this.selectedDate = date;
  }
// Primer checkbox seleccionado por defecto
  checkbox1Selected = true;

// Segundo checkbox no seleccionado por defecto
  checkbox2Selected = false;

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
  }

  lastMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
  }

}










