import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../services/post/post.service";
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute,
              private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id; // si id s'était appelé "toto", on aurait mis "toto"
    this.postService
      .getPost(+id)
      .then((post: Post) => this.post = post);
  }

  /**
   *Method called by the output
   * @param post
   */
  editPost(postToEdit: Post) {
    this.postService
      .editPost(postToEdit)
      .then((res: any) => {
        console.log(res);
        this.router.navigate(['posts', postToEdit.id]);
      })

  }

}
