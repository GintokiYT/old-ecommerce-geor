import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header-inbox',
  templateUrl: './header-inbox.component.html',
  styleUrls: ['./header-inbox.component.scss'],
})
export class HeaderInboxComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector, private callNumber: CallNumber,private location: Location) {
    super(_injector);
  }

  ngOnInit() {}

  backMainInbox() {
    // Las animaciones de root y back lagea el ion-footer
    // this.navigation.forward('/customer/main-inbox');
    this.navigation.root('/customer/main-inbox', 'forward')
    // this.location.back();

  }

  openTelf() {
    console.log('Llamando...')
    // this.navigation.root('/customer/telefono', 'forward');
    this.callNumber.callNumber("18001010101", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
