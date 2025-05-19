import { Component, input } from '@angular/core';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-beer-info',
  imports: [],
  templateUrl: './beer-info.component.html',
  styleUrl: './beer-info.component.scss'
})
export class BeerInfoComponent {

  readonly beer = input<Beer | undefined>(undefined);
  readonly imageUrl = input<string | undefined>(undefined);

}
