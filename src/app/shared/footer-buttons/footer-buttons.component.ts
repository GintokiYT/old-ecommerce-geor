import { AppNavigationService } from '@geor360/ecore';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-buttons',
  templateUrl: 'footer-buttons.component.html',
})
export class FooterButtonsComponent {
  constructor(private navigator: AppNavigationService) {}

  onTo() {
    this.navigator.forward('/customer/main-inbox');
  }
}
