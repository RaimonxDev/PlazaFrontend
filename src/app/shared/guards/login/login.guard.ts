import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean > | boolean {
    return this.authService.UserHasLogged.pipe(
      // tap(loggen =>{
      //   if {}
      // })
    )
    // return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean  {


    return true;
  }
}
