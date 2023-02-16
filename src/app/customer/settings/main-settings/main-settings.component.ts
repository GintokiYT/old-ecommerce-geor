import { Component, OnInit, Injector, ViewChild, ElementRef } from '@angular/core';
import { ViewComponent } from '@geor360/ecore';

import { Router } from '@angular/router';
import { SettingsService } from '../../../services/settings.service';
import { LanguageService } from '../../../services/language.service';

interface Contenido {
  title: string;
  mydata: string;
  password: string;
  language: string;
  screenmode: string;
  about: string;
  signoff: string;
}

@Component({
  selector: 'main-settings',
  templateUrl: './main-settings.component.html',
  styleUrls: ['./main-settings.component.scss', '../../../../theme/personalizado.scss'],
})
export class MainSettingsComponent extends ViewComponent implements OnInit {

  contenido: Contenido;

  statusModal: boolean = false;

  themeApp: string = '';
  currentLanguage: string = '';

  constructor(_injector: Injector, private router: Router, private settingsService: SettingsService, private languageService: LanguageService) {
    super(_injector);
    this.settingsService.getTheme.subscribe( theme => this.themeApp = theme );
    this.settingsService.getLanguage.subscribe( language => this.currentLanguage = language);
    this.languageService.getLanguage.subscribe( language => this.contenido = language['mainSettings'])
  }

  ngOnInit() {}

  onBack() {
    const routeBack: string = localStorage.getItem('back') || '';
    localStorage.setItem('back', this.router.url)
    this.navigation.back(routeBack)
  }

  onSignOff() {
    this.statusModal = true;
  }

  receiveStatus(event: boolean) {
    this.statusModal = event
  }

  goNextPage(route: string) {
    this.navigation.forward(route);
  }

  onToBack(route: string) {
    this.navigation.back(route);
  }
}
