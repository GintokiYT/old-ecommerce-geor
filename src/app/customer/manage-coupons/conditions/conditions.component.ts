import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
})
export class ConditionsComponent extends ViewComponent implements OnInit {

  constructor(private _injector: Injector) {
    super(_injector);
   }

  ngOnInit() {}


  goToCoupons(){

    const params = {
      showCoupons: "true"
    }
    this.navigation.root("/customer/manage-coupons","back",params)
  }

}
