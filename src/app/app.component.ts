import { Component } from '@angular/core';

import { StatusBar, Style } from '@capacitor/status-bar';
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
      this.changeStatusBarBackgroundAndColor();
    }
  }

  changeStatusBarBackgroundAndColor() {
    const themeColor: string = document.querySelector('body').classList.contains('dark')? 'dark' : 'light';

    if(themeColor === 'dark') {
      StatusBar.setBackgroundColor({ color: '#05050f' });
      StatusBar.setStyle({ style: Style.Dark })
    } else {
      StatusBar.setBackgroundColor({ color: '#ffffff' });
      StatusBar.setStyle({ style: Style.Light })
    }
  }

  ngOnInit(): void {
    this.changeStatusBarBackgroundAndColor();
    localStorage.setItem('defaultTheme', this.themeDefault);

    const body: HTMLBodyElement = document.querySelector('body');
    const mql: MediaQueryList | undefined = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

    const handleThemeChange = (event: any) => {
      if(this.themeDefault === 'Automático') {
        if(event.matches === true) {
          this.changeModeDark(body);
        } else {
          this.changeModeLight(body);
        }
        this.changeStatusBarBackgroundAndColor();
      }
    };

    if (mql) {
      mql.addEventListener('change', handleThemeChange);
      handleThemeChange(mql);
    }

    // Limpiar rutas Backs
    //TODO: Mantener comentado en desarrollo y descomentar al generar al APK
   // localStorage.setItem('back', '');
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
