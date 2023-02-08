import { Component, Injector, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { ViewComponent } from '@geor360/ecore';
import { LoginService } from 'src/app/account/services/login.service';

@Component({
  selector: 'app-screen-mode-settings',
  templateUrl: './screen-mode-settings.component.html',
  styleUrls: ['./screen-mode-settings.component.scss'],
})
export class ScreenModeSettingsComponent extends ViewComponent implements OnInit {

  @ViewChildren('myItem') myItem: QueryList<ElementRef>;

  constructor(_injector: Injector, private appService: LoginService) {
    super(_injector)
  }

  ngAfterViewInit() {
    this.myItem.forEach(item => item.nativeElement.classList.remove('active'));

    if(localStorage.getItem('themeApp') !== null) {
      switch(localStorage.getItem('themeApp')) {
        case 'Autómático':
          this.myItem.toArray()[0].nativeElement.classList.add('active')
        break;
        case 'Claro':
          this.myItem.toArray()[1].nativeElement.classList.add('active')
        break;
        case 'Oscuro':
          this.myItem.toArray()[2].nativeElement.classList.add('active')
        break;
      }
    } else {
      this.myItem.toArray()[0].nativeElement.classList.add('active');
      localStorage.setItem('themeApp', 'Autómático');
    }
  }

  ngOnInit() {}

  onBack() {
    this.navigation.root('/customer/settings/main-settings', 'back')
  }

  toggleTheme(theme: string) {
    this.myItem.forEach(item => {
      item.nativeElement.addEventListener('click', () => {
        this.myItem.forEach(item => item.nativeElement.classList.remove('active'));
        item.nativeElement.classList.add('active');
      })
    })

    localStorage.setItem('themeApp', theme);

    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const dark = darkModeMediaQuery.matches;
    const body = document.querySelector('body');

    if(theme === 'Autómático') {
      if(dark) {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('mode', 'dark');
        this.changeThemeStatusBar();
      } else {
        body.classList.remove('dark');
        body.classList.add('light');
        localStorage.setItem('mode', 'light');
        this.changeThemeStatusBar();
      }
      localStorage.setItem('themeApp', 'Autómático');
      this.appService.setThemeApp('Autómático');
    } else if(theme === 'Claro') {
      body.classList.remove('dark');
      body.classList.add('light');
      localStorage.setItem('mode', 'light');
      this.changeThemeStatusBar();
      localStorage.setItem('themeApp', 'Claro');
      this.appService.setThemeApp('Claro');
    } else {
      body.classList.remove('light');
      body.classList.add('dark');
      localStorage.setItem('mode', 'dark');
      this.changeThemeStatusBar();
      localStorage.setItem('themeApp', 'Oscuro');
      this.appService.setThemeApp('Oscuro');
    }
  }

  changeThemeStatusBar() {
    const color = localStorage.getItem('mode') === 'dark'? '#05050f' : '#023AFF';
    StatusBar.setBackgroundColor({ color });
  }
}
