import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { API_BASE_URL, AppConfigurationService, AppConsts, AppSessionService, AppThemeService, CoreModule, CoreTranslations, IAppCoreConfig, XmlHttpRequestHelper } from '@geor360/ecore';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DOCUMENT, PlatformLocation } from '@angular/common';
import { ThemeDetection } from '@awesome-cordova-plugins/theme-detection/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { OpenNativeSettings } from '@awesome-cordova-plugins/open-native-settings/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { AppTranslations } from 'src/shared/translate';

function appInitializerFactory(injector: Injector) {
  return () => {
    return new Promise<boolean>((resolve, reject) => {

      const platform: Platform = injector.get(Platform);
      const document: Document = injector.get(DOCUMENT);
      const platformLocation: PlatformLocation = injector.get(PlatformLocation);

      AppConsts.baseHref = getBaseHref(platformLocation);
      const appRootUrl = getDocumentOrigin() + AppConsts.baseHref;

      getApplicationConfig(appRootUrl, () => {

        platform.ready().then(() => {

          const appSession: AppSessionService = injector.get(AppSessionService);
          //const sessionProxie: SessionServiceProxy = injector.get(SessionServiceProxy);
          const configurationService: AppConfigurationService = injector.get(AppConfigurationService);
          const themeService: AppThemeService = injector.get(AppThemeService);

          setupConfig(document, configurationService);
          themeService.init().then(() => {
            resolve(true);
            
            //sessionProxie.getCurrentLoginInformations().subscribe({
            //  next: (response) => {
            //    appSession.save(response.user, response.application);
            //   resolve(true);
            //  },
            //  error: () => {
            //    resolve(true);
            //  }
            //});

          });

        });

      });
    });

  };
}

const getDocumentOrigin = () => {
  if (!document.location.origin)
    return `${document.location.protocol}//${document.location.hostname}${(document.location.port ? ':' + document.location.port : '')}`;

  return document.location.origin;
}

const getBaseHref = (platformLocation: PlatformLocation): string => {
  const baseUrl = platformLocation.getBaseHrefFromDOM();
  return baseUrl ? baseUrl : '/';
}

const setupConfig = (doc: Document, configuration: AppConfigurationService) => {

  const win: Window | undefined = doc.defaultView as any;

  if (win && typeof (window as any) !== 'undefined') {
    const config: IAppCoreConfig = {
      translations: {
        core: CoreTranslations,
        app: AppTranslations
      },
      google: {
        webClientId: undefined,
        maps: {
          maxZoom: 16,
          minZoom: 5,
          defaultZoom: 16
        }
      }
    }

    configuration.set(config);
  }
};

const remoteServiceBaseUrl = () => {
  return AppConsts.remoteServiceUrl;
}

const getApplicationConfig = (appRootUrl: string, callback: () => void) => {
  const url: string = `${appRootUrl}assets/${environment.appConfig}`;
  const method: string = 'GET';

  XmlHttpRequestHelper.ajax(method, url, [], null, (success: boolean, response: any) => {
    AppConsts.baseUrl = response.appBaseUrl;
    AppConsts.remoteServiceUrl = response.remoteServiceBaseUrl;

    callback();
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'ios' }),
    CoreModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializerFactory, deps: [Injector], multi: true, },
    { provide: API_BASE_URL, useFactory: remoteServiceBaseUrl },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //Cordova Plugins
    ThemeDetection,
    AndroidPermissions,
    OpenNativeSettings,
    Diagnostic
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }