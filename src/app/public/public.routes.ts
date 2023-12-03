import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.routes').then((module) => module.routes)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.routes').then((module) => module.routes)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.routes').then((module) => module.routes)
      }
    ]
  }
];
