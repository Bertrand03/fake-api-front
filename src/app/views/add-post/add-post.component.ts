import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post/post.service";
import {Post} from "../../models/post.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
  }

  addPost(postToAdd: Post): void {
    this.postService
      .addPost(postToAdd)
      .then((res) => {
        console.log(res);
        this.router.navigateByUrl('/');
      });
  }

}
