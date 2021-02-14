import { Component, OnDestroy, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { PostResponse } from '../../models/PostResponse';

import { SeoService } from '@shared/services/seo/seo.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  slug: string;
  post: PostResponse;


  constructor(
               private seo: SeoService,
               private _ac : ActivatedRoute) { }

  ngOnInit(): void {
    this._ac.params.subscribe(params => this.slug = params.slug)
    this.getPost()
  }
  getPost() {
    this.post = this._ac.snapshot.data.post
    this.seo.getTagsForPost(this.post)
  }

  ngOnDestroy(){
    this.seo.deleteMetaTags()
  }

}
