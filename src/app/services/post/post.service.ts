import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Promise<any> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .toPromise();
  }

}
