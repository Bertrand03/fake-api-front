import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './views/add-post/add-post.component';
import { EditPostComponent } from './views/edit-post/edit-post.component';
import { SinglePostComponent } from './views/single-post/single-post.component';
import { PostsComponent } from './views/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    EditPostComponent,
    SinglePostComponent,
    PostsComponent,
    PostFormComponent,
    ErrorsFormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService], // on met PostService pour en faire un singleton et le partager avec tout le monde
  bootstrap: [AppComponent]
})
export class AppModule { }
