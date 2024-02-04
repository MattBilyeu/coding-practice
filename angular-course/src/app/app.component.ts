import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultValue: string = 'teacher';
  answer: string = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted: boolean = false;

  suggestUserName() {
    this.signupForm.form.patchValue({
      userData: {
        username: 'Superuser'
      }
    })
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    const value = this.signupForm.value;
    this.user.username = value.userData.username
    this.user.email = value.userData.email
    this.user.secretQuestion = value.secret;
    this.user.answer = value.questionAnswer;
    this.user.gender = value.gender;
    form.reset()
  }
}