import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../page-blog/services/strapi.service';
import { AboutService } from './services/about.service';
import { AboutResponse } from './services/models/aboutResponse';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  content: AboutResponse;

  constructor(private _aboutServices: AboutService) { }

  ngOnInit(): void {
    this.getContentAbout()
  }
  getContentAbout (){
    this._aboutServices.getContentAbout().subscribe(content => this.content = content )
  }

}
