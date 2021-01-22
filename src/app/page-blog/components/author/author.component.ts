import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  urlImages : string = environment.urlImages;
  @Input() firtsName : String;
  @Input() lastName : String;
  @Input() emailAuthor : String;
  @Input() imageAuthor : String;
  @Input() dateArticle : Date;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.firtsName)
  }

}
