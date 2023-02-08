import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-header-product',
  templateUrl: './header-product.component.html',
  styleUrls: ['./header-product.component.scss'],
})
export class HeaderProductComponent extends ViewComponent implements OnInit {

  constructor(private _injector: Injector) {
    super(_injector);
   }

  ngOnInit() {}

  goToHome(){
    this.navigation.root("/customer/home","back");
  }

}
