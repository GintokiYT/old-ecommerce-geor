import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { PaymentMethodsService } from '../../../services/payment-methods.service';
import { ConfirmOrderService } from '../../confirm-order/services/confirm-order.service';
import IPayMethod from '../../../interfaces/IPayMethod';
@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss'],
})
export class PaymentMethodsComponent extends ViewComponent implements OnInit {

  paymentData: any[];
  optionType: string = "way-pay";
  oneTrueWayPay: boolean;
  oneTrueOtherForms: boolean;
  method:any;


  constructor(private _injector: Injector,
    private pms: PaymentMethodsService, private cos: ConfirmOrderService) {
    super(_injector)
    this.pms.currentPaymentData.subscribe(d => this.paymentData = d);
    const trues = this.paymentData.filter(d => d.selected === true);
    if (trues.length > 0) {
      this.oneTrueWayPay = true;
    } else {
      this.oneTrueWayPay = false;
    }
  }

  ngOnInit() { }

  goTo(path: string) {
    const back = localStorage.getItem('back') ?? '';
    if (back) {
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '');
    } else {
      this.navigation.root(path, "forward");
    }
  }

  onSelect(id: string) {
    const opciones = document.querySelectorAll(".selected");
    const opcion = document.getElementById(id);
    opciones.forEach(opc => opc.classList.remove("selected"));
    opcion?.classList.add("selected")
    this.optionType = id;
  }


  addPayofWayPay() {
    const methodSelected = this.paymentData.filter(d => d.selected === true)[0];
    const method: IPayMethod = {
      type: "Visa debito",
      number: "*** 4115",
      icon: "/assets/icons/icon-visa-small.svg"
    }
    this.cos.setPayMethod(method)
    console.log(method)
    this.navigation.back("/customer/confirm-order");
  }

  changeOneTrueWayPay(value) {
    this.oneTrueWayPay = value;
  }

  addPayOfOtherForms() {
    const {id,selected,type} = this.method;
    const newMethod = {
      number: "",
      type
    }
    this.cos.setPayMethod(newMethod)
    this.navigation.back("/customer/confirm-order");
  }

  changeOneOtherFormsPay(value) {
    this.oneTrueOtherForms = value;
  }

  setMethod(value){
    this.method = value;
  }



}
