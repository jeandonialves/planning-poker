import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthService } from '@domain/auth/services/auth.service';
import { pt_BR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { provideHttpClient } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';
import pt from '@angular/common/locales/pt';

import { appRoutes } from './app.routes';

registerLocaleData(pt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideNzI18n(pt_BR),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideAppInitializer(() => inject(AuthService).load()),
  ],
};
