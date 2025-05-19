import { Component, input, output, signal } from '@angular/core';
import { Beer } from '../../models/beer.model';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-beer-info',
  imports: [ButtonModule, ProgressSpinnerModule],
  templateUrl: './beer-info.component.html',
  styleUrl: './beer-info.component.scss'
})
export class BeerInfoComponent {

  readonly beer = input<Beer | undefined>(undefined);
  readonly imageUrl = input<string | undefined>(undefined);
  readonly onClickBtn = output<void>();
  readonly infoButton = input<string>();

  isImageLoading = signal(true);
  
  handleImageLoad() {
    this.isImageLoading.set(false);
  }

  handleClick() {
    this.isImageLoading.set(true);
    this.onClickBtn.emit();
  }
}
