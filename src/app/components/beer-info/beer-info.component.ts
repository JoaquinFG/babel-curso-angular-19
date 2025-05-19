import { Component, input, output } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-beer-info',
  imports: [ButtonModule],
  templateUrl: './beer-info.component.html',
  styleUrl: './beer-info.component.scss'
})
export class BeerInfoComponent {

  readonly beer = input<Beer | undefined>(undefined);
  readonly imageUrl = input<string | undefined>(undefined);
  readonly onClickBtn = output<void>();
  readonly infoButton = input<string>();

  handleClick() {
    this.onClickBtn.emit();
  }
}
