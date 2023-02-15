import { Location } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-returns-exchanges-settings',
  templateUrl: './returns-exchanges-settings.component.html',
  styleUrls: ['./returns-exchanges-settings.component.scss'],
})
export class ReturnsExchangesSettingsComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector,private location:Location) {
    super(_injector)
  }

  ngOnInit() {}

  onBack() {
    /* this.navigation.back('/customer/settings/main-settings') */
    this.location.back();
  }
}
