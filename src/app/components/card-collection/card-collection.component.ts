import { Component, OnInit, OnChanges } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-collection',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './card-collection.component.html',
  styleUrl: './card-collection.component.scss'
})
export class CardCollectionComponent implements OnInit, OnChanges { 
  storedPokemon: Pokemon[] = [];

  ngOnInit() {
    this.loadSavedPokemon();
  }

  ngOnChanges() {
    this.loadSavedPokemon();
  }

  loadSavedPokemon() {
    const data = localStorage.getItem('storedPokemon');
    if (data) {
      this.storedPokemon = JSON.parse(data);
    }
    console.log(this.storedPokemon, 'storedPokemon');
  }
}
