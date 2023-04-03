import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-change-return',
  templateUrl: './change-return.component.html',
  styleUrls: ['./change-return.component.scss'],
})
export class ChangeReturnComponent extends ViewComponent implements OnInit {

  constructor(private injector:Injector) {
    super(injector);
   }

  ngOnInit() {}

  goBack(){
    this.navigation.back('/customer/product');
  }

}
