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

  OnInit() { }

  onSubmit() {

    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      localStorage.setItem('location', JSON.stringify(
        {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        }
      ));
    };

    printCurrentPosition()

    // this.rs.setMyLocationLastBackDirection("/account/welcome/whe-are-you");

    this.navigator.root(RouteCollection.account.welcome.myLocation, 'forward');
  }

}
