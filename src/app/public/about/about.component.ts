import { Component, OnInit, inject } from '@angular/core';
import { BreadcrumbService } from '@libs/shared/utils/services/breadcrumb';

@Component({
  standalone: true,
  selector: 'about',
  templateUrl: './about.html'
})
export class AboutComponent implements OnInit {
  private breadcrumbService = inject(BreadcrumbService);

  public ngOnInit(): void {
    this.breadcrumbService.update([{
      title: 'About',
      routerLink: '/about'
    }]);  
  }
}
