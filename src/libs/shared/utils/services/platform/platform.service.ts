import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private platformId = inject(PLATFORM_ID);

  public get isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public get isPlatformServer(): boolean {
    return isPlatformServer(this.platformId);
  }
}
