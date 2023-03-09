import { Component, Injector, OnInit } from '@angular/core';
import { BillingDataService } from '../../../services/billing-data.service';
import { ViewComponent } from '@geor360/ecore';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';

@Component({
  selector: 'app-bills-delete',
  templateUrl: './bills-delete.component.html',
  styleUrls: ['./bills-delete.component.scss'],
})
export class BillsDeleteComponent extends ViewComponent implements OnInit {

  billingData : any[];
  oneTrue: boolean = false;
  modalIsVisible: boolean = false;
  cOrder: any;

  constructor(private bds: BillingDataService, private _injector: Injector,
    private cpService: ConfirmOrderService) {
    super(_injector);

    this.cpService.currentMyOrder$.subscribe( data => this.cOrder = data);

    this.bds.currentBillingData$.subscribe( (data) => {
      this.billingData = data;
    })

    this.billingData = this.billingData.map( (bill,index) => {
      const i = index+1;
      const nBill = {
        indice: i,
        selected: false,
        ...bill
      }
      return nBill;
    })
  }

  ngOnInit() {

  }


  checkBoxChange(){
    const trues = this.billingData.filter( bill => bill.selected);
    this.oneTrue = trues.length>0 ? true : false;
  }


  deleteBills(){
    this.modalIsVisible = true;
  }

  closeModal(value){
    if(value.btnEliminar){
      if(this.oneTrue){

        //borrar la orden de la seccion mi pedido
        const trues = this.billingData.filter( bill => bill.selected);
        trues.forEach( bill => {
          if(bill.id === this.cOrder.bill.id){
            this.cpService.setBill({
              name: "",
              id: "",
              type: ""
            })
          }
        })

        //borrar las facturas seleccionadas
        const notSelected = this.billingData.filter( bill => !bill.selected);
        const notSelectedFormated = notSelected.map( bill => {
          const {indice,selected,...billFormated} = bill;
          return billFormated;
        })
        this.bds.setBillingData(notSelectedFormated);
        this.oneTrue = false;
        this.modalIsVisible = false;
      }
    }else{
      this.modalIsVisible = value;
    }
  }

  goToEdit(){
    this.navigation.forward("/customer/manage-billing-data/add-company")
  }


}
