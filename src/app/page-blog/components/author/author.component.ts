import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  APIurl : string = environment.APIurl;
  @Input() firtsName : string;
  @Input() lastName : string;
  @Input() emailAuthor : string;
  @Input() imageAuthor : string;
  @Input() dateArticle : Date;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.firtsName)
  }

}
