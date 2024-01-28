import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
  withRouterConfig,
} from '@angular/router';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  HashLocationStrategy,
  PathLocationStrategy,
  LocationStrategy,
} from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    provideAnimations(),
    importProvidersFrom(MonacoEditorModule.forRoot()),
  ],
};
