import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { MonacoEditorModule } from 'ngx-monaco-editor';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)),
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    provideAnimations(),
    importProvidersFrom(MonacoEditorModule.forRoot()),
  ],
};
