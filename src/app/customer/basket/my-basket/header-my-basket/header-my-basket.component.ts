import { Component, OnInit, Injector, Input } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-header-my-basket',
  templateUrl: './header-my-basket.component.html',
  styleUrls: ['./header-my-basket.component.scss'],
})
export class HeaderMyBasketComponent extends ViewComponent implements OnInit {
  @Input()
  title: string = ""
  constructor(_injector: Injector) {
    super(_injector);
  }


  ngOnInit() {}

  goGerardo(){
    this.navigation.root('/customer/collaborative-basket','back');
  }
}
