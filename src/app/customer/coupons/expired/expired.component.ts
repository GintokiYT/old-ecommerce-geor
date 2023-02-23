import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-expired',
  templateUrl: './expired.component.html',
  styleUrls: ['./expired.component.scss'],
})
export class ExpiredComponent extends ViewComponent implements OnInit {

  constructor(private _injector: Injector) {
    super(_injector);
   }

  ngOnInit() {}


  goToVoucher(){
    this.navigation.back("/customer/voucher")
  }

  goToAdd(){
    this.navigation.back("/customer/add");
  }

}
