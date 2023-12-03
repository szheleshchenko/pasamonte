import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'pas-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  public year = new Date().getFullYear();
}
