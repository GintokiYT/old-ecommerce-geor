import { Component, OnInit } from '@angular/core';
import { ConfirmOrderService } from '../services/confirm-order.service';

@Component({
  selector: 'app-order-type',
  templateUrl: './order-type.component.html',
  styleUrls: ['./order-type.component.scss'],
})
export class OrderTypeComponent implements OnInit {

  constructor(private cpService: ConfirmOrderService) { 
    
  }

  ngOnInit() {
    const opciones = document.querySelectorAll(".selected");
    opciones.forEach(opc => opc.classList.remove("selected"));
    const pedidoSeleccionado = this.cpService.currentMyOrder$.subscribe(order => {
      document.getElementById(order.typeOrder)?.classList.add("selected");
    })
  }

  onSelect(id: string) {
    const opciones = document.querySelectorAll(".selected");
    const opcion = document.getElementById(id);
    opciones.forEach(opc => opc.classList.remove("selected"));
    opcion?.classList.add("selected")

    this.cpService.setTypeOrder(id);
  }


}
