import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WeatherWidgetModule } from './weather-widget/weather-widget.module';
@Component({
  selector: 'wx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, WeatherWidgetModule]
})
export class AppComponent implements OnInit{
  title = 'ng-mf-weather';

  ngOnInit(): void {
    console.log('MAMA')
  }
}
