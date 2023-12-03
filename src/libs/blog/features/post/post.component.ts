import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '@libs/shared/data-access/api/blog';

@Component({
  standalone: true,
  selector: 'pas-post',
  templateUrl: './post.html',
  styleUrl: './post.scss',
  imports: [RouterModule]
})
export class PostComponent {
  @Input() post!: Post;
}
