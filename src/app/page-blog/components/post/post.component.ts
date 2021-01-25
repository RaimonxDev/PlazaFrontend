import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription} from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { PostResponse } from '../../models/PostResponse';
import { StrapiService } from '../../services/strapi.service';

// Seo
import { Meta, Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import { SeoService } from '@shared/services/seo.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  slug: string;
  post: PostResponse;


  constructor( private _strapiServices: StrapiService,
               private _router : ActivatedRoute,
               private seo: SeoService,
               private _ac : ActivatedRoute) { }

  ngOnInit(): void {
    this._router.params.subscribe(params => this.slug = params.slug)

    this.getPost()
  }

  // getPost() {
  //   this._strapiServices.getOnlyPost(this.slug)
  //     .subscribe( (post: PostResponse) => {
  //       this.post = post
  //       this.seo.getTagsForPost(post)
  //     },
  //     err => console.log(`err`));
  // }
  getPost() {
    this.post = this._ac.snapshot.data.post
    this.seo.getTagsForPost(this.post)
  }

  ngOnDestroy(){
    this.seo.deleteMetaTags()
  }

}
