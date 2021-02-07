import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate, CanLoad {


  constructor(private _authServices: AuthService,
              private _router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this._authServices.validateToken().pipe(
      tap( valid => {
        if(!valid){
          this._router.navigateByUrl('/auth/login')
        }
      })
    )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
    return this._authServices.validateToken().pipe(
      tap( valid => {
        if(!valid){
          this._router.navigateByUrl('/auth/login')
        }
      })
    )
  }
}
