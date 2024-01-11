import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course';
  evenNumbers = [2, 4];
  oddNumbers = [1, 3, 5];
  onlyOdd = true
}
