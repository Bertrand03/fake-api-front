import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<any>;

  nbCols: number;
  nbRows: number;

  constructor() {

    this.posts = [];
  }

  ngOnInit(): void {
  }

}
