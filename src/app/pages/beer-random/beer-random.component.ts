import { Component, computed, inject } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BeerInfoComponent } from '../../components/beer-info/beer-info.component';

@Component({
  selector: 'app-beer-random',
  imports: [BeerInfoComponent],
  templateUrl: './beer-random.component.html',
  styleUrl: './beer-random.component.scss',
})
export class BeerRandomComponent {

  private readonly _beerService = inject(BeerService);

  readonly randomBeer = toSignal(this._beerService.getRandomBeer(), { initialValue: undefined});
  readonly beerImage = computed(() =>{
    return this.randomBeer()?.image
      ? `https://punkapi.online/v3/images/${this.randomBeer()?.image}`
      : undefined
  })

}
