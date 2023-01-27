import { Component, Injector, OnInit } from '@angular/core';
import { AppThemeService, ViewComponent } from '@geor360/ecore';

@Component({
    templateUrl: 'welcome.component.html',
    styleUrls: [
        'welcome.component.scss'
    ]
})
export class WelcomeComponent extends ViewComponent implements OnInit {

    private themeService: AppThemeService;

    text: string = this.localization.localize('test', 'app');

    constructor(_injector: Injector) {
        super(_injector);
        this.themeService = _injector.get(AppThemeService);
    }

    ngOnInit() {

    }

    changeTheme() {
        this.themeService.changeMode(this.themeService.mode == 'dark' ? 'light' : 'dark');
    }

    changeLanguage() {
        this.localization.changeLanguage(this.localization.currentLanguage == 'en_US' ? 'es_ES' : 'en_US');
        this.text = this.localization.localize('test', 'app');
    }

    openLoginModal() {
        this.navigation.root('/account/login', 'forward');
    }
}
