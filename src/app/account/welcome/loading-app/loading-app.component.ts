import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  templateUrl: 'loading-app.component.html',
  styleUrls: ['loading-app.component.scss']
})
export class LoadingAppComponent extends ViewComponent implements OnInit {

  logo: string = localStorage.getItem('mode') === 'light' ?
                 '/assets/animation/geor-animation-light.gif':
                 '/assets/animation/geor-animation-dark.gif'

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {
    setTimeout(() => {
      this.navigation.root('/account/welcome/select-country', 'forward');
    }, 1200);
  }

}
