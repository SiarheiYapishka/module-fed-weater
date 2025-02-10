import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdDirective } from './ad.directive';
import { WeatherWidgetRoutingModule } from './weather-widget-routing.module';
import { WeatherWidgetComponent } from './weather-widget.component';

@NgModule({
  declarations: [WeatherWidgetComponent],
  imports: [CommonModule, WeatherWidgetRoutingModule, FormsModule, AdDirective],
})
export class WeatherWidgetModule {}
