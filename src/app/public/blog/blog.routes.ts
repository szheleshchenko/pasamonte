import { Routes } from '@angular/router';
import { postResolver } from '@libs/blog/data-access/resolvers/post';
import { BlogComponent } from './blog.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    resolve: { posts: postResolver }
  }
];
