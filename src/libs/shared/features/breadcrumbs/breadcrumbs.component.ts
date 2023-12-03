import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { BreadcrumbService } from '@libs/shared/utils/services/breadcrumb';
import { PlatformService } from '@libs/shared/utils/services/platform';
import { filter } from 'rxjs';

@Component({
  standalone: true,
  selector: 'pas-breadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
  imports: [RouterModule, CommonModule]
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbService = inject(BreadcrumbService);
  public breadcrumbs = this.breadcrumbService.breadcrumbs;

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private platformService = inject(PlatformService);

  public ngOnInit(): void {
    if (this.platformService.isPlatformServer) {
      return;
    }
    
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: () => this.breadcrumbService.update([])
    })
  }
}
