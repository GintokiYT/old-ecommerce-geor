import { Component, OnInit, Injector } from '@angular/core';
import { ConfirmOrderService } from '../confirm-order/services/confirm-order.service';
import { ViewComponent } from '@geor360/ecore';


@Component({
  selector: 'app-billing-data',
  templateUrl: './billing-data.component.html',
  styleUrls: ['./billing-data.component.scss'],
})
export class BillingDataComponent extends ViewComponent implements OnInit {

  oneTrue : boolean = true;


  bills : any[] = [
    {
      id:1,
      name: "La Samaritana Corporation S.A.C - LAAC",
      code: "20713995789",
      type: "Factura",
      selected: true
    },
    {
      id:2,
      name: "Negocios del Carmen Portocarreo - NCM Comercial",
      code: "20713995789",
      type: "Factura",
      selected: false
    },
    {
      id:3,
      name: "Norman Osword Sánchez",
      code: "20713995789",
      type: "Boleta",
      selected: false
    }
  ]

  constructor(private cpService: ConfirmOrderService,
    private _injector: Injector) {
      super(_injector)
     }

  ngOnInit() {}

  checkBoxChange(id:number){
    const falses = this.bills.filter( bill => bill.id!==id);
    const trues = this.bills.filter(bill => bill.selected===true);
    falses.forEach( bill => bill.selected = false );
    this.oneTrue = (trues.length>0) ? true : false;
  }

  setBill(){
    const billsChoosed = this.bills.filter( bill => bill.selected===true);
    if(billsChoosed.length>0){
      const {id,selected,...billFormated} = billsChoosed[0];
      this.cpService.setBill(billFormated)
      this.navigation.back("/customer/confirm-order");
    }
  }

  deleteBill(eliminar:boolean):void{
    if(eliminar){
      console.log(eliminar)
      const trues = this.bills.filter(bill => bill.selected===true);
      if(trues.length>0){
        this.bills = this.bills.filter( bill => bill.id!==trues[0].id );
      }
      this.oneTrue = false;
    }
  }

  goToEdit(){
    this.navigation.forward("/customer/manage-billing-data/add-company")
  }


}
