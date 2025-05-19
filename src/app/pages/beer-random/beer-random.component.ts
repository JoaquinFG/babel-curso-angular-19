import { Component, computed, inject, signal } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BeerInfoComponent } from '../../components/beer-info/beer-info.component';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-beer-random',
  imports: [BeerInfoComponent],
  templateUrl: './beer-random.component.html',
  styleUrl: './beer-random.component.scss',
})
export class BeerRandomComponent {

  private readonly _beerService = inject(BeerService);

  infoButton = 'Generate';

  readonly randomBeer = signal<Beer | undefined>(undefined);
  readonly beerImage = computed(() =>{
    return this.randomBeer()?.image
      ? `https://punkapi.online/v3/images/${this.randomBeer()?.image}`
      : undefined
  })

  constructor() {
    this.loadRandomBeer();
  }

  loadRandomBeer() {
    this._beerService.getRandomBeer().subscribe((data) => {
      this.randomBeer.set(data);
    })
  }

  handleClickBtn() {
    this.loadRandomBeer();
  }

}
