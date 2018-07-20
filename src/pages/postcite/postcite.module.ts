import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostcitePage } from './postcite';

@NgModule({
  declarations: [
    PostcitePage,
  ],
  imports: [
    IonicPageModule.forChild(PostcitePage),
  ],
})
export class PostcitePageModule {}
