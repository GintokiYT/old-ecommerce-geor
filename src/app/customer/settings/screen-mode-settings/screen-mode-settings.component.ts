import { Component, Injector, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { ViewComponent } from '@geor360/ecore';
// import { LoginService } from 'src/app/account/services/login.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-screen-mode-settings',
  templateUrl: './screen-mode-settings.component.html',
  styleUrls: ['./screen-mode-settings.component.scss', '../../../../theme/personalizado.scss'],
})
export class ScreenModeSettingsComponent extends ViewComponent implements OnInit {

  @ViewChildren('myItem') myItem: QueryList<ElementRef>;

  constructor(_injector: Injector, private settingsService: SettingsService) {
    super(_injector)
  }

  ngAfterViewInit() {
    this.myItem.forEach(item => item.nativeElement.classList.remove('active'));

    if(localStorage.getItem('defaultTheme') !== null) {
      switch(localStorage.getItem('defaultTheme')) {
        case 'Automático':
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
      localStorage.setItem('defaultTheme', 'Automático');
    }
  }

  ngOnInit() {
    // const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // const dark = darkModeMediaQuery.matches;

    // if(dark) {
    //   localStorage.setItem('themeDefault', 'dark');
    // } else {
    //   localStorage.setItem('themeDefault', 'dark');
    // }

    const colorStatusBar = localStorage.getItem('mode') === 'dark'? '#05050F' : '#023AFF'

    const metaTag = document.createElement("meta");
    metaTag.name = "theme-color";
    metaTag.content = colorStatusBar;
    document.getElementsByTagName("head")[0].appendChild(metaTag);
  }

  onBack() {
    this.navigation.root('/customer/settings/main-settings', 'back')
  }

  toggleTheme(theme: string) {
    const position: number = theme === 'Automático' ? 0 : theme === 'Claro' ? 1 : 2;
    const items = document.querySelectorAll('.item-theme');

    items.forEach(item => item.classList.remove('active'));
    items[position].classList.add('active')

    const themeDefault = localStorage.getItem('defaultTheme');
    const body: HTMLBodyElement = document.querySelector('body');

    switch(theme) {
      case 'Automático':
        const mql: MediaQueryList | undefined = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

        if(mql.matches) {
          this.changeThemeDark(body);
          // this.changeStatusBarWeb('dark');
          localStorage.setItem('mode', 'dark');
          this.changeStatusBarBackgroundAndColor();
        } else {
          this.changeThemeLight(body);
          // this.changeStatusBarWeb('light');
          localStorage.setItem('mode', 'light');
          this.changeStatusBarBackgroundAndColor();
        }
        localStorage.setItem('defaultTheme', 'Automático');
      break;
      case 'Claro':
        this.changeThemeLight(body);
        // this.changeStatusBarWeb('light');
        this.changeStatusBarBackgroundAndColor();
      break;
      case 'Oscuro':
        this.changeThemeDark(body);
        // this.changeStatusBarWeb('dark');
        this.changeStatusBarBackgroundAndColor();
      break;
    }

    this.settingsService.setTheme(theme);
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
    localStorage.setItem('defaultTheme', 'Claro');
  }

  changeThemeDark(body: HTMLBodyElement) {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('mode', 'dark');
    localStorage.setItem('defaultTheme', 'Oscuro');
  }

  // changeStatusBarWeb(theme: string) {
  //   const colorStatusBar = theme === 'dark'? '#05050F' : '#023AFF'

  //   const metaTags = document.getElementsByTagName("meta");
  //   let metaTheme;
  //   for (var i = 0; i < metaTags.length; i++) {
  //     if (metaTags[i].name === "theme-color") {
  //       metaTheme = metaTags[i];
  //       break;
  //     }
  //   }
  //   metaTheme.content = colorStatusBar;
  // }

  changeStatusBarBackgroundAndColor() {
    const color = localStorage.getItem('mode') === 'dark'? '#05050f' : '#FFFFFF';
    StatusBar.setBackgroundColor({ color });

    if( localStorage.getItem('mode') === 'dark' ) {
      StatusBar.setStyle({ style: Style.Dark });
    } else {
      StatusBar.setStyle({ style: Style.Light });
    }
  }

  onToBack(route: string) {
    this.navigation.back(route);
  }
}
