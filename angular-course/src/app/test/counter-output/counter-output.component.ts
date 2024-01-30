import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTest } from '../store/test.selector';

@Component({
  selector: 'app-counter-output-test',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  count$: Observable<number>;
  // doubleCount$: Observable<number>;

  constructor(private store: Store<{test: number}>) {
    this.count$ = store.select(selectTest)
  }


}