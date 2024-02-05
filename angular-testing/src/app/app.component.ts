import { Component } from '@angular/core';

export interface UserInterface {
  id: string,
  name: string
}

export enum StatusEnum {
  ACTIVE = 'active',
  DRAFT = 'draft',
  ARCHIVED = 'archived'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  text: string = 'Placeholder';
  array: (string|number)[];


}
