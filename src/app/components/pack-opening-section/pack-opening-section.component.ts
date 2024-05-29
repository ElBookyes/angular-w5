import { Component, OnInit, inject } from '@angular/core';
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

  // ngOnInit() {
  //   this.openPack();
  // }

  openPack() {
    this.pokemonService.getRandomPokemon().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
    this.storePokemon();
  }

  storePokemon() {
    const storedPokemon = this.getStoredPokemon();
    this.data.forEach(pokemon => {
      storedPokemon.push(pokemon);
    });
    localStorage.setItem('storedPokemon', JSON.stringify(storedPokemon));
    this.loadStoredPokemon();
  }

  getStoredPokemon(): Pokemon[] {
    return JSON.parse(localStorage.getItem('storedPokemon') || '[]');
  }

  loadStoredPokemon() {
    this.storedPokemon = this.getStoredPokemon();
  }
}
