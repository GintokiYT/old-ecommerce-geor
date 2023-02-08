import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-terms-conditions-settings',
  templateUrl: './terms-conditions-settings.component.html',
  styleUrls: ['./terms-conditions-settings.component.scss'],
})
export class TermsConditionsSettingsComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngOnInit() {}

  onBack() {
    this.navigation.back('/customer/settings/main-settings')
  }
}
