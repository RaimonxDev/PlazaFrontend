import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../../models/PostResponse';
import { StrapiService } from '../../services/strapi.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit {
  urlWebsite = environment.urlWebsite
  posts: PostResponse[] = []
  errorData = false

  constructor( private _strapiServices: StrapiService,
               private _router: Router
  ) { }

  ngOnInit(): void {
      this._strapiServices.getPosts().subscribe( (articles: PostResponse[]) => {
      this.posts = articles
    },err => this.errorData = true )
  }

  goToPost(slug: string){
    this._router.navigate(['blog/post', slug])
  }

  goCategories(category){
    this._router.navigate(['categories', category])
  }

}
