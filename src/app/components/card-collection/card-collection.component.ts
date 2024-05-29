import { Component } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.scss'
})
export class CardCollectionComponent {
  savedPokemon: Pokemon[] = [];

  ngOnInit() {
    this.loadSavedPokemon();
  }

  loadSavedPokemon() {
    this.savedPokemon = JSON.parse(localStorage.getItem('savedPokemon') || '[]');
  }
}
