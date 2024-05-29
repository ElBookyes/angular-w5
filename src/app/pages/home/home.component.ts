import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.api';
import { Results } from '../../models/pokeapi';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private pokemonService = inject(PokemonService);

  pokemonList: Results[] = [];

  ngOnInit(): void {
    this.pokemonService.getPokemonById("1");
  }
}
