import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

interface Options{
  envioADomicilio: boolean,
  recojoEnTienda: boolean
}

@Component({
  selector: 'app-detalles-entrega',
  templateUrl: './detalles-entrega.component.html',
  styleUrls: ['./detalles-entrega.component.scss'],
})
export class DetallesEntregaComponent implements OnInit {


  @Input()
  envioADomicilio: boolean = false;

  @Input()
  recojoTienda: boolean = false;

  @Output()
  onChangeOption: EventEmitter<Options> = new EventEmitter<Options>();

  constructor() {
  }

  ngOnInit() {

  }

  onSelect(id:string){
    const opciones = document.querySelectorAll(".selected");
    const opcion = document.getElementById(id);
    opciones.forEach( opc => opc.classList.remove("selected"));
    opciones.forEach( opc => opc.classList.add("notSelected"));
    opcion?.classList.add("selected")
    opcion?.classList.remove("notSelected")

    if(id==="location"){
      this.envioADomicilio = true;
      this.recojoTienda = false;
    }

    if(id==="home"){
      this.envioADomicilio = false;
      this.recojoTienda = true;
    }

    const obj = {
       envioADomicilio: this.envioADomicilio,
       recojoEnTienda : this.recojoTienda
    }

    this.onChangeOption.emit(obj)
  }



}
