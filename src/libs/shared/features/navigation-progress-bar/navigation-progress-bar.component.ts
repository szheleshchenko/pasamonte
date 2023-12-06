import { Component, OnInit, ViewChild, inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationSkipped,
  NavigationStart,
  Router,
  RouterModule
} from '@angular/router';
import { PlatformService } from '@libs/shared/utils/services/platform';
import { NgProgressComponent } from 'ngx-progressbar';
import { filter, map, switchMap, take } from 'rxjs';
import { navigationProgressBarConfig } from './config';

@Component({
  standalone: true,
  selector: 'pas-navigation-progress-bar',
  templateUrl: './navigation-progress-bar.html',
  imports: [RouterModule, NgProgressComponent]
})
export class NavigationProgressBarComponent implements OnInit {
  @ViewChild(NgProgressComponent, { static: true }) progressBar!: NgProgressComponent;

  private router = inject(Router);
  private platformService = inject(PlatformService);

  public ngOnInit(): void {
    if (this.platformService.isPlatformServer) {
      return;
    }

    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationStart),
        map(() => setTimeout(() => this.progressBar.start(), navigationProgressBarConfig.animationDelayMs)),
        switchMap((timeoutId) => this.router.events.pipe(
          filter(
            (e) =>
              e instanceof NavigationEnd ||
              e instanceof NavigationCancel ||
              e instanceof NavigationSkipped ||
              e instanceof NavigationError
          ),
          take(1),
          map(() => timeoutId)
        ))
      )
      .subscribe((timeoutId) => {
        this.progressBar.complete();
        clearTimeout(timeoutId);
      });
  }
}
