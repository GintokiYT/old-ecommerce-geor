import { AppNavigationService } from '@geor360/ecore';
import { RouteCollection } from 'src/shared/route-collection';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-whe-are-you',
  templateUrl: './whe-are-you.component.html',
  styleUrls: ['whe-are-you.component.scss']
})
export class WheAreYouComponent {

  theme: string = localStorage.getItem('mode') === 'dark'? 'dark' : 'light';

  constructor(private navigator: AppNavigationService) {}

  OnInit() {}

  onSubmit() {
    this.navigator.root(RouteCollection.account.welcome.myLocation, 'forward');
  }

}
