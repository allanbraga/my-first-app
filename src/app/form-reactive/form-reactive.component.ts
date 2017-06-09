import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  genders = ['male', 'female'];
  signForm : FormGroup;
  forbiddenUserNames = ['Chris','Anna'];

  constructor() { }

  ngOnInit() {
    this.signForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmail.bind(this))
      }),
      'gender' : new FormControl('male',Validators.required),
      'hobbies' : new FormArray([])

    });

    // adding observable into value changes
    this.signForm.valueChanges.subscribe(
      (value) => console.log(value)
    );

    // adding observable into status changes
    this.signForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
  }

  onSubmit(){
    console.log(this.signForm);
  }

  onAddHobby(){
    const formControl = new FormControl(null,Validators.required);
    (<FormArray>this.signForm.get('hobbies')).push(formControl);
  }

  // custom validators example.
  forbiddenNames(formControl:FormControl):{[s:string] : boolean }{
    if(this.forbiddenUserNames.indexOf(formControl.value) !== -1){
      return {'nameIsForbidden':true};
    }
    return null;
  }
  // async custom validators
  forbiddenEmail(formControl:FormControl): Promise<any> | Observable<any> {
    const promisse = new Promise<any>((resolve , reject) => {
      setTimeout(() => {
        if(formControl.value === 'test@test.com'){
          resolve({'emailIsForbidden':true});
        }else {
          resolve(null);
        }
      },1500);
    });
    return promisse;
  }
}
