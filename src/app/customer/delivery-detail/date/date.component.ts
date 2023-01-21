
import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {

  @Input()
  title: string = ""

  constructor(private location: Location) { }

  ngOnInit() { }

  goBack() {
    this.location.back();
  }

  onSelect(id:string){
    const opciones = document.querySelectorAll(".selected");
    const opcion = document.getElementById(id);
    opciones.forEach( opc => opc.classList.remove("selected"));
    opciones.forEach( opc => opc.classList.add("notSelected"));
    opcion?.classList.add("selected")

  }




}