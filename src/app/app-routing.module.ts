import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './views/posts/posts.component';
import {SinglePostComponent} from './views/single-post/single-post.component';
import {AddPostComponent} from "./views/add-post/add-post.component";


const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'posts/add', component: AddPostComponent}, // Bien passer la route statique en premier, c'est a dire 'posts/add' avant 'posts/:id'. Id étant un paramètre il peut prendre add pour un id
  {path: 'posts/:id', component: SinglePostComponent},
  {path: 'posts', component: PostsComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
