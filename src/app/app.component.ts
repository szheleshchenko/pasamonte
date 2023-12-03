import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcrumbsComponent } from '@libs/shared/features/breadcrumbs';
import { FooterComponent } from '@libs/shared/features/footer';
import { HeaderComponent } from '@libs/shared/features/header';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, HeaderComponent, FooterComponent, BreadcrumbsComponent]
})
export class AppComponent {}
