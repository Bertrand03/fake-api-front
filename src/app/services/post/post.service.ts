import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import {Post} from "../../models/post.model";
import {forkJoin} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  // Methode qui recupere les posts en provenance de l'API

  getPosts(): Promise<Array<Post>> {

    // Observable vs Promise
    // Promise => One Shot
    // Observable => (talkie walkie), tant que le canal est ouvert on peut parler

    // RxJS -> AJAX avancé
    // pipe -> sert à transformer notre format JSON et les mapper pour renvoyer un tableau de type Post
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts') // On récupère les posts contenus dans l'url et on les affiche sous forme de Promise
      .pipe(
        map((res: any) => {
          return res.map((item: any) => Post.fromJSON(item));
        })
      )
      .toPromise();
  }

  // Methode qui recupere les posts en fonction de son id

  getPostAndComments(postId: number): Promise<any> {

    return forkJoin<any>([
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/' + postId), // On récupère les posts contenus dans l'url et on les affiche sous forme de Promise
    this.http
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`),
    ])
      .pipe(
        map((res: any) => {
          const post = res[0];
          const comments = res[1];

          post.comments = comments;

          return Post.fromJSON(post);
        })
      )
      .toPromise();
  }

  // Récupère le post de type Post pour en faire un objet JSON
  addPost(postToAdd: Post): Promise<any> {
    return this.http
      .post('https://jsonplaceholder.typicode.com/posts/', postToAdd.toJSON())
      .toPromise();
  }

  deletePost(postId: number): Promise<any> {
    return this.http
      .delete('https://jsonplaceholder.typicode.com/posts/' + postId)
      .toPromise();
  }

}
