import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.api';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pack-opening-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pack-opening-section.component.html',
  styleUrl: './pack-opening-section.component.scss',
  providers: [HttpClientModule]
})
export class PackOpeningSectionComponent implements OnInit{
  data: any = [];

  private pokemonService = inject(PokemonService);

  ngOnInit() {
    this.pokemonService.getPokemon().subscribe((data) => {
      this.data = data;
      console.log(this.data)
    });
  }
}
