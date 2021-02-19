import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from "@shared/services/seo/seo.service";
import { HomeService } from '../../services/home.service';
import { authorInfoResponseShort } from '../../models/authorInfoResponse';
import { environment } from '../../../../environments/environment';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  author: authorInfoResponseShort[];
  urlWebsite = environment.urlWebsite;

  constructor( private seo: SeoService, private homeService: HomeService) { }

  ngOnInit(): void {
    this.seo.getTagForPage('home')
    this.homeService.getInfoAuthor().subscribe(author => {this.author = author})
  }


  ngOnDestroy(){
      this.seo.deleteMetaTags()
  }

}
