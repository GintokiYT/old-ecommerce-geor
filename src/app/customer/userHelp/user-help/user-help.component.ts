import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-user-help',
  templateUrl: './user-help.component.html',
  styleUrls: ['./user-help.component.scss'],
})
export class UserHelpComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector);
  }

  ngOnInit() {}

  onToBack() {
    this.navigation.back('/customer/manage-user-information');
  }

  goToInbox() {
    this.navigation.forward('/customer/user-help/complaints-book/internal-inbox/:id')
  }

  goToClaimBook() {
    this.navigation.forward('/customer/user-help/complaints-book');
  }
}
