import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/modelsAuth';
import { LoginResponse, ErrorLoginResponse, User } from '../models/loginUser';
import { map, catchError, tap, delay } from 'rxjs/operators';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user : User
  private isLogged = new BehaviorSubject<boolean>(false)
  // getters
  get user(){
    return {...this._user}
  }
  // Emite true o false si el usuario ha sido logueado
  get UserHasLogged(): Observable<boolean> {
    return this.isLogged.asObservable()
  }

  constructor(private _http: HttpClient,
              private _router: Router) {}

  login( email:string, password: string){
    const url: string = 'http://localhost:1337/auth/local'
    // console.log(user);
    const body = new LoginUser(email,password)

    return this._http.post<LoginResponse>(url,body)
      .pipe(
        // Destruturacion
         tap(({jwt,user}) => {
           if(user.confirmed){
              // this.isLogged.next(true)
              localStorage.setItem('token', jwt)
              this._user = {
                id: user.id,
                email: user.email,
                username: user.username,
                confirmed: user.confirmed
              }
            }
          }),
          map( ( {user:{confirmed}} ) => {

            this.isLogged.next(confirmed)
            this._router.navigateByUrl('/dashboard')
            return confirmed
            }),
         catchError( ( _ : ErrorLoginResponse) => {
           alert('Error al iniciar session')
          this.isLogged.next(false)
          localStorage.clear()
          return of (false)
          } )
      )

  }

  register (newUser){

  }

  validateToken(): Observable<boolean> {
    const url: string = 'http://localhost:1337/users/me'

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this._http.get<User>(url,{ headers })
      .pipe(
       map( user => {
        this.isLogged.next(true)
        return user.confirmed} ),
       catchError(err => {
         this.isLogged.next(false)
         alert('Por favor inicie Session')
         this._router.navigateByUrl('/auth')
          return of(false)
        })
      )
  }

  logout(){
    this.isLogged.next(false)
    localStorage.removeItem('token')
  }

}
