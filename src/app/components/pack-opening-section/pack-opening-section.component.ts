import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.api';
import { CardCollectionService } from '../../services/card-collection.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Pokemon } from '../../models/pokemon.model';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { fadeInOut } from '../../animations/fadeInOut';
import { LoadingComponentComponent } from '../loading-component/loading-component.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-pack-opening-section',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, LoadingComponentComponent, RouterLink, PaginationComponent],
  templateUrl: './pack-opening-section.component.html',
  styleUrl: './pack-opening-section.component.scss',
  providers: [HttpClientModule],
  animations: [fadeInOut],
})
export class PackOpeningSectionComponent implements OnInit, OnDestroy {
  data: Pokemon[] = [];
  storedPokemon: Pokemon[] = [];
  isAnimating = false;
  isPackOpened = false;
  isLoading = false;

  private pokemonService = inject(PokemonService);
  private cardCollectionService = inject(CardCollectionService);

  ngOnInit(): void {
    document.body.classList.add('body-overflow-hidden')
  }

  ngOnDestroy(): void {
    document.body.classList.remove('body-overflow-hidden')
  }

  openPack() {
    this.isLoading = true;
    this.pokemonService.getRandomPokemon().subscribe((data) => {
      this.data = data;
      this.cardCollectionService.updateCards(data);
      this.isLoading = false;
    });
  }

  togglePack(): void {
    this.isPackOpened = true;
    this.animateCircle();
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
