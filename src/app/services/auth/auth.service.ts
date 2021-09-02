import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.token = new BehaviorSubject<string>('');
  }

  login(user: User): Promise<any> {

    return new Promise<any>(
      (res, rej) => {

        this.http
          .post('https://reqres.in/api/login', user.toJSON())
          .toPromise()
          .then((data: any) => {
            this.token.next(data.token);
            // @ts-ignore
            res();
          })
          .catch(() => {
            rej('Les identifiants sont incorrects');
          });
      }
    );
  }


  register(user: User): Promise<any> {

    return new Promise<any>(
      (res, rej) => {

        this.http
          .post('https://reqres.in/api/register', user.toJSON())
          .toPromise()
          .then((data: any) => {
            this.token.next(data.token);
            // @ts-ignore
            res();
          })
          .catch(() => {
            rej('Un problème est survenu');
          });
      }
    );
  }



  logout(): Promise<void> {

    return new Promise<void>(
      (res, rej) => {
        this.token.next('');
        res();
      }
    );
  }

}


