import { Injectable, signal } from '@angular/core';
import { Breadcrumb } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  public breadcrumbs = signal<Array<Breadcrumb>>([]);

  public update(breadcrumbs: Array<Breadcrumb>): void {
    this.breadcrumbs.update(() =>
      breadcrumbs.length ? [{ title: 'Home', routerLink: '/' }, ...breadcrumbs] : breadcrumbs
    );
  }
}
