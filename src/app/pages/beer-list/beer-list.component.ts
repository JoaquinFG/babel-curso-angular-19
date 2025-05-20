import { Component, inject, signal } from '@angular/core';
import { BeerService } from '../../services/beer.service';
import { BeerCardComponent } from '../../components/beer-card/beer-card.component';
import { Beer } from '../../models/beer.model';
import { BeerToolbarComponent } from '../../components/beer-toolbar/beer-toolbar.component';

@Component({
  selector: 'app-beer-list',
  imports: [BeerCardComponent, BeerToolbarComponent],
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {

  private readonly beerservice = inject(BeerService);
  
  readonly beers = signal<Beer[] | undefined>(undefined);

  constructor(){
    this.loadBeers(1);
  }

  loadBeers(page: number) {
    this.beerservice.getBeersByPage(page).subscribe({
      next: (data) => {
        this.beers.set(data)
      },
      error: (err) => {
        console.error(err)
      },
      complete: () => {
        console.log('Carga de cervezas finalizada');
      }
    })
  }

}
