import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {

  username: string;

  constructor(private navCtrl: NavController, public navParams: NavParams) {
  }

  getUserInformation(): void {
    this.navCtrl.push('ProfileResultsPage', {
      username: this.username
    })
  }
}
