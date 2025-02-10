import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'wx-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
  imports: [RouterModule],
  standalone: true

})
export class DummyComponent implements OnInit {

  constructor(private readonly testService: TestService) { }

  ngOnInit(): void {
    this.testService.log()
  }

}
