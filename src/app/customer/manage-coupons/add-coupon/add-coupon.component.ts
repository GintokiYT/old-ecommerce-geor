import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.scss'],
})
export class AddCouponComponent extends ViewComponent implements OnInit {

  inputValue : string = "";

  constructor(private _injector: Injector) { 
    super(_injector);
  }

  ngOnInit() {}


  goToCoupons(){
    const params = {
      showCoupons: "true"
    }
    
    this.navigation.root("customer/manage-coupons","forward",params);
  }

}
