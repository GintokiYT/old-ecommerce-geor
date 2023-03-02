import { Location } from '@angular/common';
import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-header-variants',
  templateUrl: './header-variants.component.html',
  styleUrls: ['./header-variants.component.scss'],
})
export class HeaderVariantsComponent extends ViewComponent implements OnInit {

  constructor( _injector: Injector, private location: Location) {
    super(_injector)
  }

  ngOnInit() {}

  goBack(){
    const back = localStorage.getItem('back') ?? '';
    if(back) {
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '');
    } else {
      this.navigation.back('/customer/product');
    }

  }

}
