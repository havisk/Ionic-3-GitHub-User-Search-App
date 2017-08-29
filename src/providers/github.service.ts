import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';


import {User} from '../models/user.interface';
import { Repository } from '../models/repository.interface';

import {USER_LIST} from '../mocks/user.mocks';
import {REPOSITORY_LIST} from "../mocks/repository.mocks";



@Injectable()
export class GithubServiceProvider {
  private baseUrl: string = "http://api.github.com/users";

  constructor(private  http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
      .do((data: Response) => console.log(data))
      .map((data: Response) => data.json())
      .do((data: Response) => console.log(data))
      .catch((error: Response) => Observable.throw(error.json().error || "Server error."))
  }

  /* finding the username from USER_LIST. equals username passed in
  returning results as observable */
  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0])
  }


  /* finding the repositories from REPOSITORY_LIST. equals username passed in
   returning results as observable */
  mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username))
  }

}
