import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import {Post} from "../../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Promise<Array<Post>> {

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

}
