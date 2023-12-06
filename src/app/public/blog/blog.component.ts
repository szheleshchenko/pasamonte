import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostListComponent } from '@libs/blog/features/post-list';
import { BreadcrumbService } from '@libs/shared/utils/services/breadcrumb';
import { map } from 'rxjs';

@Component({
  standalone: true,
  selector: 'blog',
  templateUrl: './blog.html',
  imports: [PostListComponent, AsyncPipe]
})
export class BlogComponent implements OnInit {
  public posts$ = inject(ActivatedRoute).data.pipe(map(({ posts }) => posts.blogs));
  
  private breadcrumbService = inject(BreadcrumbService);

  public ngOnInit(): void {
    this.breadcrumbService.update([{
      title: 'Blog',
      routerLink: '/blog'
    }]);
  }
}
