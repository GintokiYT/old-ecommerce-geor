import { Component, OnInit, Injector } from '@angular/core';
import { ConfirmOrderService } from './services/confirm-order.service';
import { ViewComponent } from '@geor360/ecore';
import IPayMethod from '../../interfaces/IPayMethod';
import ICoupon from '../../interfaces/ICoupon';
import IBill from '../../interfaces/IBill';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss'],
})
export class ConfirmOrderComponent extends ViewComponent implements OnInit {

  payMethod : IPayMethod;
  coupon: ICoupon;
  bill: IBill;

  constructor(private cpService: ConfirmOrderService,
              private _injector:Injector) {
                super(_injector)
   }

  ngOnInit() {
    this.cpService.currentMyOrder$.subscribe( (myOrder) => {
      this.payMethod = myOrder.payMethod;
      this.coupon = myOrder.coupon;
      this.bill = myOrder.bill;
    })
  }

  onGoToPayMethods(){
    this.navigation.root("customer/payment-methods","forward")
  }

  onGoToCoupons(){
    this.navigation.root("customer/add-coupons","forward");
  }

  onGoToBillingData(){
    this.navigation.root("customer/billing-data","forward");
  }


}
