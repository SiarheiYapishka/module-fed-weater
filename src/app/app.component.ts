import { Component, inject, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherWidgetModule } from './weather-widget/weather-widget.module';
import { ActionReducer, META_REDUCERS, ReducerManager, Store } from '@ngrx/store';
import { nkvReducer, nkvSelector } from './store';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

@Component({
  selector: 'wx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, WeatherWidgetModule],
  providers: [{provide: META_REDUCERS, useValue: [debug]}]
})
export class AppComponent implements OnInit{
  store: Store = inject(Store)
  title = 'ng-mf-weather';
  $test = this.store.selectSignal(nkvSelector);
  rdcManager = inject(ReducerManager)

  ngOnInit(): void {
    console.log('MAMA')
    this.store.addReducer('nkv', nkvReducer);
    
    
  }
}
