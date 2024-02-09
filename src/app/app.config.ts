import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CustomPreloadingStrategy } from './utils/custom-preloading';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(CustomPreloadingStrategy)), provideAnimationsAsync()]
};
