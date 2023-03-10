import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
import IPayMethod from '../../../interfaces/IPayMethod';

@Component({
  selector: 'app-way-pay',
  templateUrl: './way-pay.component.html',
  styleUrls: ['./way-pay.component.scss'],
})
export class WayPayComponent extends ViewComponent implements OnInit {

  oneTrue:boolean=true;
  modalIsVisible : boolean = false;

  data: any[] = [
    {
      id: 1,
      selected: false,
      type: "Visa Débito",
      number: "*** 4115"
    },
    {
      id:2,
      selected: false,
      type: "Visa Débito",
      number: "*** 4115"
    },
  ]

  constructor(private _injector: Injector, private cpService: ConfirmOrderService) {
    super(_injector)
   }

  ngOnInit() {}

  goTo(path:string){
    this.navigation.forward(path)
  }

  checkBoxSelect(id: number) {
    const falses = this.data.filter( element => element.id!==id);
    const trues = this.data.filter(element => element.selected===true);
    falses.forEach( element => {
      element.selected = false;
    })
    if(trues.length>0){
      this.oneTrue = false;
    }else{
      this.oneTrue = true;
    }
  }

  establecerMetodoDePago(){
    const selected = this.data.filter(element => element.selected === true);
    if (selected[0]) {
      const method : IPayMethod ={
        type : selected[0].type,
        number: selected[0].number,
        icon : "/assets/icons/icon-visa-small.svg"
      }
      this.cpService.setPayMethod(method)
    }
    this.navigation.back("/customer/confirm-order");
  }


  delete(tarjetaId: string) {
    this.message.confirm('¿Seguro que quieres eliminar la tarjeta?','',(confirmation)=>{
      if (confirmation) {
      const tarjetaAEliminar = document.getElementById(tarjetaId);
      tarjetaAEliminar.remove();
      }
    },'Eliminar','Cancelar')
  }
  
  openModal(){
    this.modalIsVisible = true;
  }

  closeModal(){
    this.modalIsVisible = false;
  }
}

