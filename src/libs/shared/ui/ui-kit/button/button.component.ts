import { Component, Input } from '@angular/core';
import { ButtonTheme, ButtonVariant } from './types';

@Component({
  standalone: true,
  selector: 'pas-button',
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class ButtonComponent {
  @Input() theme: ButtonTheme;
  @Input() variant: ButtonVariant;
  @Input() text?: string;

  constructor() {
    this.theme = 'primary';
    this.variant = 'outline';
  }
}
