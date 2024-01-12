import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-course';
  evenNumbers = [2, 4];
  oddNumbers = [1, 3, 5];
  onlyOdd = true;
  value = 10;

  ngOnInit() {
    console.log('Initialized')
    const array = [5, 10, 100];
    setInterval(()=> {
      let i = Math.floor(Math.random()*3);
      console.log('Interval: ', array[i])
      this.value = array[i]
    }, 2000)
  }
}
