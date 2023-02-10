import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-privacy-policies-settings',
  templateUrl: './privacy-policies-settings.component.html',
  styleUrls: ['./privacy-policies-settings.component.scss'],
})
export class PrivacyPoliciesSettingsComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngOnInit() {}

  onBack() {
    this.navigation.back('/customer/settings/main-settings')
  }
}
