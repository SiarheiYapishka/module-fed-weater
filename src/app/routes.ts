import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
export const routes: Routes = [
  {
    path: '',
    component: AppComponent, 
    children: [
      {
        path: 'sales',
        loadChildren: () =>
          import('./weather-widget/weather-widget.module').then(
            (m) => m.WeatherWidgetModule
          ),
      },
      {
        path: 'preorder',
        loadComponent: () =>
          import('./dummy/dummy.component').then(
            (m) => m.DummyComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'sales',  
      }
    ]
  }
];
