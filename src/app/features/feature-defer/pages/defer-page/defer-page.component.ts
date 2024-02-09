import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LazyComponentComponent } from '../../components/lazy-component/lazy-component.component';

@Component({
  selector: 'app-defer-page',
  standalone: true,
  imports: [MatCardModule, LazyComponentComponent],
  templateUrl: './defer-page.component.html',
  styleUrl: './defer-page.component.scss'
})
export class DeferPageComponent {

}
export default DeferPageComponent;
