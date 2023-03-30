import { AppNavigationService } from '@geor360/ecore';
import { RouteCollection } from 'src/shared/route-collection';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { RouteService } from '../../../services/route.service';
import { Geolocation, } from '@capacitor/geolocation';


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

  constructor(private navigator: AppNavigationService, private languageService: LanguageService, private rs : RouteService) {
    this.languageService.getLanguage.subscribe(language => this.contenido = language['wheAreYou']);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.navigator.root(RouteCollection.account.welcome.myLocation, 'forward');
  }

}
