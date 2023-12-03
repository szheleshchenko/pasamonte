import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'public',
  templateUrl: './public.html',
  imports: [RouterOutlet]
})
export class PublicComponent {}
