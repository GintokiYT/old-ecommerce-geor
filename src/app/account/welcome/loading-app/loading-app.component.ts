import { Component, Injector, Input, OnInit, SimpleChanges } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  templateUrl: 'loading-app.component.html',
  styleUrls: ['loading-app.component.scss']
})
export class LoadingAppComponent extends ViewComponent implements OnInit {

  image: string = '';
  alt: string = '';

  constructor(_injector: Injector) {
    super(_injector);
  }

  changeDataLoading(body: HTMLBodyElement) {
    this.image = body.classList.contains('dark')? '/assets/animation/geor-animation-dark.gif' : '/assets/animation/geor-animation-light.gif';
    this.alt = body.classList.contains('dark')? 'Logo Geor Dark' : 'Logo Geor Light';
    localStorage.setItem('mode', body.classList.contains('dark')? 'dark' : 'light');
  }

  ngOnInit() {
    const body: HTMLBodyElement = document.querySelector('body');
    this.changeDataLoading(body);

    // const mediaQueryList: MediaQueryList | undefined = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    // mediaQueryList.addEventListener('change', () => {
    //   this.changeDataLoading(body);
    // })

    setTimeout(() => {
      this.navigation.root('/account/welcome/select-country', 'forward');
    }, 1000);
  }
}
