import { RouteCollection } from 'src/shared/route-collection';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-whe-are-you',
  templateUrl: './whe-are-you.component.html',
})
export class WheAreYouComponent {
  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate([RouteCollection.account.welcome.myLocation]);
  }
}
