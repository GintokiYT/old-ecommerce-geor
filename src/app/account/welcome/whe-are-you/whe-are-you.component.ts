import { AppNavigationService } from '@geor360/ecore';
import { RouteCollection } from 'src/shared/route-collection';
import { Component } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { RouteService } from '../../../services/route.service';

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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        // Aquí puedes utilizar las coordenadas para mostrar la ubicación del usuario en un mapa o realizar otras acciones.
        console.log(lat, lng);
      });
    } else {
      // Si el navegador del usuario no es compatible con la geolocalización, puedes mostrar un mensaje de error o realizar otra acción.
    }

    this.rs.setMyLocationLastBackDirection("/account/welcome/whe-are-you");
    this.navigator.root(RouteCollection.account.welcome.myLocation, 'forward');
  }

}
