import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export type Foo = string;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-testing';
  text: SafeHtml;
  unsafe: string = `
  <h1>Title Text<h1>
  <script>alert('Owned')</script>
  <p>Paragraph text would go here.</p>
  `;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.text = this.domSanitizer.sanitize(SecurityContext.HTML, this.unsafe)
  }
}
