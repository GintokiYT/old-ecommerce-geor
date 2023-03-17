
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

  @Input()
  title: string = ""

  currentDate: Date = new Date(); // fecha actual

  /* currentMonth: number = this.currentDate.getMonth(); // mes actual */


  constructor(private location: Location,_injector: Injector) {
    super(_injector)
  }

  ngOnInit() {

    this.dates = [
      { date:'Dom 27/11'},
      { date:'Lun 28/11'},
      { date:'Mar 26/11'},
      { date:'Mie 25/11'},
      { date:'Jue 24/11'},
      { date:'Vie 23/11'},
      { date:'Sab 22/11'},
       ];
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










