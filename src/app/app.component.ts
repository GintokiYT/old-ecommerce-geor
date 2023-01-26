import { Component } from '@angular/core';

import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  template: '<ion-app><ion-router-outlet></ion-router-outlet></ion-app>',
})
export class AppComponent {

  constructor() {
    const color = localStorage.getItem('mode') === 'dark'? '#05050f' : '#023AFF';
    StatusBar.setBackgroundColor({ color });
  }

}
