import { Component, OnInit, Injector } from '@angular/core';
import { ConfirmOrderService } from '../confirm-order/services/confirm-order.service';
import { ViewComponent } from '@geor360/ecore';
import { BillingDataService } from '../../services/billing-data.service';


@Component({
  selector: 'app-billing-data',
  templateUrl: './billing-data.component.html',
  styleUrls: ['./billing-data.component.scss'],
})
export class BillingDataComponent extends ViewComponent implements OnInit {

  oneTrue: boolean = false;
  billingData: any[];
  cOrder : any;


  constructor(private cpService: ConfirmOrderService, private bds: BillingDataService,
    private _injector: Injector) {
    super(_injector);
    this.bds.currentBillingData$.subscribe(data => this.billingData = data);
    this.cpService.currentMyOrder$.subscribe( data => this.cOrder = data)
    this.billingData = this.billingData.map((bill, index) => {
      const i = index + 1;
      let nBill;
      if(this.cOrder.bill.name === bill.name){
        this.oneTrue = true
        nBill = {
          indice: i,
          selected: true,
          ...bill
        }
      }else{
        nBill = {
          indice: i,
          selected: false,
          ...bill
        }
      }
      
      return nBill;
    })
  }

  ngOnInit() { }

  checkBoxChange(id: number) {
    const falses = this.billingData.filter(bill => bill.id !== id);
    const trues = this.billingData.filter(bill => bill.selected === true);
    falses.forEach(bill => bill.selected = false);
    this.oneTrue = (trues.length > 0) ? true : false;
  }

  setBill() {
    const billingDataChoosed = this.billingData.filter(bill => bill.selected === true);
    if (billingDataChoosed.length > 0) {
      const { indice, selected, ...billFormated } = billingDataChoosed[0];
      this.cpService.setBill(billFormated)
      this.navigation.back("/customer/confirm-order");
    }
  }

  deleteBill(eliminar: boolean): void {
    if (eliminar) {
      const billingDataChoosed = this.billingData.filter(bill => bill.selected === true)[0];
      if(this.cOrder.bill.id===billingDataChoosed.id){
        this.cpService.setBill({
          name : "",
          id: "",
          type: ""
        })
      }
      const notSelected = this.billingData.filter( bill => !bill.selected);
      const notSelectedFormated = notSelected.map( bill => {
        const {indice,selected,...billFormated} = bill;
        return billFormated;
      })
      this.bds.setBillingData(notSelectedFormated);
      this.oneTrue = false;
    }
  }

  goToEdit(bill: any) {
    this.navigation.root(`/customer/manage-billing-data/edit-bill/${bill.id}`,"forward")
  }

  goToAddCompany(){
    this.navigation.root("/customer/manage-billing-data/add-company","forward");
  }


}
