import { Component, DestroyRef, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { ButtonComponent } from '@libs/shared/ui/ui-kit/button';
import { PlatformService } from '@libs/shared/utils/services/platform';
import { filter } from 'rxjs';

@Component({
  standalone: true,
  selector: 'pas-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [RouterLink, RouterModule, ButtonComponent]
})
export class HeaderComponent implements OnInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private platformService = inject(PlatformService);

  public ngOnInit(): void {
    if (this.platformService.isPlatformServer) {
      return;
    }

    this.router.events.pipe(
      filter((event) => this.input.nativeElement.checked && event instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: () => this.closeMobileMenu()
    })
  }

  public closeMobileMenu(): void {
    this.input.nativeElement.checked = false;
  }
}
