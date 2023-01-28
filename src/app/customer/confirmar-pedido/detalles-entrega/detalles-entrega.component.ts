import { Component, OnInit } from '@angular/core';
import { ConfirmarPedidoService } from '../services/confirmar-pedido.service';


@Component({
  selector: 'app-detalles-entrega',
  templateUrl: './detalles-entrega.component.html',
  styleUrls: ['./detalles-entrega.component.scss'],
})
export class DetallesEntregaComponent implements OnInit {


  constructor(private cpService: ConfirmarPedidoService) {
    console.log("constructor")
  }

  ngOnInit() {
    const opciones = document.querySelectorAll(".selected");
    opciones.forEach(opc => opc.classList.remove("selected"));
    const pedidoSeleccionado = this.cpService.currentMiPedido$.subscribe(pedido => {
      document.getElementById(pedido.tipoPedido).classList.add("selected");
    })
    console.log("init")
  }


  onSelect(id: string) {
    const opciones = document.querySelectorAll(".selected");
    const opcion = document.getElementById(id);
    opciones.forEach(opc => opc.classList.remove("selected"));
    opcion?.classList.add("selected")

    this.cpService.setTipoPedido(id);
  }

}
