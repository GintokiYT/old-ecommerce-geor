import { AppNavigationService } from '@geor360/ecore';
import { RouteCollection } from 'src/shared/route-collection';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whe-are-you',
  templateUrl: './whe-are-you.component.html',
})
export class WheAreYouComponent {
  constructor(private navigator: AppNavigationService) {}

  onSubmit() {
    this.navigator.forward(RouteCollection.account.welcome.myLocation);
  }
}
