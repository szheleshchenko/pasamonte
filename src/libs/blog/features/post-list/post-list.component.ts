import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PostComponent } from '@libs/blog/features/post';
import { BlogService, Post } from '@libs/shared/data-access/api/blog';
import { Observable, map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'pas-post-list',
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss',
  imports: [PostComponent, CommonModule]
})
export class PostListComponent {
  public blogService = inject(BlogService);

  public posts$ = this.blogService.search().pipe(map(({ blogs }) => blogs)) as Observable<Array<Post>>;
}
