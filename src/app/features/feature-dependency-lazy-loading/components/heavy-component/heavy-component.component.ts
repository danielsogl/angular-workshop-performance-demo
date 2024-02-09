import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { isDate } from 'moment';

@Component({
  selector: 'app-heavy-component',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './heavy-component.component.html',
  styleUrl: './heavy-component.component.scss'
})
export class HeavyComponentComponent {
  constructor() {
    console.log(isDate(new Date()));
  }
}
