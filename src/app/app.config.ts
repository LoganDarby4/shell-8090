import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideStore, MetaReducer } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import HC_Accessibility from 'highcharts/modules/accessibility';
import * as Highcharts from 'highcharts';
import '@angular/localize/init';
import { logger } from './store/meta-reducers/logger.meta-reducer';

HC_Accessibility(Highcharts);

export const metaReducers: MetaReducer[] = [logger];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
    }, { metaReducers }),
    provideEffects([]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideAnimations(),
  ],
};
