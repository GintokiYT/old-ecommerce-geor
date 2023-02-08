import { Component, OnInit, Injector, ViewChild, ElementRef } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

import { Router } from '@angular/router';

@Component({
  selector: 'main-settings',
  templateUrl: './main-settings.component.html',
  styleUrls: ['./main-settings.component.scss'],
})
export class MainSettingsComponent extends ViewComponent implements OnInit {

  statusModal: boolean = false;

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
    this.statusModal = true;
  }

  receiveStatus(event: boolean) {
    this.statusModal = event
  }

  goNextPage(route: string) {
    this.navigation.forward(route);
  }
}
