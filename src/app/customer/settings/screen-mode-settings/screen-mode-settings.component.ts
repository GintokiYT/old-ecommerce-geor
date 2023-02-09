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

  ngOnInit() {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const dark = darkModeMediaQuery.matches;

    if(dark) {
      localStorage.setItem('themeDefault', 'dark');
    } else {
      localStorage.setItem('themeDefault', 'dark');
    }
  }

  onBack() {
    this.navigation.root('/customer/settings/main-settings', 'back')
  }

  toggleTheme(theme: string) {
    const position: number = theme === 'Autómático' ? 0 : theme === 'Claro' ? 1 : 2;
    const items = document.querySelectorAll('.item-theme');

    items.forEach(item => item.classList.remove('active'));
    items[position].classList.add('active')

    const themeDefault = localStorage.getItem('themeDefault');
    const body: HTMLBodyElement = document.querySelector('body');

    switch(theme) {
      case 'Autómático':
        if(themeDefault === 'dark') {
          this.changeThemeDark(body);
        } else {
          this.changeThemeLight(body);
        }
        localStorage.setItem('themeApp', 'Autómático');
      break;
      case 'Claro':
        this.changeThemeLight(body);
      break;
      case 'Oscuro':
        this.changeThemeDark(body);
      break;
    }

    this.appService.setThemeApp(theme);
    this.changeThemeStatusBar();
  }

  changeThemeStatusBar() {
    const color: string = localStorage.getItem('mode') === 'dark'? '#05050f' : '#023AFF';
    StatusBar.setBackgroundColor({ color });
  }

  changeThemeLight(body: HTMLBodyElement) {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('mode', 'light');
    localStorage.setItem('themeApp', 'Claro');
  }

  changeThemeDark(body: HTMLBodyElement) {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('mode', 'dark');
    localStorage.setItem('themeApp', 'Oscuro');
  }
}
