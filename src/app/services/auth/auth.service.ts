import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../models/user.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Subject => Observable, sur lequel il faut ouvrir un tuyau pour récupérer la valeur qui transite
  // mais il est simple puisqu'il ne garde aucun cache

  // BehaviorSubject => Subject + il garde la dernière valeur en cache et quand on va ouvrir le tuyau
  // de connexion, par défaut, il va nous renvoyer la dernière valeur en cache

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


