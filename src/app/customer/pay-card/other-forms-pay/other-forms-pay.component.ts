import { Component, OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';

@Component({
  selector: 'app-other-forms-pay',
  templateUrl: './other-forms-pay.component.html',
  styleUrls: ['./other-forms-pay.component.scss'],
})
export class OtherFormsPayComponent extends ViewComponent implements OnInit {

  @Input()
  oneTrue : boolean;

  @Output()
  onOneTrue: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  onSelectMethod: EventEmitter<any> = new EventEmitter<any>();

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

  
  checkbox(id: number) {
    const falses = this.options.filter( element => element.id!==id);
    const trues = this.options.filter(element => element.selected===true);
    falses.forEach( element => {
      element.selected = false;
    })
    if(trues.length>0){
      this.oneTrue = true;
      this.onSelectMethod.emit(trues[0]);
      this.onOneTrue.emit(this.oneTrue);
    }else{
      this.oneTrue = false;
      this.onOneTrue.emit(this.oneTrue);
    }
  }

}
