import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-footer-product',
  templateUrl: './footer-product.component.html',
  styleUrls: ['./footer-product.component.scss'],
})
export class FooterProductComponent extends ViewComponent implements OnInit {

  constructor(_injector:Injector) {
    super(_injector);
   }

  ngOnInit() {}
  goChat(){
    this.navigation.root('/customer/internal-inbox/1','forward');
  }
}
