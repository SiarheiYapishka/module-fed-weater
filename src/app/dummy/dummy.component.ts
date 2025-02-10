import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { RouterLink, RouterModule } from '@angular/router';
import { nkvAction } from '../store';
import { provideStore, Store, StoreModule } from '@ngrx/store';

@Component({
  selector: 'wx-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
  imports: [RouterModule],
  providers: [],
  standalone: true

})
export class DummyComponent implements OnInit {

  constructor(private readonly testService: TestService, private store: Store) { }

  ngOnInit(): void {
    this.testService.log()
  }

  a() {
    this.store.dispatch(nkvAction())
  }

}
