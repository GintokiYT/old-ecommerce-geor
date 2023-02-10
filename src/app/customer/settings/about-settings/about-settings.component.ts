import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-about-settings',
  templateUrl: './about-settings.component.html',
  styleUrls: ['./about-settings.component.scss'],
})
export class AboutSettingsComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngOnInit() {}

  onBack() {
    this.navigation.back('/customer/settings/main-settings')
  }
}
