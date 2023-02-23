import { Component, Input, OnInit,Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent extends ViewComponent  implements OnInit {

  showFilter:boolean=false;
  showFilter2:boolean=false;
  showFilter3:boolean=false;
  showFilter4:boolean=false;

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

  open(){
    this.showFilter=!this.showFilter;
  }

  open2(){
    this.showFilter2=!this.showFilter2;
  }
  open3(){
    this.showFilter3=!this.showFilter3;
  }
  open4(){
    this.showFilter4=!this.showFilter4;
  }
}