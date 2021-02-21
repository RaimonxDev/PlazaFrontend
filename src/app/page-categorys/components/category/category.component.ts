import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Post } from '../../models/categoryPostResponse';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  nameCategory: string;

  categoryPosts: Post[];

  constructor(private _ac: ActivatedRoute,
              private _categoryServices : CategoryService,
              private _router: Router) { }

  ngOnInit(): void {
    this._ac.params.subscribe(params => this.nameCategory = params.name)
    this._categoryServices.getPostsOfCategory(this.nameCategory).subscribe( posts => this.categoryPosts = posts)
  }

  showPostForCastegory (){
  }

  goPosts(slug: string){
    this._router.navigateByUrl(`blog/${slug}`)
  }





}
