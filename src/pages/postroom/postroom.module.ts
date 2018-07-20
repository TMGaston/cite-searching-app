import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostroomPage } from './postroom';

@NgModule({
  declarations: [
    PostroomPage,
  ],
  imports: [
    IonicPageModule.forChild(PostroomPage),
  ],
})
export class PostroomPageModule {}
