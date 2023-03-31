import { AppNavigationService } from '@geor360/ecore';
import { RouteCollection } from 'src/shared/route-collection';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { RouteService } from '../../../services/route.service';
import { Geolocation, } from '@capacitor/geolocation';

import { Platform } from '@ionic/angular';

interface Contenido {
  subTitle: string;
  description: string;
  button: string;
}

@Component({
  selector: 'app-whe-are-you',
  templateUrl: './whe-are-you.component.html',
  styleUrls: ['whe-are-you.component.scss']
})
export class WheAreYouComponent {

  contenido: Contenido;

  constructor(
    private navigator: AppNavigationService,
    private languageService: LanguageService,
    private rs : RouteService,
    private platform: Platform
    ) {
    this.languageService.getLanguage.subscribe(language => this.contenido = language['wheAreYou']);
  }

  ngOnInit(): void {
    if (this.platform.is('android')) {
      this.platform.backButton.subscribe(() => {
        this.navigator.back('/account/welcome/select-country')
      });
    }
  }

  onSubmit() {
    this.navigator.forward(RouteCollection.account.welcome.myLocation);
  }

}
