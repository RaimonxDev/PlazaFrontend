import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../../models/PostResponse';
import { StrapiService } from '../../services/strapi.service';
import { SeoService } from '../../../shared/services/seo/seo.service';

@Component({
  selector: 'app-home-blog',
  templateUrl: './home-blog.component.html',
  styleUrls: ['./home-blog.component.scss']
})
export class HomeBlogComponent implements OnInit, OnDestroy {
  APIurl = environment.APIurl
  posts: PostResponse[] = []
  errorData = false

  constructor( private _strapiServices: StrapiService,
               private _router: Router,
               private _seoService: SeoService
  ) { }

  ngOnInit(): void {
      this._seoService.getTagForPage( this._router.url)

      this._strapiServices.getPosts().subscribe( (articles: PostResponse[]) => {
        this.posts = articles
      },err => this.errorData = true )
    }

    goToPost(slug: string){
      this._router.navigate(['blog', slug])
    }

    goCategories(category){
      this._router.navigate(['categories', category])
    }

  ngOnDestroy(){
    this._seoService.deleteMetaTags()
  }

}
