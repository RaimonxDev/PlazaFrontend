import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../../models/ArticlesResponse';
import { StrapiService } from '../../services/strapi.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit {
  urlImages = environment.urlImages
  posts: PostResponse[] = []

  constructor( private _strapiServices: StrapiService,
               private _router: Router
  ) { }

  ngOnInit(): void {
      this._strapiServices.getPosts().subscribe( (articles: PostResponse[]) => {
      this.posts = articles
    })
  }

  goToPost(slug: string){
    this._router.navigate(['blog/post', slug])
  }

}
