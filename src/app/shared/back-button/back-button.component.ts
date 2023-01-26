import { AppNavigationService } from '@geor360/ecore';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: 'back-button.component.html',
})
export class BackButtonComponent {
  @Input() path: string = '';
  @Input() icon: string = 'arrow';

  constructor(private nagivator: AppNavigationService) {}

  onBack() {
    this.nagivator.back(this.path);
  }
}
