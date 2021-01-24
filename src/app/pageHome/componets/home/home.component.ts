import { Component, OnDestroy, OnInit } from '@angular/core';
import { SeoService } from "@shared/services/seo.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {



  constructor( private seo: SeoService) { }

  ngOnInit(): void {
    this.seo.getTagForPage('home')
  }


  ngOnDestroy(){
      this.seo.deleteMetaTags()
  }

}
