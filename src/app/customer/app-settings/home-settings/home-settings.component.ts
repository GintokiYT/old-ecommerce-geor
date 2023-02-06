import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

import { Router } from '@angular/router';

@Component({
  selector: 'app-app-settings',
  templateUrl: './home-settings.component.html',
  styleUrls: ['./home-settings.component.scss'],
})
export class HomeSettingsComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector, private router: Router) {
    super(_injector)
  }

  ngOnInit() {}

  onBack() {
    const routeBack: string = localStorage.getItem('back') || '';
    localStorage.setItem('back', this.router.url)
    this.navigation.back(routeBack)
  }

  onSignOff() {

  }
}
