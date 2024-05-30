import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon.model';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { fadeInOut } from '../../animations/fadeInOut';

@Component({
  selector: 'app-pack-opening-section',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, RouterLink],
  templateUrl: './pack-opening-section.component.html',
  styleUrl: './pack-opening-section.component.scss',
  providers: [HttpClientModule],
  animations: [fadeInOut],
})
export class PackOpeningSectionComponent {
  data: Pokemon[] = [];
  storedPokemon: Pokemon[] = [];
  private pokemonService = inject(PokemonService);
  isAnimating = false;
  isPackOpened = false;

  openPack() {
    this.pokemonService.getRandomPokemon().subscribe((data) => {
      this.data = data;
      console.log(this.data, 'data');
    });
    localStorage.setItem('storedPokemon', JSON.stringify(this.data));
  }

  togglePack(): void {
    this.isPackOpened = true;
    this.animateCircle();
  }

  testFunc() {
    console.log(this.isPackOpened, 'isPackOpened');
  }

  animateCircle() {
    this.isAnimating = false;
    setTimeout(() => {
      this.isAnimating = true;
    }, 0);
  }

  resetPack() {
    this.data = [];
    this.isPackOpened = false;
  }
}
