import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('f') signUpForm : NgForm;

  genders = ['female','male'];

  user = {
    username: '',
    mail: '',
    secret : '',
    gender: '',
  };

  submited = false;

  constructor() { }

  ngOnInit() {
  }

  /*onSubmit(form:NgForm){
    console.log(form);
  }*/

  onSubmit(){
   console.log(this.signUpForm);
    this.user.username = this.signUpForm.value.userData.username;
    this.user.mail = this.signUpForm.value.userData.email;
    this.user.secret = this.signUpForm.value.secret;
    this.user.gender = this.signUpForm.value.gender;
    this.submited = true;
    this.signUpForm.reset();
  }

  suggestUserName(){
    const suggestName = 'Super User';
    this.signUpForm.form.patchValue({
      userData:{
        username : suggestName
      }
    });
  }
}
