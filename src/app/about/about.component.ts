import { Component, OnInit, OnDestroy } from '@angular/core';
import { AboutService } from './services/about.service';
import { AboutResponse } from './services/models/aboutResponse';
import { SeoService } from '../shared/services/seo/seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  content: AboutResponse;

  constructor(private _aboutServices: AboutService, private _seoServices: SeoService, private _router: Router) { }

  ngOnInit(): void {
    this._seoServices.getTagForPage(this._router.url)
    this.getContentAbout()
  }
  getContentAbout (){
    this._aboutServices.getContentAbout().subscribe(content => this.content = content )
  }
  ngOnDestroy () {
    this._seoServices.deleteMetaTags()
  }

}
