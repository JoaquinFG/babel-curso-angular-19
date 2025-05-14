import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-beer-random',
  imports: [],
  templateUrl: './beer-random.component.html',
  styleUrl: './beer-random.component.scss',
})
export class BeerRandomComponent implements OnInit {

  private readonly _beerService = inject(BeerService);

  randomBeer: Beer | undefined;
  beerImage: string | undefined;

  constructor(){
  }
  
  ngOnInit(): void {
    this._beerService.getRandomBeer().subscribe((data) => {
      this.randomBeer = data;
      this.beerImage = `https://punkapi.online/v3/images/${data.image}`
    });
  }

}
