import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('showMenu', [

      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)', }),
        animate('150ms cubic-bezier(0, 0, 0.2, 1)' , style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('100ms cubic-bezier(0.4, 0, 1, 1)', style({ opacity: 0, transform: 'scale(0.95)' })),
      ]),

    ]),

    trigger('flyOutMenu',[
      transition(':enter',[
        style(
          {
            opacity: 0 ,
            transform: 'translateY(0.25rem)'
          }),

          animate('200ms ease-out', style(
           {
              opacity: 1,
              transform: 'translateY(0)'
           }
          ))
      ]),

      transition(':leave',
      animate( '150ms ease-in',
      style(
        {
          opacity: 0,
          transform: 'trasnlateY(0.25rem)'
      })

      ))
    ])
  ]

})
export class NavbarComponent implements OnInit {

  showItemLogin = false
  isOpenMenu = false

  constructor(private _authServices: AuthService, private _router: Router) {
    this._authServices.UserHasLogged.subscribe(isLogged => this.showItemLogin = isLogged)
  }

  ngOnInit(): void {

  }

  toogleOpen ():void {
    this.isOpenMenu = !this.isOpenMenu
  }

  logout(){
    this._router.navigateByUrl('/auth')
    this._authServices.logout()
  }

  onClickedOutside(e: Event) {
    this.isOpenMenu = false
  }
}
