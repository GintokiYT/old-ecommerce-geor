import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-header-inbox',
  templateUrl: './header-inbox.component.html',
  styleUrls: ['./header-inbox.component.scss'],
})
export class HeaderInboxComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector, private callNumber: CallNumber) {
    super(_injector);
  }

  ngOnInit() {}

  backMainInbox() {
    this.navigation.root('/customer/main-inbox', 'back');
  }

  openTelf() {
    console.log('Llamando...')
    // this.navigation.root('/customer/telefono', 'forward');
    this.callNumber.callNumber("18001010101", true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
