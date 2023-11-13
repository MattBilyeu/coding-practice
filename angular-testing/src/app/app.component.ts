import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testing';
  editorContent: string = '';

  editorConfig = {
    base_url: "/tinymce",
    suffix: ".min",
    plugins: "lists link image table wordcount",
    menubar: true, // Default is true - including because it can be set to false or be set to include only certain tabs
    toolbar: "formats numlist bullist bold italic alignleft aligncenter alignright justify indent outdent" // Can also customize with what to include
  }

  constructor(private sanitizer: DomSanitizer){}

  submit() {
    console.log(this.editorContent);
    console.log('config data is a typeof: ',typeof this.editorContent);
  }

  sanitizeHTML(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html); // Needed because Angular won't trust the HTML and will block it
  }
}
