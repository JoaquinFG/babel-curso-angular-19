import { Component, input } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-beer-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './beer-card.component.html',
  styleUrl: './beer-card.component.scss'
})
export class BeerCardComponent {

  readonly beer = input<Beer | undefined>(undefined);
  readonly imageUrl = input<string | undefined>(undefined);

}
