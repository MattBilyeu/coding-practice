import { Component } from '@angular/core';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CounterControlsComponent, CounterOutputComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
