import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { SeoService } from "@shared/services/seo/seo.service";
import { HomeService } from '../../services/home.service';

// Models
import { authorInfoResponseShort } from '../../models/authorInfoResponse';
import { environment } from '../../../../environments/environment';

// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, OnDestroy {

  author: authorInfoResponseShort[];
  APIurlDevImages = environment.APIurlDevImages;

  constructor( private seo: SeoService, private homeService: HomeService, private _router: Router ) { }

  ngOnInit(): void {

    this.seo.getTagForPage(this._router.url )
    this.homeService.getInfoAuthor().subscribe(author => {this.author = author})
  }


  ngOnDestroy(){
      this.seo.deleteMetaTags()
  }

}
