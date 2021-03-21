import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { PostResponse } from '../../models/PostResponse';

import { SeoService } from '@shared/services/seo/seo.service';
import { StrapiService } from '../../services/strapi.service';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  slug: string;
  // post: PostResponse;
  post$: Observable<PostResponse>

  constructor(
               private seo: SeoService,
               private _ac : ActivatedRoute,
               private _strapiServices: StrapiService) { }

  ngOnInit(): void {
    // this._ac.params.subscribe(params => this.slug = params.slug)
    // this.getPost()
    this.post$ = this._strapiServices.post$
    console.log(this.post$);
  }
  // getPost() {
  //   this._strapiServices.getPost(this.slug).subscribe(dataPost => {
  //     this.post = dataPost
  //     this.seo.getTagsForPost(this.post)
  //   })
  // }

  ngOnDestroy(){
    this.seo.deleteMetaTags()
  }

}
