import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/routes';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideStore } from '@ngrx/store';
import { nkvReducer } from './app/store';
import { MainComponent } from './app/main.component';

if (environment.production) {
  enableProdMode();
}
console.log('AAAAAAAAAAAA')
bootstrapApplication(MainComponent, {providers: [provideRouter(routes), provideStoreDevtools()]}).catch(err => console.error(err));
 