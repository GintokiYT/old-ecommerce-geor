import { Component, OnInit } from '@angular/core';
import { BillingDataService } from '../../../services/billing-data.service';

@Component({
  selector: 'app-bills-delete',
  templateUrl: './bills-delete.component.html',
  styleUrls: ['./bills-delete.component.scss'],
})
export class BillsDeleteComponent implements OnInit {

  billingData : any[];
  oneTrue: boolean = false;
  modalIsVisible: boolean = false;

  constructor(private bds: BillingDataService) {
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

}
