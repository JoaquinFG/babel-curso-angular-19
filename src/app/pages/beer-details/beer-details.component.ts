import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../services/beer.service';
import { BeerInfoComponent } from '../../components/beer-info/beer-info.component';

@Component({
  selector: 'app-beer-details',
  imports: [BeerInfoComponent],
  templateUrl: './beer-details.component.html',
  styleUrl: './beer-details.component.scss'
})
export class BeerDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly beerService = inject(BeerService);

  readonly id = this.route.snapshot.paramMap.get('id') ?? '';

  infoButton = "Atrás"

  readonly beer = toSignal(this.beerService.getBeerById(this.id), { initialValue: null });
  readonly beerImage = computed(() =>{
    return this.beer()?.image
      ? `https://punkapi.online/v3/images/${this.beer()?.image}`
      : undefined
  })

  handleClickBtn() {
    window.history.back();
  }

}
