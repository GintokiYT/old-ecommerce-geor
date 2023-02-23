import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss'],
})
export class ConditionComponent extends ViewComponent implements OnInit {

  constructor(private injector: Injector) { 
    super(injector)
  }

  ngOnInit() {}

  goToVoucher(){
    this.navigation.back("/customer/voucher")
  }

}
