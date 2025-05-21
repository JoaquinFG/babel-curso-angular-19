import { Component, signal } from '@angular/core';
import { BeerCardComponent } from '../../components/beer-card/beer-card.component';
import { Beer } from '../../models/beer.model';

@Component({
  selector: 'app-beer-local',
  imports: [BeerCardComponent],
  templateUrl: './beer-local.component.html',
  styleUrl: './beer-local.component.scss'
})
export class BeerLocalComponent {

  beers = signal<Beer[]>([]);

  constructor() {
    this.loadBeers();
  }

  loadBeers() {
    try {
      const beers = JSON.parse(localStorage.getItem('beers') || '[]');
      if (beers.length > 0) {
        this.beers.set(beers);
      }
    } catch (error) {
      this.beers.set([]);
    }
  }
}
