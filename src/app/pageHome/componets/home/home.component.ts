import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from "@shared/services/seo/seo.service";
import { HomeService } from '../../services/home.service';
import { authorInfoResponseShort } from '../../models/authorInfoResponse';
import { environment } from '../../../../environments/environment';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  author: authorInfoResponseShort[];
  APIurl = environment.APIurl;

  constructor( private seo: SeoService, private homeService: HomeService, private _router: Router ) { }

  ngOnInit(): void {

    this.seo.getTagForPage(this._router.url )
    this.homeService.getInfoAuthor().subscribe(author => {this.author = author})
  }


  ngOnDestroy(){
      this.seo.deleteMetaTags()
  }

}
