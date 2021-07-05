import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './views/posts/posts.component';
import {SinglePostComponent} from "./views/single-post/single-post.component";


const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'posts/:id', component: SinglePostComponent},
  {path: 'posts', component: PostsComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
