import { Component, OnInit,Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';

@Component({
  selector: 'app-other-forms-pay',
  templateUrl: './other-forms-pay.component.html',
  styleUrls: ['./other-forms-pay.component.scss'],
})
export class OtherFormsPayComponent extends ViewComponent implements OnInit {

  oneTrue:boolean=true;

  options: any[] = [
    {
      id: 0,
      selected: false,
      type: "Efectivo"

    },
    {
      id:1,
      selected: false,
      type: "Transferencia/depósito"
    },
    {
      id:2,
      selected: false,
      type: "Crédito (a 30 días)"
    },
  ]
  
  constructor(private _injector: Injector,  private cpService: ConfirmOrderService) {
    super(_injector)
   }

  ngOnInit() {}

  goTo(path:string){
    const trues = this.options.filter(element => element.selected===true);
    if(trues.length>0){
      const {id,selected,type} = trues[0];
      const method = {
        number: "",
        type
      }
      this.cpService.setPayMethod(method)
    }
    this.navigation.back(path)
  }

  checkbox(id: number) {
    const falses = this.options.filter( element => element.id!==id);
    const trues = this.options.filter(element => element.selected===true);
    falses.forEach( element => {
      element.selected = false;
    })
    if(trues.length>0){
      this.oneTrue = false;
    }else{
      this.oneTrue = true;
    }
  }

}
