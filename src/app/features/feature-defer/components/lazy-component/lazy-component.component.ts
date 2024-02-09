import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-lazy-component',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './lazy-component.component.html',
  styleUrl: './lazy-component.component.scss'
})
export class LazyComponentComponent {
  @Input({ required: true }) title!: string;
}
