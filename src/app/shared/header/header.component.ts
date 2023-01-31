import { Component, Input, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends ViewComponent implements OnInit {

  @Input()
  title: string = ""

  @Input()
  iconLeft: string = "";

  @Input()
  backDirection: string = "";

  icons = {
    "icon-close": "/assets/icons/icon-close.svg",
    "icon-arrow-left": "/assets/icons/icon-arrow-left.svg"
  }

  directions = {
    "confirmar-pedido" : "/customer/confirmar-pedido",
    "stores": "/customer/stores",
    "collaborative-basket": "/customer/collaborative-basket",
    "login": "",
    "register": "/register",
    "recover-password": "/customer/recover-password"
  }

  constructor(private location: Location, private _injector: Injector) {
    super(_injector);
   }

  ngOnInit() {}

  goBack(){
    this.navigation.back(this.directions[this.backDirection]);
  }

}
