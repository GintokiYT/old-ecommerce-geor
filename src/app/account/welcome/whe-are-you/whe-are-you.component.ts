import { AppNavigationService } from '@geor360/ecore';
import { RouteCollection } from 'src/shared/route-collection';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-whe-are-you',
  templateUrl: './whe-are-you.component.html',
  styleUrls: ['whe-are-you.component.scss']
})
export class WheAreYouComponent {

  languageWelcomeWheareyou: any;

  constructor(private navigator: AppNavigationService, private languageService: LanguageService ) {
    this.languageService.getLanguageWelcomeWheareyou.subscribe( language => this.languageWelcomeWheareyou = language);
  }

  OnInit() {}

  onSubmit() {
    this.navigator.root(RouteCollection.account.welcome.myLocation, 'forward');
  }

}
