import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post/post.service";
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  post: Post;

  constructor(private activatedRoute: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params.id; // Recupère le paramètre de la route se basant sur  "{path: 'posts/:id', component: SinglePostComponent}"

    this.postService
      .getPostAndComments(id)
      .then(
        (post: Post) => this.post = post
      );
  }

}
