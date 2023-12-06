import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogService } from '@libs/shared/data-access/api/blog';

export const postResolver: ResolveFn<any> = () => {
  return inject(BlogService).search();
};
