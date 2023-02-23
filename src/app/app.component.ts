import { Component } from '@angular/core';

import { StatusBar } from '@capacitor/status-bar';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  template: '<ion-app><ion-router-outlet></ion-router-outlet></ion-app>',
})
export class AppComponent {

  themeDefault: string;

  constructor(private settingsService: SettingsService) {
    this.settingsService.getTheme.subscribe( theme => this.themeDefault = theme );
    if (typeof window !== 'undefined') {
      // estamos en una página web
    } else {
      const color = localStorage.getItem('mode') === 'dark'? '#05050f' : '#023AFF';
      StatusBar.setBackgroundColor({ color });
    }
  }

  ngOnInit(): void {
    localStorage.setItem('defaultTheme', this.themeDefault);

    const body: HTMLBodyElement = document.querySelector('body');
    const mql: MediaQueryList | undefined = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (event: any) => {
      if(this.themeDefault === 'auto') {
        if(event.matches === true) {
          this.changeModeDark(body);
        } else {
          this.changeModeLight(body);
        }
      }
    };

    if (mql) {
      mql.addEventListener('change', handleThemeChange);
      handleThemeChange(mql);
    }
  }

  changeModeLight(body: HTMLBodyElement) {
    body.classList.add('light');
    body.classList.remove('dark');
    localStorage.setItem('mode', 'light');
  }

  changeModeDark(body: HTMLBodyElement) {
    body.classList.add('dark');
    body.classList.remove('light');
    localStorage.setItem('mode', 'dark');
  }

}
