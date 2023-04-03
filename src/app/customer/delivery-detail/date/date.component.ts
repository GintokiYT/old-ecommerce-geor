
import { Component, Input, OnInit,Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

interface ICost {
  date: string,
}

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent extends ViewComponent implements OnInit {

  WEEKDAYS = {
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

    function getDaysMonth(anio, mes) {
      var newDate = new Date(anio, mes - 1, 1); // mes comienza en 0 (enero)
      var days = [];
      while (newDate.getMonth() === mes - 1) {
        days.push(new Date(newDate));
        newDate.setDate(newDate.getDate() + 1);
      }
      return days;
    }
    const daysMonth = getDaysMonth(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1)


    daysMonth.forEach( day => {
      const currentDay = new Date(day);

      if( currentDay.getDate() >= new Date().getDate() ) {
        const daysWeek = this.WEEKDAYS[currentDay.getDay()];
        this.dates.push({
          date: `${daysWeek} ${currentDay.getDate()}/${currentDay.getMonth() + 1}`
        })
      }
    })
  }

  goTo(path: string){
    this.navigation.back(path);
  }

  //Pintar lo seleccionado
  onDateSelected(date: string) {
    if (this.selectedDate === date) {
      this.selectedDate = null; // deseleccionar fecha previamente seleccionada
    } else {
      this.selectedDate = date; // seleccionar nueva fecha
    }
  }
// Primer checkbox seleccionado por defecto
  checkbox1Selected = true;

// Segundo checkbox no seleccionado por defecto
  checkbox2Selected = false;

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.updateCalendar();
  }

  lastMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.updateCalendar();
  }

  updateCalendar() {
   /*  this.dates = [];
    function getDaysMonth(anio, mes) {
      var newDate = new Date(anio, mes - 1, 1); // mes comienza en 0 (enero)
      var days = [];
      while (newDate.getMonth() === mes - 1) {
        days.push(new Date(newDate));
        newDate.setDate(newDate.getDate() + 1);
      }
      return days;
    }
    const daysMonth = getDaysMonth(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1)

    daysMonth.forEach( day => {
      const currentDay = new Date(day);

      if( currentDay.getDate() >= new Date().getDate() ) {
        const daysWeek = this.WEEKDAYS[currentDay.getDay()];
        this.dates.push({
          date: `${daysWeek} ${currentDay.getDate()}/${currentDay.getMonth() + 1}`
        })
      }
    }) */
    this.dates = [];
  function getDaysMonth(anio, mes) {
    var newDate = new Date(anio, mes - 1, 1); // mes comienza en 0 (enero)
    var days = [];
    while (newDate.getMonth() === mes - 1) {
      days.push(new Date(newDate));
      newDate.setDate(newDate.getDate() + 1);
    }
    return days;
  }
  const daysMonth = getDaysMonth(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1)

  daysMonth.forEach(day => {
    const currentDay = new Date(day);
    const daysWeek = this.WEEKDAYS[currentDay.getDay()];
    this.dates.push({
      date: `${daysWeek} ${currentDay.getDate()}/${currentDay.getMonth() + 1}`
    });
  })
  }

}










