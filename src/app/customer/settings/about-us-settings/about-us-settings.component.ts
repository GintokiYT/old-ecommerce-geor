import { Component, ElementRef, Injector, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-about-us-settings',
  templateUrl: './about-us-settings.component.html',
  styleUrls: ['./about-us-settings.component.scss', '../../../../theme/personalizado.scss'],
})
export class AboutUsSettingsComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngOnInit() {}

  onBack() {
    this.navigation.back('/customer/settings/main-settings')
  }

  goNextPage(route: string) {
    this.navigation.forward(route)
  }

  onToBack(route: string) {
    this.navigation.back(route);
  }
}
