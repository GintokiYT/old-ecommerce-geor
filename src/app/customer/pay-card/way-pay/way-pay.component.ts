import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
import MetodoPago from '../../../interfaces/MetodoPago';
@Component({
  selector: 'app-way-pay',
  templateUrl: './way-pay.component.html',
  styleUrls: ['./way-pay.component.scss'],
})
export class WayPayComponent extends ViewComponent implements OnInit {

  oneTrue:boolean=true;

  data: any[] = [
    {
      id: 1,
      selected: false,
      tipo: "Visa Débito",
      numero: "*** 4115"
    },
    {
      id:2,
      selected: false,
      tipo: "Visa Débito",
      numero: "*** 4115"
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
      const metodo : MetodoPago ={
        tipo : selected[0].tipo,
        numero: selected[0].numero,
        icon : "/assets/icons/icon-visa-small.svg"
      }
      this.cpService.setMetodoPago(metodo)
    }
    this.navigation.back("/customer/confirm-order");
  }


  alert_message(){
    this.message.confirm('¿Seguro que quieres eliminar la tarjeta?','',(confirmation)=>{
       },'Eliminar','Cancelar')
  }
}

