import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export type Foo = string;

const addId = <T>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id
  }
};

const user = {
  name: 'Jack'
};

const result = addId<{ name: string }>(user);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  objArray: Array<Foo>
}
