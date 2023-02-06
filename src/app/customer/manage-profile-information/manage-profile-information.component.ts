import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-manage-profile-information',
  templateUrl: './manage-profile-information.component.html',
  styleUrls: ['./manage-profile-information.component.scss'],
})
export class ManageProfileInformationComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  redirectAppSettings() {
    this.navigation.root('/customer/app-settings', 'forward');
    localStorage.setItem('back', '/customer/manage-profile-information');
  }
}
