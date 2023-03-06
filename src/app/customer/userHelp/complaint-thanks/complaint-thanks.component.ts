import { Component, OnInit, Injector } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

@Component({
  selector: 'app-complaint-thanks',
  templateUrl: './complaint-thanks.component.html',
  styleUrls: ['./complaint-thanks.component.scss'],
})
export class ComplaintThanksComponent extends ViewComponent implements OnInit {

  constructor(_injector: Injector) {
    super(_injector)
  }

  ngOnInit() {}

  onToBack() {
    this.navigation.back('/customer/manage-user-information');
  }
}
