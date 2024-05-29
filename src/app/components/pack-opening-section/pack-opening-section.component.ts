import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon.model';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pack-opening-section',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, RouterLink],
  templateUrl: './pack-opening-section.component.html',
  styleUrl: './pack-opening-section.component.scss',
  providers: [HttpClientModule]
})
export class PackOpeningSectionComponent {
  data: Pokemon[] = [];
  storedPokemon: Pokemon[] = [];
  private pokemonService = inject(PokemonService);

  openPack() {
    this.pokemonService.getRandomPokemon().subscribe((data) => {
      this.data = data;
      console.log(this.data, 'data');
    });
    localStorage.setItem('storedPokemon', JSON.stringify(this.data));
  }
}
