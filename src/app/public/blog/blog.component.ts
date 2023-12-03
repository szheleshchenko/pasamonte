import { Component, OnInit, inject } from '@angular/core';
import { PostListComponent } from '@libs/blog/features/post-list';
import { BreadcrumbService } from '@libs/shared/utils/services/breadcrumb';

@Component({
  standalone: true,
  selector: 'blog',
  templateUrl: './blog.html',
  imports: [PostListComponent]
})
export class BlogComponent implements OnInit {
  private breadcrumbService = inject(BreadcrumbService);

  public ngOnInit(): void {
    this.breadcrumbService.update([{
      title: 'Blog',
      routerLink: '/blog'
    }]);
  }
}
