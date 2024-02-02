import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    const constructedObj = {
      test: 'Test Successful!!',
      name: form.value.username,
      email: form.value.email,
      question: form.value.secret
    };
    console.log(constructedObj);
  }
}