import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-icon-loader',
  templateUrl: './icon-loader.component.html',
  styleUrls: ['./icon-loader.component.scss']
})
export class IconLoaderComponent implements OnInit {

  isLoad: boolean = false;
  constructor(private _router : Router) {

    this._router.events.subscribe(event => {
      if( event instanceof NavigationStart){
        this.isLoad = true
      }
      if (event instanceof NavigationEnd){
        this.isLoad = false
      }

    })


   }


  ngOnInit(): void {
  }

}
