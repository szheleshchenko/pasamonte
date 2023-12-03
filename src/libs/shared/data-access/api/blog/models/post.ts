import { BaseEntity } from '@libs/shared/data-access/api-client';

// TODO: Replace hardcoded fields
export class Post extends BaseEntity<string> {
  public title!: string;
  public photo_url!: string;
  public content_text!: string;

  constructor(post: Partial<Post> = {}) {
    super(post);

    Object.assign(this, post);
  }
}
