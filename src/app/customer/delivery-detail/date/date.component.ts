
import { Component, Input, OnInit,Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent extends ViewComponent implements OnInit {

  @Input()
  title: string = ""

  constructor(private location: Location,_injector: Injector) { 
    super(_injector)
  }

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
    opcion?.classList.remove("notSelected")

  }

  goTo(path: string){
    this.navigation.back(path);
  }




}