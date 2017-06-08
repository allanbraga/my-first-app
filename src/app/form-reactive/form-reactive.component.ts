import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  genders = ['male', 'female'];
  signForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.signForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, Validators.required),
        'email' : new FormControl(null,[Validators.required,Validators.email])
      }),
      'gender' : new FormControl('male',Validators.required)
    });
  }

  onSubmit(){
    console.log(this.signForm);
  }

}
