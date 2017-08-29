import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubServiceProvider} from "../../providers/github.service";
import {User} from '../../models/user.interface';
import {Repository} from "../../models/repository.interface";


@IonicPage()
@Component({
  selector: 'page-profile-results',
  templateUrl: 'profile-results.html',
})
export class ProfileResultsPage {
  username: string;
  user: User;
  repositories: Repository[];

  constructor(private github: GithubServiceProvider, private navCtrl: NavController, private navParams: NavParams) {
  }

  getUserInformation(): void {
    this.github.mockGetUserInformation(this.username).subscribe((data: User) => this.user = data);
    this.github.mockGetRepositoryInformation(this.username).subscribe((data: Repository[]) => this.repositories = data);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if(this.username) {
      this.getUserInformation();
    }
  }

}
