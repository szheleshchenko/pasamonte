import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

// TODO: Implement functionality

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private httpClient = inject(HttpClient);

  public search(): Observable<any> {
    return this.httpClient.get('https://api.slingacademy.com/v1/sample-data/blog-posts');
  }
}
