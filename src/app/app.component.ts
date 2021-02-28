import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../environments/environment.prod';
import { filter } from 'rxjs/operators';
import * as AOS from 'aos';
declare var gtag

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'plazaFrontend';

  constructor(private _router: Router) {
    const navEvents$ = this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )

    navEvents$.subscribe((event: NavigationEnd) => {
      gtag('config', environment.GA, {
        'page_path': event.urlAfterRedirects
      })
    })
  }

  ngOnInit() {
    AOS.init({
      once: true,
    });
  }

}
