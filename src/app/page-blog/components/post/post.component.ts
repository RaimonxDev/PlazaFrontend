import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../../models/ArticlesResponse';
import { StrapiService } from '../../services/strapi.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  slug: string;
  posts: PostResponse[];
  post: PostResponse;
  imagesUrl = environment.urlImages
  constructor( private _strapiServices: StrapiService,
               private _router : ActivatedRoute   ) { }

  ngOnInit(): void {
    this._router.params.subscribe(params => this.slug = params.slug)
    this.getPost()
  }

  getPost(): void{
    this._strapiServices.getOnlyPost(this.slug).subscribe( post => this.post = post[0] )
  }

}
