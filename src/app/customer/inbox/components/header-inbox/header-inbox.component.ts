import { Component, Injector, OnInit } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-header-inbox',
  templateUrl: './header-inbox.component.html',
  styleUrls: ['./header-inbox.component.scss'],
})
export class HeaderInboxComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  backMainInbox() {
    this.navigation.root('/customer/main-inbox', 'back');
  }

  openTelf() {
    this.navigation.root('/customer/telefono', 'forward');
  }
}
