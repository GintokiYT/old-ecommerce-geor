import { Component, OnInit, Input, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-avaible-coupons',
  templateUrl: './avaible-coupons.component.html',
  styleUrls: ['./avaible-coupons.component.scss'],
})
export class AvaibleCouponsComponent extends ViewComponent implements OnInit {

  @Input("couponsC")
  coupons: any[];


  constructor(private _injector: Injector) {
    super(_injector);
  }

  ngOnInit() { }


  useCoupon(idC: number) {
    const coupon = this.coupons.filter(couponArr => couponArr.id === idC);
    const { id, ...couponChoosed } = coupon[0];
    this.navigation.forward("/customer/manage-coupons/products-with-coupon");
  }

  goToConditions() {
    this.navigation.root("/customer/manage-coupons/conditions","forward")
  }


}
