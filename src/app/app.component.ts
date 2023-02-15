import { Component } from '@angular/core';

import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  template: '<ion-app><ion-router-outlet></ion-router-outlet></ion-app>',
})
export class AppComponent {

  constructor() {
    if (typeof window !== 'undefined') {
      // estamos en una página web
    } else {
      const color = localStorage.getItem('mode') === 'dark'? '#05050f' : '#023AFF';
      StatusBar.setBackgroundColor({ color });
    }
  }

  ngOnInit(): void {
    const body: HTMLBodyElement = document.querySelector('body');
    const mql: MediaQueryList | undefined = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (event: any) => {
      if (event.matches) {
        body.classList.add('dark');
        body.classList.remove('light');
      } else {
        body.classList.add('light');
        body.classList.remove('dark');
      }
    };

    if (mql) {
      mql.addEventListener('change', handleThemeChange);
      handleThemeChange(mql);
    }
  }

}
