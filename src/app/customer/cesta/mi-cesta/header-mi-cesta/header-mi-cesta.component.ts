import { Component, OnInit, Injector, Input } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-header-mi-cesta',
  templateUrl: './header-mi-cesta.component.html',
  styleUrls: ['./header-mi-cesta.component.scss'],
})
export class HeaderMiCestaComponent extends ViewComponent implements OnInit {
  @Input()
  title: string = ""
  constructor(_injector: Injector) {
    super(_injector);
  }


  ngOnInit() {}

  goGerardo(){
    this.navigation.root('/customer/cesta-colaborativa','back');
  }
}
