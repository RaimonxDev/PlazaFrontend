import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { breadcrumbs } from '../../models/breadcrums';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  breadCrumbs$: Subscription
  parentRoute: string;
  childrenRoute:string;
  currentRoute: string;

  constructor(private router: Router) {
    this.breadCrumbs$ = this.getBreadcrumbs()
      .subscribe( breadcrumbs => {
        this.parentRoute = breadcrumbs.parentRoute
        this.childrenRoute = breadcrumbs.childrenRoute,
        this.currentRoute = breadcrumbs.currentRoute
      })
  }

  ngOnInit(): void {
  }

  getBreadcrumbs(): Observable<breadcrumbs>{
    return this.router.events.pipe
    (
      filter((event: ChildActivationEnd) => event instanceof ChildActivationEnd ),
      take(1),
      map(event => {
       return {
         'parentRoute': event.snapshot.data.title,
         'childrenRoute': event.snapshot.firstChild.data.title,
         'currentRoute': event.snapshot.firstChild.params.slug
       }
       })
        )

  }

  ngOnDestroy(){
    this.breadCrumbs$.unsubscribe()
  }

}
