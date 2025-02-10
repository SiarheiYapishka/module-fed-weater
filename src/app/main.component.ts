import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'wx-super-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class MainComponent{
  title = 'ng-mf-weather';

}
