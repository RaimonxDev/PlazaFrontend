import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formUserRegister: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.newUser()
  }

  newUser(){
    this.formUserRegister = this.formBuilder.group({
      username : [],
      password: [],
      repeatPassword : [],
      email: [],
      dateOfBirth: [],
    })
  }
  isInvalid(field: string ){
    return this.formUserRegister.controls[field].errors && this.formUserRegister.controls[field].touched
  }

  registerUser(){
    console.log(this.formUserRegister.value);
  }



}
