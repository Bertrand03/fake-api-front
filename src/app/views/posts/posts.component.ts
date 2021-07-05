import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<any>;

  nbCols: number;
  cols: Array<any>;
  nbRows: number;
  rows: Array<any>;
  constructor(private postService: PostService) {
    this.nbCols = 2;
    this.cols =  new Array<any>(this.nbCols).fill(null);
  }

  ngOnInit(): void {

    this.postService.
    getPosts()
      .then(res => {
        this.posts = res;

        this.nbRows = Math.ceil(this.posts.length / this.nbCols);
        this.rows =  new Array<any>(this.nbRows).fill(null);
      });
  }

  getPostIndex(iR: number, iC: number): number {
    return iR * this.nbCols + iC;
  }

}
