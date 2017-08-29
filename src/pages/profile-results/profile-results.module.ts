import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileResultsPage } from './profile-results';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
  declarations: [
    ProfileResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileResultsPage),
    ComponentsModule
  ],
})
export class ProfileResultsPageModule {}
