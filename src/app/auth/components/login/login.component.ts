import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { takeUntil} from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  openModal = false
  unsubscribe$ = new Subject();

  constructor(private formBuilder: FormBuilder,
              private _auth : AuthService,
            ) {

    this.buildForm()
   }

  formUserLogin: FormGroup

  private buildForm() {
    this.formUserLogin = this.formBuilder.group ({
      email: ['ramon@gmail.com', [Validators.required, Validators.email]],
      password: ['22820511bf', [Validators.required]]
    });
  }
  ngOnInit(): void {
      this._auth.UserHasLogged
      .pipe(takeUntil(this.unsubscribe$))
        .subscribe()
  }

  isInvalid(field: string ){
    return this.formUserLogin.controls[field].errors && this.formUserLogin.controls[field].touched
  }


  loginUser(){
    const {email, password} = this.formUserLogin.value
    this._auth.login( email,password ).subscribe()
  }

  validar(){
    this._auth.validateToken().subscribe()
  }

  ngOnDestroy() {
    this.unsubscribe$.next(),
    this.unsubscribe$.complete();
  }

}
