import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-returns-exchanges-settings',
  templateUrl: './returns-exchanges-settings.component.html',
  styleUrls: ['./returns-exchanges-settings.component.scss', '../../../../theme/personalizado.scss'],
})
export class ReturnsExchangesSettingsComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector,private location:Location, private router: Router) {
    super(_injector)
  }

  ngOnInit() {}

  onToBack(){

    const currentRouter = this.router.url;

    if(currentRouter === '/customer/search-general/product-detail/returns-exchanges') {
      return this.navigation.back('/customer/search-general/product-detail');
    }

    const back = localStorage.getItem('back') ?? '';
    if(back) {
      this.navigation.back(localStorage.getItem('back'));
      localStorage.setItem('back', '');
    } else {
      this.navigation.back('/customer/settings/about-us')
    }

    // this.location.back();
  }

}
