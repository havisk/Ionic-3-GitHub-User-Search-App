import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import {User} from '../models/user.interface';
import { Repository } from '../models/repository.interface';

import {USER_LIST} from '../mocks/user.mocks';
import {REPOSITORY_LIST} from "../mocks/repository.mocks";



@Injectable()
export class GithubServiceProvider {

  constructor() {
    console.log('Hello GithubServiceProvider Provider');
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
