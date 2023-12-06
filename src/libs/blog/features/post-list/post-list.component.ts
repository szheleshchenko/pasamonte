import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PostComponent } from '@libs/blog/features/post';

@Component({
  standalone: true,
  selector: 'pas-post-list',
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss',
  imports: [PostComponent, CommonModule]
})
export class PostListComponent {
  @Input() posts: any;
}
